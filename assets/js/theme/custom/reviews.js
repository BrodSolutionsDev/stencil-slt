import { defaultModal } from '../global/modal';

/**
 * Opens the full review in the theme's shared #modal when a truncated
 * review's "Read More" button is clicked.
 */
export function initReviewReadMore() {
    $('body').on('click', '[data-review-read-more]', (event) => {
        event.preventDefault();

        const $review = $(event.currentTarget).closest('.productReview');
        const content = $review.find('[data-review-full-content]').html();
        const modal = defaultModal();

        modal.open({ size: 'small', pending: false });
        modal.updateContent(`<div class="productReview-modal">${content}</div>`, { wrap: true });
    });
}

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
