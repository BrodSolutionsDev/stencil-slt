/**
 * The core Review component (theme/product/reviews.js) force-collapses the
 * product reviews section on every page load unless the URL is a
 * "#product-reviews" pagination link. Client wants reviews visible by
 * default, so re-expand the section right after Review's constructor runs.
 */
export default function expandProductReviews() {
    const $toggle = $('#product-reviews [data-collapsible]');
    const $content = $('#productReviews-content');

    if (!$content.length) {
        return;
    }

    $toggle.addClass('is-open').attr('aria-expanded', 'true');
    $content.addClass('is-open').attr('aria-hidden', 'false');
}
