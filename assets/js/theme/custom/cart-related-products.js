/* eslint-disable no-console */
import PageManager from '../page-manager';
import { fetchRelatedProducts } from './graphql/fetch-products';
import utils from '@bigcommerce/stencil-utils';

export default class CustomersAlsoBought extends PageManager {
    async onReady() {
        try {
            const { cartItems: items, storefrontApiToken: token } = this.context;
            // eslint-disable-next-line camelcase
            const results = await Promise.allSettled(items.map(async ({ product_id: productId }) => fetchRelatedProducts(productId, token)));
            const cartItems = results
                .filter((result) => result.status === 'fulfilled')
                .map((result) => result.value)
                .flat()
                .filter(Boolean);
            const itemIds = cartItems.map((item) => item.entityId);

            // if id is already in cart, skip
            for (const product of cartItems) {
                if (itemIds.includes(product.entityId.toString())) {
                    const index = cartItems.indexOf(product);
                    cartItems.splice(index, 1);
                }
            }

            const $cardContainer = $('#related-products-upsell');

            const productPromises = cartItems.map((item) =>
                new Promise((resolve, reject) => {
                    console.log(item);
                    utils.api.search.search(
                        item.name,
                        { template: 'search/product-listing' },
                        (err, response) => {
                            if (err) return reject(err);

                            const $searchResults = $(response);
                            const $foundProduct = $searchResults
                                .find(`[data-entity-id='${item.entityId}']`)
                                .parent();

                            if ($foundProduct.length) {
                                $foundProduct.find('a[href]').each((i, link) => {
                                    const $link = $(link);
                                    $link.attr('href', $link.attr('href').split('?')[0]);
                                });

                                resolve($foundProduct); // already a jQuery element
                            } else {
                                console.log(`couldn't find products by: Name[${item.name}] ID[${item.entityId}]`);
                                resolve(null);
                            }
                        },
                    );
                }));

            const products = (await Promise.all(productPromises)).filter(Boolean);

            if ($cardContainer.hasClass('slick-initialized')) {
                $cardContainer.slick('unslick');
                $cardContainer.empty();
            }

            products.slice(0, 4).forEach(($el) => $cardContainer.append($el));

            // Initialize Slick after DOM is ready
            if (products.length > 0) {
                $('.products-upsell').show();

                $cardContainer.slick({
                    dots: false,
                    infinite: false,
                    mobileFirst: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 1,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToScroll: 1,
                                slidesToShow: 4,
                                rows: 1,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToScroll: 1,
                                slidesToShow: 3,
                                rows: 1,
                            },
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToScroll: 1,
                                slidesToShow: 2,
                                rows: 1,
                            },
                        },
                        {
                            breakpoint: 0,
                            settings: {
                                slidesToScroll: 1,
                                slidesToShow: 1,
                                rows: 1,
                            },
                        },
                    ],
                });
            }
        } catch (err) {
            throw Error(err.message, err);
        }
    }
}
