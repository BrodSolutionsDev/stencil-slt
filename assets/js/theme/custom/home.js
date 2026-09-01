import PageManager from '../page-manager';
import utils from '@bigcommerce/stencil-utils';

export default class Home extends PageManager {
    onReady() {
        const template = 'custom/home/product-slider';
        const urlKey = 'productsByCategoryTabs';
        $('[data-products-by-category-tabs]').each((i, placeholder) => {
            this.productSlider($(placeholder), template, urlKey);
        });

        this.syncNavDropdownOpenClass();
    }

    // header.scss drops .heroCarousel behind the header (z-index: -1) only
    // while a nav dropdown is open, to dodge a Safari GPU-layer bug where
    // the carousel can otherwise paint over an open .navPage-subMenu. That
    // rule is keyed off body.nav-dropdown-open, toggled here rather than a
    // `body:has(.navPage-subMenu.is-open)` selector, because Safari doesn't
    // reliably re-run hit-testing when a :has() match changes from a class
    // toggle deep in the menu markup.
    //
    // Checking .navPage-subMenu.is-open alone isn't a reliable signal:
    // Stencil leaves that class in the markup for the current section's
    // "expanded" state even when nothing is actually being shown as an
    // overlaying flyout, so a plain class check marked the carousel as
    // endangered (and clickless) from the very first paint. It also misses
    // other flyout types entirely - the "Shop" mega-cat panel
    // (.mega-cat-dropdown) shows/hides via its own class/inline-style
    // toggle, not .navPage-subMenu.is-open, so it wasn't being detected as
    // "open" and the carousel never dropped behind it.
    //
    // Rather than chase every flyout's own open-state mechanism, check
    // whether any of them is actually rendered *and* overlapping the
    // carousel - a closed one reports a zero-size rect via
    // getBoundingClientRect() and gets ignored automatically, regardless of
    // whether "closed" means display: none, a missing .is-open class, or
    // just being positioned off past the edge of the menu.
    syncNavDropdownOpenClass() {
        const $menu = $('#menu');
        const $heroCarousel = $('.heroCarousel');
        if (!$menu.length || !$heroCarousel.length) { return; }

        const heroEl = $heroCarousel[0];
        const flyoutSelector = '.navPage-subMenu, .mega-cat-dropdown';

        const syncClass = () => {
            const heroRect = heroEl.getBoundingClientRect();
            const isOverlapping = $menu.find(flyoutSelector).toArray().some((el) => {
                const rect = el.getBoundingClientRect();
                return rect.width > 0
                    && rect.height > 0
                    && rect.bottom > heroRect.top
                    && rect.top < heroRect.bottom
                    && rect.right > heroRect.left
                    && rect.left < heroRect.right;
            });
            document.body.classList.toggle('nav-dropdown-open', isOverlapping);
        };

        syncClass();

        // Watch both class and inline style, since a flyout can be shown
        // via a toggled class (.is-open) or via jQuery .show()/.hide()
        // writing directly to the style attribute.
        new MutationObserver(syncClass).observe($menu[0], {
            attributes: true,
            attributeFilter: ['class', 'style'],
            subtree: true,
        });

        // Geometry can change without any attribute mutation (e.g. the page
        // is scrolled or resized while a flyout is open), so keep it in
        // sync on those too.
        window.addEventListener('resize', syncClass);
        window.addEventListener('scroll', syncClass, { passive: true });
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
