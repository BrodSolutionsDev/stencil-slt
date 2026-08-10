import PageManager from '../page-manager';
import utils from '@bigcommerce/stencil-utils';

export default class Home extends PageManager {
    onReady() {
        const template = 'custom/home/product-slider';
        const urlKey = 'productsByCategoryTabs';
        $('[data-products-by-category-tabs]').each((i, placeholder) => {
            this.productSlider($(placeholder), template, urlKey);
        });
    }

    productSlider($placeholder, tmpl, urlKey) {
        let template = tmpl;
        if ($placeholder.data('urltemplate')) { template = $placeholder.data('urltemplate'); }
        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^\/]+/, '');

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            if ($placeholder.find('.trustpilot-widget')) {
                $placeholder.find('.trustpilot-widget').each(function loadWidget() {
                    window.Trustpilot.loadFromElement(this);
                });
            }

            // init products carousel
            $('[data-slick]', $placeholder)
                .slick();
            // cardGallery();
            // productCountDown();
        });
    }
}
