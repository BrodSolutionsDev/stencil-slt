import PageManager from '../page-manager';

class InfiniteScroll {
    constructor(container, loadingIndicator) {
        this.currentPage = 2;
        this.isLoading = false;
        this.stopFetching = false;
        this.container = container;
        this.loadingIndicator = loadingIndicator;
    }

    async loadNextPage() {
        const res = await fetch(`${this.nextPageURL(this.currentPage)}`);
        const nextRes = await fetch(`${this.nextPageURL(this.currentPage + 1)}`);
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        return {
            products: doc.querySelectorAll('#product-listing-container .productGrid > .product'),
            hasNextPage: nextRes.status < 300,
        };
    }

    nextPageURL(page) {
        const url = window.location.href;
        return url.includes('?') ? `${url}&page=${page}` : `${url}?page=${page}`;
    }

    quitFetching() {
        this.loadingIndicator.style.display = 'none';
        this.isLoading = false;
        this.stopFetching = true;
    }
}

export default class LoadProducts extends PageManager {
    onReady() {
        const container = document.querySelector('#product-listing-container .productGrid');
        const loadingIndicator = document.getElementById('loading-products');
        const infiniteScroll = new InfiniteScroll(container, loadingIndicator);

        window.addEventListener('scroll', async () => {
            if (container.children.length < this.context.categoryProductsPerPage) {
                infiniteScroll.quitFetching();
            }

            if (infiniteScroll.isLoading || infiniteScroll.stopFetching) return;

            const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500;
            if (nearBottom) {
                infiniteScroll.isLoading = true;
                loadingIndicator.style.display = 'flex';

                const { products, hasNextPage } = await infiniteScroll.loadNextPage();

                products.forEach(p => {
                    const product = p;
                    product.className = container.children[0].className;
                    container.appendChild(product);
                });

                if (!hasNextPage) {
                    infiniteScroll.quitFetching();
                }

                loadingIndicator.style.display = 'none';
                infiniteScroll.isLoading = false;
                infiniteScroll.currentPage++;
            }
        });
    }
}
