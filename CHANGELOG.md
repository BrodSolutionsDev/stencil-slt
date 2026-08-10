# Changelog
## 1.2.3 (2021-12-17)
  - Customer Requests:
    - Corrected issue with Add To Cart Button action when products are not available for purchase within online store.
      - Updated Files:
        - templates/components/products/add-to-cart.html
        - lang/en.json
        - assets/scss/vault.scss

## 1.2.2 (2021-12-10)
  - Updates to Core Theme:
    - Updated JS directory:
    - Updated all JS files with latest Cornerstone version
    - Updated package.json with latest Cornerstone version

## 1.2.1 (2021-12-10)
  - Customer Inquiries:
    - Font wrap correction in mobile menu
    - Special Charcters rendering: corrected on Account page:
    - Mobile menu subcategory fix: dropdown was acting erratically.
    - Lighthouse ADA Compliance work:
    - Cart Page upgraded from 80 to 94
    - Search Results Page upgraded from 62 to 90
    - Blog Page upgraded from 63 to 90
    - Brand Page with Filters Page upgraded lighthouse rating from 75 to 91

## 1.2.0 (2021-12-10)
BigCommerce Bug Report
Fix for “items that are not available for online purchase” error on product page:
– This has been corrected and “Add to Cart” button will not be visible if not available for online purchase.
– JS templates file updates, product-view.html update.
– This should correct the add to cart issues when it shouldn’t be present, when product are set to unavailable online, eliminating the strange error popup, resolving a lot of tickets.
THEME-2117
Out of stock product options on product page will not be visible, just as latest Cornerstone version behaves
– JS templates file updates, product-view.html update, css updates.
Lighthouse ADA Compliance work:
– focus element added for tabbing through elements, with theme editor option to change color and enable / disable:
– required ample styling throughout theme to make elements not jump when tabbing through, and adding theme editor settings.
Home page upgraded lighthouse rating from 81 to 92
Category Page upgraded lighthouse rating from 74 to 88
Product Page upgraded from 67 to 91
Create Account page upgraded from 84 to 95+

## 1.1.9 (2021-09-25)
Vault Theme Support
  - 'TESTGIN' being displayed next to tax totals line item in cart.
    - Updated Files:
      - templates/components/cart/totals.html

  - Vault - 1.1.4 - Unable to Enter Text on Search Bar on Mobile
    - Updated Files:
      - assets/scss/vault.scss

  - Space appearing above Theme Slider on Homepage after publishing changes.
    - Updated Files:
      - templates/components/common/header.html

  - Red X is out of alignment on product page
    - Updated Files:
      - assets/scss/vault.scss

  - Tool box positioning
    - Updated Files:
      - assets/scss/vault.scsss




## 1.1.8 (2021-07-27)
Bigcommerce Bug Report
  - Saving vaulted credit cards in Account pages not working for some gateways
    - Updated Files:
      - assets/js/theme/common/payment-method.js
      - templates/pages/account/add-payment-method.html
      - templates/pages/account/edit-payment-method.html

  - Vault - cart page displays truncated shipping options on Chrome
    - Updated Files:
      - assets/scss/vault.scss

  - Vault - When a default option is out of stock, an add to cart button does not appear for in-stock options
    - Updated Files:
      - assets/js/theme/common/product-details-base.js
      - templates/componenets/products/product-view.html

  - Vault - Payment Methods Do Not Show In Dropdown Menu
    - Updated Files:
      - templates/components/common/account-dropdown-signout.html

- Customer Support
  - Fix for: Quick view on mobile showing blank screen.
    - Updated Files:
      - /assets/scss/components/foundation/modal/_modal.scss

  - Fix for: NEWS & INFORMATION missing from search results
    - Updated Files:
      - /assets/js/theme/search.js



## 1.1.7 (2021-05-17)
- BigCommerce Bug Report
  - Image thumbnails on the blog landing page are overlapping one another in Vault (1.1.4 - 1.1.6)
    - Updated Files:
      - templates/pages/blog.html
      - /assets/scss/layouts/blog/_blog.scss

  - Replace SSL settings in Page builder with global region for SSL certificate.
    - Updated Files:
      - templates/components/common/footer.html
      - config.json
      - schema.json

  - Vault - missing "included_in_total" in lang file, causes this text to show on cart pages
    - Updated Files:
      - lang/en.json

  - Quick cart buttons misaligned
    - Updated Files:
      - /assets/scss/components/stencil/previewCart/_previewCart.scss

- Customer Support
  - Fix for: Search icon showing up offset on Firefox. Rendered properly in Chrome but not Firefox.
    - Updated Files:
      - /assets/scss/layouts/header/_header.scss


## 1.1.6 (2021-03-18)
- Customer Support
  - Fix for: Search icon showing up offset on Firefox. Rendered properly in Chrome but not Firefox.
    - Updated Files:
      - /assets/scss/layouts/header/_header.scss

## 1.1.5 (2021-03-15)
- BigCommerce Bug Report
  - PAYMENTS-4228 include currency_code field in the Account

  - Updated Files:
    - assets/js/theme/common/payment-method.js
    - templates/pages/account/add-payment-method.html
    - templates/pages/account/edit-payment-method.html

- Customer Support
  - Fix for: Paypal buttons not aligned on optimized checkout
    - Updated Files: /assets/scss/components/stencil/previewCart/_previewCart.scss
  - Fix for: arrows being rendered as html reference on homepage carousel
    - Updated Files: templates/components/carousel-content.html
  - Fix for: characters being rendered as html reference on search page
    - Updated Files: /templates/components/search/heading.html
  - Fix for: unable to tab through product options
    - Updated Files:
      - /templates/components/products/options/set-radio.html
      - /templates/components/products/options/set-rectangle.html
      - /templates/components/products/options/swatch.html
      - /templates/components/products/options/input-checkbox.html
      - /assets/js/theme/product.js
  - Fix for: Mobile Search disappearing on mobile
    - Updated Files:
      - /assets/scss/vault.scss
  - Fix for: Big White space below the carousel on mobile
    - Updated Files:
      - /templates/components/carousel.html
  - Fix for: Shop menu navigation allowing user to click past menu items resulting in blank white screen within the shop navigation
    - Updated Files:
      - /assets/js/theme/global/menu.js
  - Fix for: Search icon showing up offset on Firefox. Rendered properly in Chrome but not Firefox.
    - Updated Files:
      - /assets/scss/layouts/header/_header.scss

## 1.1.4 (2021-02-04)
- BigCommerce Bug Report
  - THEME-2039: Vault – Lonestar Templates – Theme Vertical Reassignments Completed.
    - Bright – “fashion_jewelry”
    - Cool – “sports_recreation”
    - Natural – “home_garden”

    - optimized_for” also updated on all variations to:
      - “multi_purpose”
      - “mobile_tablet_desktop”
      - “sales_discounts”
      - “large_catalog”

    - Updated Files:
      - config.json

- Customer Support
  - Fix for: search scroll bar and missing logo & hamburger menu on mobile & tablet devices after resizing window or toggling mobile or tablet view within theme editor.
    - Updated Files:
      - templates/components/common/footer.html

## 1.1.3 (2021-01-29)
- Customer Support
  - Fix for: shipping estimator "Add Info" link on cart page not functioning.
  - Fix for: remove items from cart and countpill not adjusting.
    - Updated Files: (all the following files have been updated updated with latest Cornerstone version 5.0.0.)
      - assets/js (entire directory updated with Cornerstone version 5.0.0, with the exception of the assets/js/theme/common/carousel/index.js. This file was copied over from the original assets/js/theme/common/carousel.js file and placed within the new assets/js/theme/common/carousel/index.js file. This was done so that all of the product carousels on the homepage continue to function.)
      - lang/en.json ("shipping_estimator" section updated with Cornestone version 5.0.0)
      - templates/components/cart (entire directory updated with Cornerstone version 5.0.0)
      - package.json (entire file updated with Cornerstone version 5.0.0)
      - package-lock.json (entire file updated with Cornerstone version 5.0.0)
      - webpack.common.js (entire file updated with Cornerstone version 5.0.0)
      - webpack.dev.js (entire file updated with Cornerstone version 5.0.0)
      - webpack.prod.js (entire file updated with Cornerstone version 5.0.0)

  - Product card and inc/dec button border colors have been restored to orginal theme design.
    - Updated Files:
      - assets/scss/vault.scss


## 1.1.2 (2021-01-08)
- New Features & Functionality
  - Added modal before switching currencies that warns Gift Certificates & Promotions tied to other currencies will not be available.

  - Added Persistent Admin Bar when logged in.
    - Added Files:
      - assets/js/theme/global/adminBar.js
      - assets/scss/components/stencil/adminBar
      - assets/icons/admin-brush.svg
      - assets/icons/admin-close.svg
      - assets/icons/admin-edit.svg
      - assets/icons/admin-link.svg
      - assets/icons/admin-tooltip.svg
    - Updated Files:
    - schema.json
    - config.json
    - lang/en.json
    - assets/js/theme/global.js
    - assets/scss/settings/stencil/maintenanceNotice/_settings.scss
    - assets/scss/components/_components.scss
    - templates/layout/base.html
    - templates/layout/blog.html
    - templates/layout/checkout.html
    - templates/layout/home.html
    - templates/layout/product.html

- BigCommerce Bug Report
  - THEME-2023: Vault – Blog post previews can be misaligned depending on text in post. This has been corrected. Wrote scripts to set articles on blog page to equal heights. Also included script to recognize if image has been uploaded or not.
  - THEME-1995: Vault – Version: 1.0.9 Mobile Search doesn’t populate suggestions until selected again. I have applied a fix for this by adding a class when the search results have binded within the quick-search.js template.

- Customer Support
  - Rating Star color labels reversed for “empty” & “full” were reversed. This has been corrected.
    - Updated Files:
      - schema.json

  - Fix for special characters not rendering properly within facet search.
    - Updated Files:
      - templates/components/faceted-search/facets/hierarchy-children.html
      - templates/components/faceted-search/facets/hierarchy.html
      - templates/components/faceted-search/facets/multi.html
      - templates/components/faceted-search/show-more-facets.html

  - Fix for language translation error on category pages.
    - Updated Files:
      - lang/en.json

  - Fix for special characters not rendering properly on the cart popup and cart page.
    - Updated Files:
      - templates/components/cart/content.html
      - templates/components/cart/preview.html

  - Checkout Buttons (Amazon pay, Chase pay, Google Pay), etc.. have inline alignment on checkout page.
    - Updated Files:
      - assets/scss/vault.scss

  - Gradient for hero carousel content box has been restored from top to bottom.
    - Updated Files:
      - assets/scss/components/stencil/heroCarousel/_heroCarousel.scss

  - Added theme editor option for adjusting product thumbnails on product page. Note: this will only provide the ability to make them smaller, as they are already maxed out. I tested Cornerstone and it behaves in the same manner, only allowing the thumbnails to go as large as their individual thumbnail containers. Client’s needing larger thumbnails, will require customizations to adjust the layout and the spacing as well as the sizing of the thumbnail section on the product page.
    - Updated Files:
      - schema.json


## 1.1.1 (2020-11-19)
- BigCommerce Bug Report:
  - THEME-1981: Vault - Misaligned web page dropdowns in the navigation bar (this example of this issue was not our Vault theme.)
  - THEME-1987: Vault - Vault - Blog image size not honored on the blogpost page. Blog image size on the blog post page should now adhere to theme editor settings.
  - THEME-2013: Vault - Widgets overlapping content on mobile devices. Fix for global widgets overlapping on mobile has been applied.
  - THEME-1995: Vault - Vault - Version: 1.0.9 Search suggestions appear behind page builder widgets. Fix for search & search suggestion dropdown appearing behind widgets has been applied.

- Customer Support
  - Misaligned Search Icon. Magnifying glass position in search bar has been corrected.
  - Updated Files:</h5>
    - assets/scss/vault.scss


## 1.1.0 (2020-10-27)
- NEW FEATURES:
  - Global Page Builder Elements Added! Using the new global page builder regions within the header & footer areas, your custom added content will be visible throughout your site in those areas.
  - Updated Files:
    - templates/components/common/header.html
    - templates/components/common/footer.html

## 1.0.9 (2020-07-01)
- BigCommerce Bug Report
  - THEME-1981: Lonestar Templates – Update jQuery in Theme. Updated to jQuery version 3.5.1 in package.json, package-lock.json and footer.

  - THEME-1980: Vault - Special characters are not rendered for product review titles and text on storefront. Updated templates/components/products/reviews.html to contain triple braces and saniztize in these sections.

- Customer Support
  - Added Global Color settings to Theme Editor, found here: Global > Primary Color: Primary Color, Primary Hover Color, that should act as a catch-all for items styled with the primary and primary-light colors. Note: this will not replace the color controls we already have in place, but we have had it brought it to our attention that some buttons, including the list-view “compare” button text, the image “circle” selectors on the product page on hover, “view or edit your cart” button after adding to cart, Shipping & Coupon links on Cart page, amongst others were not adhering to theme editor changes. You should set these two settings to match your primary buttons and primary button hover colors.

  - Sticky nav colors in theme editor will now adjust on both desktop & mobile by using Sticky Nav settings.
Verified “Save this card for future transactions” checkbox when using Stripe Payment Gateway is working and styled correctly.
Verified “Gift Certificates” button and field are styled correctly throughout responsive window dragging, all the way down to mobile.

## 1.0.8 (2020-04-7)
- New Page Builder Features Included

- Customer Support
- Corrected the results message within quicksearch when it returns 0 results. The 0 was at the end. Corrected by setting the CSS to “direction: ltr;” on the element.
- Style fix for when checkbox options do not have a “field label and only have a “Display Title”. The “Display Title” will appear on its own line, above the checkbox as it is meant to appear as a title. When using a “field label”, the lable will appear on the same line as the corresponding checkbox to the right.
- We have added complete color options for the sticky nav, including the background-color, font-color, and font-hover-color.
- Fix for buggy mobile menu dropd-owns containing subcategories. This should correct the issue with items opening and the suddenly collapsing when attempting to expand. Also, clicking only the arrows will expand menu items, and clicking the text-link will send you to the corresponding page/category.
- z-index fix for modal windows. All modals wills now appear on top of main navigation.

## 1.0.7 (2019-10-23)
- Customer Addressed Issues
- Fix for un-clickable category links within Mega Nav flyout when there are nested categories beneath 3rd level.
- Fix for subcategory images on category pages appearing out of alignment in some instances. We have set a min-height for the text links beneath the images which will make the floated divs clear and align correctly as there is already a min-height set for the divs containing the images.
- Added Theme Editor options for independent control of Main Nav dropdown font-colors found here: Header & Footer > Main Navigation > Dropdown menu text color. This was only an issue when using white font setting for Main nav.
- Added Theme Editor options to hide/show product tabs on product page. Product Overview tab open by default.
- Added Theme Editor options to change mobile Nav icon colors. Found here: Mobile.

- BigCommerce Bug Report
- THEME-1890: Fix for: Vault – 2 deep level categories become unresponsive when using Simple Dropdown Menu display. This has been corrected. When simple dropdown setting is active, Flyout will work as expected and only display levels 1-3.
- THEME-1891: Fix for: Vault – Customizing theme to show product reviews results in hiding the reviews. This has been corrected so that when Theme Editor option within Products > Display Settings > “Show product reviews” is toggled it will hide/show accordingly.
- THEME-1894: Fix for: Vault – Category links in Mega Menu are unresponsive if they exceed 3 sub-categories deep. This has been corrected and tested using both simple & alternate menu settings.
- THEME-1851: Fix for: Vault 1.0.5 – Special characters in Brand name appear at front of string in menu. This has been corrected with style added to set direction: ltr;

- Core files updated with files from Cornerstone 4.2.1
- .travis.yml
- Gemfile
- Gemfile.lock
- Gruntfile.js
- karma.conf.js
- lighthouse-config.js
- package-lock.json
- package.json
- stencil.conf.js
- webpack.common.js
- webpack.dev.js
- webpack.prod.js

- AMP files updated with files from Cornerstone 4.2.1
- /templates/components/amp
- /templates/layout/amp-iframe.html
- /templates/layout/amp.html
- /templates/pages/amp

- JS files updated with files from Cornerstone 4.2.1
- /assets/js

- SCSS files updated with files from Cornerstone 4.2.1
- All with exception to vault.scss & custom.scss

- Custom Template files updated with responsive-img code from Cornerstone 4.2.1
- /templates/products/card.html (responsive-img code added)
- /templates/layout/base.html: (script calls within head section above {{ getFontsCollection }} updated so lazyload product images will be visible on all product cards)
- /templates/layout/blog.html: (script calls within head section above {{ getFontsCollection }} updated so lazyload product images will be visible on all product cards)
- /templates/layout/checkout.html: (script calls within head section above {{ getFontsCollection }} updated so lazyload product images will be visible on all product cards)
- /templates/layout/home.html: (script calls within head section above {{ getFontsCollection }} updated so lazyload product images will be visible on all product cards)
- /templates/layout/product.html: (script calls within head section above {{ getFontsCollection }} updated so lazyload product images will be visible on all product cards)
- /templates/components/carousel.html (responsive-img code added)
- /templates/components/cart/content.html (responsive-img code added)
- /templates/components/cart/preview.html (responsive-img code added)
- /templates/components/common/cart-preview.html (responsive-img code added)
- /templates/components/products/list-item.html (responsive-img code added)
- /templates/components/products/modals/writeReview.html (responsive-img code added)
- /templates/components/products/options/product-list.html (responsive-img code added)
- /templates/components/products/product-view.html (responsive-img code added)
- /templates/pages/brand.html (responsive-img code added)
- /templates/pages/brands.html (responsive-img code added)
- /templates/pages/category.html (responsive-img code added)
- /templates/pages/compare.html (responsive-img code added)
- /templates/components/account/order-contents.html (responsive-img code added)
- /templates/components/account/orders-list.html (responsive-img code added)
- /templates/components/account (responsive-img code added)
- /templates/components/account/returns-list.html (responsive-img code added)
- /templates/components/blog/post-page.html (responsive-img code added)
- /templates/components/blog/post-post.html (responsive-img code added)



## Draft
## 1.0.6 (2019-09-06)
- BigCommerce Bug Report
- THEME-1829: Fix for: Subcategory image grid shows gaps when subcategory title occupies more than one line of text. Increased min height in stylesheet to correct the spacing issue when category title is more than one line.
- THEME-1832: Fix for: Next Button on Product Reviews does not work properly. Added custom jquery to scroll to and then activate the reviews tab when review pagination is clicked after page is loaded.
- THEME-1845: Fix for: Dropdown menu color cannot be modified. Active dropdown and active parent background color can now be controlled within Theme Editor found here: Main Navigation > Dropdown menu background. Default is set to white on all 3 variations.
- THEME-1797: Fix for on 6/21/19 in version 1.0.4. Incorrect auto-capitalization in place on Contact Form comment box. Removed text-transform: capitalize; rule from .form-input.
- THEME-1794: Fix for: Undersized Amazon Pay button on add to cart pop-up. Set amazonpay button height to inital in vault stylesheet.
- THEME-1816: Fix for: Out of Stock message unreadable due to inherit Theme Colors. Adjusted alertbox background-color for inventory out of stock notifications on product page when tracking inventory levels by options so that they are visible and readable.

- BigCommerce jQuery Version Update Request
- We have updated all jQuery versions to 3.4.1 and removed all unnecessary/duplicate jQuery calls. One hard-coded reference within the footer must remain due to conditional handlebar statements within custom jQuery, but has been updated to version 3.4.1.

- Updated call to 3.4.1: https://github.com/bigcommerce-themes/lonestar-vault/blob/master/templates/components/common/footer.html#L149
- ALL CALLS REMOVED: https://github.com/bigcommerce-themes/lonestar-vault/blob/master/templates/layout/base.html#L66
- ALL CALLS REMOVED: https://github.com/bigcommerce-themes/lonestar-vault/blob/master/templates/layout/blog.html#L66
- ALL CALLS REMOVED: https://github.com/bigcommerce-themes/lonestar-vault/blob/master/templates/layout/checkout.html#L58
- ALL CALLS REMOVED: https://github.com/bigcommerce-themes/lonestar-vault/blob/master/templates/layout/product.html#L65


## 1.0.5 (2019-06-28)
- Many revisions listed in the previous version (1.0.4) did not make it into the update so this version includes everything mentioned
in 1.0.4 as well as the following.
- Search placeholder changed to simply read "Search".
- Added Theme Editor option to toggle "Created by Lone Star Templates" within Footer.
- iPad hero images will now stretch full-width.


## 1.0.4 (2019-06-21)
- Fix for top of hero carousel being cut off. There was a negative margin set on the heroCarousel class, which has now been removed.
- Mega Nav button: Shop & burger icon hover color in main nav can now be modified using the setting in the theme editor located here: Header & Footer > Mega Navigation > Hover / Active color.
- All hover & active colors within the Mega Nav dropdown & flyout can now be modified using a single setting in the theme editor located here: Header & Footer > Mega Navigation > Hover / Active color.
- Top border color for sticky nav can now me modified in the theme editor located here: Header & Footer > Sticky Navigation > Sticky nav top-border color.
- Cleaned up the organization of theme editor options within the Header & Footer section.
- Added Theme Editor option for phone number color & phone number hover color in Main Navigation found here: Header & Footer > Main Navigation > Phone Number color, Phone Number hover color.
- Added Theme Editor option for cart counter color found here: Header & Footer > Main Navigation > Cart counter color.
- Mobile menu will now show all categories beyond 8.
- Added Theme Editor options to edit all colors and hover colors within the QuickSearch Results product cards found here: Products > Product cards (quick search).
- Adjusted option:checked color within config file so that selected color swatch on product page is apparent.
- Adjusted option:checked color within config file so that checkmark for product options is visible.
- Adjusted alertbox background-color for inventory out of stock notifications on product page when tracking inventory levels by options so that they are visible and readable.
- Character limits within text fields will now show a popup error when set requirements are not met after clicking add to cart button.
- Updated input-font-color within config.json file to #2f2f2b for all variations just like “Bright” variation so that text is more visible.
- Removed text-transform: capitalize; rule from .form-input.
- Qty increment / decrement boxes styling cleaned up.
- Updated js library, package.json, all webpack files, karma.config.js, manifest.json, & amp files to Cornerstone version 3.5.0
- THEME-1787: Fix for blog image overlapping blog text.

## 1.0.3 (2019-06-04)
- used specificity to ensure that our styles with the class of header refer only to the actual header. This was done in case the class header is used within the body as it was causing z-index issues with the flyout nav.
- z-index fix for mobile close action. This was an issue if at the top of the page.

## 1.0.2 (2019-05-29)
- Featured Banner fixes for Cool and Natural Variations within Theme Editor.
- z-index fixes for dropdowns within header and main navigation. There were certain scenarios where z-indexes were competing.

## 1.0.1 (2019-05-24)
- Correction of misspellings within meta images
- Fix for second-level categories within flyout. Removed collapsible attribute so that when clicked they will now go to their correct url.

## 1.0.0 (2019-05-23)
- Initial Launch
