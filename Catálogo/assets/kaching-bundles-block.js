(function() {
  try {
    if (typeof document != "undefined") {
      var Ot = document.createElement("style");
      Ot.id = "kaching-bundles-styles", Ot.appendChild(document.createTextNode(`.kaching-bundles__multiple-gifts-selector{position:relative}.kaching-bundles__multiple-gifts-selector__clickable-overlay{position:absolute;inset:0;cursor:pointer}.kaching-bundles .kaching-bundles__bundle-products{display:flex;justify-content:space-evenly;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4)}.kaching-bundles .kaching-bundles__bundle-products .kaching-bundles__bar-variant-selects{justify-content:center}.kaching-bundles .kaching-bundles__bundle-products__divider{display:flex;flex-direction:column;align-items:center;width:0;overflow:visible}.kaching-bundles .kaching-bundles__bundle-products__divider *{max-width:initial}.kaching-bundles .kaching-bundles__bundle-products__divider-line{display:flex;flex:1;width:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__bundle-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bundle-products__product{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;gap:5px;padding:12px}.kaching-bundles .kaching-bundles__bundle-products__product.kaching-bundles__bundle-products__product--placeholder{justify-content:center;text-align:center;font-size:13px;font-weight:700;color:#555}.kaching-bundles .kaching-bundles__bundle-products__wrapper{display:flex;align-items:center;gap:10px;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__content{display:flex;flex-direction:column;align-items:flex-start;min-width:0}.kaching-bundles .kaching-bundles__bundle-products__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__bundle-products__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bundle-products__image-placeholder{flex-shrink:0;height:50px;width:50px}.kaching-bundles .kaching-bundles__bundle-products__title{overflow-wrap:break-word;text-align:center;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__bundle-products__pricing{display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:center;align-items:baseline;gap:5px}.kaching-bundles .kaching-bundles__bundle-products__price{font-size:13px;font-weight:700;color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bundle-products__full-price{text-decoration:line-through;font-size:12px;color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bundle-products__unit-price{width:100%;text-align:center;font-size:12px;color:var(--bar-full-price-color, #555);text-transform:uppercase}.kaching-bundles .kaching-bundles__bundle-products--hidden{display:none}.kaching-bundles .kaching-bundles__bundle-products--vertical{flex-direction:column}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider{flex-direction:row;width:100%;height:0}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__divider-line{width:auto;height:1px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__product{flex-direction:row;justify-content:space-between;padding:14px 12px}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing{flex-direction:column;align-items:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__pricing--with-unit-price{flex-flow:row wrap;justify-content:flex-end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__unit-price{text-align:end}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__title{text-align:start}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bundle-products__image{width:50px;height:auto;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__bundle-products--vertical .kaching-bundles__bar-variant-selects{justify-content:flex-start}.kaching-bundles .kaching-bundles__mix-and-match-products{display:flex;flex-direction:column;margin-top:12px;margin-bottom:4px;border:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:calc(var(--bar-border-radius, 0) * 3 / 4);overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-products__divider{display:flex;flex-direction:row;align-items:center;gap:4px;width:100%;height:0;overflow:visible}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-line{display:flex;flex:1;width:auto;height:1px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon{display:flex}.kaching-bundles .kaching-bundles__mix-and-match-products__divider-icon svg{color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__mix-and-match-product{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:12px;align-items:center;padding:12px}.kaching-bundles .kaching-bundles__mix-and-match-product__content{display:flex;flex-direction:column;gap:6px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-product__image-link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__image{flex-shrink:0;height:50px;width:auto;max-width:100%;border-radius:var(--kaching-bundle-products-image-border-radius, 0)}.kaching-bundles .kaching-bundles__mix-and-match-product__image-placeholder{height:50px;width:50px}.kaching-bundles .kaching-bundles__mix-and-match-product__title-link{align-self:flex-start;text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-product__title{overflow-wrap:break-word;text-align:start;font-size:13px;color:var(--bar-title-color);font-weight:var(--bar-title-font-weight, 700);font-style:var(--bar-title-font-style)}.kaching-bundles .kaching-bundles__mix-and-match-product__swap-button{display:inline-flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--bar-border-radius, 8px);background-color:var(--collection-product-button-color, #2b2b2b);color:var(--collection-product-button-text-color, #ffffff);font-size:13px;line-height:1.2;text-align:center;cursor:pointer;white-space:nowrap}.kaching-bundles .kaching-bundles__mix-and-match-products__placeholder{display:flex;align-items:center;justify-content:center;padding:14px 12px;color:#0006;font-style:italic}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__bar-main{gap:10px}.kaching-bundles .kaching-bundles__checkbox-upsells__upsell .kaching-bundles__selling-plan-select{margin-top:5px}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__checkbox.kaching-bundles__checkbox-upsells__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__checkbox-upsells__image{width:initial;max-width:50px;max-height:50px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;justify-content:center;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-multiple-gifts-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-multiple-gifts-modal__content{position:relative;z-index:10000;min-width:min(470px,95%);max-width:700px;max-height:calc(100dvh - 20px);width:100%;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__choose-multiple-gifts{display:flex;flex-direction:column;border-radius:10px;background-color:#fff;max-height:100%;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__header{display:flex;align-items:center;justify-content:space-between;padding:16px 16px 0;margin-block:2px 18px;color:var(--kaching-choose-multiple-gifts-text-color, #000);flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-multiple-gifts__products{display:flex;flex-direction:column;gap:16px;padding:0 16px;flex:1;overflow-y:auto;min-height:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{display:flex;align-items:center;justify-content:space-between;gap:20px}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{gap:12px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product{flex-direction:column;align-items:stretch;gap:12px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{display:flex;align-items:center;gap:12px;min-width:0;flex:1}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-container{gap:8px}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-multiple-gifts-photo-size, 100px);max-height:calc(var(--kaching-choose-multiple-gifts-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-multiple-gifts-text-size, 14px);color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selectors{display:flex;flex-direction:column;gap:8px;margin-top:8px;min-width:0;max-width:100%}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-row{display:flex;align-items:flex-start;gap:8px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-counter{display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:24px;height:24px;font-size:12px;color:#000}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-content{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-with-counter{display:flex;align-items:center;gap:8px;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__variant-selector-wrapper{flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-multiple-gifts-text-color, #000)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-multiple-gifts-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-multiple-gifts-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;display:flex;justify-content:center;align-items:center;border:none;font-weight:600;padding:10px 12px;line-height:1.4;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-multiple-gifts-button-size, 16px);background-color:var(--kaching-choose-multiple-gifts-button-color, #7f56d9);color:var(--kaching-choose-multiple-gifts-button-text-color, #fff)}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button{flex:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--disabled{background-color:#eaecf0;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-button--selected{display:flex;align-items:center;gap:8px;background-color:#fff;color:#414651;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:24px;margin-top:16px;padding:16px;border-top:1px solid #e5e5e3;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-text{font-size:14px;font-weight:400;color:#535862;white-space:nowrap}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-buttons{display:flex;gap:8px;flex:1;min-width:0}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;height:40px;min-width:80px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:1;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--cancel{background-color:#fff;border:1px solid #d5d7da;color:#414651}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm{background-color:#000;color:#fff}.kaching-bundles .kaching-bundles__choose-multiple-gifts__footer-button--confirm:disabled{background-color:#eaecf0;border:1px solid #e9eaeb;color:#98a2b3;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}@media (width <= 600px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{gap:8px}}@media (width <= 500px){.kaching-bundles .kaching-bundles__choose-multiple-gifts__product-actions{flex-direction:row-reverse;justify-content:space-between;flex-shrink:1}}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity{display:flex;align-items:center;justify-content:space-between;width:72px;height:42px;border:1px solid #d6d6d6;border-radius:8px;overflow:hidden}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button{all:unset;display:flex;align-items:center;justify-content:center;width:28px;height:100%;cursor:pointer;color:#424242}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button[aria-disabled=true]{opacity:.4;cursor:not-allowed}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-button img{filter:brightness(0) saturate(100%) invert(24%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(96%) contrast(89%)}.kaching-bundles .kaching-bundles__choose-multiple-gifts__gift-quantity-value{font-size:14px;font-weight:600;color:#414651}body:has(.kaching-bundles__choose-multiple-gifts-modal){overflow:hidden}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-mix-and-match-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__mix-and-match-choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__mix-and-match-choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-mix-and-match-choose-product-photo-size, 100px);max-height:calc(var(--kaching-mix-and-match-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-mix-and-match-choose-product-text-size, 14px);color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-mix-and-match-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-mix-and-match-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-mix-and-match-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__mix-and-match-choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-mix-and-match-choose-product-button-size, 16px);background-color:var(--kaching-mix-and-match-choose-product-button-color, #7f56d9);color:var(--kaching-mix-and-match-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__mix-and-match-choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__bar-collection-products{display:flex;flex-direction:column;gap:5px;margin-top:5px}.kaching-bundles .kaching-bundles__collection-product{display:flex;gap:16px;align-items:center;justify-content:space-between}.kaching-bundles .kaching-bundles__collection-product .kaching-bundles__bar-variant-names{display:none;margin-block:0}.kaching-bundles .kaching-bundles__collection-product__image--default{background-color:#fff;border:1px solid #e9e9e9;color:#000}.kaching-bundles .kaching-bundles__collection-product--require-selection{padding:8px;border-radius:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color)}.kaching-bundles .kaching-bundles__collection-product--require-selection .kaching-bundles__collection-product__image--default{border-color:var(--kaching-collection-breaks-require-selection-text-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert{display:flex;align-items:center;gap:8px;margin-top:10px;padding:8px 12px;border-radius:12px;font-size:12px;background-color:var(--kaching-collection-breaks-require-selection-background-color);color:var(--kaching-collection-breaks-require-selection-text-color)}.kaching-bundles .kaching-bundles__collection-breaks-alert__icon{flex-shrink:0;width:16px;height:16px}.kaching-bundles .kaching-bundles__collection-product__main{display:flex;gap:16px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__collection-product__content{display:flex;flex-direction:column;gap:3px;min-width:0}.kaching-bundles .kaching-bundles__collection-product__link{display:flex;flex-shrink:0;text-decoration:none}.kaching-bundles .kaching-bundles__collection-product__image{flex-shrink:0;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-collection-breaks-product-photo-size, 40px);border-radius:var(--kaching-collection-breaks-image-border-radius, 0)}.kaching-bundles .kaching-bundles__collection-product__title{font-size:16px;color:var(--kaching-collection-breaks-product-title-color, #000)}.kaching-bundles .kaching-bundles__collection-product__choose-product-image{cursor:pointer;line-height:0}.kaching-bundles .kaching-bundles__collection-product__choose-product-button{cursor:pointer;color:#fff;font-size:12px;line-height:1.4;padding:6px 14px;border-radius:8px;background-color:var(--kaching-collection-breaks-button-color, #333)}.kaching-bundles .kaching-bundles__collection-product__remove-button{display:flex;align-items:center;justify-content:center;height:24px;width:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product-modal{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-choose-product-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__choose-product-modal__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__choose-product{display:flex;flex-direction:column;padding:16px;border-radius:10px;background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__header{display:flex;align-items:center;justify-content:space-between;margin-block:2px 18px;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__heading{margin:0;font-weight:650;font-size:16px}.kaching-bundles .kaching-bundles__choose-product__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__products{display:flex;flex-direction:column;gap:16px}.kaching-bundles .kaching-bundles__choose-product__controls{display:flex;align-items:center;gap:10px;margin-bottom:14px}.kaching-bundles .kaching-bundles__choose-product__search-field{position:relative;flex:1 1 auto;min-width:0}.kaching-bundles .kaching-bundles__choose-product__search-icon{position:absolute;top:50%;left:12px;transform:translateY(-50%);width:16px;height:16px;pointer-events:none}.kaching-bundles .kaching-bundles__choose-product__search-input{box-sizing:border-box;width:100%;padding:10px 12px 10px 36px;border:1px solid #d5d7da;border-radius:8px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);background-color:#fff}.kaching-bundles .kaching-bundles__choose-product__sort{position:relative;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__sort-button{display:inline-flex;align-items:center;gap:8px;padding:10px 12px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:var(--kaching-choose-product-text-color, #000);font-size:14px;line-height:1;cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-icon{width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-menu{position:absolute;top:calc(100% + 6px);right:0;z-index:2;min-width:210px;display:flex;flex-direction:column;border:1px solid #d5d7da;border-radius:10px;background:#fff;box-shadow:0 8px 24px #10182824;overflow:hidden}.kaching-bundles .kaching-bundles__choose-product__sort-option{display:flex;align-items:center;justify-content:space-between;gap:12px;border:none;background:#fff;text-align:start;padding:10px 12px;font-size:14px;color:var(--kaching-choose-product-text-color, #000);cursor:pointer}.kaching-bundles .kaching-bundles__choose-product__sort-option-check{flex-shrink:0;width:16px;height:16px;display:block}.kaching-bundles .kaching-bundles__choose-product__sort-option:hover{background:#f8fafc}.kaching-bundles .kaching-bundles__choose-product__empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;color:#4b5565}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon-wrapper{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin-bottom:16px}.kaching-bundles .kaching-bundles__choose-product__empty-state-icon{width:48px;height:48px}.kaching-bundles .kaching-bundles__choose-product__empty-state-title{font-size:18px;font-weight:500;color:#181d27}.kaching-bundles .kaching-bundles__choose-product__empty-state-description{margin-top:8px;font-size:14px;color:#535862}.kaching-bundles .kaching-bundles__choose-product__empty-state-clear-button{margin-top:16px;padding:10px 16px;border:1px solid #d5d7da;border-radius:8px;background:#fff;color:#414651;font-size:14px;font-weight:600}.kaching-bundles .kaching-bundles__choose-product__product{display:flex;align-items:center;justify-content:space-between;gap:20px}.kaching-bundles .kaching-bundles__choose-product__product-container{display:flex;align-items:center;gap:12px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-image-link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__choose-product__product-image{display:flex;border-radius:8px;border:1px solid #e5e5e3;-o-object-fit:contain;object-fit:contain;height:auto;width:var(--kaching-choose-product-photo-size, 100px);max-height:calc(var(--kaching-choose-product-photo-size, 100px) * 2)}.kaching-bundles .kaching-bundles__choose-product__product-content{display:flex;flex-direction:column;gap:4px;min-width:0}.kaching-bundles .kaching-bundles__choose-product__product-link{text-decoration:none}.kaching-bundles .kaching-bundles__choose-product__product-title{overflow-wrap:break-word;font-weight:650;font-size:var(--kaching-choose-product-text-size, 14px);color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__subtitle{font-size:14px;font-weight:400;color:var(--kaching-choose-product-text-color, #000)}.kaching-bundles .kaching-bundles__choose-product__product-price-container{display:flex;gap:10px}.kaching-bundles .kaching-bundles__choose-product__product-price{font-size:14px;font-weight:650;color:var(--kaching-choose-product-price-color, #f04438)}.kaching-bundles .kaching-bundles__choose-product__product-compare-at-price{font-size:14px;font-weight:650;text-decoration:line-through;color:var(--kaching-choose-product-compare-at-price-color, #667085)}.kaching-bundles .kaching-bundles__choose-product__product-option-names.kaching-bundles__bar-variant-names{color:inherit;margin-block:0}.kaching-bundles .kaching-bundles__choose-product__product-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-shrink:0;border:none;font-weight:600;padding:12px;line-height:1.2;border-radius:8px;cursor:pointer;font-size:var(--kaching-choose-product-button-size, 16px);background-color:var(--kaching-choose-product-button-color, #7f56d9);color:var(--kaching-choose-product-button-text-color, #fff)}body:has(.kaching-bundles__choose-product-modal){overflow:hidden}.kaching-bundles .kaching-bundles__free-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__free-gift.kaching-bundles__free-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__free-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__free-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__free-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__free-gift__content--clickable{cursor:pointer}.kaching-bundles .kaching-bundles__free-gift__add-button{all:unset;display:flex;cursor:pointer;line-height:0;padding:4px;margin:-4px -4px -4px -6px;color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__add-button{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-text-color, #000);font-size:var(--kaching-free-gift-font-size, 13px);font-weight:var(--kaching-free-gift-font-weight, bold);font-style:var(--kaching-free-gift-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__text{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0)}.kaching-bundles .kaching-bundles__free-gift__full-price{flex-shrink:0;text-decoration:line-through;font-size:calc(var(--kaching-free-gift-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--kaching-free-gift-text-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift__full-price{color:var(--kaching-free-gift-selected-text-color, #fff)}.kaching-bundles .kaching-bundles__free-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__free-gift-summary{gap:8px;justify-content:flex-start}.kaching-bundles .kaching-bundles__free-gift-summary__images{display:flex;flex-shrink:0;align-items:center}.kaching-bundles .kaching-bundles__free-gift-summary__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-free-gift-image-height, 30px);border-radius:var(--kaching-free-gift-image-border-radius, 0);margin-inline-start:-8px;border:1px solid var(--kaching-free-gift-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__free-gift-summary__image:first-child{margin-inline-start:0}.kaching-bundles .kaching-bundles__free-gift-summary__image--no-border{border-color:transparent}.kaching-bundles .kaching-bundles__upsell{display:flex;align-items:center;justify-content:space-between;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);margin-inline:1px;gap:5px 10px;background-color:var(--kaching-upsell-background-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__upsell.kaching-bundles__upsell--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__upsell__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__upsell__link{display:flex;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__image{width:auto;height:var(--kaching-upsell-image-height, 30px);border-radius:var(--kaching-upsell-image-border-radius, 0)}.kaching-bundles .kaching-bundles__upsell__checkbox{all:unset;display:flex;flex-shrink:0;width:16px;height:16px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;margin-inline-end:4px;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__checkbox.kaching-bundles__upsell__checkbox--selected{border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__upsell__text{display:flex;min-height:30px;align-items:center;cursor:pointer;overflow-wrap:break-word;color:var(--kaching-upsell-text-color, #000);font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--kaching-upsell-font-weight, bold);font-style:var(--kaching-upsell-font-style, normal)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell__text{color:var(--kaching-upsell-selected-text-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing{align-items:flex-end;display:flex;flex-direction:column;flex-shrink:0}.kaching-bundles .kaching-bundles__upsell__pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__upsell__price{font-size:var(--kaching-upsell-font-size, 13px);font-weight:var(--bar-title-font-weight);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__upsell__pricing-row--secondary .kaching-bundles__upsell__price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px)}.kaching-bundles .kaching-bundles__upsell__full-price,.kaching-bundles .kaching-bundles__upsell__unit-price{font-size:calc(var(--kaching-upsell-font-size, 13px) - 1px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__upsell__full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__upsell__unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__free-gift{flex-direction:column;padding-inline-end:8px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__upsell__pricing{flex-direction:row;gap:5px;align-items:center}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-free-gift-selected-background-color, #000)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__free-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--kaching-upsell-selected-background-color, rgba(0, 0, 0, .2))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__upsell:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gifts{border-end-start-radius:var(--bar-border-radius);border-end-end-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift{display:flex;align-items:center;justify-content:space-between;margin-inline:1px;padding-block:7px;padding-inline:8px calc(15px * var(--block-spacing, 1) + 5px);gap:5px 10px;background-color:var(--bar-border-color, #fff)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:1px;border-end-start-radius:calc(var(--bar-border-radius) - 1px);border-end-end-radius:calc(var(--bar-border-radius) - 1px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__link{pointer-events:none}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main{display:flex;align-items:center;gap:calc(5px + 5px * var(--block-spacing, 1));min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__main:has(.kaching-bundles__swatch-buttons){overflow-x:auto}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__content{display:flex;align-items:center;gap:5px 15px;flex-wrap:wrap;min-width:0;flex:1}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__image{display:flex;flex-shrink:0;width:auto;height:var(--kaching-deal-bar-progressive-gift-image-size, 40px);border-radius:var(--kaching-deal-bar-progressive-gift-corner-radius, 0)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-text-color, #000);font-size:var(--kaching-deal-bar-progressive-gift-text-size, 14px)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-selected-text-color, #fff);font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__labels{display:flex;align-items:center;gap:5px}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-label-background-color);color:var(--kaching-deal-bar-progressive-gift-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-label-text-size, 12px);padding:2px 8px;border-radius:16px;white-space:nowrap;font-weight:500}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__label-crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon{display:flex;align-items:center;justify-content:center;color:var(--kaching-deal-bar-progressive-gift-locked-icon-color, #667085)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__lock-icon svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__text{color:var(--kaching-deal-bar-progressive-gift-locked-text-color, #555);font-size:var(--kaching-deal-bar-progressive-gift-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift--locked .kaching-bundles__deal-bar-progressive-gift__label{background-color:var(--kaching-deal-bar-progressive-gift-locked-label-background-color);color:var(--kaching-deal-bar-progressive-gift-locked-label-text-color);font-size:var(--kaching-deal-bar-progressive-gift-locked-label-text-size, 12px)}.kaching-bundles .kaching-bundles__deal-bar-progressive-gift__divider{height:1px;display:flex}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift{margin-inline:2px;padding-block:7px 6px;padding-inline:7px calc(15px * var(--block-spacing, 1) + 4px);background-color:var(--bar-selected-border-color)}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__deal-bar-progressive-gift:last-child{margin-block-end:2px;border-end-start-radius:calc(var(--bar-border-radius) - 2px);border-end-end-radius:calc(var(--bar-border-radius) - 2px)}.kaching-bundles .kaching-bundles__product-personalisation{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;gap:10px;background-color:#fafafa;border-radius:calc(var(--bar-border-radius, 10px) - 4px);border:1px dashed #d6d6d6;margin-top:12px;cursor:pointer}.kaching-bundles .kaching-bundles__product-personalisation--filled{border-style:solid}.kaching-bundles .kaching-bundles__product-personalisation__main{display:flex;align-items:center;gap:10px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__image-wrapper{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:var(--kaching-product-personalisation-image-height, 40px);height:var(--kaching-product-personalisation-image-height, 40px);background-color:#fff;border-radius:calc(var(--bar-border-radius, 10px) - 6px);border:1px solid #d6d6d6}.kaching-bundles .kaching-bundles__product-personalisation__image{display:flex;width:70%;height:70%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__product-personalisation__image--default{opacity:.7;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__content{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.kaching-bundles .kaching-bundles__product-personalisation__title{color:#000;font-size:14px;font-weight:600;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__subtitle{color:#555;font-size:13px;font-weight:400;font-style:normal}.kaching-bundles .kaching-bundles__product-personalisation__pricing{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0;gap:2px}.kaching-bundles .kaching-bundles__product-personalisation__price{font-size:14px;font-weight:500;font-style:normal;color:#000}.kaching-bundles .kaching-bundles__product-personalisation__compare-at-price{font-size:12px;font-weight:400;font-style:normal;color:#888;line-height:1.2;text-decoration:line-through}.kaching-bundles .kaching-bundles__product-personalisation__price .kaching-bundles__product-personalisation__unit-label{font-size:calc(var(--kaching-bundles-unit-label-font-size, 14px) - 4px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style, normal)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation{flex-direction:column;align-items:stretch;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__main{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__product-personalisation__pricing{flex-direction:row;justify-content:center;gap:8px;align-items:baseline}.kaching-bundles .kaching-bundles__personalisation-modal-overlay{position:fixed;z-index:9999;inset:0;display:flex;align-items:center;overflow-y:auto;padding:10px;text-align:start;line-height:1.4;background-color:var(--kaching-product-personalisation-overlay-color, rgba(0, 0, 0, .5))}.kaching-bundles .kaching-bundles__personalisation-modal-overlay--inline{position:relative;z-index:auto;inset:auto;padding:20px;border-radius:var(--kaching-product-personalisation-radius, 16px)}.kaching-bundles .kaching-bundles__personalisation-modal-overlay__content{position:relative;z-index:10000;margin:auto;min-width:min(470px,95%);max-width:700px;width:100%}.kaching-bundles .kaching-bundles__personalisation-modal{display:flex;flex-direction:column;padding:var(--kaching-product-personalisation-gap-0, 20px);border-radius:var(--kaching-product-personalisation-radius, 16px);background-color:#fff}.kaching-bundles .kaching-bundles__personalisation-modal__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--kaching-product-personalisation-gap-0, 20px);color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__heading{margin:0;font-weight:650;font-size:var(--kaching-product-personalisation-font-0, 24px)}.kaching-bundles .kaching-bundles__personalisation-modal__close{all:unset;display:flex;align-items:center;justify-content:center;margin-inline-end:-6px;width:24px;height:24px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__items{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-1, 16px);padding:var(--kaching-product-personalisation-gap-1, 16px);border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px)}.kaching-bundles .kaching-bundles__personalisation-modal__item{display:flex;flex-direction:column;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-info{display:flex;align-items:center;gap:var(--kaching-product-personalisation-gap-2, 12px)}.kaching-bundles .kaching-bundles__personalisation-modal__item-image-wrapper{flex-shrink:0;width:var(--kaching-product-personalisation-image-size, 48px);height:var(--kaching-product-personalisation-image-size, 48px);border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);border:1px solid #e9e9e9;overflow:hidden}.kaching-bundles .kaching-bundles__personalisation-modal__item-image{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__personalisation-modal__item-details{display:flex;flex-direction:column;gap:2px;min-width:0}.kaching-bundles .kaching-bundles__personalisation-modal__item-title{font-size:var(--kaching-product-personalisation-text-size, 16px);font-weight:600;color:var(--kaching-product-personalisation-primary-text-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__item-variant{font-size:var(--kaching-product-personalisation-font-3, 12px);color:var(--kaching-product-personalisation-secondary-text-color, rgb(115, 115, 115))}.kaching-bundles .kaching-bundles__personalisation-modal__input-wrapper{display:flex;flex-direction:column;gap:4px}.kaching-bundles .kaching-bundles__personalisation-modal__input-container{position:relative;display:flex;align-items:center}.kaching-bundles .kaching-bundles__personalisation-modal__input-clear{all:unset;position:absolute;right:12px;display:flex;align-items:center;justify-content:center;width:16px;height:16px;cursor:pointer}.kaching-bundles .kaching-bundles__personalisation-modal__input{width:100%;padding:10px 12px;border:1px solid #e9e9e9;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);outline:none!important;box-shadow:none!important;box-sizing:border-box}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus{border-color:#333;outline:none!important;box-shadow:none!important}.kaching-bundles .kaching-bundles__personalisation-modal__input:focus-visible{outline:2px solid #333!important;outline-offset:-1px}.kaching-bundles .kaching-bundles__personalisation-modal__input::-moz-placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input::placeholder{color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input--with-clear{padding-right:40px}.kaching-bundles .kaching-bundles__personalisation-modal__input--error{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input--error:focus{border-color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter{font-size:var(--kaching-product-personalisation-font-3, 12px);color:#999}.kaching-bundles .kaching-bundles__personalisation-modal__input-counter--error{color:var(--kaching-product-personalisation-error-color, rgb(240, 68, 56))}.kaching-bundles .kaching-bundles__personalisation-modal__actions{display:flex;gap:var(--kaching-product-personalisation-gap-1, 16px);margin-top:var(--kaching-product-personalisation-gap-0, 20px)}.kaching-bundles .kaching-bundles__personalisation-modal__button{flex:1;padding:12px 16px;border-radius:calc(var(--kaching-product-personalisation-radius, 16px) - 4px - 4px);font-size:var(--kaching-product-personalisation-font-2, 16px);font-weight:500;cursor:pointer;border:none;box-shadow:0 1px 2px #0a0d120d}.kaching-bundles .kaching-bundles__personalisation-modal__button--cancel{background:#fff;color:#333;border:1px solid #d5d7da}.kaching-bundles .kaching-bundles__personalisation-modal__button--confirm{color:var(--kaching-product-personalisation-button-text-color, rgb(255, 255, 255));border:1px solid var(--kaching-product-personalisation-button-color, rgb(0, 0, 0));background:var(--kaching-product-personalisation-button-color, rgb(0, 0, 0))}.kaching-bundles .kaching-bundles__personalisation-modal__button--disabled{cursor:not-allowed;border:1px solid #e9eaeb;background:#eaecf0;color:#98a2b3}.kaching-bundles .kaching-bundles__progressive-gifts{display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1) + 4px);margin-top:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__header{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__title{color:var(--kaching-bundles-progressive-gifts-title-color, #000);text-align:var(--kaching-bundles-progressive-gifts-title-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-title-weight, bold);font-style:var(--kaching-bundles-progressive-gifts-title-style, normal);font-size:var(--kaching-bundles-progressive-gifts-title-size, 20px)}.kaching-bundles .kaching-bundles__progressive-gifts__subtitle{color:var(--kaching-bundles-progressive-gifts-subtitle-color, #000);text-align:var(--kaching-bundles-progressive-gifts-subtitle-alignment, center);font-weight:var(--kaching-bundles-progressive-gifts-subtitle-weight, 450);font-style:var(--kaching-bundles-progressive-gifts-subtitle-style, normal);font-size:var(--kaching-bundles-progressive-gifts-subtitle-size, 16px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts{display:grid;grid-template-columns:repeat(auto-fit,minmax(0,1fr));justify-content:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift{position:relative;display:flex;flex-direction:column;align-items:center;padding:calc(10px * var(--block-spacing, 1));gap:calc(6px * var(--block-spacing, 1));border-radius:var(--kaching-bundles-progressive-gifts-border-radius);background-color:var(--kaching-bundles-progressive-gifts-background-color);box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-border-color, #000)}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked{background-color:var(--kaching-bundles-progressive-gifts-locked-background-color);box-shadow:inset 0 0 0 1px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3));cursor:pointer}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:hover,.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{box-shadow:inset 0 0 0 2px var(--kaching-bundles-progressive-gifts-locked-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--locked:focus{outline:none}.kaching-bundles .kaching-bundles__progressive-gifts__gift.kaching-bundles__progressive-gifts__gift--out-of-stock{opacity:.3}.kaching-bundles .kaching-bundles__progressive-gifts__gift__content{display:flex;flex-direction:column;max-width:100%;gap:calc(6px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper{display:flex;flex-shrink:0;align-items:center;justify-content:center;height:var(--kaching-bundles-progressive-gifts-image-size, 100px);width:initial;max-width:100%;margin-top:max(0px,(100px - var(--kaching-bundles-progressive-gifts-image-size, 100px)) / 5);color:var(--kaching-bundles-progressive-gifts-locked-icon-color, #667085);border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);background-color:transparent}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image-wrapper svg{width:auto;height:100%}.kaching-bundles .kaching-bundles__progressive-gifts__gift__image{-o-object-fit:contain;object-fit:contain;max-height:100%;max-width:100%;border-radius:calc(var(--kaching-bundles-progressive-gifts-border-radius) / 2);width:initial}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details{display:flex;flex-direction:column;gap:4px;align-items:center;min-width:0}.kaching-bundles .kaching-bundles__progressive-gifts__gift__details__content{display:flex;align-items:center;gap:8px}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title{font-weight:500;text-align:center;color:var(--kaching-bundles-progressive-gifts-text-color, #000);font-size:var(--kaching-bundles-progressive-gifts-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__title.kaching-bundles__progressive-gifts__gift__title--locked{color:var(--kaching-bundles-progressive-gifts-locked-text-color, #555);font-size:var(--kaching-bundles-progressive-gifts-locked-text-size, 14px)}.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__image,.kaching-bundles .kaching-bundles__progressive-gifts__gift:not(.kaching-bundles__progressive-gifts__gift--locked) .kaching-bundles__progressive-gifts__gift__title{animation:kaching-progressive-gift-unlock .6s ease-out}@keyframes kaching-progressive-gift-unlock{0%{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label{display:flex;flex-direction:row;align-items:center;position:absolute;top:-8px;left:50%;transform:translate(-50%);line-height:1;gap:calc(5px * var(--block-spacing, 1));padding:calc(8px * var(--block-spacing, 1));background-color:var(--kaching-bundles-progressive-gifts-label-background-color, #eee);border-radius:var(--kaching-bundles-progressive-gifts-border-radius)}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text{font-weight:450;color:var(--kaching-bundles-progressive-gifts-label-text-color, #777);font-size:var(--kaching-bundles-progressive-gifts-label-text-size, 12px);white-space:nowrap}.kaching-bundles .kaching-bundles__progressive-gifts__gift__label__text.kaching-bundles__progressive-gifts__gift__label__text--crossed-out{text-decoration:line-through}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift{flex-direction:row;justify-content:space-between;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__content{flex-direction:row;align-items:center;gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__details{align-items:flex-start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__image-wrapper{margin-top:0;height:var(--kaching-bundles-progressive-gifts-image-size, 50px);width:var(--kaching-bundles-progressive-gifts-image-size, 50px)}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__title{text-align:start}.kaching-bundles .kaching-bundles__progressive-gifts__gifts.kaching-bundles__progressive-gifts__gifts--vertical .kaching-bundles__progressive-gifts__gift__label{position:initial;transform:none}.kaching-bundles .kaching-bundles__scratch-off{position:relative;display:flex;flex-direction:column;gap:calc(10px * var(--block-spacing, 1));margin:calc(5px * var(--block-spacing, 1)) 0}.kaching-bundles .kaching-bundles__scratch-off>.kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__scratch-off--unscratched{-webkit-user-select:none;-moz-user-select:none;user-select:none}.kaching-bundles .kaching-bundles__scratch-off--unscratched .kaching-bundles__bar{pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off--revealing .kaching-bundles__bar-most-popular{animation:kaching-scratch-off-badge-pop .3s cubic-bezier(.34,1.56,.64,1) both}@keyframes kaching-scratch-off-badge-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.kaching-bundles .kaching-bundles__scratch-off--unscratched:not(.kaching-bundles__scratch-off--revealing) .kaching-bundles__bar-most-popular{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off--loading{visibility:hidden}.kaching-bundles .kaching-bundles__scratch-off-canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:var(--bar-border-radius, 8px);cursor:pointer;touch-action:none;transition:opacity .3s ease-out;z-index:11}.kaching-bundles .kaching-bundles__scratch-off-canvas--revealing{opacity:0;pointer-events:none}.kaching-bundles .kaching-bundles__scratch-off-hint{position:absolute;inset:0;margin:auto;width:calc(100% - 10px);height:calc(100% - 10px);max-width:317px;max-height:143px;pointer-events:none;opacity:.4;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-hint--hidden{opacity:0}.kaching-bundles .kaching-bundles__scratch-off-hint-path{stroke-dasharray:1200;stroke-dashoffset:1200;animation:kaching-scratch-off-hint-draw 2.8s cubic-bezier(.4,0,.2,1) infinite}@keyframes kaching-scratch-off-hint-draw{0%{stroke-dashoffset:1200;opacity:1}60%{stroke-dashoffset:0;opacity:1}80%{stroke-dashoffset:0;opacity:1}to{stroke-dashoffset:0;opacity:0}}.kaching-bundles .kaching-bundles__scratch-off-title{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;color:var(--scratch-off-title-color);font-weight:700;font-size:var(--scratch-off-title-size);line-height:1.25;text-align:center;pointer-events:none;transition:opacity .3s ease-out;z-index:12}.kaching-bundles .kaching-bundles__scratch-off-title--hidden{opacity:0}.kaching-bundles .kaching-bundles-sticky-atc{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px;box-shadow:0 0 10px #00000040;background-color:var(--kaching-bundles-sticky-atc-background-color, #fff)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__content{display:flex;align-items:center;gap:16px}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__image{width:auto;height:var(--kaching-bundles-sticky-atc-product-photo-size, 40px);border-radius:var(--kaching-bundles-sticky-atc-product-photo-corner-radius, 0)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__title{color:var(--kaching-bundles-sticky-atc-title-color, #000);font-size:var(--kaching-bundles-sticky-atc-title-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-title-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-title-font-weight, 400)}.kaching-bundles .kaching-bundles-sticky-atc .kaching-bundles-sticky-atc__button{all:unset;white-space:nowrap;cursor:pointer;background-color:var(--kaching-bundles-sticky-atc-button-color, #303030);color:var(--kaching-bundles-sticky-atc-button-text-color, #fff);font-size:var(--kaching-bundles-sticky-atc-button-font-size, 16px);font-style:var(--kaching-bundles-sticky-atc-button-font-style, normal);font-weight:var(--kaching-bundles-sticky-atc-button-font-weight, 400);padding:var(--kaching-bundles-sticky-atc-button-padding, 15px);border-radius:var(--kaching-bundles-sticky-atc-button-corner-radius, 8px)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal.kaching-bundles__bars{grid-template-columns:repeat(2,1fr)}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{padding:10px 7px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__bars--horizontal .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-container{border:2px dashed var(--bar-selected-border-color, #000);box-shadow:none}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-wrapper{margin:-2px}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--checkbox .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__title{display:inline-block;overflow-wrap:break-word;font-weight:700;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__subtitle{display:inline-block;overflow-wrap:break-word;font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-price{font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__bar-full-price{font-size:var(--kaching-subscriptions-subtitle-font-size, 13px);color:var(--kaching-subscriptions-subtitle-color, #555)}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__checkbox{all:unset;display:flex;flex-shrink:0;width:20px;height:20px;align-items:center;justify-content:center;cursor:pointer;background-color:#fff;color:var(--bar-selected-border-color);border-width:2px;border-style:solid;border-color:var(--bar-selected-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__subscriptions.kaching-bundles__subscriptions--link{display:flex;justify-content:center;align-items:center;padding:8px 0}.kaching-bundles .kaching-bundles__subscriptions .kaching-bundles__subscriptions__link{all:unset;cursor:pointer;display:inline;text-decoration:underline;text-underline-offset:3px;font-size:var(--kaching-subscriptions-title-font-size, 15px);color:var(--kaching-subscriptions-title-color, #000)}.kaching-bundles .kaching-bundles__timer{display:flex;align-items:center;background-color:var(--kaching-bundles-timer-background-color, #000);color:var(--kaching-bundles-timer-text-color, #fff);padding:10px 20px;border-radius:var(--bar-border-radius, 8px);margin-bottom:calc(8px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__timer-title{flex:1;text-align:var(--kaching-bundles-timer-title-alignment, center);font-size:var(--kaching-bundles-timer-title-size, 13px);font-weight:var(--kaching-bundles-timer-title-font-weight, bold);font-style:var(--kaching-bundles-timer-title-font-style, normal)}.kaching-bundles .kaching-bundles__swatch-dropdown{display:flex;position:relative;min-width:0;margin:0}.kaching-bundles .kaching-bundles__swatch{display:flex;flex-shrink:0;background-size:cover;background-position:center;overflow:hidden;position:relative;width:var(--kaching-swatch-size, 20px);height:var(--kaching-swatch-size, 20px);border:1px solid var(--kaching-swatch-border-color, #c2cdd6);background-color:var(--kaching-swatch-color, #fff);background-image:var(--kaching-swatch-image-url, none);border-radius:var(--kaching-swatch-border-radius, 0)}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable{border-color:#121212;opacity:.4}.kaching-bundles .kaching-bundles__swatch.kaching-bundles__swatch--unavailable:after{content:"";position:absolute;bottom:0;left:0;width:140%;height:1px;background-color:#121212;transform:rotate(-45deg);transform-origin:left}.kaching-bundles .kaching-bundles__swatches-dropdown__color{display:flex;width:20px;height:20px;border:1px solid #c2cdd6;background-size:cover;background-position:center}.kaching-bundles .kaching-bundles__swatch-dropdown__options{display:flex;flex-direction:column;max-width:400px;max-height:500px;overflow:auto;position:fixed;top:0;left:0;border:1px solid #ccc;background-color:#fff;z-index:1000;box-shadow:0 20px 20px #1a1a1a47}.kaching-bundles .kaching-bundles__swatch-dropdown__option{font-size:14px;font-weight:400;font-style:normal;display:flex;align-items:center;gap:10px;white-space:nowrap;padding-block:10px;padding-inline:10px 60px;border:none;border-bottom:1px solid #dfe3e8;cursor:pointer;color:#000;background:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:last-child{border-bottom:none}.kaching-bundles .kaching-bundles__swatch-dropdown__option:hover,.kaching-bundles .kaching-bundles__swatch-dropdown__option--focused{background-color:#f0f0f0}.kaching-bundles .kaching-bundles__swatch-buttons{display:flex;overflow:auto}.kaching-bundles .kaching-bundles__swatch-buttons__button{display:flex;align-items:center;box-sizing:border-box;border:none;padding:9px;background:#fff;cursor:pointer;border-top:1px solid var(--bar-border-color, rgba(0, 0, 0, .3));border-bottom:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:first-of-type{border-start-start-radius:var(--bar-variant-select-border-radius, 0);border-end-start-radius:var(--bar-variant-select-border-radius, 0);border-inline-start:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button:last-of-type{border-start-end-radius:var(--bar-variant-select-border-radius, 0);border-end-end-radius:var(--bar-variant-select-border-radius, 0);border-inline-end:1px solid var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected{padding:8px 7px;border:2px solid var(--bar-selected-border-color, #50b83c)}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:first-of-type{padding-inline-start:8px}.kaching-bundles .kaching-bundles__swatch-buttons__button.kaching-bundles__swatch-buttons__button--selected:last-of-type{padding-inline-end:8px}.kaching-bundles .kaching-bundles__quantity-selector{display:flex;width:-moz-fit-content;width:fit-content;border:1px solid #cccccc;box-sizing:border-box;overflow:hidden;margin-top:5px;border-radius:calc(var(--bar-border-radius, 0) / 2)}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button{display:flex;align-items:center;justify-content:center;width:30px;height:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:#fff;color:#000;border-radius:0}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button:hover{background-color:#eee}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled{cursor:not-allowed;pointer-events:none}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__button.kaching-bundles__quantity-selector__button--disabled img{opacity:.5}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input{all:unset;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;height:30px;width:30px;padding:0;border:1px solid #cccccc;border-top:none;border-bottom:none;background-color:#fff;color:#000;text-align:center;font-size:16px;font-weight:400;box-sizing:border-box}.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-outer-spin-button,.kaching-bundles .kaching-bundles__quantity-selector .kaching-bundles__quantity-selector__input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}.kaching-bundles .kaching-bundles__highlights{display:flex;flex-direction:column;gap:8px;padding:10px 0}.kaching-bundles .kaching-bundles__highlights__item{display:flex;gap:8px}.kaching-bundles .kaching-bundles__highlights__icon{display:flex;align-items:center;flex-shrink:0;color:var(--kaching-highlights-icon-color, #000);width:var(--kaching-highlights-icon-size, 16px);height:var(--kaching-highlights-icon-size, 16px)}.kaching-bundles .kaching-bundles__highlights__icon svg{width:100%;height:100%}.kaching-bundles .kaching-bundles__highlights__icon img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.kaching-bundles .kaching-bundles__highlights__text{color:var(--kaching-highlights-text-color, #808080);font-size:var(--kaching-highlights-text-size, 16px);line-height:1.3}.kaching-bundles .kaching-bundles__low-stock-alert{color:var(--kaching-bundles-low-stock-alert-text-color, #ff0909);font-size:14px}.kaching-bundles img{width:initial}.kaching-bundles svg{width:initial;height:initial}.kaching-bundles .kaching-bundles__block{display:flex;flex-direction:column;width:100%;margin-top:15px;margin-bottom:10px;text-align:start;line-height:1.4;font-family:var(--block-font-family, inherit)}.kaching-bundles .kaching-bundles__block--hidden{display:none!important}.kaching-bundles .kaching-bundles__block.kaching-bundles__block--loaded{display:flex}.kaching-bundles .kaching-bundles__block-title{display:flex;align-items:center;text-align:center;gap:8px;margin-top:10px;margin-bottom:10px;color:var(--block-block-title-color, #000);font-size:var(--block-title-font-size, 14px);font-weight:var(--block-title-font-weight, bold);font-style:var(--block-title-font-style)}.kaching-bundles .kaching-bundles__block>.kaching-bundles__block-title:first-child{margin-top:0}.kaching-bundles .kaching-bundles__block-title:before,.kaching-bundles .kaching-bundles__block-title:after{content:"";flex-grow:1;height:2px;background-color:var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bars{display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bar{display:flex;flex:1;margin:calc(5px * var(--block-spacing, 1)) 0;position:relative}.kaching-bundles .kaching-bundles__bar--disabled{opacity:.3}.kaching-bundles .kaching-bundles__bar-container--sold-out{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--kaching-bundles-show-as-sold-out-opacity, .3)}.kaching-bundles .kaching-bundles__bar-sold-out-badge{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:6px 12px;border-radius:8px;font-weight:600;background-color:var(--kaching-bundles-show-as-sold-out-background-color, #000);color:var(--kaching-bundles-show-as-sold-out-text-color, #fff);font-size:var(--kaching-bundles-show-as-sold-out-text-size, 13px);z-index:10;text-align:center}.kaching-bundles .kaching-bundles__bar>input[type=radio]{display:none}.kaching-bundles .kaching-bundles__bar-image{-o-object-fit:contain;object-fit:contain;height:var(--bar-image-size, 48px);width:var(--bar-image-size, 48px);border-radius:var(--bar-image-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-radio{display:flex;flex-shrink:0;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid #fff;box-sizing:border-box;box-shadow:0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-radio{background:var(--bar-selected-border-color, #000);box-shadow:0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-container{display:flex!important;flex-direction:column;justify-content:center;align-items:initial;position:relative;box-sizing:border-box;cursor:pointer;width:100%;margin:0;padding:0;border:none;background-color:var(--bar-background-color, #fff);border-radius:var(--bar-border-radius);box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-wrapper{padding:calc(10px * var(--block-spacing, 1)) calc(15px * var(--block-spacing, 1) + 5px)}.kaching-bundles .kaching-bundles__bar-container:hover{opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container:has(:focus-visible){opacity:1;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-container *{letter-spacing:normal;text-transform:initial}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container{cursor:default;background-color:var(--bar-selected-background-color);box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-most-popular{position:absolute;z-index:1}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--simple{top:-8px;right:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy{top:-27px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{top:-25px;right:-15px}.kaching-bundles .kaching-bundles__bar-most-popular--custom .kaching-bundles__bar-most-popular__custom-image{max-height:56px;width:auto;display:block}.kaching-bundles .kaching-bundles__bar-most-popular svg{color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular svg .most-popular-text{fill:var(--bar-most-popular-color)}.kaching-bundles .kaching-bundles__bar-most-popular__content{margin:0 8px;padding:6px 8px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-family:sans-serif;font-size:12px;font-weight:700;line-height:1;color:var(--bar-most-popular-color, #fff);background-color:var(--bar-most-popular-background-color)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before,.kaching-bundles .kaching-bundles__bar-most-popular__content:after{display:block;position:absolute;top:0;width:0;height:0;content:"";border-bottom:8px solid var(--bar-most-popular-background-color, transparent);filter:brightness(.7)}.kaching-bundles .kaching-bundles__bar-most-popular__content:before{left:0;border-left:8px solid transparent}.kaching-bundles .kaching-bundles__bar-most-popular__content:after{right:0;border-right:8px solid transparent}@media (width >= 750px){.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--fancy,.kaching-bundles .kaching-bundles__bar-most-popular.kaching-bundles__bar-most-popular--custom{right:-20px}}.kaching-bundles .kaching-bundles__bar-main{display:flex;align-items:center;gap:18px;min-height:55px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-main{cursor:pointer}.kaching-bundles .kaching-bundles__bar-content{align-items:center;justify-content:space-between;display:flex;gap:8px;flex:1}.kaching-bundles .kaching-bundles__bar-content-left{display:flex;flex-direction:column;flex:1;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-first-line{display:flex;flex-wrap:wrap;-moz-column-gap:8px;column-gap:8px;align-items:center}.kaching-bundles .kaching-bundles__bar-second-line{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px}.kaching-bundles .kaching-bundles__bar-title{display:inline-block;overflow-wrap:break-word;font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-label{display:inline-flex;align-items:center;justify-content:center;gap:4px;vertical-align:top;padding:4px 8px;overflow-wrap:break-word;background-color:var(--bar-label-background-color, #eee);color:var(--bar-label-color, #777);font-size:var(--bar-label-font-size, 12px);font-weight:var(--bar-label-font-weight);font-style:var(--bar-label-font-style);border-radius:var(--bar-border-radius)}.kaching-bundles .kaching-bundles__bar-subtitle{overflow-wrap:break-word;font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-subtitle-color, #555)}.kaching-bundles .kaching-bundles__bar-pricing{align-items:flex-end;display:flex;flex-direction:column}.kaching-bundles .kaching-bundles__bars--hide-prices .kaching-bundles__bar-pricing{display:none}.kaching-bundles .kaching-bundles__bar-pricing-row{display:flex;align-items:baseline;gap:6px}.kaching-bundles .kaching-bundles__bar-price{font-size:var(--bar-title-font-size, 20px);font-weight:var(--bar-title-font-weight, 500);font-style:var(--bar-title-font-style);color:var(--bar-price-color, #000)}.kaching-bundles .kaching-bundles__bar-price .kaching-bundles__bar-price__unit-label{font-size:var(--kaching-bundles-unit-label-font-size, 14px);font-weight:var(--kaching-bundles-unit-label-font-weight, normal);font-style:var(--kaching-bundles-unit-label-font-style)}.kaching-bundles .kaching-bundles__bar-pricing-row--secondary .kaching-bundles__bar-price{font-size:var(--bar-subtitle-font-size)}.kaching-bundles .kaching-bundles__bar-full-price,.kaching-bundles .kaching-bundles__bar-unit-price{font-size:var(--bar-subtitle-font-size, 14px);font-weight:var(--bar-subtitle-font-weight);font-style:var(--bar-subtitle-font-style);color:var(--bar-full-price-color, #555)}.kaching-bundles .kaching-bundles__bar-full-price{text-decoration:line-through}.kaching-bundles .kaching-bundles__bar-unit-price{text-transform:uppercase}.kaching-bundles .kaching-bundles__bar-variants{display:none;flex-direction:column;align-items:flex-start}.kaching-bundles .kaching-bundles__bar-variant{flex:1;max-width:100%}.kaching-bundles .kaching-bundles__bar-variants .kaching-bundles__bar-variant{margin-top:5px}.kaching-bundles .kaching-bundles__bar-variant__content{display:flex;align-items:center}.kaching-bundles .kaching-bundles__invalid-variant-error{color:red;font-size:12px;padding-bottom:2px}.kaching-bundles .kaching-bundles__bar-variant-names{font-size:12px;color:var(--bar-subtitle-color, #555);margin-block:3px}.kaching-bundles .kaching-bundles__bar-variant-names>span:not(:last-child):after{content:", "}.kaching-bundles .kaching-bundles__bar-variant-number{font-size:12px;margin-right:2px;min-width:20px;display:inline-flex;color:var(--bar-title-color, #000)}.kaching-bundles .kaching-bundles__bar-variant-image{width:initial;max-width:40px;max-height:40px;border-radius:calc(var(--bar-border-radius, 0) / 2);margin-right:7px}.kaching-bundles .kaching-bundles__bar-variant-selects{display:flex;min-width:0;margin-right:2px;margin-bottom:2px;flex-wrap:wrap;gap:7px}.kaching-bundles .kaching-bundles__bar-variant-select{font-size:14px;font-weight:400;font-style:normal;font-family:var(--block-font-family, inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:7px 25px 7px 7px;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;background-image:url("data:image/svg+xml;utf8,<svg width='10' height='4' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5 4L0.669872 0.25L9.33013 0.249999L5 4Z' fill='black'/></svg>")!important;background-repeat:no-repeat!important;background-position:right 8px center!important;background-color:#fff;background-size:initial;color:#000;outline:none;max-width:100%;width:auto;height:auto;min-height:auto;display:flex;align-items:center;gap:10px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--bar-border-color, rgba(0, 0, 0, .3));border-radius:var(--bar-variant-select-border-radius, 0)}.kaching-bundles .kaching-bundles__bar-variant-select span{overflow:hidden;text-overflow:ellipsis}.kaching-bundles .kaching-bundles__bar-variant-selector-wrapper{display:flex;flex-wrap:wrap;align-items:center;-moz-column-gap:10px;column-gap:10px;max-width:100%}.kaching-bundles .kaching-bundles__selling-plan-select{width:100%}.kaching-bundles .kaching-bundles__bar-selling-plan{margin-top:5px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select{box-shadow:0 0 0 1px red}.kaching-bundles .kaching-bundles__bar-variant-select:hover{border:none;box-shadow:inset 0 0 0 2px var(--bar-border-color, rgba(0, 0, 0, .3))}.kaching-bundles .kaching-bundles__bar-variant-select:focus{border:none;box-shadow:inset 0 0 0 2px var(--bar-selected-border-color, #000)}.kaching-bundles .kaching-bundles__bar-variant--invalid .kaching-bundles__bar-variant-select:is(:hover,:focus){box-shadow:0 0 0 2px red}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-variants{display:flex}.kaching-bundles .kaching-bundles__out-of-stock{background-color:#ff2d2d4d;border:1px solid #ff2c2c;color:#df2121;padding:8px 12px;margin:5px 0;font-size:14px}.kaching-bundles .kaching-bundles__bars--horizontal.kaching-bundles__bars{display:grid;grid-template-columns:repeat(var(--bundle-bars-per-row, 3),1fr);gap:calc(10px * var(--block-spacing, 1));overflow-x:auto}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar{position:relative}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 7px 10px;height:100%}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-main{flex-direction:column;gap:10px;text-align:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content{flex-direction:column}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-content-left{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-second-line{justify-content:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-label{position:absolute;top:0;left:0;right:0;margin-right:0;border-top-left-radius:var(--bar-label-border-top-radius);border-top-right-radius:var(--bar-label-border-top-radius)}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-pricing{align-items:center}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variants{align-items:center;margin-top:10px;margin-bottom:5px}.kaching-bundles .kaching-bundles__bars--horizontal .kaching-bundles__bar-variant-selector-wrapper{justify-content:center}.kaching-bundles .kaching-bundles__bars--grid.kaching-bundles__bars{display:grid;grid-template-columns:repeat(2,1fr);gap:calc(10px * var(--block-spacing, 1))}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar{margin:0}.kaching-bundles .kaching-bundles__bars--grid .kaching-bundles__bar-radio{display:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-container:hover,.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar--selected .kaching-bundles__bar-container{box-shadow:none}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-main{min-height:initial}.kaching-bundles .kaching-bundles__bars--plain .kaching-bundles__bar-pricing{flex-direction:row;gap:10px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-main{margin-top:7px;margin-bottom:7px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--fancy) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--custom) .kaching-bundles__bar-pricing{margin-top:18px}.kaching-bundles .kaching-bundles__bar--selected .kaching-bundles__bar-container:has(.kaching-bundles__bar-most-popular--simple) .kaching-bundles__bar-variants{margin-top:-7px}.kaching-bundles .kaching-bundles__bar-full-price:before,.kaching-bundles .kaching-bundles__bar-price:before{content:attr(data-a11y-label);position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}@media (prefers-reduced-motion: reduce){.kaching-bundles *,.kaching-bundles *:before,.kaching-bundles *:after{transition-duration:.01ms!important;animation-duration:.01ms!important}}`)), document.head.appendChild(Ot);
    }
  } catch (en) {
    console.error("vite-plugin-css-injected-by-js", en);
  }
})();
var D0 = Object.defineProperty, z0 = Object.getPrototypeOf, $0 = Reflect.get, pd = (Ot) => {
  throw TypeError(Ot);
}, A0 = (Ot, en, bn) => en in Ot ? D0(Ot, en, { enumerable: !0, configurable: !0, writable: !0, value: bn }) : Ot[en] = bn, fn = (Ot, en, bn) => A0(Ot, typeof en != "symbol" ? en + "" : en, bn), Ys = (Ot, en, bn) => en.has(Ot) || pd("Cannot " + bn), ye = (Ot, en, bn) => (Ys(Ot, en, "read from private field"), bn ? bn.call(Ot) : en.get(Ot)), wt = (Ot, en, bn) => en.has(Ot) ? pd("Cannot add the same private member more than once") : en instanceof WeakSet ? en.add(Ot) : en.set(Ot, bn), mt = (Ot, en, bn, Dl) => (Ys(Ot, en, "write to private field"), en.set(Ot, bn), bn), nn = (Ot, en, bn) => (Ys(Ot, en, "access private method"), bn), q0 = (Ot, en, bn) => $0(z0(Ot), bn, en);
(function(Ot) {
  var en, bn, Dl, Oi, li, Pr, si, Fi, Ba, oi, Ia, aa, ci, Li, Ei, jr, Ks, ji, zl, fr, Hn, Ri, Sr, Ma, Cr, rr, En, Br, ia, la, Rr, Da, sa, $l, Al, Zn, Xs, eo, Ni, Qi, ql, Nr, ar, ui, Wi, Vl, Tl, to, di, br, oa, Gl, Ui, no, ro, Ir, Mr, Qr, Ol, Dr, gi, Hi;
  String.prototype.replaceAll || (String.prototype.replaceAll = function(n, t) {
    if (typeof n == "string") {
      const r = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return this.replace(new RegExp(r, "g"), t);
    }
    if (n instanceof RegExp) {
      if (!n.global) throw new TypeError("replaceAll must be called with a global RegExp");
      return this.replace(n, t);
    }
    return this.replace(n, t);
  }), typeof window != "undefined" && ((Dl = (bn = (en = window.__svelte) != null ? en : window.__svelte = {}).v) != null ? Dl : bn.v = /* @__PURE__ */ new Set()).add("5");
  const Zi = "[!", ca = {}, kn = Symbol(), fd = !1;
  var hi = Array.isArray, bd = Array.prototype.indexOf, Fl = Array.from, Ji = Object.keys, ua = Object.defineProperty, da = Object.getOwnPropertyDescriptor, ao = Object.getOwnPropertyDescriptors, io = Object.prototype, vd = Array.prototype, Yi = Object.getPrototypeOf, lo = Object.isExtensible;
  const Wr = () => {
  };
  function _d(n) {
    return n();
  }
  function Ki(n) {
    for (var t = 0; t < n.length; t++) n[t]();
  }
  const pi = 16, Xi = 32, so = 64, ir = 256, Ll = 512, Bn = 1024, zr = 2048, ga = 4096, vr = 8192, za = 16384, El = 32768, $a = 65536, md = 1 << 17, oo = 1 << 19, jl = 1 << 21, kd = 1 << 22, ha = 1 << 23, $r = Symbol("$state"), co = Symbol("legacy props"), yd = Symbol(""), Rl = new class extends Error {
    constructor() {
      super(...arguments), fn(this, "name", "StaleReactionError"), fn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
    }
  }();
  function uo(n) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component");
  }
  function fi(n) {
    console.warn("https://svelte.dev/e/hydration_mismatch");
  }
  let Pt, ut = !1;
  function $n(n) {
    ut = n;
  }
  function yn(n) {
    if (n === null) throw fi(), ca;
    return Pt = n;
  }
  function lr() {
    return yn(or(Pt));
  }
  function w(n) {
    if (ut) {
      if (or(Pt) !== null) throw fi(), ca;
      Pt = n;
    }
  }
  function Ur(n = 1) {
    if (ut) {
      for (var t = n, r = Pt; t--; ) r = or(r);
      Pt = r;
    }
  }
  function el(n = !0) {
    for (var t = 0, r = Pt; ; ) {
      if (r.nodeType === 8) {
        var a = r.data;
        if (a === "]") {
          if (t === 0) return r;
          t -= 1;
        } else a !== "[" && a !== Zi || (t += 1);
      }
      var l = or(r);
      n && r.remove(), r = l;
    }
  }
  function go(n) {
    if (!n || n.nodeType !== 8) throw fi(), ca;
    return n.data;
  }
  function ho(n) {
    return n === this.v;
  }
  function tl(n, t) {
    return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
  }
  function xd(n, t) {
    return n !== t;
  }
  function po(n) {
    return !tl(n, this.v);
  }
  let Aa = !1;
  const wd = [];
  function Hr(n, t = !1, r = !1) {
    return nl(n, /* @__PURE__ */ new Map(), "", wd, null, r);
  }
  function nl(n, t, r, a, l = null, o = !1) {
    if (typeof n == "object" && n !== null) {
      var u = t.get(n);
      if (u !== void 0) return u;
      if (n instanceof Map) return new Map(n);
      if (n instanceof Set) return new Set(n);
      if (hi(n)) {
        var c = Array(n.length);
        t.set(n, c), l !== null && t.set(l, c);
        for (var i = 0; i < n.length; i += 1) {
          var s = n[i];
          i in n && (c[i] = nl(s, t, r, a, null, o));
        }
        return c;
      }
      if (Yi(n) === io) {
        for (var d in c = {}, t.set(n, c), l !== null && t.set(l, c), n) c[d] = nl(n[d], t, r, a, null, o);
        return c;
      }
      if (n instanceof Date) return structuredClone(n);
      if (typeof n.toJSON == "function" && !o) return nl(n.toJSON(), t, r, a, n);
    }
    if (n instanceof EventTarget) return n;
    try {
      return structuredClone(n);
    } catch {
      return n;
    }
  }
  let rn = null;
  function qa(n) {
    rn = n;
  }
  function Va(n) {
    return fo().get(n);
  }
  function Ta(n, t) {
    return fo().set(n, t), t;
  }
  function Ye(n, t = !1, r) {
    rn = { p: rn, c: null, e: null, s: n, x: null, l: Aa && !t ? { s: null, u: null, $: [] } : null };
  }
  function Ke(n) {
    var t = rn, r = t.e;
    if (r !== null) for (var a of (t.e = null, r)) To(a);
    return n !== void 0 && (t.x = n), rn = t.p, n != null ? n : {};
  }
  function Ga() {
    return !Aa || rn !== null && rn.l === null;
  }
  function fo(n) {
    var t;
    return rn === null && uo(), (t = rn.c) != null ? t : rn.c = new Map((function(r) {
      let a = r.p;
      for (; a !== null; ) {
        const l = a.c;
        if (l !== null) return l;
        a = a.p;
      }
      return null;
    })(rn) || void 0);
  }
  const Pd = typeof requestIdleCallback == "undefined" ? (n) => setTimeout(n, 1) : requestIdleCallback;
  let Zr = [], Oa = [];
  function bo() {
    var n = Zr;
    Zr = [], Ki(n);
  }
  function vo() {
    var n = Oa;
    Oa = [], Ki(n);
  }
  function Sd() {
    return Zr.length > 0 || Oa.length > 0;
  }
  function pa(n) {
    if (Zr.length === 0 && !vi) {
      var t = Zr;
      queueMicrotask(() => {
        t === Zr && bo();
      });
    }
    Zr.push(n);
  }
  function Cd() {
    Zr.length > 0 && bo(), Oa.length > 0 && vo();
  }
  const Bd = /* @__PURE__ */ new WeakMap();
  function _o(n) {
    var t = $t;
    if (t === null) return Vt.f |= ha, n;
    if ((t.f & El) === 0) {
      if (!(128 & t.f)) throw !t.parent && n instanceof Error && mo(n), n;
      t.b.error(n);
    } else Fa(n, t);
  }
  function Fa(n, t) {
    for (; t !== null; ) {
      if (128 & t.f) try {
        return void t.b.error(n);
      } catch (r) {
        n = r;
      }
      t = t.parent;
    }
    throw n instanceof Error && mo(n), n;
  }
  function mo(n) {
    const t = Bd.get(n);
    t && (ua(n, "message", { value: t.message }), ua(n, "stack", { value: t.stack }));
  }
  const Nl = /* @__PURE__ */ new Set();
  let dn = null, bi = null, Ql = /* @__PURE__ */ new Set(), fa = [], rl = null, Wl = !1, vi = !1;
  Oi = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), Li = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakSet(), Ks = function(n) {
    var t;
    n.f ^= Bn;
    for (var r = n.first; r !== null; ) {
      var a = r.f, l = !!(96 & a);
      if (!(l && (a & Bn) !== 0 || (a & vr) !== 0 || this.skipped_effects.has(r)) && r.fn !== null) {
        l ? r.f ^= Bn : 4 & a ? ye(this, aa).push(r) : (a & Bn) === 0 && ((a & kd) !== 0 ? ((t = r.b) != null && t.is_pending() ? ye(this, oi) : ye(this, Ba)).push(r) : sl(r) && ((r.f & pi) !== 0 && ye(this, ci).push(r), Ra(r)));
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      }
      var u = r.parent;
      for (r = r.next; r === null && u !== null; ) r = u.next, u = u.parent;
    }
  }, ji = function(n) {
    for (const t of n)
      ((t.f & zr) !== 0 ? ye(this, Li) : ye(this, Ei)).push(t), Fn(t, Bn);
    n.length = 0;
  }, zl = function() {
    if (!ye(this, Fi)) for (const n of ye(this, li)) n();
    ye(this, li).clear();
  };
  let ba = class Js {
    constructor() {
      wt(this, jr), fn(this, "current", /* @__PURE__ */ new Map()), wt(this, Oi, /* @__PURE__ */ new Map()), wt(this, li, /* @__PURE__ */ new Set()), wt(this, Pr, 0), wt(this, si, null), wt(this, Fi, !1), wt(this, Ba, []), wt(this, oi, []), wt(this, Ia, []), wt(this, aa, []), wt(this, ci, []), wt(this, Li, []), wt(this, Ei, []), fn(this, "skipped_effects", /* @__PURE__ */ new Set());
    }
    process(t) {
      var r;
      fa = [], bi = null;
      for (const o of t) nn(this, jr, Ks).call(this, o);
      if (ye(this, Ba).length === 0 && ye(this, Pr) === 0) {
        nn(this, jr, zl).call(this);
        var a = ye(this, Ia), l = ye(this, aa);
        mt(this, Ia, []), mt(this, aa, []), mt(this, ci, []), bi = dn, dn = null, yo(a), yo(l), dn === null ? dn = this : Nl.delete(this), (r = ye(this, si)) == null || r.resolve();
      } else nn(this, jr, ji).call(this, ye(this, Ia)), nn(this, jr, ji).call(this, ye(this, aa)), nn(this, jr, ji).call(this, ye(this, ci));
      for (const o of ye(this, Ba)) Ra(o);
      for (const o of ye(this, oi)) Ra(o);
      mt(this, Ba, []), mt(this, oi, []);
    }
    capture(t, r) {
      ye(this, Oi).has(t) || ye(this, Oi).set(t, r), this.current.set(t, t.v);
    }
    activate() {
      dn = this;
    }
    deactivate() {
      dn = null, bi = null;
      for (const t of Ql) if (Ql.delete(t), t(), dn !== null) break;
    }
    neuter() {
      mt(this, Fi, !0);
    }
    flush() {
      fa.length > 0 ? ko() : nn(this, jr, zl).call(this), dn === this && (ye(this, Pr) === 0 && Nl.delete(this), this.deactivate());
    }
    increment() {
      mt(this, Pr, ye(this, Pr) + 1);
    }
    decrement() {
      if (mt(this, Pr, ye(this, Pr) - 1), ye(this, Pr) === 0) {
        for (const t of ye(this, Li)) Fn(t, zr), La(t);
        for (const t of ye(this, Ei)) Fn(t, ga), La(t);
        mt(this, Ia, []), mt(this, aa, []), this.flush();
      } else this.deactivate();
    }
    add_callback(t) {
      ye(this, li).add(t);
    }
    settled() {
      var t, r, a;
      return ((t = ye(this, si)) != null ? t : mt(this, si, { promise: new Promise((l, o) => {
        r = l, a = o;
      }), resolve: r, reject: a })).promise;
    }
    static ensure() {
      if (dn === null) {
        const t = dn = new Js();
        Nl.add(dn), vi || Js.enqueue(() => {
          dn === t && t.flush();
        });
      }
      return dn;
    }
    static enqueue(t) {
      pa(t);
    }
  };
  function m(n) {
    var t = vi;
    vi = !0;
    try {
      for (; ; ) {
        if (Cd(), fa.length === 0 && !Sd() && (dn == null || dn.flush(), fa.length === 0)) return void (rl = null);
        ko();
      }
    } finally {
      vi = t;
    }
  }
  function ko() {
    var n = ja;
    Wl = !0;
    try {
      var t = 0;
      for (Ro(!0); fa.length > 0; ) {
        var r = ba.ensure();
        t++ > 1e3 && Id(), r.process(fa), Yr.clear();
      }
    } finally {
      Wl = !1, Ro(n), rl = null;
    }
  }
  function Id() {
    try {
      (function() {
        throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
      })();
    } catch (n) {
      Fa(n, rl);
    }
  }
  let Jr = null;
  function yo(n) {
    var t = n.length;
    if (t !== 0) {
      for (var r = 0; r < t; ) {
        var a = n[r++];
        if (!(24576 & a.f) && sl(a) && (Jr = [], Ra(a), a.deps === null && a.first === null && a.nodes_start === null && (a.teardown === null && a.ac === null ? Lo(a) : a.fn = null), (Jr == null ? void 0 : Jr.length) > 0)) {
          Yr.clear();
          for (const l of Jr) Ra(l);
          Jr = [];
        }
      }
      Jr = null;
    }
  }
  function La(n) {
    for (var t = rl = n; t.parent !== null; ) {
      var r = (t = t.parent).f;
      if (Wl && t === $t && (r & pi) !== 0) return;
      if (96 & r) {
        if ((r & Bn) === 0) return;
        t.f ^= Bn;
      }
    }
    fa.push(t);
  }
  function Md(n) {
    let t, r = 0, a = Ar(0);
    return () => {
      Vt === null || ur || (e(a), mi(() => (r === 0 && (t = tn(() => n(() => jn(a)))), r += 1, () => {
        pa(() => {
          r -= 1, r === 0 && (t == null || t(), t = void 0, jn(a));
        });
      })));
    };
  }
  class Dd {
    constructor(t, r, a) {
      wt(this, Zn), fn(this, "parent"), wt(this, fr, !1), wt(this, Hn), wt(this, Ri, ut ? Pt : null), wt(this, Sr), wt(this, Ma), wt(this, Cr), wt(this, rr, null), wt(this, En, null), wt(this, Br, null), wt(this, ia, null), wt(this, la, 0), wt(this, Rr, 0), wt(this, Da, !1), wt(this, sa, null), wt(this, $l, () => {
        ye(this, sa) && Ea(ye(this, sa), ye(this, la));
      }), wt(this, Al, Md(() => (mt(this, sa, Ar(ye(this, la))), () => {
        mt(this, sa, null);
      }))), mt(this, Hn, t), mt(this, Sr, r), mt(this, Ma, a), this.parent = $t.b, mt(this, fr, !!ye(this, Sr).pending), mt(this, Cr, qr(() => {
        if ($t.b = this, ut) {
          const l = ye(this, Ri);
          lr(), l.nodeType === 8 && l.data === Zi ? nn(this, Zn, eo).call(this) : nn(this, Zn, Xs).call(this);
        } else {
          try {
            mt(this, rr, wn(() => a(ye(this, Hn))));
          } catch (l) {
            this.error(l);
          }
          ye(this, Rr) > 0 ? nn(this, Zn, Qi).call(this) : mt(this, fr, !1);
        }
      }, 589952)), ut && mt(this, Hn, Pt);
    }
    is_pending() {
      return ye(this, fr) || !!this.parent && this.parent.is_pending();
    }
    has_pending_snippet() {
      return !!ye(this, Sr).pending;
    }
    update_pending_count(t) {
      nn(this, Zn, ql).call(this, t), mt(this, la, ye(this, la) + t), Ql.add(ye(this, $l));
    }
    get_effect_pending() {
      return ye(this, Al).call(this), e(ye(this, sa));
    }
    error(t) {
      var r = ye(this, Sr).onerror;
      let a = ye(this, Sr).failed;
      if (ye(this, Da) || !r && !a) throw t;
      ye(this, rr) && (Pn(ye(this, rr)), mt(this, rr, null)), ye(this, En) && (Pn(ye(this, En)), mt(this, En, null)), ye(this, Br) && (Pn(ye(this, Br)), mt(this, Br, null)), ut && (yn(ye(this, Ri)), Ur(), yn(el()));
      var l = !1, o = !1;
      const u = () => {
        l ? console.warn("https://svelte.dev/e/svelte_boundary_reset_noop") : (l = !0, o && (function() {
          throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
        })(), ba.ensure(), mt(this, la, 0), ye(this, Br) !== null && Vr(ye(this, Br), () => {
          mt(this, Br, null);
        }), mt(this, fr, this.has_pending_snippet()), mt(this, rr, nn(this, Zn, Ni).call(this, () => (mt(this, Da, !1), wn(() => ye(this, Ma).call(this, ye(this, Hn)))))), ye(this, Rr) > 0 ? nn(this, Zn, Qi).call(this) : mt(this, fr, !1));
      };
      var c = Vt;
      try {
        In(null), o = !0, r == null || r(t, u), o = !1;
      } catch (i) {
        Fa(i, ye(this, Cr) && ye(this, Cr).parent);
      } finally {
        In(c);
      }
      a && pa(() => {
        mt(this, Br, nn(this, Zn, Ni).call(this, () => {
          mt(this, Da, !0);
          try {
            return wn(() => {
              a(ye(this, Hn), () => t, () => u);
            });
          } catch (i) {
            return Fa(i, ye(this, Cr).parent), null;
          } finally {
            mt(this, Da, !1);
          }
        }));
      });
    }
  }
  function xo(n, t, r) {
    const a = Ga() ? _i : Ul;
    if (t.length !== 0) {
      var l = dn, o = $t, u = (function() {
        var i = $t, s = Vt, d = rn, h = dn, f = ut;
        if (f) var p = Pt;
        return function() {
          _r(i), In(s), qa(d), h == null || h.activate(), f && ($n(!0), yn(p));
        };
      })(), c = ut;
      Promise.all(t.map((i) => zd(i))).then((i) => {
        l == null || l.activate(), u();
        try {
          r([...n.map(a), ...i]);
        } catch (s) {
          (o.f & za) === 0 && Fa(s, o);
        }
        c && $n(!1), l == null || l.deactivate(), wo();
      }).catch((i) => {
        Fa(i, o);
      });
    } else r(n.map(a));
  }
  function wo() {
    _r(null), In(null), qa(null);
  }
  function _i(n) {
    var t = 2050, r = Vt !== null && 2 & Vt.f ? Vt : null;
    return $t === null || r !== null && (r.f & ir) !== 0 ? t |= ir : $t.f |= oo, { ctx: rn, deps: null, effects: null, equals: ho, f: t, fn: n, reactions: null, rv: 0, v: kn, wv: 0, parent: r != null ? r : $t, ac: null };
  }
  function zd(n, t) {
    let r = $t;
    r === null && (function() {
      throw new Error("https://svelte.dev/e/async_derived_orphan");
    })();
    var a = r.b, l = void 0, o = Ar(kn), u = null, c = !Vt;
    return (function(i) {
      cr(4718592, i, !0);
    })(() => {
      var i;
      try {
        var s = n();
        u && Promise.resolve(s).catch(() => {
        });
      } catch (v) {
        s = Promise.reject(v);
      }
      var d = () => s;
      l = (i = u == null ? void 0 : u.then(d, d)) != null ? i : Promise.resolve(s), u = l;
      var h = dn, f = a.is_pending();
      c && (a.update_pending_count(1), f || h.increment());
      const p = (v, I = void 0) => {
        u = null, f || h.activate(), I ? I !== Rl && (o.f |= ha, Ea(o, I)) : ((o.f & ha) !== 0 && (o.f ^= ha), Ea(o, v)), c && (a.update_pending_count(-1), f || h.decrement()), wo();
      };
      if (l.then(p, (v) => p(null, v || "unknown")), h) return () => {
        queueMicrotask(() => h.neuter());
      };
    }), new Promise((i) => {
      (function s(d) {
        function h() {
          d === l ? i(o) : s(l);
        }
        d.then(h, h);
      })(l);
    });
  }
  function g(n) {
    const t = _i(n);
    return Qo(t), t;
  }
  function Ul(n) {
    const t = _i(n);
    return t.equals = po, t;
  }
  function Po(n) {
    var t = n.effects;
    if (t !== null) {
      n.effects = null;
      for (var r = 0; r < t.length; r += 1) Pn(t[r]);
    }
  }
  function Hl(n) {
    var t, r = $t;
    _r((function(a) {
      for (var l = a.parent; l !== null; ) {
        if (!(2 & l.f)) return l;
        l = l.parent;
      }
      return null;
    })(n));
    try {
      Po(n), t = Jo(n);
    } finally {
      _r(r);
    }
    return t;
  }
  function So(n) {
    var t = Hl(n);
    n.equals(t) || (n.v = t, n.wv = Ho()), va || Fn(n, !Kr && (n.f & ir) === 0 || n.deps === null ? Bn : ga);
  }
  fr = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Ri = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Ma = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), la = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), $l = /* @__PURE__ */ new WeakMap(), Al = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakSet(), Xs = function() {
    try {
      mt(this, rr, wn(() => ye(this, Ma).call(this, ye(this, Hn))));
    } catch (n) {
      this.error(n);
    }
    mt(this, fr, !1);
  }, eo = function() {
    const n = ye(this, Sr).pending;
    n && (mt(this, En, wn(() => n(ye(this, Hn)))), ba.enqueue(() => {
      mt(this, rr, nn(this, Zn, Ni).call(this, () => (ba.ensure(), wn(() => ye(this, Ma).call(this, ye(this, Hn)))))), ye(this, Rr) > 0 ? nn(this, Zn, Qi).call(this) : (Vr(ye(this, En), () => {
        mt(this, En, null);
      }), mt(this, fr, !1));
    }));
  }, Ni = function(n) {
    var t = $t, r = Vt, a = rn;
    _r(ye(this, Cr)), In(ye(this, Cr)), qa(ye(this, Cr).ctx);
    try {
      return n();
    } catch (l) {
      return _o(l), null;
    } finally {
      _r(t), In(r), qa(a);
    }
  }, Qi = function() {
    const n = ye(this, Sr).pending;
    ye(this, rr) !== null && (mt(this, ia, document.createDocumentFragment()), (function(t, r) {
      for (var a = t.nodes_start, l = t.nodes_end; a !== null; ) {
        var o = a === l ? null : or(a);
        r.append(a), a = o;
      }
    })(ye(this, rr), ye(this, ia))), ye(this, En) === null && mt(this, En, wn(() => n(ye(this, Hn))));
  }, ql = function(n) {
    var t;
    this.has_pending_snippet() ? (mt(this, Rr, ye(this, Rr) + n), ye(this, Rr) === 0 && (mt(this, fr, !1), ye(this, En) && Vr(ye(this, En), () => {
      mt(this, En, null);
    }), ye(this, ia) && (ye(this, Hn).before(ye(this, ia)), mt(this, ia, null)))) : this.parent && nn(t = this.parent, Zn, ql).call(t, n);
  };
  const Yr = /* @__PURE__ */ new Map();
  function Ar(n, t) {
    return { f: 0, v: n, reactions: null, equals: ho, rv: 0, wv: 0 };
  }
  function Ae(n, t) {
    const r = Ar(n);
    return Qo(r), r;
  }
  function Zl(n, t = !1, r = !0) {
    var a, l;
    const o = Ar(n);
    return t || (o.equals = po), Aa && r && rn !== null && rn.l !== null && ((l = (a = rn.l).s) != null ? l : a.s = []).push(o), o;
  }
  function te(n, t, r = !1) {
    return Vt !== null && (!ur || (Vt.f & md) !== 0) && Ga() && 4325394 & Vt.f && !(Yn != null && Yn.includes(n)) && (function() {
      throw new Error("https://svelte.dev/e/state_unsafe_mutation");
    })(), Ea(n, r ? at(t) : t);
  }
  function Ea(n, t) {
    if (!n.equals(t)) {
      var r = n.v;
      va ? Yr.set(n, t) : Yr.set(n, r), n.v = t, ba.ensure().capture(n, r), 2 & n.f && ((n.f & zr) !== 0 && Hl(n), Fn(n, (n.f & ir) === 0 ? Bn : ga)), n.wv = Ho(), Co(n, zr), !Ga() || $t === null || ($t.f & Bn) === 0 || 96 & $t.f || (Kn === null ? (function(a) {
        Kn = a;
      })([n]) : Kn.push(n));
    }
    return t;
  }
  function jn(n) {
    te(n, n.v + 1);
  }
  function Co(n, t) {
    var r = n.reactions;
    if (r !== null) for (var a = Ga(), l = r.length, o = 0; o < l; o++) {
      var u = r[o], c = u.f;
      if (a || u !== $t) {
        var i = (c & zr) === 0;
        i && Fn(u, t), 2 & c ? Co(u, ga) : i && ((c & pi) !== 0 && Jr !== null && Jr.push(u), La(u));
      }
    }
  }
  function at(n) {
    if (typeof n != "object" || n === null || $r in n) return n;
    const t = Yi(n);
    if (t !== io && t !== vd) return n;
    var r = /* @__PURE__ */ new Map(), a = hi(n), l = Ae(0), o = dr, u = (c) => {
      if (dr === o) return c();
      var i = Vt, s = dr;
      In(null), Uo(o);
      var d = c();
      return In(i), Uo(s), d;
    };
    return a && r.set("length", Ae(n.length)), new Proxy(n, { defineProperty(c, i, s) {
      "value" in s && s.configurable !== !1 && s.enumerable !== !1 && s.writable !== !1 || (function() {
        throw new Error("https://svelte.dev/e/state_descriptors_fixed");
      })();
      var d = r.get(i);
      return d === void 0 ? d = u(() => {
        var h = Ae(s.value);
        return r.set(i, h), h;
      }) : te(d, s.value, !0), !0;
    }, deleteProperty(c, i) {
      var s = r.get(i);
      if (s === void 0) {
        if (i in c) {
          const d = u(() => Ae(kn));
          r.set(i, d), jn(l);
        }
      } else te(s, kn), jn(l);
      return !0;
    }, get(c, i, s) {
      var d;
      if (i === $r) return n;
      var h = r.get(i), f = i in c;
      if (h !== void 0 || f && !((d = da(c, i)) != null && d.writable) || (h = u(() => Ae(at(f ? c[i] : kn))), r.set(i, h)), h !== void 0) {
        var p = e(h);
        return p === kn ? void 0 : p;
      }
      return Reflect.get(c, i, s);
    }, getOwnPropertyDescriptor(c, i) {
      var s = Reflect.getOwnPropertyDescriptor(c, i);
      if (s && "value" in s) {
        var d = r.get(i);
        d && (s.value = e(d));
      } else if (s === void 0) {
        var h = r.get(i), f = h == null ? void 0 : h.v;
        if (h !== void 0 && f !== kn) return { enumerable: !0, configurable: !0, value: f, writable: !0 };
      }
      return s;
    }, has(c, i) {
      var s;
      if (i === $r) return !0;
      var d = r.get(i), h = d !== void 0 && d.v !== kn || Reflect.has(c, i);
      return (d !== void 0 || $t !== null && (!h || (s = da(c, i)) != null && s.writable)) && (d === void 0 && (d = u(() => Ae(h ? at(c[i]) : kn)), r.set(i, d)), e(d) === kn) ? !1 : h;
    }, set(c, i, s, d) {
      var h, f = r.get(i), p = i in c;
      if (a && i === "length") for (var v = s; v < f.v; v += 1) {
        var I = r.get(v + "");
        I !== void 0 ? te(I, kn) : v in c && (I = u(() => Ae(kn)), r.set(v + "", I));
      }
      f === void 0 ? p && !((h = da(c, i)) != null && h.writable) || (te(f = u(() => Ae(void 0)), at(s)), r.set(i, f)) : (p = f.v !== kn, te(f, u(() => at(s))));
      var y = Reflect.getOwnPropertyDescriptor(c, i);
      if (y != null && y.set && y.set.call(d, s), !p) {
        if (a && typeof i == "string") {
          var x = r.get("length"), B = Number(i);
          Number.isInteger(B) && B >= x.v && te(x, B + 1);
        }
        jn(l);
      }
      return !0;
    }, ownKeys(c) {
      e(l);
      var i = Reflect.ownKeys(c).filter((h) => {
        var f = r.get(h);
        return f === void 0 || f.v !== kn;
      });
      for (var [s, d] of r) d.v === kn || s in c || i.push(s);
      return i;
    }, setPrototypeOf() {
      (function() {
        throw new Error("https://svelte.dev/e/state_prototype_fixed");
      })();
    } });
  }
  function Bo(n) {
    try {
      if (n !== null && typeof n == "object" && $r in n) return n[$r];
    } catch {
    }
    return n;
  }
  function $d(n, t) {
    return Object.is(Bo(n), Bo(t));
  }
  var Io, Mo, Do, zo;
  function Jl() {
    if (Io === void 0) {
      Io = window, Mo = /Firefox/.test(navigator.userAgent);
      var n = Element.prototype, t = Node.prototype, r = Text.prototype;
      Do = da(t, "firstChild").get, zo = da(t, "nextSibling").get, lo(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), lo(r) && (r.__t = void 0);
    }
  }
  function sr(n = "") {
    return document.createTextNode(n);
  }
  function On(n) {
    return Do.call(n);
  }
  function or(n) {
    return zo.call(n);
  }
  function S(n, t) {
    if (!ut) return On(n);
    var r = On(Pt);
    if (r === null) r = Pt.appendChild(sr());
    else if (t && r.nodeType !== 3) {
      var a = sr();
      return r == null || r.before(a), yn(a), a;
    }
    return yn(r), r;
  }
  function ve(n, t = !1) {
    if (!ut) {
      var r = On(n);
      return r instanceof Comment && r.data === "" ? or(r) : r;
    }
    if (t && (Pt == null ? void 0 : Pt.nodeType) !== 3) {
      var a = sr();
      return Pt == null || Pt.before(a), yn(a), a;
    }
    return Pt;
  }
  function E(n, t = 1, r = !1) {
    let a = ut ? Pt : n;
    for (var l; t--; ) l = a, a = or(a);
    if (!ut) return a;
    if (r && (a == null ? void 0 : a.nodeType) !== 3) {
      var o = sr();
      return a === null ? l == null || l.after(o) : a.before(o), yn(o), o;
    }
    return yn(a), a;
  }
  function $o(n) {
    n.textContent = "";
  }
  function Ad(n, t) {
    if (t) {
      const r = document.body;
      n.autofocus = !0, pa(() => {
        document.activeElement === r && n.focus();
      });
    }
  }
  let Ao = !1;
  function qo() {
    Ao || (Ao = !0, document.addEventListener("reset", (n) => {
      Promise.resolve().then(() => {
        var t;
        if (!n.defaultPrevented) for (const r of n.target.elements) (t = r.__on_r) == null || t.call(r);
      });
    }, { capture: !0 }));
  }
  function al(n) {
    var t = Vt, r = $t;
    In(null), _r(null);
    try {
      return n();
    } finally {
      In(t), _r(r);
    }
  }
  function Vo(n) {
    $t === null && Vt === null && (function() {
      throw new Error("https://svelte.dev/e/effect_orphan");
    })(), Vt !== null && (Vt.f & ir) !== 0 && $t === null && (function() {
      throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
    })(), va && (function() {
      throw new Error("https://svelte.dev/e/effect_in_teardown");
    })();
  }
  function cr(n, t, r, a = !0) {
    var l, o = $t;
    o !== null && (o.f & vr) !== 0 && (n |= vr);
    var u = { ctx: rn, deps: null, nodes_start: null, nodes_end: null, f: n | zr, first: null, fn: t, last: null, next: null, parent: o, b: o && o.b, prev: null, teardown: null, transitions: null, wv: 0, ac: null };
    if (r) try {
      Ra(u), u.f |= El;
    } catch (s) {
      throw Pn(u), s;
    }
    else t !== null && La(u);
    if (a) {
      var c = u;
      if (r && c.deps === null && c.teardown === null && c.nodes_start === null && c.first === c.last && (c.f & oo) === 0 && (c = c.first), c !== null && (c.parent = o, o !== null && (function(s, d) {
        var h = d.last;
        h === null ? d.last = d.first = s : (h.next = s, s.prev = h, d.last = s);
      })(c, o), Vt !== null && 2 & Vt.f && (n & so) === 0)) {
        var i = Vt;
        ((l = i.effects) != null ? l : i.effects = []).push(c);
      }
    }
    return u;
  }
  function Yl(n) {
    const t = cr(8, null, !1);
    return Fn(t, Bn), t.teardown = n, t;
  }
  function Ze(n) {
    var t;
    Vo();
    var r = $t.f;
    if (!(!Vt && (r & Xi) !== 0 && (r & El) === 0)) return To(n);
    var a = rn;
    ((t = a.e) != null ? t : a.e = []).push(n);
  }
  function To(n) {
    return cr(1048580, n, !1);
  }
  function Jn(n) {
    return Vo(), cr(1048584, n, !0);
  }
  function il(n) {
    return cr(4, n, !1);
  }
  function mi(n, t = 0) {
    return cr(8 | t, n, !0);
  }
  function be(n, t = [], r = []) {
    xo(t, r, (a) => {
      cr(8, () => n(...a.map(e)), !0);
    });
  }
  function qr(n, t = 0) {
    return cr(pi | t, n, !0);
  }
  function wn(n, t = !0) {
    return cr(524320, n, !0, t);
  }
  function Go(n) {
    var t = n.teardown;
    if (t !== null) {
      const r = va, a = Vt;
      No(!0), In(null);
      try {
        t.call(null);
      } finally {
        No(r), In(a);
      }
    }
  }
  function Oo(n, t = !1) {
    var r = n.first;
    for (n.first = n.last = null; r !== null; ) {
      const l = r.ac;
      l !== null && al(() => {
        l.abort(Rl);
      });
      var a = r.next;
      (r.f & so) !== 0 ? r.parent = null : Pn(r, t), r = a;
    }
  }
  function Pn(n, t = !0) {
    var r = !1;
    (t || 262144 & n.f) && n.nodes_start !== null && n.nodes_end !== null && (Fo(n.nodes_start, n.nodes_end), r = !0), Oo(n, t && !r), ol(n, 0), Fn(n, za);
    var a = n.transitions;
    if (a !== null) for (const o of a) o.stop();
    Go(n);
    var l = n.parent;
    l !== null && l.first !== null && Lo(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
  }
  function Fo(n, t) {
    for (; n !== null; ) {
      var r = n === t ? null : or(n);
      n.remove(), n = r;
    }
  }
  function Lo(n) {
    var t = n.parent, r = n.prev, a = n.next;
    r !== null && (r.next = a), a !== null && (a.prev = r), t !== null && (t.first === n && (t.first = a), t.last === n && (t.last = r));
  }
  function Vr(n, t) {
    var r = [];
    Kl(n, r, !0), Eo(r, () => {
      Pn(n), t && t();
    });
  }
  function Eo(n, t) {
    var r = n.length;
    if (r > 0) {
      var a = () => --r || t();
      for (var l of n) l.out(a);
    } else t();
  }
  function Kl(n, t, r) {
    if ((n.f & vr) === 0) {
      if (n.f ^= vr, n.transitions !== null) for (const o of n.transitions) (o.is_global || r) && t.push(o);
      for (var a = n.first; a !== null; ) {
        var l = a.next;
        Kl(a, t, ((a.f & $a) !== 0 || (a.f & Xi) !== 0) && r), a = l;
      }
    }
  }
  function ll(n) {
    jo(n, !0);
  }
  function jo(n, t) {
    if ((n.f & vr) !== 0) {
      n.f ^= vr, (n.f & Bn) === 0 && (Fn(n, zr), La(n));
      for (var r = n.first; r !== null; ) {
        var a = r.next;
        jo(r, ((r.f & $a) !== 0 || (r.f & Xi) !== 0) && t), r = a;
      }
      if (n.transitions !== null) for (const l of n.transitions) (l.is_global || t) && l.in();
    }
  }
  let ja = !1;
  function Ro(n) {
    ja = n;
  }
  let va = !1;
  function No(n) {
    va = n;
  }
  let Vt = null, ur = !1;
  function In(n) {
    Vt = n;
  }
  let $t = null;
  function _r(n) {
    $t = n;
  }
  let Yn = null;
  function Qo(n) {
    Vt !== null && (Yn === null ? Yn = [n] : Yn.push(n));
  }
  let An = null, Rn = 0, Kn = null, Wo = 1, ki = 0, dr = ki;
  function Uo(n) {
    dr = n;
  }
  let Kr = !1;
  function Ho() {
    return ++Wo;
  }
  function sl(n) {
    var t, r, a = n.f;
    if ((a & zr) !== 0) return !0;
    if ((a & ga) !== 0) {
      var l = n.deps, o = (a & ir) !== 0;
      if (l !== null) {
        var u, c, i = (a & Ll) !== 0, s = o && $t !== null && !Kr, d = l.length;
        if ((i || s) && ($t === null || ($t.f & za) === 0)) {
          var h = n, f = h.parent;
          for (u = 0; u < d; u++) c = l[u], !i && ((t = c == null ? void 0 : c.reactions) != null && t.includes(h)) || ((r = c.reactions) != null ? r : c.reactions = []).push(h);
          i && (h.f ^= Ll), s && f !== null && (f.f & ir) === 0 && (h.f ^= ir);
        }
        for (u = 0; u < d; u++) if (sl(c = l[u]) && So(c), c.wv > n.wv) return !0;
      }
      o && ($t === null || Kr) || Fn(n, Bn);
    }
    return !1;
  }
  function Zo(n, t, r = !0) {
    var a = n.reactions;
    if (a !== null && !(Yn != null && Yn.includes(n))) for (var l = 0; l < a.length; l++) {
      var o = a[l];
      2 & o.f ? Zo(o, t, !1) : t === o && (r ? Fn(o, zr) : (o.f & Bn) !== 0 && Fn(o, ga), La(o));
    }
  }
  function Jo(n) {
    var t, r, a = An, l = Rn, o = Kn, u = Vt, c = Kr, i = Yn, s = rn, d = ur, h = dr, f = n.f;
    An = null, Rn = 0, Kn = null, Kr = (f & ir) !== 0 && (ur || !ja || Vt === null), Vt = 96 & f ? null : n, Yn = null, qa(n.ctx), ur = !1, dr = ++ki, n.ac !== null && (al(() => {
      n.ac.abort(Rl);
    }), n.ac = null);
    try {
      n.f |= jl;
      var p = (0, n.fn)(), v = n.deps;
      if (An !== null) {
        var I;
        if (ol(n, Rn), v !== null && Rn > 0) for (v.length = Rn + An.length, I = 0; I < An.length; I++) v[Rn + I] = An[I];
        else n.deps = v = An;
        if (!Kr || 2 & f && n.reactions !== null) for (I = Rn; I < v.length; I++) ((r = (t = v[I]).reactions) != null ? r : t.reactions = []).push(n);
      } else v !== null && Rn < v.length && (ol(n, Rn), v.length = Rn);
      if (Ga() && Kn !== null && !ur && v !== null && !(6146 & n.f)) for (I = 0; I < Kn.length; I++) Zo(Kn[I], n);
      return u !== null && u !== n && (ki++, Kn !== null && (o === null ? o = Kn : o.push(...Kn))), (n.f & ha) !== 0 && (n.f ^= ha), p;
    } catch (y) {
      return _o(y);
    } finally {
      n.f ^= jl, An = a, Rn = l, Kn = o, Vt = u, Kr = c, Yn = i, qa(s), ur = d, dr = h;
    }
  }
  function qd(n, t) {
    let r = t.reactions;
    if (r !== null) {
      var a = bd.call(r, n);
      if (a !== -1) {
        var l = r.length - 1;
        l === 0 ? r = t.reactions = null : (r[a] = r[l], r.pop());
      }
    }
    r === null && 2 & t.f && (An === null || !An.includes(t)) && (Fn(t, ga), 768 & t.f || (t.f ^= Ll), Po(t), ol(t, 0));
  }
  function ol(n, t) {
    var r = n.deps;
    if (r !== null) for (var a = t; a < r.length; a++) qd(n, r[a]);
  }
  function Ra(n) {
    var t = n.f;
    if ((t & za) === 0) {
      Fn(n, Bn);
      var r = $t, a = ja;
      $t = n, ja = !0;
      try {
        (t & pi) !== 0 ? (function(o) {
          for (var u = o.first; u !== null; ) {
            var c = u.next;
            (u.f & Xi) === 0 && Pn(u), u = c;
          }
        })(n) : Oo(n), Go(n);
        var l = Jo(n);
        n.teardown = typeof l == "function" ? l : null, n.wv = Wo;
      } finally {
        ja = a, $t = r;
      }
    }
  }
  async function Xl() {
    await Promise.resolve(), m();
  }
  function e(n) {
    var t, r = !!(2 & n.f);
    if (Vt === null || ur) {
      if (r && n.deps === null && n.effects === null) {
        var a = n, l = a.parent;
        l !== null && (l.f & ir) === 0 && (a.f ^= ir);
      }
    } else if (!($t !== null && ($t.f & za) !== 0) && !(Yn != null && Yn.includes(n))) {
      var o = Vt.deps;
      if ((Vt.f & jl) !== 0) n.rv < ki && (n.rv = ki, An === null && o !== null && o[Rn] === n ? Rn++ : An === null ? An = [n] : Kr && An.includes(n) || An.push(n));
      else {
        ((t = Vt.deps) != null ? t : Vt.deps = []).push(n);
        var u = n.reactions;
        u === null ? n.reactions = [Vt] : u.includes(Vt) || u.push(Vt);
      }
    }
    if (va) {
      if (Yr.has(n)) return Yr.get(n);
      if (r) {
        var c = (a = n).v;
        return ((a.f & Bn) === 0 && a.reactions !== null || Yo(a)) && (c = Hl(a)), Yr.set(a, c), c;
      }
    } else r && sl(a = n) && So(a);
    if ((n.f & ha) !== 0) throw n.v;
    return n.v;
  }
  function Yo(n) {
    if (n.v === kn) return !0;
    if (n.deps === null) return !1;
    for (const t of n.deps)
      if (Yr.has(t) || 2 & t.f && Yo(t)) return !0;
    return !1;
  }
  function tn(n) {
    var t = ur;
    try {
      return ur = !0, n();
    } finally {
      ur = t;
    }
  }
  const Vd = -7169;
  function Fn(n, t) {
    n.f = n.f & Vd | t;
  }
  function Ko(n) {
    if (typeof n == "object" && n && !(n instanceof EventTarget)) {
      if ($r in n) es(n);
      else if (!Array.isArray(n)) for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && $r in r && es(r);
      }
    }
  }
  function es(n, t = /* @__PURE__ */ new Set()) {
    if (!(typeof n != "object" || n === null || n instanceof EventTarget || t.has(n))) {
      t.add(n), n instanceof Date && n.getTime();
      for (let a in n) try {
        es(n[a], t);
      } catch {
      }
      const r = Yi(n);
      if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
        const a = ao(r);
        for (let l in a) {
          const o = a[l].get;
          if (o) try {
            o.call(n);
          } catch {
          }
        }
      }
    }
  }
  const Xo = /* @__PURE__ */ new Set(), ts = /* @__PURE__ */ new Set();
  function ec(n, t, r, a = {}) {
    function l(o) {
      if (a.capture || yi.call(t, o), !o.cancelBubble) return al(() => r == null ? void 0 : r.call(this, o));
    }
    return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? pa(() => {
      t.addEventListener(n, l, a);
    }) : t.addEventListener(n, l, a), l;
  }
  function tc(n, t, r, a, l) {
    var o = { capture: a, passive: l }, u = ec(n, t, r, o);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Yl(() => {
      t.removeEventListener(n, u, o);
    });
  }
  function Sn(n) {
    for (var t = 0; t < n.length; t++) Xo.add(n[t]);
    for (var r of ts) r(n);
  }
  let nc = null;
  function yi(n) {
    var t, r = this, a = r.ownerDocument, l = n.type, o = ((t = n.composedPath) == null ? void 0 : t.call(n)) || [], u = o[0] || n.target;
    nc = n;
    var c = 0, i = nc === n && n.__root;
    if (i) {
      var s = o.indexOf(i);
      if (s !== -1 && (r === document || r === window)) return void (n.__root = r);
      var d = o.indexOf(r);
      if (d === -1) return;
      s <= d && (c = s);
    }
    if ((u = o[c] || n.target) !== r) {
      ua(n, "currentTarget", { configurable: !0, get: () => u || a });
      var h = Vt, f = $t;
      In(null), _r(null);
      try {
        for (var p, v = []; u !== null; ) {
          var I = u.assignedSlot || u.parentNode || u.host || null;
          try {
            var y = u["__" + l];
            if (y != null && (!u.disabled || n.target === u)) if (hi(y)) {
              var [x, ...B] = y;
              x.apply(u, [n, ...B]);
            } else y.call(u, n);
          } catch (D) {
            p ? v.push(D) : p = D;
          }
          if (n.cancelBubble || I === r || I === null) break;
          u = I;
        }
        if (p) {
          for (let D of v) queueMicrotask(() => {
            throw D;
          });
          throw p;
        }
      } finally {
        n.__root = r, delete n.currentTarget, In(h), _r(f);
      }
    }
  }
  function ns(n) {
    var t = document.createElement("template");
    return t.innerHTML = n.replaceAll("<!>", "<!---->"), t.content;
  }
  function Nn(n, t) {
    var r = $t;
    r.nodes_start === null && (r.nodes_start = n, r.nodes_end = t);
  }
  function $(n, t) {
    var r, a = !!(1 & t), l = !!(2 & t), o = !n.startsWith("<!>");
    return () => {
      if (ut) return Nn(Pt, null), Pt;
      r === void 0 && (r = ns(o ? n : "<!>" + n), a || (r = On(r)));
      var u = l || Mo ? document.importNode(r, !0) : r.cloneNode(!0);
      return a ? Nn(On(u), u.lastChild) : Nn(u, u), u;
    };
  }
  function Td(n, t, r = "svg") {
    var a, l = `<${r}>${n.startsWith("<!>") ? "<!>" + n : n}</${r}>`;
    return () => {
      if (ut) return Nn(Pt, null), Pt;
      if (!a) {
        var o = ns(l);
        a = On(On(o));
      }
      var u = a.cloneNode(!0);
      return Nn(u, u), u;
    };
  }
  function qn(n, t) {
    return Td(n, 0, "svg");
  }
  function Mn(n = "") {
    if (!ut) {
      var t = sr(n + "");
      return Nn(t, t), t;
    }
    var r = Pt;
    return r.nodeType !== 3 && (r.before(r = sr()), yn(r)), Nn(r, r), r;
  }
  function ze() {
    if (ut) return Nn(Pt, null), Pt;
    var n = document.createDocumentFragment(), t = document.createComment(""), r = sr();
    return n.append(t, r), Nn(t, r), n;
  }
  function b(n, t) {
    if (ut) return $t.nodes_end = Pt, void lr();
    n !== null && n.before(t);
  }
  function Gd(n) {
    return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
  }
  const Od = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"];
  function Fd(n) {
    return Od.includes(n);
  }
  const Ld = { formnovalidate: "formNoValidate", ismap: "isMap", nomodule: "noModule", playsinline: "playsInline", readonly: "readOnly", defaultvalue: "defaultValue", defaultchecked: "defaultChecked", srcobject: "srcObject", novalidate: "noValidate", allowfullscreen: "allowFullscreen", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback" };
  function Ed(n) {
    var t;
    return n = n.toLowerCase(), (t = Ld[n]) != null ? t : n;
  }
  const jd = ["touchstart", "touchmove"];
  function Rd(n) {
    return jd.includes(n);
  }
  const Nd = ["textarea", "script", "style", "title"];
  function bt(n, t) {
    var r, a = t == null ? "" : typeof t == "object" ? t + "" : t;
    a !== ((r = n.__t) != null ? r : n.__t = n.nodeValue) && (n.__t = a, n.nodeValue = a + "");
  }
  function rc(n, t) {
    return ac(n, t);
  }
  function Qd(n, t) {
    var r;
    Jl(), t.intro = (r = t.intro) != null && r;
    const a = t.target, l = ut, o = Pt;
    try {
      for (var u = On(a); u && (u.nodeType !== 8 || u.data !== "["); ) u = or(u);
      if (!u) throw ca;
      $n(!0), yn(u);
      const c = ac(n, { ...t, anchor: u });
      return $n(!1), c;
    } catch (c) {
      if (c instanceof Error && c.message.split(`
`).some((i) => i.startsWith("https://svelte.dev/e/"))) throw c;
      return c !== ca && console.warn("Failed to hydrate: ", c), t.recover === !1 && (function() {
        throw new Error("https://svelte.dev/e/hydration_failed");
      })(), Jl(), $o(a), $n(!1), rc(n, t);
    } finally {
      $n(l), yn(o);
    }
  }
  const Na = /* @__PURE__ */ new Map();
  function ac(n, { target: t, anchor: r, props: a = {}, events: l, context: o, intro: u = !0 }) {
    Jl();
    var c = /* @__PURE__ */ new Set(), i = (h) => {
      for (var f = 0; f < h.length; f++) {
        var p = h[f];
        if (!c.has(p)) {
          c.add(p);
          var v = Rd(p);
          t.addEventListener(p, yi, { passive: v });
          var I = Na.get(p);
          I === void 0 ? (document.addEventListener(p, yi, { passive: v }), Na.set(p, 1)) : Na.set(p, I + 1);
        }
      }
    };
    i(Fl(Xo)), ts.add(i);
    var s = void 0, d = (function(h) {
      ba.ensure();
      const f = cr(524352, h, !0);
      return (p = {}) => new Promise((v) => {
        p.outro ? Vr(f, () => {
          Pn(f), v(void 0);
        }) : (Pn(f), v(void 0));
      });
    })(() => {
      var h = r != null ? r : t.appendChild(sr());
      return (function(f, p, v) {
        new Dd(f, p, v);
      })(h, { pending: () => {
      } }, (f) => {
        if (o && (Ye({}), rn.c = o), l && (a.$$events = l), ut && Nn(f, null), s = n(f, a) || {}, ut && ($t.nodes_end = Pt, Pt === null || Pt.nodeType !== 8 || Pt.data !== "]")) throw fi(), ca;
        o && Ke();
      }), () => {
        var f;
        for (var p of c) {
          t.removeEventListener(p, yi);
          var v = Na.get(p);
          --v === 0 ? (document.removeEventListener(p, yi), Na.delete(p)) : Na.set(p, v);
        }
        ts.delete(i), h !== r && ((f = h.parentNode) == null || f.removeChild(h));
      };
    });
    return rs.set(s, d), s;
  }
  let rs = /* @__PURE__ */ new WeakMap();
  function as(n, t, ...r) {
    var a, l = n, o = Wr;
    qr(() => {
      o !== (o = t()) && (a && (Pn(a), a = null), a = wn(() => o(l, ...r)));
    }, $a), ut && (l = Pt);
  }
  function _a(n) {
    var t, r, a;
    rn === null && uo(), Aa && rn.l !== null ? (t = rn, a = t.l, (r = a.u) != null ? r : a.u = { a: [], b: [], m: [] }).m.push(n) : Ze(() => {
      const l = tn(n);
      if (typeof l == "function") return l;
    });
  }
  function R(n, t, r = !1) {
    ut && lr();
    var a = n, l = null, o = null, u = kn, c = !1;
    const i = (h, f = !0) => {
      c = !0, d(f, h);
    };
    function s() {
      var h = u ? l : o, f = u ? o : l;
      h && ll(h), f && Vr(f, () => {
        u ? o = null : l = null;
      });
    }
    const d = (h, f) => {
      if (u === (u = h)) return;
      let p = !1;
      if (ut) {
        const I = go(a) === Zi;
        !!u === I && (yn(a = el()), $n(!1), p = !0);
      }
      var v = a;
      u ? l != null || (l = f && wn(() => f(v))) : o != null || (o = f && wn(() => f(v))), s(), p && $n(!0);
    };
    qr(() => {
      c = !1, t(i), c || d(null, null);
    }, r ? $a : 0), ut && (a = Pt);
  }
  function et(n, t, r) {
    ut && lr();
    var a, l, o = n, u = kn, c = Ga() ? xd : tl;
    function i() {
      a && Vr(a), a = l;
    }
    qr(() => {
      if (c(u, u = t())) {
        var s = o;
        l = wn(() => r(s)), i();
      }
    }), ut && (o = Pt);
  }
  function Tr(n, t) {
    return t;
  }
  function Yt(n, t, r, a, l, o = null) {
    var u = n, c = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
    if (4 & t) {
      var i = n;
      u = ut ? yn(On(i)) : i.appendChild(sr());
    }
    ut && lr();
    var s, d, h = null, f = !1, p = /* @__PURE__ */ new Map(), v = Ul(() => {
      var y = r();
      return hi(y) ? y : y == null ? [] : Fl(y);
    });
    function I() {
      (function(y, x, B, D, j, C, F, K, O) {
        var le, ee, N, H, Q, Z, z, P, V, G, U = !!(8 & F), ce = !!(3 & F), W = x.length, _ = B.items, T = B.first, M = T, L = null, Y = [], J = [];
        if (U) for (G = 0; G < W; G += 1) P = K(z = x[G], G), (V = _.get(P)) !== void 0 && ((le = V.a) == null || le.measure(), (Z != null ? Z : Z = /* @__PURE__ */ new Set()).add(V));
        for (G = 0; G < W; G += 1) if (P = K(z = x[G], G), (V = _.get(P)) !== void 0) {
          if (ce && Wd(V, z, G, F), (V.e.f & vr) !== 0 && (ll(V.e), U && ((ee = V.a) == null || ee.unfix(), (Z != null ? Z : Z = /* @__PURE__ */ new Set()).delete(V))), V !== M) {
            if (Q !== void 0 && Q.has(V)) {
              if (Y.length < J.length) {
                var q, A = J[0];
                L = A.prev;
                var re = Y[0], ne = Y[Y.length - 1];
                for (q = 0; q < Y.length; q += 1) is(Y[q], A, j);
                for (q = 0; q < J.length; q += 1) Q.delete(J[q]);
                mr(B, re.prev, ne.next), mr(B, L, re), mr(B, ne, A), M = A, L = ne, G -= 1, Y = [], J = [];
              } else Q.delete(V), is(V, M, j), mr(B, V.prev, V.next), mr(B, V, L === null ? B.first : L.next), mr(B, L, V), L = V;
              continue;
            }
            for (Y = [], J = []; M !== null && M.k !== P; ) (M.e.f & vr) === 0 && (Q != null ? Q : Q = /* @__PURE__ */ new Set()).add(M), J.push(M), M = M.next;
            if (M === null) continue;
            V = M;
          }
          Y.push(V), L = V, M = V.next;
        } else {
          var ue = D.get(P);
          if (ue !== void 0) {
            D.delete(P), _.set(P, ue);
            var ae = L ? L.next : M;
            mr(B, L, ue), mr(B, ue, ae), is(ue, ae, j), L = ue;
          } else
            L = ic(M ? M.e.nodes_start : j, B, L, L === null ? B.first : L.next, z, P, G, C, F, O);
          _.set(P, L), Y = [], J = [], M = L.next;
        }
        if (M !== null || Q !== void 0) {
          for (var fe = Q === void 0 ? [] : Fl(Q); M !== null; ) (M.e.f & vr) === 0 && fe.push(M), M = M.next;
          var Ce = fe.length;
          if (Ce > 0) {
            var he = 4 & F && W === 0 ? j : null;
            if (U) {
              for (G = 0; G < Ce; G += 1) (N = fe[G].a) == null || N.measure();
              for (G = 0; G < Ce; G += 1) (H = fe[G].a) == null || H.fix();
            }
            (function(_e, Ge, pe) {
              for (var de = _e.items, Se = [], Oe = Ge.length, Qe = 0; Qe < Oe; Qe++) Kl(Ge[Qe].e, Se, !0);
              var we = Oe > 0 && Se.length === 0 && pe !== null;
              if (we) {
                var X = pe.parentNode;
                $o(X), X.append(pe), de.clear(), mr(_e, Ge[0].prev, Ge[Oe - 1].next);
              }
              Eo(Se, () => {
                for (var Ie = 0; Ie < Oe; Ie++) {
                  var ge = Ge[Ie];
                  we || (de.delete(ge.k), mr(_e, ge.prev, ge.next)), Pn(ge.e, !we);
                }
              });
            })(B, fe, he);
          }
        }
        U && pa(() => {
          var _e;
          if (Z !== void 0) for (V of Z) (_e = V.a) == null || _e.apply();
        });
        for (var se of (y.first = B.first && B.first.e, y.last = L && L.e, D.values())) Pn(se.e);
        D.clear();
      })(d, s, c, p, u, l, t, a, r), o !== null && (s.length === 0 ? h ? ll(h) : h = wn(() => o(u)) : h !== null && Vr(h, () => {
        h = null;
      }));
    }
    qr(() => {
      d != null || (d = $t);
      var y = (s = e(v)).length;
      if (f && y === 0) return;
      f = y === 0;
      let x = !1;
      if (ut && go(u) === Zi != (y === 0) && (yn(u = el()), $n(!1), x = !0), ut) {
        for (var B, D = null, j = 0; j < y; j++) {
          if (Pt.nodeType === 8 && Pt.data === "]") {
            u = Pt, x = !0, $n(!1);
            break;
          }
          var C = s[j], F = a(C, j);
          B = ic(Pt, c, D, null, C, F, j, l, t, r), c.items.set(F, B), D = B;
        }
        y > 0 && yn(el());
      }
      ut ? y === 0 && o && (h = wn(() => o(u))) : I(), x && $n(!0), e(v);
    }), ut && (u = Pt);
  }
  function Wd(n, t, r, a) {
    1 & a && Ea(n.v, t), 2 & a ? Ea(n.i, r) : n.i = r;
  }
  function ic(n, t, r, a, l, o, u, c, i, s, d) {
    var h = 1 & i ? 16 & i ? Ar(l) : Zl(l, !1, !1) : l, f = 2 & i ? Ar(u) : u, p = { i: f, v: h, k: o, a: null, e: null, prev: r, next: a };
    try {
      return n === null && document.createDocumentFragment().append(n = sr()), p.e = wn(() => c(n, h, f, s), ut), p.e.prev = r && r.e, p.e.next = a && a.e, r === null ? d || (t.first = p) : (r.next = p, r.e.next = p.e), a !== null && (a.prev = p, a.e.prev = p.e), p;
    } finally {
    }
  }
  function is(n, t, r) {
    for (var a = n.next ? n.next.e.nodes_start : r, l = t ? t.e.nodes_start : r, o = n.e.nodes_start; o !== null && o !== a; ) {
      var u = or(o);
      l.before(o), o = u;
    }
  }
  function mr(n, t, r) {
    t === null ? n.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
  }
  function Te(n, t, r = !1, a = !1, l = !1) {
    var o = n, u = "";
    be(() => {
      var c, i = $t;
      if (u !== (u = (c = t()) != null ? c : "")) {
        if (i.nodes_start !== null && (Fo(i.nodes_start, i.nodes_end), i.nodes_start = i.nodes_end = null), u !== "") {
          if (ut) {
            Pt.data;
            for (var s = lr(), d = s; s !== null && (s.nodeType !== 8 || s.data !== ""); ) d = s, s = or(s);
            if (s === null) throw fi(), ca;
            return Nn(Pt, d), void (o = yn(s));
          }
          var h = u + "";
          r ? h = `<svg>${h}</svg>` : a && (h = `<math>${h}</math>`);
          var f = ns(h);
          if ((r || a) && (f = On(f)), Nn(On(f), f.lastChild), r || a) for (; On(f); ) o.before(On(f));
          else o.before(f);
        }
      } else ut && lr();
    });
  }
  function lc(n, t, r, a, l) {
    var o;
    ut && lr();
    var u = (o = t.$$slots) == null ? void 0 : o[r], c = !1;
    u === !0 && (u = t.children, c = !0), u === void 0 || u(n, c ? () => a : a);
  }
  function Ud(n, t, r, a, l, o) {
    let u = ut;
    var c, i;
    ut && lr();
    var s = null;
    ut && Pt.nodeType === 1 && (s = Pt, lr());
    var d, h = ut ? Pt : n;
    qr(() => {
      const f = t() || null;
      var p = f === "svg" ? "http://www.w3.org/2000/svg" : null;
      f !== c && (d && (f === null ? Vr(d, () => {
        d = null, i = null;
      }) : f === i ? ll(d) : Pn(d)), f && f !== i && (d = wn(() => {
        if (Nn(s = ut ? s : p ? document.createElementNS(p, f) : document.createElement(f), s), a) {
          ut && (I = f, Nd.includes(I)) && s.append(document.createComment(""));
          var v = ut ? On(s) : s.appendChild(sr());
          ut && (v === null ? $n(!1) : yn(v)), a(s, v);
        }
        var I;
        $t.nodes_end = s, h.before(s);
      })), (c = f) && (i = c));
    }, $a), u && ($n(!0), yn(h));
  }
  function ls(n, t, r) {
    il(() => {
      var a = tn(() => t(n, r == null ? void 0 : r()) || {});
      if (r && (a != null && a.update)) {
        var l = !1, o = {};
        mi(() => {
          var u = r();
          Ko(u), l && tl(o, u) && (o = u, a.update(u));
        }), l = !0;
      }
      if (a != null && a.destroy) return () => a.destroy();
    });
  }
  function Hd(n, t) {
    var r, a = void 0;
    qr(() => {
      a !== (a = t()) && (r && (Pn(r), r = null), a && (r = wn(() => {
        il(() => a(n));
      })));
    });
  }
  function sc(n) {
    var t, r, a = "";
    if (typeof n == "string" || typeof n == "number") a += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
      var l = n.length;
      for (t = 0; t < l; t++) n[t] && (r = sc(n[t])) && (a && (a += " "), a += r);
    } else for (r in n) n[r] && (a && (a += " "), a += r);
    return a;
  }
  function xi(n) {
    return typeof n == "object" ? (function() {
      for (var t, r, a = 0, l = "", o = arguments.length; a < o; a++) (t = arguments[a]) && (r = sc(t)) && (l && (l += " "), l += r);
      return l;
    })(n) : n != null ? n : "";
  }
  const oc = [...` 	
\r\f \v\uFEFF`];
  function cc(n, t = !1) {
    var r = t ? " !important;" : ";", a = "";
    for (var l in n) {
      var o = n[l];
      o != null && o !== "" && (a += " " + l + ": " + o + r);
    }
    return a;
  }
  function ss(n) {
    return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
  }
  function Tt(n, t, r, a, l, o) {
    var u = n.__className;
    if (ut || u !== r || u === void 0) {
      var c = (function(d, h, f) {
        var p = d == null ? "" : "" + d;
        if (h && (p = p ? p + " " + h : h), f) {
          for (var v in f) if (f[v]) p = p ? p + " " + v : v;
          else if (p.length) for (var I = v.length, y = 0; (y = p.indexOf(v, y)) >= 0; ) {
            var x = y + I;
            y !== 0 && !oc.includes(p[y - 1]) || x !== p.length && !oc.includes(p[x]) ? y = x : p = (y === 0 ? "" : p.substring(0, y)) + p.substring(x + 1);
          }
        }
        return p === "" ? null : p;
      })(r, a, o);
      ut && c === n.getAttribute("class") || (c == null ? n.removeAttribute("class") : t ? n.className = c : n.setAttribute("class", c)), n.__className = r;
    } else if (o && l !== o) for (var i in o) {
      var s = !!o[i];
      l != null && s === !!l[i] || n.classList.toggle(i, s);
    }
    return o;
  }
  function os(n, t = {}, r, a) {
    for (var l in r) {
      var o = r[l];
      t[l] !== o && (r[l] == null ? n.style.removeProperty(l) : n.style.setProperty(l, o, a));
    }
  }
  function Wt(n, t, r, a) {
    var l = n.__style;
    if (ut || l !== t) {
      var o = (function(u, c) {
        if (c) {
          var i, s, d = "";
          if (Array.isArray(c) ? (i = c[0], s = c[1]) : i = c, u) {
            u = String(u).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
            var h = !1, f = 0, p = !1, v = [];
            i && v.push(...Object.keys(i).map(ss)), s && v.push(...Object.keys(s).map(ss));
            var I = 0, y = -1;
            const j = u.length;
            for (var x = 0; x < j; x++) {
              var B = u[x];
              if (p ? B === "/" && u[x - 1] === "*" && (p = !1) : h ? h === B && (h = !1) : B === "/" && u[x + 1] === "*" ? p = !0 : B === '"' || B === "'" ? h = B : B === "(" ? f++ : B === ")" && f--, !p && h === !1 && f === 0) {
                if (B === ":" && y === -1) y = x;
                else if (B === ";" || x === j - 1) {
                  if (y !== -1) {
                    var D = ss(u.substring(I, y).trim());
                    v.includes(D) || (B !== ";" && x++, d += " " + u.substring(I, x).trim() + ";");
                  }
                  I = x + 1, y = -1;
                }
              }
            }
          }
          return i && (d += cc(i)), s && (d += cc(s, !0)), (d = d.trim()) === "" ? null : d;
        }
        return u == null ? null : String(u);
      })(t, a);
      ut && o === n.getAttribute("style") || (o == null ? n.removeAttribute("style") : n.style.cssText = o), n.__style = t;
    } else a && (Array.isArray(a) ? (os(n, r == null ? void 0 : r[0], a[0]), os(n, r == null ? void 0 : r[1], a[1], "important")) : os(n, r, a));
    return a;
  }
  function wi(n, t, r = !1) {
    if (n.multiple) {
      if (t == null) return;
      if (!hi(t)) return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
      for (var a of n.options) a.selected = t.includes(uc(a));
    } else {
      for (a of n.options)
        if ($d(uc(a), t)) return void (a.selected = !0);
      r && t === void 0 || (n.selectedIndex = -1);
    }
  }
  function cs(n) {
    var t = new MutationObserver(() => {
      wi(n, n.__value);
    });
    t.observe(n, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["value"] }), Yl(() => {
      t.disconnect();
    });
  }
  function uc(n) {
    return "__value" in n ? n.__value : n.value;
  }
  const Pi = Symbol("class"), Si = Symbol("style"), dc = Symbol("is custom element"), gc = Symbol("is html");
  function Gr(n) {
    if (ut) {
      var t, r = !1, a = () => {
        if (!r) {
          if (r = !0, n.hasAttribute("value")) {
            var l = n.value;
            xe(n, "value", null), n.value = l;
          }
          if (n.hasAttribute("checked")) {
            var o = n.checked;
            xe(n, "checked", null), n.checked = o;
          }
        }
      };
      n.__on_r = a, t = a, Oa.length === 0 && Pd(vo), Oa.push(t), qo();
    }
  }
  function ma(n, t) {
    var r = cl(n);
    r.value !== (r.value = t != null ? t : void 0) && (n.value !== t || t === 0 && n.nodeName === "PROGRESS") && (n.value = t != null ? t : "");
  }
  function Ci(n, t) {
    var r = cl(n);
    r.checked !== (r.checked = t != null ? t : void 0) && (n.checked = t);
  }
  function Zd(n, t) {
    t ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
  }
  function xe(n, t, r, a) {
    var l = cl(n);
    ut && (l[t] = n.getAttribute(t), t === "src" || t === "srcset" || t === "href" && n.nodeName === "LINK") || l[t] !== (l[t] = r) && (t === "loading" && (n[yd] = r), r == null ? n.removeAttribute(t) : typeof r != "string" && pc(n).includes(t) ? n[t] = r : n.setAttribute(t, r));
  }
  function Jd(n, t, r = [], a = [], l, o = !1, u = !1) {
    xo(r, a, (c) => {
      var i = void 0, s = {}, d = n.nodeName === "SELECT", h = !1;
      if (qr(() => {
        var p = t(...c.map(e)), v = (function(y, x, B, D, j = !1) {
          if (ut && j && y.tagName === "INPUT") {
            var C = y;
            (C.type === "checkbox" ? "defaultChecked" : "defaultValue") in B || Gr(C);
          }
          var F = cl(y), K = F[dc], O = !F[gc];
          let le = ut && K;
          le && $n(!1);
          var ee = x || {}, N = y.tagName === "OPTION";
          for (var H in x) H in B || (B[H] = null);
          B.class ? B.class = xi(B.class) : B[Pi] && (B.class = null), B[Si] && (B.style != null || (B.style = null));
          var Q = pc(y);
          for (const U in B) {
            let ce = B[U];
            if (N && U === "value" && ce == null) y.value = y.__value = "", ee[U] = ce;
            else if (U !== "class") if (U !== "style") {
              var Z = ee[U];
              if (ce !== Z || ce === void 0 && y.hasAttribute(U)) {
                ee[U] = ce;
                var z = U[0] + U[1];
                if (z !== "$$") if (z === "on") {
                  const W = {}, _ = "$$" + U;
                  let T = U.slice(2);
                  var P = Fd(T);
                  if (Gd(T) && (T = T.slice(0, -7), W.capture = !0), !P && Z) {
                    if (ce != null) continue;
                    y.removeEventListener(T, ee[_], W), ee[_] = null;
                  }
                  if (ce != null) if (P) y[`__${T}`] = ce, Sn([T]);
                  else {
                    let M = function(L) {
                      ee[U].call(this, L);
                    };
                    ee[_] = ec(T, y, M, W);
                  }
                  else P && (y[`__${T}`] = void 0);
                } else if (U === "style") xe(y, U, ce);
                else if (U === "autofocus") Ad(y, !!ce);
                else if (K || U !== "__value" && (U !== "value" || ce == null)) if (U === "selected" && N) Zd(y, ce);
                else {
                  var V = U;
                  O || (V = Ed(V));
                  var G = V === "defaultValue" || V === "defaultChecked";
                  if (ce != null || K || G) G || Q.includes(V) && (K || typeof ce != "string") ? (y[V] = ce, V in F && (F[V] = kn)) : typeof ce != "function" && xe(y, V, ce);
                  else if (F[U] = null, V === "value" || V === "checked") {
                    let W = y;
                    const _ = x === void 0;
                    if (V === "value") {
                      let T = W.defaultValue;
                      W.removeAttribute(V), W.defaultValue = T, W.value = W.__value = _ ? T : null;
                    } else {
                      let T = W.defaultChecked;
                      W.removeAttribute(V), W.defaultChecked = T, W.checked = !!_ && T;
                    }
                  } else y.removeAttribute(U);
                }
                else y.value = y.__value = ce;
              }
            } else Wt(y, ce, x == null ? void 0 : x[Si], B[Si]), ee[U] = ce, ee[Si] = B[Si];
            else Tt(y, y.namespaceURI === "http://www.w3.org/1999/xhtml", ce, D, x == null ? void 0 : x[Pi], B[Pi]), ee[U] = ce, ee[Pi] = B[Pi];
          }
          return le && $n(!0), ee;
        })(n, i, p, l, o, u);
        h && d && "value" in p && wi(n, p.value);
        for (let y of Object.getOwnPropertySymbols(s)) p[y] || Pn(s[y]);
        for (let y of Object.getOwnPropertySymbols(p)) {
          var I = p[y];
          y.description !== "@attach" || i && I === i[y] || (s[y] && Pn(s[y]), s[y] = wn(() => Hd(n, () => I))), v[y] = I;
        }
        i = v;
      }), d) {
        var f = n;
        il(() => {
          wi(f, i.value, !0), cs(f);
        });
      }
      h = !0;
    });
  }
  function cl(n) {
    var t;
    return (t = n.__attributes) != null ? t : n.__attributes = { [dc]: n.nodeName.includes("-"), [gc]: n.namespaceURI === "http://www.w3.org/1999/xhtml" };
  }
  var hc = /* @__PURE__ */ new Map();
  function pc(n) {
    var t, r = n.getAttribute("is") || n.nodeName, a = hc.get(r);
    if (a) return a;
    hc.set(r, a = []);
    for (var l = n, o = Element.prototype; o !== l; ) {
      for (var u in t = ao(l)) t[u].set && a.push(u);
      l = Yi(l);
    }
    return a;
  }
  function Yd(n, t, r = t) {
    var a = /* @__PURE__ */ new WeakSet();
    (function(l, o, u, c = u) {
      l.addEventListener(o, () => al(u));
      const i = l.__on_r;
      l.__on_r = i ? () => {
        i(), c(!0);
      } : () => c(!0), qo();
    })(n, "input", async (l) => {
      var o = l ? n.defaultValue : n.value;
      if (o = us(n) ? ds(o) : o, r(o), dn !== null && a.add(dn), await Xl(), o !== (o = t())) {
        var u = n.selectionStart, c = n.selectionEnd;
        n.value = o != null ? o : "", c !== null && (n.selectionStart = u, n.selectionEnd = Math.min(c, n.value.length));
      }
    }), (ut && n.defaultValue !== n.value || tn(t) == null && n.value) && (r(us(n) ? ds(n.value) : n.value), dn !== null && a.add(dn)), mi(() => {
      var l = t();
      if (n === document.activeElement) {
        var o = bi != null ? bi : dn;
        if (a.has(o)) return;
      }
      us(n) && l === ds(n.value) || (n.type !== "date" || l || n.value) && l !== n.value && (n.value = l != null ? l : "");
    });
  }
  function us(n) {
    var t = n.type;
    return t === "number" || t === "range";
  }
  function ds(n) {
    return n === "" ? null : +n;
  }
  function fc(n, t) {
    return n === t || (n == null ? void 0 : n[$r]) === t;
  }
  function ul(n = {}, t, r, a) {
    return il(() => {
      var l, o;
      return mi(() => {
        l = o, o = [], tn(() => {
          n !== r(...o) && (t(n, ...o), l && fc(r(...l), n) && t(null, ...l));
        });
      }), () => {
        pa(() => {
          o && fc(r(...o), n) && t(null, ...o);
        });
      };
    }), n;
  }
  function bc(n, t) {
    if (n.l.s) for (const r of n.l.s) e(r);
    t();
  }
  function vc(n, t, r) {
    if (n == null) return t(void 0), Wr;
    const a = tn(() => n.subscribe(t, r));
    return a.unsubscribe ? () => a.unsubscribe() : a;
  }
  const Qa = [];
  function Or(n, t = Wr) {
    let r = null;
    const a = /* @__PURE__ */ new Set();
    function l(u) {
      if (tl(n, u) && (n = u, r)) {
        const c = !Qa.length;
        for (const i of a) i[1](), Qa.push(i, n);
        if (c) {
          for (let i = 0; i < Qa.length; i += 2) Qa[i][0](Qa[i + 1]);
          Qa.length = 0;
        }
      }
    }
    function o(u) {
      l(u(n));
    }
    return { set: l, update: o, subscribe: function(u, c = Wr) {
      const i = [u, c];
      return a.add(i), a.size === 1 && (r = t(l, o) || Wr), u(n), () => {
        a.delete(i), a.size === 0 && r && (r(), r = null);
      };
    } };
  }
  let _c, dl = !1, gs = Symbol();
  function De(n, t, r) {
    var a;
    const l = (a = r[t]) != null ? a : r[t] = { store: null, source: Zl(void 0), unsubscribe: Wr };
    if (l.store !== n && !(gs in r)) if (l.unsubscribe(), l.store = n != null ? n : null, n == null) l.source.v = void 0, l.unsubscribe = Wr;
    else {
      var o = !0;
      l.unsubscribe = vc(n, (u) => {
        o ? l.source.v = u : te(l.source, u);
      }), o = !1;
    }
    return n && gs in r ? (function(u) {
      let c;
      return vc(u, (i) => c = i)(), c;
    })(n) : e(l.source);
  }
  function ft() {
    const n = {};
    return [n, function() {
      Yl(() => {
        for (var t in n)
          n[t].unsubscribe();
        ua(n, gs, { enumerable: !1, value: !0 });
      });
    }];
  }
  function k(n, t, r, a) {
    var l, o, u, c, i = !Aa || !!(2 & r), s = !!(8 & r), d = !!(16 & r), h = a, f = !0, p = () => (f && (f = !1, h = d ? tn(a) : a), h);
    if (s) {
      var v = $r in n || co in n;
      u = (o = (l = da(n, t)) == null ? void 0 : l.set) != null ? o : v && t in n ? (C) => n[t] = C : void 0;
    }
    var I, y = !1;
    if (s ? [c, y] = (function(C) {
      var F = dl;
      try {
        return dl = !1, [C(), dl];
      } finally {
        dl = F;
      }
    })(() => n[t]) : c = n[t], c === void 0 && a !== void 0 && (c = p(), u && (i && (function() {
      throw new Error("https://svelte.dev/e/props_invalid_value");
    })(), u(c))), I = i ? () => {
      var C = n[t];
      return C === void 0 ? p() : (f = !0, C);
    } : () => {
      var C = n[t];
      return C !== void 0 && (h = void 0), C === void 0 ? h : C;
    }, i && !(4 & r)) return I;
    if (u) {
      var x = n.$$legacy;
      return function(C, F) {
        return arguments.length > 0 ? (i && F && !x && !y || u(F ? I() : C), C) : I();
      };
    }
    var B = !1, D = (1 & r ? _i : Ul)(() => (B = !1, I()));
    s && e(D);
    var j = $t;
    return function(C, F) {
      if (arguments.length > 0) {
        const K = F ? e(D) : i && s ? at(C) : C;
        return te(D, K), B = !0, h !== void 0 && (h = K), C;
      }
      return va && B || (j.f & za) !== 0 ? D.v : e(D);
    };
  }
  class Kd {
    constructor(t) {
      var r, a;
      wt(this, Nr), wt(this, ar);
      var l = /* @__PURE__ */ new Map(), o = (c, i) => {
        var s = Zl(i, !1, !1);
        return l.set(c, s), s;
      };
      const u = new Proxy({ ...t.props || {}, $$events: {} }, { get(c, i) {
        var s;
        return e((s = l.get(i)) != null ? s : o(i, Reflect.get(c, i)));
      }, has(c, i) {
        var s;
        return i === co || (e((s = l.get(i)) != null ? s : o(i, Reflect.get(c, i))), Reflect.has(c, i));
      }, set(c, i, s) {
        var d;
        return te((d = l.get(i)) != null ? d : o(i, s), s), Reflect.set(c, i, s);
      } });
      mt(this, ar, (t.hydrate ? Qd : rc)(t.component, { target: t.target, anchor: t.anchor, props: u, context: t.context, intro: (r = t.intro) != null && r, recover: t.recover })), (a = t == null ? void 0 : t.props) != null && a.$$host && t.sync !== !1 || m(), mt(this, Nr, u.$$events);
      for (const c of Object.keys(ye(this, ar))) c !== "$set" && c !== "$destroy" && c !== "$on" && ua(this, c, { get() {
        return ye(this, ar)[c];
      }, set(i) {
        ye(this, ar)[c] = i;
      }, enumerable: !0 });
      ye(this, ar).$set = (c) => {
        Object.assign(u, c);
      }, ye(this, ar).$destroy = () => {
        (function(c, i) {
          const s = rs.get(c);
          s ? (rs.delete(c), s(i)) : Promise.resolve();
        })(ye(this, ar));
      };
    }
    $set(t) {
      ye(this, ar).$set(t);
    }
    $on(t, r) {
      ye(this, Nr)[t] = ye(this, Nr)[t] || [];
      const a = (...l) => r.call(this, ...l);
      return ye(this, Nr)[t].push(a), () => {
        ye(this, Nr)[t] = ye(this, Nr)[t].filter((l) => l !== a);
      };
    }
    $destroy() {
      ye(this, ar).$destroy();
    }
  }
  function gl(n, t, r, a) {
    var l;
    const o = (l = r[n]) == null ? void 0 : l.type;
    if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !a || !r[n]) return t;
    if (a === "toAttribute") switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t == null ? null : t;
      default:
        return t;
    }
    else switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
      default:
        return t;
      case "Number":
        return t != null ? +t : t;
    }
  }
  function Ne(n, t, r, a, l, o) {
    let u = class extends _c {
      constructor() {
        super(n, r, l), this.$$p_d = t;
      }
      static get observedAttributes() {
        return Ji(t).map((c) => (t[c].attribute || c).toLowerCase());
      }
    };
    return Ji(t).forEach((c) => {
      ua(u.prototype, c, { get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      }, set(i) {
        var s;
        i = gl(c, i, t), this.$$d[c] = i;
        var d = this.$$c;
        d && ((s = da(d, c)) != null && s.get ? d[c] = i : d.$set({ [c]: i }));
      } });
    }), a.forEach((c) => {
      ua(u.prototype, c, { get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[c];
      } });
    }), o && (u = o(u)), n.element = u, u;
  }
  Nr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), typeof HTMLElement == "function" && (_c = class extends HTMLElement {
    constructor(n, t, r) {
      super(), fn(this, "$$ctor"), fn(this, "$$s"), fn(this, "$$c"), fn(this, "$$cn", !1), fn(this, "$$d", {}), fn(this, "$$r", !1), fn(this, "$$p_d", {}), fn(this, "$$l", {}), fn(this, "$$l_u", /* @__PURE__ */ new Map()), fn(this, "$$me"), this.$$ctor = n, this.$$s = t, r && this.attachShadow({ mode: "open" });
    }
    addEventListener(n, t, r) {
      if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(t), this.$$c) {
        const a = this.$$c.$on(n, t);
        this.$$l_u.set(t, a);
      }
      super.addEventListener(n, t, r);
    }
    removeEventListener(n, t, r) {
      if (super.removeEventListener(n, t, r), this.$$c) {
        const a = this.$$l_u.get(t);
        a && (a(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (this.$$cn = !0, !this.$$c) {
        let t = function(l) {
          return (o) => {
            const u = document.createElement("slot");
            l !== "default" && (u.name = l), b(o, u);
          };
        };
        if (await Promise.resolve(), !this.$$cn || this.$$c) return;
        const r = {}, a = (function(l) {
          const o = {};
          return l.childNodes.forEach((u) => {
            o[u.slot || "default"] = !0;
          }), o;
        })(this);
        for (const l of this.$$s) l in a && (l !== "default" || this.$$d.children ? r[l] = t(l) : (this.$$d.children = t(l), r.default = !0));
        for (const l of this.attributes) {
          const o = this.$$g_p(l.name);
          o in this.$$d || (this.$$d[o] = gl(o, l.value, this.$$p_d, "toProp"));
        }
        for (const l in this.$$p_d) l in this.$$d || this[l] === void 0 || (this.$$d[l] = this[l], delete this[l]);
        this.$$c = (n = { component: this.$$ctor, target: this.shadowRoot || this, props: { ...this.$$d, $$slots: r, $$host: this } }, new Kd(n)), this.$$me = (function(l) {
          ba.ensure();
          const o = cr(524352, l, !0);
          return () => {
            Pn(o);
          };
        })(() => {
          mi(() => {
            var l;
            this.$$r = !0;
            for (const o of Ji(this.$$c)) {
              if (!((l = this.$$p_d[o]) != null && l.reflect)) continue;
              this.$$d[o] = this.$$c[o];
              const u = gl(o, this.$$d[o], this.$$p_d, "toAttribute");
              u == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, u);
            }
            this.$$r = !1;
          });
        });
        for (const l in this.$$l) for (const o of this.$$l[l]) {
          const u = this.$$c.$on(l, o);
          this.$$l_u.set(o, u);
        }
        this.$$l = {};
      }
      var n;
    }
    attributeChangedCallback(n, t, r) {
      var a;
      this.$$r || (n = this.$$g_p(n), this.$$d[n] = gl(n, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [n]: this.$$d[n] }));
    }
    disconnectedCallback() {
      this.$$cn = !1, Promise.resolve().then(() => {
        !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
      });
    }
    $$g_p(n) {
      return Ji(this.$$p_d).find((t) => this.$$p_d[t].attribute === n || !this.$$p_d[t].attribute && t.toLowerCase() === n) || n;
    }
  });
  var Xd = $("<span> </span>"), eg = $("<div></div>");
  function Fr(n, t) {
    Ye(t, !0);
    const r = k(t, "product", 7), a = k(t, "class", 7, ""), l = g(() => r().options.map((c) => c.name));
    var o = { get product() {
      return r();
    }, set product(c) {
      r(c), m();
    }, get class() {
      return a();
    }, set class(c = "") {
      a(c), m();
    } }, u = eg();
    return Yt(u, 21, () => e(l), Tr, (c, i) => {
      var s = Xd(), d = S(s, !0);
      w(s), be(() => bt(d, e(i))), b(c, s);
    }), w(u), be(() => Tt(u, 1, xi(["kaching-bundles__bar-variant-names", a()]))), b(n, u), Ke(o);
  }
  Ne(Fr, { product: {}, class: {} }, [], [], !0);
  const hl = Math.min, ka = Math.max, pl = Math.round, fl = Math.floor, kr = (n) => ({ x: n, y: n }), tg = { left: "right", right: "left", bottom: "top", top: "bottom" }, ng = { start: "end", end: "start" };
  function mc(n, t, r) {
    return ka(n, hl(t, r));
  }
  function bl(n, t) {
    return typeof n == "function" ? n(t) : n;
  }
  function ya(n) {
    return n.split("-")[0];
  }
  function vl(n) {
    return n.split("-")[1];
  }
  function kc(n) {
    return n === "x" ? "y" : "x";
  }
  function yc(n) {
    return n === "y" ? "height" : "width";
  }
  const rg = /* @__PURE__ */ new Set(["top", "bottom"]);
  function Xr(n) {
    return rg.has(ya(n)) ? "y" : "x";
  }
  function xc(n) {
    return kc(Xr(n));
  }
  function hs(n) {
    return n.replace(/start|end/g, (t) => ng[t]);
  }
  const wc = ["left", "right"], Pc = ["right", "left"], ag = ["top", "bottom"], ig = ["bottom", "top"];
  function lg(n, t, r, a) {
    const l = vl(n);
    let o = (function(u, c, i) {
      switch (u) {
        case "top":
        case "bottom":
          return i ? c ? Pc : wc : c ? wc : Pc;
        case "left":
        case "right":
          return c ? ag : ig;
        default:
          return [];
      }
    })(ya(n), r === "start", a);
    return l && (o = o.map((u) => u + "-" + l), t && (o = o.concat(o.map(hs)))), o;
  }
  function _l(n) {
    return n.replace(/left|right|bottom|top/g, (t) => tg[t]);
  }
  function ml(n) {
    const { x: t, y: r, width: a, height: l } = n;
    return { width: a, height: l, top: r, left: t, right: t + a, bottom: r + l, x: t, y: r };
  }
  function Sc(n, t, r) {
    let { reference: a, floating: l } = n;
    const o = Xr(t), u = xc(t), c = yc(u), i = ya(t), s = o === "y", d = a.x + a.width / 2 - l.width / 2, h = a.y + a.height / 2 - l.height / 2, f = a[c] / 2 - l[c] / 2;
    let p;
    switch (i) {
      case "top":
        p = { x: d, y: a.y - l.height };
        break;
      case "bottom":
        p = { x: d, y: a.y + a.height };
        break;
      case "right":
        p = { x: a.x + a.width, y: h };
        break;
      case "left":
        p = { x: a.x - l.width, y: h };
        break;
      default:
        p = { x: a.x, y: a.y };
    }
    switch (vl(t)) {
      case "start":
        p[u] -= f * (r && s ? -1 : 1);
        break;
      case "end":
        p[u] += f * (r && s ? -1 : 1);
    }
    return p;
  }
  async function Cc(n, t) {
    var r;
    t === void 0 && (t = {});
    const { x: a, y: l, platform: o, rects: u, elements: c, strategy: i } = n, { boundary: s = "clippingAncestors", rootBoundary: d = "viewport", elementContext: h = "floating", altBoundary: f = !1, padding: p = 0 } = bl(t, n), v = (function(C) {
      return typeof C != "number" ? (function(F) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...F };
      })(C) : { top: C, right: C, bottom: C, left: C };
    })(p), I = c[f ? h === "floating" ? "reference" : "floating" : h], y = ml(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(I))) == null || r ? I : I.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(c.floating)), boundary: s, rootBoundary: d, strategy: i })), x = h === "floating" ? { x: a, y: l, width: u.floating.width, height: u.floating.height } : u.reference, B = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c.floating)), D = await (o.isElement == null ? void 0 : o.isElement(B)) && await (o.getScale == null ? void 0 : o.getScale(B)) || { x: 1, y: 1 }, j = ml(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: c, rect: x, offsetParent: B, strategy: i }) : x);
    return { top: (y.top - j.top + v.top) / D.y, bottom: (j.bottom - y.bottom + v.bottom) / D.y, left: (y.left - j.left + v.left) / D.x, right: (j.right - y.right + v.right) / D.x };
  }
  const sg = /* @__PURE__ */ new Set(["left", "top"]);
  function kl() {
    return typeof window != "undefined";
  }
  function Wa(n) {
    return Bc(n) ? (n.nodeName || "").toLowerCase() : "#document";
  }
  function Qn(n) {
    var t;
    return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
  }
  function yr(n) {
    var t;
    return (t = (Bc(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
  }
  function Bc(n) {
    return !!kl() && (n instanceof Node || n instanceof Qn(n).Node);
  }
  function gr(n) {
    return !!kl() && (n instanceof Element || n instanceof Qn(n).Element);
  }
  function xr(n) {
    return !!kl() && (n instanceof HTMLElement || n instanceof Qn(n).HTMLElement);
  }
  function Ic(n) {
    return !(!kl() || typeof ShadowRoot == "undefined") && (n instanceof ShadowRoot || n instanceof Qn(n).ShadowRoot);
  }
  const og = /* @__PURE__ */ new Set(["inline", "contents"]);
  function Bi(n) {
    const { overflow: t, overflowX: r, overflowY: a, display: l } = hr(n);
    return /auto|scroll|overlay|hidden|clip/.test(t + a + r) && !og.has(l);
  }
  const cg = /* @__PURE__ */ new Set(["table", "td", "th"]);
  function ug(n) {
    return cg.has(Wa(n));
  }
  const dg = [":popover-open", ":modal"];
  function yl(n) {
    return dg.some((t) => {
      try {
        return n.matches(t);
      } catch {
        return !1;
      }
    });
  }
  const gg = ["transform", "translate", "scale", "rotate", "perspective"], hg = ["transform", "translate", "scale", "rotate", "perspective", "filter"], pg = ["paint", "layout", "strict", "content"];
  function ps(n) {
    const t = fs(), r = gr(n) ? hr(n) : n;
    return gg.some((a) => !!r[a] && r[a] !== "none") || !!r.containerType && r.containerType !== "normal" || !t && !!r.backdropFilter && r.backdropFilter !== "none" || !t && !!r.filter && r.filter !== "none" || hg.some((a) => (r.willChange || "").includes(a)) || pg.some((a) => (r.contain || "").includes(a));
  }
  function fs() {
    return !(typeof CSS == "undefined" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
  }
  const fg = /* @__PURE__ */ new Set(["html", "body", "#document"]);
  function Ua(n) {
    return fg.has(Wa(n));
  }
  function hr(n) {
    return Qn(n).getComputedStyle(n);
  }
  function xl(n) {
    return gr(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
  }
  function ea(n) {
    if (Wa(n) === "html") return n;
    const t = n.assignedSlot || n.parentNode || Ic(n) && n.host || yr(n);
    return Ic(t) ? t.host : t;
  }
  function Mc(n) {
    const t = ea(n);
    return Ua(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : xr(t) && Bi(t) ? t : Mc(t);
  }
  function Ii(n, t, r) {
    var a;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const l = Mc(n), o = l === ((a = n.ownerDocument) == null ? void 0 : a.body), u = Qn(l);
    if (o) {
      const c = bs(u);
      return t.concat(u, u.visualViewport || [], Bi(l) ? l : [], c && r ? Ii(c) : []);
    }
    return t.concat(l, Ii(l, [], r));
  }
  function bs(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
  }
  function Dc(n) {
    const t = hr(n);
    let r = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
    const l = xr(n), o = l ? n.offsetWidth : r, u = l ? n.offsetHeight : a, c = pl(r) !== o || pl(a) !== u;
    return c && (r = o, a = u), { width: r, height: a, $: c };
  }
  function vs(n) {
    return gr(n) ? n : n.contextElement;
  }
  function Ha(n) {
    const t = vs(n);
    if (!xr(t)) return kr(1);
    const r = t.getBoundingClientRect(), { width: a, height: l, $: o } = Dc(t);
    let u = (o ? pl(r.width) : r.width) / a, c = (o ? pl(r.height) : r.height) / l;
    return u && Number.isFinite(u) || (u = 1), c && Number.isFinite(c) || (c = 1), { x: u, y: c };
  }
  const bg = kr(0);
  function zc(n) {
    const t = Qn(n);
    return fs() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : bg;
  }
  function xa(n, t, r, a) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const l = n.getBoundingClientRect(), o = vs(n);
    let u = kr(1);
    t && (a ? gr(a) && (u = Ha(a)) : u = Ha(n));
    const c = (function(f, p, v) {
      return p === void 0 && (p = !1), !(!v || p && v !== Qn(f)) && p;
    })(o, r, a) ? zc(o) : kr(0);
    let i = (l.left + c.x) / u.x, s = (l.top + c.y) / u.y, d = l.width / u.x, h = l.height / u.y;
    if (o) {
      const f = Qn(o), p = a && gr(a) ? Qn(a) : a;
      let v = f, I = bs(v);
      for (; I && a && p !== v; ) {
        const y = Ha(I), x = I.getBoundingClientRect(), B = hr(I), D = x.left + (I.clientLeft + parseFloat(B.paddingLeft)) * y.x, j = x.top + (I.clientTop + parseFloat(B.paddingTop)) * y.y;
        i *= y.x, s *= y.y, d *= y.x, h *= y.y, i += D, s += j, v = Qn(I), I = bs(v);
      }
    }
    return ml({ width: d, height: h, x: i, y: s });
  }
  function wl(n, t) {
    const r = xl(n).scrollLeft;
    return t ? t.left + r : xa(yr(n)).left + r;
  }
  function $c(n, t) {
    const r = n.getBoundingClientRect();
    return { x: r.left + t.scrollLeft - wl(n, r), y: r.top + t.scrollTop };
  }
  const vg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
  function Ac(n, t, r) {
    let a;
    if (t === "viewport") a = (function(l, o) {
      const u = Qn(l), c = yr(l), i = u.visualViewport;
      let s = c.clientWidth, d = c.clientHeight, h = 0, f = 0;
      if (i) {
        s = i.width, d = i.height;
        const v = fs();
        (!v || v && o === "fixed") && (h = i.offsetLeft, f = i.offsetTop);
      }
      const p = wl(c);
      if (p <= 0) {
        const v = c.ownerDocument, I = v.body, y = getComputedStyle(I), x = v.compatMode === "CSS1Compat" && parseFloat(y.marginLeft) + parseFloat(y.marginRight) || 0, B = Math.abs(c.clientWidth - I.clientWidth - x);
        B <= 25 && (s -= B);
      } else p <= 25 && (s += p);
      return { width: s, height: d, x: h, y: f };
    })(n, r);
    else if (t === "document") a = (function(l) {
      const o = yr(l), u = xl(l), c = l.ownerDocument.body, i = ka(o.scrollWidth, o.clientWidth, c.scrollWidth, c.clientWidth), s = ka(o.scrollHeight, o.clientHeight, c.scrollHeight, c.clientHeight);
      let d = -u.scrollLeft + wl(l);
      const h = -u.scrollTop;
      return hr(c).direction === "rtl" && (d += ka(o.clientWidth, c.clientWidth) - i), { width: i, height: s, x: d, y: h };
    })(yr(n));
    else if (gr(t)) a = (function(l, o) {
      const u = xa(l, !0, o === "fixed"), c = u.top + l.clientTop, i = u.left + l.clientLeft, s = xr(l) ? Ha(l) : kr(1);
      return { width: l.clientWidth * s.x, height: l.clientHeight * s.y, x: i * s.x, y: c * s.y };
    })(t, r);
    else {
      const l = zc(n);
      a = { x: t.x - l.x, y: t.y - l.y, width: t.width, height: t.height };
    }
    return ml(a);
  }
  function qc(n, t) {
    const r = ea(n);
    return !(r === t || !gr(r) || Ua(r)) && (hr(r).position === "fixed" || qc(r, t));
  }
  function _g(n, t, r) {
    const a = xr(t), l = yr(t), o = r === "fixed", u = xa(n, !0, o, t);
    let c = { scrollLeft: 0, scrollTop: 0 };
    const i = kr(0);
    function s() {
      i.x = wl(l);
    }
    if (a || !a && !o) if ((Wa(t) !== "body" || Bi(l)) && (c = xl(t)), a) {
      const h = xa(t, !0, o, t);
      i.x = h.x + t.clientLeft, i.y = h.y + t.clientTop;
    } else l && s();
    o && !a && l && s();
    const d = !l || a || o ? kr(0) : $c(l, c);
    return { x: u.left + c.scrollLeft - i.x - d.x, y: u.top + c.scrollTop - i.y - d.y, width: u.width, height: u.height };
  }
  function _s(n) {
    return hr(n).position === "static";
  }
  function Vc(n, t) {
    if (!xr(n) || hr(n).position === "fixed") return null;
    if (t) return t(n);
    let r = n.offsetParent;
    return yr(n) === r && (r = r.ownerDocument.body), r;
  }
  function Tc(n, t) {
    const r = Qn(n);
    if (yl(n)) return r;
    if (!xr(n)) {
      let l = ea(n);
      for (; l && !Ua(l); ) {
        if (gr(l) && !_s(l)) return l;
        l = ea(l);
      }
      return r;
    }
    let a = Vc(n, t);
    for (; a && ug(a) && _s(a); ) a = Vc(a, t);
    return a && Ua(a) && _s(a) && !ps(a) ? r : a || (function(l) {
      let o = ea(l);
      for (; xr(o) && !Ua(o); ) {
        if (ps(o)) return o;
        if (yl(o)) return null;
        o = ea(o);
      }
      return null;
    })(n) || r;
  }
  const mg = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
    let { elements: t, rect: r, offsetParent: a, strategy: l } = n;
    const o = l === "fixed", u = yr(a), c = !!t && yl(t.floating);
    if (a === u || c && o) return r;
    let i = { scrollLeft: 0, scrollTop: 0 }, s = kr(1);
    const d = kr(0), h = xr(a);
    if ((h || !h && !o) && ((Wa(a) !== "body" || Bi(u)) && (i = xl(a)), xr(a))) {
      const p = xa(a);
      s = Ha(a), d.x = p.x + a.clientLeft, d.y = p.y + a.clientTop;
    }
    const f = !u || h || o ? kr(0) : $c(u, i);
    return { width: r.width * s.x, height: r.height * s.y, x: r.x * s.x - i.scrollLeft * s.x + d.x + f.x, y: r.y * s.y - i.scrollTop * s.y + d.y + f.y };
  }, getDocumentElement: yr, getClippingRect: function(n) {
    let { element: t, boundary: r, rootBoundary: a, strategy: l } = n;
    const o = [...r === "clippingAncestors" ? yl(t) ? [] : (function(i, s) {
      const d = s.get(i);
      if (d) return d;
      let h = Ii(i, [], !1).filter((I) => gr(I) && Wa(I) !== "body"), f = null;
      const p = hr(i).position === "fixed";
      let v = p ? ea(i) : i;
      for (; gr(v) && !Ua(v); ) {
        const I = hr(v), y = ps(v);
        y || I.position !== "fixed" || (f = null), (p ? !y && !f : !y && I.position === "static" && f && vg.has(f.position) || Bi(v) && !y && qc(i, v)) ? h = h.filter((x) => x !== v) : f = I, v = ea(v);
      }
      return s.set(i, h), h;
    })(t, this._c) : [].concat(r), a], u = o[0], c = o.reduce((i, s) => {
      const d = Ac(t, s, l);
      return i.top = ka(d.top, i.top), i.right = hl(d.right, i.right), i.bottom = hl(d.bottom, i.bottom), i.left = ka(d.left, i.left), i;
    }, Ac(t, u, l));
    return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
  }, getOffsetParent: Tc, getElementRects: async function(n) {
    const t = this.getOffsetParent || Tc, r = this.getDimensions, a = await r(n.floating);
    return { reference: _g(n.reference, await t(n.floating), n.strategy), floating: { x: 0, y: 0, width: a.width, height: a.height } };
  }, getClientRects: function(n) {
    return Array.from(n.getClientRects());
  }, getDimensions: function(n) {
    const { width: t, height: r } = Dc(n);
    return { width: t, height: r };
  }, getScale: Ha, isElement: gr, isRTL: function(n) {
    return hr(n).direction === "rtl";
  } };
  function Gc(n, t) {
    return n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height;
  }
  function kg(n, t, r, a) {
    a === void 0 && (a = {});
    const { ancestorScroll: l = !0, ancestorResize: o = !0, elementResize: u = typeof ResizeObserver == "function", layoutShift: c = typeof IntersectionObserver == "function", animationFrame: i = !1 } = a, s = vs(n), d = l || o ? [...s ? Ii(s) : [], ...Ii(t)] : [];
    d.forEach((y) => {
      l && y.addEventListener("scroll", r, { passive: !0 }), o && y.addEventListener("resize", r);
    });
    const h = s && c ? (function(y, x) {
      let B, D = null;
      const j = yr(y);
      function C() {
        var F;
        clearTimeout(B), (F = D) == null || F.disconnect(), D = null;
      }
      return (function F(K, O) {
        K === void 0 && (K = !1), O === void 0 && (O = 1), C();
        const le = y.getBoundingClientRect(), { left: ee, top: N, width: H, height: Q } = le;
        if (K || x(), !H || !Q) return;
        const Z = { rootMargin: -fl(N) + "px " + -fl(j.clientWidth - (ee + H)) + "px " + -fl(j.clientHeight - (N + Q)) + "px " + -fl(ee) + "px", threshold: ka(0, hl(1, O)) || 1 };
        let z = !0;
        function P(V) {
          const G = V[0].intersectionRatio;
          if (G !== O) {
            if (!z) return F();
            G ? F(!1, G) : B = setTimeout(() => {
              F(!1, 1e-7);
            }, 1e3);
          }
          G !== 1 || Gc(le, y.getBoundingClientRect()) || F(), z = !1;
        }
        try {
          D = new IntersectionObserver(P, { ...Z, root: j.ownerDocument });
        } catch {
          D = new IntersectionObserver(P, Z);
        }
        D.observe(y);
      })(!0), C;
    })(s, r) : null;
    let f, p = -1, v = null;
    u && (v = new ResizeObserver((y) => {
      let [x] = y;
      x && x.target === s && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
        var B;
        (B = v) == null || B.observe(t);
      })), r();
    }), s && !i && v.observe(s), v.observe(t));
    let I = i ? xa(n) : null;
    return i && (function y() {
      const x = xa(n);
      I && !Gc(I, x) && r(), I = x, f = requestAnimationFrame(y);
    })(), r(), () => {
      var y;
      d.forEach((x) => {
        l && x.removeEventListener("scroll", r), o && x.removeEventListener("resize", r);
      }), h == null || h(), (y = v) == null || y.disconnect(), v = null, i && cancelAnimationFrame(f);
    };
  }
  const yg = function(n) {
    return { name: "offset", options: n, async fn(t) {
      var r, a;
      const { x: l, y: o, placement: u, middlewareData: c } = t, i = await (async function(s, d) {
        const { placement: h, platform: f, elements: p } = s, v = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), I = ya(h), y = vl(h), x = Xr(h) === "y", B = sg.has(I) ? -1 : 1, D = v && x ? -1 : 1, j = bl(d, s);
        let { mainAxis: C, crossAxis: F, alignmentAxis: K } = typeof j == "number" ? { mainAxis: j, crossAxis: 0, alignmentAxis: null } : { mainAxis: j.mainAxis || 0, crossAxis: j.crossAxis || 0, alignmentAxis: j.alignmentAxis };
        return y && typeof K == "number" && (F = y === "end" ? -1 * K : K), x ? { x: F * D, y: C * B } : { x: C * B, y: F * D };
      })(t, n);
      return u === ((r = c.offset) == null ? void 0 : r.placement) && (a = c.arrow) != null && a.alignmentOffset ? {} : { x: l + i.x, y: o + i.y, data: { ...i, placement: u } };
    } };
  }, xg = function(n) {
    return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
      const { x: r, y: a, placement: l } = t, { mainAxis: o = !0, crossAxis: u = !1, limiter: c = { fn: (y) => {
        let { x, y: B } = y;
        return { x, y: B };
      } }, ...i } = bl(n, t), s = { x: r, y: a }, d = await Cc(t, i), h = Xr(ya(l)), f = kc(h);
      let p = s[f], v = s[h];
      if (o) {
        const y = f === "y" ? "bottom" : "right";
        p = mc(p + d[f === "y" ? "top" : "left"], p, p - d[y]);
      }
      if (u) {
        const y = h === "y" ? "bottom" : "right";
        v = mc(v + d[h === "y" ? "top" : "left"], v, v - d[y]);
      }
      const I = c.fn({ ...t, [f]: p, [h]: v });
      return { ...I, data: { x: I.x - r, y: I.y - a, enabled: { [f]: o, [h]: u } } };
    } };
  }, wg = function(n) {
    return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
      var r, a;
      const { placement: l, middlewareData: o, rects: u, initialPlacement: c, platform: i, elements: s } = t, { mainAxis: d = !0, crossAxis: h = !0, fallbackPlacements: f, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: I = !0, ...y } = bl(n, t);
      if ((r = o.arrow) != null && r.alignmentOffset) return {};
      const x = ya(l), B = Xr(c), D = ya(c) === c, j = await (i.isRTL == null ? void 0 : i.isRTL(s.floating)), C = f || (D || !I ? [_l(c)] : (function(Z) {
        const z = _l(Z);
        return [hs(Z), z, hs(z)];
      })(c)), F = v !== "none";
      !f && F && C.push(...lg(c, I, v, j));
      const K = [c, ...C], O = await Cc(t, y), le = [];
      let ee = ((a = o.flip) == null ? void 0 : a.overflows) || [];
      if (d && le.push(O[x]), h) {
        const Z = (function(z, P, V) {
          V === void 0 && (V = !1);
          const G = vl(z), U = xc(z), ce = yc(U);
          let W = U === "x" ? G === (V ? "end" : "start") ? "right" : "left" : G === "start" ? "bottom" : "top";
          return P.reference[ce] > P.floating[ce] && (W = _l(W)), [W, _l(W)];
        })(l, u, j);
        le.push(O[Z[0]], O[Z[1]]);
      }
      if (ee = [...ee, { placement: l, overflows: le }], !le.every((Z) => Z <= 0)) {
        var N, H;
        const Z = (((N = o.flip) == null ? void 0 : N.index) || 0) + 1, z = K[Z];
        if (z && (!(h === "alignment" && B !== Xr(z)) || ee.every((V) => Xr(V.placement) !== B || V.overflows[0] > 0)))
          return { data: { index: Z, overflows: ee }, reset: { placement: z } };
        let P = (H = ee.filter((V) => V.overflows[0] <= 0).sort((V, G) => V.overflows[1] - G.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!P) switch (p) {
          case "bestFit": {
            var Q;
            const V = (Q = ee.filter((G) => {
              if (F) {
                const U = Xr(G.placement);
                return U === B || U === "y";
              }
              return !0;
            }).map((G) => [G.placement, G.overflows.filter((U) => U > 0).reduce((U, ce) => U + ce, 0)]).sort((G, U) => G[1] - U[1])[0]) == null ? void 0 : Q[0];
            V && (P = V);
            break;
          }
          case "initialPlacement":
            P = c;
        }
        if (l !== P) return { reset: { placement: P } };
      }
      return {};
    } };
  }, Pg = (n, t, r) => {
    const a = /* @__PURE__ */ new Map(), l = { platform: mg, ...r }, o = { ...l.platform, _c: a };
    return (async (u, c, i) => {
      const { placement: s = "bottom", strategy: d = "absolute", middleware: h = [], platform: f } = i, p = h.filter(Boolean), v = await (f.isRTL == null ? void 0 : f.isRTL(c));
      let I = await f.getElementRects({ reference: u, floating: c, strategy: d }), { x: y, y: x } = Sc(I, s, v), B = s, D = {}, j = 0;
      for (let C = 0; C < p.length; C++) {
        const { name: F, fn: K } = p[C], { x: O, y: le, data: ee, reset: N } = await K({ x: y, y: x, initialPlacement: s, placement: B, strategy: d, middlewareData: D, rects: I, platform: f, elements: { reference: u, floating: c } });
        y = O != null ? O : y, x = le != null ? le : x, D = { ...D, [F]: { ...D[F], ...ee } }, N && j <= 50 && (j++, typeof N == "object" && (N.placement && (B = N.placement), N.rects && (I = N.rects === !0 ? await f.getElementRects({ reference: u, floating: c, strategy: d }) : N.rects), { x: y, y: x } = Sc(I, B, v)), C = -1);
      }
      return { x: y, y: x, placement: B, strategy: d, middlewareData: D };
    })(n, t, { ...l, platform: o });
  };
  function Xn(n) {
    const t = { bold: "bold", light: "300", medium: "500", regular: "normal" };
    for (const r in t) if (n.includes(r)) return t[r];
    return "normal";
  }
  function er(n) {
    return n.includes("italic") ? "italic" : "normal";
  }
  function je(n) {
    return `rgba(${n.red}, ${n.green}, ${n.blue}, ${n.alpha})`;
  }
  const Sg = { "SF Mono": '"SF Mono", ui-monospace, Menlo, monospace', Helvetica: '"Helvetica Neue", Helvetica, -apple-system, sans-serif', "New York": '"New York", ui-serif, Georgia, serif', "System UI": "system-ui, -apple-system, BlinkMacSystemFont, sans-serif" };
  function Cg(n) {
    var t;
    return (t = Sg[n]) != null ? t : `"${n}"`;
  }
  function pn(n) {
    return Object.entries(n).reduce((t, [r, a]) => (a && t.push(`--${r}:${a}`), t), []).join(";");
  }
  function Oc(n) {
    var t, r;
    const { colors: a, fonts: l, cornerRadius: o, spacing: u, imageSize: c, imageCornerRadius: i, bundleBarsPerRow: s, dealBars: d } = n, h = a.border || a.primary, f = Math.min(d.length, s ? parseInt(s) : 3).toString();
    return pn({ "block-font-family": l.fontFamily ? Cg(l.fontFamily) : null, "block-title-color": je(a.title), "block-title-font-size": l.blockTitle.size + "px", "block-title-font-weight": Xn(l.blockTitle.style), "block-title-font-style": er(l.blockTitle.style), "block-spacing": u == null ? void 0 : u.toString(), "bar-border-radius": (o || 0) + "px", "bar-background-color": je(a.background), "bar-selected-background-color": je(a.selectedBackground || a.background), "bar-border-color": je({ ...h, alpha: 0.3 * h.alpha }), "bar-selected-border-color": je(h), "block-block-title-color": je(a.blockTitle || a.title), "bar-title-color": je(a.title), "bar-title-font-size": l.title.size + "px", "bar-title-font-weight": Xn(l.title.style), "bar-title-font-style": er(l.title.style), "bar-subtitle-color": je(a.subtitle), "bar-subtitle-font-size": l.subtitle.size + "px", "bar-subtitle-font-weight": Xn(l.subtitle.style), "bar-subtitle-font-style": er(l.subtitle.style), "bar-price-color": je(a.price || a.title), "bar-full-price-color": je(a.fullPrice || a.subtitle), "bar-label-border-top-radius": (o ? o - 1 : 0) + "px", "bar-label-background-color": je(a.labelBackground), "bar-label-color": je(a.label), "bar-label-font-size": l.label.size + "px", "bar-label-font-weight": Xn(l.label.style), "bar-label-font-style": er(l.label.style), "bar-most-popular-background-color": je(a.badgeBackground), "bar-most-popular-color": je(a.badgeText), "bar-variant-select-border-radius": (o || 0) / 2 + "px", "bar-image-size": (c || 48) + "px", "bar-image-border-radius": (i || 0) + "px", "kaching-bundle-products-image-border-radius": (o || 0) / 2 + "px", "kaching-bundles-unit-label-font-size": l.unitLabel ? l.unitLabel.size + "px" : null, "kaching-bundles-unit-label-font-weight": l.unitLabel ? Xn(l.unitLabel.style) : null, "kaching-bundles-unit-label-font-style": l.unitLabel ? er(l.unitLabel.style) : null, "bundle-bars-per-row": f, "kaching-collection-breaks-require-selection-background-color": ((t = n.collectionBreaks) == null ? void 0 : t.requireItemSelectionAlert) && je(n.collectionBreaks.requireItemSelectionAlert.backgroundColor), "kaching-collection-breaks-require-selection-text-color": ((r = n.collectionBreaks) == null ? void 0 : r.requireItemSelectionAlert) && je(n.collectionBreaks.requireItemSelectionAlert.textColor) });
  }
  const Fc = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Bg = (n) => {
    const t = n.replace(/[^a-zA-Z]+/g, "").toLowerCase();
    if (!(t in Fc)) return;
    const r = Fc[t];
    return { red: r[0], green: r[1], blue: r[2], alpha: 1 };
  }, Ig = (n, t) => ({ red: Math.max(0, n.red - Math.round(n.red * t)), green: Math.max(0, n.green - Math.round(n.green * t)), blue: Math.max(0, n.blue - Math.round(n.blue * t)), alpha: n.alpha });
  var Mg = $("<div></div>");
  function Pl(n, t) {
    Ye(t, !0);
    let r = k(t, "color", 7), a = k(t, "image", 7), l = k(t, "size", 7), o = k(t, "shape", 7), u = k(t, "unavailable", 7, !1);
    const c = g(() => r() ? (function(f) {
      f = f.replace(/^#/, "");
      let p = parseInt(f, 16);
      return { red: p >> 16 & 255, green: p >> 8 & 255, blue: 255 & p, alpha: 1 };
    })(r()) : null), i = g(() => {
      let f = { "kaching-swatch-size": `${l() - 2}px` };
      const p = { rounded: 20, circle: 50 }[o()];
      return p && (f = { ...f, "kaching-swatch-border-radius": `${p}%` }), a() ? f = { ...f, "kaching-swatch-image-url": `url(${a()})` } : e(c) && (f = { ...f, "kaching-swatch-color": je(e(c)), "kaching-swatch-border-color": je(Ig(e(c), 0.1)) }), pn(f);
    });
    var s = { get color() {
      return r();
    }, set color(f) {
      r(f), m();
    }, get image() {
      return a();
    }, set image(f) {
      a(f), m();
    }, get size() {
      return l();
    }, set size(f) {
      l(f), m();
    }, get shape() {
      return o();
    }, set shape(f) {
      o(f), m();
    }, get unavailable() {
      return u();
    }, set unavailable(f = !1) {
      u(f), m();
    } }, d = Mg();
    let h;
    return be((f) => {
      h = Tt(d, 1, "kaching-bundles__swatch", null, h, f), Wt(d, e(i));
    }, [() => ({ "kaching-bundles__swatch--unavailable": u() })]), b(n, d), Ke(s);
  }
  function Rt(n, t) {
    Ye(t, !0);
    let r = k(t, "element", 7, "button"), a = k(t, "class", 7), l = k(t, "onclick", 7), o = k(t, "onkeydown", 7), u = k(t, "data-value", 7), c = k(t, "title", 7), i = k(t, "id", 7), s = k(t, "role", 7), d = k(t, "aria-label", 7), h = k(t, "aria-expanded", 7), f = k(t, "aria-haspopup", 7), p = k(t, "aria-selected", 7), v = k(t, "aria-checked", 7), I = k(t, "aria-activedescendant", 7), y = k(t, "aria-controls", 7), x = k(t, "tabindex", 7), B = k(t, "disabled", 7, !1), D = k(t, "ref", 15);
    function j(O) {
      o() && (o()(O), O.defaultPrevented) || B() || O.key !== "Enter" && O.key !== " " || (O.preventDefault(), O.currentTarget.click());
    }
    function C(O) {
      var le;
      if (B()) return O.preventDefault(), void O.stopPropagation();
      (le = l()) == null || le(O);
    }
    var F = { get element() {
      return r();
    }, set element(O = "button") {
      r(O), m();
    }, get class() {
      return a();
    }, set class(O) {
      a(O), m();
    }, get onclick() {
      return l();
    }, set onclick(O) {
      l(O), m();
    }, get onkeydown() {
      return o();
    }, set onkeydown(O) {
      o(O), m();
    }, get "data-value"() {
      return u();
    }, set "data-value"(O) {
      u(O), m();
    }, get title() {
      return c();
    }, set title(O) {
      c(O), m();
    }, get id() {
      return i();
    }, set id(O) {
      i(O), m();
    }, get role() {
      return s();
    }, set role(O) {
      s(O), m();
    }, get "aria-label"() {
      return d();
    }, set "aria-label"(O) {
      d(O), m();
    }, get "aria-expanded"() {
      return h();
    }, set "aria-expanded"(O) {
      h(O), m();
    }, get "aria-haspopup"() {
      return f();
    }, set "aria-haspopup"(O) {
      f(O), m();
    }, get "aria-selected"() {
      return p();
    }, set "aria-selected"(O) {
      p(O), m();
    }, get "aria-checked"() {
      return v();
    }, set "aria-checked"(O) {
      v(O), m();
    }, get "aria-activedescendant"() {
      return I();
    }, set "aria-activedescendant"(O) {
      I(O), m();
    }, get "aria-controls"() {
      return y();
    }, set "aria-controls"(O) {
      y(O), m();
    }, get tabindex() {
      return x();
    }, set tabindex(O) {
      x(O), m();
    }, get disabled() {
      return B();
    }, set disabled(O = !1) {
      B(O), m();
    }, get ref() {
      return D();
    }, set ref(O) {
      D(O), m();
    } }, K = ze();
    return Ud(ve(K), r, 0, (O, le) => {
      ul(O, (N) => D(N), () => D()), Jd(O, () => {
        var N, H;
        return { role: (N = s()) != null ? N : "button", tabindex: (H = x()) != null ? H : B() ? -1 : 0, class: a(), onclick: C, "data-value": u(), title: c(), id: i(), "aria-label": d(), "aria-expanded": h(), "aria-haspopup": f(), "aria-selected": p(), "aria-checked": v(), "aria-activedescendant": I(), "aria-controls": y(), "aria-disabled": B() ? "true" : void 0, onkeydown: j };
      });
      var ee = ze();
      lc(ve(ee), t, "default", {}), b(le, ee);
    }), b(n, K), Ke(F);
  }
  Ne(Pl, { color: {}, image: {}, size: {}, shape: {}, unavailable: {} }, [], [], !0), Ne(Rt, { element: {}, class: {}, onclick: {}, onkeydown: {}, "data-value": {}, title: {}, id: {}, role: {}, "aria-label": {}, "aria-expanded": {}, "aria-haspopup": {}, "aria-selected": {}, "aria-checked": {}, "aria-activedescendant": {}, "aria-controls": {}, tabindex: {}, disabled: {}, ref: {} }, ["default"], [], !0);
  const Lc = "translations", wa = (n = {}) => {
    const t = Or(Ec(n));
    return Ta(Lc, t), { translate: t, setTranslations: (r) => {
      t.set(Ec(r));
    } };
  }, It = () => {
    const n = Va(Lc);
    if (!n) throw new Error("getTranslations must be called within a component tree that has setupTranslations initialized");
    return n;
  }, Ec = (n) => (t) => n[t] || t;
  function ms(n) {
    return String.fromCharCode(64 + n);
  }
  async function pr(n, t, r = {}, a = !0) {
    a && await Xl();
    const l = new CustomEvent(t, { detail: r, bubbles: !0, cancelable: !0, composed: !0 });
    n.dispatchEvent(l);
  }
  function Nt(n) {
    return typeof n == "number" ? n : Number(n.split("/").pop());
  }
  function tr(n) {
    const t = n.variants.filter((r) => r.availableForSale);
    return t.length > 0 ? { ...n, variants: t } : n;
  }
  var Dg = $("<span> <!></span>"), zg = $("<span> </span>"), $g = $("<!> <!>", 1), Ag = $("<span> <!></span>"), qg = $("<span> </span>"), Vg = $("<!> <!>", 1), Tg = $('<div class="kaching-bundles__swatch-dropdown__options" role="listbox"></div>'), Gg = $('<div class="kaching-bundles__swatch-dropdown kaching-bundles-option"><!> <!></div>');
  function jc(n, t) {
    Ye(t, !0);
    const r = () => De(x, "$translate", a), [a, l] = ft();
    let o = k(t, "option", 7), u = k(t, "swatchSize", 7), c = k(t, "swatchShape", 7), i = k(t, "value", 7), s = k(t, "onChange", 7), d = Ae(!1), h = Ae(-1), f = Ae(void 0), p = Ae(void 0), v = g(() => o().optionValues.find((Q) => Q.name === i()) || o().optionValues[0]);
    const I = `swatch-dropdown-${Math.random().toString(16).slice(2)}`;
    function y(Q) {
      return `${I}-option-${Q}`;
    }
    const x = It();
    function B() {
      te(d, !0), te(h, o().optionValues.findIndex((Q) => Q.name === i()), !0), e(h) === -1 && te(h, 0);
    }
    function D() {
      te(d, !1), te(h, -1);
    }
    function j() {
      var Q;
      D(), (Q = e(f)) == null || Q.focus();
    }
    function C(Q) {
      i(Q), j();
      try {
        const Z = o().optionValues.find((z) => z.name === Q);
        Z != null && Z.unavailable && pr(document.body, "kaching-unavailable-option-value-selected", { swatch: "dropdown" });
      } catch (Z) {
        console.error(Z);
      }
      s()(i());
    }
    function F(Q, Z) {
      const z = (P) => {
        Q.contains(P.target) || Z();
      };
      return document.addEventListener("click", z, !0), { destroy() {
        document.removeEventListener("click", z, !0);
      } };
    }
    Ze(() => {
      if (e(d) && e(f) && e(p)) return kg(e(f), e(p), async () => {
        if (!e(f) || !e(p)) return;
        const Q = e(p), { x: Z, y: z } = await Pg(e(f), Q, { placement: "bottom-start", strategy: "fixed", middleware: [yg(2), wg(), xg({ padding: 8 })] });
        Q.style.left = `${Z}px`, Q.style.top = `${z}px`;
      });
    });
    var K = { get option() {
      return o();
    }, set option(Q) {
      o(Q), m();
    }, get swatchSize() {
      return u();
    }, set swatchSize(Q) {
      u(Q), m();
    }, get swatchShape() {
      return c();
    }, set swatchShape(Q) {
      c(Q), m();
    }, get value() {
      return i();
    }, set value(Q) {
      i(Q), m();
    }, get onChange() {
      return s();
    }, set onChange(Q) {
      s(Q), m();
    } }, O = Gg(), le = S(O);
    {
      let Q = g(() => e(d) && e(h) >= 0 ? y(e(h)) : void 0);
      Rt(le, { element: "span", class: "kaching-bundles__bar-variant-select", role: "combobox", get "aria-label"() {
        return o().name;
      }, onclick: function(Z) {
        e(d) ? (te(d, !1), te(h, -1)) : B(), Z.preventDefault();
      }, onkeydown: function(Z) {
        if (!e(d)) return void (Z.key !== "ArrowDown" && Z.key !== "ArrowUp" && Z.key !== "Enter" && Z.key !== " " || (Z.preventDefault(), B()));
        const z = o().optionValues.length;
        switch (Z.key) {
          case "Escape":
            Z.preventDefault(), j();
            break;
          case "ArrowDown":
            Z.preventDefault(), te(h, e(h) < z - 1 ? e(h) + 1 : 0, !0);
            break;
          case "ArrowUp":
            Z.preventDefault(), te(h, e(h) > 0 ? e(h) - 1 : z - 1, !0);
            break;
          case "Home":
            Z.preventDefault(), te(h, 0);
            break;
          case "End":
            Z.preventDefault(), te(h, z - 1);
            break;
          case "Enter":
          case " ":
            Z.preventDefault(), e(h) >= 0 && C(o().optionValues[e(h)].name);
        }
      }, get "aria-expanded"() {
        return e(d);
      }, "aria-haspopup": "listbox", get "aria-controls"() {
        return I;
      }, get "aria-activedescendant"() {
        return e(Q);
      }, get ref() {
        return e(f);
      }, set ref(Z) {
        te(f, Z, !0);
      }, children: (Z, z) => {
        var P = $g(), V = ve(P);
        Pl(V, { get color() {
          return e(v).swatch.color;
        }, get image() {
          return e(v).swatch.image;
        }, get size() {
          return u();
        }, get shape() {
          return c();
        }, get unavailable() {
          return e(v).unavailable;
        } }), et(E(V, 2), () => e(v).name, (G) => {
          var U = ze(), ce = ve(U), W = (T) => {
            var M = Dg(), L = S(M);
            Te(E(L), () => r()("system.unavailable_option_value")), w(M), be(() => {
              var Y;
              return bt(L, `${(Y = e(v).name) != null ? Y : ""} - `);
            }), b(T, M);
          }, _ = (T) => {
            var M = zg(), L = S(M, !0);
            w(M), be(() => bt(L, e(v).name)), b(T, M);
          };
          R(ce, (T) => {
            e(v).unavailable ? T(W) : T(_, !1);
          }), b(G, U);
        }), b(Z, P);
      }, $$slots: { default: !0 } });
    }
    var ee = E(le, 2), N = (Q) => {
      var Z = Tg();
      Yt(Z, 23, () => o().optionValues, (z) => z.name, (z, P, V) => {
        {
          let G = g(() => ["kaching-bundles__swatch-dropdown__option", "kaching-bundles-option-value", e(V) === e(h) && "kaching-bundles__swatch-dropdown__option--focused"]), U = g(() => y(e(V))), ce = g(() => e(P).name === i());
          Rt(z, { element: "span", get class() {
            return e(G);
          }, get id() {
            return e(U);
          }, role: "option", tabindex: -1, get "aria-selected"() {
            return e(ce);
          }, get "data-value"() {
            return e(P).name;
          }, onclick: () => C(e(P).name), children: (W, _) => {
            var T = Vg(), M = ve(T);
            {
              let q = g(() => 1.333 * u());
              Pl(M, { get color() {
                return e(P).swatch.color;
              }, get image() {
                return e(P).swatch.image;
              }, get size() {
                return e(q);
              }, get shape() {
                return c();
              }, get unavailable() {
                return e(P).unavailable;
              } });
            }
            var L = E(M, 2), Y = (q) => {
              var A = Ag(), re = S(A);
              Te(E(re), () => r()("system.unavailable_option_value")), w(A), be(() => {
                var ne;
                return bt(re, `${(ne = e(P).name) != null ? ne : ""} - `);
              }), b(q, A);
            }, J = (q) => {
              var A = qg(), re = S(A, !0);
              w(A), be(() => bt(re, e(P).name)), b(q, A);
            };
            R(L, (q) => {
              e(P).unavailable ? q(Y) : q(J, !1);
            }), b(W, T);
          }, $$slots: { default: !0 } });
        }
      }), w(Z), ul(Z, (z) => te(p, z), () => e(p)), be(() => xe(Z, "id", I)), b(Q, Z);
    };
    R(ee, (Q) => {
      e(d) && Q(N);
    }), w(O), ls(O, (Q, Z) => F == null ? void 0 : F(Q, Z), () => D), be(() => {
      xe(O, "data-name", o().name), xe(O, "data-value", i());
    }), b(n, O);
    var H = Ke(K);
    return l(), H;
  }
  function Og(n, t, r) {
    try {
      const a = t().optionValues.find((l) => l.name === n.target.value);
      a != null && a.unavailable && pr(document.body, "kaching-unavailable-option-value-selected", { swatch: "default" });
    } catch (a) {
      console.error(a);
    }
    r()(n.target.value);
  }
  Ne(jc, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0);
  var Fg = $(" <!>", 1), Lg = $('<option class="kaching-bundles-option-value"><!></option>'), Eg = $('<select class="kaching-bundles__bar-variant-select kaching-bundles-option"></select>');
  function Rc(n, t) {
    Ye(t, !0);
    const [r, a] = ft();
    let l = k(t, "option", 7), o = k(t, "value", 7), u = k(t, "onChange", 7);
    const c = It();
    var i, s = { get option() {
      return l();
    }, set option(f) {
      l(f), m();
    }, get value() {
      return o();
    }, set value(f) {
      o(f), m();
    }, get onChange() {
      return u();
    }, set onChange(f) {
      u(f), m();
    } }, d = Eg();
    d.__change = [Og, l, u], Yt(d, 21, () => l().optionValues, (f) => f.name, (f, p) => {
      var v = Lg(), I = S(v), y = (D) => {
        var j = Fg(), C = ve(j);
        Te(E(C), () => De(c, "$translate", r)("system.unavailable_option_value")), be(() => {
          var F;
          return bt(C, `${(F = e(p).name) != null ? F : ""} - `);
        }), b(D, j);
      }, x = (D) => {
        var j = Mn();
        be(() => bt(j, e(p).name)), b(D, j);
      };
      R(I, (D) => {
        e(p).unavailable ? D(y) : D(x, !1);
      }), w(v);
      var B = {};
      be(() => {
        var D;
        xe(v, "data-value", e(p).name), B !== (B = e(p).name) && (v.value = (D = v.__value = e(p).name) != null ? D : "");
      }), b(f, v);
    }), w(d), cs(d), be(() => {
      var f;
      xe(d, "aria-label", l().name), xe(d, "data-name", l().name), xe(d, "data-value", o()), i !== (i = o()) && (d.value = (f = d.__value = o()) != null ? f : "", wi(d, o()));
    }), b(n, d);
    var h = Ke(s);
    return a(), h;
  }
  Sn(["change"]), Ne(Rc, { option: {}, value: {}, onChange: {} }, [], [], !0);
  var jg = $('<div class="kaching-bundles__swatch-buttons kaching-bundles-option"></div>');
  function Nc(n, t) {
    Ye(t, !0);
    const [r, a] = ft();
    let l = k(t, "option", 7), o = k(t, "swatchSize", 7), u = k(t, "swatchShape", 7), c = k(t, "value", 7), i = k(t, "onChange", 7);
    const s = It();
    var d = { get option() {
      return l();
    }, set option(p) {
      l(p), m();
    }, get swatchSize() {
      return o();
    }, set swatchSize(p) {
      o(p), m();
    }, get swatchShape() {
      return u();
    }, set swatchShape(p) {
      u(p), m();
    }, get value() {
      return c();
    }, set value(p) {
      c(p), m();
    }, get onChange() {
      return i();
    }, set onChange(p) {
      i(p), m();
    } }, h = jg();
    Yt(h, 21, () => l().optionValues, (p) => p.name, (p, v) => {
      {
        let I = g(() => ["kaching-bundles__swatch-buttons__button", "kaching-bundles-option-value", e(v).name === c() && "kaching-bundles__swatch-buttons__button--selected"]), y = g(() => e(v).unavailable ? `${e(v).name} - ${De(s, "$translate", r)("system.unavailable_option_value")}` : e(v).name);
        Rt(p, { element: "span", get class() {
          return e(I);
        }, get title() {
          return e(v).name;
        }, get "aria-label"() {
          return e(y);
        }, get "data-value"() {
          return e(v).name;
        }, onclick: () => (function(x) {
          c(x);
          try {
            const B = l().optionValues.find((D) => D.name === x);
            B != null && B.unavailable && pr(document.body, "kaching-unavailable-option-value-selected", { swatch: "buttons" });
          } catch (B) {
            console.error(B);
          }
          i()(c());
        })(e(v).name), children: (x, B) => {
          Pl(x, { get color() {
            return e(v).swatch.color;
          }, get image() {
            return e(v).swatch.image;
          }, get size() {
            return o();
          }, get shape() {
            return u();
          }, get unavailable() {
            return e(v).unavailable;
          } });
        }, $$slots: { default: !0 } });
      }
    }), w(h), be(() => {
      xe(h, "data-name", l().name), xe(h, "data-value", c());
    }), b(n, h);
    var f = Ke(d);
    return a(), f;
  }
  function Qc(n, t) {
    Ye(t, !0);
    let r = k(t, "value", 7), a = k(t, "option", 7), l = k(t, "swatchSize", 7, 18), o = k(t, "swatchShape", 7, "circle"), u = k(t, "swatchType", 7), c = k(t, "onChange", 7);
    function i(v) {
      c()({ position: a().position, value: v });
    }
    var s = { get value() {
      return r();
    }, set value(v) {
      r(v), m();
    }, get option() {
      return a();
    }, set option(v) {
      a(v), m();
    }, get swatchSize() {
      return l();
    }, set swatchSize(v = 18) {
      l(v), m();
    }, get swatchShape() {
      return o();
    }, set swatchShape(v = "circle") {
      o(v), m();
    }, get swatchType() {
      return u();
    }, set swatchType(v) {
      u(v), m();
    }, get onChange() {
      return c();
    }, set onChange(v) {
      c(v), m();
    } }, d = ze(), h = ve(d), f = (v) => {
      jc(v, { get option() {
        return a();
      }, get swatchSize() {
        return l();
      }, get swatchShape() {
        return o();
      }, get value() {
        return r();
      }, onChange: i });
    }, p = (v) => {
      var I = ze(), y = ve(I), x = (D) => {
        Nc(D, { get option() {
          return a();
        }, get swatchSize() {
          return l();
        }, get swatchShape() {
          return o();
        }, get value() {
          return r();
        }, onChange: i });
      }, B = (D) => {
        Rc(D, { get option() {
          return a();
        }, get value() {
          return r();
        }, onChange: i });
      };
      R(y, (D) => {
        u() === "colorButtons" || u() === "imageButtons" || u() === "productImageButtons" ? D(x) : D(B, !1);
      }, !0), b(v, I);
    };
    return R(h, (v) => {
      u() === "colorDropdown" || u() === "imageDropdown" || u() === "productImageDropdown" || u() === "mixedDropdown" ? v(f) : v(p, !1);
    }), b(n, d), Ke(s);
  }
  Ne(Nc, { option: {}, swatchSize: {}, swatchShape: {}, value: {}, onChange: {} }, [], [], !0), Ne(Qc, { value: {}, option: {}, swatchSize: {}, swatchShape: {}, swatchType: {}, onChange: {} }, [], [], !0);
  const Wc = "mediaImages", Mi = (n = []) => {
    const t = Or(Uc(n));
    return Ta(Wc, t), { getMediaImageUrl: t, setMediaImages: (r) => {
      t.set(Uc(r));
    } };
  }, Dn = () => {
    const n = Va(Wc);
    if (!n) throw new Error("getMediaImages must be called within a component tree that has setupMediaImages initialized");
    return n;
  }, Uc = (n) => (t) => {
    if (!t) return;
    const r = n.find((a) => a.gid === t);
    return r == null ? void 0 : r.url;
  }, Hc = "config", Pa = (n) => {
    const t = Or(n);
    return Ta(Hc, t), { config: t, setConfig: (r) => {
      t.set(r);
    } };
  }, gn = () => {
    const n = Va(Hc);
    if (!n) throw new Error("getConfig must be called within a component tree that has setupConfig initialized");
    return n;
  }, Zc = "swatchSettings", Di = (n) => {
    const t = Or(n);
    return Ta(Zc, t), { swatchSettings: t, setSwatchSettings: (r) => {
      t.set(r);
    } };
  };
  var Rg = $('<img alt="" class="kaching-bundles__bar-variant-image"/>'), Ng = $('<div class="kaching-bundles__bar-variant-number"><span>#</span> <span> </span></div>'), Qg = $('<div class="kaching-bundles__invalid-variant-error"><!></div>'), Wg = $('<div><div class="kaching-bundles__bar-variant__content"><!> <div class="kaching-bundles__bar-variant-selects"></div></div> <!></div>');
  function zn(n, t) {
    Ye(t, !0);
    const r = () => De(I, "$config", l), a = () => De(y, "$swatchSettings", l), [l, o] = ft();
    let u = k(t, "product", 7), c = k(t, "selectedVariantId", 7), i = k(t, "number", 7, void 0), s = k(t, "showImage", 7, !1), d = k(t, "forceDropdown", 7, !1), h = k(t, "onChange", 7), f = k(t, "onOptionChange", 7);
    const p = It(), v = Dn(), I = gn(), y = (() => {
      const _ = Va(Zc);
      if (!_) throw new Error("getSwatchSettings must be called within a component tree that has setupSwatchSettings initialized");
      return _;
    })();
    let x = g(() => u().variants.find((_) => _.id === c())), B = Ae(at([]));
    Ze(() => {
      if (e(x)) te(B, [...e(x).options], !0);
      else {
        if (c() && r().featureFlags.hide_missing_variants && u().variants.length > 0) {
          const _ = ee(u().variants, 0, e(B));
          if (_) return te(B, [..._.options], !0), void tn(() => h()(_.id));
        }
        te(B, [], !0);
      }
    });
    let D = g(() => {
      return _ = u(), T = e(B), M = a().swatchOptions, L = De(v, "$getMediaImageUrl", l), Y = d(), _.options.map((J) => ({ name: J.name, position: J.position, swatchType: F(J, M, Y), optionValues: J.optionValues.map((q) => {
        const A = le(J.position, q.name, T, _);
        if (r().featureFlags.hide_missing_variants && A.length === 0) return null;
        const re = !A.some((ne) => ne.availableForSale);
        return { name: q.name, unavailable: re, swatch: K(J, q, M, L, T, _) };
      }).filter((q) => q !== null) }));
      var _, T, M, L, Y;
    }), j = g(() => {
      var _;
      return s() ? ((_ = e(x)) == null ? void 0 : _.image) || u().image : null;
    });
    function C({ position: _, value: T }) {
      const M = e(B)[_ - 1];
      e(B)[_ - 1] = T;
      let L = u().variants.find((Y) => e(B).every((J, q) => Y.options[q] === J));
      if (!L && r().featureFlags.hide_missing_variants) {
        const Y = ee(le(_, T, e(B), u()), _, e(B));
        Y && (L = Y, te(B, [...L.options], !0));
      }
      L && (h()(L.id), f() && f()(_, T, M));
    }
    function F(_, T, M) {
      var L;
      const Y = (L = T.find((J) => J.name === _.defaultName)) == null ? void 0 : L.swatchType;
      if (Y && Y !== "default") return M ? (function(J) {
        switch (J) {
          case "colorButtons":
            return "colorDropdown";
          case "imageButtons":
            return "imageDropdown";
          case "productImageButtons":
            return "productImageDropdown";
          default:
            return J;
        }
      })(Y) : Y;
      if (!r().featureFlags.native_swatches_disabled) {
        for (const J of _.optionValues) if (J.swatch.image || J.swatch.color) return "mixedDropdown";
      }
      return "default";
    }
    function K(_, T, M, L, Y, J) {
      var q, A;
      const re = r().featureFlags.native_swatches_disabled ? null : T.swatch, ne = M.find((ue) => ue.name === _.defaultName);
      if (!ne || ne.swatchType === "default") return re || { color: null, image: null };
      if (ne.swatchType === "colorButtons" || ne.swatchType === "colorDropdown")
        return { color: O((q = ne.colors.find((ue) => ue.name === T.defaultName)) == null ? void 0 : q.color) || (re == null ? void 0 : re.color) || O(Bg(T.defaultName)) || null, image: null };
      if (ne.swatchType === "imageButtons" || ne.swatchType === "imageDropdown") {
        const ue = L(((A = ne.images.find((ae) => ae.name === T.defaultName)) == null ? void 0 : A.mediaImageGID) || null);
        return { color: (re == null ? void 0 : re.color) || null, image: ue || (re == null ? void 0 : re.image) || null };
      }
      if (ne.swatchType === "productImageDropdown" || ne.swatchType === "productImageButtons") {
        const ue = _.position - 1, ae = J.variants.filter((he) => he.image && he.options[ue] === T.name);
        let fe = ae[0], Ce = 0;
        for (const he of ae) {
          let se = 0;
          for (let _e = 0; _e < ue; _e++) he.options[_e] === Y[_e] && se++;
          se > Ce && (Ce = se, fe = he);
        }
        return { color: null, image: (fe == null ? void 0 : fe.image) || null };
      }
      return { color: null, image: null };
    }
    function O(_) {
      if (!_) return;
      const { red: T, green: M, blue: L } = _;
      return `#${T.toString(16).padStart(2, "0")}${M.toString(16).padStart(2, "0")}${L.toString(16).padStart(2, "0")}`;
    }
    function le(_, T, M, L) {
      const Y = _ - 1, J = M.slice(0, Y);
      return L.variants.filter((q) => q.options[Y] === T && J.every((A, re) => q.options[re] === A));
    }
    function ee(_, T, M) {
      if (_.length === 0) return null;
      let L = _[0], Y = -1;
      const J = M.slice(T);
      for (const q of _) {
        let A = 0;
        for (let re = 0; re < J.length; re++) q.options[T + re] === J[re] && (A += J.length - re);
        A > Y && (Y = A, L = q);
      }
      return L;
    }
    var N = { get product() {
      return u();
    }, set product(_) {
      u(_), m();
    }, get selectedVariantId() {
      return c();
    }, set selectedVariantId(_) {
      c(_), m();
    }, get number() {
      return i();
    }, set number(_ = void 0) {
      i(_), m();
    }, get showImage() {
      return s();
    }, set showImage(_ = !1) {
      s(_), m();
    }, get forceDropdown() {
      return d();
    }, set forceDropdown(_ = !1) {
      d(_), m();
    }, get onChange() {
      return h();
    }, set onChange(_) {
      h(_), m();
    }, get onOptionChange() {
      return f();
    }, set onOptionChange(_) {
      f(_), m();
    } }, H = Wg();
    let Q;
    var Z = S(H), z = S(Z), P = (_) => {
      var T = Rg();
      be(() => xe(T, "src", e(j))), b(_, T);
    }, V = (_) => {
      var T = ze(), M = ve(T), L = (Y) => {
        var J = Ng(), q = E(S(J), 2), A = S(q, !0);
        w(q), w(J), be(() => bt(A, i())), b(Y, J);
      };
      R(M, (Y) => {
        i() && Y(L);
      }, !0), b(_, T);
    };
    R(z, (_) => {
      e(j) ? _(P) : _(V, !1);
    });
    var G = E(z, 2);
    Yt(G, 21, () => e(D), (_) => _.name, (_, T) => {
      Qc(_, { get option() {
        return e(T);
      }, get swatchSize() {
        return a().swatchSize;
      }, get swatchShape() {
        return a().swatchShape;
      }, get swatchType() {
        return e(T).swatchType;
      }, get value() {
        return e(B)[e(T).position - 1];
      }, onChange: C });
    }), w(G), w(Z);
    var U = E(Z, 2), ce = (_) => {
      var T = Qg();
      Te(S(T), () => De(p, "$translate", l)("system.invalid_variant")), w(T), b(_, T);
    };
    R(U, (_) => {
      e(x) && e(x).availableForSale || _(ce);
    }), w(H), be((_) => Q = Tt(H, 1, "kaching-bundles__bar-variant", null, Q, _), [() => ({ "kaching-bundles__bar-variant--invalid": !e(x) || !e(x).availableForSale })]), b(n, H);
    var W = Ke(N);
    return o(), W;
  }
  Ne(zn, { product: {}, selectedVariantId: {}, number: {}, showImage: {}, forceDropdown: {}, onChange: {}, onOptionChange: {} }, [], [], !0);
  var Ug = $('<a target="_blank"><!></a>'), Hg = $("<div><!></div>");
  function Vn(n, t) {
    Ye(t, !0);
    const r = k(t, "url", 7), a = k(t, "children", 7), l = k(t, "class", 7);
    var o = { get url() {
      return r();
    }, set url(d) {
      r(d), m();
    }, get children() {
      return a();
    }, set children(d) {
      a(d), m();
    }, get class() {
      return l();
    }, set class(d) {
      l(d), m();
    } }, u = ze(), c = ve(u), i = (d) => {
      var h = Ug();
      as(S(h), a), w(h), be(() => {
        xe(h, "href", r()), Tt(h, 1, xi(l()));
      }), b(d, h);
    }, s = (d) => {
      var h = Hg();
      as(S(h), a), w(h), be(() => Tt(h, 1, xi(l()))), b(d, h);
    };
    return R(c, (d) => {
      r() ? d(i) : d(s, !1);
    }), b(n, u), Ke(o);
  }
  Ne(Vn, { url: {}, children: {}, class: {} }, [], [], !0);
  const Jc = "priceFormatter", Za = (n = "{{amount}}", t) => {
    const r = Or(Yc(n, t));
    return Ta(Jc, r), { formatPrice: r, setMoneyFormat: (a, l) => {
      r.set(Yc(a, l));
    } };
  }, sn = () => {
    const n = Va(Jc);
    if (!n) throw new Error("getPriceFormatter must be called within a component tree that has setupPriceFormatter initialized");
    return n;
  }, Yc = (n, t) => (r, a) => Zg(r, n, (!(a != null && a.preserveDecimals) || Math.round(r) % 100 == 0) && t), Zg = (n, t, r) => {
    const a = ((i, s) => s ? i.includes("amount_no_decimals") ? i : i.replace(/\{\{.+\}\}/g, "{{ amount_no_decimals }}") : i)(t, r), l = { amount: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimal: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_no_decimals: (i) => i.toLocaleString("en-US", { maximumFractionDigits: 0 }), amount_with_comma_separator: (i) => i.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), amount_no_decimals_with_comma_separator: (i) => i.toLocaleString("de-DE", { maximumFractionDigits: 0 }), amount_with_apostrophe_separator: (i) => i.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, "'"), amount_no_decimals_with_space_separator: (i) => i.toLocaleString("fr-FR", { maximumFractionDigits: 0 }).replace(/\s/g, " "), amount_with_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " "), amount_with_period_and_space_separator: (i) => i.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\s/g, " ").replace(",", ".") }, o = /{{\s*(\w+)\s*}}/, u = a.match(o), c = (l[u ? u[1] : "amount"] || l.amount)(n / 100);
    return a.replace(o, c);
  }, Kc = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.08398%205H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Xc = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00065%202.08337V7.91671M2.08398%205.00004H7.91732'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Jg = { new_price: ({ totalDiscountedPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), new_total: ({ totalDiscountedPrice: n }) => ({ value: n, type: "price" }), original_price: ({ totalFullPrice: n, quantity: t }) => ({ value: n / t, type: "price" }), original_total: ({ totalFullPrice: n }) => ({ value: n, type: "price" }), saved_total: ({ totalFullPrice: n, totalDiscountedPrice: t }) => ({ value: n - t, type: "price" }), saved_amount: ({ totalFullPrice: n, totalDiscountedPrice: t, quantity: r }) => ({ value: (n - t) / r, type: "price" }), quantity: ({ quantity: n }) => ({ value: n, type: "number" }), gifts_count: ({ freeGiftsCount: n }) => {
    if (n !== void 0) return { value: n, type: "number" };
  }, buy_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== "bxgy") return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: t - Math.floor(t / r) * n.getQuantity, type: "number" };
  }, get_quantity: ({ dealBar: n, quantity: t }) => {
    if ((n == null ? void 0 : n.dealBarType) !== "bxgy") return;
    const r = n.buyQuantity + n.getQuantity;
    return { value: Math.floor(t / r) * n.getQuantity, type: "number" };
  }, saved_percentage: ({ totalFullPrice: n, totalDiscountedPrice: t, dealBar: r, legacySavedPercentage: a }) => {
    if (a && r && (r.dealBarType === "quantity-break" || !r.dealBarType) && r.discountType === "percentage") return { value: Math.round(Number(r.discountValue)), type: "percentage" };
    let l = (n - t) / n * 100;
    return l = Math.round(100 * l) / 100, { value: Math.round(l), type: "percentage" };
  }, new_unit_price: ({ totalDiscountedPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, saved_per_unit: ({ totalFullPrice: n, totalDiscountedPrice: t, unitQuantity: r }) => {
    if (r) return { value: (n - t) / r, type: "price", preserveDecimals: !0 };
  }, original_unit_price: ({ totalFullPrice: n, unitQuantity: t }) => {
    if (t) return { value: n / t, type: "price", preserveDecimals: !0 };
  }, unit_quantity: ({ unitQuantity: n }) => {
    if (n) return { value: n, type: "number" };
  }, selling_plan_discount: ({ sellingPlan: n, totalFullPrice: t, quantity: r }) => {
    const a = n == null ? void 0 : n.priceAdjustment;
    if (a) switch (a.type) {
      case "percentage":
        return a.value <= 0 ? void 0 : { value: a.value, type: "percentage" };
      case "fixed_amount":
        return a.value <= 0 ? void 0 : { value: a.value, type: "price" };
      case "price": {
        const l = t / r - a.value;
        return l <= 0 ? void 0 : { value: l, type: "price" };
      }
    }
  } }, Yg = /{{\s*([a-zA-Z0-9_.]+)\s*(?:([+\-*/])\s*(\d+(?:\.\d+)?)?)?\s*}}/g, Kg = /\{\{[^}]*\}\}/g, Xg = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, totalFullPrice: l, totalDiscountedPrice: o, quantity: u, dealBar: c, legacySavedPercentage: i, unitQuantity: s, sellingPlan: d, freeGiftsCount: h }) => (f, p, v) => {
    const I = Jg[f];
    if (I) {
      const y = I({ totalFullPrice: l, totalDiscountedPrice: o, quantity: u, dealBar: c, legacySavedPercentage: i, unitQuantity: s, sellingPlan: d, freeGiftsCount: h });
      if (!y) return;
      let x = y.value;
      if (p !== void 0 && v !== void 0) {
        const D = ((j, C, F) => {
          switch (C) {
            case "+":
              return j + F;
            case "-":
              return j - F;
            case "*":
              return j * F;
            case "/":
              return F === 0 ? void 0 : j / F;
          }
        })(x, p, y.type !== "price" || p !== "+" && p !== "-" ? v : 100 * v);
        if (D === void 0) return;
        x = D;
      }
      const B = p === "/" || y.preserveDecimals === !0;
      return ((D, j, C, F) => {
        switch (j) {
          case "price":
            return C(D, { preserveDecimals: F });
          case "number":
            return String(Math.round(100 * D) / 100);
          case "percentage":
            return `${Math.round(D)}%`;
        }
      })(x, y.type, n, B);
    }
    if (p === void 0) return (({ variable: y, product: x, products: B, selectedProductTitles: D, sellingPlan: j }) => {
      var C, F;
      const K = y.match(/^product_(\d+)$/);
      if (K) {
        const O = Number(K[1]);
        return (C = B == null ? void 0 : B.get(O)) == null ? void 0 : C.title;
      }
      switch (y) {
        case "product":
          return (F = x == null ? void 0 : x.title) != null ? F : D && D.length > 0 ? D.join(", ") : void 0;
        case "metafield":
          return (x == null ? void 0 : x.metafields.text) || void 0;
        case "metafield2":
          return (x == null ? void 0 : x.metafields.text2) || void 0;
        case "metafield3":
          return (x == null ? void 0 : x.metafields.text3) || void 0;
        case "metafield4":
          return (x == null ? void 0 : x.metafields.text4) || void 0;
        case "selling_plan":
          return (j == null ? void 0 : j.name) || void 0;
      }
    })({ variable: f, product: t, products: r, selectedProductTitles: a, sellingPlan: d });
  }, hn = ({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, totalFullPrice: l, totalDiscountedPrice: o, quantity: u, dealBar: c, legacySavedPercentage: i = !1, unitQuantity: s, sellingPlan: d, freeGiftsCount: h }) => (f) => {
    if (!f) return f;
    const p = Xg({ priceFormatter: n, product: t, products: r, selectedProductTitles: a, totalFullPrice: l, totalDiscountedPrice: o, quantity: u, dealBar: c, legacySavedPercentage: i, unitQuantity: s, sellingPlan: d, freeGiftsCount: h });
    return f.replace(Yg, (v, I, y, x) => {
      var B;
      if (y && x) {
        const D = parseFloat(x);
        return (B = p(I, y, D)) != null ? B : "";
      }
      return p(I) || "";
    }).replace(Kg, "");
  };
  function ks(n) {
    const { unitPriceMeasurement: t } = n;
    return t ? t.referenceValue == 1 ? t.referenceUnit : `${t.referenceValue}${t.referenceUnit}` : null;
  }
  function nr(n) {
    return n.reduce((t, { variant: r, quantity: a }) => {
      const { unitPriceMeasurement: l } = r;
      if (!l) return t;
      const o = (function(u, c, i) {
        if (c === i) return u;
        if (c === "g" && i === "kg" || c === "ml" && i === "l") return u / 1e3;
      })(l.quantityValue, l.quantityUnit, l.referenceUnit);
      return o ? t + o / l.referenceValue * a : t;
    }, 0) || null;
  }
  var eh = $('<img class="kaching-bundles__choose-multiple-gifts__product-image" alt=""/>'), th = $('<span class="kaching-bundles__choose-multiple-gifts__product-title"> </span>'), nh = $('<span class="kaching-bundles__choose-multiple-gifts__subtitle"><!></span>'), rh = $('<div class="kaching-bundles__choose-multiple-gifts__product-compare-at-price"><!></div>'), ah = $('<span class="kaching-bundles__choose-multiple-gifts__variant-counter"></span>'), ih = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selector-row"><div class="kaching-bundles__choose-multiple-gifts__variant-selector-content"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-with-counter"><!> <div class="kaching-bundles__choose-multiple-gifts__variant-selector-wrapper"><!></div></div></div></div>'), lh = $('<div class="kaching-bundles__choose-multiple-gifts__variant-selectors"></div>'), sh = $('<img alt="Decrease"/>'), oh = $('<img alt="Increase"/>'), ch = $('<div class="kaching-bundles__choose-multiple-gifts__gift-quantity"><!> <span class="kaching-bundles__choose-multiple-gifts__gift-quantity-value"> </span> <!></div>'), uh = $("<img/>"), dh = $("<!> <!>", 1), gh = $('<div class="kaching-bundles__choose-multiple-gifts__product"><div class="kaching-bundles__choose-multiple-gifts__product-container"><!> <div class="kaching-bundles__choose-multiple-gifts__product-content"><!> <!> <div class="kaching-bundles__choose-multiple-gifts__product-price-container"><div class="kaching-bundles__choose-multiple-gifts__product-price"><!></div> <!></div> <!></div></div> <div class="kaching-bundles__choose-multiple-gifts__product-actions"><!> <!></div></div>');
  function eu(n, t) {
    Ye(t, !0);
    const r = () => De(y, "$formatPrice", l), a = () => De(I, "$translate", l), [l, o] = ft(), u = k(t, "product", 7), c = k(t, "dealBlock", 7), i = k(t, "multipleGiftsSelector", 7), s = k(t, "selectedVariantIds", 7), d = k(t, "availableQuantity", 7), h = k(t, "onSelect", 7), f = k(t, "onRemove", 7), p = k(t, "onVariantChange", 7), v = k(t, "onQuantityChange", 7), I = It(), y = sn();
    let x = Ae(!1);
    const B = g(() => s().length > 0), D = g(() => s().length || 1), j = g(() => !e(B) && d() === 0), C = g(() => u().variants.find((se) => se.id === s()[0]) || u().variants[0]), F = g(() => e(x) && e(C).image || u().image), K = g(() => s().map((se) => u().variants.find((_e) => _e.id === se) || u().variants[0])), O = g(() => e(K).length > 0 ? e(K).reduce((se, _e) => se + Z(c(), _e), 0) : Z(c(), e(C))), le = g(() => u().url ? `${u().url}?variant=${s()[0] || u().variants[0].id}` : void 0), ee = g(() => c().chooseMultipleGiftsModal), N = g(() => hn({ priceFormatter: r(), product: u(), totalFullPrice: e(O), totalDiscountedPrice: 0, quantity: e(D), unitQuantity: nr(e(K).map((se) => ({ variant: se, quantity: 1 }))) })), H = g(() => {
      var se;
      return e(N)(a()(((se = e(ee)) == null ? void 0 : se.subtitle) || ""));
    }), Q = g(() => {
      var se, _e;
      return e(B) ? (se = e(ee)) == null ? void 0 : se.buttonTextAfterSelection : (_e = e(ee)) == null ? void 0 : _e.buttonTextBeforeSelection;
    });
    function Z(se, _e) {
      return se.useProductCompareAtPrice && _e.compareAtPrice ? Math.max(_e.price, _e.compareAtPrice) : _e.price;
    }
    function z() {
      e(D) <= 1 || v()(e(D) - 1);
    }
    function P() {
      e(D) >= d() || v()(e(D) + 1);
    }
    var V = { get product() {
      return u();
    }, set product(se) {
      u(se), m();
    }, get dealBlock() {
      return c();
    }, set dealBlock(se) {
      c(se), m();
    }, get multipleGiftsSelector() {
      return i();
    }, set multipleGiftsSelector(se) {
      i(se), m();
    }, get selectedVariantIds() {
      return s();
    }, set selectedVariantIds(se) {
      s(se), m();
    }, get availableQuantity() {
      return d();
    }, set availableQuantity(se) {
      d(se), m();
    }, get onSelect() {
      return h();
    }, set onSelect(se) {
      h(se), m();
    }, get onRemove() {
      return f();
    }, set onRemove(se) {
      f(se), m();
    }, get onVariantChange() {
      return p();
    }, set onVariantChange(se) {
      p(se), m();
    }, get onQuantityChange() {
      return v();
    }, set onQuantityChange(se) {
      v(se), m();
    } }, G = gh(), U = S(G), ce = S(U), W = (se) => {
      Vn(se, { get url() {
        return e(le);
      }, class: "kaching-bundles__choose-multiple-gifts__product-image-link", children: (_e, Ge) => {
        var pe = eh();
        xe(pe, "width", 100), xe(pe, "height", 100), be(() => xe(pe, "src", e(F))), b(_e, pe);
      }, $$slots: { default: !0 } });
    };
    R(ce, (se) => {
      e(F) && se(W);
    });
    var _ = E(ce, 2), T = S(_);
    Vn(T, { get url() {
      return e(le);
    }, class: "kaching-bundles__choose-multiple-gifts__product-link", children: (se, _e) => {
      var Ge = th(), pe = S(Ge, !0);
      w(Ge), be(() => bt(pe, u().title)), b(se, Ge);
    }, $$slots: { default: !0 } });
    var M = E(T, 2), L = (se) => {
      var _e = nh();
      Te(S(_e), () => e(H)), w(_e), b(se, _e);
    };
    R(M, (se) => {
      e(H) && se(L);
    });
    var Y = E(M, 2), J = S(Y);
    Te(S(J), () => a()("system.free")), w(J);
    var q = E(J, 2), A = (se) => {
      var _e = ze();
      et(ve(_e), () => e(O), (Ge) => {
        var pe = rh();
        Te(S(pe), () => r()(e(O))), w(pe), b(Ge, pe);
      }), b(se, _e);
    };
    R(q, (se) => {
      i().showPrice && e(O) > 0 && se(A);
    }), w(Y);
    var re = E(Y, 2), ne = (se) => {
      var _e = lh();
      Yt(_e, 21, s, Tr, (Ge, pe, de) => {
        var Se = ih(), Oe = S(Se), Qe = S(Oe), we = (me) => {
          Fr(me, { get product() {
            return u();
          }, class: "kaching-bundles__choose-multiple-gifts__product-option-names" });
        };
        R(Qe, (me) => {
          de === 0 && me(we);
        });
        var X = E(Qe, 2), Ie = S(X), ge = (me) => {
          var Me = ah();
          Me.textContent = `#${de + 1}`, b(me, Me);
        };
        R(Ie, (me) => {
          s().length > 1 && me(ge);
        });
        var Ve = E(Ie, 2);
        zn(S(Ve), { get product() {
          return u();
        }, get selectedVariantId() {
          return e(pe);
        }, onChange: (me) => {
          te(x, !0), p()(de, me);
        } }), w(Ve), w(X), w(Oe), w(Se), b(Ge, Se);
      }), w(_e), b(se, _e);
    };
    R(re, (se) => {
      u().variants.length > 1 && se(ne);
    }), w(_), w(U);
    var ue = E(U, 2), ae = S(ue), fe = (se) => {
      var _e = ch(), Ge = S(_e);
      {
        let Oe = g(() => e(D) <= 1);
        Rt(Ge, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: z, get disabled() {
          return e(Oe);
        }, children: (Qe, we) => {
          var X = sh();
          be(() => xe(X, "src", Kc)), b(Qe, X);
        }, $$slots: { default: !0 } });
      }
      var pe = E(Ge, 2), de = S(pe, !0);
      w(pe);
      var Se = E(pe, 2);
      {
        let Oe = g(() => e(D) >= d());
        Rt(Se, { element: "span", class: "kaching-bundles__choose-multiple-gifts__gift-quantity-button", onclick: P, get disabled() {
          return e(Oe);
        }, children: (Qe, we) => {
          var X = oh();
          be(() => xe(X, "src", Xc)), b(Qe, X);
        }, $$slots: { default: !0 } });
      }
      w(_e), be(() => bt(de, e(D))), b(se, _e);
    };
    R(ae, (se) => {
      e(B) && i().maxQuantity > 1 && se(fe);
    });
    var Ce = E(ae, 2);
    {
      let se = g(() => ["kaching-bundles__choose-multiple-gifts__product-button", e(j) && "kaching-bundles__choose-multiple-gifts__product-button--disabled", e(B) && "kaching-bundles__choose-multiple-gifts__product-button--selected"]);
      Rt(Ce, { element: "span", get class() {
        return e(se);
      }, onclick: function() {
        e(B) ? (te(x, !1), f()()) : h()();
      }, get disabled() {
        return e(j);
      }, children: (_e, Ge) => {
        var pe = dh(), de = ve(pe), Se = (X) => {
          var Ie = uh();
          be((ge) => {
            xe(Ie, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.3333%205.00008V4.33341C13.3333%203.39999%2013.3333%202.93328%2013.1517%202.57676C12.9919%202.26316%2012.7369%202.00819%2012.4233%201.8484C12.0668%201.66675%2011.6001%201.66675%2010.6667%201.66675H9.33333C8.39991%201.66675%207.9332%201.66675%207.57668%201.8484C7.26308%202.00819%207.00811%202.26316%206.84832%202.57676C6.66667%202.93328%206.66667%203.39999%206.66667%204.33341V5.00008M2.5%205.00008H17.5M15.8333%205.00008V14.3334C15.8333%2015.7335%2015.8333%2016.4336%2015.5608%2016.9684C15.3212%2017.4388%2014.9387%2017.8212%2014.4683%2018.0609C13.9335%2018.3334%2013.2335%2018.3334%2011.8333%2018.3334H8.16667C6.76654%2018.3334%206.06647%2018.3334%205.53169%2018.0609C5.06129%2017.8212%204.67883%2017.4388%204.43915%2016.9684C4.16667%2016.4336%204.16667%2015.7335%204.16667%2014.3334V5.00008'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), xe(Ie, "alt", ge);
          }, [() => a()("system.remove")]), b(X, Ie);
        };
        R(de, (X) => {
          e(B) && X(Se);
        });
        var Oe = E(de, 2), Qe = (X) => {
          var Ie = Mn();
          be((ge) => bt(Ie, ge), [() => a()(e(Q))]), b(X, Ie);
        }, we = (X) => {
          b(X, Mn("Choose"));
        };
        R(Oe, (X) => {
          e(Q) ? X(Qe) : X(we, !1);
        }), b(_e, pe);
      }, $$slots: { default: !0 } });
    }
    w(ue), w(G), b(n, G);
    var he = Ke(V);
    return o(), he;
  }
  Ne(eu, { product: {}, dealBlock: {}, multipleGiftsSelector: {}, selectedVariantIds: {}, availableQuantity: {}, onSelect: {}, onRemove: {}, onVariantChange: {}, onQuantityChange: {} }, [], [], !0);
  const hh = { red: 0, green: 0, blue: 0, alpha: 0.5 };
  function ph(n, t) {
    var r;
    (r = t()) == null || r();
  }
  function fh(n, t, r, a, l) {
    var o;
    const u = t();
    r()(a().id, u), (o = l()) == null || o();
  }
  var bh = $('<img alt="Close"/>'), vh = $('<div class="kaching-bundles__choose-multiple-gifts"><div class="kaching-bundles__choose-multiple-gifts__header"><h2 class="kaching-bundles__choose-multiple-gifts__heading"><!></h2> <!></div> <div class="kaching-bundles__choose-multiple-gifts__products"></div> <div class="kaching-bundles__choose-multiple-gifts__footer"><span class="kaching-bundles__choose-multiple-gifts__footer-text"> </span> <div class="kaching-bundles__choose-multiple-gifts__footer-buttons"><button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--cancel"> </button> <button class="kaching-bundles__choose-multiple-gifts__footer-button kaching-bundles__choose-multiple-gifts__footer-button--confirm"> </button></div></div></div>');
  function ys(n, t) {
    Ye(t, !0);
    const r = () => De(h, "$translate", a), [a, l] = ft(), o = k(t, "dealBlock", 7), u = k(t, "multipleGiftsSelector", 7), c = k(t, "products", 23, () => []), i = k(t, "initialSelectedGifts", 23, () => []), s = k(t, "onConfirm", 7, () => {
    }), d = k(t, "onClose", 7), h = It();
    let f = Ae(at((function(_) {
      const T = {};
      for (const M of _) {
        const L = M.product.id;
        T[L] || (T[L] = []), T[L].push(M.variant.id);
      }
      return T;
    })(i())));
    const p = g(() => o().chooseMultipleGiftsModal), v = g(() => ((_) => _ ? pn({ "kaching-choose-multiple-gifts-button-size": _.buttonSize + "px", "kaching-choose-multiple-gifts-text-size": _.textSize + "px", "kaching-choose-multiple-gifts-price-color": je(_.priceColor), "kaching-choose-multiple-gifts-compare-at-price-color": je(_.compareAtPriceColor), "kaching-choose-multiple-gifts-text-color": je(_.textColor), "kaching-choose-multiple-gifts-button-color": je(_.buttonColor), "kaching-choose-multiple-gifts-button-text-color": je(_.buttonTextColor), "kaching-choose-multiple-gifts-photo-size": _.productPhotoSize + "px" }) : "")(e(p) || null)), I = g(() => u().maxQuantity), y = g(() => Object.values(e(f)).reduce((_, T) => _ + T.length, 0));
    function x(_) {
      return e(f)[_] || [];
    }
    function B(_) {
      const T = _.variants.find((M) => M.availableForSale);
      return (T == null ? void 0 : T.id) || _.variants[0].id;
    }
    const D = g(() => {
      var _;
      return ((_ = e(p)) == null ? void 0 : _.footerText) || "FREE gifts selected";
    });
    var j = { get dealBlock() {
      return o();
    }, set dealBlock(_) {
      o(_), m();
    }, get multipleGiftsSelector() {
      return u();
    }, set multipleGiftsSelector(_) {
      u(_), m();
    }, get products() {
      return c();
    }, set products(_ = []) {
      c(_), m();
    }, get initialSelectedGifts() {
      return i();
    }, set initialSelectedGifts(_ = []) {
      i(_), m();
    }, get onConfirm() {
      return s();
    }, set onConfirm(_ = () => {
    }) {
      s(_), m();
    }, get onClose() {
      return d();
    }, set onClose(_) {
      d(_), m();
    } }, C = vh(), F = S(C), K = S(F), O = S(K), le = (_) => {
      var T = Mn();
      be((M) => bt(T, M), [() => r()(e(p).heading)]), b(_, T);
    };
    R(O, (_) => {
      var T;
      (T = e(p)) != null && T.heading && _(le);
    }), w(K);
    var ee = E(K, 2), N = (_) => {
      Rt(_, { element: "span", class: "kaching-bundles__choose-multiple-gifts__close", get onclick() {
        return d();
      }, children: (T, M) => {
        var L = bh();
        be(() => xe(L, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(T, L);
      }, $$slots: { default: !0 } });
    };
    R(ee, (_) => {
      d() && _(N);
    }), w(F);
    var H = E(F, 2);
    Yt(H, 21, c, (_) => _.id, (_, T) => {
      {
        let M = g(() => x(e(T).id)), L = g(() => (function(Y) {
          const J = x(Y).length;
          return e(I) - e(y) + J;
        })(e(T).id));
        eu(_, { get dealBlock() {
          return o();
        }, get multipleGiftsSelector() {
          return u();
        }, get product() {
          return e(T);
        }, get selectedVariantIds() {
          return e(M);
        }, get availableQuantity() {
          return e(L);
        }, onSelect: () => (function(Y) {
          if (e(y) >= e(I)) return;
          const J = B(Y), q = c().length === 1 ? e(I) : 1;
          te(f, { ...e(f), [Y.id]: Array(q).fill(J) }, !0);
        })(e(T)), onRemove: () => (function(Y) {
          const { [Y]: J, ...q } = e(f);
          te(f, q, !0);
        })(e(T).id), onVariantChange: (Y, J) => (function(q, A, re) {
          const ne = x(q);
          if (A >= ne.length) return;
          const ue = [...ne];
          ue[A] = re, te(f, { ...e(f), [q]: ue }, !0);
        })(e(T).id, Y, J), onQuantityChange: (Y) => (function(J, q) {
          const A = x(J.id), re = A.length;
          if (q === re) return;
          let ne;
          if (q > re) {
            const ue = B(J), ae = q - re;
            ne = [...A, ...Array(ae).fill(ue)];
          } else ne = A.slice(0, q);
          te(f, { ...e(f), [J.id]: ne }, !0);
        })(e(T), Y) });
      }
    }), w(H);
    var Q = E(H, 2), Z = S(Q), z = S(Z);
    w(Z);
    var P = E(Z, 2), V = S(P);
    V.__click = [ph, d];
    var G = S(V, !0);
    w(V);
    var U = E(V, 2);
    U.__click = [fh, function() {
      const _ = [];
      for (const T of c()) {
        const M = x(T.id);
        for (const L of M) {
          const Y = T.variants.find((q) => q.id === L);
          if (!Y) continue;
          const J = o().useProductCompareAtPrice && Y.compareAtPrice ? Math.max(Y.price, Y.compareAtPrice) : Y.price;
          _.push({ id: `${L}`, variant: Y, product: T, quantity: 1, fullPrice: J });
        }
      }
      return _;
    }, s, u, d];
    var ce = S(U, !0);
    w(U), w(P), w(Q), w(C), be((_, T, M) => {
      var L, Y;
      Wt(C, e(v)), bt(z, `${(L = e(y)) != null ? L : ""}/${(Y = e(I)) != null ? Y : ""}
      ${_ != null ? _ : ""}`), bt(G, T), bt(ce, M);
    }, [() => r()(e(D)), () => r()("system.cancel"), () => r()("system.confirm")]), b(n, C);
    var W = Ke(j);
    return l(), W;
  }
  Sn(["click"]), Ne(ys, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var _h = $('<div class="kaching-bundles"><!></div>');
  function tu(n, t) {
    Ye(t, !0);
    const r = k(t, "config", 7), a = k(t, "dealBlock", 7), l = k(t, "products", 23, () => []), o = k(t, "mediaImages", 7), u = k(t, "translations", 7), c = k(t, "multipleGiftsSelector", 7), { setConfig: i } = Pa(r()), { setMoneyFormat: s } = Za(r().moneyFormat), { setTranslations: d } = wa(u()), { setMediaImages: h } = Mi(o()), { setSwatchSettings: f } = Di({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape });
    Ze(() => {
      i(r());
    }), Ze(() => {
      s(r().moneyFormat, !!a().showPricesWithoutDecimals);
    }), Ze(() => {
      d(u());
    }), Ze(() => {
      h(o());
    }), Ze(() => {
      f({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape });
    });
    var p = { get config() {
      return r();
    }, set config(x) {
      r(x), m();
    }, get dealBlock() {
      return a();
    }, set dealBlock(x) {
      a(x), m();
    }, get products() {
      return l();
    }, set products(x = []) {
      l(x), m();
    }, get mediaImages() {
      return o();
    }, set mediaImages(x) {
      o(x), m();
    }, get translations() {
      return u();
    }, set translations(x) {
      u(x), m();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(x) {
      c(x), m();
    } }, v = ze(), I = ve(v), y = (x) => {
      var B = _h();
      ys(S(B), { get dealBlock() {
        return a();
      }, get products() {
        return l();
      }, get multipleGiftsSelector() {
        return c();
      } }), w(B), b(x, B);
    };
    return R(I, (x) => {
      c() && x(y);
    }), b(n, v), Ke(p);
  }
  function zi(n, t) {
    var r;
    if (!t) return n.price;
    const a = n.sellingPlans.find((l) => l.id === t.id);
    return (r = a == null ? void 0 : a.price) != null ? r : n.price;
  }
  function nu(n, t) {
    const r = t.priceAdjustment;
    if (!r) return n;
    switch (r.type) {
      case "percentage":
        return n * (1 - r.value / 100);
      case "fixed_amount":
        return n - r.value;
      case "price":
        return r.value;
    }
  }
  function $i(n, t) {
    return n.sellingPlans.filter((r) => t.some((a) => a.sellingPlans.some((l) => l.id === r.id)));
  }
  function xs(n, t, r) {
    let a;
    if (n.sellingPlanGid) {
      const l = Nt(n.sellingPlanGid);
      a = t.find((o) => o.id === l);
    } else a = r || t[0];
    return a && t.some((l) => l.id === a.id) ? a : t[0];
  }
  function ws(n, t, r, a) {
    return n || (t ? r.some((l) => l.id === t.id) ? t : r[0] : a && r.length > 0 ? r[0] : void 0);
  }
  customElements.define("kaching-bundles-choose-multiple-gifts", Ne(tu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, multipleGiftsSelector: { attribute: "multiple-gifts-selector", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), fn(this, "component"), this.component = this;
    }
  }));
  const Ln = (n, t, r) => mh(n, t, r) || kh(n, t), mh = (n, t, r) => {
    if (!r || t.sellingPlans.length === 0) return;
    const a = new Set(t.sellingPlans.map((o) => o.id));
    return a.has(r.id) ? n.sellingPlans.find((o) => o.id === r.id) : n.sellingPlans.find((o) => a.has(o.id) && o.name === r.name) || n.sellingPlans.find((o) => o.id === t.sellingPlans[0].id);
  }, kh = (n, t) => {
    if (!n.requiresSellingPlan || t.sellingPlans.length === 0) return;
    const r = t.sellingPlans[0].id;
    return n.sellingPlans.find((a) => a.id === r);
  };
  function Lr({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: l, priceRounding: o, sellingPlan: u, percentageCentsRoundingWorkaround: c }) {
    const i = (function({ discountType: h, discountValue: f, discountQuantity: p, variantQuantities: v, currencyRate: I, sellingPlan: y, percentageCentsRoundingWorkaround: x }) {
      const B = v.map(({ variant: C, quantity: F }) => zi(C, y) * F), D = B.reduce((C, F) => C + F, 0), j = v.map(({ quantity: C }) => C).reduce((C, F) => C + F, 0);
      if (h === "specific") {
        let C = 100 * Number(f) * I;
        if (j > Number(p)) {
          const O = C / Number(p);
          C = Math.ceil(O * j);
        }
        const F = C / j;
        let K = 0;
        for (const { variant: O, quantity: le } of v) {
          if (y && O.sellingPlans.some((ee) => ee.id === y.id) && y.priceAdjustment) {
            K += nu(F, y) * le;
            continue;
          }
          K += F * le;
        }
        return Math.max(0, Math.min(K, D));
      }
      if (h === "percentage") {
        if (x) {
          const F = D * (100 - Number(f)) / 100;
          return Math.max(0, Math.min(Math.ceil(F), D));
        }
        let C = 0;
        for (const { variant: F, quantity: K } of v) {
          const O = zi(F, y);
          C += Math.ceil(O * (100 - Number(f)) / 100) * K;
        }
        return Math.max(0, Math.min(C, D));
      }
      if (h === "amount") {
        const C = Math.round(100 * Number(f)) * I, F = C * j;
        return typeof document != "undefined" && D > 0 && F > D && document.dispatchEvent(new CustomEvent("kaching-bundles-amount-discount-exceeds-price", { detail: { totalDiscount: F, fullOrderPrice: D } })), Math.max(0, Math.min(D - C * j, D));
      }
      return D;
    })({ discountType: n, discountValue: t, discountQuantity: r, variantQuantities: a, currencyRate: l, sellingPlan: u, percentageCentsRoundingWorkaround: c }), s = a.map(({ variant: h, quantity: f }) => o != null && o.v2 ? zi(h, u) * f : h.price * f).reduce((h, f) => h + f, 0), d = a.map(({ quantity: h }) => h).reduce((h, f) => h + f, 0);
    if (o && (n !== "default" || o.v2)) {
      if (o.perItem) {
        const h = Ja(i / d, o.precision) * d;
        return o.v2 && Math.round(h) > Math.round(s) && i / d > 100 ? Ja(i / d - 100, o.precision) * d : h <= s ? h : i;
      }
      {
        const h = Ja(i, o.precision);
        return o.v2 && Math.round(h) > Math.round(s) && i > 100 ? Ja(i - 100, o.precision) : h <= s ? h : i;
      }
    }
    return i;
  }
  function ru(n, t, r, a, l, o) {
    return Lr({ discountType: n.discountType, discountValue: n.discountValue, discountQuantity: n.quantity, variantQuantities: t, currencyRate: r, priceRounding: a, sellingPlan: l, percentageCentsRoundingWorkaround: o });
  }
  function au(n, t, r, a, l) {
    var o, u, c, i;
    const s = [...t].sort((y, x) => y.variant.price - x.variant.price), d = s.reduce((y, x) => y + x.quantity, 0) >= n.buyQuantity + n.getQuantity ? n.getQuantity : 0, h = [], f = [];
    let p = d;
    for (const { variant: y, quantity: x } of s) {
      const B = Math.min(x, p), D = x - B;
      p -= B, B > 0 && h.push({ variant: y, quantity: B }), D > 0 && f.push({ variant: y, quantity: D });
    }
    const v = h.length > 0 ? Lr({ discountType: (o = n.getDiscountType) != null ? o : "percentage", discountValue: (u = n.getDiscountValue) != null ? u : 100, discountQuantity: d, variantQuantities: h, currencyRate: r, priceRounding: a, sellingPlan: l }) : 0, I = f.reduce((y, x) => y + x.quantity, 0);
    return v + Lr({ discountType: (c = n.buyDiscountType) != null ? c : "default", discountValue: (i = n.buyDiscountValue) != null ? i : 0, discountQuantity: I, variantQuantities: f, currencyRate: r, priceRounding: a, sellingPlan: l });
  }
  function Ps(n, t, r, a, l) {
    return n.bundleProducts.filter(({ productGID: o }) => o).map((o) => {
      const u = t[o.id];
      if (!u) return 0;
      const c = Ln(u.product, u.variant, l);
      return Lr({ discountType: o.discountType, discountValue: o.discountValue, discountQuantity: o.quantity, variantQuantities: [u], currencyRate: r, priceRounding: a, sellingPlan: c });
    }).reduce((o, u) => o + u, 0);
  }
  function Ss(n, t, r, a, l) {
    const o = n.bundleProducts.filter(({ productGID: i }) => i).reduce((i, s) => {
      const d = t[s.id];
      if (!d) return i;
      const h = Ln(d.product, d.variant, l);
      return i + (h ? nu(d.variant.price, h) : d.variant.price);
    }, 0), u = Number(n.discountValue) || 0;
    let c;
    switch (n.discountType) {
      case "percentage":
        c = o * (1 - Math.min(Math.max(u, 0), 100) / 100);
        break;
      case "amount":
        c = o - Math.round(100 * u) * r;
        break;
      case "specific":
        c = Math.round(100 * u) * r;
        break;
      default:
        c = o;
    }
    if (c = Math.max(0, Math.min(c, o)), a && (n.discountType !== "default" || a.v2)) {
      const i = c;
      let s = Ja(i, a.precision);
      a.v2 && Math.round(s) > Math.round(o) && i > 100 && (s = Ja(i - 100, a.precision)), c = s <= o ? s : i;
    }
    return Math.max(0, Math.round(c));
  }
  function Ja(n, t = ".00") {
    switch (t) {
      case ".99":
        return n > 99 ? 100 * Math.ceil(n / 100) - 1 : n;
      case ".95":
        return n > 95 ? 100 * Math.ceil(n / 100) - 5 : n;
      case ".90":
        return n > 90 ? 100 * Math.ceil(n / 100) - 10 : n;
      case ".x9":
        return n > 9 ? 10 * Math.ceil(n / 10) - 1 : n;
      case ".x0":
        return 10 * Math.ceil(n / 10);
      default:
        return 100 * Math.ceil(n / 100);
    }
  }
  var yh = $('<img class="kaching-bundles__choose-product__product-image" alt=""/>'), xh = $('<span class="kaching-bundles__choose-product__product-title"> </span>'), wh = $('<span class="kaching-bundles__choose-product__subtitle"><!></span>'), Ph = $('<div class="kaching-bundles__choose-product__product-price"><!></div>'), Sh = $('<div class="kaching-bundles__choose-product__product-compare-at-price"><!></div>'), Ch = $("<div><!> <!></div>"), Bh = $('<div class="kaching-bundles__choose-product__product"><div class="kaching-bundles__choose-product__product-container"><!> <div class="kaching-bundles__choose-product__product-content"><!> <!> <div class="kaching-bundles__choose-product__product-price-container"><!> <!></div> <!></div></div> <!></div>');
  function iu(n, t) {
    var r;
    Ye(t, !0);
    const a = () => De(v, "$config", u), l = () => De(p, "$formatPrice", u), o = () => De(f, "$translate", u), [u, c] = ft(), i = k(t, "product", 7), s = k(t, "dealBlock", 7), d = k(t, "dealBar", 7), h = k(t, "onChoose", 7), f = It(), p = sn(), v = gn();
    let I = Ae(!1), y = Ae(at(((r = i().variants.find((q) => q.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const x = g(() => i().variants.find((q) => q.id === e(y)) || i().variants[0]), B = g(() => {
      var q;
      return e(I) || ((q = s().chooseProductModal) == null ? void 0 : q.showVariantImageByDefault);
    }), D = g(() => e(B) && e(x).image || i().image), j = g(() => s().priceRounding ? { perItem: !0, precision: s().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), C = g(() => d().dealBarType === "bxgy" ? e(x).price : Lr({ discountType: d().discountType, discountValue: d().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(x), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(j) })), F = g(() => (function(q, A) {
      return q.useProductCompareAtPrice && A.compareAtPrice ? Math.max(A.price, A.compareAtPrice) : A.price;
    })(s(), e(x))), K = g(() => i().url ? `${i().url}?variant=${e(y)}` : void 0), O = g(() => hn({ priceFormatter: l(), product: i(), totalFullPrice: e(F), totalDiscountedPrice: e(C), quantity: 1, unitQuantity: nr([{ variant: e(x), quantity: 1 }]) })), le = g(() => e(O)(o()(s().chooseProductModal.subtitle || ""))), ee = g(() => s().chooseProductModal.buttonText);
    function N(q) {
      te(I, !0), te(y, q, !0);
    }
    var H = { get product() {
      return i();
    }, set product(q) {
      i(q), m();
    }, get dealBlock() {
      return s();
    }, set dealBlock(q) {
      s(q), m();
    }, get dealBar() {
      return d();
    }, set dealBar(q) {
      d(q), m();
    }, get onChoose() {
      return h();
    }, set onChoose(q) {
      h(q), m();
    } }, Q = Bh(), Z = S(Q), z = S(Z), P = (q) => {
      Vn(q, { get url() {
        return e(K);
      }, class: "kaching-bundles__choose-product__product-image-link", children: (A, re) => {
        var ne = yh();
        xe(ne, "width", 100), xe(ne, "height", 100), be(() => xe(ne, "src", e(D))), b(A, ne);
      }, $$slots: { default: !0 } });
    };
    R(z, (q) => {
      e(D) && q(P);
    });
    var V = E(z, 2), G = S(V);
    Vn(G, { get url() {
      return e(K);
    }, class: "kaching-bundles__choose-product__product-link", children: (q, A) => {
      var re = xh(), ne = S(re, !0);
      w(re), be(() => bt(ne, i().title)), b(q, re);
    }, $$slots: { default: !0 } });
    var U = E(G, 2), ce = (q) => {
      var A = wh();
      Te(S(A), () => e(le)), w(A), b(q, A);
    };
    R(U, (q) => {
      e(le) && q(ce);
    });
    var W = E(U, 2), _ = S(W);
    et(_, () => e(C), (q) => {
      var A = Ph();
      Te(S(A), () => l()(e(C))), w(A), b(q, A);
    });
    var T = E(_, 2), M = (q) => {
      var A = ze();
      et(ve(A), () => e(F), (re) => {
        var ne = Sh();
        Te(S(ne), () => l()(e(F))), w(ne), b(re, ne);
      }), b(q, A);
    };
    R(T, (q) => {
      e(F) && e(F) > e(C) && q(M);
    }), w(W);
    var L = E(W, 2), Y = (q) => {
      var A = Ch(), re = S(A);
      Fr(re, { get product() {
        return i();
      }, class: "kaching-bundles__choose-product__product-option-names" }), zn(E(re, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(y);
      }, onChange: N }), w(A), b(q, A);
    };
    R(L, (q) => {
      i().variants.length > 1 && q(Y);
    }), w(V), w(Z), Rt(E(Z, 2), { element: "span", class: "kaching-bundles__choose-product__product-button", onclick: function() {
      h()({ product: i(), variant: e(x) });
    }, children: (q, A) => {
      var re = ze(), ne = ve(re), ue = (fe) => {
        var Ce = Mn();
        be((he) => bt(Ce, he), [() => o()(e(ee))]), b(fe, Ce);
      }, ae = (fe) => {
        b(fe, Mn("Choose"));
      };
      R(ne, (fe) => {
        e(ee) ? fe(ue) : fe(ae, !1);
      }), b(q, re);
    }, $$slots: { default: !0 } }), w(Q), b(n, Q);
    var J = Ke(H);
    return c(), J;
  }
  Ne(iu, { product: {}, dealBlock: {}, dealBar: {}, onChoose: {} }, [], [], !0);
  const Cs = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
  var Ih = $('<img alt="Close"/>'), Mh = (n, t) => {
    te(t, !e(t));
  }, Dh = (n, t, r, a) => {
    te(t, e(r).value, !0), te(a, !1);
  }, zh = $('<img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-option-check"/>'), $h = $('<button type="button" class="kaching-bundles__choose-product__sort-option"><span> </span> <!></button>'), Ah = $('<div class="kaching-bundles__choose-product__sort-menu"></div>'), qh = $('<div class="kaching-bundles__choose-product__controls"><div class="kaching-bundles__choose-product__search-field"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__search-icon"/> <input type="search" class="kaching-bundles__choose-product__search-input"/></div> <div class="kaching-bundles__choose-product__sort"><button type="button" class="kaching-bundles__choose-product__sort-button"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__sort-icon"/> </button> <!></div></div>'), Vh = (n, t) => {
    te(t, "");
  }, Th = $('<div class="kaching-bundles__choose-product__empty-state-icon-wrapper"><img alt="" aria-hidden="true" class="kaching-bundles__choose-product__empty-state-icon"/></div> <h3 class="kaching-bundles__choose-product__empty-state-title"> </h3> <p class="kaching-bundles__choose-product__empty-state-description"> </p> <button type="button" class="kaching-bundles__choose-product__empty-state-clear-button"> </button>', 1), Gh = $('<div class="kaching-bundles__choose-product__empty-state"><!></div>'), Oh = $('<div class="kaching-bundles__choose-product"><div class="kaching-bundles__choose-product__header"><h2 class="kaching-bundles__choose-product__heading"><!></h2> <!></div> <!> <div class="kaching-bundles__choose-product__products"><!></div></div>');
  function Bs(n, t) {
    var r;
    Ye(t, !0);
    const a = () => De(h, "$translate", l), [l, o] = ft(), u = k(t, "dealBlock", 7), c = k(t, "dealBar", 7), i = k(t, "products", 23, () => []), s = k(t, "onChoose", 7), d = k(t, "onClose", 7), h = It(), f = g(() => u().chooseProductModal), p = g(() => ((W) => pn({ "kaching-choose-product-button-size": W.buttonSize + "px", "kaching-choose-product-text-size": W.textSize + "px", "kaching-choose-product-price-color": je(W.priceColor), "kaching-choose-product-compare-at-price-color": je(W.compareAtPriceColor), "kaching-choose-product-text-color": je(W.textColor), "kaching-choose-product-button-color": je(W.buttonColor), "kaching-choose-product-button-text-color": je(W.buttonTextColor), "kaching-choose-product-photo-size": W.productPhotoSize + "px" }))(e(f)));
    let v = Ae(""), I = Ae(!1);
    const y = { Relevance: "relevance", NewestFirst: "newest-first", PriceLowToHigh: "price-low-to-high", PriceHighToLow: "price-high-to-low" }, x = g(() => [{ value: y.Relevance, label: a()("system.sort_relevance") }, { value: y.NewestFirst, label: a()("system.sort_newest_first") }, { value: y.PriceLowToHigh, label: a()("system.sort_price_low_to_high") }, { value: y.PriceHighToLow, label: a()("system.sort_price_high_to_low") }]);
    let B = Ae(at(Object.values(y).includes((r = e(f).defaultSortOption) != null ? r : "") ? e(f).defaultSortOption : y.Relevance));
    const D = g(() => e(f).showSearchField ? i().filter((W) => W.title.toLowerCase().includes(e(v).toLowerCase().trim())) : i()), j = g(() => {
      const W = [...e(D)], _ = (M) => {
        const L = M.variants.find((Y) => Y.availableForSale) || M.variants[0];
        return (L == null ? void 0 : L.price) || 0;
      }, T = (M) => {
        if (!M.createdAt) return 0;
        const L = Date.parse(M.createdAt);
        return Number.isNaN(L) ? 0 : L;
      };
      switch (e(B)) {
        case y.Relevance:
          return W;
        case y.NewestFirst:
          return W.sort((M, L) => {
            const Y = T(L) - T(M);
            return Y !== 0 ? Y : L.id - M.id;
          });
        case y.PriceLowToHigh:
          return W.sort((M, L) => _(M) - _(L));
        case y.PriceHighToLow:
          return W.sort((M, L) => _(L) - _(M));
        default:
          return W;
      }
    }), C = g(() => e(f).showSearchField && e(v).trim().length > 0 && e(j).length === 0);
    function F() {
      te(I, !1);
    }
    function K(W, _) {
      const T = (M) => {
        W.contains(M.target) || _();
      };
      return document.addEventListener("click", T, !0), { destroy() {
        document.removeEventListener("click", T, !0);
      } };
    }
    var O = { get dealBlock() {
      return u();
    }, set dealBlock(W) {
      u(W), m();
    }, get dealBar() {
      return c();
    }, set dealBar(W) {
      c(W), m();
    }, get products() {
      return i();
    }, set products(W = []) {
      i(W), m();
    }, get onChoose() {
      return s();
    }, set onChoose(W) {
      s(W), m();
    }, get onClose() {
      return d();
    }, set onClose(W) {
      d(W), m();
    } }, le = Oh(), ee = S(le), N = S(ee), H = S(N), Q = (W) => {
      var _ = Mn();
      be((T) => bt(_, T), [() => a()(e(f).heading)]), b(W, _);
    };
    R(H, (W) => {
      e(f).heading && W(Q);
    }), w(N), Rt(E(N, 2), { element: "span", class: "kaching-bundles__choose-product__close", get onclick() {
      return d();
    }, children: (W, _) => {
      var T = Ih();
      be(() => xe(T, "src", Cs)), b(W, T);
    }, $$slots: { default: !0 } }), w(ee);
    var Z = E(ee, 2), z = (W) => {
      var _ = qh(), T = S(_), M = S(T), L = E(M, 2);
      Gr(L), w(T);
      var Y = E(T, 2), J = S(Y);
      J.__click = [Mh, I];
      var q = S(J), A = E(q);
      w(J);
      var re = E(J, 2), ne = (ue) => {
        var ae = Ah();
        Yt(ae, 21, () => e(x), (fe) => fe.value, (fe, Ce) => {
          var he = $h();
          he.__click = [Dh, B, Ce, I];
          var se = S(he), _e = S(se, !0);
          w(se);
          var Ge = E(se, 2), pe = (de) => {
            var Se = zh();
            be(() => xe(Se, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6663%205L7.49967%2014.1667L3.33301%2010'%20stroke='%23344054'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(de, Se);
          };
          R(Ge, (de) => {
            e(B) === e(Ce).value && de(pe);
          }), w(he), be(() => bt(_e, e(Ce).label)), b(fe, he);
        }), w(ae), b(ue, ae);
      };
      R(re, (ue) => {
        e(I) && ue(ne);
      }), w(Y), ls(Y, (ue, ae) => K == null ? void 0 : K(ue, ae), () => F), w(_), be((ue, ae, fe) => {
        xe(M, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%2017.5L13.875%2013.875M15.8333%209.16667C15.8333%2012.8486%2012.8486%2015.8333%209.16667%2015.8333C5.48477%2015.8333%202.5%2012.8486%202.5%209.16667C2.5%205.48477%205.48477%202.5%209.16667%202.5C12.8486%202.5%2015.8333%205.48477%2015.8333%209.16667Z'%20stroke='%23717680'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), xe(L, "aria-label", ue), xe(L, "placeholder", ae), xe(q, "src", "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.1667%203.33337V16.6667M14.1667%2016.6667L10.8333%2013.3334M14.1667%2016.6667L17.5%2013.3334M5.83333%2016.6667V3.33337M5.83333%203.33337L2.5%206.66671M5.83333%203.33337L9.16667%206.66671'%20stroke='%23414651'%20stroke-width='1.67'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), bt(A, ` ${fe != null ? fe : ""}`);
      }, [() => a()("system.search"), () => a()("system.search"), () => a()("system.sort_by")]), Yd(L, () => e(v), (ue) => te(v, ue)), b(W, _);
    };
    R(Z, (W) => {
      e(f).showSearchField && W(z);
    });
    var P = E(Z, 2), V = S(P), G = (W) => {
      var _ = Gh(), T = S(_), M = (Y) => {
        var J = Th(), q = ve(J), A = S(q);
        w(q);
        var re = E(q, 2), ne = S(re, !0);
        w(re);
        var ue = E(re, 2), ae = S(ue, !0);
        w(ue);
        var fe = E(ue, 2);
        fe.__click = [Vh, v];
        var Ce = S(fe, !0);
        w(fe), be((he, se, _e) => {
          xe(A, "src", "data:image/svg+xml,%3csvg%20width='56'%20height='56'%20viewBox='0%200%2056%2056'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20fill='%23F2F4F7'/%3e%3crect%20x='4'%20y='4'%20width='48'%20height='48'%20rx='24'%20stroke='%23F9FAFB'%20stroke-width='8'/%3e%3cpath%20d='M37%2037L32.65%2032.65M35%2027C35%2031.4183%2031.4183%2035%2027%2035C22.5817%2035%2019%2031.4183%2019%2027C19%2022.5817%2022.5817%2019%2027%2019C31.4183%2019%2035%2022.5817%2035%2027Z'%20stroke='%23475467'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"), bt(ne, he), bt(ae, se), bt(Ce, _e);
        }, [() => a()("system.no_results_found"), () => a()("system.no_results_description"), () => a()("system.clear_search")]), b(Y, J);
      }, L = (Y) => {
        var J = Mn();
        be((q) => bt(J, q), [() => a()("system.no_products_available")]), b(Y, J);
      };
      R(T, (Y) => {
        e(C) ? Y(M) : Y(L, !1);
      }), w(_), b(W, _);
    }, U = (W) => {
      var _ = ze();
      Yt(ve(_), 17, () => e(j), (T) => T.id, (T, M) => {
        iu(T, { get dealBlock() {
          return u();
        }, get dealBar() {
          return c();
        }, get product() {
          return e(M);
        }, get onChoose() {
          return s();
        } });
      }), b(W, _);
    };
    R(V, (W) => {
      e(j).length === 0 ? W(G) : W(U, !1);
    }), w(P), w(le), be(() => Wt(le, e(p))), b(n, le);
    var ce = Ke(O);
    return o(), ce;
  }
  Sn(["click"]), Ne(Bs, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var Fh = $('<div class="kaching-bundles"><!></div>');
  function lu(n, t) {
    Ye(t, !0);
    const r = k(t, "config", 7), a = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), o = k(t, "products", 23, () => []), u = k(t, "mediaImages", 7), c = k(t, "translations", 7), { setConfig: i } = Pa(r()), { setMoneyFormat: s } = Za(r().moneyFormat), { setTranslations: d } = wa(c()), { setMediaImages: h } = Mi(u()), { setSwatchSettings: f } = Di({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape });
    Ze(() => {
      i(r());
    }), Ze(() => {
      s(r().moneyFormat, !!a().showPricesWithoutDecimals);
    }), Ze(() => {
      d(c());
    }), Ze(() => {
      h(u());
    }), Ze(() => {
      f({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape });
    });
    var p = { get config() {
      return r();
    }, set config(I) {
      r(I), m();
    }, get dealBlock() {
      return a();
    }, set dealBlock(I) {
      a(I), m();
    }, get dealBar() {
      return l();
    }, set dealBar(I) {
      l(I), m();
    }, get products() {
      return o();
    }, set products(I = []) {
      o(I), m();
    }, get mediaImages() {
      return u();
    }, set mediaImages(I) {
      u(I), m();
    }, get translations() {
      return c();
    }, set translations(I) {
      c(I), m();
    } }, v = Fh();
    return Bs(S(v), { get dealBlock() {
      return a();
    }, get dealBar() {
      return l();
    }, get products() {
      return o();
    }, onChoose: () => {
    }, onClose: () => {
    } }), w(v), b(n, v), Ke(p);
  }
  customElements.define("kaching-bundles-choose-product", Ne(lu, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), fn(this, "component"), this.component = this;
    }
  })), Aa = !0;
  var Lh = qn('<svg width="102" height="60" viewBox="0 0 102 60" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="currentColor"></ellipse><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 2)" fill="#000" fill-opacity=".3"></ellipse><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="96" height="48"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></mask><g mask="url(#a)"><ellipse cx="47.9" cy="23.5" rx="47.9" ry="23.5" transform="matrix(.9929 .11897 -.14278 .98975 6.7 0)" fill="currentColor"></ellipse></g><path class="most-popular-text" d="M28 15.4 25.4 24a.3.3 0 0 1 0 .1.2.2 0 0 1-.2.1c-.4.1-.7 0-.8-.4a1007.3 1007.3 0 0 1-3.9-9.2l-.8 7.6a.5.5 0 0 0 0 .2l.6.8a.7.7 0 0 1 0 .1.2.2 0 0 1 0 .1c0 .5-1.7.1-2 0-1 0 .1-1 .2-1.4l1.1-9c0-.4-.1-.7-.5-1a.4.4 0 0 1-.1-.2v-.2a.2.2 0 0 1 .1 0 15.2 15.2 0 0 1 3.1.2h.1c.1 0 0 0 0 .1.3.5-.5.7-.3 1.2a1361.6 1361.6 0 0 1 3.2 8.1l2.3-7.3a.7.7 0 0 0-.1-.6c-.3-.4-1-1 .1-1l2.7.4c.2 0 .3.2.2.4a.4.4 0 0 1-.1.2c-.3.3-.5.5-.4 1a771.7 771.7 0 0 0 2.5 10c.5.5.7 1-.3.8l-2.2-.3c-.5 0-.5-.4-.1-1a.7.7 0 0 0 .1-.6l-1.6-7.6c0-.2-.1-.2-.1 0zm24 4.7.1 4.5c0 1 .6 1.5 1.6 1.5.3 0 .5-.2.6-.5.1-.4.3-.5.5-.3h.1v.1c.1 1.1-.4 2-1.5 2-2.3.4-3.2-1.2-3.3-3.3l-.2-4.1c0-.4-.2-.5-.6-.5-.5 0-.8-.1-.7-.7a.2.2 0 0 1 .2-.1c1.3.2 2-.3 2-1.6a.2.2 0 0 1 .2-.1c1.1-.5.9 1.3.9 1.9a.1.1 0 0 0 .1.1l2.2.3.2.1c.1.3.1.5-.1.7a.2.2 0 0 1-.1 0 .4.4 0 0 1-.1 0l-2-.1a.1.1 0 0 0-.1 0zm-11.6 4.6c-.7.8-1.8 1.2-3 1.1-1.1 0-2.3-.5-3.3-1.4A5.7 5.7 0 0 1 33 23a5 5 0 0 1-.6-1.7 4 4 0 0 1 .1-1.7c.1-.5.4-1 .8-1.4.7-.7 1.7-1.2 2.9-1.1 1.2 0 2.4.6 3.3 1.4.5.4.9 1 1.2 1.5.3.5.5 1.1.5 1.7a4 4 0 0 1 0 1.6c-.2.6-.5 1-.8 1.4zm-2.4.4c.3 0 .5-.3.7-.5l.5-1v-1.4a6.4 6.4 0 0 0-.3-1.4 6.4 6.4 0 0 0-.6-1.4 4.7 4.7 0 0 0-.8-1 2.6 2.6 0 0 0-1-.6 1.5 1.5 0 0 0-.9 0c-.3 0-.5.3-.7.5l-.4 1a4.7 4.7 0 0 0 0 1.4 6.4 6.4 0 0 0 1.7 3.8c.3.3.6.5 1 .6.2 0 .5.1.8 0zm8-6c-1-.8-2.4-.4-2.3 1 0 .4.3.8.7 1l3 1.2c1.1.5 2.2 2.5 1.1 3.6-1.6 1.8-5.6.6-6.8-1.3-.2-.4-.1-.8.4-1 1.2-.5 1.5 1.5 2.3 2 1 .8 3 .6 2.4-1.1-.3-1-3.2-1.8-3.8-2.2-1.9-1.2-1.8-4 .8-4.3 1.6-.1 4.5.6 4.7 2.6a.3.3 0 0 1 0 .3c-1.1 1.3-1.9-1.3-2.5-1.8zM28.3 34.9c0 1.4 0 2 .8 3 .2.2.2.4 0 .6a.3.3 0 0 1-.2 0l-3.8-.3a.4.4 0 0 1-.3 0c-.3-.4-.3-.7 0-1a1 1 0 0 0 .4-.8L25 28c0-.4-.3-.9-.8-1.4a.3.3 0 0 1 0-.1.2.2 0 0 1 0-.1c0-.3.2-.4.6-.3 3.4.2 9.4.1 9.7 4.8.3 3.8-3 4.1-6 3.9zm-.2-6.7c0 1.4 0 3 .2 4.6 0 .3.2.5.5.6 3.4 1 2.5-3.2 1.6-4.6-.3-.5-.8-.9-1.5-1.1-.5-.2-.8 0-.8.5zM59.5 41c-1.7 1.3-4.3.4-5.2-1.4-1-1.8 0-4.1-1.3-5.8a.4.4 0 0 1 0-.2c0-.6.4-.5.8-.5a19.9 19.9 0 0 1 2.5 0 .4.4 0 0 1 .4.3l.2 5.3c0 .8.3 1.8 1.1 1.8 1.7.2 1-4.2 1-5.3a.5.5 0 0 0-.2-.2l-.5-.8c-.3-.3-.2-.5.3-.6h2.9c.3 0 .4 0 .4.4l.3 6c0 1.6 1.4 1.6 1.3-.2l-.3-7c0-.8-.3-1.2-.8-1.8a.3.3 0 0 1 0-.2.3.3 0 0 1 0-.2.3.3 0 0 1 .2 0l2.8-1.2c.5-.2.8 0 .8.6l.5 10.4c0 .5.2.8.6 1.2.3.4.4 1-.4.8-.9 0-3.1 0-3.9-.4a.4.4 0 0 0-.2 0c-.9 0-2.7.1-3.1-1a.1.1 0 0 0-.2 0zm-16.4-3c-.5 1-1.5 1.6-2.7 1.8-1.2.2-2.5 0-3.6-.7a5.7 5.7 0 0 1-1.5-1.2 5 5 0 0 1-.9-1.6 4.2 4.2 0 0 1-.2-1.7 3.5 3.5 0 0 1 .5-1.6c.5-.9 1.5-1.5 2.7-1.7 1.2-.2 2.5 0 3.6.7a5.7 5.7 0 0 1 1.4 1.2c.5.5.8 1 1 1.6.2.5.2 1.1.2 1.7a3.5 3.5 0 0 1-.5 1.5zm-3.3 1c.2 0 .3-.1.4-.4l.3-.8v-1.3a8.8 8.8 0 0 0-.3-1.3 8.8 8.8 0 0 0-.5-1.3 5.9 5.9 0 0 0-.6-1.1l-.6-.6c-.2-.2-.4-.2-.6-.2-.2 0-.3.2-.4.4l-.3 1v1.1a8.8 8.8 0 0 0 1.4 3.8l.6.6c.2.1.4.2.6.1z" fill="#FEFDFD"></path><path class="most-popular-text" d="M46.9 32.7a3 3 0 0 1 2.8-.3c2.5.8 3.6 2.5 3.5 5-.2 2.9-3.2 4.2-5.5 2.9-.2-.1-.2 0-.2 0 .1 1-.2 2.2.7 3 .3.2.4.5.1.7a.3.3 0 0 1-.2.1 401 401 0 0 0-3.5-.3c-.4 0-.6-.3-.7-.6a.3.3 0 0 1 0-.1.5.5 0 0 1 .1-.1l.5-.7a.4.4 0 0 0 0-.2l-.2-7.3c0-.6-1.1-.9-.9-1.6a.3.3 0 0 1 .2-.2l2.6-1a.2.2 0 0 1 .2 0c.2.1.4.4.4.7zM49 40c2.2 0 .5-5.5-.1-6.4-.7-.8-1.5-.7-1.7.4v3.4c.2.9.6 2.6 1.8 2.6zm24.5 2.7c-2.7 1.4-5.7-1-6.1-3.7-.7-3.5 2.8-5.8 5.8-3.8a.1.1 0 0 0 .1 0c.3-.7 2.3 0 2.9.2.4 0 .6.3.5.7a.3.3 0 0 1 0 .1.3.3 0 0 1-.1 0c-.4.4-.6.8-.6 1.2 0 2.3.2 3.7.2 4.2s1 1.2.7 1.7a.2.2 0 0 1-.1 0 .3.3 0 0 1-.2.1l-2.6-.3a.3.3 0 0 1-.2 0l-.2-.4a.1.1 0 0 0-.1 0zm-.4-5.2c-.2-1.8-2.7-3.4-2.8-.7-.1 1.5.3 4.6 1.9 5.5a.4.4 0 0 0 .2 0c1.4-.3.8-3.5.7-4.8zM80.5 36.5c.3-.3.5-.7 1-.9 3.8-1.6 3.6 4.9.9 2.9-.5-.4-.5-1.7-1.2-1.5a.3.3 0 0 0-.1 0 .3.3 0 0 0 0 .2c-.4.7-.4 4.6.1 5.2.2.3 1.5 1.2.2 1.2a52 52 0 0 1-3.5-.3c-.3 0-.5-.2-.5-.5a.4.4 0 0 1 0-.2c.4-.4.6-.7.6-1.2l-.2-3.5a.4.4 0 0 0 0-.2l-.9-1c-.2-.2 0-.4.3-.6l2.6-1c.3 0 .5 0 .5.4v1h.2z" fill="#FEFDFD"></path><path class="most-popular-text" fill-rule="evenodd" clip-rule="evenodd" d="m82.2 24.2-.7-6.2-.7 6.2-2.7-2.1 2 2.7-6.1.7 6.2.7L78 29l2.8-2.1.7 6.1.7-6.1L85 29l-2.2-2.8 6.2-.7-6.1-.7 2-2.7-2.7 2.1z" fill="#fff"></path><path class="most-popular-text" d="M45 4v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2V4zm12 41v1a2 2 0 0 0 2 2h1-1a2 2 0 0 0-2 2v1-1a2 2 0 0 0-2-2h-1 1a2 2 0 0 0 2-2v-1zM13 22v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4H6h3a4 4 0 0 0 4-4v-3zM67 4v3a4 4 0 0 0 4 4h3-3a4 4 0 0 0-4 4v3-3a4 4 0 0 0-4-4h-3 3a4 4 0 0 0 4-4V4z" fill="#fff"></path></svg>');
  function su(n) {
    b(n, Lh());
  }
  Ne(su, {}, [], [], !0);
  var Eh = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--custom"><img class="kaching-bundles__bar-most-popular__custom-image"/></div>'), jh = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--fancy"><!></div>'), Rh = $('<div class="kaching-bundles__bar-most-popular__content"><!></div>'), Nh = $('<div class="kaching-bundles__bar-most-popular kaching-bundles__bar-most-popular--simple"><!></div>');
  function Sa(n, t) {
    Ye(t, !0);
    const r = k(t, "style", 7, "simple"), a = k(t, "text", 7, ""), l = k(t, "imageUrl", 7), o = k(t, "blockLayout", 7), u = g(() => o() === "vertical" && (r() === "most-popular" || r() === "simple" && !!a() || r() === "custom" && !!l()));
    var c = { get style() {
      return r();
    }, set style(h = "simple") {
      r(h), m();
    }, get text() {
      return a();
    }, set text(h = "") {
      a(h), m();
    }, get imageUrl() {
      return l();
    }, set imageUrl(h) {
      l(h), m();
    }, get blockLayout() {
      return o();
    }, set blockLayout(h) {
      o(h), m();
    } }, i = ze(), s = ve(i), d = (h) => {
      var f = ze(), p = ve(f), v = (y) => {
        var x = Eh(), B = S(x);
        w(x), be(() => {
          xe(B, "alt", a() || "Badge"), xe(B, "src", l());
        }), b(y, x);
      }, I = (y) => {
        var x = ze(), B = ve(x), D = (C) => {
          var F = jh();
          su(S(F)), w(F), b(C, F);
        }, j = (C) => {
          var F = Nh();
          et(S(F), a, (K) => {
            var O = Rh();
            Te(S(O), a), w(O), b(K, O);
          }), w(F), b(C, F);
        };
        R(B, (C) => {
          r() === "most-popular" ? C(D) : C(j, !1);
        }, !0), b(y, x);
      };
      R(p, (y) => {
        r() === "custom" && l() ? y(v) : y(I, !1);
      }), b(h, f);
    };
    return R(s, (h) => {
      e(u) && h(d);
    }), b(n, i), Ke(c);
  }
  Ne(Sa, { style: {}, text: {}, imageUrl: {}, blockLayout: {} }, [], [], !0);
  const Ai = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3e%3crect%20width='100'%20height='100'%20fill='transparent'%20/%3e%3c/svg%3e", Is = ({ dealBlock: n, imageSize: t }) => {
    const { fonts: r, colors: a, cornerRadius: l } = n;
    return pn({ "kaching-free-gift-background-color": a.freeGiftBackground && je(a.freeGiftBackground), "kaching-free-gift-text-color": a.freeGiftText && je(a.freeGiftText), "kaching-free-gift-selected-background-color": a.freeGiftSelectedBackground && je(a.freeGiftSelectedBackground), "kaching-free-gift-selected-text-color": a.freeGiftSelectedText && je(a.freeGiftSelectedText), "kaching-free-gift-font-size": r.freeGift && r.freeGift.size + "px", "kaching-free-gift-font-weight": r.freeGift && Xn(r.freeGift.style), "kaching-free-gift-font-style": r.freeGift && er(r.freeGift.style), "kaching-free-gift-image-border-radius": (l || 0) / 2 + "px", "kaching-free-gift-image-height": t + "px" });
  }, Ms = "data:image/webp;base64,UklGRoQYAABXRUJQVlA4WAoAAAAQAAAAVwEANAEAQUxQSPkFAAABBj/OtslttP9f5fcCagm1hVpF7YEJox4UKGYkeAMMGPfwDLTDZ1D2vIMIqAcB7VRSYECAAaEnwXBEmSwGHlrieL+jrjsiJgAn/5/8f/L/yf8n/w9iMzrDs9DBioEmgInM6NV1BfjS38jnJRbyl/z0anTfwYrRQgD4xYxeVQf15f0b+QwssfjtlYg8ExEHawBoId4gM3pV1dOX8AAqAJ+xRAb89pOcARg5wIrRQmAEM3p1XTXeAzefsVzIX/KTvBoBcIA10ELAMDOj366r1vXl/RuRz1gust9eicgzEXGwBtBCGD7m2avrqv19CcADFT4DS2T4TeQMeCbiYMVAC2FQkHn203XVyb563H8Glgv5S34SORsBcLBioAlAXyMz+q3qm+X9G5HPy4X89dsrkdEziIMVo0WE0IfIPHt1XfXc8mGP6jOwzH4TkTMAz0ScFTG9hORZdl31bo/Ko3rwM4DlT7Z30Cj7XA1D1zPot2o42l5BZ9WA/KlX2JshsdB9YlQOieW/woitwFY0TAjGOgRPdPd1x2BQlEurHcIoeSdS3S8gkMc/uW6hYVG9+wJUB/dr3SkYGEfeB1zlI7Y5undMVVwotvFHuk3cfSsGWoTuMxF2hQgArO5nAFIksUho+KOJvvLAZkz89KDfXxBPAfsJV2FvuAoXbLU2XIULzVW4NFyFc7bKHVdBiKvygKtwSVyVB1wF0W3iWCEft8mIFXCpW8TxQj5ukREvAKY9HDPk5y1ywwvILVfhnK1yx1bnxFTIHVfhnLgqD7gKl5qr8oCrcKm5Kp9wFXLDVZiwVW7ZatI8yxTIXeMcW6SNs1yB3HEVzomr8glX4ZK4Kh9zFS51sz4zRj7mKuSGqzBhK5gGGd7IJw2yvIFcmmOYA+dslVuuwuT/DpgRVyFgK6GmLNnDB1yFOTVDM4gPmmEYBHNqhOYQBGw1I67yAVdhRlzlHVdhTlyFoAELJpkRV3nHVmOuwpy4aq3rRnxi/mfOX/+rBa8YShsrIvxkL+ayB1Bxk5N9te+Ocgggc/UwUlade7fveX7vahFUHS37XuNxHPiUaiEddX/fXwC/PwrmfQeQ/gL4fgdIf4FHv+vp7OMPt+Ye+IPN2efwa80+nq0O/t8VHFsFPEN1cBzjJ4qB/EE+GX7araeJjLXioAeL3WqWxlHgrBZSdeWPTRqFzhqCqjt7+Ilq6r/vjP/tyjZGhtaVZClqtTaNodndsCnkkassTaLQWUNKv6vThWquWVflQClkt1pMkyiIEDhrNKlHKa7Rftwg6OSuHBjFbiVZEofOGk1QhwzrZJsEuFlV9r/i3ipDmkShs5rUUeVdbfwFNQsUbe76WyGyw9UUSRQ4azSpWka12Qeq8Ta962HFDqssjSV01mhStZZ3dZnr5oHGm7JH3V5lSKPQWaNJNTOsiR+rVjRJiV5TiOBWFtNEIgerSTWb4nrMqR0AN7vrJ4XsbldZLFHgjBZS7Sjv6rB3qjV1dFf2i1tZZWkSwllNUC0r747nJ6pN7awqu68Abq8W0yQKnDWaFEi1ssTH8hfUKqBgXXbdpyh01mhS7e/eHWemVdvai7su2i7eASh2K0mM6k7t4sWBygozo1o4WHdN7GC1IJHQGa06lmwYv/uhsgJSrVpZkrJTNkZ1vLZh/G57+wRgFajWdvNyQN0nG8bZpqgAwSzSqsUpKrvjk/SB+2TD8QShJdXyJu2MGfWF7qRgXXbDRA1vnZZd4MMBBrh1F9hBBh0dbSu3QCGyQ2M+6WEG2OmBtrKYJnHorAkTiQEri4b4RA12CrZPk8U0iQIHo0n9YNQQuOEGmHh7K1cyjSV01mhSB7bbZmQ05EDWQTRBHTlpxlgxqN02YaM5BHETJopF9aJ+K80jsNu6+UBxaVi3lNgE43ptjGLUoFZOsapd1GesmFXH25pEil9tXItIsaybHq0YK6YltzhKsQkU3+rw6nBFahTr6ujqMMVqTIp7TXT1Y8Uq0oqDTZTtnrLbTENRXCw2SJHdTyfOKGYmLUZInfx/8v/J/yf/n/xfUwBWUDggZBIAABBuAJ0BKlgBNQE+kUSdS6WjoyKjsKo4sBIJY27PfD3SSyKUjHn6I/9g+wnp1XR9XeHo4f/o+c8+z/svWv5h/PG/dj1H/tl6znpI/wG+5eif50XrR/4/0x7lbtfWHf5TxH7Mfb7NRhu8olZENf8uT5T92PZPIW8X7T682rzd4lnfXm1ebvEs7682rzd4lnfXm1ebvEs7682cCffkKj/0t06JEArP+RShHR4v2n15tXgarCFNF1ibE7/5+j/5Eo0NQ71kF8hWki+N0nFn4jermljPNs27mUeI5uTXaZCzZcqM9AZ31VHNeqhmXSx23Z8dlZD8ZLgOnx2CihtqzmhwsRfw/eimox4+fV6eEJSdr6tkyKOTLOnvmStQTaPNLcVmD06I09Zy8EdqnfHY/1ThdMVchaQQV9Czk/i57RyGMsSMid4Y5ZOoPpStMmO8jZqSCSIW4/wUhOsJe0AZ6WDNd9x5zXViysoni6q6+atjpl5A4ZI62UyqCiLbYjoKnTB7xff5zuxt3G0QiDSsrujnM51e8UgSobndmKsG7c87GZH5co4+UWdNOodvlgpKvlr7hqlF1cRHNor9k7pt9pIiAEYeVwoSNvwFplyxFu65+r+nXIwUbLR8xF9LPeZ2oTVkeqIkflO/9CzgZ7RhB6LLduY5ORVBLovgTZu3/QSKkDFShUs2FVKnB9lmICdwUzmUNmRSe0Ga6FsxyfdT/gQrVJY2mpe+QnRjhSbGOZcUpMsoVwsFkw3byx7SAunIxFL1TxePhC6fUfxCcdqHww8KiOjXdEXZJcLI7GUTe0nviV7Z/qFPWXNlIDS/JIszeV7nM8HpdPmdLEDK+MYaGUEL/wZsFblu2q1mU0SC8gaf+iYsqqUR2ld74gez3le4VQSRtOB9B/YLTsZfqcOjzW3/m6EHXNHKBFFsVFTpZmn4qMgVjJwf9P8cnItR6Fq7fOAslEO4e30AHZzsht3FP8GTJU1rAoYDv8k41Bg3f/c3i4TQIPpSjW5RcJV8JNBN1eawaXo9ZbN31YZSVQw8Ops/2bVbq9/s1Q1s9PunHUU+2ut0DDvCY/6iQ+2YthZQQ1GyDGUCpfQ3eJaANqy/p8rAbnON/3LplJEi/afXm1ebqaKUavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8SzvrzavN3iWd9ebV5u8LgAA/vvbO+3sHnP/IdkpDnbh3TvfXYAB5WzWlLuMAAKgIwAABAsU14K4XnDjt+rrb+D2R0m2FHkZuG6rmV+6YFzI/Ls2EEst1oHCIDkSkVmJwdSN9EIhanLXNhfekK1Iqx1IvcdGU5Q6TPJ89BkFWsH4P6w+AEaw8K0furvg3C+MmCPSi39Pk9u+gxEye7RHQx3e7sJBZSlSVpmGjma6gAJaYWfuB78fJroBwKlaJ0mMNd4azeh/Wa3EotpAl4KB176JCBofnI39MAuoo85WpbZ9xjxDQYsob4zBW0Iz7pbo/HiIkhee6DRpkJIr6wM5Ky5hmYHwSSvj+7kH1iIOCj6tAbabEAQCNQeVRTORaxyDAr7/GtCLaDWcs/7oXWIweUfirzVQ7ThYMPR9h8IVWCJYs5dn/dfu56GMoeSVL3vuDT8eOkQLrvbk7h5UKTxL57kgt6N+KFtV/n39fyoZGVhshZgWcPcsGXFGajPTSTOUlsZ/vewlCzkR+ALaPvm4/+MGM7HT0B28wt+z1iFe68rT2C3wDvd2pkd4kwT1ZXXhgCaP8IHGlcRLWtK0/KEVZ1ugqmbOqoEiTwSRYuEmJ28JT53qpD9rvw4bWSCRVmp6vS1i+OAvuw7ChW+RkrYvU/D24QzjPCHYio+CkhfgXvVO46aZf7HZ/APLJHJJzVT1j4OLgCKZ/+Ak1e0EKDPh4rTJsaT3s8WtTy5XH+4Ar6xg6I3WtxR+uRF26LUw4qh9rDq9Tp7vxD5TzVPNkmLExWNGgR6eVQ2GooMqhjhD639FbbGvPBA3ybzgr7n5Ci9s6Wz++LCWHCwK1Z6DT19WpGRfIsCWCkYCRTKxUtMZSIT8ucXjOXLVCOftRCEKFT4b6uZ65Ag8l6ZwGA9vBgVH4yjz3rhaTMXAVN8ZtMN+Peal4ByXEaarmBZHcjINdGAHfq/Oon/WJPDl1La0sZ/z7NnwnicGzYjOu/+E9PY1uiQDBcmka2MieoJp36IbjfvQLURbGUMf1OX6zyYoVSC8wZfYlktDUkqM9WhYE1c4nOaHYtnrCuOiEPng8J2pRFr5NeR4lIsiH6Z4wQDzOZbpOftV8uUhurbz6TTohG7rdsM3Jkpsl7NlcnTwTwO/wnsAVgCAexRRUegE8kK7ZBn9DYsKHGisummSWwi9LxZqPCQbjrkXNuWFu1L7NvVwRU/SFadxboS/0qrszn85S44QntIQB/YirAkqb9zp8cndyKm1JSLqd+B0ytCADHpsJ5tIRIRlqWiK5Z3mRpnoZ41mgopa3mx70p3vl/4dB9U/HbNxwGMVZwzqOJ1gtobOcYv4N4GE/9/PioYppduKcYUonHSe4/3qQSrq/d8AMj5fRlAEPwNdWGsNJAtAr1IMC662V61JfHP8ENdFsTmbbcZ6QaXRBgGH3IZfWJHt4aQK/pLXOPF01GqrLm+KfuiYRg9SdihgVqnSnWiOz5QJcoQdFYrwvdJTA3IDamLNiUdka/z2iBOCQPtqrUEsiyPhVyMRGkBWUEXUS8aojpuiFrHqEeODgQNvYmA4SrXVoiOOIDOC57cNsP1/N9GN0jE8bIPAwth4nEv26clftxesbpcO5CbbOPhk+4teaVMLwqEMkQ9YcYDhAn1UQm/P3PukbCh6OquvhSA8q9YvD80J2p4qMfqHujubJy+pt0+o+mrxgsrcdHWv4sSkPBRdjMUrDPZLvblU1bnNHivzRvFcaJLGb6GIGfB6O/ZKp1jWBT6xmKAeZWVJ8oOesDrGaYK0ecPFQz1Kuy5kORX5BCtS2qmcP0EA33Ytva164kYbJLPQqbkznx1MLByN1pC1Ik6afVhXF4Md0RY17gT2UjnSVYPmF/zPGsMRWvrtiSQRKgwUoxqgtEcfS49Laz2JMIExQJFfV3WrYgNICYlRLAYmV9ubjRL8xrrPJOxg49X/PpZMbndQYIsESJm+IzeXnBMrbIsdeaxHjknEDGyHgeDWKezmv60AaqcaQzwPQfmnJvj9esFQK1oEZOAhVQaNG82I3acJJ+sM/lNmSPy/iKzYyMHrpWAtqMiD/VbxffYGWdktLKJ6DnzcchVzvgkPeJ/AEYySCs/AJwxoZMCEcYNAyPbSOeIhrSZ7oiwkixKsfLQ+uMIecj3dpwHtZBxKdw3H1agydVHgrcDu2Q1YIvCW0l+YCBgLgVvKCQiJZrmECgugPITyU+7JPijpmGi92sUJDZaFi8AXbjw0XOTvpGBzk6SOQWbZRs0FTUb1nAizq0zZPFxm8JaADC02BSHVQUCf4x6YZrJ5DIRFyxt9Jv0pVBaCRRKAOO3/X/UVpzCGUfhHdRWh93s5eWczTMyYN1GHakkA3lEvMckdz9VSeaYVHWgbgR/SsKqHaFBCMqYnbGNHYulIdrf/P7sy9/cTd8B+MlqRCwfCgJvjATta1MfBNGzKLERRjPb2v9em/Re5JPZCtt6Yyn8Vql2CdRL+7z8oYczxwxTA3/QfjLD78pZ6RpVkzBIHLkMQf93Il10CGh5IawlF+d1dkgebUndWPL12ydwc0PVR3b0c0e8OlgN2vakaDpQEKqKPiIukcoIpAlgclG5W5zjdiPbIbF0uWeULQsvMvI9c5T6P9sRjv+FZz51d19aWCdbLU/fCFJ53MbT0+42wMhRj23n/iD+LlPYOSgdtfo9WiiRfl2Mt//MJzOsz8sFwteelxQEjbCqNE0JmRx+KBefHBDl8C78WHTaIIzN5gmbehbTat1ShJBF5hxBrYRIh2z4mEop3uaCco1qsvq44TnxUsBnbY1n8ApxtHL+I927cLgdz4OLFqdmFjrJQrQi6drim9ZhKNKblZRY6Nm6Xxw8AG31CjKw5Usm7EwX3dSh1ZsqmnI5qEjffuCX44g/SOzQqJVR7Fdb8JeHLF12m738y3FF8Mzs16Oc/2LwNUHONGYkVtr+DKAaGl5Hj/eNrGgDwmZkDKFiMx6NDt1/fJ5DJujHYvfqnc306fF1hqAKGhRaX6mkQAFTvdvjKAE6D2qcOgzuA8OW9wA45u64gX+kFxY0AS6eqgGGChj5Z/p1Hbf5M9a/gKoaZ7B+Tcnn9Qe9zU00N7zH8lyWGJ2TkauTtQK1NiJyMXrdamQmMdapyOTWCQuByf81ArLtC/bleHgTwNM7WM3WcgxuY0K+tM/GlMB3o4c6KXobq+gT4beks4Z0bY30MI8bvJO+Oxwdaw3i25dbrmfZF24MJSjUBqBgpoCPEKbOE1B0kKa0DivLYosxKI+LGXKRTQfmdgrSTks4ug6urIa/bOM7wPLDJGRj0VqBthQyVN68yQX1AJQMB25WapBsPo/4lBu682ATODwomExed5azFmo1uS1oR8yjjVguvGk0aXC8rbqCnjsujXvMr17GDqUjHgKsOJdqUSlNjxu2YRrqyCQqeDKyGUDulKhhtJLO/4E34Re0lA8JnM1OWPAEB4UWa3wXhCn7tYRx/NdlCvHEXRgHuU1x9vbx8wJIw9x9YMaMqgUz6XhCa9CHfb8w6Zw2YtPEVQ9evaBn1Z9D6FOmIHGya7+VzN5NHL4+s6mM/hIagdT2DfDbr34+S/pRYO0OTY2kNLBk7H0A60bCCr+dUfc3D4aiAWmcyJy06sV91x0NyHNPAl1cPP9yMhUpsXuSRb8G+rZqQPmfsDeGv8OazizGLy6WH/kvfkOHUSaX/OhgunoJ9VeEOXibNKy82aKQbeO0Ha7UVsW4XgQgLdDlwVIalDeTNcwE6nmQ9txE1hmG+EiJvFI4qtHDI9DsVu9oD7B+cGL3mjjXVHfSwugESEFWLTK5H6wNsIpftM4OHEYWyaeUeZ7JJE1eDJQ9Zf+5vZtZh3myMRpA2qFbL0Z1XGffNF+rkMit+fjRpAjeYiJtbPXt1caN1R1abhCgztNuwREE8wupCjEm+NE+bKPiOqlykwKJ3P/3sgKhNseT14hUvrpWzccNtRuPDNOunCTAmbmLE7WagpIdGYD1/+3+5jJokGgYMTKPDtGcyL2UcCJbWhsr29Eb7GipPp2p1cQ+vehDwOEv3Zy1JrpGaND/5dRLHQTBHj6cgEpGQusdOTAdDDuz3bIG0bjvrZlGPLGuLFq+K3yADMtsjQQcuZzrWixor2wnfJtn15LHqkqakk4OIH4/MIXBGBWj9Ew3Y10HyG9ozFVfGMMh335PDmgh/DSu4AxehAoAqANVIJksDFYdub1wWo8yYh9Bj1+NUJynOVXk1qJZ8+B0QUVbJwcTOnM/fCsUt191Vky7IpF3Ar+L7eVM3PjlEJmI9gteoSeJw1gQCSMn/vaR0rn0ffVV6ozTkXntDBDGW52GLCy/g/BPvfHCJ+mj59BncgboXK3Fld7/4HRTyIAexwL2dRVvPHlg99XnjymrE4zUzJo+KycEBb83WPH/fOR5kEC3NqBEAmTeVYw8LJ+ocQMM2lE8kDjcyA12K+DfSgIhetLBZ/x7e4hD9A4gQgdFg8Ooa3bg/sPXFSwRjyiDQM/CZXMUaKtADyJ4CAx3/pYYzgOk2cLMZz5FMWFjbA/Q1LtDuQH7DkigDvOhb4Fmu7+H2b5J+4EKM8Yq+n06V/1tcpC4eeFk9xnMQluO1WqGwpuaoJCMP6qbU+yD7yNgJf9w5qrzxpGutPV9IhfsC4fqgGPBE3L7RVEgzeANeYJVlr36U8sZvtXG4PB4Hja+RPLUAO+eRxzRZy42p9LU83OprZBeO7230dieMH5Zoi0kR9fsCoTSMaa2nRhSiCb2tdJ4Z1lzYagv4odW8u2KOdSTmmMx6fuTxSqnpbix/IM1tyQ87iEvmLgKbKxxoq7jMWMGVKnT3/sYDe1Gh7sGkfO8X+SU8A6uPjQ5O60Qodizt/a/N+H663+1H+KNqX9JG3V8a4DIr7ksqFOrG4vcwrmMfGNKzZEqY3YdfhK186TnkB4qAAAAAAAAUL6grl/NBh0xCf2j3r4dOzXRh7I2aCCSe5vWpAob7xObCtSNwZb2vrH2mGahZz5v19m0OpjZMD/eZuwAQT9lzRvhNLg3peoff6JaWOXAZuxTigRvsWkffJzmaqRu1XRn2I5Q8LDKQ102v7qO1JV8AAAAAAAAAAAAAAAAAAAA=", ou = ({ freeGift: n, product: t, variantImage: r, getMediaImageUrl: a }) => n.mediaImageGID ? a(n.mediaImageGID) : n.giftType === "shipping" ? Ms : r || (t == null ? void 0 : t.image), Ds = (n, t, r) => {
    var a, l;
    const o = (l = (a = t.variantGIDs) == null ? void 0 : a.map(Nt)) != null ? l : null;
    return n.variants.filter((u) => (r || u.availableForSale) && (!o || o.includes(u.id)));
  };
  var Qh = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), Wh = $('<div class="kaching-bundles__free-gift__image"></div>'), Uh = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Hh = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), Zh = $('<div><div class="kaching-bundles__free-gift__main"><!> <div class="kaching-bundles__free-gift__content"><!> <!></div></div> <!></div>');
  function cu(n, t) {
    Ye(t, !0);
    const r = () => De(v, "$config", l), a = () => De(y, "$formatPrice", l), [l, o] = ft();
    let u = k(t, "dealBlock", 7), c = k(t, "freeGift", 7), i = k(t, "product", 7), s = k(t, "dealBarSelected", 7, !1), d = k(t, "collapsed", 7, !1), h = k(t, "sets", 7), f = k(t, "mainProductVariantId", 7), p = k(t, "onChange", 7);
    const v = gn(), I = It(), y = sn(), x = Dn(), B = g(() => {
      if (i()) return { ...i(), variants: Ds(i(), c(), r().preview) };
    });
    let D = Ae(void 0);
    const j = g(() => (function(W, _) {
      if (W !== void 0) return W;
      if (_ != null && _.availableForSale && _.variants.length > 0) return _.variants[0].id;
    })(e(D), e(B))), C = g(() => e(B) && e(j) ? e(B).variants.find((W) => W.id === e(j)) : void 0), F = g(() => {
      var W;
      return ou({ freeGift: c(), product: i(), variantImage: (W = e(C)) == null ? void 0 : W.image, getMediaImageUrl: De(x, "$getMediaImageUrl", l) });
    }), K = g(() => c().quantity * h()), O = g(() => (function(W, _) {
      if (!_) return 0;
      let T = _.price;
      return _.compareAtPrice && W.useProductCompareAtPrice && (T = Math.max(T, _.compareAtPrice)), T * e(K);
    })(u(), e(C))), le = g(() => Is({ dealBlock: u(), imageSize: c().imageSize })), ee = g(() => hn({ priceFormatter: a(), product: i(), totalFullPrice: e(O), totalDiscountedPrice: 0, quantity: e(K), unitQuantity: e(C) ? nr([{ variant: e(C), quantity: e(K) }]) : null })), N = g(() => c() ? e(ee)(De(I, "$translate", l)(c().text)) : ""), H = g(() => {
      var W;
      if ((W = i()) != null && W.url) return e(j) ? `${i().url}?variant=${e(j)}` : i().url;
    });
    function Q(W) {
      te(D, W, !0);
    }
    let Z;
    Jn(() => {
      c().productGID, te(D, void 0), Z = void 0;
    }), Jn(() => {
      if (u().disableVariantOptionSync || !f() || !e(B) || f() === Z) return;
      const W = Z;
      Z = f(), e(B).variants.some((_) => _.id === f()) && (e(D) !== void 0 && e(D) !== W || te(D, f(), !0));
    }), Ze(() => {
      var W;
      e(C) && ((W = i()) != null && W.availableForSale) && e(K) && tn(() => {
        p()({ variant: e(C), product: i(), fullPrice: e(O) });
      });
    });
    const z = g(() => !(!i() || i().availableForSale && Ds(i(), c(), !1).length !== 0));
    var P = { get dealBlock() {
      return u();
    }, set dealBlock(W) {
      u(W), m();
    }, get freeGift() {
      return c();
    }, set freeGift(W) {
      c(W), m();
    }, get product() {
      return i();
    }, set product(W) {
      i(W), m();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(W = !1) {
      s(W), m();
    }, get collapsed() {
      return d();
    }, set collapsed(W = !1) {
      d(W), m();
    }, get sets() {
      return h();
    }, set sets(W) {
      h(W), m();
    }, get mainProductVariantId() {
      return f();
    }, set mainProductVariantId(W) {
      f(W), m();
    }, get onChange() {
      return p();
    }, set onChange(W) {
      p(W), m();
    } }, V = ze(), G = ve(V), U = (W) => {
      var _ = Zh();
      let T;
      var M = S(_), L = S(M);
      {
        let ae = g(() => s() ? e(H) : void 0);
        Vn(L, { get url() {
          return e(ae);
        }, class: "kaching-bundles__free-gift__link", children: (fe, Ce) => {
          var he = ze(), se = ve(he), _e = (pe) => {
            var de = Qh();
            be(() => {
              xe(de, "src", e(F)), xe(de, "height", c().imageSize || 0);
            }), b(pe, de);
          }, Ge = (pe) => {
            var de = Wh();
            let Se;
            be((Oe) => Se = Wt(de, "", Se, Oe), [() => {
              var Oe, Qe;
              return { height: `${(Oe = c().imageSize || 0) != null ? Oe : ""}px`, width: `${(Qe = (i() || c().mediaImageGID) && c().imageSize || 0) != null ? Qe : ""}px` };
            }]), b(pe, de);
          };
          R(se, (pe) => {
            e(F) ? pe(_e) : pe(Ge, !1);
          }), b(fe, he);
        }, $$slots: { default: !0 } });
      }
      var Y = E(L, 2), J = S(Y), q = (ae) => {
        var fe = ze();
        et(ve(fe), () => e(N), (Ce) => {
          var he = Uh();
          Te(S(he), () => e(N)), w(he), b(Ce, he);
        }), b(ae, fe);
      };
      R(J, (ae) => {
        e(N) && ae(q);
      });
      var A = E(J, 2), re = (ae) => {
        zn(ae, { get product() {
          return e(B);
        }, get selectedVariantId() {
          return e(j);
        }, onChange: Q });
      };
      R(A, (ae) => {
        s() && e(B) && e(B).variants.length > 1 && e(j) && ae(re);
      }), w(Y), w(M);
      var ne = E(M, 2), ue = (ae) => {
        var fe = ze();
        et(ve(fe), () => e(O), (Ce) => {
          var he = Hh();
          Te(S(he), () => a()(e(O))), w(he), b(Ce, he);
        }), b(ae, fe);
      };
      R(ne, (ae) => {
        c().showPrice && e(O) > 0 && ae(ue);
      }), w(_), be((ae) => {
        T = Tt(_, 1, "kaching-bundles__free-gift", null, T, ae), xe(_, "data-free-gift-id", c().id), Wt(_, e(le));
      }, [() => ({ "kaching-bundles__free-gift--out-of-stock": r().preview && e(z) })]), b(W, _);
    };
    R(G, (W) => {
      !d() && (!c().productGID || e(C) || r().preview && e(z)) && W(U);
    }), b(n, V);
    var ce = Ke(P);
    return o(), ce;
  }
  Ne(cu, { dealBlock: {}, freeGift: {}, product: {}, dealBarSelected: {}, collapsed: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var Jh = $('<img alt=""/>'), Yh = $('<div class="kaching-bundles__free-gift-summary__images"></div>'), Kh = $('<span class="kaching-bundles__free-gift__text"><!></span>'), Xh = $('<div class="kaching-bundles__free-gift kaching-bundles__free-gift-summary"><!> <!></div>');
  function uu(n, t) {
    Ye(t, !0);
    const [r, a] = ft();
    let l = k(t, "dealBlock", 7), o = k(t, "images", 7), u = k(t, "count", 7), c = k(t, "title", 7), i = k(t, "imageSize", 7);
    const s = It(), d = sn(), h = g(() => hn({ priceFormatter: De(d, "$formatPrice", r), product: void 0, totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null, freeGiftsCount: u() })(De(s, "$translate", r)(c()))), f = g(() => Is({ dealBlock: l(), imageSize: i() }));
    var p = { get dealBlock() {
      return l();
    }, set dealBlock(j) {
      l(j), m();
    }, get images() {
      return o();
    }, set images(j) {
      o(j), m();
    }, get count() {
      return u();
    }, set count(j) {
      u(j), m();
    }, get title() {
      return c();
    }, set title(j) {
      c(j), m();
    }, get imageSize() {
      return i();
    }, set imageSize(j) {
      i(j), m();
    } }, v = Xh(), I = S(v), y = (j) => {
      var C = Yh();
      Yt(C, 21, o, Tr, (F, K) => {
        var O = Jh();
        let le;
        be((ee) => {
          xe(O, "src", e(K).source), xe(O, "height", i() || 0), le = Tt(O, 1, "kaching-bundles__free-gift-summary__image", null, le, ee);
        }, [() => ({ "kaching-bundles__free-gift-summary__image--no-border": !e(K).bordered })]), b(F, O);
      }), w(C), b(j, C);
    };
    R(I, (j) => {
      o().length && j(y);
    });
    var x = E(I, 2), B = (j) => {
      var C = ze();
      et(ve(C), () => e(h), (F) => {
        var K = Kh();
        Te(S(K), () => e(h)), w(K), b(F, K);
      }), b(j, C);
    };
    R(x, (j) => {
      e(h) && j(B);
    }), w(v), be(() => Wt(v, e(f))), b(n, v);
    var D = Ke(p);
    return a(), D;
  }
  Ne(uu, { dealBlock: {}, images: {}, count: {}, title: {}, imageSize: {} }, [], [], !0);
  var ep = $('<div class="kaching-bundles__free-gift__divider"></div>'), tp = $("<!> <!>", 1), np = $("<!> <!>", 1);
  function Ya(n, t) {
    Ye(t, !0);
    const r = () => De(v, "$config", a), [a, l] = ft();
    let o = k(t, "dealBlock", 7), u = k(t, "freeGifts", 7), c = k(t, "otherProducts", 7), i = k(t, "dealBarSelected", 7), s = k(t, "freeGiftsSummary", 7), d = k(t, "sellingPlan", 7), h = k(t, "sets", 7, 1), f = k(t, "mainProductVariantId", 7), p = k(t, "onChange", 7);
    const v = gn(), I = Dn();
    let y = Ae(at({})), x = g(() => u().filter((N) => !N.applyOnlyForSubscriptions || d()));
    const B = g(() => e(x).flatMap((N) => {
      const H = N.productGID ? c().find((Z) => Z.id === Nt(N.productGID)) : void 0;
      if (!r().preview && N.productGID && !(H != null && H.availableForSale)) return [];
      const Q = H && !r().preview ? tr(H) : H;
      return { freeGift: N, product: Q };
    })), D = g(() => {
      var N, H;
      return (H = (N = s()) == null ? void 0 : N.enabled) != null && H;
    }), j = g(() => !i() && e(D) && e(B).length >= 2), C = g(() => {
      var N, H;
      return (H = (N = s()) == null ? void 0 : N.showImages) != null && H ? e(B).flatMap(({ freeGift: Q, product: Z }) => {
        const z = ((V, G, { preview: U, mainProductVariantId: ce, disableVariantOptionSync: W }) => {
          if (!V) return;
          const _ = Ds(V, G, U);
          if (_.length !== 0) {
            if (!W && ce) {
              const T = _.find((M) => M.id === ce);
              if (T) return T;
            }
            return _[0];
          }
        })(Z, Q, { preview: r().preview, mainProductVariantId: f(), disableVariantOptionSync: o().disableVariantOptionSync }), P = ou({ freeGift: Q, product: Z, variantImage: z == null ? void 0 : z.image, getMediaImageUrl: De(I, "$getMediaImageUrl", a) });
        return P ? [{ source: P, bordered: Q.giftType !== "shipping" }] : [];
      }) : [];
    });
    Ze(() => {
      (function(N, H) {
        if (!u().length) return;
        const Q = N.filter((Z) => Z.id in H).map((Z) => ({ id: Z.id, variant: H[Z.id].variant, product: H[Z.id].product, quantity: Z.quantity * h(), fullPrice: H[Z.id].fullPrice, showPrice: Z.showPrice, includeInCompareAt: Z.includeInCompareAt === !0 }));
        p()(Q);
      })(e(x), e(y));
    });
    var F = { get dealBlock() {
      return o();
    }, set dealBlock(N) {
      o(N), m();
    }, get freeGifts() {
      return u();
    }, set freeGifts(N) {
      u(N), m();
    }, get otherProducts() {
      return c();
    }, set otherProducts(N) {
      c(N), m();
    }, get dealBarSelected() {
      return i();
    }, set dealBarSelected(N) {
      i(N), m();
    }, get freeGiftsSummary() {
      return s();
    }, set freeGiftsSummary(N) {
      s(N), m();
    }, get sellingPlan() {
      return d();
    }, set sellingPlan(N) {
      d(N), m();
    }, get sets() {
      return h();
    }, set sets(N = 1) {
      h(N), m();
    }, get mainProductVariantId() {
      return f();
    }, set mainProductVariantId(N) {
      f(N), m();
    }, get onChange() {
      return p();
    }, set onChange(N) {
      p(N), m();
    } }, K = np(), O = ve(K), le = (N) => {
      {
        let H = g(() => {
          var Z, z;
          return (z = (Z = s()) == null ? void 0 : Z.title) != null ? z : "";
        }), Q = g(() => {
          var Z, z;
          return (z = (Z = e(B)[0]) == null ? void 0 : Z.freeGift.imageSize) != null ? z : 30;
        });
        uu(N, { get dealBlock() {
          return o();
        }, get images() {
          return e(C);
        }, get count() {
          return e(B).length;
        }, get title() {
          return e(H);
        }, get imageSize() {
          return e(Q);
        } });
      }
    };
    R(O, (N) => {
      e(j) && N(le);
    }), Yt(E(O, 2), 19, () => e(B), ({ freeGift: N, product: H }) => N.id, (N, H, Q) => {
      let Z = () => e(H).freeGift;
      var z = tp(), P = ve(z);
      cu(P, { get dealBlock() {
        return o();
      }, get freeGift() {
        return Z();
      }, get product() {
        return e(H).product;
      }, get dealBarSelected() {
        return i();
      }, get collapsed() {
        return e(j);
      }, get sets() {
        return h();
      }, get mainProductVariantId() {
        return f();
      }, onChange: (U) => (function(ce, W) {
        W.variant ? e(y)[ce] = W : delete e(y)[ce];
      })(Z().id, U) });
      var V = E(P, 2), G = (U) => {
        b(U, ep());
      };
      R(V, (U) => {
        !e(j) && e(Q) < e(B).length - 1 && U(G);
      }), b(N, z);
    }), b(n, K);
    var ee = Ke(F);
    return l(), ee;
  }
  function du(n, t = "body") {
    let r;
    async function a(l) {
      if (typeof (t = l) == "string") {
        if (r = document.querySelector(t), r === null && (await Xl(), r = document.querySelector(t)), r === null) throw new Error(`No element found matching css selector: "${t}"`);
      } else {
        if (!(t instanceof HTMLElement)) throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
        r = t;
      }
      r.appendChild(n), n.hidden = !1;
    }
    return a(t), { update: a, destroy: function() {
      n.parentNode && n.parentNode.removeChild(n);
    } };
  }
  Ne(Ya, { dealBlock: {}, freeGifts: {}, otherProducts: {}, dealBarSelected: {}, freeGiftsSummary: {}, sellingPlan: {}, sets: {}, mainProductVariantId: {}, onChange: {} }, [], [], !0);
  var rp = $('<div hidden=""><!></div>');
  function qi(n, t) {
    Ye(t, !1);
    let r = k(t, "target", 12, "body");
    var a = { get target() {
      return r();
    }, set target(o) {
      r(o), m();
    } };
    (function(o = !1) {
      const u = rn, c = u.l.u;
      if (!c) return;
      let i = () => Ko(u.s);
      if (o) {
        let s = 0, d = {};
        const h = _i(() => {
          let f = !1;
          const p = u.s;
          for (const v in p) p[v] !== d[v] && (d[v] = p[v], f = !0);
          return f && s++, s;
        });
        i = () => e(h);
      }
      c.b.length && Jn(() => {
        bc(u, i), Ki(c.b);
      }), Ze(() => {
        const s = tn(() => c.m.map(_d));
        return () => {
          for (const d of s) typeof d == "function" && d();
        };
      }), c.a.length && Ze(() => {
        bc(u, i), Ki(c.a);
      });
    })();
    var l = rp();
    return lc(S(l), t, "default", {}), w(l), ls(l, (o, u) => du == null ? void 0 : du(o, u), r), b(n, l), Ke(a);
  }
  Ne(qi, { target: {} }, ["default"], [], !0);
  const gu = [{ fonts: [20, 16, 12, 10], gaps: [16, 12, 8], image: 36 }, { fonts: [24, 20, 16, 12], gaps: [20, 16, 12], image: 48 }, { fonts: [28, 24, 20, 16], gaps: [24, 20, 16], image: 60 }, { fonts: [32, 28, 24, 20], gaps: [28, 24, 20], image: 80 }], hu = [0, 12, 16, 20, 24, 28];
  var ap = (n, t) => {
    n.target === n.currentTarget && t()();
  }, ip = $('<img alt="Close"/>'), lp = $('<span class="kaching-bundles__personalisation-modal__item-variant"> </span>'), sp = (n, t, r) => t(r(), n.currentTarget.value), op = $('<img alt="Clear"/>'), cp = $("<span> </span>"), up = $('<div class="kaching-bundles__personalisation-modal__item"><div class="kaching-bundles__personalisation-modal__item-info"><div class="kaching-bundles__personalisation-modal__item-image-wrapper"><img class="kaching-bundles__personalisation-modal__item-image" alt=""/></div> <div class="kaching-bundles__personalisation-modal__item-details"><span class="kaching-bundles__personalisation-modal__item-title"> </span> <!></div></div> <div class="kaching-bundles__personalisation-modal__input-wrapper"><div class="kaching-bundles__personalisation-modal__input-container"><input type="text"/> <!></div> <!></div></div>'), dp = $('<div role="none"><div class="kaching-bundles__personalisation-modal-overlay__content"><div class="kaching-bundles__personalisation-modal"><div class="kaching-bundles__personalisation-modal__header"><h2 class="kaching-bundles__personalisation-modal__heading"> </h2> <!></div> <div class="kaching-bundles__personalisation-modal__items"></div> <div class="kaching-bundles__personalisation-modal__actions"><!> <!></div></div></div></div>');
  function zs(n, t) {
    Ye(t, !0);
    const r = k(t, "product", 7), a = k(t, "selectedVariants", 7), l = k(t, "personalisationValues", 7), o = k(t, "addPersonalisationModal", 7), u = k(t, "inline", 7, !1), c = k(t, "onConfirm", 7), i = k(t, "onClose", 7), s = g(() => {
      var P, V;
      return (V = (P = o()) == null ? void 0 : P.characterLimitEnabled) != null && V;
    }), d = g(() => {
      var P, V;
      return e(s) ? (V = (P = o()) == null ? void 0 : P.characterLimit) != null ? V : 30 : void 0;
    }), h = Math.max(...a().map(({ index: P }) => P), -1);
    let f = Ae(at(Array.from({ length: h + 1 }, (P, V) => l()[V] || "")));
    const p = new Set(l().map((P, V) => P && P.trim() !== "" ? V : -1).filter((P) => P !== -1)), v = g(() => o() ? (({ size: P, roundness: V, imageSize: G, textSize: U, overlayColor: ce, primaryTextColor: W, secondaryTextColor: _, buttonColor: T, buttonTextColor: M, errorColor: L }) => {
      const Y = Math.min(Math.max(0, P), gu.length - 1), J = Math.min(Math.max(0, V), hu.length - 1), q = gu[Y], A = hu[J];
      return pn({ "kaching-product-personalisation-font-0": q.fonts[0] + "px", "kaching-product-personalisation-font-1": q.fonts[1] + "px", "kaching-product-personalisation-font-2": q.fonts[2] + "px", "kaching-product-personalisation-font-3": q.fonts[3] + "px", "kaching-product-personalisation-gap-0": q.gaps[0] + "px", "kaching-product-personalisation-gap-1": q.gaps[1] + "px", "kaching-product-personalisation-gap-2": q.gaps[2] + "px", "kaching-product-personalisation-image-size": (G != null ? G : q.image) + "px", "kaching-product-personalisation-radius": A + "px", "kaching-product-personalisation-text-size": U + "px", "kaching-product-personalisation-overlay-color": je(ce), "kaching-product-personalisation-primary-text-color": je(W), "kaching-product-personalisation-secondary-text-color": je(_), "kaching-product-personalisation-button-color": je(T), "kaching-product-personalisation-button-text-color": je(M), "kaching-product-personalisation-error-color": je(L) });
    })(o()) : "");
    function I(P, V) {
      if (e(d) === void 0 || V.length <= e(d)) {
        const G = [...e(f)];
        G[P] = V, te(f, G, !0);
      }
    }
    function y(P) {
      return p.has(P) && !!e(f)[P] && e(f)[P].trim() !== "";
    }
    const x = g(() => e(f).some((P) => P && P.trim() !== "")), B = g(() => p.size > 0), D = g(() => !e(x) && !e(B));
    var j = { get product() {
      return r();
    }, set product(P) {
      r(P), m();
    }, get selectedVariants() {
      return a();
    }, set selectedVariants(P) {
      a(P), m();
    }, get personalisationValues() {
      return l();
    }, set personalisationValues(P) {
      l(P), m();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(P) {
      o(P), m();
    }, get inline() {
      return u();
    }, set inline(P = !1) {
      u(P), m();
    }, get onConfirm() {
      return c();
    }, set onConfirm(P) {
      c(P), m();
    }, get onClose() {
      return i();
    }, set onClose(P) {
      i(P), m();
    } }, C = dp();
    let F;
    C.__click = [ap, i];
    var K = S(C), O = S(K), le = S(O), ee = S(le), N = S(ee, !0);
    w(ee), Rt(E(ee, 2), { element: "span", class: "kaching-bundles__personalisation-modal__close", get onclick() {
      return i();
    }, children: (P, V) => {
      var G = ip();
      be(() => xe(G, "src", Cs)), b(P, G);
    }, $$slots: { default: !0 } }), w(le);
    var H = E(le, 2);
    Yt(H, 21, a, ({ variant: P, index: V }) => V, (P, V) => {
      let G = () => e(V).variant, U = () => e(V).index;
      var ce = up(), W = S(ce), _ = S(W), T = S(_);
      w(_);
      var M = E(_, 2), L = S(M), Y = S(L);
      w(L);
      var J = E(L, 2), q = (se) => {
        var _e = lp(), Ge = S(_e, !0);
        w(_e), be((pe) => bt(Ge, pe), [() => G().options.join(", ")]), b(se, _e);
      };
      R(J, (se) => {
        r().variants.length > 1 && se(q);
      }), w(M), w(W);
      var A = E(W, 2), re = S(A), ne = S(re);
      let ue;
      Gr(ne), ne.__input = [sp, I, U];
      var ae = E(ne, 2), fe = (se) => {
        Rt(se, { element: "span", class: "kaching-bundles__personalisation-modal__input-clear", onclick: () => (function(_e) {
          const Ge = [...e(f)];
          Ge[_e] = "", te(f, Ge, !0);
        })(U()), children: (_e, Ge) => {
          var pe = op();
          be(() => xe(pe, "src", "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.6667%203.99992V3.46659C10.6667%202.71985%2010.6667%202.34648%2010.5213%202.06126C10.3935%201.81038%2010.1895%201.60641%209.93865%201.47858C9.65344%201.33325%209.28007%201.33325%208.53333%201.33325H7.46667C6.71993%201.33325%206.34656%201.33325%206.06135%201.47858C5.81046%201.60641%205.60649%201.81038%205.47866%202.06126C5.33333%202.34648%205.33333%202.71985%205.33333%203.46659V3.99992M2%203.99992H14M12.6667%203.99992V11.4666C12.6667%2012.5867%2012.6667%2013.1467%2012.4487%2013.5746C12.2569%2013.9509%2011.951%2014.2569%2011.5746%2014.4486C11.1468%2014.6666%2010.5868%2014.6666%209.46667%2014.6666H6.53333C5.41323%2014.6666%204.85318%2014.6666%204.42535%2014.4486C4.04903%2014.2569%203.74307%2013.9509%203.55132%2013.5746C3.33333%2013.1467%203.33333%2012.5867%203.33333%2011.4666V3.99992'%20stroke='%23F04438'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(_e, pe);
        }, $$slots: { default: !0 } });
      };
      R(ae, (se) => {
        y(U()) && se(fe);
      }), w(re);
      var Ce = E(re, 2), he = (se) => {
        var _e = cp();
        let Ge;
        var pe = S(_e);
        w(_e), be((de) => {
          var Se, Oe;
          Ge = Tt(_e, 1, "kaching-bundles__personalisation-modal__input-counter", null, Ge, de), bt(pe, `${(Se = (e(f)[U()] || "").length) != null ? Se : ""}/${(Oe = e(d)) != null ? Oe : ""}`);
        }, [() => ({ "kaching-bundles__personalisation-modal__input-counter--error": e(d) !== void 0 && (e(f)[U()] || "").length >= e(d) })]), b(se, _e);
      };
      R(Ce, (se) => {
        e(s) && se(he);
      }), w(A), w(ce), be((se) => {
        var _e, Ge;
        xe(T, "src", G().image || r().image), bt(Y, `${(_e = r().title) != null ? _e : ""} #${U() + 1}`), ue = Tt(ne, 1, "kaching-bundles__personalisation-modal__input", null, ue, se), xe(ne, "placeholder", (Ge = o()) == null ? void 0 : Ge.placeholderText), ma(ne, e(f)[U()] || ""), xe(ne, "maxlength", e(d));
      }, [() => ({ "kaching-bundles__personalisation-modal__input--with-clear": y(U()), "kaching-bundles__personalisation-modal__input--error": e(d) !== void 0 && (e(f)[U()] || "").length >= e(d) })]), b(P, ce);
    }), w(H);
    var Q = E(H, 2), Z = S(Q);
    Rt(Z, { element: "button", class: "kaching-bundles__personalisation-modal__button kaching-bundles__personalisation-modal__button--cancel", get onclick() {
      return i();
    }, children: (P, V) => {
      Ur(), b(P, Mn("Cancel"));
    }, $$slots: { default: !0 } });
    var z = E(Z, 2);
    {
      let P = g(() => ["kaching-bundles__personalisation-modal__button", "kaching-bundles__personalisation-modal__button--confirm", e(D) && "kaching-bundles__personalisation-modal__button--disabled"]);
      Rt(z, { element: "button", get class() {
        return e(P);
      }, get disabled() {
        return e(D);
      }, onclick: () => c()(e(f)), children: (V, G) => {
        Ur(), b(V, Mn("Confirm"));
      }, $$slots: { default: !0 } });
    }
    return w(Q), w(O), w(K), w(C), be((P) => {
      var V;
      F = Tt(C, 1, "kaching-bundles__personalisation-modal-overlay", null, F, P), Wt(C, e(v)), bt(N, (V = o()) == null ? void 0 : V.heading);
    }, [() => ({ "kaching-bundles__personalisation-modal-overlay--inline": u() })]), b(n, C), Ke(j);
  }
  Sn(["click", "input"]), Ne(zs, { product: {}, selectedVariants: {}, personalisationValues: {}, addPersonalisationModal: {}, inline: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var gp = (n, t) => {
    te(t, !0);
  }, hp = (n, t) => {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), te(t, !0));
  }, pp = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image"/></div>'), fp = $('<div class="kaching-bundles__product-personalisation__image-wrapper"><img alt="" class="kaching-bundles__product-personalisation__image kaching-bundles__product-personalisation__image--default"/></div>'), bp = $('<span class="kaching-bundles__product-personalisation__title"><!> <span class="kaching-bundles__product-personalisation__subtitle"> </span></span>'), vp = $('<span class="kaching-bundles__product-personalisation__title"><!></span>'), _p = $('<span class="kaching-bundles__product-personalisation__subtitle"><!></span>'), mp = $("<!> <!>", 1), kp = $('<span class="kaching-bundles__product-personalisation__unit-label"> </span>'), yp = $('<span class="kaching-bundles__product-personalisation__price"><!> <!></span>'), xp = $('<span class="kaching-bundles__product-personalisation__compare-at-price"><!></span>'), wp = $('<div class="kaching-bundles"><!></div>'), Pp = $('<div role="button" tabindex="0"><div class="kaching-bundles__product-personalisation__main"><!> <div class="kaching-bundles__product-personalisation__content"><!></div></div> <div class="kaching-bundles__product-personalisation__pricing"><!> <!></div></div> <!>', 1);
  function Ca(n, t) {
    Ye(t, !0);
    const r = () => De(v, "$config", o), a = () => De(y, "$formatPrice", o), l = () => De(I, "$translate", o), [o, u] = ft();
    let c = k(t, "productPersonalisation", 7), i = k(t, "product", 7), s = k(t, "selectedVariantIds", 7), d = k(t, "quantity", 7), h = k(t, "addPersonalisationModal", 7), f = k(t, "onPersonalisationsChange", 7), p = k(t, "initialValues", 23, () => []);
    const v = gn(), I = It(), y = sn(), x = Dn();
    let B = Ae(!1), D = Ae(at([]));
    Ze(() => {
      c().id, p(), te(D, p().map((pe) => pe || ""), !0);
    });
    const j = g(() => {
      if (c().mediaImageGID) return De(x, "$getMediaImageUrl", o)(c().mediaImageGID);
    }), C = g(() => !e(j) && c().imageSize > 0), F = g(() => Math.round(100 * parseFloat(c().pricePerItem || "0") * r().currencyRate)), K = g(() => Math.round(100 * parseFloat(c().compareAtPrice || "0") * r().currencyRate)), O = g(() => e(F)), le = g(() => e(K)), ee = g(() => e(le) > 0 && e(le) > e(O)), N = g(() => ((pe) => pn({ "kaching-product-personalisation-image-height": pe.imageSize + "px" }))(c())), H = g(() => hn({ priceFormatter: a(), product: void 0, totalFullPrice: e(le) || e(O), totalDiscountedPrice: e(O), quantity: d(), unitQuantity: null })), Q = g(() => e(H)(l()(c().title))), Z = g(() => c().subtitle ? e(H)(l()(c().subtitle)) : ""), z = g(() => s().map((pe, de) => ({ variant: i().variants.find((Se) => Se.id === pe) || i().variants[0], index: de }))), P = g(() => e(D).some((pe) => (pe || "").trim() !== "")), V = g(() => e(D).map((pe, de) => ({ value: pe, index: de })).filter(({ value: pe }) => (pe || "").trim() !== "")), G = g(() => d() === 1);
    function U(pe) {
      var de;
      const Se = pe.map((X) => X || "");
      if (te(D, Se, !0), te(B, !1), !c().variantGID) return;
      const Oe = Nt(c().variantGID);
      if (!Oe) return;
      const Qe = l()(c().valueLabel || "Value"), we = Se.map((X, Ie) => ({ id: c().id, variantId: Oe, text: X, valueLabel: Qe, productIndex: Ie })).filter((X) => X.text.trim() !== "");
      (de = f()) == null || de(we);
    }
    var ce = { get productPersonalisation() {
      return c();
    }, set productPersonalisation(pe) {
      c(pe), m();
    }, get product() {
      return i();
    }, set product(pe) {
      i(pe), m();
    }, get selectedVariantIds() {
      return s();
    }, set selectedVariantIds(pe) {
      s(pe), m();
    }, get quantity() {
      return d();
    }, set quantity(pe) {
      d(pe), m();
    }, get addPersonalisationModal() {
      return h();
    }, set addPersonalisationModal(pe) {
      h(pe), m();
    }, get onPersonalisationsChange() {
      return f();
    }, set onPersonalisationsChange(pe) {
      f(pe), m();
    }, get initialValues() {
      return p();
    }, set initialValues(pe = []) {
      p(pe), m();
    } }, W = Pp(), _ = ve(W);
    let T;
    _.__click = [gp, B], _.__keydown = [hp, B];
    var M = S(_), L = S(M), Y = (pe) => {
      var de = pp(), Se = S(de);
      w(de), be(() => {
        xe(Se, "src", e(j)), xe(Se, "height", c().imageSize || 0);
      }), b(pe, de);
    }, J = (pe) => {
      var de = ze(), Se = ve(de), Oe = (Qe) => {
        var we = fp(), X = S(we);
        w(we), be(() => {
          xe(X, "src", "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0476%206.95032C24.6473%206.55003%2024.1722%206.23251%2023.6492%206.01588C23.1262%205.79924%2022.5657%205.68774%2021.9996%205.68774C21.4335%205.68774%2020.873%205.79924%2020.35%206.01588C19.8271%206.23251%2019.3519%206.55003%2018.9516%206.95032L17.9932%207.90872L17.9788%207.89432L16.2828%209.59032L16.2972%209.60632L6.88921%2019.0143C6.06394%2019.8391%205.60007%2020.9579%205.59961%2022.1247V25.1999C5.59961%2025.5182%205.72604%2025.8234%205.95108%2026.0484C6.17612%2026.2735%206.48135%2026.3999%206.79961%2026.3999H9.87481C11.0416%2026.3995%2012.1604%2025.9356%2012.9852%2025.1103L25.0492%2013.0463C25.4495%2012.6461%2025.767%2012.1709%2025.9837%2011.6479C26.2003%2011.1249%2026.3118%2010.5644%2026.3118%209.99832C26.3118%209.43225%2026.2003%208.87172%2025.9837%208.34874C25.767%207.82576%2025.4495%207.35058%2025.0492%206.95032H25.0476ZM17.9932%2011.3023L8.58521%2020.7103C8.3995%2020.8961%208.25221%2021.1166%208.15173%2021.3593C8.05125%2021.602%207.99956%2021.8621%207.99961%2022.1247V23.9999H9.87481C10.4044%2023.9999%2010.9148%2023.7887%2011.2876%2023.4143L20.6956%2014.0063L17.9932%2011.3023ZM22.3932%2012.3087L23.3516%2011.3503C23.6865%2010.9871%2023.8678%2010.5084%2023.8578%2010.0144C23.8477%209.52049%2023.647%209.04957%2023.2977%208.70023C22.9484%208.35089%2022.4774%208.15019%2021.9835%208.14015C21.4896%208.1301%2021.0109%208.31147%2020.6476%208.64632L19.6908%209.60632L22.3932%2012.3087Z'%20fill='black'/%3e%3c/svg%3e"), xe(X, "height", c().imageSize || 0);
        }), b(Qe, we);
      };
      R(Se, (Qe) => {
        e(C) && Qe(Oe);
      }, !0), b(pe, de);
    };
    R(L, (pe) => {
      e(j) ? pe(Y) : pe(J, !1);
    });
    var q = E(L, 2), A = S(q), re = (pe) => {
      var de = ze();
      Yt(ve(de), 17, () => e(V), ({ value: Se, index: Oe }) => Oe, (Se, Oe) => {
        var Qe = bp(), we = S(Qe), X = (Ve) => {
          var me = Mn();
          be(() => bt(me, `#${e(Oe).index + 1}`)), b(Ve, me);
        };
        R(we, (Ve) => {
          e(G) || Ve(X);
        });
        var Ie = E(we, 2), ge = S(Ie, !0);
        w(Ie), w(Qe), be(() => bt(ge, e(Oe).value)), b(Se, Qe);
      }), b(pe, de);
    }, ne = (pe) => {
      var de = mp(), Se = ve(de), Oe = (X) => {
        var Ie = vp();
        Te(S(Ie), () => e(Q)), w(Ie), b(X, Ie);
      };
      R(Se, (X) => {
        e(Q) && X(Oe);
      });
      var Qe = E(Se, 2), we = (X) => {
        var Ie = _p();
        Te(S(Ie), () => e(Z)), w(Ie), b(X, Ie);
      };
      R(Qe, (X) => {
        e(Z) && X(we);
      }), b(pe, de);
    };
    R(A, (pe) => {
      e(P) ? pe(re) : pe(ne, !1);
    }), w(q), w(M);
    var ue = E(M, 2), ae = S(ue), fe = (pe) => {
      var de = yp(), Se = S(de);
      Te(Se, () => a()(e(O)));
      var Oe = E(Se, 2), Qe = (we) => {
        var X = kp(), Ie = S(X, !0);
        w(X), be(() => bt(Ie, c().pricePerItemUnitLabel)), b(we, X);
      };
      R(Oe, (we) => {
        c().pricePerItemUnitLabel && we(Qe);
      }), w(de), b(pe, de);
    };
    R(ae, (pe) => {
      e(O) > 0 && pe(fe);
    });
    var Ce = E(ae, 2), he = (pe) => {
      var de = xp();
      Te(S(de), () => a()(e(le))), w(de), b(pe, de);
    };
    R(Ce, (pe) => {
      e(ee) && pe(he);
    }), w(ue), w(_);
    var se = E(_, 2), _e = (pe) => {
      qi(pe, { target: "body", children: (de, Se) => {
        var Oe = wp();
        zs(S(Oe), { get product() {
          return i();
        }, get selectedVariants() {
          return e(z);
        }, get personalisationValues() {
          return e(D);
        }, get addPersonalisationModal() {
          return h();
        }, onConfirm: U, onClose: () => {
          te(B, !1);
        } }), w(Oe), b(de, Oe);
      }, $$slots: { default: !0 } });
    };
    R(se, (pe) => {
      e(B) && pe(_e);
    }), be((pe) => {
      T = Tt(_, 1, "kaching-bundles__product-personalisation", null, T, pe), xe(_, "data-product-personalisation-id", c().id), Wt(_, e(N));
    }, [() => ({ "kaching-bundles__product-personalisation--filled": e(P) })]), b(n, W);
    var Ge = Ke(ce);
    return u(), Ge;
  }
  function Sp(n, t, r) {
    const a = Number(n.target.value), l = t().find((o) => o.id === a);
    r()(l);
  }
  Sn(["click", "keydown"]), Ne(Ca, { productPersonalisation: {}, product: {}, selectedVariantIds: {}, quantity: {}, addPersonalisationModal: {}, onPersonalisationsChange: {}, initialValues: {} }, [], [], !0);
  var Cp = (n) => n.stopPropagation(), Bp = $("<option> </option>"), Ip = $('<select class="kaching-bundles__bar-variant-select kaching-bundles__selling-plan-select"></select>');
  function ta(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "sellingPlans", 7), o = k(t, "selectedSellingPlan", 7), u = k(t, "onChange", 7), c = It();
    var i, s = { get sellingPlans() {
      return l();
    }, set sellingPlans(f) {
      l(f), m();
    }, get selectedSellingPlan() {
      return o();
    }, set selectedSellingPlan(f) {
      o(f), m();
    }, get onChange() {
      return u();
    }, set onChange(f) {
      u(f), m();
    } }, d = Ip();
    d.__change = [Sp, l, u], d.__click = [Cp], Yt(d, 21, l, (f) => f.id, (f, p) => {
      var v = Bp(), I = S(v, !0);
      w(v);
      var y = {};
      be(() => {
        var x;
        bt(I, e(p).name), y !== (y = e(p).id) && (v.value = (x = v.__value = e(p).id) != null ? x : "");
      }), b(f, v);
    }), w(d), cs(d), be((f) => {
      var p;
      xe(d, "aria-label", f), i !== (i = o().id) && (d.value = (p = d.__value = o().id) != null ? p : "", wi(d, o().id));
    }, [() => De(c, "$translate", r)("system.subscription_plan")]), b(n, d);
    var h = Ke(s);
    return a(), h;
  }
  Sn(["change", "click"]), Ne(ta, { sellingPlans: {}, selectedSellingPlan: {}, onChange: {} }, [], [], !0);
  var Mp = qn('<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.334 1 5 8.333 1.667 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Sl(n) {
    b(n, Mp());
  }
  Ne(Sl, {}, [], [], !0);
  var Dp = $('<img alt="" class="kaching-bundles__upsell__image"/>'), zp = $('<div class="kaching-bundles__upsell__price"><!></div>'), $p = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Ap = $('<div class="kaching-bundles__upsell__price"><!></div>'), qp = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Vp = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!> <!></div>'), Tp = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <!>', 1), Gp = $('<div class="kaching-bundles__upsell__price"><!></div>'), Op = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Fp = $('<div class="kaching-bundles__upsell__unit-price"><!> </div>'), Lp = $('<div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--main"><!> <!></div> <div class="kaching-bundles__upsell__pricing-row kaching-bundles__upsell__pricing-row--secondary"><!></div>', 1), Ep = $('<div class="kaching-bundles__upsell__price"><!></div>'), jp = $('<div class="kaching-bundles__upsell__full-price"><!></div>'), Rp = $("<!> <!>", 1), Np = $('<div><div class="kaching-bundles__upsell__main"><!> <!> <div class="kaching-bundles__upsell__content"><!> <!> <!></div></div> <div class="kaching-bundles__upsell__pricing"><!></div></div>');
  function pu(n, t) {
    Ye(t, !0);
    const r = () => De(y, "$config", l), a = () => De(v, "$formatPrice", l), [l, o] = ft();
    let u = k(t, "dealBlock", 7), c = k(t, "upsell", 7), i = k(t, "product", 7), s = k(t, "dealBarSelected", 7, !1), d = k(t, "dealSellingPlan", 7), h = k(t, "sets", 7), f = k(t, "onChange", 7);
    const p = It(), v = sn(), I = Dn(), y = gn();
    let x = Ae(at(c().preselected)), B = Ae(void 0), D = Ae(void 0);
    const j = g(() => c().variantGIDs ? c().variantGIDs.map(Nt) : i().variants.map((he) => he.id)), C = g(() => ({ ...i(), variants: i().variants.filter((he) => (r().preview || he.availableForSale) && e(j).includes(he.id)) })), F = g(() => (function(he, se) {
      if (he !== void 0) return he;
      if (se != null && se.availableForSale && se.variants.length > 0) return se.variants[0].id;
    })(e(B), e(C))), K = g(() => e(C).variants.find((he) => he.id === e(F))), O = g(() => De(I, "$getMediaImageUrl", l)(c().mediaImageGID)), le = g(() => ((he, se) => {
      const { fonts: _e, colors: Ge, cornerRadius: pe } = he;
      return pn({ "kaching-upsell-background-color": Ge.upsellBackground && je(Ge.upsellBackground), "kaching-upsell-text-color": Ge.upsellText && je(Ge.upsellText), "kaching-upsell-selected-background-color": Ge.upsellSelectedBackground && je(Ge.upsellSelectedBackground), "kaching-upsell-selected-text-color": Ge.upsellSelectedText && je(Ge.upsellSelectedText), "kaching-upsell-font-size": _e.upsell && _e.upsell.size + "px", "kaching-upsell-font-weight": _e.upsell && Xn(_e.upsell.style), "kaching-upsell-font-style": _e.upsell && er(_e.upsell.style), "kaching-upsell-image-border-radius": (pe || 0) / 2 + "px", "kaching-upsell-image-height": se.imageSize + "px" });
    })(u(), c())), ee = g(() => i().url ? `${i().url}?variant=${e(F)}` : void 0), N = g(() => u().priceRounding ? { perItem: u().showPricesPerItem, precision: u().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), H = g(() => c().quantity * h()), Q = g(() => (function(he) {
      if (!he) return 0;
      let se = he.price;
      return u().useProductCompareAtPrice && he.compareAtPrice && (se = Math.max(se, he.compareAtPrice)), se * e(H);
    })(e(K))), Z = g(() => Math.ceil(e(Q) / e(H))), z = g(() => {
      var he;
      return (he = c().subscriptionEnabled) == null || he;
    }), P = g(() => {
      var he;
      return (he = c().subscriptionType) != null ? he : "deal";
    }), V = g(() => {
      if (!e(z) || e(P) !== "always" || !e(K)) return [];
      const he = new Set(e(K).sellingPlans.map((se) => se.id));
      return i().sellingPlans.filter((se) => he.has(se.id));
    }), G = g(() => e(V).find((he) => he.id === e(D)) || e(V)[0]);
    Ze(() => {
      var he;
      e(V).some((se) => {
        var _e;
        return se.id === ((_e = d()) == null ? void 0 : _e.id);
      }) && te(D, (he = d()) == null ? void 0 : he.id, !0);
    });
    const U = g(() => {
      if (e(K) && e(z))
        return e(P) === "deal" ? d() ? Ln(i(), e(K), d()) : void 0 : e(G);
    }), ce = g(() => Lr({ discountType: c().discountType, discountValue: c().discountValue, discountQuantity: c().quantity, variantQuantities: e(K) ? [{ variant: e(K), quantity: e(H) }] : [], currencyRate: r().currencyRate, priceRounding: e(N), sellingPlan: e(U) })), W = g(() => Math.ceil(e(ce) / e(H))), _ = g(() => e(Q) > e(ce)), T = g(() => e(K) && ks(e(K))), M = g(() => e(K) ? nr([{ variant: e(K), quantity: e(H) }]) : null), L = g(() => e(M) ? e(ce) / e(M) : null), Y = g(() => hn({ priceFormatter: a(), product: i(), totalFullPrice: e(Q), totalDiscountedPrice: e(ce), quantity: e(H), unitQuantity: e(M), sellingPlan: e(U) })), J = g(() => e(Y)(De(p, "$translate", l)(c().text)));
    function q(he) {
      te(B, he, !0);
    }
    function A() {
      s() && te(x, !e(x));
    }
    Jn(() => {
      c().productGID, te(B, void 0);
    }), Ze(() => {
      if (e(K) && i().availableForSale && e(H)) {
        const he = e(x), se = e(U);
        tn(() => {
          f()({ variant: he ? e(K) : null, product: he ? i() : null, discountedPrice: he ? e(ce) : 0, fullPrice: he ? e(Q) : 0, sellingPlan: he ? se : void 0 });
        });
      }
    });
    const re = g(() => !i().availableForSale || i().variants.filter((he) => he.availableForSale && e(j).includes(he.id)).length === 0);
    var ne = { get dealBlock() {
      return u();
    }, set dealBlock(he) {
      u(he), m();
    }, get upsell() {
      return c();
    }, set upsell(he) {
      c(he), m();
    }, get product() {
      return i();
    }, set product(he) {
      i(he), m();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(he = !1) {
      s(he), m();
    }, get dealSellingPlan() {
      return d();
    }, set dealSellingPlan(he) {
      d(he), m();
    }, get sets() {
      return h();
    }, set sets(he) {
      h(he), m();
    }, get onChange() {
      return f();
    }, set onChange(he) {
      f(he), m();
    } }, ue = ze(), ae = ve(ue), fe = (he) => {
      var se = Np();
      let _e;
      var Ge = S(se), pe = S(Ge), de = (Re) => {
        {
          let lt = g(() => ["kaching-bundles__upsell__checkbox", e(x) && "kaching-bundles__upsell__checkbox--selected"]);
          Rt(Re, { element: "span", get class() {
            return e(lt);
          }, onclick: A, children: (dt, St) => {
            var Ft = ze(), Mt = ve(Ft), Et = (Lt) => {
              Sl(Lt);
            };
            R(Mt, (Lt) => {
              e(x) && Lt(Et);
            }), b(dt, Ft);
          }, $$slots: { default: !0 } });
        }
      };
      R(pe, (Re) => {
        s() && Re(de);
      });
      var Se = E(pe, 2), Oe = (Re) => {
        {
          let lt = g(() => s() ? e(ee) : void 0);
          Vn(Re, { get url() {
            return e(lt);
          }, class: "kaching-bundles__upsell__link", children: (dt, St) => {
            var Ft = Dp();
            be(() => {
              var Mt;
              xe(Ft, "src", e(O) || ((Mt = e(K)) == null ? void 0 : Mt.image) || i().image), xe(Ft, "height", c().imageSize);
            }), b(dt, Ft);
          }, $$slots: { default: !0 } });
        }
      };
      R(Se, (Re) => {
        c().imageSize > 0 && Re(Oe);
      });
      var Qe = E(Se, 2), we = S(Qe), X = (Re) => {
        Rt(Re, { element: "span", class: "kaching-bundles__upsell__text", onclick: A, children: (lt, dt) => {
          var St = ze();
          Te(ve(St), () => e(J)), b(lt, St);
        }, $$slots: { default: !0 } });
      };
      R(we, (Re) => {
        e(J) && Re(X);
      });
      var Ie = E(we, 2), ge = (Re) => {
        zn(Re, { get product() {
          return e(C);
        }, get selectedVariantId() {
          return e(F);
        }, onChange: q });
      };
      R(Ie, (Re) => {
        s() && e(C) && e(C).variants.length > 1 && e(F) && Re(ge);
      });
      var Ve = E(Ie, 2), me = (Re) => {
        ta(Re, { get sellingPlans() {
          return e(V);
        }, get selectedSellingPlan() {
          return e(G);
        }, onChange: (lt) => te(D, lt.id, !0) });
      };
      R(Ve, (Re) => {
        s() && e(x) && e(V).length > 1 && e(G) && Re(me);
      }), w(Qe), w(Ge);
      var Me = E(Ge, 2), nt = S(Me), ht = (Re) => {
        var lt = Tp(), dt = ve(lt), St = S(dt);
        et(St, () => e(W), (Pe) => {
          var tt = zp();
          Te(S(tt), () => a()(e(W))), w(tt), b(Pe, tt);
        });
        var Ft = E(St, 2), Mt = (Pe) => {
          var tt = ze();
          et(ve(tt), () => e(Z), (rt) => {
            var st = $p();
            Te(S(st), () => a()(e(Z))), w(st), b(rt, st);
          }), b(Pe, tt);
        };
        R(Ft, (Pe) => {
          e(_) && Pe(Mt);
        }), w(dt);
        var Et = E(dt, 2), Lt = (Pe) => {
          var tt = Vp(), rt = S(tt);
          et(rt, () => e(ce), (Ue) => {
            var vt = Ap();
            Te(S(vt), () => a()(e(ce))), w(vt), b(Ue, vt);
          });
          var st = E(rt, 2), Xe = (Ue) => {
            var vt = ze();
            et(ve(vt), () => e(Q), (Qt) => {
              var an = qp();
              Te(S(an), () => a()(e(Q))), w(an), b(Qt, an);
            }), b(Ue, vt);
          };
          R(st, (Ue) => {
            e(_) && Ue(Xe);
          }), w(tt), b(Pe, tt);
        };
        R(Et, (Pe) => {
          e(H) > 1 && Pe(Lt);
        }), b(Re, lt);
      }, kt = (Re) => {
        var lt = ze(), dt = ve(lt), St = (Mt) => {
          var Et = Lp(), Lt = ve(Et), Pe = S(Lt);
          et(Pe, () => e(ce), (Xe) => {
            var Ue = Gp();
            Te(S(Ue), () => a()(u().showPricesPerItem ? e(W) : e(ce))), w(Ue), b(Xe, Ue);
          });
          var tt = E(Pe, 2), rt = (Xe) => {
            var Ue = ze();
            et(ve(Ue), () => e(Q), (vt) => {
              var Qt = Op();
              Te(S(Qt), () => a()(u().showPricesPerItem ? e(Z) : e(Q))), w(Qt), b(vt, Qt);
            }), b(Xe, Ue);
          };
          R(tt, (Xe) => {
            e(_) && Xe(rt);
          }), w(Lt);
          var st = E(Lt, 2);
          et(S(st), () => e(L), (Xe) => {
            var Ue = Fp(), vt = S(Ue);
            Te(vt, () => a()(e(L), { preserveDecimals: !0 }));
            var Qt = E(vt);
            w(Ue), be(() => {
              var an;
              return bt(Qt, ` / ${(an = e(T)) != null ? an : ""}`);
            }), b(Xe, Ue);
          }), w(st), b(Mt, Et);
        }, Ft = (Mt) => {
          var Et = Rp(), Lt = ve(Et);
          et(Lt, () => e(ce), (rt) => {
            var st = Ep();
            Te(S(st), () => a()(u().showPricesPerItem ? e(W) : e(ce))), w(st), b(rt, st);
          });
          var Pe = E(Lt, 2), tt = (rt) => {
            var st = ze();
            et(ve(st), () => e(Q), (Xe) => {
              var Ue = jp();
              Te(S(Ue), () => a()(u().showPricesPerItem ? e(Z) : e(Q))), w(Ue), b(Xe, Ue);
            }), b(rt, st);
          };
          R(Pe, (rt) => {
            e(_) && rt(tt);
          }), b(Mt, Et);
        };
        R(dt, (Mt) => {
          e(L) && e(T) && !r().ignoreUnitPrice ? Mt(St) : Mt(Ft, !1);
        }, !0), b(Re, lt);
      };
      R(nt, (Re) => {
        u().showBothPrices ? Re(ht) : Re(kt, !1);
      }), w(Me), w(se), be((Re) => {
        _e = Tt(se, 1, "kaching-bundles__upsell", null, _e, Re), xe(se, "data-upsell-id", c().id), Wt(se, e(le));
      }, [() => ({ "kaching-bundles__upsell--out-of-stock": r().preview && e(re) })]), b(he, se);
    };
    R(ae, (he) => {
      !(e(K) || r().preview && e(re)) || c().visibleOnlyWhenDealBarSelected && !s() || he(fe);
    }), b(n, ue);
    var Ce = Ke(ne);
    return o(), Ce;
  }
  Ne(pu, { dealBlock: {}, upsell: {}, product: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var Qp = $('<div class="kaching-bundles__free-gift__divider"></div>'), Wp = $("<!> <!>", 1);
  function Ka(n, t) {
    Ye(t, !0);
    const r = () => De(p, "$config", a), [a, l] = ft();
    let o = k(t, "dealBlock", 7), u = k(t, "upsells", 7), c = k(t, "otherProducts", 7), i = k(t, "complementaryProducts", 7), s = k(t, "dealBarSelected", 7), d = k(t, "dealSellingPlan", 7), h = k(t, "sets", 7, 1), f = k(t, "onChange", 7);
    const p = gn();
    let v = Ae(at({}));
    const I = g(() => r().preview ? c() : c().map(tr)), y = g(() => r().preview ? i() : i().map(tr)), x = Math.floor(1e3 * Math.random()), B = g(() => u().flatMap((F, K) => {
      if (F.productSource === "complementary") {
        const le = e(y)[(K + x) % (e(y).length || 1)];
        return le && (r().preview || le.availableForSale) ? { upsell: F, product: le } : [];
      }
      if (!F.productGID) return [];
      const O = e(I).find((le) => le.id === Nt(F.productGID));
      if (!O) return [];
      if (!r().preview) {
        if (!O.availableForSale) return [];
        const le = F.variantGIDs ? F.variantGIDs.map(Nt) : O.variants.map((ee) => ee.id);
        if (!O.variants.some((ee) => ee.availableForSale && le.includes(ee.id))) return [];
      }
      return { upsell: F, product: O };
    }));
    var D = { get dealBlock() {
      return o();
    }, set dealBlock(F) {
      o(F), m();
    }, get upsells() {
      return u();
    }, set upsells(F) {
      u(F), m();
    }, get otherProducts() {
      return c();
    }, set otherProducts(F) {
      c(F), m();
    }, get complementaryProducts() {
      return i();
    }, set complementaryProducts(F) {
      i(F), m();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(F) {
      s(F), m();
    }, get dealSellingPlan() {
      return d();
    }, set dealSellingPlan(F) {
      d(F), m();
    }, get sets() {
      return h();
    }, set sets(F = 1) {
      h(F), m();
    }, get onChange() {
      return f();
    }, set onChange(F) {
      f(F), m();
    } }, j = ze();
    Yt(ve(j), 19, () => e(B), ({ upsell: F, product: K }) => F.id, (F, K, O) => {
      let le = () => e(K).upsell;
      var ee = Wp(), N = ve(ee);
      pu(N, { get dealBlock() {
        return o();
      }, get upsell() {
        return le();
      }, get product() {
        return e(K).product;
      }, get dealBarSelected() {
        return s();
      }, get dealSellingPlan() {
        return d();
      }, get sets() {
        return h();
      }, onChange: (Z) => (function(z, P) {
        const { variant: V, product: G, discountedPrice: U, fullPrice: ce, sellingPlan: W } = P;
        V && G ? e(v)[z] = { variant: V, product: G, discountedPrice: U, fullPrice: ce, sellingPlan: W } : delete e(v)[z];
        const _ = u().filter((T) => T.id in e(v)).map((T) => ({ id: T.id, variant: e(v)[T.id].variant, product: e(v)[T.id].product, quantity: T.quantity * h(), discountedPrice: e(v)[T.id].discountedPrice, fullPrice: e(v)[T.id].fullPrice, sellingPlan: e(v)[T.id].sellingPlan }));
        f()(_);
      })(le().id, Z) });
      var H = E(N, 2), Q = (Z) => {
        b(Z, Qp());
      };
      R(H, (Z) => {
        e(O) < e(B).length - 1 && Z(Q);
      }), b(F, ee);
    }), b(n, j);
    var C = Ke(D);
    return l(), C;
  }
  Ne(Ka, { dealBlock: {}, upsells: {}, otherProducts: {}, complementaryProducts: {}, dealBarSelected: {}, dealSellingPlan: {}, sets: {}, onChange: {} }, [], [], !0);
  var Up = $('<span class="kaching-bundles__bar-price__unit-label"><!></span>'), Hp = $('<div class="kaching-bundles__bar-price"><!> <!></div>');
  function wr(n, t) {
    Ye(t, !0);
    const r = () => De(i, "$translate", a), [a, l] = ft(), o = k(t, "amount", 7), u = k(t, "showPricesPerItem", 7), c = k(t, "unitLabel", 7, ""), i = It(), s = sn();
    var d = { get amount() {
      return o();
    }, set amount(y) {
      o(y), m();
    }, get showPricesPerItem() {
      return u();
    }, set showPricesPerItem(y) {
      u(y), m();
    }, get unitLabel() {
      return c();
    }, set unitLabel(y = "") {
      c(y), m();
    } }, h = Hp(), f = S(h);
    Te(f, () => De(s, "$formatPrice", a)(o()));
    var p = E(f, 2), v = (y) => {
      var x = Up();
      Te(S(x), () => r()(c())), w(x), b(y, x);
    };
    R(p, (y) => {
      u() && c() && y(v);
    }), w(h), be((y) => xe(h, "data-a11y-label", y), [() => r()("system.price")]), b(n, h);
    var I = Ke(d);
    return l(), I;
  }
  Ne(wr, { amount: {}, showPricesPerItem: {}, unitLabel: {} }, [], [], !0);
  const fu = "variantBadges";
  function bu(n = []) {
    const t = Or(vu(n));
    return Ta(fu, t), { setVariantBadges: (r) => {
      t.set(vu(r));
    } };
  }
  function vu(n) {
    const t = new Map(n.map((r) => [r.variantId, r.badgeHtml]));
    return (r) => r === void 0 ? void 0 : t.get(r);
  }
  var Zp = $('<div class="kaching-bundles__low-stock-alert"><!></div>');
  function _u(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "lowStockAlert", 7), o = k(t, "inventoryQuantity", 7), u = It(), c = g(() => {
      return v = De(u, "$translate", r)(l().message), I = { stock: o() ? o().toString() : null }, v.replace(/\{\{\s*(\w+)\s*\}\}/g, (y, x) => {
        var B;
        return (B = I[x]) != null ? B : "";
      });
      var v, I;
    }), i = g(() => ((v) => {
      const { textColor: I } = v;
      return pn({ "kaching-bundles-low-stock-alert-text-color": je(I) });
    })(l()));
    var s = { get lowStockAlert() {
      return l();
    }, set lowStockAlert(v) {
      l(v), m();
    }, get inventoryQuantity() {
      return o();
    }, set inventoryQuantity(v) {
      o(v), m();
    } }, d = ze(), h = ve(d), f = (v) => {
      var I = Zp();
      Te(S(I), () => e(c)), w(I), be(() => Wt(I, e(i))), b(v, I);
    };
    R(h, (v) => {
      o() && o() > 0 && o() < l().threshold && v(f);
    }), b(n, d);
    var p = Ke(s);
    return a(), p;
  }
  Ne(_u, { lowStockAlert: {}, inventoryQuantity: {} }, [], [], !0);
  var Jp = $("<div><!></div>");
  function Er(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "dealBlock", 7), o = k(t, "variant", 7), u = (function() {
      const v = Va(fu);
      if (!v) throw new Error("getVariantBadges must be called within a component tree that has setupVariantBadges initialized");
      return v;
    })(), c = g(() => {
      var v;
      return De(u, "$variantBadgeLookup", r)((v = o()) == null ? void 0 : v.id);
    });
    var i = { get dealBlock() {
      return l();
    }, set dealBlock(v) {
      l(v), m();
    }, get variant() {
      return o();
    }, set variant(v) {
      o(v), m();
    } }, s = ze(), d = ve(s), h = (v) => {
      var I = Jp();
      Te(S(I), () => e(c)), w(I), b(v, I);
    }, f = (v) => {
      var I = ze(), y = ve(I), x = (B) => {
        {
          let D = g(() => {
            var j, C;
            return (C = (j = o()) == null ? void 0 : j.inventoryQuantity) != null ? C : null;
          });
          _u(B, { get lowStockAlert() {
            return l().lowStockAlert;
          }, get inventoryQuantity() {
            return e(D);
          } });
        }
      };
      R(y, (B) => {
        l().lowStockAlertEnabled && l().lowStockAlert && B(x);
      }, !0), b(v, I);
    };
    R(d, (v) => {
      e(c) ? v(h) : v(f, !1);
    }), b(n, s);
    var p = Ke(i);
    return a(), p;
  }
  Ne(Er, { dealBlock: {}, variant: {} }, [], [], !0);
  var Yp = $('<div class="kaching-bundles__bar-sold-out-badge"><!></div>');
  function Xa(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "showAsSoldOut", 7), o = k(t, "replaceLiquid", 7), u = It(), c = g(() => o()(De(u, "$translate", r)(l().label)));
    var i = { get showAsSoldOut() {
      return l();
    }, set showAsSoldOut(h) {
      l(h), m();
    }, get replaceLiquid() {
      return o();
    }, set replaceLiquid(h) {
      o(h), m();
    } }, s = Yp();
    Te(S(s), () => e(c)), w(s), b(n, s);
    var d = Ke(i);
    return a(), d;
  }
  Ne(Xa, { showAsSoldOut: {}, replaceLiquid: {} }, [], [], !0);
  const Vi = (n) => {
    const { opacity: t, backgroundColor: r, textColor: a, textSize: l } = n;
    return pn({ "kaching-bundles-show-as-sold-out-opacity": t.toString(), "kaching-bundles-show-as-sold-out-background-color": je(r), "kaching-bundles-show-as-sold-out-text-color": je(a), "kaching-bundles-show-as-sold-out-text-size": l + "px" });
  };
  var Kp = $('<img alt="Decrease"/>'), Xp = $('<img alt="Increase"/>'), ef = $('<div class="kaching-bundles__quantity-selector"><!> <input type="number" class="kaching-bundles__quantity-selector__input" step="1"/> <!></div>');
  function Ti(n, t) {
    Ye(t, !0);
    const [r, a] = ft();
    let l = k(t, "value", 7), o = k(t, "onChange", 7), u = k(t, "min", 7, 1);
    const c = It(), i = g(() => l() <= u());
    var s = { get value() {
      return l();
    }, set value(v) {
      l(v), m();
    }, get onChange() {
      return o();
    }, set onChange(v) {
      o(v), m();
    }, get min() {
      return u();
    }, set min(v = 1) {
      u(v), m();
    } }, d = ef(), h = S(d);
    {
      let v = g(() => ["kaching-bundles__quantity-selector__button", e(i) && "kaching-bundles__quantity-selector__button--disabled"]);
      Rt(h, { element: "div", get class() {
        return e(v);
      }, onclick: function(I) {
        I.stopPropagation(), o()(Math.max(l() - 1, u()));
      }, get disabled() {
        return e(i);
      }, children: (I, y) => {
        var x = Kp();
        be(() => xe(x, "src", Kc)), b(I, x);
      }, $$slots: { default: !0 } });
    }
    var f = E(h, 2);
    Gr(f), Rt(E(f, 2), { element: "div", class: "kaching-bundles__quantity-selector__button", onclick: function(v) {
      v.stopPropagation(), o()(l() + 1);
    }, children: (v, I) => {
      var y = Xp();
      be(() => xe(y, "src", Xc)), b(v, y);
    }, $$slots: { default: !0 } }), w(d), be((v) => {
      xe(f, "aria-label", v), ma(f, l()), xe(f, "min", u());
    }, [() => De(c, "$translate", r)("system.quantity")]), tc("blur", f, function(v) {
      const I = v.target, y = parseInt(I.value);
      o()(isNaN(y) ? u() : Math.max(y, u()));
    }), b(n, d);
    var p = Ke(s);
    return a(), p;
  }
  function tf(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ne(Ti, { value: {}, onChange: {}, min: {} }, [], [], !0);
  var nf = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-multiple-gifts-modal" role="none"><div class="kaching-bundles__choose-multiple-gifts-modal__content"><!></div></div></div>');
  function mu(n, t) {
    Ye(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelector", 7), l = k(t, "products", 23, () => []), o = k(t, "initialSelectedGifts", 7), u = k(t, "isOpen", 7), c = k(t, "onConfirm", 7), i = k(t, "onClose", 7);
    var s = { get dealBlock() {
      return r();
    }, set dealBlock(p) {
      r(p), m();
    }, get multipleGiftsSelector() {
      return a();
    }, set multipleGiftsSelector(p) {
      a(p), m();
    }, get products() {
      return l();
    }, set products(p = []) {
      l(p), m();
    }, get initialSelectedGifts() {
      return o();
    }, set initialSelectedGifts(p) {
      o(p), m();
    }, get isOpen() {
      return u();
    }, set isOpen(p) {
      u(p), m();
    }, get onConfirm() {
      return c();
    }, set onConfirm(p) {
      c(p), m();
    }, get onClose() {
      return i();
    }, set onClose(p) {
      i(p), m();
    } }, d = ze(), h = ve(d), f = (p) => {
      qi(p, { target: "body", children: (v, I) => {
        var y = nf(), x = S(y);
        x.__click = [tf, i];
        var B = S(x);
        ys(S(B), { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return a();
        }, get products() {
          return l();
        }, get initialSelectedGifts() {
          return o();
        }, get onConfirm() {
          return c();
        }, get onClose() {
          return i();
        } }), w(B), w(x), w(y), be((D) => Wt(x, D), [() => (function(D) {
          var j;
          return pn({ "kaching-choose-multiple-gifts-overlay-color": je(((j = D.chooseMultipleGiftsModal) == null ? void 0 : j.overlayColor) || hh) });
        })(r())]), b(v, y);
      }, $$slots: { default: !0 } });
    };
    return R(h, (p) => {
      u() && p(f);
    }), b(n, d), Ke(s);
  }
  Sn(["click"]), Ne(mu, { dealBlock: {}, multipleGiftsSelector: {}, products: {}, initialSelectedGifts: {}, isOpen: {}, onConfirm: {}, onClose: {} }, [], [], !0);
  var rf = qn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33337V10.6667M5.33398 8.00004H10.6673M14.6673 8.00004C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00004C1.33398 4.31814 4.31875 1.33337 8.00065 1.33337C11.6825 1.33337 14.6673 4.31814 14.6673 8.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function ku(n) {
    b(n, rf());
  }
  Ne(ku, {}, [], [], !0);
  var af = $('<img alt="" class="kaching-bundles__free-gift__image"/>'), lf = $('<div class="kaching-bundles__free-gift__image"></div>'), sf = $('<span class="kaching-bundles__free-gift__text"><!></span>'), of = $('<span class="kaching-bundles__free-gift__add-button"><!></span>'), cf = $('<div class="kaching-bundles__free-gift__full-price"><!></div>'), uf = $('<div class="kaching-bundles__multiple-gifts-selector kaching-bundles__free-gift"><!> <div class="kaching-bundles__free-gift__main"><!> <span class="kaching-bundles__free-gift__content"><!> <!></span></div> <!> <!></div>');
  function yu(n, t) {
    Ye(t, !0);
    const r = () => De(p, "$formatPrice", l), a = () => De(v, "$translate", l), [l, o] = ft();
    let u = k(t, "dealBlock", 7), c = k(t, "multipleGiftsSelector", 7), i = k(t, "selectedVariants", 7), s = k(t, "otherProducts", 7), d = k(t, "onConfirm", 7), h = Ae(!1);
    const f = g(() => (c().products || []).flatMap((M) => {
      const L = Nt(M.id), Y = s().find((q) => q.id === L);
      if (!Y || !Y.availableForSale) return [];
      const J = tr(Y);
      if (M.variantGIDs && M.variantGIDs.length > 0) {
        const q = M.variantGIDs.map(Nt);
        return { ...J, variants: J.variants.filter((A) => q.includes(A.id)) };
      }
      return J;
    })), p = sn(), v = It(), I = Dn(), y = g(() => Is({ dealBlock: u(), imageSize: c().imageSize })), x = g(() => {
      if (c().mediaImageGID) return De(I, "$getMediaImageUrl", l)(c().mediaImageGID);
    }), B = g(() => i().reduce((M, L) => M + L.quantity, 0)), D = g(() => e(B) >= c().maxQuantity), j = g(() => (function(M, L) {
      if (!L.length) return 0;
      let Y = L.reduce((J, q) => J + q.fullPrice * q.quantity, 0);
      return L.some((J) => J.variant.compareAtPrice) && M.useProductCompareAtPrice && (Y = Math.max(Y, L.reduce((J, q) => J + (q.variant.compareAtPrice || 0), 0))), Y;
    })(u(), i())), C = g(() => new Map((c().products || []).flatMap((M) => {
      const L = s().find((Y) => Y.id === Nt(M.id));
      return L ? [[L.id, L]] : [];
    }))), F = g(() => i().flatMap((M) => Array.from({ length: M.quantity }, () => M.product.title))), K = g(() => hn({ priceFormatter: r(), product: void 0, products: e(C), selectedProductTitles: e(F), totalFullPrice: e(j), totalDiscountedPrice: 0, quantity: e(B), unitQuantity: null })), O = g(() => e(D) ? e(K)(a()(c().textAfterSelection)) : e(K)(a()(c().textBeforeSelection)));
    var le = { get dealBlock() {
      return u();
    }, set dealBlock(M) {
      u(M), m();
    }, get multipleGiftsSelector() {
      return c();
    }, set multipleGiftsSelector(M) {
      c(M), m();
    }, get selectedVariants() {
      return i();
    }, set selectedVariants(M) {
      i(M), m();
    }, get otherProducts() {
      return s();
    }, set otherProducts(M) {
      s(M), m();
    }, get onConfirm() {
      return d();
    }, set onConfirm(M) {
      d(M), m();
    } }, ee = uf(), N = S(ee);
    {
      let M = g(() => {
        var L;
        return (L = e(O)) == null ? void 0 : L.replace(/<[^>]*>/g, "");
      });
      Rt(N, { element: "span", class: "kaching-bundles__multiple-gifts-selector__clickable-overlay", get "aria-label"() {
        return e(M);
      }, onclick: () => te(h, !0) });
    }
    var H = E(N, 2), Q = S(H), Z = (M) => {
      var L = af();
      be(() => {
        xe(L, "src", e(x)), xe(L, "height", c().imageSize || 0);
      }), b(M, L);
    }, z = (M) => {
      var L = ze(), Y = ve(L), J = (q) => {
        var A = lf();
        let re;
        be((ne) => re = Wt(A, "", re, ne), [() => {
          var ne;
          return { height: `${(ne = c().imageSize) != null ? ne : ""}px` };
        }]), b(q, A);
      };
      R(Y, (q) => {
        c().imageSize && q(J);
      }, !0), b(M, L);
    };
    R(Q, (M) => {
      e(x) ? M(Z) : M(z, !1);
    });
    var P = E(Q, 2), V = S(P), G = (M) => {
      var L = ze();
      et(ve(L), () => e(O), (Y) => {
        var J = sf();
        Te(S(J), () => e(O)), w(J), b(Y, J);
      }), b(M, L);
    };
    R(V, (M) => {
      e(O) && M(G);
    });
    var U = E(V, 2), ce = (M) => {
      var L = of();
      ku(S(L)), w(L), b(M, L);
    };
    R(U, (M) => {
      e(D) || M(ce);
    }), w(P), w(H);
    var W = E(H, 2), _ = (M) => {
      var L = ze();
      et(ve(L), () => e(j), (Y) => {
        var J = cf();
        Te(S(J), () => r()(e(j))), w(J), b(Y, J);
      }), b(M, L);
    };
    R(W, (M) => {
      c().showPrice && e(j) > 0 && M(_);
    }), mu(E(W, 2), { get dealBlock() {
      return u();
    }, get multipleGiftsSelector() {
      return c();
    }, get isOpen() {
      return e(h);
    }, get products() {
      return e(f);
    }, get initialSelectedGifts() {
      return i();
    }, get onConfirm() {
      return d();
    }, onClose: () => te(h, !1) }), w(ee), be(() => {
      xe(ee, "data-multiple-gifts-selector-id", c().id), Wt(ee, e(y));
    }), b(n, ee);
    var T = Ke(le);
    return o(), T;
  }
  Ne(yu, { dealBlock: {}, multipleGiftsSelector: {}, selectedVariants: {}, otherProducts: {}, onConfirm: {} }, [], [], !0);
  var df = $('<div class="kaching-bundles__free-gift__divider"></div>'), gf = $("<!> <!>", 1);
  function ei(n, t) {
    Ye(t, !0);
    let r = k(t, "dealBlock", 7), a = k(t, "multipleGiftsSelectors", 7), l = k(t, "sellingPlan", 7), o = k(t, "otherProducts", 7), u = k(t, "onChange", 7), c = Ae(at({})), i = g(() => a().filter((f) => !f.applyOnlyForSubscriptions || l()));
    function s(f, p) {
      const v = a().find((I) => I.id === f);
      v && (p.reduce((I, y) => I + y.quantity, 0) > v.maxQuantity || (e(c)[f] = p));
    }
    Ze(() => {
      const f = new Set(e(i).map((v) => v.id)), p = Object.entries(e(c)).filter(([v]) => f.has(v)).flatMap(([v, I]) => {
        const y = e(i).find((B) => B.id === v), x = (y == null ? void 0 : y.includeInCompareAt) === !0;
        return I.map((B) => ({ id: B.id, quantity: B.quantity, variant: B.variant, product: B.product, fullPrice: B.fullPrice, includeInCompareAt: x }));
      });
      u()(p);
    });
    var d = { get dealBlock() {
      return r();
    }, set dealBlock(f) {
      r(f), m();
    }, get multipleGiftsSelectors() {
      return a();
    }, set multipleGiftsSelectors(f) {
      a(f), m();
    }, get sellingPlan() {
      return l();
    }, set sellingPlan(f) {
      l(f), m();
    }, get otherProducts() {
      return o();
    }, set otherProducts(f) {
      o(f), m();
    }, get onChange() {
      return u();
    }, set onChange(f) {
      u(f), m();
    } }, h = ze();
    return Yt(ve(h), 19, () => e(i), (f) => f.id, (f, p, v) => {
      var I = gf(), y = ve(I);
      {
        let D = g(() => e(c)[e(p).id] || []);
        yu(y, { get dealBlock() {
          return r();
        }, get multipleGiftsSelector() {
          return e(p);
        }, get selectedVariants() {
          return e(D);
        }, onConfirm: s, get otherProducts() {
          return o();
        } });
      }
      var x = E(y, 2), B = (D) => {
        b(D, df());
      };
      R(x, (D) => {
        e(v) < e(i).length - 1 && D(B);
      }), b(f, I);
    }), b(n, h), Ke(d);
  }
  Ne(ei, { dealBlock: {}, multipleGiftsSelectors: {}, sellingPlan: {}, otherProducts: {}, onChange: {} }, [], [], !0);
  var hf = qn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function xu(n) {
    b(n, hf());
  }
  Ne(xu, {}, [], [], !0);
  var pf = $('<img alt="" class="kaching-bundles__deal-bar-progressive-gift__image"/>'), ff = $('<span class="kaching-bundles__deal-bar-progressive-gift__lock-icon kaching-bundles__deal-bar-progressive-gift__image"><!></span>'), bf = $('<img class="kaching-bundles__deal-bar-progressive-gift__image"/>'), vf = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), _f = $('<span class="kaching-bundles__deal-bar-progressive-gift__text"><!></span>'), mf = $('<span class="kaching-bundles__deal-bar-progressive-gift__label-crossed-out"><!></span>'), kf = $('<span class="kaching-bundles__deal-bar-progressive-gift__label"><!> <!></span>'), yf = $('<div><div class="kaching-bundles__deal-bar-progressive-gift__main"><!> <div class="kaching-bundles__deal-bar-progressive-gift__content"><!> <!></div></div> <!></div>');
  function wu(n, t) {
    Ye(t, !0);
    const r = () => De(y, "$config", o), a = () => De(p, "$translate", o), l = () => De(I, "$getMediaImageUrl", o), [o, u] = ft(), c = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), s = k(t, "product", 7), d = k(t, "selectedDealBarIndex", 7), h = k(t, "selected", 7), f = k(t, "onChange", 7), p = It(), v = sn(), I = Dn(), y = gn(), x = g(() => i().differentVariantsEnabled), B = g(() => {
      var _;
      return s() ? i().variantGIDs ? i().variantGIDs.map(Nt) : (_ = s()) == null ? void 0 : _.variants.map((T) => T.id) : null;
    }), D = g(() => {
      if (s()) return { ...s(), variants: s().variants.filter((_) => (r().preview || _.availableForSale) && (!e(B) || e(B).includes(_.id))) };
    });
    let j = Ae(at([]));
    const C = g(() => (function(_, T, M) {
      return _.length > 0 ? _ : T != null && T.availableForSale && T.variants.length > 0 ? Array.from({ length: M }, () => T.variants[0].id) : [];
    })(e(j), e(D), i().quantity)), F = g(() => s() && e(C).length > 0 ? e(C).map((_) => s().variants.find((T) => T.id === _)).filter((_) => _ !== void 0) : []), K = g(() => {
      var _;
      return hn({ priceFormatter: De(v, "$formatPrice", o), product: s(), totalFullPrice: ((_ = e(F)) == null ? void 0 : _.reduce((T, M) => {
        var L;
        return T + ((L = M == null ? void 0 : M.price) != null ? L : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: nr(e(F).map((T) => ({ variant: T, quantity: 1 }))) });
    }), O = g(() => e(K)(a()(i().title))), le = g(() => e(K)(a()(i().lockedTitle))), ee = g(() => e(K)(a()(i().label))), N = g(() => e(K)(a()(i().labelCrossedOut))), H = g(() => d() === null || i().unlockAtBar > d() + 1), Q = g(() => {
      var _, T, M;
      return i().giftType === "shipping" ? Ms : ((T = (_ = e(F)) == null ? void 0 : _[0]) == null ? void 0 : T.image) || ((M = s()) == null ? void 0 : M.image);
    }), Z = g(() => i().mediaImageGID ? l()(i().mediaImageGID) : e(Q)), z = g(() => c().dealBarStyle && l()(c().dealBarStyle.lockedMediaImageGID));
    Ze(() => {
      if (h()) if (s() && e(F) && !e(H)) {
        const _ = Object.values(e(F).reduce((T, M) => (T[M.id] ? T[M.id].quantity += 1 : T[M.id] = { variant: M, quantity: 1 }, T), {}));
        tn(() => f()({ product: s(), variants: _ }));
      } else tn(() => f()(void 0));
      else tn(() => f()(void 0));
    }), Jn(() => {
      i().productGID, te(j, [], !0);
    }), Ze(() => {
      e(H) && e(Z) && (new Image().src = e(Z));
    });
    const P = g(() => {
      var _;
      return i().giftType === "product" && !((_ = s()) != null && _.availableForSale);
    });
    var V = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(_) {
      c(_), m();
    }, get gift() {
      return i();
    }, set gift(_) {
      i(_), m();
    }, get product() {
      return s();
    }, set product(_) {
      s(_), m();
    }, get selectedDealBarIndex() {
      return d();
    }, set selectedDealBarIndex(_) {
      d(_), m();
    }, get selected() {
      return h();
    }, set selected(_) {
      h(_), m();
    }, get onChange() {
      return f();
    }, set onChange(_) {
      f(_), m();
    } }, G = ze(), U = ve(G), ce = (_) => {
      var T = ze(), M = ve(T), L = (Y) => {
        var J = yf();
        let q;
        var A = S(J), re = S(A), ne = (de) => {
          var Se = ze(), Oe = ve(Se), Qe = (X) => {
            var Ie = pf();
            be(() => xe(Ie, "src", e(z))), b(X, Ie);
          }, we = (X) => {
            var Ie = ff();
            xu(S(Ie)), w(Ie), b(X, Ie);
          };
          R(Oe, (X) => {
            e(z) ? X(Qe) : X(we, !1);
          }), b(de, Se);
        }, ue = (de) => {
          var Se = ze(), Oe = ve(Se), Qe = (we) => {
            var X = bf();
            be(() => {
              var Ie, ge;
              xe(X, "src", e(Z)), xe(X, "alt", (ge = (Ie = s()) == null ? void 0 : Ie.title) != null ? ge : "");
            }), b(we, X);
          };
          R(Oe, (we) => {
            e(Z) && we(Qe);
          }, !0), b(de, Se);
        };
        R(re, (de) => {
          e(H) ? de(ne) : de(ue, !1);
        });
        var ae = E(re, 2), fe = S(ae), Ce = (de) => {
          var Se = vf();
          Te(S(Se), () => e(le)), w(Se), b(de, Se);
        }, he = (de) => {
          var Se = ze(), Oe = ve(Se), Qe = (we) => {
            var X = _f();
            Te(S(X), () => e(O)), w(X), b(we, X);
          };
          R(Oe, (we) => {
            e(O) && we(Qe);
          }, !0), b(de, Se);
        };
        R(fe, (de) => {
          e(H) ? de(Ce) : de(he, !1);
        });
        var se = E(fe, 2), _e = (de) => {
          var Se = ze();
          Yt(ve(Se), 17, () => ({ length: e(x) ? i().quantity : 1 }), Tr, (Oe, Qe, we) => {
            var X = ze(), Ie = ve(X), ge = (Ve) => {
              {
                let me = g(() => e(x) ? we + 1 : void 0);
                zn(Ve, { get product() {
                  return e(D);
                }, get selectedVariantId() {
                  return e(C)[we];
                }, get number() {
                  return e(me);
                }, forceDropdown: !0, onChange: (Me) => (function(nt, ht) {
                  e(x) ? te(j, [...e(C).slice(0, ht), nt, ...e(C).slice(ht + 1)], !0) : te(j, Array.from({ length: i().quantity }, () => nt), !0);
                })(Me, we) });
              }
            };
            R(Ie, (Ve) => {
              e(C)[we] !== void 0 && Ve(ge);
            }), b(Oe, X);
          }), b(de, Se);
        };
        R(se, (de) => {
          h() && !e(H) && e(D) && e(D).variants.length > 1 && e(C).length > 0 && de(_e);
        }), w(ae), w(A);
        var Ge = E(A, 2), pe = (de) => {
          var Se = ze(), Oe = ve(Se), Qe = (we) => {
            var X = kf(), Ie = S(X), ge = (Me) => {
              var nt = ze();
              Te(ve(nt), () => e(ee)), b(Me, nt);
            };
            R(Ie, (Me) => {
              e(ee) && Me(ge);
            });
            var Ve = E(Ie, 2), me = (Me) => {
              var nt = mf();
              Te(S(nt), () => e(N)), w(nt), b(Me, nt);
            };
            R(Ve, (Me) => {
              e(N) && Me(me);
            }), w(X), b(we, X);
          };
          R(Oe, (we) => {
            e(H) && !c().showLockedGiftLabels || we(Qe);
          }), b(de, Se);
        };
        R(Ge, (de) => {
          (e(ee) || e(N)) && de(pe);
        }), w(J), be((de) => q = Tt(J, 1, "kaching-bundles__deal-bar-progressive-gift", null, q, de), [() => ({ "kaching-bundles__deal-bar-progressive-gift--locked": e(H), "kaching-bundles__deal-bar-progressive-gift--out-of-stock": r().preview && e(P) })]), b(Y, J);
      };
      R(M, (Y) => {
        var J;
        (s() && ((J = e(F)) != null && J.length) || i().giftType === "shipping") && Y(L);
      }), b(_, T);
    };
    R(U, (_) => {
      e(H) && c().hideLockedGifts || _(ce);
    }), b(n, G);
    var W = Ke(V);
    return u(), W;
  }
  Ne(wu, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, selected: {}, onChange: {} }, [], [], !0);
  var xf = $('<div class="kaching-bundles__deal-bar-progressive-gifts"></div>');
  function ti(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "progressiveGifts", 7), o = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), c = k(t, "otherProducts", 7), i = k(t, "selectedDealBarIndex", 7), s = k(t, "selected", 7), d = k(t, "onChange", 7), h = g(() => o().dealBars.findIndex((C) => C.id === u().id)), f = gn();
    let p = Ae(at({}));
    const v = g(() => {
      var C, F;
      return ((K) => K ? pn({ "kaching-deal-bar-progressive-gift-image-size": K.imageSize + "px", "kaching-deal-bar-progressive-gift-corner-radius": K.cornerRadius + "px", "kaching-deal-bar-progressive-gift-label-background-color": je(K.labelBackgroundColor), "kaching-deal-bar-progressive-gift-label-text-color": je(K.labelTextColor), "kaching-deal-bar-progressive-gift-label-text-size": K.labelTextSize + "px", "kaching-deal-bar-progressive-gift-text-color": je(K.textColor), "kaching-deal-bar-progressive-gift-selected-text-color": je(K.selectedTextColor), "kaching-deal-bar-progressive-gift-text-size": K.textSize + "px", "kaching-deal-bar-progressive-gift-locked-label-background-color": je(K.lockedLabelBackgroundColor), "kaching-deal-bar-progressive-gift-locked-label-text-color": je(K.lockedLabelTextColor), "kaching-deal-bar-progressive-gift-locked-label-text-size": K.lockedLabelTextSize + "px", "kaching-deal-bar-progressive-gift-locked-text-color": je(K.lockedTextColor), "kaching-deal-bar-progressive-gift-locked-text-size": K.lockedTextSize + "px", "kaching-deal-bar-progressive-gift-locked-icon-color": je(K.lockedIconColor) }) : "")((F = (C = o().progressiveGifts) == null ? void 0 : C.dealBarStyle) != null ? F : null);
    }), I = g(() => {
      var C, F, K;
      return (K = (F = (C = l()) == null ? void 0 : C.gifts) == null ? void 0 : F.filter((O) => O.unlockAtBar <= e(h) + 1).flatMap((O) => {
        const le = O.giftType === "product" && O.productGID ? c().find((N) => N.id === Nt(O.productGID)) : void 0;
        if (!De(f, "$config", r).preview && O.giftType === "product" && !(le != null && le.availableForSale)) return [];
        const ee = le && tr(le);
        return { gift: O, product: ee };
      })) != null ? K : [];
    });
    var y = { get progressiveGifts() {
      return l();
    }, set progressiveGifts(C) {
      l(C), m();
    }, get dealBlock() {
      return o();
    }, set dealBlock(C) {
      o(C), m();
    }, get dealBar() {
      return u();
    }, set dealBar(C) {
      u(C), m();
    }, get otherProducts() {
      return c();
    }, set otherProducts(C) {
      c(C), m();
    }, get selectedDealBarIndex() {
      return i();
    }, set selectedDealBarIndex(C) {
      i(C), m();
    }, get selected() {
      return s();
    }, set selected(C) {
      s(C), m();
    }, get onChange() {
      return d();
    }, set onChange(C) {
      d(C), m();
    } }, x = ze(), B = ve(x), D = (C) => {
      var F = xf();
      Yt(F, 21, () => e(I), ({ gift: K, product: O }) => K.id, (K, O) => {
        let le = () => e(O).gift;
        wu(K, { get selectedDealBarIndex() {
          return i();
        }, get selected() {
          return s();
        }, get gift() {
          return le();
        }, get product() {
          return e(O).product;
        }, get progressiveGifts() {
          return l();
        }, onChange: (ee) => (function(N, H) {
          if (H ? e(p)[N] = H : delete e(p)[N], !s()) return;
          const Q = Object.entries(e(p)).map(([Z, z]) => ({ id: Z, variants: z.variants, product: z.product }));
          d()(Q);
        })(le().id, ee) });
      }), w(F), be(() => Wt(F, e(v))), b(C, F);
    };
    R(B, (C) => {
      var F;
      o().progressiveGiftsEnabled && ((F = l()) == null ? void 0 : F.layout) === "deal-bar" && e(I).length > 0 && C(D);
    }), b(n, x);
    var j = Ke(y);
    return a(), j;
  }
  Ne(ti, { progressiveGifts: {}, dealBlock: {}, dealBar: {}, otherProducts: {}, selectedDealBarIndex: {}, selected: {}, onChange: {} }, [], [], !0);
  var wf = qn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Pu(n) {
    b(n, wf());
  }
  Ne(Pu, {}, [], [], !0);
  var Pf = qn('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Su(n) {
    b(n, Pf());
  }
  Ne(Su, {}, [], [], !0);
  var Sf = qn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" fill="currentColor"></circle></svg>');
  function Cu(n) {
    b(n, Sf());
  }
  Ne(Cu, {}, [], [], !0);
  var Cf = qn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Bu(n) {
    b(n, Cf());
  }
  Ne(Bu, {}, [], [], !0);
  var Bf = qn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2787 3.45332C11.5092 2.98638 11.6245 2.75291 11.7809 2.67831C11.917 2.61341 12.0752 2.61341 12.2113 2.67831C12.3677 2.75291 12.483 2.98638 12.7135 3.45332L14.9002 7.88328C14.9682 8.02113 15.0022 8.09006 15.0519 8.14358C15.096 8.19096 15.1488 8.22935 15.2074 8.25662C15.2736 8.28742 15.3497 8.29854 15.5018 8.32077L20.3931 9.03571C20.9082 9.11099 21.1657 9.14863 21.2849 9.27444C21.3886 9.38389 21.4373 9.5343 21.4176 9.68377C21.3949 9.85558 21.2085 10.0372 20.8356 10.4004L17.2975 13.8464C17.1873 13.9538 17.1321 14.0076 17.0965 14.0715C17.065 14.128 17.0448 14.1902 17.037 14.2545C17.0282 14.3271 17.0412 14.403 17.0672 14.5547L17.9021 19.4221C17.9901 19.9355 18.0341 20.1922 17.9514 20.3445C17.8794 20.477 17.7514 20.57 17.6032 20.5975C17.4327 20.6291 17.2022 20.5078 16.7412 20.2654L12.3685 17.9658C12.2322 17.8942 12.1641 17.8584 12.0923 17.8443C12.0288 17.8318 11.9634 17.8318 11.8999 17.8443C11.8281 17.8584 11.76 17.8942 11.6237 17.9658L7.25102 20.2654C6.79001 20.5078 6.55951 20.6291 6.38907 20.5975C6.24078 20.57 6.11282 20.477 6.04083 20.3445C5.95809 20.1922 6.00212 19.9355 6.09017 19.4221L6.92498 14.5547C6.95101 14.403 6.96402 14.3271 6.95521 14.2545C6.94742 14.1902 6.92721 14.128 6.8957 14.0715C6.86012 14.0076 6.80497 13.9538 6.69468 13.8464L3.15665 10.4004C2.78376 10.0372 2.59731 9.85558 2.57462 9.68377C2.55488 9.5343 2.60365 9.38389 2.70734 9.27444C2.82653 9.14863 3.08407 9.11099 3.59914 9.03571L8.4904 8.32077C8.64252 8.29854 8.71857 8.28742 8.78481 8.25662C8.84346 8.22935 8.89626 8.19096 8.94028 8.14358C8.99 8.09006 9.02402 8.02113 9.09207 7.88328L11.2787 3.45332Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Iu(n) {
    b(n, Bf());
  }
  Ne(Iu, {}, [], [], !0);
  var If = qn('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Mu(n) {
    b(n, If());
  }
  Ne(Mu, {}, [], [], !0);
  var Mf = $('<span class="kaching-bundles__highlights__icon"><img alt=""/></span>'), Df = $('<span class="kaching-bundles__highlights__icon"><!></span>'), zf = $('<div class="kaching-bundles__highlights__item"><!> <span class="kaching-bundles__highlights__text"><!></span></div>'), $f = $('<div class="kaching-bundles__highlights"></div>');
  function na(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "highlights", 7), o = k(t, "isSelected", 7), u = k(t, "replaceLiquid", 7), c = Dn(), i = { checkmark: Su, dot: Cu, arrow: Pu, star: Iu, heart: Bu, "thumbs-up": Mu }, s = It(), d = g(() => l().items.map((j) => De(s, "$translate", r)(j)).map((j) => u() ? u()(j) : j).filter((j) => j !== "")), h = g(() => ((j) => pn({ "kaching-highlights-icon-color": je(j.iconColor), "kaching-highlights-text-color": je(j.textColor), "kaching-highlights-icon-size": j.size + 2 + "px", "kaching-highlights-text-size": j.size + "px" }))(l())), f = g(() => {
      var j;
      return (j = l().iconType) != null ? j : "checkmark";
    }), p = g(() => i[e(f)]), v = g(() => {
      var j;
      return e(f) === "custom" ? De(c, "$getMediaImageUrl", r)((j = l().customIconGID) != null ? j : null) : void 0;
    });
    var I = { get highlights() {
      return l();
    }, set highlights(j) {
      l(j), m();
    }, get isSelected() {
      return o();
    }, set isSelected(j) {
      o(j), m();
    }, get replaceLiquid() {
      return u();
    }, set replaceLiquid(j) {
      u(j), m();
    } }, y = ze(), x = ve(y), B = (j) => {
      var C = $f();
      Yt(C, 21, () => e(d), Tr, (F, K) => {
        var O = zf(), le = S(O), ee = (Q) => {
          var Z = Mf(), z = S(Z);
          w(Z), be(() => xe(z, "src", e(v))), b(Q, Z);
        }, N = (Q) => {
          var Z = ze(), z = ve(Z), P = (V) => {
            var G = Df();
            (function(U, ce, W) {
              ut && lr();
              var _, T, M = U, L = null;
              function Y() {
                T && (Vr(T), T = null), T = L, L = null;
              }
              qr(() => {
                if (_ !== (_ = ce())) {
                  if (_) {
                    var J = M;
                    L = wn(() => W(J, _));
                  }
                  Y();
                }
              }, $a), ut && (M = Pt);
            })(S(G), () => e(p), (U, ce) => {
              ce(U, {});
            }), w(G), b(V, G);
          };
          R(z, (V) => {
            e(p) && V(P);
          }, !0), b(Q, Z);
        };
        R(le, (Q) => {
          e(f) === "custom" && e(v) ? Q(ee) : Q(N, !1);
        });
        var H = E(le, 2);
        Te(S(H), () => e(K)), w(H), w(O), b(F, O);
      }), w(C), be(() => Wt(C, e(h))), b(j, C);
    };
    R(x, (j) => {
      e(d).length > 0 && (!l().showOnlyWhenSelected || o()) && j(B);
    }), b(n, y);
    var D = Ke(I);
    return a(), D;
  }
  function Af(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Ne(na, { highlights: {}, isSelected: {}, replaceLiquid: {} }, [], [], !0);
  var qf = $('<img class="kaching-bundles__bar-image" alt=""/>'), Vf = $('<div class="kaching-bundles__bar-radio"></div>'), Tf = $('<span class="kaching-bundles__bar-title"><!></span>'), Gf = $('<span class="kaching-bundles__bar-label"><!></span>'), Of = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Ff = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Lf = $('<div class="kaching-bundles__bar-price"><!></div>'), Ef = $('<div class="kaching-bundles__bar-full-price"><!></div>'), jf = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Rf = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Nf = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Qf = $('<div class="kaching-bundles__bar-unit-price"><!> </div>'), Wf = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--primary"><!> <!></div> <div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!></div>', 1), Uf = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Hf = $("<!> <!>", 1), Zf = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), Jf = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Yf = $('<div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div>'), Kf = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), Xf = $('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function $s(n, t) {
    Ye(t, !0);
    const r = () => De(Q, "$config", u), a = () => De(N, "$formatPrice", u), l = () => De(ee, "$translate", u), o = () => De(H, "$getMediaImageUrl", u), [u, c] = ft();
    let i = k(t, "dealBlock", 7), s = k(t, "dealBar", 7), d = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), f = k(t, "complementaryProducts", 23, () => []), p = k(t, "customQuantity", 7, void 0), v = k(t, "currentVariantId", 7, void 0), I = k(t, "componentId", 7), y = k(t, "selected", 7, !1), x = k(t, "globalSellingPlan", 7, void 0), B = k(t, "selectedDealBarIndex", 7), D = k(t, "onProgressiveGiftsChange", 7), j = k(t, "onDealBarSelect", 7), C = k(t, "onDealBarDeselect", 7), F = k(t, "onVariantSelect", 7), K = k(t, "onVariantsChange", 7), O = k(t, "onPersonalisationsChange", 7), le = k(t, "personalisationInitialValues", 23, () => []);
    const ee = It(), N = sn(), H = Dn(), Q = gn();
    let Z = Ae(at([])), z = Ae(at([])), P = Ae(at([]));
    const V = g(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), G = g(() => {
      var ke, Je;
      return i() && ((Je = (ke = i().defaultVariantsV2) == null ? void 0 : ke.find((ie) => Nt(ie.productGID) === d().id && ie.dealBarId === s().id)) == null ? void 0 : Je.variantGIDs) || [];
    });
    let U = g(() => _(s())), ce = Ae(at(_(s())));
    Jn(() => {
      te(ce, e(U), !0);
    });
    const W = g(() => p() || e(ce));
    function _(ke) {
      return ke.dealBarType === "bxgy" ? ke.buyQuantity + ke.getQuantity : Number(ke.quantity);
    }
    let T = Ae(at([])), M = Ae(at([]));
    Ze(() => {
      const ke = (function(Je, ie, Fe) {
        let Be = [];
        for (let Ee = 0; Ee < Je; Ee++) {
          let We = ie[Ee];
          if (!We && Je > _(s()) && ie.filter((He) => He).length === _(s()) && (We = ie[ie.length - 1]), We) {
            const He = Nt(We);
            if (d().variants.find((At) => At.id == He)) {
              Be.push(He);
              continue;
            }
          }
          Fe && Be.push(Fe);
        }
        return Be;
      })(e(W), e(G), v());
      if (JSON.stringify(e(T)) !== JSON.stringify(ke)) {
        const Je = e(T).length === ke.length;
        te(T, ke, !0), e(M).length === 0 || Je ? te(M, ke, !0) : te(M, (function(ie, Fe) {
          const Be = ie[ie.length - 1];
          if (ie.length < Fe) {
            const Ee = Fe - ie.length;
            return [...ie, ...Array(Ee).fill(Be)];
          }
          return ie.slice(0, Fe);
        })(e(M), e(W)), !0);
      }
    });
    const L = g(() => Me(e(M))), Y = g(() => new Map(d().variants.map((ke) => [ke.id, ke]))), J = g(() => (function(ke, Je, ie) {
      return ie.map(({ variant: Be, quantity: Ee }) => {
        let We = Be.price;
        const He = ke.useProductCompareAtPrice || (Je.dealBarType === void 0 || Je.dealBarType === "quantity-break") && Je.discountType === "default";
        return Be.compareAtPrice && He && (We = Math.max(We, Be.compareAtPrice)), We * Ee;
      }).reduce((Be, Ee) => Be + Ee, 0);
    })(i(), s(), e(L))), q = g(() => e(J) + e(Z).reduce((ke, Je) => Je.includeInCompareAt ? ke + Je.fullPrice : ke, 0) + e(z).reduce((ke, Je) => Je.includeInCompareAt ? ke + Je.fullPrice * Je.quantity : ke, 0)), A = g(() => Math.ceil(e(J) / e(W)));
    let re = Ae(void 0);
    const ne = g(() => $i(d(), e(L).map((ke) => ke.variant))), ue = g(() => {
      var ke, Je;
      return (s().sellingPlanEnabled || i().subscriptionsEnabled && ((ke = i().subscriptions) == null ? void 0 : ke.layout) === "link" && ((Je = i().subscriptions) == null ? void 0 : Je.subscribeByDefault)) && (!i().subscriptionsEnabled || !!x());
    }), ae = g(() => e(ue) ? xs(s(), e(ne), e(re)) : void 0), fe = g(() => ws(e(ae), x(), e(ne), d().requiresSellingPlan)), Ce = g(() => i() && we(e(L), e(fe))), he = g(() => e(L)[0] && ks(e(L)[0].variant)), se = g(() => nr(e(L))), _e = g(() => e(se) ? e(Ce) / e(se) : null), Ge = g(() => hn({ priceFormatter: a(), product: d(), totalFullPrice: e(J), totalDiscountedPrice: e(Ce), quantity: e(W), dealBar: s(), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: e(se), sellingPlan: e(fe) })), pe = g(() => e(Ge)(l()(s().title))), de = g(() => e(Ge)(l()(s().subtitle))), Se = g(() => e(Ge)(l()(s().label))), Oe = g(() => e(Ge)(l()(s().badgeText))), Qe = g(() => o()(s().badgeImageGID));
    function we(ke, Je) {
      switch (s().dealBarType) {
        case void 0:
        case "quantity-break":
          return ru(s(), ke, r().currencyRate, e(V), Je, r().featureFlags.percentage_cents_rounding_workaround);
        case "bxgy":
          return au(s(), ke, r().currencyRate, e(V), Je);
      }
    }
    const X = g(() => Math.ceil(e(Ce) / e(W))), Ie = g(() => e(q) > e(Ce)), ge = g(() => e(W) && (function(ke) {
      return !ke.differentVariantsEnabled || d().variants.length === 1 ? !1 : ke.hideVariantPicker ? !0 : !(e(W) == 1 && !ke.showVariantsForSingleQuantity);
    })(i())), Ve = g(() => r().featureFlags.variant_images && new Set(d().variants.map((ke) => ke.image).filter((ke) => ke)).size > 1), me = g(() => `${s().id}_${I()}`);
    function Me(ke) {
      return ke.reduce((Je, ie) => {
        const Fe = Je.find(({ variant: Be }) => Be.id === ie);
        if (Fe) Fe.quantity += 1;
        else {
          const Be = d().variants.find((Ee) => Ee.id === ie);
          if (!Be) return Je;
          Je.push({ variant: Be, quantity: 1 });
        }
        return Je;
      }, []);
    }
    _a(() => {
      y() && j()({ dealBarId: s().id, dealBarQuantity: _(s()), preselected: !0 });
    });
    const nt = g(() => o()(s().mediaImageGID) || Ai);
    Ze(() => {
      y() && (e(M), e(P), e(Z), e(z), e(fe), tn(() => {
        (function() {
          if (!e(M).length) return;
          const ke = Me(e(M)), Je = e(Ce) + e(P).reduce((We, He) => We + He.discountedPrice, 0), ie = e(J) + e(P).reduce((We, He) => We + He.fullPrice, 0) + e(Z).reduce((We, He) => He.showPrice ? We + He.fullPrice : We, 0) + e(z).reduce((We, He) => We + He.fullPrice * He.quantity, 0), Fe = we(e(L), void 0), Be = d().sellingPlans.map((We) => ({ sellingPlanId: We.id, discountedPrice: we(e(L), We) })), Ee = { discountedPrice: Je, fullPrice: ie, discountedPricePerItem: e(X), fullPricePerItem: e(A), discountedPriceWithoutSellingPlan: Fe, discountedPricesForSellingPlans: Be };
          K()({ variants: ke, freeGifts: [...e(Z), ...e(z)], upsells: e(P), dealBarSellingPlan: e(ae), pricing: Ee });
        })();
      }));
    });
    const ht = g(() => s().showAsSoldOutEnabled && s().showAsSoldOut ? Vi(s().showAsSoldOut) : "");
    var kt = { get dealBlock() {
      return i();
    }, set dealBlock(ke) {
      i(ke), m();
    }, get dealBar() {
      return s();
    }, set dealBar(ke) {
      s(ke), m();
    }, get product() {
      return d();
    }, set product(ke) {
      d(ke), m();
    }, get otherProducts() {
      return h();
    }, set otherProducts(ke = []) {
      h(ke), m();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(ke = []) {
      f(ke), m();
    }, get customQuantity() {
      return p();
    }, set customQuantity(ke = void 0) {
      p(ke), m();
    }, get currentVariantId() {
      return v();
    }, set currentVariantId(ke = void 0) {
      v(ke), m();
    }, get componentId() {
      return I();
    }, set componentId(ke) {
      I(ke), m();
    }, get selected() {
      return y();
    }, set selected(ke = !1) {
      y(ke), m();
    }, get globalSellingPlan() {
      return x();
    }, set globalSellingPlan(ke = void 0) {
      x(ke), m();
    }, get selectedDealBarIndex() {
      return B();
    }, set selectedDealBarIndex(ke) {
      B(ke), m();
    }, get onProgressiveGiftsChange() {
      return D();
    }, set onProgressiveGiftsChange(ke) {
      D(ke), m();
    }, get onDealBarSelect() {
      return j();
    }, set onDealBarSelect(ke) {
      j(ke), m();
    }, get onDealBarDeselect() {
      return C();
    }, set onDealBarDeselect(ke) {
      C(ke), m();
    }, get onVariantSelect() {
      return F();
    }, set onVariantSelect(ke) {
      F(ke), m();
    }, get onVariantsChange() {
      return K();
    }, set onVariantsChange(ke) {
      K(ke), m();
    }, get onPersonalisationsChange() {
      return O();
    }, set onPersonalisationsChange(ke) {
      O(ke), m();
    }, get personalisationInitialValues() {
      return le();
    }, set personalisationInitialValues(ke = []) {
      le(ke), m();
    } }, Re = Xf();
    let lt;
    var dt = S(Re);
    Gr(dt), dt.__change = [Af, j, s, _];
    var St = E(dt, 2);
    let Ft;
    var Mt = S(St);
    {
      let ke = g(() => e(Oe) || void 0);
      Sa(Mt, { get style() {
        return s().badgeStyle;
      }, get text() {
        return e(ke);
      }, get imageUrl() {
        return e(Qe);
      }, get blockLayout() {
        return i().blockLayout;
      } });
    }
    var Et = E(Mt, 2), Lt = S(Et);
    Rt(Lt, { element: "div", class: "kaching-bundles__bar-main", onclick: function(ke) {
      y() && (ke.preventDefault(), ke.stopPropagation(), C()());
    }, children: (ke, Je) => {
      var ie = Zf(), Fe = ve(ie), Be = (ot) => {
        var qt = qf();
        be(() => xe(qt, "src", e(nt))), b(ot, qt);
      }, Ee = (ot) => {
        b(ot, Vf());
      };
      R(Fe, (ot) => {
        s().mediaImageGID ? ot(Be) : ot(Ee, !1);
      });
      var We = E(Fe, 2), He = S(We), At = S(He), jt = S(At);
      et(jt, () => e(pe), (ot) => {
        var qt = Tf();
        Te(S(qt), () => e(pe)), w(qt), b(ot, qt);
      });
      var pt = E(jt, 2), Ct = (ot) => {
        var qt = ze();
        et(ve(qt), () => e(Se), (xt) => {
          var Zt = Gf();
          Te(S(Zt), () => e(Se)), w(Zt), b(xt, Zt);
        }), b(ot, qt);
      };
      R(pt, (ot) => {
        e(Se) && ot(Ct);
      }), w(At);
      var Ht = E(At, 2), Bt = S(Ht), Kt = (ot) => {
        var qt = ze();
        et(ve(qt), () => e(de), (xt) => {
          var Zt = Of();
          Te(S(Zt), () => e(de)), w(Zt), b(xt, Zt);
        }), b(ot, qt);
      };
      R(Bt, (ot) => {
        e(de) && ot(Kt);
      });
      var ln = E(Bt, 2), Gn = (ot) => {
        {
          let qt = g(() => {
            var xt, Zt;
            return (Zt = (xt = e(L)) == null ? void 0 : xt[0]) == null ? void 0 : Zt.variant;
          });
          Er(ot, { get dealBlock() {
            return i();
          }, get variant() {
            return e(qt);
          } });
        }
      };
      R(ln, (ot) => {
        e(ge) || ot(Gn);
      }), w(Ht), w(He);
      var Cn = E(He, 2), Wn = S(Cn), vn = (ot) => {
        var qt = Rf(), xt = ve(qt), Zt = S(xt);
        et(Zt, () => e(X), ($e) => {
          wr($e, { get amount() {
            return e(X);
          }, get showPricesPerItem() {
            return i().showPricesPerItem;
          }, get unitLabel() {
            return i().unitLabel;
          } });
        });
        var _n = E(Zt, 2), oe = ($e) => {
          var ct = ze();
          et(ve(ct), () => e(A), (gt) => {
            var zt = Ff();
            Te(S(zt), () => a()(e(A))), w(zt), be((Jt) => xe(zt, "data-a11y-label", Jt), [() => l()("system.original_price")]), b(gt, zt);
          }), b($e, ct);
        };
        R(_n, ($e) => {
          e(Ie) && $e(oe);
        }), w(xt);
        var Le = E(xt, 2), qe = ($e) => {
          var ct = jf(), gt = S(ct);
          et(gt, () => e(Ce), (it) => {
            var _t = Lf();
            Te(S(_t), () => a()(e(Ce))), w(_t), be((Xt) => xe(_t, "data-a11y-label", Xt), [() => l()("system.price")]), b(it, _t);
          });
          var zt = E(gt, 2), Jt = (it) => {
            var _t = ze();
            et(ve(_t), () => e(q), (Xt) => {
              var mn = Ef();
              Te(S(mn), () => a()(e(q))), w(mn), be((Un) => xe(mn, "data-a11y-label", Un), [() => l()("system.original_price")]), b(Xt, mn);
            }), b(it, _t);
          };
          R(zt, (it) => {
            e(Ie) && it(Jt);
          }), w(ct), b($e, ct);
        };
        R(Le, ($e) => {
          e(W) > 1 && $e(qe);
        }), b(ot, qt);
      }, Dt = (ot) => {
        var qt = ze(), xt = ve(qt), Zt = (oe) => {
          var Le = Wf(), qe = ve(Le), $e = S(qe);
          et($e, () => e(Ce), (Jt) => {
            {
              let it = g(() => i().showPricesPerItem ? e(X) : e(Ce));
              wr(Jt, { get amount() {
                return e(it);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var ct = E($e, 2), gt = (Jt) => {
            var it = ze();
            et(ve(it), () => i().showPricesPerItem ? e(A) : e(q), (_t) => {
              var Xt = Nf();
              Te(S(Xt), () => a()(i().showPricesPerItem ? e(A) : e(q))), w(Xt), be((mn) => xe(Xt, "data-a11y-label", mn), [() => l()("system.original_price")]), b(_t, Xt);
            }), b(Jt, it);
          };
          R(ct, (Jt) => {
            e(Ie) && Jt(gt);
          }), w(qe);
          var zt = E(qe, 2);
          et(S(zt), () => e(_e), (Jt) => {
            var it = Qf(), _t = S(it);
            Te(_t, () => a()(e(_e), { preserveDecimals: !0 }));
            var Xt = E(_t);
            w(it), be(() => {
              var mn;
              return bt(Xt, ` /
                    ${(mn = e(he)) != null ? mn : ""}`);
            }), b(Jt, it);
          }), w(zt), b(oe, Le);
        }, _n = (oe) => {
          var Le = Hf(), qe = ve(Le);
          et(qe, () => e(Ce), (gt) => {
            {
              let zt = g(() => i().showPricesPerItem ? e(X) : e(Ce));
              wr(gt, { get amount() {
                return e(zt);
              }, get showPricesPerItem() {
                return i().showPricesPerItem;
              }, get unitLabel() {
                return i().unitLabel;
              } });
            }
          });
          var $e = E(qe, 2), ct = (gt) => {
            var zt = ze();
            et(ve(zt), () => i().showPricesPerItem ? e(A) : e(q), (Jt) => {
              var it = Uf();
              Te(S(it), () => a()(i().showPricesPerItem ? e(A) : e(q))), w(it), be((_t) => xe(it, "data-a11y-label", _t), [() => l()("system.original_price")]), b(Jt, it);
            }), b(gt, zt);
          };
          R($e, (gt) => {
            e(Ie) && gt(ct);
          }), b(oe, Le);
        };
        R(xt, (oe) => {
          e(_e) && !r().ignoreUnitPrice ? oe(Zt) : oe(_n, !1);
        }, !0), b(ot, qt);
      };
      R(Wn, (ot) => {
        i().showBothPrices ? ot(vn) : ot(Dt, !1);
      }), w(Cn), w(We), b(ke, ie);
    }, $$slots: { default: !0 } });
    var Pe = E(Lt, 2), tt = (ke) => {
      na(ke, { get highlights() {
        return s().highlights;
      }, get isSelected() {
        return y();
      }, get replaceLiquid() {
        return e(Ge);
      } });
    };
    R(Pe, (ke) => {
      s().highlights && ke(tt);
    });
    var rt = E(Pe, 2), st = (ke) => {
      var Je = Jf(), ie = S(Je);
      {
        let Fe = g(() => e(ae) || e(ne)[0]);
        ta(ie, { get sellingPlans() {
          return e(ne);
        }, get selectedSellingPlan() {
          return e(Fe);
        }, onChange: (Be) => {
          te(re, Be, !0);
        } });
      }
      w(Je), b(ke, Je);
    };
    R(rt, (ke) => {
      y() && e(ue) && !s().sellingPlanGid && e(ne).length > 1 && ke(st);
    });
    var Xe = E(rt, 2), Ue = (ke) => {
      var Je = Kf(), ie = S(Je);
      Fr(ie, { get product() {
        return d();
      } }), Yt(E(ie, 2), 17, () => ({ length: e(W) }), Tr, (Fe, Be, Ee) => {
        var We = Yf(), He = S(We);
        {
          let jt = g(() => e(W) > 1 ? Ee + 1 : void 0);
          zn(He, { get product() {
            return d();
          }, get selectedVariantId() {
            return e(M)[Ee];
          }, get showImage() {
            return e(Ve);
          }, get number() {
            return e(jt);
          }, onChange: (pt) => (function(Ct, Ht) {
            const Bt = [...e(M)];
            Bt[Ct] = Ht, te(M, Bt, !0), y() && F()({ variantId: Ht });
          })(Ee, pt), onOptionChange: (pt, Ct, Ht) => (function(Bt, Kt, ln, Gn) {
            if (i().disableVariantOptionSync || Bt !== 0) return;
            const Cn = Kt - 1, Wn = e(M).map((vn) => d().variants.find((Dt) => Dt.id === vn)).filter((vn) => vn != null).slice(1);
            Wn.length !== 0 && Wn.every((vn) => vn.options[Cn] === Gn) && te(M, e(M).map((vn) => {
              const Dt = d().variants.find((xt) => xt.id === vn);
              if (!Dt || Dt.options[Cn] !== Gn) return vn;
              const ot = [...Dt.options];
              ot[Cn] = ln;
              const qt = d().variants.find((xt) => xt.options.every((Zt, _n) => Zt === ot[_n]));
              return qt ? qt.id : vn;
            }), !0);
          })(Ee, pt, Ct, Ht) });
        }
        var At = E(He, 2);
        {
          let jt = g(() => e(Y).get(e(M)[Ee]));
          Er(At, { get dealBlock() {
            return i();
          }, get variant() {
            return e(jt);
          } });
        }
        w(We), b(Fe, We);
      }), w(Je), b(ke, Je);
    };
    R(Xe, (ke) => {
      e(ge) && ke(Ue);
    });
    var vt = E(Xe, 2), Qt = (ke) => {
      {
        let Je = g(() => _(s()));
        Ti(ke, { get value() {
          return e(ce);
        }, get min() {
          return e(Je);
        }, onChange: (ie) => te(ce, ie, !0) });
      }
    };
    R(vt, (ke) => {
      y() && s().dealBarType === "quantity-break" && s().quantitySelector && ke(Qt);
    });
    var an = E(vt, 2), Tn = (ke) => {
      Ca(ke, { get product() {
        return d();
      }, get selectedVariantIds() {
        return e(M);
      }, get productPersonalisation() {
        return s().productPersonalisation;
      }, get quantity() {
        return e(U);
      }, get addPersonalisationModal() {
        return i().addPersonalisationModal;
      }, get onPersonalisationsChange() {
        return O();
      }, get initialValues() {
        return le();
      } });
    };
    R(an, (ke) => {
      y() && s().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && ke(Tn);
    }), w(Et);
    var yt = E(Et, 2);
    {
      let ke = g(() => s().upsells || []);
      Ka(yt, { get dealBlock() {
        return i();
      }, get upsells() {
        return e(ke);
      }, get otherProducts() {
        return h();
      }, get complementaryProducts() {
        return f();
      }, get dealBarSelected() {
        return y();
      }, get dealSellingPlan() {
        return e(fe);
      }, onChange: (Je) => {
        te(P, Je, !0);
      } });
    }
    var Ut = E(yt, 2);
    ti(Ut, { get selectedDealBarIndex() {
      return B();
    }, get onChange() {
      return D();
    }, get dealBlock() {
      return i();
    }, get dealBar() {
      return s();
    }, get selected() {
      return y();
    }, get otherProducts() {
      return h();
    }, get progressiveGifts() {
      return i().progressiveGifts;
    } });
    var Gt = E(Ut, 2);
    {
      let ke = g(() => s().freeGifts || []);
      Ya(Gt, { get dealBlock() {
        return i();
      }, get freeGifts() {
        return e(ke);
      }, get freeGiftsSummary() {
        return s().freeGiftsSummary;
      }, get otherProducts() {
        return h();
      }, get dealBarSelected() {
        return y();
      }, get sellingPlan() {
        return e(fe);
      }, get mainProductVariantId() {
        return e(M)[0];
      }, onChange: (Je) => {
        te(Z, Je, !0);
      } });
    }
    var on = E(Gt, 2);
    {
      let ke = g(() => s().multipleGiftsSelectors || []);
      ei(on, { get dealBlock() {
        return i();
      }, get multipleGiftsSelectors() {
        return e(ke);
      }, get sellingPlan() {
        return e(fe);
      }, get otherProducts() {
        return h();
      }, onChange: (Je) => {
        te(z, Je, !0);
      } });
    }
    w(St);
    var xn = E(St, 2), cn = (ke) => {
      Xa(ke, { get showAsSoldOut() {
        return s().showAsSoldOut;
      }, get replaceLiquid() {
        return e(Ge);
      } });
    };
    R(xn, (ke) => {
      s().showAsSoldOutEnabled && s().showAsSoldOut && ke(cn);
    }), w(Re), be((ke, Je) => {
      var ie;
      lt = Tt(Re, 1, "kaching-bundles__bar", null, lt, ke), xe(Re, "data-deal-bar-id", s().id), Wt(Re, e(ht)), xe(dt, "name", `kaching-bundles-deal-${(ie = I()) != null ? ie : ""}`), ma(dt, s().id), xe(dt, "id", e(me)), Ci(dt, y()), dt.disabled = s().showAsSoldOutEnabled, xe(St, "for", e(me)), Ft = Tt(St, 1, "kaching-bundles__bar-container", null, Ft, Je);
    }, [() => ({ "kaching-bundles__bar--selected": y() }), () => ({ "kaching-bundles__bar-container--sold-out": s().showAsSoldOutEnabled })]), b(n, Re);
    var un = Ke(kt);
    return c(), un;
  }
  Sn(["change"]), Ne($s, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, selectedDealBarIndex: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var eb = $('<div class="kaching-bundles"><!></div>');
  function Du(n, t) {
    Ye(t, !0);
    const r = k(t, "config", 7), a = k(t, "dealBlock", 7), l = k(t, "dealBar", 7), o = k(t, "translations", 7), u = k(t, "product", 7), c = k(t, "mediaImages", 23, () => []), i = k(t, "currentVariantId", 7), s = k(t, "variantBadges", 23, () => []), d = Math.random().toString(16).slice(2), { setConfig: h } = Pa(r()), { setMoneyFormat: f } = Za(r().moneyFormat), { setTranslations: p } = wa(o()), { setMediaImages: v } = Mi(c()), { setSwatchSettings: I } = Di({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape }), { setVariantBadges: y } = bu(s());
    Ze(() => {
      h(r());
    }), Ze(() => {
      f(r().moneyFormat, !!a().showPricesWithoutDecimals);
    }), Ze(() => {
      p(o());
    }), Ze(() => {
      v(c());
    }), Ze(() => {
      I({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape });
    }), Ze(() => {
      y(s());
    });
    const x = g(() => a() && Oc(a()));
    var B = { get config() {
      return r();
    }, set config(F) {
      r(F), m();
    }, get dealBlock() {
      return a();
    }, set dealBlock(F) {
      a(F), m();
    }, get dealBar() {
      return l();
    }, set dealBar(F) {
      l(F), m();
    }, get translations() {
      return o();
    }, set translations(F) {
      o(F), m();
    }, get product() {
      return u();
    }, set product(F) {
      u(F), m();
    }, get mediaImages() {
      return c();
    }, set mediaImages(F = []) {
      c(F), m();
    }, get currentVariantId() {
      return i();
    }, set currentVariantId(F) {
      i(F), m();
    }, get variantBadges() {
      return s();
    }, set variantBadges(F = []) {
      s(F), m();
    } }, D = eb(), j = S(D), C = (F) => {
      $s(F, { selectedDealBarIndex: null, get dealBlock() {
        return a();
      }, get dealBar() {
        return l();
      }, get product() {
        return u();
      }, get currentVariantId() {
        return i();
      }, get componentId() {
        return d;
      }, selected: !0, onProgressiveGiftsChange: () => {
      }, onDealBarSelect: () => {
      }, onDealBarDeselect: () => {
      }, onVariantSelect: () => {
      }, onVariantsChange: () => {
      } });
    };
    return R(j, (F) => {
      l().dealBarType && l().dealBarType !== "quantity-break" && l().dealBarType !== "bxgy" || F(C);
    }), w(D), be(() => Wt(D, e(x))), b(n, D), Ke(B);
  }
  customElements.define("kaching-bundles-bar", Ne(Du, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, dealBar: { attribute: "deal-bar", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, variantBadges: { attribute: "variant-badges", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), fn(this, "component"), this.component = this;
    }
  }));
  var zu = !1;
  const $u = class extends Date {
    constructor(...n) {
      super(...n), wt(this, Tl), wt(this, ui, Ae(super.getTime())), wt(this, Wi, /* @__PURE__ */ new Map()), wt(this, Vl, Vt), zu || nn(this, Tl, to).call(this);
    }
  };
  ui = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), Vl = /* @__PURE__ */ new WeakMap(), Tl = /* @__PURE__ */ new WeakSet(), to = function() {
    zu = !0;
    var n = $u.prototype, t = Date.prototype, r = Object.getOwnPropertyNames(t);
    for (const a of r) (a.startsWith("get") || a.startsWith("to") || a === "valueOf") && (n[a] = function(...l) {
      if (l.length > 0) return e(ye(this, ui)), t[a].apply(this, l);
      var o = ye(this, Wi).get(a);
      if (o === void 0) {
        const u = Vt;
        In(ye(this, Vl)), o = g(() => (e(ye(this, ui)), t[a].apply(this, l))), ye(this, Wi).set(a, o), In(u);
      }
      return e(o);
    }), a.startsWith("set") && (n[a] = function(...l) {
      var o = t[a].apply(this, l);
      return te(ye(this, ui), t.getTime.call(this)), o;
    });
  };
  let As = $u;
  var tb = ["forEach", "isDisjointFrom", "isSubsetOf", "isSupersetOf"], nb = ["difference", "intersection", "symmetricDifference", "union"], Au = !1;
  const qs = class extends Set {
    constructor(n) {
      if (super(), wt(this, Ui), wt(this, di, /* @__PURE__ */ new Map()), wt(this, br, Ae(0)), wt(this, oa, Ae(0)), wt(this, Gl, dr || -1), n) {
        for (var t of n) super.add(t);
        ye(this, oa).v = super.size;
      }
      Au || nn(this, Ui, ro).call(this);
    }
    has(n) {
      var t = super.has(n), r = ye(this, di), a = r.get(n);
      if (a === void 0) {
        if (!t) return e(ye(this, br)), !1;
        a = nn(this, Ui, no).call(this, !0), r.set(n, a);
      }
      return e(a), t;
    }
    add(n) {
      return super.has(n) || (super.add(n), te(ye(this, oa), super.size), jn(ye(this, br))), this;
    }
    delete(n) {
      var t = super.delete(n), r = ye(this, di), a = r.get(n);
      return a !== void 0 && (r.delete(n), te(a, !1)), t && (te(ye(this, oa), super.size), jn(ye(this, br))), t;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ye(this, di);
        for (var t of n.values()) te(t, !1);
        n.clear(), te(ye(this, oa), 0), jn(ye(this, br));
      }
    }
    keys() {
      return this.values();
    }
    values() {
      return e(ye(this, br)), super.values();
    }
    entries() {
      return e(ye(this, br)), super.entries();
    }
    [Symbol.iterator]() {
      return this.keys();
    }
    get size() {
      return e(ye(this, oa));
    }
  };
  di = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap(), Gl = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakSet(), no = function(n) {
    return dr === ye(this, Gl) ? Ae(n) : Ar(n);
  }, ro = function() {
    Au = !0;
    var n = qs.prototype, t = Set.prototype;
    for (const r of tb) n[r] = function(...a) {
      return e(ye(this, br)), t[r].apply(this, a);
    };
    for (const r of nb) n[r] = function(...a) {
      e(ye(this, br));
      var l = t[r].apply(this, a);
      return new qs(l);
    };
  };
  let rb = qs;
  const qu = class extends Map {
    constructor(n) {
      if (super(), wt(this, Dr), wt(this, Ir, /* @__PURE__ */ new Map()), wt(this, Mr, Ae(0)), wt(this, Qr, Ae(0)), wt(this, Ol, dr || -1), n) {
        for (var [t, r] of n) super.set(t, r);
        ye(this, Qr).v = super.size;
      }
    }
    has(n) {
      var t = ye(this, Ir), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return e(ye(this, Mr)), !1;
        r = nn(this, Dr, gi).call(this, 0), t.set(n, r);
      }
      return e(r), !0;
    }
    forEach(n, t) {
      nn(this, Dr, Hi).call(this), super.forEach(n, t);
    }
    get(n) {
      var t = ye(this, Ir), r = t.get(n);
      if (r === void 0) {
        if (super.get(n) === void 0) return void e(ye(this, Mr));
        r = nn(this, Dr, gi).call(this, 0), t.set(n, r);
      }
      return e(r), super.get(n);
    }
    set(n, t) {
      var r, a = ye(this, Ir), l = a.get(n), o = super.get(n), u = super.set(n, t), c = ye(this, Mr);
      if (l === void 0) l = nn(this, Dr, gi).call(this, 0), a.set(n, l), te(ye(this, Qr), super.size), jn(c);
      else if (o !== t) {
        jn(l);
        var i = c.reactions === null ? null : new Set(c.reactions);
        (i === null || !((r = l.reactions) != null && r.every((s) => i.has(s)))) && jn(c);
      }
      return u;
    }
    delete(n) {
      var t = ye(this, Ir), r = t.get(n), a = super.delete(n);
      return r !== void 0 && (t.delete(n), te(ye(this, Qr), super.size), te(r, -1), jn(ye(this, Mr))), a;
    }
    clear() {
      if (super.size !== 0) {
        super.clear();
        var n = ye(this, Ir);
        for (var t of (te(ye(this, Qr), 0), n.values())) te(t, -1);
        jn(ye(this, Mr)), n.clear();
      }
    }
    keys() {
      return e(ye(this, Mr)), super.keys();
    }
    values() {
      return nn(this, Dr, Hi).call(this), super.values();
    }
    entries() {
      return nn(this, Dr, Hi).call(this), super.entries();
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    get size() {
      return e(ye(this, Qr)), super.size;
    }
  };
  Ir = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Ol = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakSet(), gi = function(n) {
    return dr === ye(this, Ol) ? Ae(n) : Ar(n);
  }, Hi = function() {
    e(ye(this, Mr));
    var n = ye(this, Ir);
    if (ye(this, Qr).v !== n.size) {
      for (var t of q0(qu.prototype, this, "keys").call(this)) if (!n.has(t)) {
        var r = nn(this, Dr, gi).call(this, 0);
        n.set(t, r);
      }
    }
    for ([, r] of ye(this, Ir)) e(r);
  };
  let ab = qu;
  var ib = $('<img alt="" class="kaching-bundles__bundle-products__image"/>'), lb = $('<div class="kaching-bundles__bundle-products__image-placeholder"></div>');
  function Vs(n, t) {
    Ye(t, !0);
    const r = k(t, "image", 7), a = k(t, "linkUrl", 7);
    var l = { get image() {
      return r();
    }, set image(s) {
      r(s), m();
    }, get linkUrl() {
      return a();
    }, set linkUrl(s) {
      a(s), m();
    } }, o = ze(), u = ve(o), c = (s) => {
      Vn(s, { get url() {
        return a();
      }, class: "kaching-bundles__bundle-products__link", children: (d, h) => {
        var f = ib();
        xe(f, "height", 50), xe(f, "width", 50), be(() => xe(f, "src", r())), b(d, f);
      }, $$slots: { default: !0 } });
    }, i = (s) => {
      b(s, lb());
    };
    return R(u, (s) => {
      r() ? s(c) : s(i, !1);
    }), b(n, o), Ke(l);
  }
  Ne(Vs, { image: {}, linkUrl: {} }, [], [], !0);
  var sb = $('<span class="kaching-bundles__bundle-products__quantity"> </span>'), ob = $('<div class="kaching-bundles__bundle-products__title"><!> <span> </span></div>');
  function Ts(n, t) {
    Ye(t, !0);
    const r = k(t, "title", 7), a = k(t, "quantity", 7), l = k(t, "linkUrl", 7);
    var o = { get title() {
      return r();
    }, set title(u) {
      r(u), m();
    }, get quantity() {
      return a();
    }, set quantity(u) {
      a(u), m();
    }, get linkUrl() {
      return l();
    }, set linkUrl(u) {
      l(u), m();
    } };
    return Vn(n, { get url() {
      return l();
    }, class: "kaching-bundles__bundle-products__link", children: (u, c) => {
      var i = ob(), s = S(i), d = (p) => {
        var v = sb(), I = S(v);
        w(v), be(() => {
          var y;
          return bt(I, `${(y = a()) != null ? y : ""}x`);
        }), b(p, v);
      };
      R(s, (p) => {
        a() > 1 && p(d);
      });
      var h = E(s, 2), f = S(h, !0);
      w(h), w(i), be(() => bt(f, r())), b(u, i);
    }, $$slots: { default: !0 } }), Ke(o);
  }
  Ne(Ts, { title: {}, quantity: {}, linkUrl: {} }, [], [], !0);
  var cb = $('<span class="kaching-bundles__bundle-products__price"><!></span>'), ub = $('<span class="kaching-bundles__bundle-products__full-price"><!></span>'), db = $('<span class="kaching-bundles__bundle-products__unit-price"><!> </span>'), gb = $("<div><!> <!> <!></div>");
  function Gs(n, t) {
    Ye(t, !0);
    const r = () => De(d, "$formatPrice", a), [a, l] = ft();
    let o = k(t, "discountedPrice", 7), u = k(t, "fullPrice", 7), c = k(t, "unitPrice", 7), i = k(t, "unitPriceReference", 7), s = k(t, "ignoreUnitPrice", 7);
    const d = sn(), h = g(() => !!c() && !!i() && !s());
    var f = { get discountedPrice() {
      return o();
    }, set discountedPrice(C) {
      o(C), m();
    }, get fullPrice() {
      return u();
    }, set fullPrice(C) {
      u(C), m();
    }, get unitPrice() {
      return c();
    }, set unitPrice(C) {
      c(C), m();
    }, get unitPriceReference() {
      return i();
    }, set unitPriceReference(C) {
      i(C), m();
    }, get ignoreUnitPrice() {
      return s();
    }, set ignoreUnitPrice(C) {
      s(C), m();
    } }, p = gb();
    let v;
    var I = S(p);
    et(I, o, (C) => {
      var F = cb();
      Te(S(F), () => r()(o())), w(F), b(C, F);
    });
    var y = E(I, 2), x = (C) => {
      var F = ze();
      et(ve(F), u, (K) => {
        var O = ub();
        Te(S(O), () => r()(u())), w(O), b(K, O);
      }), b(C, F);
    };
    R(y, (C) => {
      o() < u() && C(x);
    });
    var B = E(y, 2), D = (C) => {
      var F = ze();
      et(ve(F), c, (K) => {
        var O = db(), le = S(O);
        Te(le, () => r()(c(), { preserveDecimals: !0 }));
        var ee = E(le);
        w(O), be(() => {
          var N;
          return bt(ee, ` / ${(N = i()) != null ? N : ""}`);
        }), b(K, O);
      }), b(C, F);
    };
    R(B, (C) => {
      c() && i() && !s() && C(D);
    }), w(p), be((C) => v = Tt(p, 1, "kaching-bundles__bundle-products__pricing", null, v, C), [() => ({ "kaching-bundles__bundle-products__pricing--with-unit-price": e(h) })]), b(n, p);
    var j = Ke(f);
    return l(), j;
  }
  Ne(Gs, { discountedPrice: {}, fullPrice: {}, unitPrice: {}, unitPriceReference: {}, ignoreUnitPrice: {} }, [], [], !0);
  var hb = $("<!> <!> <!> <!> <!>", 1), pb = $("<!> <!>", 1), fb = $('<div class="kaching-bundles__bundle-products__wrapper"><!> <div class="kaching-bundles__bundle-products__content"><!> <!> <!></div></div> <!>', 1), bb = $('<div class="kaching-bundles__bundle-products__product"><!></div>');
  function Vu(n, t) {
    Ye(t, !0);
    const r = () => De(x, "$config", a), [a, l] = ft();
    let o = k(t, "dealBlock", 7), u = k(t, "layout", 7), c = k(t, "bundleProduct", 7), i = k(t, "product", 7), s = k(t, "dealBarSelected", 7), d = k(t, "currentVariantId", 7), h = k(t, "mainVariantId", 7), f = k(t, "priceRounding", 7), p = k(t, "sellingPlan", 7), v = k(t, "dealBar", 7), I = k(t, "sets", 7), y = k(t, "onChange", 7);
    const x = gn(), B = sn();
    let D = Ae(void 0);
    const j = g(() => !!c().variantGIDs), C = g(() => {
      var q, A;
      return e(j) && i() ? i().variants.filter((re) => c().variantGIDs.some((ne) => Nt(ne) === re.id)) : (A = (q = i()) == null ? void 0 : q.variants) != null ? A : [];
    }), F = g(() => {
      var q, A, re, ne;
      const ue = c().productGID === "default", ae = !!((q = o().defaultVariantsV2) != null && q.length);
      if (ue && ae && i()) {
        const fe = i().id, Ce = (ne = (re = (A = o().defaultVariantsV2) == null ? void 0 : A.find((he) => Nt(he.productGID) === fe && he.dealBarId === v().id)) == null ? void 0 : re.variantGIDs) == null ? void 0 : ne[0];
        if (Ce) return Nt(Ce);
      }
      if (c().defaultVariantGID) return Nt(c().defaultVariantGID);
    }), K = g(() => {
      const q = e(D) || e(F);
      return q !== void 0 && e(C).some(({ id: A }) => A === q) ? q : c().productGID === "default" && d() ? d() : c().variantGIDs ? c().variantGIDs.length === 0 ? void 0 : Nt(c().variantGIDs[0]) : e(C).length > 0 ? e(C)[0].id : void 0;
    }), O = g(() => {
      var q;
      return e(K) ? (q = i()) == null ? void 0 : q.variants.find((A) => A.id === e(K)) : void 0;
    }), le = g(() => i() && e(O) && Ln(i(), e(O), p())), ee = g(() => c().quantity * I()), N = g(() => Lr({ discountType: c().discountType, discountValue: c().discountValue, discountQuantity: c().quantity, variantQuantities: e(O) ? [{ variant: e(O), quantity: e(ee) }] : [], currencyRate: r().currencyRate, priceRounding: f(), sellingPlan: e(le) })), H = g(() => (function(q) {
      if (!q) return 0;
      let A = q.price;
      return o().useProductCompareAtPrice && q.compareAtPrice && (A = Math.max(A, q.compareAtPrice)), A * e(ee);
    })(e(O))), Q = g(() => e(O) ? ks(e(O)) : null), Z = g(() => e(O) ? nr([{ variant: e(O), quantity: e(ee) }]) : null), z = g(() => e(Z) ? e(N) / e(Z) : null), P = g(() => {
      var q;
      return (q = i()) != null && q.url && e(O) ? `${i().url}?variant=${e(O).id}` : void 0;
    }), V = g(() => {
      var q, A;
      return ((q = e(O)) == null ? void 0 : q.image) || ((A = i()) == null ? void 0 : A.image);
    }), G = g(() => s() && i() && e(C).length > 1 && e(K)), U = g(() => s() && c().productGID !== "default" ? e(P) : void 0), ce = g(() => i() ? c().title ? hn({ priceFormatter: De(B, "$formatPrice", a), product: i(), totalFullPrice: e(H), totalDiscountedPrice: e(N), quantity: e(ee), unitQuantity: e(Z) })(c().title) : i().title : "");
    function W(q) {
      te(D, q, !0);
    }
    let _;
    Ze(() => {
      e(O) && e(ee) && tn(() => {
        y()({ variant: e(O), product: i(), quantity: e(ee) });
      });
    }), Jn(() => {
      c().productGID, te(D, void 0), _ = void 0;
    }), Jn(() => {
      const q = c().productGID === "default";
      if (!(q || !o().disableVariantOptionSync)) return;
      const A = q ? d() : h();
      if (!A || !i() || A === _) return;
      const re = _;
      if (_ = A, !e(C).some((ae) => ae.id === A)) return;
      const ne = e(D) === void 0 && e(F) === void 0, ue = e(D) === re && re !== void 0;
      (ne || ue) && te(D, A, !0);
    });
    var T = { get dealBlock() {
      return o();
    }, set dealBlock(q) {
      o(q), m();
    }, get layout() {
      return u();
    }, set layout(q) {
      u(q), m();
    }, get bundleProduct() {
      return c();
    }, set bundleProduct(q) {
      c(q), m();
    }, get product() {
      return i();
    }, set product(q) {
      i(q), m();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(q) {
      s(q), m();
    }, get currentVariantId() {
      return d();
    }, set currentVariantId(q) {
      d(q), m();
    }, get mainVariantId() {
      return h();
    }, set mainVariantId(q) {
      h(q), m();
    }, get priceRounding() {
      return f();
    }, set priceRounding(q) {
      f(q), m();
    }, get sellingPlan() {
      return p();
    }, set sellingPlan(q) {
      p(q), m();
    }, get dealBar() {
      return v();
    }, set dealBar(q) {
      v(q), m();
    }, get sets() {
      return I();
    }, set sets(q) {
      I(q), m();
    }, get onChange() {
      return y();
    }, set onChange(q) {
      y(q), m();
    } }, M = ze(), L = ve(M), Y = (q) => {
      var A = bb(), re = S(A), ne = (ae) => {
        var fe = hb(), Ce = ve(fe);
        Vs(Ce, { get image() {
          return e(V);
        }, get linkUrl() {
          return e(U);
        } });
        var he = E(Ce, 2);
        Ts(he, { get title() {
          return e(ce);
        }, get quantity() {
          return e(ee);
        }, get linkUrl() {
          return e(U);
        } });
        var se = E(he, 2);
        Gs(se, { get discountedPrice() {
          return e(N);
        }, get fullPrice() {
          return e(H);
        }, get unitPrice() {
          return e(z);
        }, get unitPriceReference() {
          return e(Q);
        }, get ignoreUnitPrice() {
          return r().ignoreUnitPrice;
        } });
        var _e = E(se, 2);
        Er(_e, { get dealBlock() {
          return o();
        }, get variant() {
          return e(O);
        } });
        var Ge = E(_e, 2), pe = (de) => {
          {
            let Se = g(() => ({ ...i(), variants: e(C) })), Oe = g(() => e(K) || 0);
            zn(de, { get product() {
              return e(Se);
            }, get selectedVariantId() {
              return e(Oe);
            }, onChange: W });
          }
        };
        R(Ge, (de) => {
          e(G) && de(pe);
        }), b(ae, fe);
      }, ue = (ae) => {
        var fe = fb(), Ce = ve(fe), he = S(Ce);
        Vs(he, { get image() {
          return e(V);
        }, get linkUrl() {
          return e(U);
        } });
        var se = E(he, 2), _e = S(se);
        Ts(_e, { get title() {
          return e(ce);
        }, get quantity() {
          return e(ee);
        }, get linkUrl() {
          return e(U);
        } });
        var Ge = E(_e, 2);
        Er(Ge, { get dealBlock() {
          return o();
        }, get variant() {
          return e(O);
        } });
        var pe = E(Ge, 2), de = (Se) => {
          var Oe = pb(), Qe = ve(Oe);
          {
            let X = g(() => ({ ...i(), variants: e(C) }));
            Fr(Qe, { get product() {
              return e(X);
            } });
          }
          var we = E(Qe, 2);
          {
            let X = g(() => ({ ...i(), variants: e(C) })), Ie = g(() => e(K) || 0);
            zn(we, { get product() {
              return e(X);
            }, get selectedVariantId() {
              return e(Ie);
            }, onChange: W });
          }
          b(Se, Oe);
        };
        R(pe, (Se) => {
          e(G) && Se(de);
        }), w(se), w(Ce), Gs(E(Ce, 2), { get discountedPrice() {
          return e(N);
        }, get fullPrice() {
          return e(H);
        }, get unitPrice() {
          return e(z);
        }, get unitPriceReference() {
          return e(Q);
        }, get ignoreUnitPrice() {
          return r().ignoreUnitPrice;
        } }), b(ae, fe);
      };
      R(re, (ae) => {
        u() === "horizontal" ? ae(ne) : ae(ue, !1);
      }), w(A), b(q, A);
    };
    R(L, (q) => {
      i() && q(Y);
    }), b(n, M);
    var J = Ke(T);
    return l(), J;
  }
  Ne(Vu, { dealBlock: {}, layout: {}, bundleProduct: {}, product: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, priceRounding: {}, sellingPlan: {}, dealBar: {}, sets: {}, onChange: {} }, [], [], !0);
  var vb = qn('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="currentColor"></circle><path fill="#fff" d="M5 9h10v2H5z"></path><path fill="#fff" d="M11 5v10H9V5z"></path></svg>');
  function Tu(n) {
    b(n, vb());
  }
  function _b(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ne(Tu, {}, [], [], !0);
  var mb = $('<img class="kaching-bundles__bar-image" alt=""/>'), kb = $('<div class="kaching-bundles__bar-radio"></div>'), yb = $('<span class="kaching-bundles__bar-title"><!></span>'), xb = $('<span class="kaching-bundles__bar-label"><!></span>'), wb = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Pb = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Sb = $('<div class="kaching-bundles__bar-price"><!></div>'), Cb = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Bb = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Ib = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Mb = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Db = $("<!> <!>", 1), zb = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), $b = $('<div class="kaching-bundles__bundle-products__product kaching-bundles__bundle-products__product--placeholder"><span>Select product</span></div>'), Ab = $('<div class="kaching-bundles__bundle-products__divider"><div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__bundle-products__divider-icon"><!></div> <div class="kaching-bundles__bundle-products__divider-line">&ZeroWidthSpace;</div></div>'), qb = $("<!> <!>", 1), Vb = $("<div></div>"), Tb = $('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function Gu(n, t) {
    Ye(t, !0);
    const r = () => De(H, "$config", u), a = () => De(ee, "$formatPrice", u), l = () => De(le, "$translate", u), o = () => De(N, "$getMediaImageUrl", u), [u, c] = ft(), i = k(t, "dealBlock", 7), s = k(t, "dealBar", 7), d = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), f = k(t, "complementaryProducts", 23, () => []), p = k(t, "currentVariantId", 7), v = k(t, "componentId", 7), I = k(t, "selectedDealBarIndex", 7), y = k(t, "selected", 7, !1), x = k(t, "sellingPlan", 7), B = k(t, "onProgressiveGiftsChange", 7), D = k(t, "onDealBarSelect", 7), j = k(t, "onDealBarDeselect", 7), C = k(t, "onVariantSelect", 7), F = k(t, "onVariantsChange", 7), K = k(t, "onPersonalisationsChange", 7), O = k(t, "personalisationInitialValues", 23, () => []), le = It(), ee = sn(), N = Dn(), H = gn();
    let Q = Ae(at({})), Z = Ae(at([])), z = Ae(at([])), P = Ae(at([])), V = Ae(1);
    const G = g(() => `${s().id}_${v()}`), U = g(() => s().bundleProducts.filter(({ productGID: me }) => me)), ce = g(() => e(U).every((me) => Oe(me, d(), h()))), W = g(() => s().showProductsOnlyWhenSelected && !y()), _ = g(() => e(U).every((me) => {
      var Me;
      const nt = Oe(me, d(), h());
      return (Me = nt == null ? void 0 : nt.availableForSale) != null && Me;
    })), T = g(() => i() ? (function(me, Me) {
      return s().bundleProducts.map((ht) => {
        const kt = Me[ht.id];
        if (!kt) return 0;
        const { variant: Re, quantity: lt } = kt;
        let dt = Re.price;
        return Re.compareAtPrice && me.useProductCompareAtPrice && (dt = Math.max(dt, Re.compareAtPrice)), dt * lt;
      }).reduce((ht, kt) => ht + kt, 0);
    })(i(), e(Q)) : 0), M = g(() => e(T) + e(Z).reduce((me, Me) => Me.includeInCompareAt ? me + Me.fullPrice : me, 0) + e(z).reduce((me, Me) => Me.includeInCompareAt ? me + Me.fullPrice * Me.quantity : me, 0)), L = g(() => i().priceRounding ? { perItem: i().showPricesPerItem, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), Y = g(() => i() ? Ps(s(), e(Q), r().currencyRate, e(L), x()) : 0), J = g(() => e(U).reduce((me, Me) => me + Me.quantity, 0) * e(V)), q = g(() => Math.ceil(e(Y) / (e(J) || 1))), A = g(() => Math.ceil(e(T) / (e(J) || 1))), re = g(() => e(M) > e(Y)), ne = g(() => nr(Object.values(e(Q)))), ue = g(() => e(U).every((me) => me.productGID === "default" || Nt(me.productGID) === d().id)), ae = g(() => {
      var me;
      const Me = e(U)[0];
      if (Me) return (me = e(Q)[Me.id]) == null ? void 0 : me.variant.id;
    }), fe = g(() => i().showPricesPerItem && e(ue)), Ce = g(() => hn({ priceFormatter: a(), product: d(), dealBar: s(), totalFullPrice: e(T), totalDiscountedPrice: e(Y), quantity: 1, unitQuantity: e(ne), sellingPlan: x() })), he = g(() => e(Ce)(l()(s().title))), se = g(() => e(Ce)(l()(s().subtitle))), _e = g(() => e(Ce)(l()(s().label))), Ge = g(() => e(Ce)(l()(s().badgeText))), pe = g(() => o()(s().badgeImageGID)), de = g(() => o()(s().mediaImageGID) || Ai);
    function Se(me) {
      y() && (me.preventDefault(), me.stopPropagation(), j()());
    }
    function Oe(me, Me, nt) {
      if (me.productGID) return me.productGID === "default" ? Me : nt.find((ht) => ht.id === Nt(me.productGID));
    }
    _a(() => {
      y() && D()({ dealBarId: s().id, preselected: !0 });
    }), Ze(() => {
      y() && (Hr(e(Q)), Hr(e(P)), Hr(e(Z)), Hr(e(z)), x(), tn(() => {
        (function() {
          if (!s().bundleProducts.map(({ id: Re }) => Re).every((Re) => e(Q)[Re])) return;
          const me = [];
          for (const Re of s().bundleProducts) {
            const lt = e(Q)[Re.id];
            lt && me.push({ id: Re.id, variant: lt.variant, product: lt.product, quantity: lt.quantity });
          }
          if (me.length === 0) return;
          const Me = e(Y) + e(P).reduce((Re, lt) => Re + lt.discountedPrice, 0), nt = e(T) + e(P).reduce((Re, lt) => Re + lt.fullPrice, 0) + e(Z).reduce((Re, lt) => lt.showPrice ? Re + lt.fullPrice : Re, 0) + e(z).reduce((Re, lt) => Re + lt.fullPrice * lt.quantity, 0), ht = Ps(s(), e(Q), r().currencyRate, e(L), void 0), kt = d().sellingPlans.map((Re) => ({ sellingPlanId: Re.id, discountedPrice: Ps(s(), e(Q), r().currencyRate, e(L), Re) }));
          F()({ bundleProducts: me, freeGifts: [...e(Z), ...e(z)], upsells: e(P), pricing: { discountedPrice: Me, fullPrice: nt, discountedPricePerItem: e(Y), fullPricePerItem: e(T), discountedPriceWithoutSellingPlan: ht, discountedPricesForSellingPlans: kt } });
        })();
      }));
    });
    const Qe = g(() => s().showAsSoldOutEnabled && s().showAsSoldOut ? Vi(s().showAsSoldOut) : "");
    var we = { get dealBlock() {
      return i();
    }, set dealBlock(me) {
      i(me), m();
    }, get dealBar() {
      return s();
    }, set dealBar(me) {
      s(me), m();
    }, get product() {
      return d();
    }, set product(me) {
      d(me), m();
    }, get otherProducts() {
      return h();
    }, set otherProducts(me = []) {
      h(me), m();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(me = []) {
      f(me), m();
    }, get currentVariantId() {
      return p();
    }, set currentVariantId(me) {
      p(me), m();
    }, get componentId() {
      return v();
    }, set componentId(me) {
      v(me), m();
    }, get selectedDealBarIndex() {
      return I();
    }, set selectedDealBarIndex(me) {
      I(me), m();
    }, get selected() {
      return y();
    }, set selected(me = !1) {
      y(me), m();
    }, get sellingPlan() {
      return x();
    }, set sellingPlan(me) {
      x(me), m();
    }, get onProgressiveGiftsChange() {
      return B();
    }, set onProgressiveGiftsChange(me) {
      B(me), m();
    }, get onDealBarSelect() {
      return D();
    }, set onDealBarSelect(me) {
      D(me), m();
    }, get onDealBarDeselect() {
      return j();
    }, set onDealBarDeselect(me) {
      j(me), m();
    }, get onVariantSelect() {
      return C();
    }, set onVariantSelect(me) {
      C(me), m();
    }, get onVariantsChange() {
      return F();
    }, set onVariantsChange(me) {
      F(me), m();
    }, get onPersonalisationsChange() {
      return K();
    }, set onPersonalisationsChange(me) {
      K(me), m();
    }, get personalisationInitialValues() {
      return O();
    }, set personalisationInitialValues(me = []) {
      O(me), m();
    } }, X = ze(), Ie = ve(X), ge = (me) => {
      var Me = Tb();
      let nt;
      var ht = S(Me);
      Gr(ht), ht.__change = [_b, D, s];
      var kt = E(ht, 2);
      let Re;
      var lt = S(kt);
      {
        let yt = g(() => e(Ge) || void 0);
        Sa(lt, { get style() {
          return s().badgeStyle;
        }, get text() {
          return e(yt);
        }, get imageUrl() {
          return e(pe);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      }
      var dt = E(lt, 2), St = S(dt);
      Rt(St, { element: "div", class: "kaching-bundles__bar-main", onclick: Se, children: (yt, Ut) => {
        var Gt = zb(), on = ve(Gt), xn = (pt) => {
          var Ct = mb();
          be(() => xe(Ct, "src", e(de))), b(pt, Ct);
        }, cn = (pt) => {
          b(pt, kb());
        };
        R(on, (pt) => {
          s().mediaImageGID ? pt(xn) : pt(cn, !1);
        });
        var un = E(on, 2), ke = S(un), Je = S(ke), ie = S(Je);
        et(ie, () => e(he), (pt) => {
          var Ct = yb();
          Te(S(Ct), () => e(he)), w(Ct), b(pt, Ct);
        });
        var Fe = E(ie, 2), Be = (pt) => {
          var Ct = ze();
          et(ve(Ct), () => e(_e), (Ht) => {
            var Bt = xb();
            Te(S(Bt), () => e(_e)), w(Bt), b(Ht, Bt);
          }), b(pt, Ct);
        };
        R(Fe, (pt) => {
          e(_e) && pt(Be);
        }), w(Je);
        var Ee = E(Je, 2), We = (pt) => {
          var Ct = ze();
          et(ve(Ct), () => e(se), (Ht) => {
            var Bt = wb();
            Te(S(Bt), () => e(se)), w(Bt), b(Ht, Bt);
          }), b(pt, Ct);
        };
        R(Ee, (pt) => {
          e(se) && pt(We);
        }), w(ke);
        var He = E(ke, 2), At = S(He), jt = (pt) => {
          var Ct = ze(), Ht = ve(Ct), Bt = (ln) => {
            var Gn = Ib(), Cn = ve(Gn), Wn = S(Cn);
            et(Wn, () => e(q), (xt) => {
              wr(xt, { get amount() {
                return e(q);
              }, get showPricesPerItem() {
                return e(fe);
              }, get unitLabel() {
                return i().unitLabel;
              } });
            });
            var vn = E(Wn, 2), Dt = (xt) => {
              var Zt = ze();
              et(ve(Zt), () => e(A), (_n) => {
                var oe = Pb();
                Te(S(oe), () => a()(e(A))), w(oe), be((Le) => xe(oe, "data-a11y-label", Le), [() => l()("system.original_price")]), b(_n, oe);
              }), b(xt, Zt);
            };
            R(vn, (xt) => {
              e(re) && xt(Dt);
            }), w(Cn);
            var ot = E(Cn, 2), qt = (xt) => {
              var Zt = Bb(), _n = S(Zt);
              et(_n, () => e(Y), (qe) => {
                var $e = Sb();
                Te(S($e), () => a()(e(Y))), w($e), be((ct) => xe($e, "data-a11y-label", ct), [() => l()("system.price")]), b(qe, $e);
              });
              var oe = E(_n, 2), Le = (qe) => {
                var $e = ze();
                et(ve($e), () => e(M), (ct) => {
                  var gt = Cb();
                  Te(S(gt), () => a()(e(M))), w(gt), be((zt) => xe(gt, "data-a11y-label", zt), [() => l()("system.original_price")]), b(ct, gt);
                }), b(qe, $e);
              };
              R(oe, (qe) => {
                e(re) && qe(Le);
              }), w(Zt), b(xt, Zt);
            };
            R(ot, (xt) => {
              e(J) > 1 && xt(qt);
            }), b(ln, Gn);
          }, Kt = (ln) => {
            var Gn = Db(), Cn = ve(Gn);
            et(Cn, () => e(Y), (Dt) => {
              {
                let ot = g(() => e(fe) ? e(q) : e(Y));
                wr(Dt, { get amount() {
                  return e(ot);
                }, get showPricesPerItem() {
                  return e(fe);
                }, get unitLabel() {
                  return i().unitLabel;
                } });
              }
            });
            var Wn = E(Cn, 2), vn = (Dt) => {
              var ot = ze();
              et(ve(ot), () => e(fe) ? e(A) : e(M), (qt) => {
                var xt = Mb();
                Te(S(xt), () => a()(e(fe) ? e(A) : e(M))), w(xt), be((Zt) => xe(xt, "data-a11y-label", Zt), [() => l()("system.original_price")]), b(qt, xt);
              }), b(Dt, ot);
            };
            R(Wn, (Dt) => {
              e(re) && Dt(vn);
            }), b(ln, Gn);
          };
          R(Ht, (ln) => {
            i().showBothPrices && e(ue) ? ln(Bt) : ln(Kt, !1);
          }), b(pt, Ct);
        };
        R(At, (pt) => {
          e(ce) && pt(jt);
        }), w(He), w(un), b(yt, Gt);
      }, $$slots: { default: !0 } });
      var Ft = E(St, 2), Mt = (yt) => {
        na(yt, { get highlights() {
          return s().highlights;
        }, get isSelected() {
          return y();
        }, get replaceLiquid() {
          return e(Ce);
        } });
      };
      R(Ft, (yt) => {
        s().highlights && yt(Mt);
      });
      var Et = E(Ft, 2), Lt = (yt) => {
        Ti(yt, { get value() {
          return e(V);
        }, onChange: (Ut) => {
          te(V, Ut, !0);
        } });
      };
      R(Et, (yt) => {
        y() && s().quantitySelector && yt(Lt);
      });
      var Pe = E(Et, 2), tt = (yt) => {
        var Ut = Vb();
        let Gt;
        Yt(Ut, 23, () => s().bundleProducts, (on) => on.id, (on, xn, cn) => {
          var un = qb(), ke = ve(un), Je = (Ee) => {
            {
              let We = g(() => Oe(e(xn), d(), h())), He = g(() => s().layout || "horizontal");
              Vu(Ee, { get dealBar() {
                return s();
              }, get bundleProduct() {
                return e(xn);
              }, get product() {
                return e(We);
              }, get dealBlock() {
                return i();
              }, get layout() {
                return e(He);
              }, get dealBarSelected() {
                return y();
              }, get priceRounding() {
                return e(L);
              }, get currentVariantId() {
                return p();
              }, get mainVariantId() {
                return e(ae);
              }, get sellingPlan() {
                return x();
              }, get sets() {
                return e(V);
              }, onChange: (At) => (function(jt, pt) {
                const { variant: Ct, product: Ht, quantity: Bt } = pt;
                e(Q)[jt] = { variant: Ct, product: Ht, quantity: Bt }, y() && s().bundleProducts.map(({ id: Kt }) => Kt).every((Kt) => e(Q)[Kt]) && jt === s().bundleProducts[0].id && C()({ variantId: Ct.id });
              })(e(xn).id, At) });
            }
          }, ie = (Ee) => {
            var We = ze(), He = ve(We), At = (jt) => {
              b(jt, $b());
            };
            R(He, (jt) => {
              r().preview && jt(At);
            }, !0), b(Ee, We);
          };
          R(ke, (Ee) => {
            e(xn).productGID ? Ee(Je) : Ee(ie, !1);
          });
          var Fe = E(ke, 2), Be = (Ee) => {
            var We = Ab(), He = E(S(We), 2);
            Tu(S(He)), w(He), Ur(2), w(We), b(Ee, We);
          };
          R(Fe, (Ee) => {
            e(cn) < s().bundleProducts.length - 1 && Ee(Be);
          }), b(on, un);
        }), w(Ut), be((on) => Gt = Tt(Ut, 1, "kaching-bundles__bundle-products", null, Gt, on), [() => ({ "kaching-bundles__bundle-products--vertical": s().layout === "vertical", "kaching-bundles__bundle-products--hidden": e(W) })]), b(yt, Ut);
      };
      R(Pe, (yt) => {
        e(ce) && yt(tt);
      });
      var rt = E(Pe, 2), st = (yt) => {
        {
          let Ut = g(() => e(ae) ? [e(ae)] : []);
          Ca(yt, { get product() {
            return d();
          }, get productPersonalisation() {
            return s().productPersonalisation;
          }, get selectedVariantIds() {
            return e(Ut);
          }, get quantity() {
            return e(V);
          }, get addPersonalisationModal() {
            return i().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return K();
          }, get initialValues() {
            return O();
          } });
        }
      };
      R(rt, (yt) => {
        y() && s().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && yt(st);
      }), w(dt);
      var Xe = E(dt, 2);
      {
        let yt = g(() => s().upsells || []);
        Ka(Xe, { get dealBlock() {
          return i();
        }, get upsells() {
          return e(yt);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return f();
        }, get dealBarSelected() {
          return y();
        }, get dealSellingPlan() {
          return x();
        }, get sets() {
          return e(V);
        }, onChange: (Ut) => {
          te(P, Ut, !0);
        } });
      }
      var Ue = E(Xe, 2);
      ti(Ue, { get selectedDealBarIndex() {
        return I();
      }, get onChange() {
        return B();
      }, get dealBlock() {
        return i();
      }, get dealBar() {
        return s();
      }, get otherProducts() {
        return h();
      }, get selected() {
        return y();
      }, get progressiveGifts() {
        return i().progressiveGifts;
      } });
      var vt = E(Ue, 2);
      {
        let yt = g(() => s().freeGifts || []);
        Ya(vt, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(yt);
        }, get freeGiftsSummary() {
          return s().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return y();
        }, get sellingPlan() {
          return x();
        }, get sets() {
          return e(V);
        }, onChange: (Ut) => {
          te(Z, Ut, !0);
        } });
      }
      var Qt = E(vt, 2);
      {
        let yt = g(() => s().multipleGiftsSelectors || []);
        ei(Qt, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(yt);
        }, get sellingPlan() {
          return x();
        }, get otherProducts() {
          return h();
        }, onChange: (Ut) => {
          te(z, Ut, !0);
        } });
      }
      w(kt);
      var an = E(kt, 2), Tn = (yt) => {
        Xa(yt, { get showAsSoldOut() {
          return s().showAsSoldOut;
        }, get replaceLiquid() {
          return e(Ce);
        } });
      };
      R(an, (yt) => {
        s().showAsSoldOutEnabled && s().showAsSoldOut && yt(Tn);
      }), w(Me), be((yt, Ut) => {
        var Gt;
        nt = Tt(Me, 1, "kaching-bundles__bar", null, nt, yt), xe(Me, "data-deal-bar-id", s().id), Wt(Me, e(Qe)), xe(ht, "name", `kaching-bundles-deal-${(Gt = v()) != null ? Gt : ""}`), ma(ht, s().id), xe(ht, "id", e(G)), Ci(ht, y()), ht.disabled = s().showAsSoldOutEnabled, xe(kt, "for", e(G)), Re = Tt(kt, 1, "kaching-bundles__bar-container", null, Re, Ut);
      }, [() => ({ "kaching-bundles__bar--selected": y(), "kaching-bundles__bar--disabled": !e(_) && r().preview }), () => ({ "kaching-bundles__bar-container--sold-out": s().showAsSoldOutEnabled })]), b(me, Me);
    };
    R(Ie, (me) => {
      (e(_) || r().preview) && me(ge);
    }), b(n, X);
    var Ve = Ke(we);
    return c(), Ve;
  }
  Sn(["change"]), Ne(Gu, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var Gb = $('<img class="kaching-bundles__mix-and-match-choose-product__product-image" alt=""/>'), Ob = $('<span class="kaching-bundles__mix-and-match-choose-product__product-title"> </span>'), Fb = $('<span class="kaching-bundles__mix-and-match-choose-product__subtitle"><!></span>'), Lb = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price"><!></div>'), Eb = $('<div class="kaching-bundles__mix-and-match-choose-product__product-compare-at-price"><!></div>'), jb = $('<div class="kaching-bundles__mix-and-match-choose-product__product-price-container"><!> <!></div>'), Rb = $("<div><!> <!></div>"), Nb = $('<div class="kaching-bundles__mix-and-match-choose-product__product"><div class="kaching-bundles__mix-and-match-choose-product__product-container"><!> <div class="kaching-bundles__mix-and-match-choose-product__product-content"><!> <!> <!> <!></div></div> <!></div>');
  function Ou(n, t) {
    var r;
    Ye(t, !0);
    const a = () => De(I, "$config", u), l = () => De(v, "$formatPrice", u), o = () => De(p, "$translate", u), [u, c] = ft(), i = k(t, "product", 7), s = k(t, "dealBlock", 7), d = k(t, "dealBar", 7), h = k(t, "modal", 7), f = k(t, "onChoose", 7), p = It(), v = sn(), I = gn();
    let y = Ae(at(((r = i().variants.find((M) => M.availableForSale)) == null ? void 0 : r.id) || i().variants[0].id));
    const x = g(() => i().variants.find((M) => M.id === e(y)) || i().variants[0]), B = g(() => s().priceRounding ? { perItem: !1, precision: s().priceRoundingPrecision, v2: a().featureFlags.price_rounding_v2 || !1 } : void 0), D = g(() => d().discountType === "percentage" ? Lr({ discountType: d().discountType, discountValue: d().discountValue, discountQuantity: 1, variantQuantities: [{ variant: e(x), quantity: 1 }], currencyRate: a().currencyRate, priceRounding: e(B) }) : e(x).price), j = g(() => s().useProductCompareAtPrice && e(x).compareAtPrice ? Math.max(e(x).price, e(x).compareAtPrice) : e(x).price), C = g(() => i().url ? `${i().url}?variant=${e(y)}` : void 0), F = g(() => hn({ priceFormatter: l(), product: i(), totalFullPrice: e(j), totalDiscountedPrice: e(D), quantity: 1, unitQuantity: null })), K = g(() => e(F)(o()(h().subtitle || ""))), O = g(() => h().buttonText);
    function le(M) {
      te(y, M, !0);
    }
    var ee = { get product() {
      return i();
    }, set product(M) {
      i(M), m();
    }, get dealBlock() {
      return s();
    }, set dealBlock(M) {
      s(M), m();
    }, get dealBar() {
      return d();
    }, set dealBar(M) {
      d(M), m();
    }, get modal() {
      return h();
    }, set modal(M) {
      h(M), m();
    }, get onChoose() {
      return f();
    }, set onChoose(M) {
      f(M), m();
    } }, N = Nb(), H = S(N), Q = S(H), Z = (M) => {
      Vn(M, { get url() {
        return e(C);
      }, class: "kaching-bundles__mix-and-match-choose-product__product-image-link", children: (L, Y) => {
        var J = Gb();
        xe(J, "width", 100), xe(J, "height", 100), be(() => xe(J, "src", i().image)), b(L, J);
      }, $$slots: { default: !0 } });
    };
    R(Q, (M) => {
      i().image && M(Z);
    });
    var z = E(Q, 2), P = S(z);
    Vn(P, { get url() {
      return e(C);
    }, class: "kaching-bundles__mix-and-match-choose-product__product-link", children: (M, L) => {
      var Y = Ob(), J = S(Y, !0);
      w(Y), be(() => bt(J, i().title)), b(M, Y);
    }, $$slots: { default: !0 } });
    var V = E(P, 2), G = (M) => {
      var L = Fb();
      Te(S(L), () => e(K)), w(L), b(M, L);
    };
    R(V, (M) => {
      e(K) && M(G);
    });
    var U = E(V, 2), ce = (M) => {
      var L = jb(), Y = S(L);
      et(Y, () => e(D), (A) => {
        var re = Lb();
        Te(S(re), () => l()(e(D))), w(re), b(A, re);
      });
      var J = E(Y, 2), q = (A) => {
        var re = ze();
        et(ve(re), () => e(j), (ne) => {
          var ue = Eb();
          Te(S(ue), () => l()(e(j))), w(ue), b(ne, ue);
        }), b(A, re);
      };
      R(J, (A) => {
        e(j) && e(j) > e(D) && A(q);
      }), w(L), b(M, L);
    };
    R(U, (M) => {
      d().discountType !== "specific" && M(ce);
    });
    var W = E(U, 2), _ = (M) => {
      var L = Rb(), Y = S(L);
      Fr(Y, { get product() {
        return i();
      }, class: "kaching-bundles__mix-and-match-choose-product__product-option-names" }), zn(E(Y, 2), { get product() {
        return i();
      }, get selectedVariantId() {
        return e(y);
      }, onChange: le }), w(L), b(M, L);
    };
    R(W, (M) => {
      i().variants.length > 1 && M(_);
    }), w(z), w(H), Rt(E(H, 2), { element: "span", class: "kaching-bundles__mix-and-match-choose-product__product-button", onclick: function() {
      f()({ product: i(), variant: e(x) });
    }, children: (M, L) => {
      Ur();
      var Y = Mn();
      be((J) => bt(Y, J), [() => o()(e(O))]), b(M, Y);
    }, $$slots: { default: !0 } }), w(N), b(n, N);
    var T = Ke(ee);
    return c(), T;
  }
  Ne(Ou, { product: {}, dealBlock: {}, dealBar: {}, modal: {}, onChoose: {} }, [], [], !0);
  const Qb = { red: 0, green: 0, blue: 0, alpha: 0.5 }, Wb = { buttonSize: 16, textSize: 14, overlayColor: { red: 0, green: 0, blue: 0, alpha: 0.5 }, priceColor: { red: 0, green: 0, blue: 0, alpha: 1 }, compareAtPriceColor: { red: 128, green: 128, blue: 128, alpha: 1 }, textColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonColor: { red: 0, green: 0, blue: 0, alpha: 1 }, buttonTextColor: { red: 255, green: 255, blue: 255, alpha: 1 }, productPhotoSize: 100, heading: "Select product", buttonText: "Choose" };
  var Ub = $('<img alt="Close"/>'), Hb = $('<div class="kaching-bundles__mix-and-match-choose-product__empty-state"> </div>'), Zb = $('<div class="kaching-bundles__mix-and-match-choose-product"><div class="kaching-bundles__mix-and-match-choose-product__header"><h2 class="kaching-bundles__mix-and-match-choose-product__heading"><!></h2> <!></div> <div class="kaching-bundles__mix-and-match-choose-product__products"><!></div></div>');
  function Os(n, t) {
    Ye(t, !0);
    const r = () => De(d, "$translate", a), [a, l] = ft(), o = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), c = k(t, "products", 23, () => []), i = k(t, "onChoose", 7), s = k(t, "onClose", 7), d = It(), h = g(() => {
      var ee;
      return (ee = o().mixAndMatchChooseProductModal) != null ? ee : Wb;
    }), f = g(() => ((ee) => pn({ "kaching-mix-and-match-choose-product-button-size": ee.buttonSize + "px", "kaching-mix-and-match-choose-product-text-size": ee.textSize + "px", "kaching-mix-and-match-choose-product-price-color": je(ee.priceColor), "kaching-mix-and-match-choose-product-compare-at-price-color": je(ee.compareAtPriceColor), "kaching-mix-and-match-choose-product-text-color": je(ee.textColor), "kaching-mix-and-match-choose-product-button-color": je(ee.buttonColor), "kaching-mix-and-match-choose-product-button-text-color": je(ee.buttonTextColor), "kaching-mix-and-match-choose-product-photo-size": ee.productPhotoSize + "px" }))(e(h)));
    var p = { get dealBlock() {
      return o();
    }, set dealBlock(ee) {
      o(ee), m();
    }, get dealBar() {
      return u();
    }, set dealBar(ee) {
      u(ee), m();
    }, get products() {
      return c();
    }, set products(ee = []) {
      c(ee), m();
    }, get onChoose() {
      return i();
    }, set onChoose(ee) {
      i(ee), m();
    }, get onClose() {
      return s();
    }, set onClose(ee) {
      s(ee), m();
    } }, v = Zb(), I = S(v), y = S(I), x = S(y), B = (ee) => {
      var N = Mn();
      be((H) => bt(N, H), [() => r()(e(h).heading)]), b(ee, N);
    };
    R(x, (ee) => {
      e(h).heading && ee(B);
    }), w(y);
    var D = E(y, 2), j = (ee) => {
      Rt(ee, { element: "span", class: "kaching-bundles__mix-and-match-choose-product__close", get onclick() {
        return s();
      }, children: (N, H) => {
        var Q = Ub();
        be(() => xe(Q, "src", Cs)), b(N, Q);
      }, $$slots: { default: !0 } });
    };
    R(D, (ee) => {
      s() && ee(j);
    }), w(I);
    var C = E(I, 2), F = S(C), K = (ee) => {
      var N = Hb(), H = S(N, !0);
      w(N), be((Q) => bt(H, Q), [() => r()("system.no_products_available")]), b(ee, N);
    }, O = (ee) => {
      var N = ze();
      Yt(ve(N), 17, c, (H) => H.id, (H, Q) => {
        Ou(H, { get dealBlock() {
          return o();
        }, get dealBar() {
          return u();
        }, get modal() {
          return e(h);
        }, get product() {
          return e(Q);
        }, get onChoose() {
          return i();
        } });
      }), b(ee, N);
    };
    R(F, (ee) => {
      c().length === 0 ? ee(K) : ee(O, !1);
    }), w(C), w(v), be(() => Wt(v, e(f))), b(n, v);
    var le = Ke(p);
    return l(), le;
  }
  function Jb(n, t) {
    n.target === n.currentTarget && t()();
  }
  Ne(Os, { dealBlock: {}, dealBar: {}, products: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var Yb = $('<div class="kaching-bundles"><div class="kaching-bundles__mix-and-match-choose-product-modal" role="none"><div class="kaching-bundles__mix-and-match-choose-product-modal__content"><!></div></div></div>');
  function Fu(n, t) {
    Ye(t, !0);
    const r = k(t, "dealBlock", 7), a = k(t, "dealBar", 7), l = k(t, "products", 23, () => []), o = k(t, "isOpen", 7), u = k(t, "onChoose", 7), c = k(t, "onClose", 7);
    var i = { get dealBlock() {
      return r();
    }, set dealBlock(f) {
      r(f), m();
    }, get dealBar() {
      return a();
    }, set dealBar(f) {
      a(f), m();
    }, get products() {
      return l();
    }, set products(f = []) {
      l(f), m();
    }, get isOpen() {
      return o();
    }, set isOpen(f) {
      o(f), m();
    }, get onChoose() {
      return u();
    }, set onChoose(f) {
      u(f), m();
    }, get onClose() {
      return c();
    }, set onClose(f) {
      c(f), m();
    } }, s = ze(), d = ve(s), h = (f) => {
      qi(f, { target: "body", children: (p, v) => {
        var I = Yb(), y = S(I);
        y.__click = [Jb, c];
        var x = S(y);
        Os(S(x), { get dealBlock() {
          return r();
        }, get dealBar() {
          return a();
        }, get products() {
          return l();
        }, get onChoose() {
          return u();
        }, get onClose() {
          return c();
        } }), w(x), w(y), w(I), be((B) => Wt(y, B), [() => (function(B) {
          var D;
          return pn({ "kaching-mix-and-match-choose-product-overlay-color": je(((D = B.mixAndMatchChooseProductModal) == null ? void 0 : D.overlayColor) || Qb) });
        })(r())]), b(p, I);
      }, $$slots: { default: !0 } });
    };
    return R(d, (f) => {
      o() && f(h);
    }), b(n, s), Ke(i);
  }
  Sn(["click"]), Ne(Fu, { dealBlock: {}, dealBar: {}, products: {}, isOpen: {}, onChoose: {}, onClose: {} }, [], [], !0);
  var Kb = $('<img alt="" class="kaching-bundles__mix-and-match-product__image"/>'), Xb = $('<div class="kaching-bundles__mix-and-match-product__image-placeholder"></div>'), ev = $('<div class="kaching-bundles__mix-and-match-product__title"> </div>'), tv = $('<div class="kaching-bundles__mix-and-match-product"><!> <div class="kaching-bundles__mix-and-match-product__content"><!> <!> <!></div> <!></div> <!>', 1);
  function Lu(n, t) {
    Ye(t, !0);
    const [r, a] = ft();
    let l = k(t, "dealBlock", 7), o = k(t, "dealBar", 7), u = k(t, "bundleProduct", 7), c = k(t, "product", 7), i = k(t, "swapProducts", 7), s = k(t, "dealBarSelected", 7), d = k(t, "currentVariantId", 7), h = k(t, "mainVariantId", 7), f = k(t, "onSwap", 7), p = k(t, "onChange", 7);
    const v = sn(), I = It();
    let y = Ae(void 0), x = Ae(!1);
    const B = g(() => s() && i().length > 0), D = g(() => De(I, "$translate", r)(o().buttonText || "Change"));
    function j() {
      te(x, !0);
    }
    function C(_) {
      te(x, !1), te(y, _.variant.id, !0), f()(_.product);
    }
    function F() {
      te(x, !1);
    }
    const K = g(() => {
      var _, T;
      return (T = (_ = c()) == null ? void 0 : _.variants) != null ? T : [];
    }), O = g(() => e(y) !== void 0 && e(K).some(({ id: _ }) => _ === e(y)) ? e(y) : u().productGID === "default" && d() ? d() : e(K).length > 0 ? e(K)[0].id : void 0), le = g(() => {
      var _;
      return e(O) ? (_ = c()) == null ? void 0 : _.variants.find((T) => T.id === e(O)) : void 0;
    }), ee = g(() => {
      var _;
      return (_ = c()) != null && _.url && e(le) ? `${c().url}?variant=${e(le).id}` : void 0;
    }), N = g(() => {
      var _, T;
      return ((_ = e(le)) == null ? void 0 : _.image) || ((T = c()) == null ? void 0 : T.image);
    }), H = g(() => s() && c() && e(K).length > 1 && e(O)), Q = g(() => s() && u().productGID !== "default" ? e(ee) : void 0), Z = g(() => c() ? u().title ? hn({ priceFormatter: De(v, "$formatPrice", r), product: c(), totalFullPrice: 0, totalDiscountedPrice: 0, quantity: 1, unitQuantity: null })(u().title) : c().title : "");
    function z(_) {
      te(y, _, !0);
    }
    let P;
    Ze(() => {
      e(le) && tn(() => {
        p()({ variant: e(le), product: c() });
      });
    }), Jn(() => {
      u().productGID, te(y, void 0), P = void 0;
    }), Jn(() => {
      const _ = u().productGID === "default";
      if (!(_ || !l().disableVariantOptionSync)) return;
      const T = _ ? d() : h();
      if (!T || !c() || T === P) return;
      const M = P;
      if (P = T, !e(K).some((J) => J.id === T)) return;
      const L = e(y) === void 0, Y = e(y) === M && M !== void 0;
      (L || Y) && te(y, T, !0);
    });
    var V = { get dealBlock() {
      return l();
    }, set dealBlock(_) {
      l(_), m();
    }, get dealBar() {
      return o();
    }, set dealBar(_) {
      o(_), m();
    }, get bundleProduct() {
      return u();
    }, set bundleProduct(_) {
      u(_), m();
    }, get product() {
      return c();
    }, set product(_) {
      c(_), m();
    }, get swapProducts() {
      return i();
    }, set swapProducts(_) {
      i(_), m();
    }, get dealBarSelected() {
      return s();
    }, set dealBarSelected(_) {
      s(_), m();
    }, get currentVariantId() {
      return d();
    }, set currentVariantId(_) {
      d(_), m();
    }, get mainVariantId() {
      return h();
    }, set mainVariantId(_) {
      h(_), m();
    }, get onSwap() {
      return f();
    }, set onSwap(_) {
      f(_), m();
    }, get onChange() {
      return p();
    }, set onChange(_) {
      p(_), m();
    } }, G = ze(), U = ve(G), ce = (_) => {
      var T = tv(), M = ve(T), L = S(M), Y = (Ce) => {
        Vn(Ce, { get url() {
          return e(Q);
        }, class: "kaching-bundles__mix-and-match-product__image-link", children: (he, se) => {
          var _e = Kb();
          xe(_e, "height", 50), xe(_e, "width", 50), be(() => xe(_e, "src", e(N))), b(he, _e);
        }, $$slots: { default: !0 } });
      }, J = (Ce) => {
        b(Ce, Xb());
      };
      R(L, (Ce) => {
        e(N) ? Ce(Y) : Ce(J, !1);
      });
      var q = E(L, 2), A = S(q);
      Vn(A, { get url() {
        return e(Q);
      }, class: "kaching-bundles__mix-and-match-product__title-link", children: (Ce, he) => {
        var se = ev(), _e = S(se, !0);
        w(se), be(() => bt(_e, e(Z))), b(Ce, se);
      }, $$slots: { default: !0 } });
      var re = E(A, 2);
      Er(re, { get dealBlock() {
        return l();
      }, get variant() {
        return e(le);
      } });
      var ne = E(re, 2), ue = (Ce) => {
        {
          let he = g(() => e(O) || 0);
          zn(Ce, { get product() {
            return c();
          }, get selectedVariantId() {
            return e(he);
          }, onChange: z });
        }
      };
      R(ne, (Ce) => {
        e(H) && Ce(ue);
      }), w(q);
      var ae = E(q, 2), fe = (Ce) => {
        Rt(Ce, { element: "div", class: "kaching-bundles__mix-and-match-product__swap-button", onclick: j, children: (he, se) => {
          Ur();
          var _e = Mn();
          be(() => bt(_e, e(D))), b(he, _e);
        }, $$slots: { default: !0 } });
      };
      R(ae, (Ce) => {
        e(B) && Ce(fe);
      }), w(M), Fu(E(M, 2), { get dealBlock() {
        return l();
      }, get dealBar() {
        return o();
      }, get products() {
        return i();
      }, get isOpen() {
        return e(x);
      }, onChoose: C, onClose: F }), b(_, T);
    };
    R(U, (_) => {
      c() && _(ce);
    }), b(n, G);
    var W = Ke(V);
    return a(), W;
  }
  Ne(Lu, { dealBlock: {}, dealBar: {}, bundleProduct: {}, product: {}, swapProducts: {}, dealBarSelected: {}, currentVariantId: {}, mainVariantId: {}, onSwap: {}, onChange: {} }, [], [], !0);
  var nv = qn('<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 6.5V14.5M6.5 10.5H14.5M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
  function Eu(n) {
    b(n, nv());
  }
  function rv(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  Ne(Eu, {}, [], [], !0);
  var av = $('<img class="kaching-bundles__bar-image" alt=""/>'), iv = $('<div class="kaching-bundles__bar-radio"></div>'), lv = $('<span class="kaching-bundles__bar-title"><!></span>'), sv = $('<span class="kaching-bundles__bar-label"><!></span>'), ov = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), cv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), uv = $("<!> <!>", 1), dv = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), gv = $('<div class="kaching-bundles__mix-and-match-products__placeholder"><span>Select product</span></div>'), hv = $('<div class="kaching-bundles__mix-and-match-products__divider"><div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div> <div class="kaching-bundles__mix-and-match-products__divider-icon"><!></div> <div class="kaching-bundles__mix-and-match-products__divider-line">&ZeroWidthSpace;</div></div>'), pv = $("<!> <!>", 1), fv = $('<div class="kaching-bundles__mix-and-match-products"></div>'), bv = $('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function ju(n, t) {
    Ye(t, !0);
    const r = () => De(H, "$config", u), a = () => De(ee, "$formatPrice", u), l = () => De(le, "$translate", u), o = () => De(N, "$getMediaImageUrl", u), [u, c] = ft(), i = k(t, "dealBlock", 7), s = k(t, "dealBar", 7), d = k(t, "product", 7), h = k(t, "otherProducts", 23, () => []), f = k(t, "complementaryProducts", 23, () => []), p = k(t, "currentVariantId", 7), v = k(t, "componentId", 7), I = k(t, "selectedDealBarIndex", 7), y = k(t, "selected", 7, !1), x = k(t, "sellingPlan", 7), B = k(t, "onProgressiveGiftsChange", 7), D = k(t, "onDealBarSelect", 7), j = k(t, "onDealBarDeselect", 7), C = k(t, "onVariantSelect", 7), F = k(t, "onVariantsChange", 7), K = k(t, "onPersonalisationsChange", 7), O = k(t, "personalisationInitialValues", 23, () => []), le = It(), ee = sn(), N = Dn(), H = gn();
    let Q = Ae(at({})), Z = Ae(at({}));
    const z = g(() => Object.fromEntries(s().bundleProducts.map((X) => [X.id, P(X)])));
    function P(X) {
      const Ie = X.selectedProducts;
      if (!Ie || Ie.length === 0) return [];
      const ge = new Set(Ie.map((Me) => Nt(Me.id))), Ve = h().filter((Me) => ge.has(Me.id)), me = V(X.productGID);
      return me ? [me, ...Ve.filter((Me) => Me.id !== me.id)] : Ve;
    }
    function V(X) {
      if (!X) return;
      if (X === "default") return d();
      const Ie = Nt(X);
      return h().find((ge) => ge.id === Ie);
    }
    let G = Ae(at([])), U = Ae(at([])), ce = Ae(at([]));
    const W = g(() => `${s().id}_${v()}`), _ = g(() => s().bundleProducts.filter(({ productGID: X }) => X)), T = g(() => e(_).every((X) => Ge(X))), M = g(() => e(_).every((X) => {
      var Ie, ge;
      return (ge = (Ie = Ge(X)) == null ? void 0 : Ie.availableForSale) != null && ge;
    })), L = g(() => {
      return i() ? (X = i(), Ie = e(Q), s().bundleProducts.map((ge) => {
        const Ve = Ie[ge.id];
        if (!Ve) return 0;
        const { variant: me } = Ve;
        let Me = me.price;
        return me.compareAtPrice && X.useProductCompareAtPrice && (Me = Math.max(Me, me.compareAtPrice)), Me;
      }).reduce((ge, Ve) => ge + Ve, 0)) : 0;
      var X, Ie;
    }), Y = g(() => e(L) + e(G).reduce((X, Ie) => Ie.includeInCompareAt ? X + Ie.fullPrice : X, 0) + e(U).reduce((X, Ie) => Ie.includeInCompareAt ? X + Ie.fullPrice * Ie.quantity : X, 0)), J = g(() => i().priceRounding ? { perItem: !1, precision: i().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), q = g(() => i() ? Ss(s(), e(Q), r().currencyRate, e(J), x()) : 0), A = g(() => e(Y) > e(q)), re = g(() => {
      var X;
      const Ie = e(_)[0];
      if (Ie) return (X = e(Q)[Ie.id]) == null ? void 0 : X.variant.id;
    }), ne = g(() => hn({ priceFormatter: a(), product: d(), dealBar: s(), totalFullPrice: e(L), totalDiscountedPrice: e(q), quantity: 1, unitQuantity: null, sellingPlan: x() })), ue = g(() => e(ne)(l()(s().title))), ae = g(() => e(ne)(l()(s().subtitle))), fe = g(() => e(ne)(l()(s().label))), Ce = g(() => e(ne)(l()(s().badgeText))), he = g(() => o()(s().badgeImageGID)), se = g(() => o()(s().mediaImageGID) || Ai);
    function _e(X) {
      y() && (X.preventDefault(), X.stopPropagation(), j()());
    }
    function Ge(X) {
      var Ie;
      return (Ie = e(Z)[X.id]) != null ? Ie : V(X.productGID);
    }
    _a(() => {
      y() && D()({ dealBarId: s().id, preselected: !0 });
    }), Ze(() => {
      y() && (Hr(e(Q)), Hr(e(ce)), Hr(e(G)), Hr(e(U)), x(), tn(() => {
        (function() {
          if (!s().bundleProducts.map(({ id: Me }) => Me).every((Me) => e(Q)[Me])) return;
          const X = [];
          for (const Me of s().bundleProducts) {
            const nt = e(Q)[Me.id];
            nt && X.push({ id: Me.id, variant: nt.variant, product: nt.product, quantity: 1 });
          }
          if (X.length === 0) return;
          const Ie = e(q) + e(ce).reduce((Me, nt) => Me + nt.discountedPrice, 0), ge = e(L) + e(ce).reduce((Me, nt) => Me + nt.fullPrice, 0) + e(G).reduce((Me, nt) => nt.showPrice ? Me + nt.fullPrice : Me, 0) + e(U).reduce((Me, nt) => Me + nt.fullPrice * nt.quantity, 0), Ve = Ss(s(), e(Q), r().currencyRate, e(J), void 0), me = d().sellingPlans.map((Me) => ({ sellingPlanId: Me.id, discountedPrice: Ss(s(), e(Q), r().currencyRate, e(J), Me) }));
          F()({ bundleProducts: X, freeGifts: [...e(G), ...e(U)], upsells: e(ce), pricing: { discountedPrice: Ie, fullPrice: ge, discountedPricePerItem: e(q), fullPricePerItem: e(L), discountedPriceWithoutSellingPlan: Ve, discountedPricesForSellingPlans: me } });
        })();
      }));
    });
    const pe = g(() => s().showAsSoldOutEnabled && s().showAsSoldOut ? Vi(s().showAsSoldOut) : "");
    var de = { get dealBlock() {
      return i();
    }, set dealBlock(X) {
      i(X), m();
    }, get dealBar() {
      return s();
    }, set dealBar(X) {
      s(X), m();
    }, get product() {
      return d();
    }, set product(X) {
      d(X), m();
    }, get otherProducts() {
      return h();
    }, set otherProducts(X = []) {
      h(X), m();
    }, get complementaryProducts() {
      return f();
    }, set complementaryProducts(X = []) {
      f(X), m();
    }, get currentVariantId() {
      return p();
    }, set currentVariantId(X) {
      p(X), m();
    }, get componentId() {
      return v();
    }, set componentId(X) {
      v(X), m();
    }, get selectedDealBarIndex() {
      return I();
    }, set selectedDealBarIndex(X) {
      I(X), m();
    }, get selected() {
      return y();
    }, set selected(X = !1) {
      y(X), m();
    }, get sellingPlan() {
      return x();
    }, set sellingPlan(X) {
      x(X), m();
    }, get onProgressiveGiftsChange() {
      return B();
    }, set onProgressiveGiftsChange(X) {
      B(X), m();
    }, get onDealBarSelect() {
      return D();
    }, set onDealBarSelect(X) {
      D(X), m();
    }, get onDealBarDeselect() {
      return j();
    }, set onDealBarDeselect(X) {
      j(X), m();
    }, get onVariantSelect() {
      return C();
    }, set onVariantSelect(X) {
      C(X), m();
    }, get onVariantsChange() {
      return F();
    }, set onVariantsChange(X) {
      F(X), m();
    }, get onPersonalisationsChange() {
      return K();
    }, set onPersonalisationsChange(X) {
      K(X), m();
    }, get personalisationInitialValues() {
      return O();
    }, set personalisationInitialValues(X = []) {
      O(X), m();
    } }, Se = ze(), Oe = ve(Se), Qe = (X) => {
      var Ie = bv();
      let ge;
      var Ve = S(Ie);
      Gr(Ve), Ve.__change = [rv, D, s];
      var me = E(Ve, 2);
      let Me;
      var nt = S(me);
      {
        let Xe = g(() => e(Ce) || void 0);
        Sa(nt, { get style() {
          return s().badgeStyle;
        }, get text() {
          return e(Xe);
        }, get imageUrl() {
          return e(he);
        }, get blockLayout() {
          return i().blockLayout;
        } });
      }
      var ht = E(nt, 2), kt = S(ht);
      Rt(kt, { element: "div", class: "kaching-bundles__bar-main", onclick: _e, children: (Xe, Ue) => {
        var vt = dv(), Qt = ve(vt), an = (Be) => {
          var Ee = av();
          be(() => xe(Ee, "src", e(se))), b(Be, Ee);
        }, Tn = (Be) => {
          b(Be, iv());
        };
        R(Qt, (Be) => {
          s().mediaImageGID ? Be(an) : Be(Tn, !1);
        });
        var yt = E(Qt, 2), Ut = S(yt), Gt = S(Ut), on = S(Gt);
        et(on, () => e(ue), (Be) => {
          var Ee = lv();
          Te(S(Ee), () => e(ue)), w(Ee), b(Be, Ee);
        });
        var xn = E(on, 2), cn = (Be) => {
          var Ee = ze();
          et(ve(Ee), () => e(fe), (We) => {
            var He = sv();
            Te(S(He), () => e(fe)), w(He), b(We, He);
          }), b(Be, Ee);
        };
        R(xn, (Be) => {
          e(fe) && Be(cn);
        }), w(Gt);
        var un = E(Gt, 2), ke = (Be) => {
          var Ee = ze();
          et(ve(Ee), () => e(ae), (We) => {
            var He = ov();
            Te(S(He), () => e(ae)), w(He), b(We, He);
          }), b(Be, Ee);
        };
        R(un, (Be) => {
          e(ae) && Be(ke);
        }), w(Ut);
        var Je = E(Ut, 2), ie = S(Je), Fe = (Be) => {
          var Ee = uv(), We = ve(Ee);
          et(We, () => e(q), (jt) => {
            wr(jt, { get amount() {
              return e(q);
            }, showPricesPerItem: !1, get unitLabel() {
              return i().unitLabel;
            } });
          });
          var He = E(We, 2), At = (jt) => {
            var pt = ze();
            et(ve(pt), () => e(Y), (Ct) => {
              var Ht = cv();
              Te(S(Ht), () => a()(e(Y))), w(Ht), be((Bt) => xe(Ht, "data-a11y-label", Bt), [() => l()("system.original_price")]), b(Ct, Ht);
            }), b(jt, pt);
          };
          R(He, (jt) => {
            e(A) && jt(At);
          }), b(Be, Ee);
        };
        R(ie, (Be) => {
          e(T) && Be(Fe);
        }), w(Je), w(yt), b(Xe, vt);
      }, $$slots: { default: !0 } });
      var Re = E(kt, 2), lt = (Xe) => {
        na(Xe, { get highlights() {
          return s().highlights;
        }, get isSelected() {
          return y();
        }, get replaceLiquid() {
          return e(ne);
        } });
      };
      R(Re, (Xe) => {
        s().highlights && Xe(lt);
      });
      var dt = E(Re, 2), St = (Xe) => {
        var Ue = fv();
        Yt(Ue, 23, () => s().bundleProducts, (vt) => vt.id, (vt, Qt, an) => {
          var Tn = pv(), yt = ve(Tn), Ut = (cn) => {
            {
              let un = g(() => Ge(e(Qt)));
              Lu(cn, { get bundleProduct() {
                return e(Qt);
              }, get product() {
                return e(un);
              }, get swapProducts() {
                return e(z)[e(Qt).id];
              }, get dealBlock() {
                return i();
              }, get dealBar() {
                return s();
              }, get dealBarSelected() {
                return y();
              }, get currentVariantId() {
                return p();
              }, get mainVariantId() {
                return e(re);
              }, onSwap: (ke) => (function(Je, ie) {
                e(Z)[Je] = ie;
              })(e(Qt).id, ke), onChange: (ke) => (function(Je, ie) {
                const { variant: Fe, product: Be } = ie;
                e(Q)[Je] = { variant: Fe, product: Be }, y() && s().bundleProducts.map(({ id: Ee }) => Ee).every((Ee) => e(Q)[Ee]) && Je === s().bundleProducts[0].id && C()({ variantId: Fe.id });
              })(e(Qt).id, ke) });
            }
          }, Gt = (cn) => {
            var un = ze(), ke = ve(un), Je = (ie) => {
              b(ie, gv());
            };
            R(ke, (ie) => {
              r().preview && ie(Je);
            }, !0), b(cn, un);
          };
          R(yt, (cn) => {
            e(Qt).productGID ? cn(Ut) : cn(Gt, !1);
          });
          var on = E(yt, 2), xn = (cn) => {
            var un = hv(), ke = E(S(un), 2);
            Eu(S(ke)), w(ke), Ur(2), w(un), b(cn, un);
          };
          R(on, (cn) => {
            e(an) < s().bundleProducts.length - 1 && cn(xn);
          }), b(vt, Tn);
        }), w(Ue), b(Xe, Ue);
      };
      R(dt, (Xe) => {
        e(T) && Xe(St);
      });
      var Ft = E(dt, 2), Mt = (Xe) => {
        {
          let Ue = g(() => e(re) ? [e(re)] : []);
          Ca(Xe, { get product() {
            return d();
          }, get productPersonalisation() {
            return s().productPersonalisation;
          }, get selectedVariantIds() {
            return e(Ue);
          }, quantity: 1, get addPersonalisationModal() {
            return i().addPersonalisationModal;
          }, get onPersonalisationsChange() {
            return K();
          }, get initialValues() {
            return O();
          } });
        }
      };
      R(Ft, (Xe) => {
        y() && s().productPersonalisation && (i().blockLayout === "vertical" || i().blockLayout === "plain") && Xe(Mt);
      }), w(ht);
      var Et = E(ht, 2);
      {
        let Xe = g(() => s().upsells || []);
        Ka(Et, { get dealBlock() {
          return i();
        }, get upsells() {
          return e(Xe);
        }, get otherProducts() {
          return h();
        }, get complementaryProducts() {
          return f();
        }, get dealBarSelected() {
          return y();
        }, get dealSellingPlan() {
          return x();
        }, sets: 1, onChange: (Ue) => {
          te(ce, Ue, !0);
        } });
      }
      var Lt = E(Et, 2);
      {
        let Xe = g(() => ({ ...s(), dealBarType: "bundle", quantitySelector: !1, bundleProducts: s().bundleProducts.map((Ue) => ({ ...Ue, quantity: 1, variantGIDs: null, defaultVariantGID: null, mediaImageGID: null, discountType: "default", discountValue: 0 })) }));
        ti(Lt, { get selectedDealBarIndex() {
          return I();
        }, get onChange() {
          return B();
        }, get dealBlock() {
          return i();
        }, get dealBar() {
          return e(Xe);
        }, get otherProducts() {
          return h();
        }, get selected() {
          return y();
        }, get progressiveGifts() {
          return i().progressiveGifts;
        } });
      }
      var Pe = E(Lt, 2);
      {
        let Xe = g(() => s().freeGifts || []);
        Ya(Pe, { get dealBlock() {
          return i();
        }, get freeGifts() {
          return e(Xe);
        }, get freeGiftsSummary() {
          return s().freeGiftsSummary;
        }, get otherProducts() {
          return h();
        }, get dealBarSelected() {
          return y();
        }, get sellingPlan() {
          return x();
        }, sets: 1, onChange: (Ue) => {
          te(G, Ue, !0);
        } });
      }
      var tt = E(Pe, 2);
      {
        let Xe = g(() => s().multipleGiftsSelectors || []);
        ei(tt, { get dealBlock() {
          return i();
        }, get multipleGiftsSelectors() {
          return e(Xe);
        }, get sellingPlan() {
          return x();
        }, get otherProducts() {
          return h();
        }, onChange: (Ue) => {
          te(U, Ue, !0);
        } });
      }
      w(me);
      var rt = E(me, 2), st = (Xe) => {
        Xa(Xe, { get showAsSoldOut() {
          return s().showAsSoldOut;
        }, get replaceLiquid() {
          return e(ne);
        } });
      };
      R(rt, (Xe) => {
        s().showAsSoldOutEnabled && s().showAsSoldOut && Xe(st);
      }), w(Ie), be((Xe, Ue) => {
        var vt;
        ge = Tt(Ie, 1, "kaching-bundles__bar", null, ge, Xe), xe(Ie, "data-deal-bar-id", s().id), Wt(Ie, e(pe)), xe(Ve, "name", `kaching-bundles-deal-${(vt = v()) != null ? vt : ""}`), ma(Ve, s().id), xe(Ve, "id", e(W)), Ci(Ve, y()), Ve.disabled = s().showAsSoldOutEnabled, xe(me, "for", e(W)), Me = Tt(me, 1, "kaching-bundles__bar-container", null, Me, Ue);
      }, [() => ({ "kaching-bundles__bar--selected": y(), "kaching-bundles__bar--disabled": !e(M) && r().preview }), () => ({ "kaching-bundles__bar-container--sold-out": s().showAsSoldOutEnabled })]), b(X, Ie);
    };
    R(Oe, (X) => {
      (e(M) || r().preview) && X(Qe);
    }), b(n, Se);
    var we = Ke(de);
    return c(), we;
  }
  Sn(["change"]), Ne(ju, { dealBlock: {}, dealBar: {}, product: {}, otherProducts: {}, complementaryProducts: {}, currentVariantId: {}, componentId: {}, selectedDealBarIndex: {}, selected: {}, sellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var vv = qn('<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.2008 16C27.2008 18.9705 26.0208 21.8192 23.9204 23.9196C21.82 26.0201 18.9712 27.2 16.0008 27.2C13.0304 27.2 10.1816 26.0201 8.08119 23.9196C5.98078 21.8192 4.80078 18.9705 4.80078 16C4.80078 13.0296 5.98078 10.1809 8.08119 8.08045C10.1816 5.98005 13.0304 4.80005 16.0008 4.80005C18.9712 4.80005 21.82 5.98005 23.9204 8.08045C26.0208 10.1809 27.2008 13.0296 27.2008 16ZM10.0008 16C10.0008 15.6818 10.1272 15.3766 10.3523 15.1515C10.5773 14.9265 10.8825 14.8 11.2008 14.8H14.8008V11.2C14.8008 10.8818 14.9272 10.5766 15.1523 10.3515C15.3773 10.1265 15.6825 10 16.0008 10C16.319 10 16.6243 10.1265 16.8493 10.3515C17.0744 10.5766 17.2008 10.8818 17.2008 11.2V14.8H20.8008C21.119 14.8 21.4243 14.9265 21.6493 15.1515C21.8744 15.3766 22.0008 15.6818 22.0008 16C22.0008 16.3183 21.8744 16.6235 21.6493 16.8486C21.4243 17.0736 21.119 17.2 20.8008 17.2H17.2008V20.8C17.2008 21.1183 17.0744 21.4235 16.8493 21.6486C16.6243 21.8736 16.319 22 16.0008 22C15.6825 22 15.3773 21.8736 15.1523 21.6486C14.9272 21.4235 14.8008 21.1183 14.8008 20.8V17.2H11.2008C10.8825 17.2 10.5773 17.0736 10.3523 16.8486C10.1272 16.6235 10.0008 16.3183 10.0008 16Z" fill="currentColor"></path></svg>');
  function Ru(n, t) {
    Ye(t, !0);
    let r = k(t, "class", 7);
    var a = { get class() {
      return r();
    }, set class(o) {
      r(o), m();
    } }, l = vv();
    return be(() => Tt(l, 0, xi(r()))), b(n, l), Ke(a);
  }
  Ne(Ru, { class: {} }, [], [], !0);
  const Fs = Or({}), Ls = Or(!1);
  function Gi(n) {
    Ls.set(n);
  }
  function Cl(n, t) {
    Fs.update((r) => ({ ...r, [n]: t }));
  }
  const _v = (n) => {
    const { collectionBreaks: t, colors: r, cornerRadius: a } = n;
    return t ? pn({ "kaching-collection-breaks-product-photo-size": t.productPhotoSize + "px", "kaching-collection-breaks-button-color": t.buttonColor && je(t.buttonColor), "kaching-collection-breaks-product-title-color": je(r.title), "kaching-collection-breaks-image-border-radius": (a || 0) / 2 + "px" }) : "";
  };
  function mv(n, t) {
    n.target === n.currentTarget && te(t, !1);
  }
  var kv = $('<img class="kaching-bundles__collection-product__image" alt=""/>'), yv = $('<span class="kaching-bundles__collection-product__title"> </span>'), xv = $("<!> <!>", 1), wv = $('<img alt=""/>'), Pv = $('<div class="kaching-bundles__collection-product"><div class="kaching-bundles__collection-product__main"><!> <div class="kaching-bundles__collection-product__content"><!> <!> <!></div></div> <!></div>'), Sv = $('<img class="kaching-bundles__collection-product__image" alt="" height="40" width="40"/>'), Cv = $('<div class="kaching-bundles"><div class="kaching-bundles__choose-product-modal" role="none"><div class="kaching-bundles__choose-product-modal__content"><!></div></div></div>'), Bv = $('<div><div class="kaching-bundles__collection-product__main"><!> <!></div> <!></div>');
  function Es(n, t) {
    Ye(t, !0);
    const r = () => De(v, "$config", a), [a, l] = ft(), o = k(t, "dealBlock", 7), u = k(t, "dealBar", 7), c = k(t, "mainProduct", 7, null), i = k(t, "products", 7), s = k(t, "selectedProductVariant", 7, null), d = k(t, "onChange", 7), h = k(t, "onRemove", 7), f = It(), p = Dn(), v = gn();
    let I = Ae(!1);
    const y = g(() => o().collectionBreaks), x = g(() => {
      var G;
      return ((G = s()) == null ? void 0 : G.product) || c();
    }), B = g(() => {
      var G, U;
      return ((G = s()) == null ? void 0 : G.variant) || ((U = e(x)) == null ? void 0 : U.variants[0]) || null;
    }), D = g(() => De(p, "$getMediaImageUrl", a)(e(y).mediaImageGID)), j = g(() => De(f, "$translate", a)(e(y).buttonText)), C = g(() => e(y).requireItemSelectionAlert), F = g(() => e(y).requireItemSelectionEnabled), K = g(() => r().preview && r().previewAlerts || De(Ls, "$requireSelectionError", a)), O = g(() => {
      var G, U;
      return (G = e(x)) != null && G.url ? `${e(x).url}?variant=${(U = e(B)) == null ? void 0 : U.id}` : void 0;
    });
    function le(G) {
      te(I, !1), d()(G);
    }
    function ee() {
      var G;
      (G = h()) == null || G();
    }
    function N(G) {
      const U = e(x).variants.find((ce) => ce.id === G);
      U && d()({ product: e(x), variant: U });
    }
    var H = { get dealBlock() {
      return o();
    }, set dealBlock(G) {
      o(G), m();
    }, get dealBar() {
      return u();
    }, set dealBar(G) {
      u(G), m();
    }, get mainProduct() {
      return c();
    }, set mainProduct(G = null) {
      c(G), m();
    }, get products() {
      return i();
    }, set products(G) {
      i(G), m();
    }, get selectedProductVariant() {
      return s();
    }, set selectedProductVariant(G = null) {
      s(G), m();
    }, get onChange() {
      return d();
    }, set onChange(G) {
      d(G), m();
    }, get onRemove() {
      return h();
    }, set onRemove(G) {
      h(G), m();
    } }, Q = ze(), Z = ve(Q), z = (G) => {
      var U = Pv(), ce = S(U), W = S(ce);
      {
        let A = g(() => c() ? void 0 : e(O));
        Vn(W, { get url() {
          return e(A);
        }, class: "kaching-bundles__collection-product__link", children: (re, ne) => {
          var ue = kv();
          be(() => xe(ue, "src", e(B).image || e(x).image)), b(re, ue);
        }, $$slots: { default: !0 } });
      }
      var _ = E(W, 2), T = S(_), M = (A) => {
        {
          let re = g(() => c() ? void 0 : e(O));
          Vn(A, { get url() {
            return e(re);
          }, class: "kaching-bundles__collection-product__link", children: (ne, ue) => {
            var ae = yv(), fe = S(ae, !0);
            w(ae), be(() => bt(fe, e(x).title)), b(ne, ae);
          }, $$slots: { default: !0 } });
        }
      };
      R(T, (A) => {
        e(y).showProductName && A(M);
      });
      var L = E(T, 2), Y = (A) => {
        var re = xv(), ne = ve(re);
        Fr(ne, { get product() {
          return e(x);
        } });
        var ue = E(ne, 2);
        {
          let ae = g(() => {
            var fe;
            return (fe = e(B)) == null ? void 0 : fe.id;
          });
          zn(ue, { get product() {
            return e(x);
          }, get selectedVariantId() {
            return e(ae);
          }, onChange: N });
        }
        b(A, re);
      };
      R(L, (A) => {
        e(x).variants.length > 1 && A(Y);
      }), Er(E(L, 2), { get dealBlock() {
        return o();
      }, get variant() {
        return e(B);
      } }), w(_), w(ce);
      var J = E(ce, 2), q = (A) => {
        Rt(A, { element: "div", class: "kaching-bundles__collection-product__remove-button", "aria-label": "Remove product", onclick: ee, children: (re, ne) => {
          var ue = wv();
          be(() => xe(ue, "src", "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11%201L1%2011M1%201L11%2011'%20stroke='%23344054'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e")), b(re, ue);
        }, $$slots: { default: !0 } });
      };
      R(J, (A) => {
        c() || A(q);
      }), w(U), b(G, U);
    }, P = (G) => {
      var U = Bv();
      let ce;
      var W = S(U), _ = S(W);
      Rt(_, { element: "div", class: "kaching-bundles__collection-product__choose-product-image", onclick: () => {
        te(I, !0);
      }, children: (J, q) => {
        var A = ze(), re = ve(A), ne = (ae) => {
          var fe = ze(), Ce = ve(fe), he = (se) => {
            var _e = Sv();
            be(() => xe(_e, "src", e(D))), b(se, _e);
          };
          R(Ce, (se) => {
            e(D) && se(he);
          }), b(ae, fe);
        }, ue = (ae) => {
          Ru(ae, { class: "kaching-bundles__collection-product__image kaching-bundles__collection-product__image--default" });
        };
        R(re, (ae) => {
          e(y).mediaImageGID ? ae(ne) : ae(ue, !1);
        }), b(J, A);
      }, $$slots: { default: !0 } });
      var T = E(_, 2), M = (J) => {
        Rt(J, { element: "div", class: "kaching-bundles__collection-product__choose-product-button", onclick: () => {
          te(I, !0);
        }, children: (q, A) => {
          Ur();
          var re = Mn();
          be(() => bt(re, e(j))), b(q, re);
        }, $$slots: { default: !0 } });
      };
      R(T, (J) => {
        e(j) && J(M);
      }), w(W);
      var L = E(W, 2), Y = (J) => {
        qi(J, { target: "body", children: (q, A) => {
          var re = Cv(), ne = S(re);
          ne.__click = [mv, I];
          var ue = S(ne);
          Bs(S(ue), { get dealBlock() {
            return o();
          }, get dealBar() {
            return u();
          }, get products() {
            return i();
          }, onChoose: le, onClose: () => {
            te(I, !1);
          } }), w(ue), w(ne), w(re), be((ae) => Wt(ne, ae), [() => (function(ae) {
            return pn({ "kaching-choose-product-overlay-color": je(ae.chooseProductModal.overlayColor) });
          })(o())]), b(q, re);
        }, $$slots: { default: !0 } });
      };
      R(L, (J) => {
        e(I) && J(Y);
      }), w(U), be((J) => ce = Tt(U, 1, "kaching-bundles__collection-product", null, ce, J), [() => ({ "kaching-bundles__collection-product--require-selection": e(K) && e(F) && e(C) })]), b(G, U);
    };
    R(Z, (G) => {
      e(x) && e(B) ? G(z) : G(P, !1);
    }), b(n, Q);
    var V = Ke(H);
    return l(), V;
  }
  function Iv(n, t, r, a) {
    t()({ dealBarId: r().id, dealBarQuantity: a(r()), preselected: !1 });
  }
  Sn(["click"]), Ne(Es, { dealBlock: {}, dealBar: {}, mainProduct: {}, products: {}, selectedProductVariant: {}, onChange: {}, onRemove: {} }, [], [], !0);
  var Mv = $('<img class="kaching-bundles__bar-image" alt=""/>'), Dv = $('<div class="kaching-bundles__bar-radio"></div>'), zv = $('<span class="kaching-bundles__bar-title"><!></span>'), $v = $('<span class="kaching-bundles__bar-label"><!></span>'), Av = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), qv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Vv = $('<div class="kaching-bundles__bar-price"><!></div>'), Tv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Gv = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--secondary"><!> <!></div>'), Ov = $('<div class="kaching-bundles__bar-pricing-row kaching-bundles__bar-pricing-row--main"><!> <!></div> <!>', 1), Fv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Lv = $("<!> <!>", 1), Ev = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <!></div> <div class="kaching-bundles__bar-pricing"><!></div></div>', 1), jv = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), Rv = $('<div class="kaching-bundles__bar-collection-products"></div>'), Nv = $('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function Nu(n, t) {
    Ye(t, !0);
    const r = () => De(z, "$config", c), a = () => De(Fs, "$chosenCollectionBreaksProducts", c), l = () => De(Q, "$formatPrice", c), o = () => De(H, "$translate", c), u = () => De(Z, "$getMediaImageUrl", c), [c, i] = ft();
    let s = k(t, "dealBlock", 7), d = k(t, "dealBar", 7), h = k(t, "product", 7), f = k(t, "collectionBreaksProducts", 23, () => []), p = k(t, "otherProducts", 23, () => []), v = k(t, "selectedDealBarIndex", 7, null), I = k(t, "complementaryProducts", 23, () => []), y = k(t, "customQuantity", 7, void 0), x = k(t, "currentVariantId", 7, void 0), B = k(t, "componentId", 7), D = k(t, "selected", 7, !1), j = k(t, "globalSellingPlan", 7, void 0), C = k(t, "onDealBarSelect", 7), F = k(t, "onDealBarDeselect", 7), K = k(t, "onVariantSelect", 7), O = k(t, "onVariantsChange", 7), le = k(t, "onPersonalisationsChange", 7), ee = k(t, "personalisationInitialValues", 23, () => []), N = k(t, "onProgressiveGiftsChange", 7);
    const H = It(), Q = sn(), Z = Dn(), z = gn();
    let P = Ae(at([])), V = Ae(at([])), G = Ae(at([]));
    const U = new rb(), ce = g(() => {
      var ie, Fe;
      return (Fe = (ie = s().collectionBreaks) == null ? void 0 : ie.autoFillNotChosenItems) != null && Fe;
    }), W = g(() => s().priceRounding ? { perItem: s().showPricesPerItem, precision: s().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0), _ = g(() => {
      var ie, Fe;
      return s() && ((Fe = (ie = s().defaultVariantsV2) == null ? void 0 : ie.find((Be) => Nt(Be.productGID) === h().id && Be.dealBarId === d().id)) == null ? void 0 : Fe.variantGIDs) || [];
    });
    let T = g(() => Y(d())), M = Ae(at(Y(d())));
    Jn(() => {
      te(M, e(T), !0);
    });
    const L = g(() => y() || e(M));
    function Y(ie) {
      return ie.dealBarType === "bxgy" ? ie.buyQuantity + ie.getQuantity : Number(ie.quantity);
    }
    Ze(() => {
      x() && tn(() => {
        (function(ie, Fe) {
          if (Object.keys(a()).length === 0 && ie[0]) {
            const Ee = Nt(ie[0]), We = h().variants.find((He) => He.id == Ee);
            if (We) return void Cl(0, { product: h(), variant: We });
          }
          const Be = h().variants.find((Ee) => Ee.id == Fe);
          if (Be) return void Cl(0, { product: h(), variant: Be });
          Object.keys(a()).length === 0 && h().variants[0] && Cl(0, { product: h(), variant: h().variants[0] });
        })(e(_), x());
      });
    }), Ze(() => {
      D() || U.clear();
    });
    const J = g(() => f().length === 0 || f().some((ie) => ie.id === h().id)), q = g(() => {
      const ie = Object.fromEntries(Object.entries(a()).filter(([Be]) => Number(Be) < e(L)));
      if (!D() || !e(ce)) return ie;
      const Fe = { ...ie };
      for (let Be = 1; Be < e(L); Be++) Fe[Be] || U.has(Be) || (e(J) && ie[0] ? Fe[Be] = { product: h(), variant: ie[0].variant } : ie[1] && (Fe[Be] = { product: ie[1].product, variant: ie[1].variant }));
      return Fe;
    }), A = g(() => (function({ selectedProductVariants: ie, mainProductIsInCollection: Fe, collectionBreaksProducts: Be, dealBlock: Ee, quantity: We }) {
      var He;
      const At = ie.map((Bt) => ({ quantity: 1, variant: Bt.variant }));
      if (At.length === 0 || At.length >= We || (He = Ee.collectionBreaks) != null && He.showChosenProductsPriceOnly) return At;
      const jt = We - At.length;
      if (Fe) {
        const Bt = Array.from({ length: jt }, () => At[0]);
        return [...At, ...Bt];
      }
      const pt = Be.flatMap((Bt) => Bt.variants).filter((Bt) => Bt.availableForSale);
      if (pt.length === 0) return At;
      const Ct = pt.reduce((Bt, Kt) => Kt.price < Bt.price ? Kt : Bt, pt[0]), Ht = Array.from({ length: jt }, () => ({ quantity: 1, variant: Ct }));
      return [...At, ...Ht];
    })({ selectedProductVariants: Object.values(e(q)), mainProductIsInCollection: e(J), collectionBreaksProducts: f(), dealBlock: s(), quantity: e(L) }));
    let re = Ae(void 0);
    const ne = g(() => $i(h(), e(A).map((ie) => ie.variant))), ue = g(() => {
      var ie, Fe;
      return (d().sellingPlanEnabled || s().subscriptionsEnabled && ((ie = s().subscriptions) == null ? void 0 : ie.layout) === "link" && ((Fe = s().subscriptions) == null ? void 0 : Fe.subscribeByDefault)) && (!s().subscriptionsEnabled || !!j());
    }), ae = g(() => e(ue) ? xs(d(), e(ne), e(re)) : void 0), fe = g(() => ws(e(ae), j(), e(ne), h().requiresSellingPlan)), Ce = g(() => new Set(h().variants.map((ie) => ie.id))), he = g(() => Object.values(e(q)).filter((ie) => e(Ce).has(ie.variant.id))), se = g(() => (function(ie, Fe, Be) {
      return Be.map(({ variant: We, quantity: He }) => {
        let At = We.price;
        const jt = ie.useProductCompareAtPrice || (Fe.dealBarType === void 0 || Fe.dealBarType === "quantity-break") && Fe.discountType === "default";
        return We.compareAtPrice && jt && (At = Math.max(At, We.compareAtPrice)), At * He;
      }).reduce((We, He) => We + He, 0);
    })(s(), d(), e(A))), _e = g(() => e(se) + e(P).reduce((ie, Fe) => Fe.includeInCompareAt ? ie + Fe.fullPrice : ie, 0) + e(V).reduce((ie, Fe) => Fe.includeInCompareAt ? ie + Fe.fullPrice * Fe.quantity : ie, 0)), Ge = g(() => Math.ceil(e(se) / e(A).length)), pe = g(() => s() && Ie(e(A), e(fe))), de = g(() => hn({ priceFormatter: l(), product: h(), dealBar: d(), totalFullPrice: e(se), totalDiscountedPrice: e(pe), quantity: e(L), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: nr(e(A)), sellingPlan: e(fe) })), Se = g(() => e(de)(o()(d().title))), Oe = g(() => e(de)(o()(d().subtitle))), Qe = g(() => e(de)(o()(d().label))), we = g(() => e(de)(o()(d().badgeText))), X = g(() => u()(d().badgeImageGID));
    function Ie(ie, Fe) {
      switch (d().dealBarType) {
        case void 0:
        case "quantity-break":
          return ru(d(), ie, r().currencyRate, e(W), Fe, r().featureFlags.percentage_cents_rounding_workaround);
        case "bxgy":
          return au(d(), ie, r().currencyRate, e(W), Fe);
      }
    }
    const ge = g(() => Math.ceil(e(pe) / e(A).length)), Ve = g(() => e(_e) > e(pe)), me = g(() => `${d().id}_${B()}`);
    _a(() => {
      D() && C()({ dealBarId: d().id, dealBarQuantity: Y(d()), preselected: !0 });
    });
    const Me = g(() => u()(d().mediaImageGID) || Ai);
    Ze(() => {
      var ie;
      D() && Object.keys(e(q)).length > 0 && (e(G), e(P), e(V), e(fe), (ie = s().collectionBreaks) == null || ie.requireItemSelectionEnabled, tn(() => {
        (function() {
          var Fe, Be;
          const Ee = Object.values(e(q)).map((Kt) => ({ variant: Kt.variant, product: Kt.product, quantity: 1 })), We = e(pe) + e(G).reduce((Kt, ln) => Kt + ln.discountedPrice, 0), He = e(se) + e(G).reduce((Kt, ln) => Kt + ln.fullPrice, 0) + e(P).reduce((Kt, ln) => ln.showPrice ? Kt + ln.fullPrice : Kt, 0) + e(V).reduce((Kt, ln) => Kt + ln.fullPrice * ln.quantity, 0), At = Ie(e(A), void 0), jt = h().sellingPlans.map((Kt) => ({ sellingPlanId: Kt.id, discountedPrice: Ie(e(A), Kt) })), pt = (Be = (Fe = s().collectionBreaks) == null ? void 0 : Fe.requireItemSelectionEnabled) != null && Be, Ct = Ee.length, Ht = !pt || Ct >= e(L), Bt = pt ? Math.max(0, e(L) - Ct) : 0;
          O()({ variants: Ee, freeGifts: [...e(P), ...e(V)], upsells: e(G), dealBarSellingPlan: e(ae), pricing: { discountedPrice: We, fullPrice: He, discountedPricePerItem: e(ge), fullPricePerItem: e(Ge), discountedPriceWithoutSellingPlan: At, discountedPricesForSellingPlans: jt }, validation: { requiresItemSelection: pt, allItemsSelected: Ht, missingItemsCount: Bt } });
        })();
      }));
    });
    const nt = g(() => d().showAsSoldOutEnabled && d().showAsSoldOut ? Vi(d().showAsSoldOut) : ""), ht = g(() => [_v(s()), e(nt)].filter(Boolean).join(";"));
    function kt(ie, Fe) {
      ie === 0 && K()({ variantId: Fe.variant.id }), Cl(ie, Fe), Gi(!1), e(ce) && U.delete(ie);
    }
    function Re(ie) {
      (function(Fe) {
        Fs.update((Be) => {
          const { [Fe]: Ee, ...We } = Be;
          return We;
        });
      })(ie), e(ce) && U.add(ie);
    }
    var lt = { get dealBlock() {
      return s();
    }, set dealBlock(ie) {
      s(ie), m();
    }, get dealBar() {
      return d();
    }, set dealBar(ie) {
      d(ie), m();
    }, get product() {
      return h();
    }, set product(ie) {
      h(ie), m();
    }, get collectionBreaksProducts() {
      return f();
    }, set collectionBreaksProducts(ie = []) {
      f(ie), m();
    }, get otherProducts() {
      return p();
    }, set otherProducts(ie = []) {
      p(ie), m();
    }, get selectedDealBarIndex() {
      return v();
    }, set selectedDealBarIndex(ie = null) {
      v(ie), m();
    }, get complementaryProducts() {
      return I();
    }, set complementaryProducts(ie = []) {
      I(ie), m();
    }, get customQuantity() {
      return y();
    }, set customQuantity(ie = void 0) {
      y(ie), m();
    }, get currentVariantId() {
      return x();
    }, set currentVariantId(ie = void 0) {
      x(ie), m();
    }, get componentId() {
      return B();
    }, set componentId(ie) {
      B(ie), m();
    }, get selected() {
      return D();
    }, set selected(ie = !1) {
      D(ie), m();
    }, get globalSellingPlan() {
      return j();
    }, set globalSellingPlan(ie = void 0) {
      j(ie), m();
    }, get onDealBarSelect() {
      return C();
    }, set onDealBarSelect(ie) {
      C(ie), m();
    }, get onDealBarDeselect() {
      return F();
    }, set onDealBarDeselect(ie) {
      F(ie), m();
    }, get onVariantSelect() {
      return K();
    }, set onVariantSelect(ie) {
      K(ie), m();
    }, get onVariantsChange() {
      return O();
    }, set onVariantsChange(ie) {
      O(ie), m();
    }, get onPersonalisationsChange() {
      return le();
    }, set onPersonalisationsChange(ie) {
      le(ie), m();
    }, get personalisationInitialValues() {
      return ee();
    }, set personalisationInitialValues(ie = []) {
      ee(ie), m();
    }, get onProgressiveGiftsChange() {
      return N();
    }, set onProgressiveGiftsChange(ie) {
      N(ie), m();
    } }, dt = Nv();
    let St;
    var Ft = S(dt);
    Gr(Ft), Ft.__change = [Iv, C, d, Y];
    var Mt = E(Ft, 2);
    let Et;
    var Lt = S(Mt);
    {
      let ie = g(() => e(we) || void 0);
      Sa(Lt, { get style() {
        return d().badgeStyle;
      }, get text() {
        return e(ie);
      }, get imageUrl() {
        return e(X);
      }, get blockLayout() {
        return s().blockLayout;
      } });
    }
    var Pe = E(Lt, 2), tt = S(Pe);
    Rt(tt, { element: "div", class: "kaching-bundles__bar-main", onclick: function(ie) {
      D() && (ie.preventDefault(), ie.stopPropagation(), F()());
    }, children: (ie, Fe) => {
      var Be = Ev(), Ee = ve(Be), We = (Dt) => {
        var ot = Mv();
        be(() => xe(ot, "src", e(Me))), b(Dt, ot);
      }, He = (Dt) => {
        b(Dt, Dv());
      };
      R(Ee, (Dt) => {
        d().mediaImageGID ? Dt(We) : Dt(He, !1);
      });
      var At = E(Ee, 2), jt = S(At), pt = S(jt), Ct = S(pt);
      et(Ct, () => e(Se), (Dt) => {
        var ot = zv();
        Te(S(ot), () => e(Se)), w(ot), b(Dt, ot);
      });
      var Ht = E(Ct, 2), Bt = (Dt) => {
        var ot = ze();
        et(ve(ot), () => e(Qe), (qt) => {
          var xt = $v();
          Te(S(xt), () => e(Qe)), w(xt), b(qt, xt);
        }), b(Dt, ot);
      };
      R(Ht, (Dt) => {
        e(Qe) && Dt(Bt);
      }), w(pt);
      var Kt = E(pt, 2), ln = (Dt) => {
        var ot = ze();
        et(ve(ot), () => e(Oe), (qt) => {
          var xt = Av();
          Te(S(xt), () => e(Oe)), w(xt), b(qt, xt);
        }), b(Dt, ot);
      };
      R(Kt, (Dt) => {
        e(Oe) && Dt(ln);
      }), w(jt);
      var Gn = E(jt, 2), Cn = S(Gn), Wn = (Dt) => {
        var ot = Ov(), qt = ve(ot), xt = S(qt);
        et(xt, () => e(ge), (qe) => {
          wr(qe, { get amount() {
            return e(ge);
          }, get showPricesPerItem() {
            return s().showPricesPerItem;
          }, get unitLabel() {
            return s().unitLabel;
          } });
        });
        var Zt = E(xt, 2), _n = (qe) => {
          var $e = ze();
          et(ve($e), () => e(Ge), (ct) => {
            var gt = qv();
            Te(S(gt), () => l()(e(Ge))), w(gt), be((zt) => xe(gt, "data-a11y-label", zt), [() => o()("system.original_price")]), b(ct, gt);
          }), b(qe, $e);
        };
        R(Zt, (qe) => {
          e(Ve) && qe(_n);
        }), w(qt);
        var oe = E(qt, 2), Le = (qe) => {
          var $e = Gv(), ct = S($e);
          et(ct, () => e(pe), (Jt) => {
            var it = Vv();
            Te(S(it), () => l()(e(pe))), w(it), be((_t) => xe(it, "data-a11y-label", _t), [() => o()("system.price")]), b(Jt, it);
          });
          var gt = E(ct, 2), zt = (Jt) => {
            var it = ze();
            et(ve(it), () => e(_e), (_t) => {
              var Xt = Tv();
              Te(S(Xt), () => l()(e(_e))), w(Xt), be((mn) => xe(Xt, "data-a11y-label", mn), [() => o()("system.original_price")]), b(_t, Xt);
            }), b(Jt, it);
          };
          R(gt, (Jt) => {
            e(Ve) && Jt(zt);
          }), w($e), b(qe, $e);
        };
        R(oe, (qe) => {
          e(L) > 1 && qe(Le);
        }), b(Dt, ot);
      }, vn = (Dt) => {
        var ot = Lv(), qt = ve(ot);
        et(qt, () => e(pe), (_n) => {
          {
            let oe = g(() => s().showPricesPerItem ? e(ge) : e(pe));
            wr(_n, { get amount() {
              return e(oe);
            }, get showPricesPerItem() {
              return s().showPricesPerItem;
            }, get unitLabel() {
              return s().unitLabel;
            } });
          }
        });
        var xt = E(qt, 2), Zt = (_n) => {
          var oe = ze();
          et(ve(oe), () => s().showPricesPerItem ? e(Ge) : e(_e), (Le) => {
            var qe = Fv();
            Te(S(qe), () => l()(s().showPricesPerItem ? e(Ge) : e(_e))), w(qe), be(($e) => xe(qe, "data-a11y-label", $e), [() => o()("system.original_price")]), b(Le, qe);
          }), b(_n, oe);
        };
        R(xt, (_n) => {
          e(Ve) && _n(Zt);
        }), b(Dt, ot);
      };
      R(Cn, (Dt) => {
        s().showBothPrices ? Dt(Wn) : Dt(vn, !1);
      }), w(Gn), w(At), b(ie, Be);
    }, $$slots: { default: !0 } });
    var rt = E(tt, 2), st = (ie) => {
      na(ie, { get highlights() {
        return d().highlights;
      }, get isSelected() {
        return D();
      }, get replaceLiquid() {
        return e(de);
      } });
    };
    R(rt, (ie) => {
      d().highlights && ie(st);
    });
    var Xe = E(rt, 2), Ue = (ie) => {
      var Fe = jv(), Be = S(Fe);
      {
        let Ee = g(() => e(ae) || e(ne)[0]);
        ta(Be, { get sellingPlans() {
          return e(ne);
        }, get selectedSellingPlan() {
          return e(Ee);
        }, onChange: (We) => {
          te(re, We, !0);
        } });
      }
      w(Fe), b(ie, Fe);
    };
    R(Xe, (ie) => {
      D() && e(ue) && !d().sellingPlanGid && e(ne).length > 1 && ie(Ue);
    });
    var vt = E(Xe, 2), Qt = (ie) => {
      var Fe = Rv();
      Yt(Fe, 21, () => ({ length: e(L) }), Tr, (Be, Ee, We) => {
        var He = ze(), At = ve(He), jt = (Ct) => {
          {
            let Ht = g(() => e(q)[We] || null);
            Es(Ct, { get dealBlock() {
              return s();
            }, get dealBar() {
              return d();
            }, get mainProduct() {
              return h();
            }, products: [], get selectedProductVariant() {
              return e(Ht);
            }, onChange: (Bt) => kt(We, Bt) });
          }
        }, pt = (Ct) => {
          {
            let Ht = g(() => e(q)[We] || null);
            Es(Ct, { get dealBlock() {
              return s();
            }, get dealBar() {
              return d();
            }, get products() {
              return f();
            }, get selectedProductVariant() {
              return e(Ht);
            }, onChange: (Bt) => kt(We, Bt), onRemove: () => Re(We) });
          }
        };
        R(At, (Ct) => {
          We === 0 ? Ct(jt) : Ct(pt, !1);
        }), b(Be, He);
      }), w(Fe), b(ie, Fe);
    };
    R(vt, (ie) => {
      D() && ie(Qt);
    });
    var an = E(vt, 2), Tn = (ie) => {
      {
        let Fe = g(() => Y(d()));
        Ti(ie, { get value() {
          return e(M);
        }, get min() {
          return e(Fe);
        }, onChange: (Be) => te(M, Be, !0) });
      }
    };
    R(an, (ie) => {
      D() && d().dealBarType === "quantity-break" && d().quantitySelector && ie(Tn);
    });
    var yt = E(an, 2), Ut = (ie) => {
      {
        let Fe = g(() => e(he).map((Be) => Be.variant.id));
        Ca(ie, { get product() {
          return h();
        }, get productPersonalisation() {
          return d().productPersonalisation;
        }, get selectedVariantIds() {
          return e(Fe);
        }, get quantity() {
          return e(he).length;
        }, get addPersonalisationModal() {
          return s().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return le();
        }, get initialValues() {
          return ee();
        } });
      }
    };
    R(yt, (ie) => {
      D() && d().productPersonalisation && (s().blockLayout === "vertical" || s().blockLayout === "plain") && ie(Ut);
    }), w(Pe);
    var Gt = E(Pe, 2);
    {
      let ie = g(() => d().upsells || []);
      Ka(Gt, { get dealBlock() {
        return s();
      }, get upsells() {
        return e(ie);
      }, get otherProducts() {
        return p();
      }, get complementaryProducts() {
        return I();
      }, get dealBarSelected() {
        return D();
      }, get dealSellingPlan() {
        return e(fe);
      }, onChange: (Fe) => {
        te(G, Fe, !0);
      } });
    }
    var on = E(Gt, 2);
    ti(on, { get selectedDealBarIndex() {
      return v();
    }, get onChange() {
      return N();
    }, get dealBlock() {
      return s();
    }, get dealBar() {
      return d();
    }, get otherProducts() {
      return p();
    }, get selected() {
      return D();
    }, get progressiveGifts() {
      return s().progressiveGifts;
    } });
    var xn = E(on, 2);
    {
      let ie = g(() => d().freeGifts || []);
      Ya(xn, { get dealBlock() {
        return s();
      }, get freeGifts() {
        return e(ie);
      }, get freeGiftsSummary() {
        return d().freeGiftsSummary;
      }, get otherProducts() {
        return p();
      }, get dealBarSelected() {
        return D();
      }, get sellingPlan() {
        return e(fe);
      }, onChange: (Fe) => {
        te(P, Fe, !0);
      } });
    }
    var cn = E(xn, 2);
    {
      let ie = g(() => d().multipleGiftsSelectors || []);
      ei(cn, { get dealBlock() {
        return s();
      }, get multipleGiftsSelectors() {
        return e(ie);
      }, get sellingPlan() {
        return e(fe);
      }, get otherProducts() {
        return p();
      }, onChange: (Fe) => {
        te(V, Fe, !0);
      } });
    }
    w(Mt);
    var un = E(Mt, 2), ke = (ie) => {
      Xa(ie, { get showAsSoldOut() {
        return d().showAsSoldOut;
      }, get replaceLiquid() {
        return e(de);
      } });
    };
    R(un, (ie) => {
      d().showAsSoldOutEnabled && d().showAsSoldOut && ie(ke);
    }), w(dt), be((ie, Fe) => {
      var Be;
      St = Tt(dt, 1, "kaching-bundles__bar", null, St, ie), xe(dt, "data-deal-bar-id", d().id), Wt(dt, e(ht)), xe(Ft, "name", `kaching-bundles-deal-${(Be = B()) != null ? Be : ""}`), ma(Ft, d().id), xe(Ft, "id", e(me)), Ci(Ft, D()), Ft.disabled = d().showAsSoldOutEnabled, xe(Mt, "for", e(me)), Et = Tt(Mt, 1, "kaching-bundles__bar-container", null, Et, Fe);
    }, [() => ({ "kaching-bundles__bar--selected": D() }), () => ({ "kaching-bundles__bar-container--sold-out": d().showAsSoldOutEnabled })]), b(n, dt);
    var Je = Ke(lt);
    return i(), Je;
  }
  Sn(["change"]), Ne(Nu, { dealBlock: {}, dealBar: {}, product: {}, collectionBreaksProducts: {}, otherProducts: {}, selectedDealBarIndex: {}, complementaryProducts: {}, customQuantity: {}, currentVariantId: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantSelect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {}, onProgressiveGiftsChange: {} }, [], [], !0);
  var js = {};
  (function n(t, r, a, l) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), u = typeof Path2D == "function" && typeof DOMMatrix == "function";
    function c() {
    }
    function i(z) {
      var P = r.exports.Promise, V = P !== void 0 ? P : t.Promise;
      return typeof V == "function" ? new V(z) : (z(c, c), null);
    }
    var s, d, h, f, p, v, I = /* @__PURE__ */ (function(z, P) {
      return { transform: function(V) {
        if (z) return V;
        if (P.has(V)) return P.get(V);
        var G = new OffscreenCanvas(V.width, V.height);
        return G.getContext("2d").drawImage(V, 0, 0), P.set(V, G), G;
      }, clear: function() {
        P.clear();
      } };
    })((function() {
      if (!t.OffscreenCanvas) return !1;
      try {
        var z = new OffscreenCanvas(1, 1), P = z.getContext("2d");
        P.fillRect(0, 0, 1, 1);
        var V = z.transferToImageBitmap();
        P.createPattern(V, "no-repeat");
      } catch {
        return !1;
      }
      return !0;
    })(), /* @__PURE__ */ new Map()), y = (h = Math.floor(1e3 / 60), f = {}, p = 0, typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (s = function(z) {
      var P = Math.random();
      return f[P] = requestAnimationFrame(function V(G) {
        p === G || p + h - 1 < G ? (p = G, delete f[P], z()) : f[P] = requestAnimationFrame(V);
      }), P;
    }, d = function(z) {
      f[z] && cancelAnimationFrame(f[z]);
    }) : (s = function(z) {
      return setTimeout(z, h);
    }, d = function(z) {
      return clearTimeout(z);
    }), { frame: s, cancel: d }), x = /* @__PURE__ */ (function() {
      var z, P, V = {};
      return function() {
        if (z) return z;
        if (!a && o) {
          var G = ["var CONFETTI, SIZE = {}, module = {};", "(" + n.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
          try {
            z = new Worker(URL.createObjectURL(new Blob([G])));
          } catch (U) {
            return typeof console != "undefined" && typeof console.warn == "function" && console.warn("🎊 Could not load worker", U), null;
          }
          (function(U) {
            function ce(W, _) {
              U.postMessage({ options: W || {}, callback: _ });
            }
            U.init = function(W) {
              var _ = W.transferControlToOffscreen();
              U.postMessage({ canvas: _ }, [_]);
            }, U.fire = function(W, _, T) {
              if (P) return ce(W, null), P;
              var M = Math.random().toString(36).slice(2);
              return P = i(function(L) {
                function Y(J) {
                  J.data.callback === M && (delete V[M], U.removeEventListener("message", Y), P = null, I.clear(), T(), L());
                }
                U.addEventListener("message", Y), ce(W, M), V[M] = Y.bind(null, { data: { callback: M } });
              });
            }, U.reset = function() {
              for (var W in U.postMessage({ reset: !0 }), V) V[W](), delete V[W];
            };
          })(z);
        }
        return z;
      };
    })(), B = { particleCount: 50, angle: 90, spread: 45, startVelocity: 45, decay: 0.9, gravity: 1, drift: 0, ticks: 200, x: 0.5, y: 0.5, shapes: ["square", "circle"], zIndex: 100, colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"], disableForReducedMotion: !1, scalar: 1 };
    function D(z, P, V) {
      return (function(G, U) {
        return U ? U(G) : G;
      })(z && z[P] != null ? z[P] : B[P], V);
    }
    function j(z) {
      return z < 0 ? 0 : Math.floor(z);
    }
    function C(z, P) {
      return Math.floor(Math.random() * (P - z)) + z;
    }
    function F(z) {
      return parseInt(z, 16);
    }
    function K(z) {
      return z.map(O);
    }
    function O(z) {
      var P = String(z).replace(/[^0-9a-f]/gi, "");
      return P.length < 6 && (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]), { r: F(P.substring(0, 2)), g: F(P.substring(2, 4)), b: F(P.substring(4, 6)) };
    }
    function le(z) {
      z.width = document.documentElement.clientWidth, z.height = document.documentElement.clientHeight;
    }
    function ee(z) {
      var P = z.getBoundingClientRect();
      z.width = P.width, z.height = P.height;
    }
    function N(z) {
      var P = z.angle * (Math.PI / 180), V = z.spread * (Math.PI / 180);
      return { x: z.x, y: z.y, wobble: 10 * Math.random(), wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05), velocity: 0.5 * z.startVelocity + Math.random() * z.startVelocity, angle2D: -P + (0.5 * V - Math.random() * V), tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI, color: z.color, shape: z.shape, tick: 0, totalTicks: z.ticks, decay: z.decay, drift: z.drift, random: Math.random() + 2, tiltSin: 0, tiltCos: 0, wobbleX: 0, wobbleY: 0, gravity: 3 * z.gravity, ovalScalar: 0.6, scalar: z.scalar, flat: z.flat };
    }
    function H(z, P) {
      P.x += Math.cos(P.angle2D) * P.velocity + P.drift, P.y += Math.sin(P.angle2D) * P.velocity + P.gravity, P.velocity *= P.decay, P.flat ? (P.wobble = 0, P.wobbleX = P.x + 10 * P.scalar, P.wobbleY = P.y + 10 * P.scalar, P.tiltSin = 0, P.tiltCos = 0, P.random = 1) : (P.wobble += P.wobbleSpeed, P.wobbleX = P.x + 10 * P.scalar * Math.cos(P.wobble), P.wobbleY = P.y + 10 * P.scalar * Math.sin(P.wobble), P.tiltAngle += 0.1, P.tiltSin = Math.sin(P.tiltAngle), P.tiltCos = Math.cos(P.tiltAngle), P.random = Math.random() + 2);
      var V = P.tick++ / P.totalTicks, G = P.x + P.random * P.tiltCos, U = P.y + P.random * P.tiltSin, ce = P.wobbleX + P.random * P.tiltCos, W = P.wobbleY + P.random * P.tiltSin;
      if (z.fillStyle = "rgba(" + P.color.r + ", " + P.color.g + ", " + P.color.b + ", " + (1 - V) + ")", z.beginPath(), u && P.shape.type === "path" && typeof P.shape.path == "string" && Array.isArray(P.shape.matrix)) z.fill((function(he, se, _e, Ge, pe, de, Se) {
        var Oe = new Path2D(he), Qe = new Path2D();
        Qe.addPath(Oe, new DOMMatrix(se));
        var we = new Path2D();
        return we.addPath(Qe, new DOMMatrix([Math.cos(Se) * pe, Math.sin(Se) * pe, -Math.sin(Se) * de, Math.cos(Se) * de, _e, Ge])), we;
      })(P.shape.path, P.shape.matrix, P.x, P.y, 0.1 * Math.abs(ce - G), 0.1 * Math.abs(W - U), Math.PI / 10 * P.wobble));
      else if (P.shape.type === "bitmap") {
        var _ = Math.PI / 10 * P.wobble, T = 0.1 * Math.abs(ce - G), M = 0.1 * Math.abs(W - U), L = P.shape.bitmap.width * P.scalar, Y = P.shape.bitmap.height * P.scalar, J = new DOMMatrix([Math.cos(_) * T, Math.sin(_) * T, -Math.sin(_) * M, Math.cos(_) * M, P.x, P.y]);
        J.multiplySelf(new DOMMatrix(P.shape.matrix));
        var q = z.createPattern(I.transform(P.shape.bitmap), "no-repeat");
        q.setTransform(J), z.globalAlpha = 1 - V, z.fillStyle = q, z.fillRect(P.x - L / 2, P.y - Y / 2, L, Y), z.globalAlpha = 1;
      } else if (P.shape === "circle") z.ellipse ? z.ellipse(P.x, P.y, Math.abs(ce - G) * P.ovalScalar, Math.abs(W - U) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI) : (function(he, se, _e, Ge, pe, de, Se, Oe, Qe) {
        he.save(), he.translate(se, _e), he.rotate(de), he.scale(Ge, pe), he.arc(0, 0, 1, Se, Oe, Qe), he.restore();
      })(z, P.x, P.y, Math.abs(ce - G) * P.ovalScalar, Math.abs(W - U) * P.ovalScalar, Math.PI / 10 * P.wobble, 0, 2 * Math.PI);
      else if (P.shape === "star") for (var A = Math.PI / 2 * 3, re = 4 * P.scalar, ne = 8 * P.scalar, ue = P.x, ae = P.y, fe = 5, Ce = Math.PI / fe; fe--; ) ue = P.x + Math.cos(A) * ne, ae = P.y + Math.sin(A) * ne, z.lineTo(ue, ae), A += Ce, ue = P.x + Math.cos(A) * re, ae = P.y + Math.sin(A) * re, z.lineTo(ue, ae), A += Ce;
      else z.moveTo(Math.floor(P.x), Math.floor(P.y)), z.lineTo(Math.floor(P.wobbleX), Math.floor(U)), z.lineTo(Math.floor(ce), Math.floor(W)), z.lineTo(Math.floor(G), Math.floor(P.wobbleY));
      return z.closePath(), z.fill(), P.tick < P.totalTicks;
    }
    function Q(z, P) {
      var V, G = !z, U = !!D(P || {}, "resize"), ce = !1, W = D(P, "disableForReducedMotion", Boolean), _ = o && D(P || {}, "useWorker") ? x() : null, T = G ? le : ee, M = !(!z || !_) && !!z.__confetti_initialized, L = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches;
      function Y(q, A, re) {
        for (var ne = D(q, "particleCount", j), ue = D(q, "angle", Number), ae = D(q, "spread", Number), fe = D(q, "startVelocity", Number), Ce = D(q, "decay", Number), he = D(q, "gravity", Number), se = D(q, "drift", Number), _e = D(q, "colors", K), Ge = D(q, "ticks", Number), pe = D(q, "shapes"), de = D(q, "scalar"), Se = !!D(q, "flat"), Oe = (function(ge) {
          var Ve = D(ge, "origin", Object);
          return Ve.x = D(Ve, "x", Number), Ve.y = D(Ve, "y", Number), Ve;
        })(q), Qe = ne, we = [], X = z.width * Oe.x, Ie = z.height * Oe.y; Qe--; ) we.push(N({ x: X, y: Ie, angle: ue, spread: ae, startVelocity: fe, color: _e[Qe % _e.length], shape: pe[C(0, pe.length)], ticks: Ge, decay: Ce, gravity: he, drift: se, scalar: de, flat: Se }));
        return V ? V.addFettis(we) : (V = (function(ge, Ve, me, Me, nt) {
          var ht, kt, Re = Ve.slice(), lt = ge.getContext("2d"), dt = i(function(St) {
            function Ft() {
              ht = kt = null, lt.clearRect(0, 0, Me.width, Me.height), I.clear(), nt(), St();
            }
            ht = y.frame(function Mt() {
              !a || Me.width === l.width && Me.height === l.height || (Me.width = ge.width = l.width, Me.height = ge.height = l.height), Me.width || Me.height || (me(ge), Me.width = ge.width, Me.height = ge.height), lt.clearRect(0, 0, Me.width, Me.height), (Re = Re.filter(function(Et) {
                return H(lt, Et);
              })).length ? ht = y.frame(Mt) : Ft();
            }), kt = Ft;
          });
          return { addFettis: function(St) {
            return Re = Re.concat(St), dt;
          }, canvas: ge, promise: dt, reset: function() {
            ht && y.cancel(ht), kt && kt();
          } };
        })(z, we, T, A, re), V.promise);
      }
      function J(q) {
        var A = W || D(q, "disableForReducedMotion", Boolean), re = D(q, "zIndex", Number);
        if (A && L) return i(function(fe) {
          fe();
        });
        G && V ? z = V.canvas : G && !z && (z = (function(fe) {
          var Ce = document.createElement("canvas");
          return Ce.style.position = "fixed", Ce.style.top = "0px", Ce.style.left = "0px", Ce.style.pointerEvents = "none", Ce.style.zIndex = fe, Ce;
        })(re), document.body.appendChild(z)), U && !M && T(z);
        var ne = { width: z.width, height: z.height };
        function ue() {
          if (_) {
            var fe = { getBoundingClientRect: function() {
              if (!G) return z.getBoundingClientRect();
            } };
            return T(fe), void _.postMessage({ resize: { width: fe.width, height: fe.height } });
          }
          ne.width = ne.height = null;
        }
        function ae() {
          V = null, U && (ce = !1, t.removeEventListener("resize", ue)), G && z && (document.body.contains(z) && document.body.removeChild(z), z = null, M = !1);
        }
        return _ && !M && _.init(z), M = !0, _ && (z.__confetti_initialized = !0), U && !ce && (ce = !0, t.addEventListener("resize", ue, !1)), _ ? _.fire(q, ne, ae) : Y(q, ne, ae);
      }
      return J.reset = function() {
        _ && _.reset(), V && V.reset();
      }, J;
    }
    function Z() {
      return v || (v = Q(null, { useWorker: !0, resize: !0 })), v;
    }
    r.exports = function() {
      return Z().apply(this, arguments);
    }, r.exports.reset = function() {
      Z().reset();
    }, r.exports.create = Q, r.exports.shapeFromPath = function(z) {
      if (!u) throw new Error("path confetti are not supported in this browser");
      var P, V;
      typeof z == "string" ? P = z : (P = z.path, V = z.matrix);
      var G = new Path2D(P), U = document.createElement("canvas").getContext("2d");
      if (!V) {
        for (var ce, W, _ = 1e3, T = _, M = _, L = 0, Y = 0, J = 0; J < _; J += 2) for (var q = 0; q < _; q += 2) U.isPointInPath(G, J, q, "nonzero") && (T = Math.min(T, J), M = Math.min(M, q), L = Math.max(L, J), Y = Math.max(Y, q));
        ce = L - T, W = Y - M;
        var A = Math.min(10 / ce, 10 / W);
        V = [A, 0, 0, A, -Math.round(ce / 2 + T) * A, -Math.round(W / 2 + M) * A];
      }
      return { type: "path", path: P, matrix: V };
    }, r.exports.shapeFromText = function(z) {
      var P, V = 1, G = "#000000", U = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof z == "string" ? P = z : (P = z.text, V = "scalar" in z ? z.scalar : V, U = "fontFamily" in z ? z.fontFamily : U, G = "color" in z ? z.color : G);
      var ce = 10 * V, W = ce + "px " + U, _ = new OffscreenCanvas(ce, ce), T = _.getContext("2d");
      T.font = W;
      var M = T.measureText(P), L = Math.ceil(M.actualBoundingBoxRight + M.actualBoundingBoxLeft), Y = Math.ceil(M.actualBoundingBoxAscent + M.actualBoundingBoxDescent), J = M.actualBoundingBoxLeft + 2, q = M.actualBoundingBoxAscent + 2;
      L += 4, Y += 4, (T = (_ = new OffscreenCanvas(L, Y)).getContext("2d")).font = W, T.fillStyle = G, T.fillText(P, J, q);
      var A = 1 / V;
      return { type: "bitmap", bitmap: _.transferToImageBitmap(), matrix: [A, 0, 0, A, -L * A / 2, -Y * A / 2] };
    };
  })(/* @__PURE__ */ (function() {
    return typeof window != "undefined" ? window : typeof self != "undefined" ? self : this || {};
  })(), js, !1);
  const Qv = js.exports;
  js.exports.create;
  var Wv = qn('<svg viewBox="0 0 361 163" fill="none" aria-hidden="true"><path class="kaching-bundles__scratch-off-hint-path" d="M22 113.859C23.9107 84.035 22.7293 20.8901 54.8299 45.9835C94.9555 77.3502 81.1193 164.847 101.209 103.575C108.48 64.2518 127.202 -4.91471 143.923 33.0046C164.824 80.4037 155.535 144.223 184.564 113.859C213.593 83.495 160.179 15.685 201.982 45.9835C243.784 76.2821 263.524 183.445 278.619 122.651C293.714 61.8562 268.168 7.24414 303.004 33.0046C337.839 58.765 330.872 64.2534 339 92.7687" stroke="white" stroke-opacity="0.7" stroke-width="44" stroke-linecap="round"></path></svg>');
  function Qu(n, t) {
    Ye(t, !0);
    let r = k(t, "hidden", 7);
    var a = { get hidden() {
      return r();
    }, set hidden(u) {
      r(u), m();
    } }, l = Wv();
    let o;
    return be((u) => o = Tt(l, 0, "kaching-bundles__scratch-off-hint", null, o, u), [() => ({ "kaching-bundles__scratch-off-hint--hidden": r() })]), b(n, l), Ke(a);
  }
  function Uv(n, t) {
    n.key !== "Enter" && n.key !== " " || (n.preventDefault(), t());
  }
  Ne(Qu, { hidden: {} }, [], [], !0);
  var Hv = $('<canvas role="button" tabindex="0"></canvas> <!> <div aria-hidden="true"> </div>', 1), Zv = $("<div><!> <!></div>");
  function Wu(n, t) {
    Ye(t, !0);
    const r = () => De(s, "$config", a), [a, l] = ft(), o = 317 / 361;
    let u = k(t, "settings", 7), c = k(t, "onReveal", 7), i = k(t, "children", 7);
    const s = gn(), d = It();
    let h = g(() => De(d, "$translate", a)(u().title)), f = Ae(at(r().preview && !r().previewScratchOff)), p = Ae(!1), v = Ae(void 0), I = Ae(!1), y = g(() => pn({ "scratch-off-title-color": je(u().titleColor), "scratch-off-title-size": `${u().titleSize}px` })), x = !1, B = null, D = null, j = 22, C = null, F = Ae(!1), K = Ae(!1);
    const O = new Image();
    O.src = "https://bundles-assets.kachingappz.app/widget/scratch-off-background-v2.webp", C = O, O.complete ? te(F, !0) : (O.addEventListener("load", () => {
      te(F, !0);
    }, { once: !0 }), O.addEventListener("error", () => {
      te(K, !0);
    }, { once: !0 }));
    let le = g(() => e(F) || e(K));
    function ee() {
      if (!e(v)) return;
      const L = e(v).getBoundingClientRect();
      if (L.width === 0 || L.height === 0) return;
      const Y = window.devicePixelRatio || 1;
      e(v).width = Math.floor(L.width * Y), e(v).height = Math.floor(L.height * Y);
      const J = e(v).getContext("2d");
      if (!J) return;
      J.scale(Y, Y), j = 44 * Math.min((L.width - 10) / 361, (L.height - 10) / 163, o) / 2, J.fillStyle = je(u().backgroundColor), J.fillRect(0, 0, L.width, L.height), e(F) && C && (J.globalAlpha = 0.6, J.drawImage(C, 0, 0, L.width, L.height), J.globalAlpha = 1), J.globalCompositeOperation = "destination-out";
    }
    function N(L) {
      if (!e(v)) return null;
      const Y = e(v).getBoundingClientRect();
      return { x: L.clientX - Y.left, y: L.clientY - Y.top };
    }
    function H(L) {
      var Y;
      e(f) || e(p) || (x = !0, te(I, !0), D === null && (D = setTimeout(P, 1500)), (Y = e(v)) == null || Y.setPointerCapture(L.pointerId), B = N(L), (function(J) {
        if (!e(v) || !J) return;
        const q = e(v).getContext("2d");
        q && (q.beginPath(), q.arc(J.x, J.y, j, 0, 2 * Math.PI), q.fill());
      })(B));
    }
    function Q(L) {
      if (!x || e(f) || e(p)) return;
      const Y = N(L);
      Y && B && ((function(J, q) {
        if (!e(v)) return;
        const A = e(v).getContext("2d");
        if (!A) return;
        const re = q.x - J.x, ne = q.y - J.y, ue = Math.hypot(re, ne), ae = Math.max(1, Math.ceil(ue / 4));
        for (let fe = 0; fe <= ae; fe++) {
          const Ce = fe / ae;
          A.beginPath(), A.arc(J.x + re * Ce, J.y + ne * Ce, j, 0, 2 * Math.PI), A.fill();
        }
      })(B, Y), B = Y);
    }
    function Z(L) {
      var Y;
      x = !1, (Y = e(v)) == null || Y.releasePointerCapture(L.pointerId), B = null, P();
    }
    function z() {
      D !== null && (clearTimeout(D), D = null);
    }
    function P() {
      var L;
      e(f) || e(p) || (z(), te(p, !0), (function() {
        if (!e(v)) return;
        const Y = e(v).getBoundingClientRect();
        Qv({ particleCount: 120, spread: 70, startVelocity: 45, origin: { x: (Y.left + Y.width / 2) / window.innerWidth, y: (Y.top + Y.height / 2) / window.innerHeight } });
      })(), (L = c()) == null || L(), setTimeout(() => {
        te(f, !0), te(p, !1);
      }, 300));
    }
    Ze(() => {
      if (e(le)) return;
      const L = setTimeout(() => {
        te(K, !0);
      }, 5e3);
      return () => clearTimeout(L);
    }), Ze(() => () => z()), Ze(() => {
      if (e(f) || e(p) || !e(v)) return;
      ee();
      const L = new ResizeObserver(() => {
        e(f) || e(p) || ee();
      });
      return L.observe(e(v)), () => L.disconnect();
    });
    let V = JSON.stringify(u());
    Ze(() => {
      const L = JSON.stringify(u());
      L !== V && (V = L, r().preview && r().previewScratchOff && (te(f, !1), te(p, !1), te(I, !1), z()));
    });
    var G = { get settings() {
      return u();
    }, set settings(L) {
      u(L), m();
    }, get onReveal() {
      return c();
    }, set onReveal(L) {
      c(L), m();
    }, get children() {
      return i();
    }, set children(L) {
      i(L), m();
    } }, U = Zv();
    let ce;
    var W = S(U);
    as(W, i);
    var _ = E(W, 2), T = (L) => {
      var Y = Hv(), J = ve(Y);
      let q;
      J.__pointerdown = H, J.__pointermove = Q, J.__pointerup = Z, J.__keydown = [Uv, P], ul(J, (ae) => te(v, ae), () => e(v));
      var A = E(J, 2);
      {
        let ae = g(() => e(I) || e(p));
        Qu(A, { get hidden() {
          return e(ae);
        } });
      }
      var re = E(A, 2);
      let ne;
      var ue = S(re, !0);
      w(re), be((ae, fe) => {
        q = Tt(J, 1, "kaching-bundles__scratch-off-canvas", null, q, ae), xe(J, "aria-label", e(h)), ne = Tt(re, 1, "kaching-bundles__scratch-off-title", null, ne, fe), bt(ue, e(h));
      }, [() => ({ "kaching-bundles__scratch-off-canvas--revealing": e(p) }), () => ({ "kaching-bundles__scratch-off-title--hidden": e(I) || e(p) })]), tc("pointercancel", J, Z), b(L, Y);
    };
    R(_, (L) => {
      e(f) || L(T);
    }), w(U), be((L) => {
      ce = Tt(U, 1, "kaching-bundles__scratch-off", null, ce, L), Wt(U, e(y));
    }, [() => ({ "kaching-bundles__scratch-off--unscratched": !e(f), "kaching-bundles__scratch-off--revealing": e(p), "kaching-bundles__scratch-off--loading": !e(f) && !e(le) })]), b(n, U);
    var M = Ke(G);
    return l(), M;
  }
  Sn(["pointerdown", "pointermove", "pointerup", "keydown"]), Ne(Wu, { settings: {}, onReveal: {}, children: {} }, [], [], !0);
  var Jv = $('<div class="kaching-bundles__bar-price"><!></div>'), Yv = $('<div class="kaching-bundles__bar-full-price"><!></div>'), Kv = $('<div class="kaching-bundles__bar-pricing"><!> <!></div>');
  function Bl(n, t) {
    Ye(t, !0);
    const r = () => De(i, "$translate", l), a = () => De(s, "$formatPrice", l), [l, o] = ft(), u = k(t, "discountedPrice", 7), c = k(t, "fullPrice", 7), i = It(), s = sn();
    var d = { get discountedPrice() {
      return u();
    }, set discountedPrice(y) {
      u(y), m();
    }, get fullPrice() {
      return c();
    }, set fullPrice(y) {
      c(y), m();
    } }, h = Kv(), f = S(h);
    et(f, u, (y) => {
      var x = Jv();
      Te(S(x), () => a()(u())), w(x), be((B) => xe(x, "data-a11y-label", B), [() => r()("system.price")]), b(y, x);
    });
    var p = E(f, 2), v = (y) => {
      var x = ze();
      et(ve(x), c, (B) => {
        var D = Yv();
        Te(S(D), () => a()(c())), w(D), be((j) => xe(D, "data-a11y-label", j), [() => r()("system.original_price")]), b(B, D);
      }), b(y, x);
    };
    R(p, (y) => {
      c() > u() && y(v);
    }), w(h), b(n, h);
    var I = Ke(d);
    return o(), I;
  }
  Ne(Bl, { discountedPrice: {}, fullPrice: {} }, [], [], !0);
  const ni = Or(null), Rs = (n) => pn({ "kaching-subscriptions-title-color": je(n.titleColor), "kaching-subscriptions-subtitle-color": je(n.subtitleColor), "kaching-subscriptions-title-font-size": n.titleSize + "px", "kaching-subscriptions-subtitle-font-size": n.subtitleSize + "px" });
  var Xv = $('<div class="kaching-bundles__bar-radio"></div>'), e_ = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), t_ = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), n_ = $('<div class="kaching-bundles__bar-variants"><!></div>'), r_ = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), a_ = $('<div class="kaching-bundles__bar-radio"></div>'), i_ = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), l_ = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), s_ = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div></div></div>'), o_ = $("<div></div>");
  function Uu(n, t) {
    Ye(t, !0);
    const r = () => De(ni, "$selectedDealBarStore", o), a = () => De(p, "$formatPrice", o), l = () => De(f, "$translate", o), [o, u] = ft(), c = k(t, "subscriptions", 7), i = k(t, "sellingPlans", 7), s = k(t, "selectedSellingPlan", 7), d = k(t, "hideSellingPlanSelector", 7, !1), h = k(t, "onChange", 7), f = It(), p = sn();
    let v = Ae(at(c().subscribeByDefault || s() ? "subscribe" : "one-time")), I = Ae(at(s() || i()[0])), y = Ae(!1), x = g(() => c().subscribeByDefault), B = g(() => e(x) ? ["subscribe", "one-time"] : ["one-time", "subscribe"]);
    const D = g(() => Rs(c())), j = g(() => {
      var V, G;
      const U = (G = (V = r()) == null ? void 0 : V.dealBar) == null ? void 0 : G.sellingPlanGid;
      if (U) return i().find((ce) => ce.id === Nt(U));
    }), C = g(() => {
      var V;
      return (V = e(j)) != null ? V : e(I);
    }), F = g(() => {
      var V, G, U, ce, W;
      return (W = (ce = (G = (V = r()) == null ? void 0 : V.pricing.discountedPricesForSellingPlans.find((_) => {
        var T;
        return _.sellingPlanId === ((T = e(C)) == null ? void 0 : T.id);
      })) == null ? void 0 : G.discountedPrice) != null ? ce : (U = r()) == null ? void 0 : U.pricing.discountedPrice) != null ? W : 0;
    }), K = g(() => {
      var V, G;
      return (G = (V = r()) == null ? void 0 : V.pricing.discountedPriceWithoutSellingPlan) != null ? G : 0;
    }), O = g(() => {
      var V, G;
      return (G = (V = r()) == null ? void 0 : V.pricing.fullPrice) != null ? G : 0;
    }), le = g(() => {
      var V, G, U;
      return hn({ priceFormatter: a(), product: (V = r()) == null ? void 0 : V.product, totalFullPrice: e(O), totalDiscountedPrice: e(F), quantity: (U = (G = r()) == null ? void 0 : G.quantity) != null ? U : 1, sellingPlan: e(C), unitQuantity: null });
    }), ee = g(() => {
      var V, G, U;
      return hn({ priceFormatter: a(), product: (V = r()) == null ? void 0 : V.product, totalFullPrice: e(O), totalDiscountedPrice: e(K), quantity: (U = (G = r()) == null ? void 0 : G.quantity) != null ? U : 1, unitQuantity: null });
    });
    function N(V) {
      te(y, !0), te(v, V, !0), h()(V === "subscribe" ? e(I) : void 0);
    }
    function H(V) {
      te(I, V, !0), e(v) === "subscribe" && h()(V);
    }
    _a(() => {
      e(v) === "subscribe" && h()(e(I));
    }), Ze(() => {
      if (s()) return te(I, s(), !0), void te(v, "subscribe");
      if (i().length === 0) return void te(v, "one-time");
      i().some((V) => {
        var G;
        return V.id === ((G = e(I)) == null ? void 0 : G.id);
      }) || te(I, i()[0], !0), e(y) || te(v, e(x) ? "subscribe" : "one-time", !0), h()(e(v) === "subscribe" ? e(I) : void 0);
    });
    var Q = { get subscriptions() {
      return c();
    }, set subscriptions(V) {
      c(V), m();
    }, get sellingPlans() {
      return i();
    }, set sellingPlans(V) {
      i(V), m();
    }, get selectedSellingPlan() {
      return s();
    }, set selectedSellingPlan(V) {
      s(V), m();
    }, get hideSellingPlanSelector() {
      return d();
    }, set hideSellingPlanSelector(V = !1) {
      d(V), m();
    }, get onChange() {
      return h();
    }, set onChange(V) {
      h(V), m();
    } }, Z = o_();
    let z;
    Yt(Z, 20, () => e(B), (V) => V, (V, G) => {
      var U = ze(), ce = ve(U), W = (T) => {
        {
          let M = g(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(v) === "subscribe" && "kaching-bundles__bar--selected"]);
          Rt(T, { element: "div", get class() {
            return e(M);
          }, onclick: () => N("subscribe"), children: (L, Y) => {
            var J = r_(), q = S(J), A = S(q), re = S(A), ne = (we) => {
              b(we, Xv());
            };
            R(re, (we) => {
              c().layout === "vertical" && we(ne);
            });
            var ue = E(re, 2), ae = S(ue), fe = S(ae), Ce = S(fe), he = (we) => {
              var X = e_();
              Te(S(X), () => e(le)(l()(c().subscribeTitle))), w(X), b(we, X);
            };
            R(Ce, (we) => {
              c().subscribeTitle && we(he);
            }), w(fe);
            var se = E(fe, 2), _e = (we) => {
              var X = t_();
              Te(S(X), () => e(le)(l()(c().subscribeSubtitle))), w(X), b(we, X);
            };
            R(se, (we) => {
              c().subscribeSubtitle && we(_e);
            }), w(ae);
            var Ge = E(ae, 2), pe = (we) => {
              Bl(we, { get discountedPrice() {
                return e(F);
              }, get fullPrice() {
                return e(O);
              } });
            };
            R(Ge, (we) => {
              c().showPrices && r() && we(pe);
            }), w(ue), w(A);
            var de = E(A, 2), Se = (we) => {
              {
                let X = g(() => e(v) === "subscribe");
                na(we, { get highlights() {
                  return c().highlights;
                }, get isSelected() {
                  return e(X);
                }, get replaceLiquid() {
                  return e(le);
                } });
              }
            };
            R(de, (we) => {
              c().highlights && we(Se);
            });
            var Oe = E(de, 2), Qe = (we) => {
              var X = n_();
              ta(S(X), { get sellingPlans() {
                return i();
              }, get selectedSellingPlan() {
                return e(I);
              }, onChange: H }), w(X), b(we, X);
            };
            R(Oe, (we) => {
              e(v) === "subscribe" && i().length > 1 && e(I) && !d() && we(Qe);
            }), w(q), w(J), b(L, J);
          }, $$slots: { default: !0 } });
        }
      }, _ = (T) => {
        {
          let M = g(() => ["kaching-bundles__bar", i().length === 0 && "kaching-bundles__bar--disabled", e(v) === "one-time" && "kaching-bundles__bar--selected"]);
          Rt(T, { element: "div", get class() {
            return e(M);
          }, onclick: () => N("one-time"), children: (L, Y) => {
            var J = s_(), q = S(J), A = S(q), re = S(A), ne = (de) => {
              b(de, a_());
            };
            R(re, (de) => {
              c().layout === "vertical" && de(ne);
            });
            var ue = E(re, 2), ae = S(ue), fe = S(ae), Ce = S(fe), he = (de) => {
              var Se = i_();
              Te(S(Se), () => e(ee)(l()(c().oneTimeTitle))), w(Se), b(de, Se);
            };
            R(Ce, (de) => {
              c().oneTimeTitle && de(he);
            }), w(fe);
            var se = E(fe, 2), _e = (de) => {
              var Se = l_();
              Te(S(Se), () => e(ee)(l()(c().oneTimeSubtitle))), w(Se), b(de, Se);
            };
            R(se, (de) => {
              c().oneTimeSubtitle && de(_e);
            }), w(ae);
            var Ge = E(ae, 2), pe = (de) => {
              Bl(de, { get discountedPrice() {
                return e(K);
              }, get fullPrice() {
                return e(O);
              } });
            };
            R(Ge, (de) => {
              c().showPrices && r() && de(pe);
            }), w(ue), w(A), w(q), w(J), b(L, J);
          }, $$slots: { default: !0 } });
        }
      };
      R(ce, (T) => {
        G === "subscribe" ? T(W) : T(_, !1);
      }), b(V, U);
    }), w(Z), be((V) => {
      z = Tt(Z, 1, "kaching-bundles__subscriptions kaching-bundles__bars", null, z, V), Wt(Z, e(D));
    }, [() => ({ "kaching-bundles__bars--horizontal": c().layout === "horizontal" })]), b(n, Z);
    var P = Ke(Q);
    return u(), P;
  }
  Ne(Uu, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var c_ = $('<div class="kaching-bundles__subscriptions__title"><!></div>'), u_ = $('<div class="kaching-bundles__subscriptions__subtitle"><!></div>'), d_ = $('<div class="kaching-bundles__bar-variants"><!></div>'), g_ = $('<div class="kaching-bundles__subscriptions__card kaching-bundles__bar-container"><div class="kaching-bundles__bar-wrapper"><div class="kaching-bundles__bar-main"><span class="kaching-bundles__subscriptions__checkbox"><!></span> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div> <!></div></div> <!> <!></div></div>'), h_ = $('<div class="kaching-bundles__subscriptions kaching-bundles__bars kaching-bundles__subscriptions--checkbox"><!></div>');
  function Hu(n, t) {
    Ye(t, !0);
    const r = () => De(ni, "$selectedDealBarStore", l), a = () => De(h, "$translate", l), [l, o] = ft(), u = k(t, "subscriptions", 7), c = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), s = k(t, "hideSellingPlanSelector", 7, !1), d = k(t, "onChange", 7), h = It(), f = sn();
    let p = Ae(at(u().subscribeByDefault || !!i())), v = Ae(at(i() || c()[0])), I = Ae(!1);
    const y = g(() => Rs(u())), x = g(() => {
      var N, H;
      const Q = (H = (N = r()) == null ? void 0 : N.dealBar) == null ? void 0 : H.sellingPlanGid;
      if (Q) return c().find((Z) => Z.id === Nt(Q));
    }), B = g(() => {
      var N;
      return (N = e(x)) != null ? N : e(v);
    }), D = g(() => {
      var N, H, Q, Z, z;
      return (z = (Z = (H = (N = r()) == null ? void 0 : N.pricing.discountedPricesForSellingPlans.find((P) => {
        var V;
        return P.sellingPlanId === ((V = e(B)) == null ? void 0 : V.id);
      })) == null ? void 0 : H.discountedPrice) != null ? Z : (Q = r()) == null ? void 0 : Q.pricing.discountedPrice) != null ? z : 0;
    }), j = g(() => {
      var N, H;
      return (H = (N = r()) == null ? void 0 : N.pricing.fullPrice) != null ? H : 0;
    }), C = g(() => {
      var N, H, Q;
      return hn({ priceFormatter: De(f, "$formatPrice", l), product: (N = r()) == null ? void 0 : N.product, totalFullPrice: e(j), totalDiscountedPrice: e(D), quantity: (Q = (H = r()) == null ? void 0 : H.quantity) != null ? Q : 1, sellingPlan: e(B), unitQuantity: null });
    });
    function F(N) {
      te(v, N, !0), d()(N);
    }
    Ze(() => {
      if (i()) return te(v, i(), !0), void te(p, !0);
      if (c().length === 0) return void te(p, !1);
      e(v) && c().some((N) => N.id === e(v).id) || te(v, c()[0], !0), e(I) || te(p, u().subscribeByDefault, !0), d()(e(p) ? e(v) : void 0);
    }), _a(() => {
      e(p) && d()(e(v));
    });
    var K = { get subscriptions() {
      return u();
    }, set subscriptions(N) {
      u(N), m();
    }, get sellingPlans() {
      return c();
    }, set sellingPlans(N) {
      c(N), m();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(N) {
      i(N), m();
    }, get hideSellingPlanSelector() {
      return s();
    }, set hideSellingPlanSelector(N = !1) {
      s(N), m();
    }, get onChange() {
      return d();
    }, set onChange(N) {
      d(N), m();
    } }, O = h_(), le = S(O);
    {
      let N = g(() => ["kaching-bundles__bar", c().length === 0 && "kaching-bundles__bar--disabled"]);
      Rt(le, { element: "div", get class() {
        return e(N);
      }, role: "checkbox", get "aria-checked"() {
        return e(p);
      }, onclick: function() {
        te(I, !0), te(p, !e(p)), d()(e(p) ? e(v) : void 0);
      }, children: (H, Q) => {
        var Z = g_(), z = S(Z), P = S(z), V = S(P), G = S(V), U = (ae) => {
          Sl(ae);
        };
        R(G, (ae) => {
          e(p) && ae(U);
        }), w(V);
        var ce = E(V, 2), W = S(ce), _ = S(W), T = S(_), M = (ae) => {
          var fe = c_();
          Te(S(fe), () => e(C)(a()(u().subscribeTitle))), w(fe), b(ae, fe);
        };
        R(T, (ae) => {
          u().subscribeTitle && ae(M);
        }), w(_);
        var L = E(_, 2), Y = (ae) => {
          var fe = u_();
          Te(S(fe), () => e(C)(a()(u().subscribeSubtitle))), w(fe), b(ae, fe);
        };
        R(L, (ae) => {
          u().subscribeSubtitle && ae(Y);
        }), w(W);
        var J = E(W, 2), q = (ae) => {
          Bl(ae, { get discountedPrice() {
            return e(D);
          }, get fullPrice() {
            return e(j);
          } });
        };
        R(J, (ae) => {
          u().showPrices && r() && ae(q);
        }), w(ce), w(P);
        var A = E(P, 2), re = (ae) => {
          na(ae, { get highlights() {
            return u().highlights;
          }, get isSelected() {
            return e(p);
          }, get replaceLiquid() {
            return e(C);
          } });
        };
        R(A, (ae) => {
          u().highlights && ae(re);
        });
        var ne = E(A, 2), ue = (ae) => {
          var fe = d_();
          ta(S(fe), { get sellingPlans() {
            return c();
          }, get selectedSellingPlan() {
            return e(v);
          }, onChange: F }), w(fe), b(ae, fe);
        };
        R(ne, (ae) => {
          e(p) && c().length > 1 && e(v) && !s() && ae(ue);
        }), w(z), w(Z), b(H, Z);
      }, $$slots: { default: !0 } });
    }
    w(O), be(() => Wt(O, e(y))), b(n, O);
    var ee = Ke(K);
    return o(), ee;
  }
  function p_(n, t, r, a) {
    t()(r().subscribeByDefault ? void 0 : e(a));
  }
  Ne(Hu, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {} }, [], [], !0);
  var f_ = $('<div class="kaching-bundles__subscriptions kaching-bundles__subscriptions--link"><button type="button" class="kaching-bundles__subscriptions__link"><!><!></button></div>');
  function Zu(n, t) {
    Ye(t, !0);
    const r = () => De(ni, "$selectedDealBarStore", l), a = () => De(f, "$formatPrice", l), [l, o] = ft(), u = k(t, "subscriptions", 7), c = k(t, "sellingPlans", 7), i = k(t, "selectedSellingPlan", 7), s = k(t, "onChange", 7), d = k(t, "onRequestAddToCart", 7), h = It(), f = sn(), p = g(() => Rs(u())), v = g(() => {
      var Q, Z;
      const z = (Z = (Q = r()) == null ? void 0 : Q.dealBar) == null ? void 0 : Z.sellingPlanGid;
      if (z) return c().find((P) => P.id === Nt(z));
    }), I = g(() => {
      var Q, Z;
      return (Z = (Q = e(v)) != null ? Q : i()) != null ? Z : c()[0];
    }), y = g(() => {
      var Q, Z, z, P, V;
      return (V = (P = (Z = (Q = r()) == null ? void 0 : Q.pricing.discountedPricesForSellingPlans.find((G) => {
        var U;
        return G.sellingPlanId === ((U = e(I)) == null ? void 0 : U.id);
      })) == null ? void 0 : Z.discountedPrice) != null ? P : (z = r()) == null ? void 0 : z.pricing.discountedPrice) != null ? V : 0;
    }), x = g(() => {
      var Q, Z;
      return (Z = (Q = r()) == null ? void 0 : Q.pricing.discountedPriceWithoutSellingPlan) != null ? Z : 0;
    }), B = g(() => {
      var Q, Z;
      return (Z = (Q = r()) == null ? void 0 : Q.pricing.fullPrice) != null ? Z : 0;
    }), D = g(() => {
      var Q, Z, z;
      return hn({ priceFormatter: a(), product: (Q = r()) == null ? void 0 : Q.product, totalFullPrice: e(B), totalDiscountedPrice: u().subscribeByDefault ? e(x) : e(y), quantity: (z = (Z = r()) == null ? void 0 : Z.quantity) != null ? z : 1, sellingPlan: u().subscribeByDefault ? void 0 : e(I), unitQuantity: null });
    }), j = g(() => u().subscribeByDefault ? e(x) : e(y)), C = g(() => {
      const Q = u().subscribeByDefault ? u().oneTimeTitle : u().subscribeTitle;
      return Q ? e(D)(De(h, "$translate", l)(Q)) : "";
    });
    let F, K = !1;
    Ze(() => {
      const Q = c().length !== 0 && u().subscribeByDefault ? e(I) : void 0;
      K && (Q == null ? void 0 : Q.id) === F || (F = Q == null ? void 0 : Q.id, K = !0, s()(Q));
    });
    var O = { get subscriptions() {
      return u();
    }, set subscriptions(Q) {
      u(Q), m();
    }, get sellingPlans() {
      return c();
    }, set sellingPlans(Q) {
      c(Q), m();
    }, get selectedSellingPlan() {
      return i();
    }, set selectedSellingPlan(Q) {
      i(Q), m();
    }, get onChange() {
      return s();
    }, set onChange(Q) {
      s(Q), m();
    }, get onRequestAddToCart() {
      return d();
    }, set onRequestAddToCart(Q) {
      d(Q), m();
    } }, le = ze(), ee = ve(le), N = (Q) => {
      var Z = f_(), z = S(Z);
      z.__click = [p_, d, u, I];
      var P = S(z);
      Te(P, () => e(C));
      var V = E(P), G = (U) => {
        var ce = Mn();
        be((W) => bt(ce, W), [() => " • " + a()(e(j))]), b(U, ce);
      };
      R(V, (U) => {
        u().showPrices && r() && U(G);
      }), w(z), w(Z), be(() => Wt(Z, e(p))), b(Q, Z);
    };
    R(ee, (Q) => {
      c().length > 0 && e(C) && Q(N);
    }), b(n, le);
    var H = Ke(O);
    return o(), H;
  }
  Sn(["click"]), Ne(Zu, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var b_ = $('<div class="kaching-bundles__block-title"><!></div>'), v_ = $("<!> <!>", 1);
  function Ns(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "subscriptions", 7), o = k(t, "sellingPlans", 7), u = k(t, "selectedSellingPlan", 7), c = k(t, "hideSellingPlanSelector", 7, !1), i = k(t, "onChange", 7), s = k(t, "onRequestAddToCart", 7), d = It(), h = g(() => l().title ? De(d, "$translate", r)(l().title) : "");
    var f = { get subscriptions() {
      return l();
    }, set subscriptions(j) {
      l(j), m();
    }, get sellingPlans() {
      return o();
    }, set sellingPlans(j) {
      o(j), m();
    }, get selectedSellingPlan() {
      return u();
    }, set selectedSellingPlan(j) {
      u(j), m();
    }, get hideSellingPlanSelector() {
      return c();
    }, set hideSellingPlanSelector(j = !1) {
      c(j), m();
    }, get onChange() {
      return i();
    }, set onChange(j) {
      i(j), m();
    }, get onRequestAddToCart() {
      return s();
    }, set onRequestAddToCart(j) {
      s(j), m();
    } }, p = v_(), v = ve(p), I = (j) => {
      var C = b_();
      Te(S(C), () => e(h)), w(C), b(j, C);
    };
    R(v, (j) => {
      e(h) && j(I);
    });
    var y = E(v, 2), x = (j) => {
      Hu(j, { get subscriptions() {
        return l();
      }, get sellingPlans() {
        return o();
      }, get selectedSellingPlan() {
        return u();
      }, get hideSellingPlanSelector() {
        return c();
      }, get onChange() {
        return i();
      } });
    }, B = (j) => {
      var C = ze(), F = ve(C), K = (le) => {
        Zu(le, { get subscriptions() {
          return l();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return u();
        }, get onChange() {
          return i();
        }, get onRequestAddToCart() {
          return s();
        } });
      }, O = (le) => {
        Uu(le, { get subscriptions() {
          return l();
        }, get sellingPlans() {
          return o();
        }, get selectedSellingPlan() {
          return u();
        }, get hideSellingPlanSelector() {
          return c();
        }, get onChange() {
          return i();
        } });
      };
      R(F, (le) => {
        l().layout === "link" ? le(K) : le(O, !1);
      }, !0), b(j, C);
    };
    R(y, (j) => {
      l().layout === "checkbox" ? j(x) : j(B, !1);
    }), b(n, p);
    var D = Ke(f);
    return a(), D;
  }
  Ne(Ns, { subscriptions: {}, sellingPlans: {}, selectedSellingPlan: {}, hideSellingPlanSelector: {}, onChange: {}, onRequestAddToCart: {} }, [], [], !0);
  var __ = qn('<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.584 21H42.834V14C42.834 6.279 36.555 0 28.834 0C21.113 0 14.834 6.279 14.834 14V21H13.084C10.1907 21 7.83398 23.3543 7.83398 26.25V50.75C7.83398 53.6457 10.1907 56 13.084 56H44.584C47.4773 56 49.834 53.6457 49.834 50.75V26.25C49.834 23.3543 47.4773 21 44.584 21ZM19.5007 14C19.5007 8.85267 23.6867 4.66667 28.834 4.66667C33.9813 4.66667 38.1673 8.85267 38.1673 14V21H19.5007V14ZM31.1673 39.018V44.3333C31.1673 45.6213 30.1243 46.6667 28.834 46.6667C27.5436 46.6667 26.5007 45.6213 26.5007 44.3333V39.018C25.1123 38.2083 24.1673 36.7197 24.1673 35C24.1673 32.4263 26.2603 30.3333 28.834 30.3333C31.4076 30.3333 33.5007 32.4263 33.5007 35C33.5007 36.7197 32.5557 38.2083 31.1673 39.018Z" fill="currentColor" transform="translate(21.5, 22)"></path></svg>');
  function Ju(n) {
    b(n, __());
  }
  Ne(Ju, {}, [], [], !0);
  var m_ = $('<img alt="Locked" class="kaching-bundles__progressive-gifts__gift__image"/>'), k_ = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), y_ = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), x_ = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), w_ = $('<div class="kaching-bundles__progressive-gifts__gift__content"><div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><!></div> <div class="kaching-bundles__progressive-gifts__gift__title kaching-bundles__progressive-gifts__gift__title--locked"><!></div> <!></div>'), P_ = $('<div class="kaching-bundles__progressive-gifts__gift__image-wrapper"><img class="kaching-bundles__progressive-gifts__gift__image"/></div>'), S_ = $('<span class="kaching-bundles__progressive-gifts__gift__title"><!></span>'), C_ = $('<span class="kaching-bundles__progressive-gifts__gift__label__text"><!></span>'), B_ = $('<span class="kaching-bundles__progressive-gifts__gift__label__text kaching-bundles__progressive-gifts__gift__label__text--crossed-out"><!></span>'), I_ = $('<div class="kaching-bundles__progressive-gifts__gift__label"><!> <!></div>'), M_ = $('<div><div class="kaching-bundles__progressive-gifts__gift__content"><!> <div class="kaching-bundles__progressive-gifts__gift__details"><div class="kaching-bundles__progressive-gifts__gift__details__content"><!> <!></div> <!></div></div></div>');
  function Yu(n, t) {
    Ye(t, !0);
    const r = () => De(y, "$config", o), a = () => De(p, "$translate", o), l = () => De(I, "$getMediaImageUrl", o), [o, u] = ft(), c = k(t, "progressiveGifts", 7), i = k(t, "gift", 7), s = k(t, "product", 7), d = k(t, "selectedDealBarIndex", 7), h = k(t, "onChange", 7), f = k(t, "onUnlock", 7), p = It(), v = sn(), I = Dn(), y = gn(), x = g(() => i().differentVariantsEnabled), B = g(() => {
      var _;
      return s() ? i().variantGIDs ? i().variantGIDs.map(Nt) : (_ = s()) == null ? void 0 : _.variants.map((T) => T.id) : null;
    }), D = g(() => {
      if (s()) return { ...s(), variants: s().variants.filter((_) => (r().preview || _.availableForSale) && (!e(B) || e(B).includes(_.id))) };
    });
    let j = Ae(at([]));
    const C = g(() => (function(_, T, M) {
      return _.length > 0 ? _ : T != null && T.availableForSale && T.variants.length > 0 ? Array.from({ length: M }, () => T.variants[0].id) : [];
    })(e(j), e(D), i().quantity)), F = g(() => s() && e(C).length > 0 ? e(C).map((_) => s().variants.find((T) => T.id === _)).filter((_) => _ !== void 0) : []), K = g(() => {
      var _;
      return hn({ priceFormatter: De(v, "$formatPrice", o), product: s(), totalFullPrice: ((_ = e(F)) == null ? void 0 : _.reduce((T, M) => {
        var L;
        return T + ((L = M == null ? void 0 : M.price) != null ? L : 0);
      }, 0)) || 0, totalDiscountedPrice: 0, quantity: i().quantity, unitQuantity: nr(e(F).map((T) => ({ variant: T, quantity: 1 }))) });
    }), O = g(() => e(K)(a()(i().title))), le = g(() => e(K)(a()(i().lockedTitle))), ee = g(() => e(K)(a()(i().label))), N = g(() => e(K)(a()(i().labelCrossedOut))), H = g(() => d() === null || i().unlockAtBar > d() + 1), Q = g(() => {
      var _, T, M;
      return i().giftType === "shipping" ? Ms : ((T = (_ = e(F)) == null ? void 0 : _[0]) == null ? void 0 : T.image) || ((M = s()) == null ? void 0 : M.image);
    }), Z = g(() => i().mediaImageGID ? l()(i().mediaImageGID) : e(Q)), z = g(() => !c().inheritStyle && c().style && l()(c().style.lockedMediaImageGID));
    Ze(() => {
      if (s() && e(F) && !e(H)) {
        const _ = Object.values(e(F).reduce((T, M) => (T[M.id] ? T[M.id].quantity += 1 : T[M.id] = { variant: M, quantity: 1 }, T), {}));
        tn(() => h()({ product: s(), variants: _ }));
      } else tn(() => h()(void 0));
    }), Jn(() => {
      i().productGID;
    }), Ze(() => {
      e(H) && e(Z) && (new Image().src = e(Z));
    });
    const P = g(() => !(i().giftType !== "product" || !s() || s().availableForSale && s().variants.filter((_) => _.availableForSale && (!e(B) || e(B).includes(_.id))).length !== 0));
    var V = { get progressiveGifts() {
      return c();
    }, set progressiveGifts(_) {
      c(_), m();
    }, get gift() {
      return i();
    }, set gift(_) {
      i(_), m();
    }, get product() {
      return s();
    }, set product(_) {
      s(_), m();
    }, get selectedDealBarIndex() {
      return d();
    }, set selectedDealBarIndex(_) {
      d(_), m();
    }, get onChange() {
      return h();
    }, set onChange(_) {
      h(_), m();
    }, get onUnlock() {
      return f();
    }, set onUnlock(_) {
      f(_), m();
    } }, G = ze(), U = ve(G), ce = (_) => {
      var T = ze(), M = ve(T), L = (Y) => {
        var J = ze(), q = ve(J), A = (ne) => {
          Rt(ne, { element: "div", class: "kaching-bundles__progressive-gifts__gift kaching-bundles__progressive-gifts__gift--locked", get onclick() {
            return f();
          }, children: (ue, ae) => {
            var fe = w_(), Ce = S(fe), he = S(Ce), se = (Se) => {
              var Oe = m_();
              be(() => xe(Oe, "src", e(z))), b(Se, Oe);
            }, _e = (Se) => {
              Ju(Se);
            };
            R(he, (Se) => {
              e(z) ? Se(se) : Se(_e, !1);
            }), w(Ce);
            var Ge = E(Ce, 2);
            Te(S(Ge), () => e(le)), w(Ge);
            var pe = E(Ge, 2), de = (Se) => {
              var Oe = x_(), Qe = S(Oe), we = (ge) => {
                var Ve = k_();
                Te(S(Ve), () => e(ee)), w(Ve), b(ge, Ve);
              };
              R(Qe, (ge) => {
                e(ee) && ge(we);
              });
              var X = E(Qe, 2), Ie = (ge) => {
                var Ve = y_();
                Te(S(Ve), () => e(N)), w(Ve), b(ge, Ve);
              };
              R(X, (ge) => {
                e(N) && ge(Ie);
              }), w(Oe), b(Se, Oe);
            };
            R(pe, (Se) => {
              (e(ee) || e(N)) && c().showLockedGiftLabels && Se(de);
            }), w(fe), b(ue, fe);
          }, $$slots: { default: !0 } });
        }, re = (ne) => {
          var ue = M_();
          let ae;
          var fe = S(ue), Ce = S(fe), he = (we) => {
            var X = P_(), Ie = S(X);
            w(X), be(() => {
              var ge, Ve;
              xe(Ie, "src", e(Z)), xe(Ie, "alt", (Ve = (ge = s()) == null ? void 0 : ge.title) != null ? Ve : "");
            }), b(we, X);
          };
          R(Ce, (we) => {
            e(Z) && we(he);
          });
          var se = E(Ce, 2), _e = S(se), Ge = S(_e), pe = (we) => {
            var X = S_();
            Te(S(X), () => e(O)), w(X), b(we, X);
          };
          R(Ge, (we) => {
            e(O) && we(pe);
          });
          var de = E(Ge, 2), Se = (we) => {
            var X = I_(), Ie = S(X), ge = (Me) => {
              var nt = C_();
              Te(S(nt), () => e(ee)), w(nt), b(Me, nt);
            };
            R(Ie, (Me) => {
              e(ee) && Me(ge);
            });
            var Ve = E(Ie, 2), me = (Me) => {
              var nt = B_();
              Te(S(nt), () => e(N)), w(nt), b(Me, nt);
            };
            R(Ve, (Me) => {
              e(N) && Me(me);
            }), w(X), b(we, X);
          };
          R(de, (we) => {
            (e(ee) || e(N)) && we(Se);
          }), w(_e);
          var Oe = E(_e, 2), Qe = (we) => {
            var X = ze();
            Yt(ve(X), 17, () => ({ length: e(x) ? i().quantity : 1 }), Tr, (Ie, ge, Ve) => {
              var me = ze(), Me = ve(me), nt = (ht) => {
                {
                  let kt = g(() => e(x) ? Ve + 1 : void 0);
                  zn(ht, { get product() {
                    return e(D);
                  }, get selectedVariantId() {
                    return e(C)[Ve];
                  }, get number() {
                    return e(kt);
                  }, forceDropdown: !0, onChange: (Re) => (function(lt, dt) {
                    e(x) ? te(j, [...e(C).slice(0, dt), lt, ...e(C).slice(dt + 1)], !0) : te(j, Array.from({ length: i().quantity }, () => lt), !0);
                  })(Re, Ve) });
                }
              };
              R(Me, (ht) => {
                e(C)[Ve] !== void 0 && ht(nt);
              }), b(Ie, me);
            }), b(we, X);
          };
          R(Oe, (we) => {
            e(D) && e(D).variants.length > 1 && e(C).length > 0 && we(Qe);
          }), w(se), w(fe), w(ue), be((we) => ae = Tt(ue, 1, "kaching-bundles__progressive-gifts__gift", null, ae, we), [() => ({ "kaching-bundles__progressive-gifts__gift--out-of-stock": r().preview && e(P) })]), b(ne, ue);
        };
        R(q, (ne) => {
          e(H) ? ne(A) : ne(re, !1);
        }), b(Y, J);
      };
      R(M, (Y) => {
        var J;
        (s() && ((J = e(F)) != null && J.length || r().preview && e(P)) || i().giftType === "shipping") && Y(L);
      }), b(_, T);
    };
    R(U, (_) => {
      e(H) && c().hideLockedGifts || _(ce);
    }), b(n, G);
    var W = Ke(V);
    return u(), W;
  }
  Ne(Yu, { progressiveGifts: {}, gift: {}, product: {}, selectedDealBarIndex: {}, onChange: {}, onUnlock: {} }, [], [], !0);
  var D_ = $('<span class="kaching-bundles__progressive-gifts__title"><!></span>'), z_ = $('<span class="kaching-bundles__progressive-gifts__subtitle"><!></span>'), $_ = $('<div class="kaching-bundles__progressive-gifts"><div class="kaching-bundles__progressive-gifts__header"><!> <!></div> <div></div></div>');
  function Ku(n, t) {
    Ye(t, !0);
    const r = () => De(p, "$config", l), a = () => De(f, "$translate", l), [l, o] = ft(), u = k(t, "progressiveGifts", 7), c = k(t, "dealBlock", 7), i = k(t, "otherProducts", 7), s = k(t, "selectedDealBarIndex", 7), d = k(t, "onChange", 7), h = k(t, "onUnlock", 7), f = It(), p = gn();
    let v = Ae(at({}));
    const I = g(() => ((N) => {
      const { progressiveGifts: H, colors: Q, fonts: Z } = N, z = (H == null ? void 0 : H.inheritStyle) || !(H != null && H.style);
      return pn({ "kaching-bundles-progressive-gifts-title-color": je(H.titleColor), "kaching-bundles-progressive-gifts-title-alignment": H.titleAlignment, "kaching-bundles-progressive-gifts-title-size": H.titleSize + "px", "kaching-bundles-progressive-gifts-title-weight": Xn(H.titleStyle), "kaching-bundles-progressive-gifts-title-style": er(H.titleStyle), "kaching-bundles-progressive-gifts-subtitle-color": je(H.subtitleColor), "kaching-bundles-progressive-gifts-subtitle-alignment": H.subtitleAlignment, "kaching-bundles-progressive-gifts-subtitle-size": H.subtitleSize + "px", "kaching-bundles-progressive-gifts-subtitle-weight": Xn(H.subtitleStyle), "kaching-bundles-progressive-gifts-subtitle-style": er(H.subtitleStyle), "kaching-bundles-progressive-gifts-image-size": z ? void 0 : H.style.imageSize + "px", "kaching-bundles-progressive-gifts-border-radius": (z ? N.cornerRadius : H.style.cornerRadius) + "px", "kaching-bundles-progressive-gifts-label-background-color": je(z ? Q.progressiveGiftsLabelBackground || Q.labelBackground : H.style.labelBackgroundColor), "kaching-bundles-progressive-gifts-label-text-color": je(z ? Q.label : H.style.labelTextColor), "kaching-bundles-progressive-gifts-label-text-size": (z ? Z.label.size : H.style.labelTextSize) + "px", "kaching-bundles-progressive-gifts-background-color": je(z ? Q.selectedBackground : H.style.backgroundColor), "kaching-bundles-progressive-gifts-border-color": je(z ? Q.border : H.style.borderColor), "kaching-bundles-progressive-gifts-text-color": je(z ? Q.title : H.style.textColor), "kaching-bundles-progressive-gifts-text-size": z ? void 0 : H.style.textSize + "px", "kaching-bundles-progressive-gifts-locked-background-color": je(z ? Q.background : H.style.lockedBackgroundColor), "kaching-bundles-progressive-gifts-locked-border-color": je(z ? { ...Q.border, alpha: 0.3 * Q.border.alpha } : H.style.lockedBorderColor), "kaching-bundles-progressive-gifts-locked-text-color": z ? void 0 : je(H.style.lockedTextColor), "kaching-bundles-progressive-gifts-locked-text-size": z ? void 0 : H.style.lockedTextSize + "px", "kaching-bundles-progressive-gifts-locked-icon-color": z ? void 0 : je(H.style.lockedIconColor) });
    })(c())), y = g(() => u().gifts.flatMap((N) => {
      const H = N.giftType === "product" && N.productGID ? i().find((Z) => Z.id === Nt(N.productGID)) : void 0;
      if (!r().preview && N.giftType === "product" && !(H != null && H.availableForSale)) return [];
      const Q = H && !r().preview ? tr(H) : H;
      return { gift: N, product: Q };
    }));
    var x = { get progressiveGifts() {
      return u();
    }, set progressiveGifts(N) {
      u(N), m();
    }, get dealBlock() {
      return c();
    }, set dealBlock(N) {
      c(N), m();
    }, get otherProducts() {
      return i();
    }, set otherProducts(N) {
      i(N), m();
    }, get selectedDealBarIndex() {
      return s();
    }, set selectedDealBarIndex(N) {
      s(N), m();
    }, get onChange() {
      return d();
    }, set onChange(N) {
      d(N), m();
    }, get onUnlock() {
      return h();
    }, set onUnlock(N) {
      h(N), m();
    } }, B = $_(), D = S(B), j = S(D), C = (N) => {
      var H = D_();
      Te(S(H), () => a()(u().title)), w(H), b(N, H);
    };
    R(j, (N) => {
      u().title && N(C);
    });
    var F = E(j, 2), K = (N) => {
      var H = z_();
      Te(S(H), () => a()(u().subtitle)), w(H), b(N, H);
    };
    R(F, (N) => {
      u().subtitle && N(K);
    }), w(D);
    var O = E(D, 2);
    let le;
    Yt(O, 21, () => e(y), ({ gift: N, product: H }) => N.id, (N, H) => {
      let Q = () => e(H).gift;
      Yu(N, { get progressiveGifts() {
        return u();
      }, get gift() {
        return Q();
      }, get product() {
        return e(H).product;
      }, get selectedDealBarIndex() {
        return s();
      }, onChange: (Z) => (function(z, P) {
        P ? e(v)[z] = P : delete e(v)[z];
        const V = Object.entries(e(v)).map(([G, U]) => ({ id: G, variants: U.variants, product: U.product }));
        d()(V);
      })(Q().id, Z), onUnlock: () => h()(Q().unlockAtBar - 1) });
    }), w(O), w(B), be((N) => {
      Wt(B, e(I)), le = Tt(O, 1, "kaching-bundles__progressive-gifts__gifts", null, le, N);
    }, [() => ({ "kaching-bundles__progressive-gifts__gifts--vertical": u().layout === "vertical" })]), b(n, B);
    var ee = Ke(x);
    return o(), ee;
  }
  Ne(Ku, { progressiveGifts: {}, dealBlock: {}, otherProducts: {}, selectedDealBarIndex: {}, onChange: {}, onUnlock: {} }, [], [], !0);
  var A_ = $('<span class="kaching-bundles__bar-title"><!></span>'), q_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), V_ = $('<div class="kaching-bundles__bar-price"><!></div>'), T_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), G_ = $('<span><!></span> <img class="kaching-bundles__checkbox-upsells__image"/> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!></div> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div>', 1), O_ = $('<div class="kaching-bundles__bar-variants"><!> <!></div>'), F_ = $('<div class="kaching-bundles__bar-variants"><!></div>'), L_ = $('<div><div class="kaching-bundles__bar-container"><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!></div></div></div>');
  function Xu(n, t) {
    Ye(t, !0);
    const r = () => De(y, "$config", u), a = () => De(v, "$formatPrice", u), l = () => De(Y, "$translate", u), o = () => De(I, "$getMediaImageUrl", u), [u, c] = ft(), i = k(t, "checkboxUpsell", 7), s = k(t, "product", 7), d = k(t, "dealBlock", 7), h = k(t, "dealSellingPlan", 7), f = k(t, "dealBarQuantity", 7), p = k(t, "onChange", 7), v = sn(), I = Dn(), y = gn();
    let x = Ae(!1), B = Ae(1), D = Ae(at({})), j = Ae(void 0);
    const C = g(() => {
      var ge;
      return (ge = i().preselected) != null && ge;
    });
    Ze(() => {
      te(x, e(C), !0);
    }), Ze(() => {
      i().matchQuantityWithDealBar && te(B, f(), !0);
    });
    const F = g(() => !!i().variantGIDs), K = g(() => {
      var ge, Ve;
      return e(F) && s() ? s().variants.filter((me) => i().variantGIDs.some((Me) => Nt(Me) === me.id)) : (Ve = (ge = s()) == null ? void 0 : ge.variants) != null ? Ve : [];
    }), O = g(() => e(B) > 1 && e(K).length > 1), le = g(() => (function(ge, Ve) {
      if (ge.variantGIDs)
        return ge.variantGIDs.length === 0 ? void 0 : Nt(ge.variantGIDs[0]);
      if (Ve != null && Ve.availableForSale && Ve.variants.length > 0) return Ve.variants[0].id;
    })(i(), s())), ee = g(() => {
      if (e(le) === void 0) return [];
      const ge = [];
      for (let Ve = 0; Ve < e(B); Ve++) {
        const me = e(D)[Ve];
        me !== void 0 ? ge.push(me) : ge.push(e(le));
      }
      return ge;
    }), N = g(() => (function(ge, Ve) {
      if (!Ve) return [];
      const me = {};
      for (const Me of ge) {
        const nt = me[Me];
        if (nt) {
          nt.quantity += 1;
          continue;
        }
        const ht = Ve.variants.find((kt) => kt.id === Me);
        ht && (me[Me] = { variant: ht, quantity: 1 });
      }
      return Object.values(me);
    })(e(ee), s())), H = g(() => {
      var ge;
      return (ge = e(N)[0]) == null ? void 0 : ge.variant;
    }), Q = g(() => {
      var ge;
      return (ge = i().subscriptionEnabled) == null || ge;
    }), Z = g(() => {
      var ge;
      return (ge = i().subscriptionType) != null ? ge : "deal";
    }), z = g(() => e(Q) && e(Z) === "always" && s() && e(H) ? $i(s(), [e(H)]) : []), P = g(() => e(z).find((ge) => ge.id === e(j)) || e(z)[0]);
    Ze(() => {
      var ge;
      e(z).some((Ve) => {
        var me;
        return Ve.id === ((me = h()) == null ? void 0 : me.id);
      }) && te(j, (ge = h()) == null ? void 0 : ge.id, !0);
    });
    const V = g(() => {
      if (s() && e(H) && e(Q))
        return e(Z) === "deal" ? h() ? Ln(s(), e(H), h()) : void 0 : e(P);
    }), G = g(() => d().priceRounding ? { perItem: d().showPricesPerItem, precision: d().priceRoundingPrecision, v2: r().featureFlags.price_rounding_v2 || !1 } : void 0);
    function U(ge) {
      return Lr({ discountType: i().discountType, discountValue: i().discountValue, discountQuantity: 1, variantQuantities: e(N), currencyRate: r().currencyRate, priceRounding: e(G), sellingPlan: ge });
    }
    let ce = g(() => U(e(V))), W = g(() => e(N).reduce((ge, { variant: Ve, quantity: me }) => ge + Math.max(Ve.price, Ve.compareAtPrice || 0) * me, 0));
    const _ = g(() => s() && e(H) ? Ln(s(), e(H), void 0) : void 0), T = g(() => e(Q) && e(Z) === "always" ? e(ce) : U(e(_))), M = g(() => !s() || !e(H) ? [] : $i(s(), [e(H)]).map((ge) => {
      let Ve;
      return Ve = e(Q) ? e(Z) === "always" ? e(P) : ge : e(_), { sellingPlanId: ge.id, discountedPrice: U(Ve) };
    })), L = g(() => hn({ priceFormatter: a(), product: s(), totalFullPrice: e(W), totalDiscountedPrice: e(ce), quantity: e(B), legacySavedPercentage: r().featureFlags.legacy_saved_percentage || !1, unitQuantity: nr(e(N)), sellingPlan: e(V) })), Y = It();
    let J = g(() => e(L)(l()(i().title))), q = g(() => e(L)(l()(i().subtitle))), A = g(() => e(W) && e(W) > e(ce));
    const re = g(() => o()(i().mediaImageGID)), ne = g(() => e(L)(l()(i().badgeText || ""))), ue = g(() => {
      var ge;
      return o()((ge = i().badgeImageGID) != null ? ge : null);
    });
    function ae(ge, Ve) {
      te(D, { ...e(D), [ge]: Ve }, !0);
    }
    Ze(() => {
      if (s() && e(N).length > 0 && e(x)) {
        const ge = e(V);
        tn(() => p()({ product: s(), variants: e(N), sellingPlan: ge, pricing: { discountedPrice: e(ce), fullPrice: e(W), discountedPriceWithoutSellingPlan: e(T), discountedPricesForSellingPlans: e(M) } }));
      } else tn(() => p()(void 0));
    });
    var fe = { get checkboxUpsell() {
      return i();
    }, set checkboxUpsell(ge) {
      i(ge), m();
    }, get product() {
      return s();
    }, set product(ge) {
      s(ge), m();
    }, get dealBlock() {
      return d();
    }, set dealBlock(ge) {
      d(ge), m();
    }, get dealSellingPlan() {
      return h();
    }, set dealSellingPlan(ge) {
      h(ge), m();
    }, get dealBarQuantity() {
      return f();
    }, set dealBarQuantity(ge) {
      f(ge), m();
    }, get onChange() {
      return p();
    }, set onChange(ge) {
      p(ge), m();
    } }, Ce = L_();
    let he;
    var se = S(Ce), _e = S(se);
    {
      let ge = g(() => e(ne) || void 0);
      Sa(_e, { get style() {
        return i().badgeStyle;
      }, get text() {
        return e(ge);
      }, get imageUrl() {
        return e(ue);
      }, blockLayout: "vertical" });
    }
    var Ge = E(_e, 2), pe = S(Ge);
    Rt(pe, { element: "div", class: "kaching-bundles__bar-main", role: "checkbox", get "aria-checked"() {
      return e(x);
    }, onclick: function() {
      te(x, !e(x));
    }, children: (ge, Ve) => {
      var me = G_(), Me = ve(me);
      let nt;
      var ht = S(Me), kt = (rt) => {
        Sl(rt);
      };
      R(ht, (rt) => {
        e(x) && rt(kt);
      }), w(Me);
      var Re = E(Me, 2), lt = E(Re, 2), dt = S(lt), St = S(dt);
      et(S(St), () => e(J), (rt) => {
        var st = A_();
        Te(S(st), () => e(J)), w(st), b(rt, st);
      }), w(St);
      var Ft = E(St, 2), Mt = (rt) => {
        var st = ze();
        et(ve(st), () => e(q), (Xe) => {
          var Ue = q_();
          Te(S(Ue), () => e(q)), w(Ue), b(Xe, Ue);
        }), b(rt, st);
      };
      R(Ft, (rt) => {
        e(q) && rt(Mt);
      }), w(dt), w(lt);
      var Et = E(lt, 2), Lt = S(Et);
      et(Lt, () => e(ce), (rt) => {
        var st = V_();
        Te(S(st), () => a()(e(ce))), w(st), be((Xe) => xe(st, "data-a11y-label", Xe), [() => l()("system.price")]), b(rt, st);
      });
      var Pe = E(Lt, 2), tt = (rt) => {
        var st = ze();
        et(ve(st), () => e(W), (Xe) => {
          var Ue = T_();
          Te(S(Ue), () => a()(e(W))), w(Ue), be((vt) => xe(Ue, "data-a11y-label", vt), [() => l()("system.original_price")]), b(Xe, Ue);
        }), b(rt, st);
      };
      R(Pe, (rt) => {
        e(A) && rt(tt);
      }), w(Et), be((rt) => {
        var st, Xe, Ue;
        nt = Tt(Me, 1, "kaching-bundles__checkbox-upsells__checkbox", null, nt, rt), xe(Re, "src", e(re) || ((st = e(H)) == null ? void 0 : st.image) || ((Xe = s()) == null ? void 0 : Xe.image)), xe(Re, "alt", (Ue = s()) == null ? void 0 : Ue.title);
      }, [() => ({ "kaching-bundles__checkbox-upsells__checkbox--selected": e(x) })]), b(ge, me);
    }, $$slots: { default: !0 } });
    var de = E(pe, 2), Se = (ge) => {
      var Ve = O_(), me = S(Ve);
      {
        let kt = g(() => ({ ...s(), variants: e(K) }));
        Fr(me, { get product() {
          return e(kt);
        } });
      }
      var Me = E(me, 2), nt = (kt) => {
        var Re = ze();
        Yt(ve(Re), 17, () => ({ length: e(B) }), Tr, (lt, dt, St) => {
          {
            let Ft = g(() => ({ ...s(), variants: e(K) })), Mt = g(() => e(B) > 1 ? St + 1 : void 0);
            zn(lt, { get product() {
              return e(Ft);
            }, get selectedVariantId() {
              return e(ee)[St];
            }, get number() {
              return e(Mt);
            }, onChange: (Et) => ae(St, Et) });
          }
        }), b(kt, Re);
      }, ht = (kt) => {
        {
          let Re = g(() => ({ ...s(), variants: e(K) }));
          zn(kt, { get product() {
            return e(Re);
          }, get selectedVariantId() {
            return e(ee)[0];
          }, onChange: (lt) => ae(0, lt) });
        }
      };
      R(Me, (kt) => {
        e(O) ? kt(nt) : kt(ht, !1);
      }), w(Ve), b(ge, Ve);
    };
    R(de, (ge) => {
      e(x) && e(K).length > 1 && e(ee).length > 0 && ge(Se);
    });
    var Oe = E(de, 2), Qe = (ge) => {
      var Ve = F_();
      ta(S(Ve), { get sellingPlans() {
        return e(z);
      }, get selectedSellingPlan() {
        return e(P);
      }, onChange: (me) => te(j, me.id, !0) }), w(Ve), b(ge, Ve);
    };
    R(Oe, (ge) => {
      e(x) && e(z).length > 1 && e(P) && ge(Qe);
    });
    var we = E(Oe, 2), X = (ge) => {
      Ti(ge, { get value() {
        return e(B);
      }, min: 1, onChange: (Ve) => te(B, Ve, !0) });
    };
    R(we, (ge) => {
      e(x) && i().quantitySelector && ge(X);
    }), w(Ge), w(se), w(Ce), be((ge) => he = Tt(Ce, 1, "kaching-bundles__checkbox-upsells__upsell kaching-bundles__bar", null, he, ge), [() => {
      var ge;
      return { "kaching-bundles__bar--selected": e(x), "kaching-bundles__bar--disabled": r().preview && !((ge = s()) != null && ge.availableForSale) };
    }]), b(n, Ce);
    var Ie = Ke(fe);
    return c(), Ie;
  }
  Ne(Xu, { checkboxUpsell: {}, product: {}, dealBlock: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var E_ = $('<div class="kaching-bundles__block-title"><!></div>'), j_ = $('<div class="kaching-bundles__checkbox-upsells"><!> <div class="kaching-bundles__checkbox-upsells__upsells"></div></div>');
  function ed(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "checkboxUpsells", 7), o = k(t, "dealBlock", 7), u = k(t, "otherProducts", 7), c = k(t, "complementaryProducts", 7), i = k(t, "dealSellingPlan", 7), s = k(t, "dealBarQuantity", 7), d = k(t, "onChange", 7), h = gn(), f = It(), p = g(() => l().title ? De(f, "$translate", r)(l().title) : "");
    let v = Ae(at({}));
    const I = g(() => c().map(tr)), y = Math.floor(1e3 * Math.random()), x = g(() => l().upsells.flatMap((O, le) => {
      if (O.productSource === "complementary") {
        const H = e(I)[(le + y) % (e(I).length || 1)];
        return H ? { upsell: O, product: H } : [];
      }
      const ee = O.productGID ? u().find((H) => H.id === Nt(O.productGID)) : void 0;
      if (!De(h, "$config", r).preview && !(ee != null && ee.availableForSale)) return [];
      const N = ee && tr(ee);
      return { upsell: O, product: N };
    }));
    var B = { get checkboxUpsells() {
      return l();
    }, set checkboxUpsells(O) {
      l(O), m();
    }, get dealBlock() {
      return o();
    }, set dealBlock(O) {
      o(O), m();
    }, get otherProducts() {
      return u();
    }, set otherProducts(O) {
      u(O), m();
    }, get complementaryProducts() {
      return c();
    }, set complementaryProducts(O) {
      c(O), m();
    }, get dealSellingPlan() {
      return i();
    }, set dealSellingPlan(O) {
      i(O), m();
    }, get dealBarQuantity() {
      return s();
    }, set dealBarQuantity(O) {
      s(O), m();
    }, get onChange() {
      return d();
    }, set onChange(O) {
      d(O), m();
    } }, D = j_(), j = S(D), C = (O) => {
      var le = E_();
      Te(S(le), () => e(p)), w(le), b(O, le);
    };
    R(j, (O) => {
      e(p) && O(C);
    });
    var F = E(j, 2);
    Yt(F, 21, () => e(x), ({ upsell: O, product: le }) => O.id, (O, le) => {
      let ee = () => e(le).upsell;
      Xu(O, { get checkboxUpsell() {
        return ee();
      }, get product() {
        return e(le).product;
      }, get dealBlock() {
        return o();
      }, get dealSellingPlan() {
        return i();
      }, get dealBarQuantity() {
        return s();
      }, onChange: (N) => (function(H, Q) {
        var Z;
        Q ? e(v)[H] = Q : delete e(v)[H];
        const z = Object.entries(e(v)).flatMap(([W, _]) => _.variants.map(({ variant: T, quantity: M }) => ({ id: W, variant: T, product: _.product, quantity: M, sellingPlan: _.sellingPlan })));
        let P = 0, V = 0, G = 0;
        const U = /* @__PURE__ */ new Map();
        for (const W of Object.values(e(v))) {
          P += W.pricing.discountedPrice, V += W.pricing.fullPrice, G += W.pricing.discountedPriceWithoutSellingPlan;
          for (const _ of W.pricing.discountedPricesForSellingPlans) U.set(_.sellingPlanId, ((Z = U.get(_.sellingPlanId)) != null ? Z : 0) + _.discountedPrice);
        }
        const ce = Array.from(U, ([W, _]) => ({ sellingPlanId: W, discountedPrice: _ }));
        d()(z, { discountedPrice: P, fullPrice: V, discountedPriceWithoutSellingPlan: G, discountedPricesForSellingPlans: ce });
      })(ee().id, N) });
    }), w(F), w(D), b(n, D);
    var K = Ke(B);
    return a(), K;
  }
  Ne(ed, { checkboxUpsells: {}, dealBlock: {}, otherProducts: {}, complementaryProducts: {}, dealSellingPlan: {}, dealBarQuantity: {}, onChange: {} }, [], [], !0);
  var R_ = $('<div class="kaching-bundles__timer" role="timer"><div class="kaching-bundles__timer-title"><!></div></div>');
  function td(n, t) {
    Ye(t, !0);
    const [r, a] = ft(), l = k(t, "timer", 7), o = It(), u = g(() => ((C) => {
      const { textColor: F, backgroundColor: K, titleAlignment: O, titleStyle: le, titleSize: ee } = C;
      return pn({ "kaching-bundles-timer-background-color": je(K), "kaching-bundles-timer-text-color": je(F), "kaching-bundles-timer-title-alignment": O, "kaching-bundles-timer-title-font-weight": le ? Xn(le) : null, "kaching-bundles-timer-title-font-style": le ? er(le) : null, "kaching-bundles-timer-title-size": ee ? ee + "px" : null });
    })(l()));
    function c() {
      const C = new As(), F = new As(C);
      return F.setHours(24, 0, 0, 0), Math.floor((F.getTime() - C.getTime()) / 1e3);
    }
    function i() {
      if (!l().endTimestamp) return 0;
      const C = new As();
      return Math.max(0, Math.floor((l().endTimestamp - C.getTime()) / 1e3));
    }
    function s() {
      return l().type === "midnight" ? c() : l().type === "custom" ? i() : 60 * l().minutes;
    }
    let d = Ae(at(s())), h = g(() => l().type !== "custom" || e(d) > 0);
    Ze(() => {
      te(d, s(), !0);
    }), Ze(() => {
      const C = window.setInterval(() => {
        l().type === "midnight" ? te(d, c(), !0) : l().type === "custom" ? te(d, i(), !0) : te(d, e(d) <= 1 ? s() : e(d) - 1, !0);
      }, 1e3);
      return () => window.clearInterval(C);
    });
    const f = g(() => De(o, "$translate", r)(l().title)), p = g(() => (function(C) {
      const F = Math.floor(C / 86400), K = Math.floor(C % 86400 / 3600), O = Math.floor(C % 3600 / 60), le = C % 60, ee = (N) => N.toString().padStart(2, "0");
      return l().type === "custom" && F > 0 ? `${Intl.NumberFormat(navigator.language, { style: "unit", unit: "day", unitDisplay: "narrow" }).format(F)} ${ee(K)}:${ee(O)}:${ee(le)}` : K > 0 ? `${ee(K)}:${ee(O)}:${ee(le)}` : `${ee(O)}:${ee(le)}`;
    })(e(d))), v = g(() => e(f).replace(/\{\{\s*\w+\s*\}\}/g, '<span class="kaching-bundles__timer-value" translate="no"></span>'));
    let I = Ae(void 0);
    Ze(() => {
      !e(I) || !e(v) || e(I).querySelectorAll(".kaching-bundles__timer-value").forEach((C) => {
        C.textContent = ` ${e(p)} `;
      });
    });
    var y = { get timer() {
      return l();
    }, set timer(C) {
      l(C), m();
    } }, x = ze(), B = ve(x), D = (C) => {
      var F = R_(), K = S(F);
      Te(S(K), () => e(v)), w(K), ul(K, (O) => te(I, O), () => e(I)), w(F), be(() => Wt(F, e(u))), b(C, F);
    };
    R(B, (C) => {
      e(h) && C(D);
    }), b(n, x);
    var j = Ke(y);
    return a(), j;
  }
  function nd(n, t) {
    Ye(t, !0);
    const r = k(t, "dealBlockId", 7), a = k(t, "shopCustomStyles", 7), l = k(t, "customStyles", 7), o = g(() => {
      const d = [a(), l()].filter((h) => h == null ? void 0 : h.trim()).join(`
`);
      return d ? `
      <style id="kaching-bundles-custom-styles-${r()}">
        kaching-bundles-block[deal-block-id="${r()}"] {
          ${d}
        }
      </style>
    ` : "";
    });
    var u = { get dealBlockId() {
      return r();
    }, set dealBlockId(d) {
      r(d), m();
    }, get shopCustomStyles() {
      return a();
    }, set shopCustomStyles(d) {
      a(d), m();
    }, get customStyles() {
      return l();
    }, set customStyles(d) {
      l(d), m();
    } }, c = ze(), i = ve(c), s = (d) => {
      var h = ze();
      Te(ve(h), () => e(o)), b(d, h);
    };
    return R(i, (d) => {
      e(o) && d(s);
    }), b(n, c), Ke(u);
  }
  Ne(td, { timer: {} }, [], [], !0), Ne(nd, { dealBlockId: {}, shopCustomStyles: {}, customStyles: {} }, [], [], !0);
  function N_(n, t = 4) {
    const r = (function(a) {
      let l = 2166136261;
      for (let o = 0; o < a.length; o++) l ^= a.charCodeAt(o), l = Math.imul(l, 16777619) >>> 0;
      return l >>> 0;
    })(n);
    return (function(a, l) {
      let o = "";
      for (let u = 0; u < l; u++) o = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[a % 62] + o, a = Math.floor(a / 62);
      return o;
    })(r, t);
  }
  function rd(n) {
    var t, r, a, l, o;
    const { dealBlock: u, product: c, selectedDealBarId: i, selectedVariantQuantities: s, selectedBundleProducts: d, selectedCollectionBreaksProducts: h, selectedFreeGifts: f, selectedProgressiveGifts: p, selectedCheckboxUpsells: v, selectedUpsells: I, selectedPersonalisations: y, selectedSellingPlan: x, dealBarSellingPlan: B, nativeBundleProductIds: D } = n, j = (function(A) {
      const { product: re, selectedVariantQuantities: ne, selectedBundleProducts: ue, selectedCollectionBreaksProducts: ae, selectedFreeGifts: fe, selectedProgressiveGifts: Ce, selectedCheckboxUpsells: he, selectedUpsells: se, selectedSellingPlan: _e, dealBarSellingPlan: Ge, selectedDealBarId: pe, bundleNonce: de } = A, Se = ue.length > 0 || ae.length > 0 || fe.length > 0 || Ce.length > 0 || se.length > 0, Oe = fe.length > 0 || Ce.length > 0 || se.length > 0, Qe = JSON.stringify([Se ? ne.map(({ variant: we, quantity: X }) => ({ variantId: we.id, quantity: X })) : re.id, ue.map(({ id: we, variant: X, quantity: Ie }) => ({ id: we, variantId: X.id, quantity: Ie })), ae.map(({ variant: we, quantity: X }) => ({ variantId: we.id, quantity: X })), fe.map(({ id: we, variant: X, quantity: Ie }) => ({ id: we, variantId: X.id, quantity: Ie })), Ce.map(({ id: we, variants: X }) => X.map((Ie) => ({ id: we, variantId: Ie.variant.id, quantity: Ie.quantity })).flat()).flat(), he.map(({ id: we, variant: X }) => ({ id: we, variantId: X.id })), se.map(({ id: we, variant: X, quantity: Ie }) => ({ id: we, variantId: X.id, quantity: Ie })), _e == null ? void 0 : _e.id, Ge == null ? void 0 : Ge.id, pe, ...Oe ? [de] : []]);
      return N_(Qe);
    })(n), C = u.dealBars.find((A) => A.id === i);
    let F = !1;
    C && (!C.dealBarType || C.dealBarType === "quantity-break" || C.dealBarType === "bxgy") && u.dealBars.filter((A) => !A.dealBarType || A.dealBarType === "quantity-break" || A.dealBarType === "bxgy").filter((A) => id(A) === id(C) && A.id !== i).length > 0 && (F = !0);
    const K = B != null ? B : x, O = (C == null ? void 0 : C.dealBarType) === "bxgy", le = s.some(({ variant: A }) => A.sellingPlans.length > 0), ee = O && (le || n.splitBxgy), N = u.dealBars.some((A) => (A.freeGifts || []).filter((re) => re.productGID).length > 0), H = !(!u.progressiveGiftsEnabled || !u.progressiveGifts) && u.progressiveGifts.gifts.some((A) => A.giftType === "product"), Q = u.dealBars.some((A) => (A.upsells || []).length > 0), Z = u.nanoId || u.id, z = u.abTestVariantNumber ? ms(u.abTestVariantNumber) : void 0, P = (C == null ? void 0 : C.dealBarType) === "sku" || (C == null ? void 0 : C.dealBarType) === "bundle" || (C == null ? void 0 : C.dealBarType) === "mix-and-match" || F || ee, V = { deal: Z, main: !0 };
    u.marketId && (V.market = u.marketId), P ? (V.id = j, V.bar = i) : (O || f.length > 0 || p.length > 0 || v.length > 0 || I.length > 0 || h.length > 0 || y.length > 0 || N || H || Q) && (V.id = j), !V.bar && i && (V.bid = i), z && (V.ab = z);
    const G = { id: j, deal: Z, bar: i };
    z && (G.ab = z);
    const U = [];
    let ce = s, W = [];
    if (ee && h.length === 0) {
      const { buy: A, get: re } = sd(s, C.getQuantity);
      ce = A, W = re;
    }
    for (const { variant: A, quantity: re } of ce) {
      const ne = { ...V }, ue = Ln(c, A, K);
      ue != null && ue.priceAdjustment && C && ld(C) && (ne.sellingPlan = { id: ue.id, priceAdjustment: ue.priceAdjustment });
      const ae = { id: A.id, quantity: re, properties: { __kaching_bundles: JSON.stringify(ne) } };
      ue && (ae.selling_plan = ue.id), U.push(ae);
    }
    const _ = ce.length > 0 && !ad(c, D) && (C == null ? void 0 : C.dealBarType) !== "mix-and-match" ? ce[0].variant.id : void 0;
    for (const { variant: A, quantity: re } of W) {
      const ne = { ...G, main: !0, bxgy: !0 }, ue = Ln(c, A, K);
      ue != null && ue.priceAdjustment && (C == null ? void 0 : C.dealBarType) === "bxgy" && C.getDiscountType === "specific" && (ne.sellingPlan = { id: ue.id, priceAdjustment: ue.priceAdjustment });
      const ae = { id: A.id, quantity: re, properties: { __kaching_bundles: JSON.stringify(ne) } };
      ri(ae, _, c, D), ue && (ae.selling_plan = ue.id), U.push(ae);
    }
    for (const A of d) {
      const re = { ...G, bundleProduct: A.id }, ne = Ln(A.product, A.variant, K);
      ne != null && ne.priceAdjustment && (C == null ? void 0 : C.dealBarType) === "bundle" && ((t = C == null ? void 0 : C.bundleProducts.find((ae) => ae.id === A.id)) == null ? void 0 : t.discountType) === "specific" && (re.sellingPlan = { id: ne.id, priceAdjustment: ne.priceAdjustment });
      const ue = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ri(ue, _, A.product, D), ne && (ue.selling_plan = ne.id), U.push(ue);
    }
    let T = h, M = [];
    if (ee && h.length > 0) {
      const { buy: A, get: re } = sd(h, C.getQuantity);
      T = A, M = re;
    }
    const L = ((r = u.collectionBreaks) == null ? void 0 : r.visibility) === "deal-products";
    for (const A of T) {
      if (L) {
        const ae = U.find((fe) => fe.id === A.variant.id);
        if (ae) {
          ae.quantity += A.quantity;
          continue;
        }
      }
      const re = { ...G, collectionBreaksProduct: !0 };
      P || delete re.bar;
      const ne = Ln(A.product, A.variant, K);
      ne != null && ne.priceAdjustment && C && ld(C) && (re.sellingPlan = { id: ne.id, priceAdjustment: ne.priceAdjustment });
      const ue = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ne && (ue.selling_plan = ne.id), U.push(ue);
    }
    for (const A of M) {
      const re = { ...G, collectionBreaksProduct: !0 };
      P || delete re.bar, re.bxgy = !0;
      const ne = Ln(A.product, A.variant, K);
      ne != null && ne.priceAdjustment && (C == null ? void 0 : C.dealBarType) === "bxgy" && C.getDiscountType === "specific" && (re.sellingPlan = { id: ne.id, priceAdjustment: ne.priceAdjustment });
      const ue = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ne && (ue.selling_plan = ne.id), U.push(ue);
    }
    for (const A of f) {
      const re = { ...G, gift: A.id };
      delete re.bar;
      const ne = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ri(ne, _, A.product, D);
      const ue = Ln(A.product, A.variant, K);
      ue && (ne.selling_plan = ue.id), U.push(ne);
    }
    for (const A of p) {
      const re = { ...G, gift: A.id };
      delete re.bar;
      for (const ne of A.variants) {
        const ue = { id: ne.variant.id, quantity: ne.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
        ri(ue, _, A.product, D);
        const ae = Ln(A.product, ne.variant, K);
        ae && (ue.selling_plan = ae.id), U.push(ue);
      }
    }
    for (const A of v) {
      const re = { ...G, checkboxUpsell: A.id };
      delete re.bar;
      const ne = A.sellingPlan, ue = (a = u.checkboxUpsells) == null ? void 0 : a.upsells.find((fe) => fe.id === A.id);
      ne != null && ne.priceAdjustment && (ue == null ? void 0 : ue.discountType) === "specific" && (re.sellingPlan = { id: ne.id, priceAdjustment: ne.priceAdjustment });
      const ae = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ri(ae, _, A.product, D), ne && (ae.selling_plan = ne.id), U.push(ae);
    }
    for (const A of I) {
      const re = { ...G, upsell: A.id };
      delete re.bar;
      const ne = A.sellingPlan;
      ne != null && ne.priceAdjustment && ((o = (l = C == null ? void 0 : C.upsells) == null ? void 0 : l.find((ae) => ae.id === A.id)) == null ? void 0 : o.discountType) === "specific" && (re.sellingPlan = { id: ne.id, priceAdjustment: ne.priceAdjustment });
      const ue = { id: A.variant.id, quantity: A.quantity, properties: { __kaching_bundles: JSON.stringify(re) } };
      ri(ue, _, A.product, D), ne && (ue.selling_plan = ne.id), U.push(ue);
    }
    const Y = [];
    for (const { variant: A, quantity: re } of ce) for (let ne = 0; ne < re; ne++) Y.push(A.id);
    for (const A of y) {
      const re = { ...G, personalisation: A.id };
      delete re.bar;
      const ne = { id: A.variantId, quantity: 1, properties: { __kaching_bundles: JSON.stringify(re), [A.valueLabel]: A.text } }, ue = Y[A.productIndex];
      ue && (ne.parent_id = ue), U.push(ne);
    }
    const J = U.filter((A) => !A.parent_id), q = U.filter((A) => A.parent_id);
    return [...J.reverse(), ...q];
  }
  function ad(n, t) {
    return t.includes(n.id) || n.isNativeBundle === !0;
  }
  function ri(n, t, r, a) {
    t && t !== n.id && (ad(r, a) || (n.parent_id = t));
  }
  function id(n) {
    switch (n.dealBarType) {
      case void 0:
      case "quantity-break":
        return Number(n.quantity);
      case "bxgy":
        return Number(n.buyQuantity) + Number(n.getQuantity);
      case "bundle":
        return n.bundleProducts[0].quantity;
      case "mix-and-match":
      case "sku":
        return 1;
    }
  }
  function ld(n) {
    switch (n.dealBarType) {
      case void 0:
      case "quantity-break":
        return n.discountType === "specific";
      case "bundle":
        return n.bundleProducts[0].discountType === "specific";
      case "bxgy":
        return n.buyDiscountType === "specific";
      case "mix-and-match":
        return n.discountType === "specific";
      case "sku":
        return !1;
    }
  }
  function sd(n, t) {
    const r = [...n].sort((u, c) => u.variant.price - c.variant.price), a = [], l = [];
    let o = t;
    for (const u of r) {
      const c = Math.min(o, u.quantity), i = u.quantity - c;
      c > 0 && l.push({ ...u, quantity: c }), i > 0 && a.push({ ...u, quantity: i }), o -= c;
    }
    return { buy: a, get: l };
  }
  function Q_(n, t, r) {
    t()({ dealBarId: r().id, preselected: !1 });
  }
  var W_ = $('<img class="kaching-bundles__bar-image" alt=""/>'), U_ = $('<div class="kaching-bundles__bar-radio"></div>'), H_ = $('<span class="kaching-bundles__bar-title"><!></span>'), Z_ = $('<span class="kaching-bundles__bar-label"><!></span>'), J_ = $('<div class="kaching-bundles__bar-subtitle"><!></div>'), Y_ = $('<div class="kaching-bundles__bar-full-price"><!></div>'), K_ = $('<!> <div class="kaching-bundles__bar-content"><div class="kaching-bundles__bar-content-left"><div class="kaching-bundles__bar-first-line"><!> <!></div> <div class="kaching-bundles__bar-second-line"><!> <!></div></div> <div class="kaching-bundles__bar-pricing"><!> <!></div></div>', 1), X_ = $('<div class="kaching-bundles__bar-selling-plan"><!></div>'), e0 = $('<div class="kaching-bundles__bar-variants"><!> <div class="kaching-bundles__bar-variant-selector-wrapper"><!> <!></div></div>'), t0 = $('<div><input type="radio"/> <label><!> <div class="kaching-bundles__bar-wrapper"><!> <!> <!> <!> <!></div> <!> <!> <!> <!></label> <!></div>');
  function od(n, t) {
    Ye(t, !0);
    const r = () => De(F, "$formatPrice", o), a = () => De(C, "$translate", o), l = () => De(K, "$getMediaImageUrl", o), [o, u] = ft();
    let c = k(t, "dealBlock", 7), i = k(t, "dealBar", 7), s = k(t, "otherProducts", 23, () => []), d = k(t, "complementaryProducts", 23, () => []), h = k(t, "selectedDealBarIndex", 7, null), f = k(t, "componentId", 7), p = k(t, "selected", 7, !1), v = k(t, "globalSellingPlan", 7, void 0), I = k(t, "onProgressiveGiftsChange", 7), y = k(t, "onDealBarSelect", 7), x = k(t, "onDealBarDeselect", 7), B = k(t, "onVariantsChange", 7), D = k(t, "onPersonalisationsChange", 7), j = k(t, "personalisationInitialValues", 23, () => []);
    const C = It(), F = sn(), K = Dn();
    let O = Ae(at([])), le = Ae(at([])), ee = Ae(at([])), N = !1;
    const H = g(() => i().productGID ? s().find((Pe) => Pe.id === Nt(i().productGID)) : void 0);
    let Q = Ae(void 0);
    const Z = g(() => (function(Pe, tt, rt) {
      if (Pe !== void 0 && rt && rt.variants.some((st) => st.id === Pe))
        return Pe;
      if (tt.variantGID) return Nt(tt.variantGID);
      if (rt && rt.variants.length > 0) return rt.variants[0].id;
    })(e(Q), i(), e(H))), z = g(() => e(Z) && e(H) ? e(H).variants.find((Pe) => Pe.id === e(Z)) : void 0), P = g(() => e(z) ? [{ variant: e(z), quantity: 1 }] : []);
    let V = Ae(void 0);
    const G = g(() => e(H) && e(z) ? $i(e(H), [e(z)]) : []), U = g(() => {
      var Pe, tt;
      return (i().sellingPlanEnabled || c().subscriptionsEnabled && ((Pe = c().subscriptions) == null ? void 0 : Pe.layout) === "link" && ((tt = c().subscriptions) == null ? void 0 : tt.subscribeByDefault)) && (!c().subscriptionsEnabled || !!v());
    }), ce = g(() => e(U) ? xs(i(), e(G), e(V)) : void 0), W = g(() => {
      var Pe;
      return (Pe = e(ce)) != null ? Pe : e(H) && e(z) ? Ln(e(H), e(z), v()) : void 0;
    }), _ = g(() => e(z) ? zi(e(z), e(W)) : 0), T = g(() => e(z) ? (function(Pe, tt) {
      return Pe.useProductCompareAtPrice && tt.compareAtPrice ? Math.max(tt.price, tt.compareAtPrice) : tt.price;
    })(c(), e(z)) : 0), M = g(() => e(T) + e(O).reduce((Pe, tt) => tt.includeInCompareAt ? Pe + tt.fullPrice : Pe, 0) + e(le).reduce((Pe, tt) => tt.includeInCompareAt ? Pe + tt.fullPrice * tt.quantity : Pe, 0)), L = g(() => e(M) > e(_)), Y = g(() => hn({ priceFormatter: r(), product: e(H), dealBar: i(), totalFullPrice: e(T), totalDiscountedPrice: e(_), quantity: 1, unitQuantity: nr(e(P)), sellingPlan: e(W) })), J = g(() => e(Y)(a()(i().title))), q = g(() => e(Y)(a()(i().subtitle))), A = g(() => e(Y)(a()(i().label))), re = g(() => e(Y)(a()(i().badgeText))), ne = g(() => l()(i().badgeImageGID)), ue = g(() => `${i().id}_${f()}`), ae = g(() => l()(i().mediaImageGID) || Ai), fe = gn(), Ce = g(() => e(H) && e(H).variants.length > 1 && !i().variantGID && p()), he = g(() => e(H) && De(fe, "$config", o).featureFlags.variant_images && new Set(e(H).variants.map((Pe) => Pe.image).filter((Pe) => Pe)).size > 1), se = g(() => i().showAsSoldOutEnabled && i().showAsSoldOut ? Vi(i().showAsSoldOut) : "");
    function _e(Pe) {
      te(Q, Pe, !0);
    }
    Ze(() => {
      !p() || !e(z) && e(H) || (e(O), e(ee), e(le), e(Z), e(W), tn(() => {
        N || (N = !0, y()({ dealBarId: i().id, preselected: !0 })), (function() {
          const Pe = e(_) + e(ee).reduce((Ue, vt) => Ue + vt.discountedPrice, 0), tt = e(T) + e(ee).reduce((Ue, vt) => Ue + vt.fullPrice, 0) + e(O).reduce((Ue, vt) => vt.showPrice ? Ue + vt.fullPrice : Ue, 0) + e(le).reduce((Ue, vt) => Ue + vt.fullPrice * vt.quantity, 0), rt = e(z) ? e(z).price : 0, st = e(z) ? e(z).sellingPlans.map((Ue) => ({ sellingPlanId: Ue.id, discountedPrice: Ue.price })) : [], Xe = { discountedPrice: Pe, fullPrice: tt, discountedPricePerItem: e(_), fullPricePerItem: e(T), discountedPriceWithoutSellingPlan: rt, discountedPricesForSellingPlans: st };
          B()({ variants: e(P), freeGifts: [...e(O), ...e(le)], upsells: e(ee), dealBarSellingPlan: e(ce), pricing: Xe, product: e(H) });
        })();
      }));
    });
    var Ge = { get dealBlock() {
      return c();
    }, set dealBlock(Pe) {
      c(Pe), m();
    }, get dealBar() {
      return i();
    }, set dealBar(Pe) {
      i(Pe), m();
    }, get otherProducts() {
      return s();
    }, set otherProducts(Pe = []) {
      s(Pe), m();
    }, get complementaryProducts() {
      return d();
    }, set complementaryProducts(Pe = []) {
      d(Pe), m();
    }, get selectedDealBarIndex() {
      return h();
    }, set selectedDealBarIndex(Pe = null) {
      h(Pe), m();
    }, get componentId() {
      return f();
    }, set componentId(Pe) {
      f(Pe), m();
    }, get selected() {
      return p();
    }, set selected(Pe = !1) {
      p(Pe), m();
    }, get globalSellingPlan() {
      return v();
    }, set globalSellingPlan(Pe = void 0) {
      v(Pe), m();
    }, get onProgressiveGiftsChange() {
      return I();
    }, set onProgressiveGiftsChange(Pe) {
      I(Pe), m();
    }, get onDealBarSelect() {
      return y();
    }, set onDealBarSelect(Pe) {
      y(Pe), m();
    }, get onDealBarDeselect() {
      return x();
    }, set onDealBarDeselect(Pe) {
      x(Pe), m();
    }, get onVariantsChange() {
      return B();
    }, set onVariantsChange(Pe) {
      B(Pe), m();
    }, get onPersonalisationsChange() {
      return D();
    }, set onPersonalisationsChange(Pe) {
      D(Pe), m();
    }, get personalisationInitialValues() {
      return j();
    }, set personalisationInitialValues(Pe = []) {
      j(Pe), m();
    } }, pe = t0();
    let de;
    var Se = S(pe);
    Gr(Se), Se.__change = [Q_, y, i];
    var Oe = E(Se, 2);
    let Qe;
    var we = S(Oe);
    {
      let Pe = g(() => e(re) || void 0);
      Sa(we, { get style() {
        return i().badgeStyle;
      }, get text() {
        return e(Pe);
      }, get imageUrl() {
        return e(ne);
      }, get blockLayout() {
        return c().blockLayout;
      } });
    }
    var X = E(we, 2), Ie = S(X);
    Rt(Ie, { element: "div", class: "kaching-bundles__bar-main", onclick: function(Pe) {
      p() && (Pe.preventDefault(), Pe.stopPropagation(), x()());
    }, children: (Pe, tt) => {
      var rt = K_(), st = ve(rt), Xe = (Be) => {
        var Ee = W_();
        be(() => xe(Ee, "src", e(ae))), b(Be, Ee);
      }, Ue = (Be) => {
        b(Be, U_());
      };
      R(st, (Be) => {
        i().mediaImageGID ? Be(Xe) : Be(Ue, !1);
      });
      var vt = E(st, 2), Qt = S(vt), an = S(Qt), Tn = S(an);
      et(Tn, () => e(J), (Be) => {
        var Ee = H_();
        Te(S(Ee), () => e(J)), w(Ee), b(Be, Ee);
      });
      var yt = E(Tn, 2), Ut = (Be) => {
        var Ee = ze();
        et(ve(Ee), () => e(A), (We) => {
          var He = Z_();
          Te(S(He), () => e(A)), w(He), b(We, He);
        }), b(Be, Ee);
      };
      R(yt, (Be) => {
        e(A) && Be(Ut);
      }), w(an);
      var Gt = E(an, 2), on = S(Gt), xn = (Be) => {
        var Ee = ze();
        et(ve(Ee), () => e(q), (We) => {
          var He = J_();
          Te(S(He), () => e(q)), w(He), b(We, He);
        }), b(Be, Ee);
      };
      R(on, (Be) => {
        e(q) && Be(xn);
      });
      var cn = E(on, 2), un = (Be) => {
        Er(Be, { get dealBlock() {
          return c();
        }, get variant() {
          return e(z);
        } });
      };
      R(cn, (Be) => {
        e(Ce) || Be(un);
      }), w(Gt), w(Qt);
      var ke = E(Qt, 2), Je = S(ke);
      et(Je, () => e(_), (Be) => {
        wr(Be, { get amount() {
          return e(_);
        }, get showPricesPerItem() {
          return c().showPricesPerItem;
        }, get unitLabel() {
          return c().unitLabel;
        } });
      });
      var ie = E(Je, 2), Fe = (Be) => {
        var Ee = ze();
        et(ve(Ee), () => e(M), (We) => {
          var He = Y_();
          Te(S(He), () => r()(e(M))), w(He), be((At) => xe(He, "data-a11y-label", At), [() => a()("system.original_price")]), b(We, He);
        }), b(Be, Ee);
      };
      R(ie, (Be) => {
        e(L) && Be(Fe);
      }), w(ke), w(vt), b(Pe, rt);
    }, $$slots: { default: !0 } });
    var ge = E(Ie, 2), Ve = (Pe) => {
      na(Pe, { get highlights() {
        return i().highlights;
      }, get isSelected() {
        return p();
      }, get replaceLiquid() {
        return e(Y);
      } });
    };
    R(ge, (Pe) => {
      i().highlights && Pe(Ve);
    });
    var me = E(ge, 2), Me = (Pe) => {
      var tt = X_(), rt = S(tt);
      {
        let st = g(() => e(ce) || e(G)[0]);
        ta(rt, { get sellingPlans() {
          return e(G);
        }, get selectedSellingPlan() {
          return e(st);
        }, onChange: (Xe) => {
          te(V, Xe, !0);
        } });
      }
      w(tt), b(Pe, tt);
    };
    R(me, (Pe) => {
      p() && e(U) && !i().sellingPlanGid && e(G).length > 1 && Pe(Me);
    });
    var nt = E(me, 2), ht = (Pe) => {
      var tt = e0(), rt = S(tt);
      Fr(rt, { get product() {
        return e(H);
      } });
      var st = E(rt, 2), Xe = S(st);
      {
        let Ue = g(() => e(Z) || 0);
        zn(Xe, { get product() {
          return e(H);
        }, get selectedVariantId() {
          return e(Ue);
        }, get showImage() {
          return e(he);
        }, onChange: _e });
      }
      Er(E(Xe, 2), { get dealBlock() {
        return c();
      }, get variant() {
        return e(z);
      } }), w(st), w(tt), b(Pe, tt);
    };
    R(nt, (Pe) => {
      e(Ce) && e(H) && Pe(ht);
    });
    var kt = E(nt, 2), Re = (Pe) => {
      {
        let tt = g(() => [e(Z)]);
        Ca(Pe, { get productPersonalisation() {
          return i().productPersonalisation;
        }, get product() {
          return e(H);
        }, get selectedVariantIds() {
          return e(tt);
        }, quantity: 1, get addPersonalisationModal() {
          return c().addPersonalisationModal;
        }, get onPersonalisationsChange() {
          return D();
        }, get initialValues() {
          return j();
        } });
      }
    };
    R(kt, (Pe) => {
      p() && i().productPersonalisation && e(H) && e(Z) && (c().blockLayout === "vertical" || c().blockLayout === "plain") && Pe(Re);
    }), w(X);
    var lt = E(X, 2);
    {
      let Pe = g(() => i().upsells || []);
      Ka(lt, { get dealBlock() {
        return c();
      }, get upsells() {
        return e(Pe);
      }, get otherProducts() {
        return s();
      }, get complementaryProducts() {
        return d();
      }, get dealBarSelected() {
        return p();
      }, get dealSellingPlan() {
        return e(W);
      }, onChange: (tt) => {
        te(ee, tt, !0);
      } });
    }
    var dt = E(lt, 2);
    ti(dt, { get selectedDealBarIndex() {
      return h();
    }, get onChange() {
      return I();
    }, get dealBlock() {
      return c();
    }, get dealBar() {
      return i();
    }, get selected() {
      return p();
    }, get otherProducts() {
      return s();
    }, get progressiveGifts() {
      return c().progressiveGifts;
    } });
    var St = E(dt, 2);
    {
      let Pe = g(() => i().freeGifts || []);
      Ya(St, { get dealBlock() {
        return c();
      }, get freeGifts() {
        return e(Pe);
      }, get freeGiftsSummary() {
        return i().freeGiftsSummary;
      }, get otherProducts() {
        return s();
      }, get dealBarSelected() {
        return p();
      }, get sellingPlan() {
        return e(W);
      }, onChange: (tt) => {
        te(O, tt, !0);
      } });
    }
    var Ft = E(St, 2);
    {
      let Pe = g(() => i().multipleGiftsSelectors || []);
      ei(Ft, { get dealBlock() {
        return c();
      }, get multipleGiftsSelectors() {
        return e(Pe);
      }, get sellingPlan() {
        return e(W);
      }, get otherProducts() {
        return s();
      }, onChange: (tt) => {
        te(le, tt, !0);
      } });
    }
    w(Oe);
    var Mt = E(Oe, 2), Et = (Pe) => {
      Xa(Pe, { get showAsSoldOut() {
        return i().showAsSoldOut;
      }, get replaceLiquid() {
        return e(Y);
      } });
    };
    R(Mt, (Pe) => {
      i().showAsSoldOutEnabled && i().showAsSoldOut && Pe(Et);
    }), w(pe), be((Pe, tt) => {
      var rt;
      de = Tt(pe, 1, "kaching-bundles__bar", null, de, Pe), xe(pe, "data-deal-bar-id", i().id), Wt(pe, e(se)), xe(Se, "name", `kaching-bundles-deal-${(rt = f()) != null ? rt : ""}`), ma(Se, i().id), xe(Se, "id", e(ue)), Ci(Se, p()), Se.disabled = i().showAsSoldOutEnabled, xe(Oe, "for", e(ue)), Qe = Tt(Oe, 1, "kaching-bundles__bar-container", null, Qe, tt);
    }, [() => ({ "kaching-bundles__bar--selected": p() }), () => ({ "kaching-bundles__bar-container--sold-out": i().showAsSoldOutEnabled })]), b(n, pe);
    var Lt = Ke(Ge);
    return u(), Lt;
  }
  Sn(["change"]), Ne(od, { dealBlock: {}, dealBar: {}, otherProducts: {}, complementaryProducts: {}, selectedDealBarIndex: {}, componentId: {}, selected: {}, globalSellingPlan: {}, onProgressiveGiftsChange: {}, onDealBarSelect: {}, onDealBarDeselect: {}, onVariantsChange: {}, onPersonalisationsChange: {}, personalisationInitialValues: {} }, [], [], !0);
  var n0 = $('<div class="kaching-bundles__collection-breaks-alert"><svg class="kaching-bundles__collection-breaks-alert__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00065 5.33325V7.99992M8.00065 10.6666H8.00732M14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div>');
  function cd(n, t) {
    Ye(t, !0);
    const r = () => De(i, "$config", a), [a, l] = ft();
    let o = k(t, "collectionBreaks", 7), u = k(t, "hasItemsToSelect", 7);
    const c = It(), i = gn(), s = g(() => {
      var x;
      return (x = o()) == null ? void 0 : x.requireItemSelectionAlert;
    }), d = g(() => r().preview && r().previewAlerts || De(Ls, "$requireSelectionError", a)), h = g(() => {
      var x;
      return e(d) && ((x = o()) == null ? void 0 : x.requireItemSelectionEnabled) && e(s) && u();
    });
    var f = { get collectionBreaks() {
      return o();
    }, set collectionBreaks(x) {
      o(x), m();
    }, get hasItemsToSelect() {
      return u();
    }, set hasItemsToSelect(x) {
      u(x), m();
    } }, p = ze(), v = ve(p), I = (x) => {
      var B = n0(), D = E(S(B));
      w(B), be((j) => bt(D, ` ${j != null ? j : ""}`), [() => De(c, "$translate", a)(e(s).text)]), b(x, B);
    };
    R(v, (x) => {
      e(h) && e(s) && x(I);
    }), b(n, p);
    var y = Ke(f);
    return l(), y;
  }
  Ne(cd, { collectionBreaks: {}, hasItemsToSelect: {} }, [], [], !0);
  var r0 = $('<div class="kaching-bundles__block-title"><!></div>'), a0 = $("<!> <!>", 1), i0 = $('<div class="kaching-bundles__out-of-stock"><!></div>'), l0 = $('<div class="kaching-bundles"><div><!> <!> <div></div> <!> <!> <!> <!> <!> <!></div></div> <!>', 1);
  function ud(n, t) {
    var r, a, l, o;
    Ye(t, !0);
    const u = () => De(z, "$formatPrice", i), c = () => De(V, "$translate", i), [i, s] = ft();
    let d = k(t, "component", 7), h = k(t, "config", 7), f = k(t, "translations", 23, () => ({})), p = k(t, "dealBlock", 7), v = k(t, "product", 7), I = k(t, "currentVariantId", 7), y = k(t, "sellingPlanId", 15), x = k(t, "selectedDealBarId", 15), B = k(t, "quantity", 15), D = k(t, "mediaImages", 23, () => []), j = k(t, "otherProducts", 23, () => []), C = k(t, "collectionBreaksProducts", 23, () => []), F = k(t, "complementaryProducts", 23, () => []), K = k(t, "nativeBundleProductIds", 23, () => []), O = k(t, "compact", 7, !1), le = k(t, "variantBadges", 23, () => []);
    const ee = g(() => p().hideUnavailableOptions ? tr(v()) : v()), N = g(() => p().hideUnavailableOptions ? j().map(tr) : j()), H = g(() => p().hideUnavailableOptions ? F().map(tr) : F()), Q = g(() => p().hideUnavailableOptions ? C().map(tr) : C()), { setConfig: Z } = Pa(h()), { formatPrice: z, setMoneyFormat: P } = Za(h().moneyFormat, (r = p()) == null ? void 0 : r.showPricesWithoutDecimals), { translate: V, setTranslations: G } = wa(f()), { setMediaImages: U } = Mi(D()), { setVariantBadges: ce } = bu(le()), { setSwatchSettings: W } = Di({ swatchOptions: ((a = p()) == null ? void 0 : a.swatchOptions) || [], swatchSize: (l = p()) == null ? void 0 : l.swatchSize, swatchShape: (o = p()) == null ? void 0 : o.swatchShape });
    let _ = Ae(at(Math.random()));
    function T() {
      return { dealBlock: p(), product: e(Pe), selectedDealBarId: x(), selectedVariantQuantities: e(J), selectedBundleProducts: e(q), selectedCollectionBreaksProducts: e(A), selectedFreeGifts: e(re), selectedProgressiveGifts: e(ne), selectedCheckboxUpsells: e(ue), selectedUpsells: e(ae), selectedPersonalisations: e(fe), selectedSellingPlan: e(rt), dealBarSellingPlan: e(he), nativeBundleProductIds: K(), bundleNonce: e(_), splitBxgy: h().featureFlags.split_bxgy_items };
    }
    function M() {
      return rd(T());
    }
    _a(() => {
      pr(d(), "kaching-bundles-block-loaded", { component: d() }, !1);
    }), Ze(() => {
      Z(h());
    }), Ze(() => {
      P(h().moneyFormat, !!p().showPricesWithoutDecimals);
    }), Ze(() => {
      G(f());
    }), Ze(() => {
      U(D());
    }), Ze(() => {
      ce(le());
    }), Ze(() => {
      W({ swatchOptions: p().swatchOptions || [], swatchSize: p().swatchSize, swatchShape: p().swatchShape });
    });
    let L = 0;
    Ze(() => {
      L === 0 && K().length > 0 && Lt({ pricing: e(de) }), L = K().length;
    });
    let Y = Math.random().toString(16).slice(2), J = Ae(at([])), q = Ae(at([])), A = Ae(at([])), re = Ae(at([])), ne = Ae(at([])), ue = Ae(at([])), ae = Ae(at([])), fe = Ae(at([])), Ce = new ab(), he = Ae(void 0), se = Ae(at({ discountedPrice: 0, fullPrice: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] })), _e = Ae(void 0), Ge = Ae(!1), pe = Ae(at({ requiresItemSelection: !1, allItemsSelected: !0, missingItemsCount: 0 })), de = Ae(at({ discountedPrice: 0, fullPrice: 0, discountedPricePerItem: 0, fullPricePerItem: 0, discountedPriceWithoutSellingPlan: 0, discountedPricesForSellingPlans: [] }));
    Ze(() => {
      I() && !x() && (e(rt), tn(() => {
        (function() {
          const oe = v().variants.find((ct) => ct.id === I());
          if (!oe) return;
          te(J, [{ variant: oe, quantity: 1 }], !0);
          let Le = oe.price;
          if (e(rt)) {
            const ct = oe.sellingPlans.find((gt) => gt.id === e(rt).id);
            ct && (Le = ct.price);
          }
          const qe = oe.compareAtPrice && oe.compareAtPrice > oe.price ? oe.compareAtPrice : oe.price, $e = v().sellingPlans.map((ct) => ({ sellingPlanId: ct.id, discountedPrice: zi(oe, ct) }));
          te(de, { discountedPrice: Le, fullPrice: qe, discountedPricePerItem: Le, fullPricePerItem: qe, discountedPriceWithoutSellingPlan: oe.price, discountedPricesForSellingPlans: $e }, !0), Lt({ pricing: e(de) });
        })();
      }));
    });
    let Se = g(() => Oc(p())), Oe = g(() => c()(p().blockTitle));
    const Qe = p().preselectedDealBarId ? p().dealBars.find((oe) => oe.id === p().preselectedDealBarId) : void 0;
    function we(oe) {
      return !oe.dealBarType || oe.dealBarType === "quantity-break" || oe.dealBarType === "bxgy";
    }
    function X(oe) {
      switch (oe.dealBarType) {
        case void 0:
        case "quantity-break":
          return Number(oe.quantity);
        case "bxgy":
          return Number(oe.buyQuantity) + Number(oe.getQuantity);
        case "bundle":
          return oe.bundleProducts[0].quantity;
        case "mix-and-match":
        case "sku":
          return 1;
      }
    }
    function Ie(oe) {
      var Le, qe;
      x() !== oe && (x() && Ce.set(x(), e(fe)), te(fe, (Le = Ce.get(oe)) != null ? Le : [], !0), ((qe = p().progressiveGifts) == null ? void 0 : qe.layout) === "deal-bar" && te(ne, [], !0)), x(oe);
    }
    function ge(oe) {
      const { dealBarId: Le, dealBarQuantity: qe, preselected: $e } = oe;
      Ie(Le), Gi(!1), h().keepQuantityInput && qe && B(qe), pr(d(), "deal-bar-selected", { dealBarId: Le, preselected: $e });
    }
    function Ve(oe) {
      const Le = p().dealBars[oe];
      Le && Ie(Le.id);
    }
    function me() {
      h().ignoreDeselect || (x(void 0), te(re, [], !0), te(ne, [], !0), te(ae, [], !0), te(q, [], !0), te(A, [], !0), te(fe, [], !0), Ce.clear(), te(he, void 0), Gi(!1), pr(d(), "deal-bar-selected", { dealBarId: null, preselected: !1 }));
    }
    function Me(oe) {
      const { variantId: Le } = oe;
      pr(d(), "variant-selected", { variantId: Le });
    }
    function nt(oe) {
      const { bundleProducts: Le, freeGifts: qe, upsells: $e, pricing: ct } = oe, gt = [{ variant: Le[0].variant, quantity: Le[0].quantity }];
      te(J, gt, !0), te(q, Le.slice(1), !0), te(re, qe, !0), te(ae, $e, !0), te(A, [], !0), te(he, void 0), te(_e, void 0), te(de, ct, !0), te(Ge, Et(e(J)), !0), Lt({ pricing: ct });
    }
    function ht(oe) {
      const { variants: Le, freeGifts: qe, upsells: $e, pricing: ct, validation: gt } = oe;
      te(pe, gt, !0);
      const zt = [{ variant: Le[0].variant, quantity: Le[0].quantity }], Jt = Le.slice(1);
      te(J, zt, !0), te(re, qe, !0), te(ae, $e, !0), te(q, [], !0), te(A, Jt, !0), te(he, oe.dealBarSellingPlan, !0), te(_e, void 0), te(de, ct, !0), te(Ge, Et(e(J)), !0), Lt({ pricing: ct });
    }
    function kt(oe) {
      const { variants: Le, freeGifts: qe, upsells: $e, pricing: ct } = oe;
      te(J, Le, !0), te(re, qe, !0), te(ae, $e, !0), te(q, [], !0), te(A, [], !0), te(he, oe.dealBarSellingPlan, !0), te(_e, void 0), te(de, ct, !0), te(Ge, Et(e(J)), !0), Lt({ pricing: ct });
    }
    function Re(oe) {
      var Le;
      const { variants: qe, freeGifts: $e, upsells: ct, pricing: gt, product: zt } = oe;
      te(J, qe, !0), te(re, $e, !0), te(ae, ct, !0), te(q, [], !0), te(A, [], !0), te(he, oe.dealBarSellingPlan, !0), ((Le = e(_e)) == null ? void 0 : Le.id) !== (zt == null ? void 0 : zt.id) && te(_e, zt, !0), te(de, gt, !0), te(Ge, Et(e(J)), !0), Lt({ pricing: gt });
    }
    function lt(oe) {
      y(oe == null ? void 0 : oe.id);
    }
    function dt(oe) {
      pr(d(), "add-to-cart-requested", { items: rd({ ...T(), selectedSellingPlan: oe, dealBarSellingPlan: void 0 }) });
    }
    function St(oe) {
      te(ne, oe, !0), Lt({ pricing: e(de) });
    }
    function Ft(oe, Le) {
      te(ue, oe, !0), te(se, Le, !0), Lt({ pricing: e(de) });
    }
    function Mt(oe) {
      te(fe, oe, !0), Lt({ pricing: e(de) });
    }
    function Et(oe) {
      return oe.some(({ variant: Le, quantity: qe }) => !!Le && !!Le.inventoryManagement && Le.inventoryPolicy === "deny" && Le.inventoryQuantity !== null && qe > Le.inventoryQuantity);
    }
    function Lt({ pricing: oe }) {
      const Le = e(J).map(({ variant: it, quantity: _t }) => ({ variantId: it.id, quantity: _t })), qe = e(re).map(({ id: it, variant: _t, quantity: Xt }) => ({ id: it, variantId: _t.id, quantity: Xt })), $e = e(ae).map(({ id: it, variant: _t, quantity: Xt }) => ({ id: it, variantId: _t.id, quantity: Xt })), ct = e(q).map(({ id: it, variant: _t, quantity: Xt }) => ({ id: it, variantId: _t.id, quantity: Xt })), gt = oe.discountedPrice + e(se).discountedPrice, zt = oe.fullPrice + e(se).fullPrice, Jt = { discountedPrice: gt, fullPrice: zt, discountedPriceWithoutSellingPlan: oe.discountedPriceWithoutSellingPlan + e(se).discountedPriceWithoutSellingPlan, discountedPricesForSellingPlans: oe.discountedPricesForSellingPlans.map((it) => {
        var _t, Xt;
        const mn = (Xt = (_t = e(se).discountedPricesForSellingPlans.find((Un) => Un.sellingPlanId === it.sellingPlanId)) == null ? void 0 : _t.discountedPrice) != null ? Xt : e(se).discountedPriceWithoutSellingPlan;
        return { sellingPlanId: it.sellingPlanId, discountedPrice: it.discountedPrice + mn };
      }) };
      x() && e(Gt) ? ni.set({ id: x(), dealBar: e(Gt), product: e(Pe), quantity: e(J).reduce((it, { quantity: _t }) => it + _t, 0), pricing: Jt }) : ni.set({ id: null, dealBar: null, product: e(Pe), quantity: 1, pricing: Jt }), pr(d(), "variants-changed", { variantIdQuantities: Le, freeGifts: qe, upsells: $e, bundleProducts: ct, pricing: { discountedPrice: { amount: gt, formatted: u()(gt) }, fullPrice: { amount: zt, formatted: u()(zt) }, discountedPricePerItem: { amount: oe.discountedPricePerItem, formatted: u()(oe.discountedPricePerItem) }, fullPricePerItem: { amount: oe.fullPricePerItem, formatted: u()(oe.fullPricePerItem) } }, formattedPrice: u()(oe.discountedPrice), validation: e(pe) }), pr(d(), "items-changed", {});
    }
    Qe != null && Qe.hideBehindScratchOff && p().scratchOffEnabled && (h().preview ? h().previewScratchOff : v().availableForSale) || x(x() || p().preselectedDealBarId || void 0), Ze(() => {
      B() && p() && tn(() => {
        if (!x()) return;
        const oe = p().dealBars.find((Le) => Le.id === x());
        oe && we(oe) && X(oe) !== B() && (function(Le, qe) {
          if (!x()) return;
          const $e = Le.dealBars.slice().sort((gt, zt) => X(gt) - X(zt));
          let ct = $e[0];
          for (const gt of $e) if (we(gt)) {
            if (X(gt) > qe) break;
            ct = gt;
          }
          Ie(ct.id);
        })(p(), B());
      });
    });
    const Pe = g(() => e(_e) || v()), tt = g(() => {
      const oe = e(J).map(({ variant: Le }) => Le);
      return e(Pe).sellingPlans.filter((Le) => oe.some((qe) => qe.sellingPlans.some(($e) => $e.id === Le.id)));
    }), rt = g(() => e(tt).find((oe) => oe.id === y())), st = g(() => y() ? e(Pe).sellingPlans.find((oe) => oe.id === y()) : void 0), Xe = g(() => ws(e(he), e(st), e(tt), e(Pe).requiresSellingPlan));
    let Ue = g(() => p().subscriptionsEnabled && p().subscriptions && (e(tt).length > 0 || h().preview)), vt = g(() => {
      var oe, Le;
      return e(Ue) && ((oe = p().subscriptions) == null ? void 0 : oe.showPrices) && ((Le = p().subscriptions) == null ? void 0 : Le.hideDealBarPrices);
    }), Qt = g(() => x() ? p().dealBars.findIndex((oe) => oe.id === x()) : null);
    const an = g(() => p().scratchOffEnabled ? p().scratchOff : null), Tn = g(() => (p().blockLayout === "vertical" || p().blockLayout === "plain") && (h().preview || v().availableForSale)), yt = g(() => p().dealBars.reduce((oe, Le) => {
      const qe = e(an) && e(Tn) && Le.hideBehindScratchOff, $e = oe[oe.length - 1];
      return qe && ($e == null ? void 0 : $e.type) === "scratch" ? $e.bars.push(Le) : qe ? oe.push({ type: "scratch", key: Le.id, bars: [Le] }) : oe.push({ type: "visible", key: Le.id, bar: Le }), oe;
    }, [])), Ut = g(() => e(J).reduce((oe, { quantity: Le }) => oe + Le, 0) || 1), Gt = g(() => x() ? p().dealBars.find((oe) => oe.id === x()) : void 0), on = g(() => {
      var oe, Le;
      return !!((oe = e(Gt)) != null && oe.sellingPlanEnabled) && !!((Le = e(Gt)) != null && Le.sellingPlanGid);
    }), xn = g(() => {
      var oe;
      return ((oe = e(Gt)) == null ? void 0 : oe.productPersonalisation) && (p().blockLayout === "horizontal" || p().blockLayout === "grid");
    }), cn = g(() => e(Gt) ? e(Gt).dealBarType === void 0 || e(Gt).dealBarType === "quantity-break" ? B() || Number(e(Gt).quantity) || 1 : e(Gt).dealBarType === "bxgy" ? B() || e(Gt).buyQuantity + e(Gt).getQuantity : e(Gt).dealBarType === "bundle" ? 1 : B() || 1 : B() || 1), un = g(() => e(J).flatMap(({ variant: oe, quantity: Le }) => Array(Le).fill(oe.id))), ke = g(() => {
      if (e(fe).length === 0) return [];
      const oe = e(fe).reduce((qe, $e) => Math.max(qe, $e.productIndex), -1), Le = Array.from({ length: oe + 1 }, () => "");
      for (const qe of e(fe)) Le[qe.productIndex] = qe.text;
      return Le;
    });
    var Je = { rotateBundleNonce: function() {
      te(_, Math.random(), !0);
    }, selectedVariants: function() {
      return M().map((oe) => ({ variantId: oe.id, quantity: oe.quantity, properties: oe.properties }));
    }, items: M, pricing: function() {
      const oe = e(de).discountedPrice + e(se).discountedPrice, Le = e(de).fullPrice + e(se).fullPrice;
      return { discountedPrice: { amount: oe / 100, formatted: u()(oe) }, fullPrice: { amount: Le / 100, formatted: u()(Le) }, discountedPricePerItem: { amount: e(de).discountedPricePerItem / 100, formatted: u()(e(de).discountedPricePerItem) }, fullPricePerItem: { amount: e(de).fullPricePerItem / 100, formatted: u()(e(de).fullPricePerItem) }, discountedPriceWithoutSellingPlan: { amount: (e(de).discountedPriceWithoutSellingPlan + e(se).discountedPriceWithoutSellingPlan) / 100, formatted: u()(e(de).discountedPriceWithoutSellingPlan + e(se).discountedPriceWithoutSellingPlan) }, discountedPricesForSellingPlans: e(de).discountedPricesForSellingPlans.map((qe) => {
        var $e, ct;
        const gt = (ct = ($e = e(se).discountedPricesForSellingPlans.find((Jt) => Jt.sellingPlanId === qe.sellingPlanId)) == null ? void 0 : $e.discountedPrice) != null ? ct : e(se).discountedPriceWithoutSellingPlan, zt = qe.discountedPrice + gt;
        return { sellingPlanId: qe.sellingPlanId, amount: zt / 100, formatted: u()(zt) };
      }) };
    }, deal: function() {
      return { subscriptionsEnabled: p().subscriptionsEnabled || p().dealBars.some((oe) => oe.sellingPlanEnabled) };
    }, isItemSelectionValid: function() {
      const { requiresItemSelection: oe, allItemsSelected: Le } = e(pe);
      return !oe || Le;
    }, validateItemSelection: function() {
      var oe, Le;
      const { requiresItemSelection: qe, allItemsSelected: $e } = e(pe);
      return qe && !$e ? (Gi(!0), { valid: !1, message: ((Le = (oe = p().collectionBreaks) == null ? void 0 : oe.requireItemSelectionAlert) == null ? void 0 : Le.text) || null }) : (Gi(!1), { valid: !0, message: null });
    }, get component() {
      return d();
    }, set component(oe) {
      d(oe), m();
    }, get config() {
      return h();
    }, set config(oe) {
      h(oe), m();
    }, get translations() {
      return f();
    }, set translations(oe = {}) {
      f(oe), m();
    }, get dealBlock() {
      return p();
    }, set dealBlock(oe) {
      p(oe), m();
    }, get product() {
      return v();
    }, set product(oe) {
      v(oe), m();
    }, get currentVariantId() {
      return I();
    }, set currentVariantId(oe) {
      I(oe), m();
    }, get sellingPlanId() {
      return y();
    }, set sellingPlanId(oe) {
      y(oe), m();
    }, get selectedDealBarId() {
      return x();
    }, set selectedDealBarId(oe) {
      x(oe), m();
    }, get quantity() {
      return B();
    }, set quantity(oe) {
      B(oe), m();
    }, get mediaImages() {
      return D();
    }, set mediaImages(oe = []) {
      D(oe), m();
    }, get otherProducts() {
      return j();
    }, set otherProducts(oe = []) {
      j(oe), m();
    }, get collectionBreaksProducts() {
      return C();
    }, set collectionBreaksProducts(oe = []) {
      C(oe), m();
    }, get complementaryProducts() {
      return F();
    }, set complementaryProducts(oe = []) {
      F(oe), m();
    }, get nativeBundleProductIds() {
      return K();
    }, set nativeBundleProductIds(oe = []) {
      K(oe), m();
    }, get compact() {
      return O();
    }, set compact(oe = !1) {
      O(oe), m();
    }, get variantBadges() {
      return le();
    }, set variantBadges(oe = []) {
      le(oe), m();
    } }, ie = l0(), Fe = ve(ie), Be = S(Fe);
    let Ee;
    {
      const oe = (qe, $e = Wr) => {
        var ct = ze(), gt = ve(ct), zt = (it) => {
          {
            let _t = g(() => $e().id === x()), Xt = g(() => $e().id === x() ? e(ke) : []);
            ju(it, { get selectedDealBarIndex() {
              return e(Qt);
            }, get dealBlock() {
              return p();
            }, get dealBar() {
              return $e();
            }, get product() {
              return e(ee);
            }, get otherProducts() {
              return e(N);
            }, get complementaryProducts() {
              return e(H);
            }, get selected() {
              return e(_t);
            }, get currentVariantId() {
              return I();
            }, get componentId() {
              return Y;
            }, get sellingPlan() {
              return e(st);
            }, onProgressiveGiftsChange: St, onDealBarSelect: ge, onDealBarDeselect: me, onVariantSelect: Me, onVariantsChange: nt, onPersonalisationsChange: Mt, get personalisationInitialValues() {
              return e(Xt);
            } });
          }
        }, Jt = (it) => {
          var _t = ze(), Xt = ve(_t), mn = (ra) => {
            {
              let Il = g(() => $e().id === x()), Qs = g(() => $e().id === x() ? e(ke) : []);
              Gu(ra, { get selectedDealBarIndex() {
                return e(Qt);
              }, get dealBlock() {
                return p();
              }, get dealBar() {
                return $e();
              }, get product() {
                return e(ee);
              }, get otherProducts() {
                return e(N);
              }, get complementaryProducts() {
                return e(H);
              }, get selected() {
                return e(Il);
              }, get currentVariantId() {
                return I();
              }, get componentId() {
                return Y;
              }, get sellingPlan() {
                return e(st);
              }, onProgressiveGiftsChange: St, onDealBarSelect: ge, onDealBarDeselect: me, onVariantSelect: Me, onVariantsChange: nt, onPersonalisationsChange: Mt, get personalisationInitialValues() {
                return e(Qs);
              } });
            }
          }, Un = (ra) => {
            var Il = ze(), Qs = ve(Il), C0 = (ai) => {
              {
                let Ml = g(() => $e().id === x()), Ws = g(() => $e().id === x() ? e(ke) : []);
                od(ai, { get dealBlock() {
                  return p();
                }, get dealBar() {
                  return $e();
                }, get selectedDealBarIndex() {
                  return e(Qt);
                }, get otherProducts() {
                  return e(N);
                }, get complementaryProducts() {
                  return e(H);
                }, get componentId() {
                  return Y;
                }, get selected() {
                  return e(Ml);
                }, get globalSellingPlan() {
                  return e(st);
                }, onProgressiveGiftsChange: St, onDealBarSelect: ge, onDealBarDeselect: me, onVariantsChange: Re, onPersonalisationsChange: Mt, get personalisationInitialValues() {
                  return e(Ws);
                } });
              }
            }, B0 = (ai) => {
              var Ml = ze(), Ws = ve(Ml), I0 = (ii) => {
                {
                  let Us = g(() => $e().id === x() ? B() && Number(B()) : void 0), Hs = g(() => $e().id === x()), Zs = g(() => $e().id === x() ? e(ke) : []);
                  Nu(ii, { get dealBlock() {
                    return p();
                  }, get dealBar() {
                    return $e();
                  }, get selectedDealBarIndex() {
                    return e(Qt);
                  }, get product() {
                    return e(ee);
                  }, get collectionBreaksProducts() {
                    return e(Q);
                  }, get otherProducts() {
                    return e(N);
                  }, get complementaryProducts() {
                    return e(H);
                  }, get customQuantity() {
                    return e(Us);
                  }, get selected() {
                    return e(Hs);
                  }, onProgressiveGiftsChange: St, get currentVariantId() {
                    return I();
                  }, get componentId() {
                    return Y;
                  }, get globalSellingPlan() {
                    return e(st);
                  }, onDealBarSelect: ge, onDealBarDeselect: me, onVariantSelect: Me, onVariantsChange: ht, onPersonalisationsChange: Mt, get personalisationInitialValues() {
                    return e(Zs);
                  } });
                }
              }, M0 = (ii) => {
                {
                  let Us = g(() => $e().id === x() ? B() && Number(B()) : void 0), Hs = g(() => $e().id === x()), Zs = g(() => $e().id === x() ? e(ke) : []);
                  $s(ii, { get selectedDealBarIndex() {
                    return e(Qt);
                  }, get dealBlock() {
                    return p();
                  }, get dealBar() {
                    return $e();
                  }, get product() {
                    return e(ee);
                  }, get otherProducts() {
                    return e(N);
                  }, get complementaryProducts() {
                    return e(H);
                  }, get customQuantity() {
                    return e(Us);
                  }, get selected() {
                    return e(Hs);
                  }, get currentVariantId() {
                    return I();
                  }, get componentId() {
                    return Y;
                  }, get globalSellingPlan() {
                    return e(st);
                  }, onProgressiveGiftsChange: St, onDealBarSelect: ge, onDealBarDeselect: me, onVariantSelect: Me, onVariantsChange: kt, onPersonalisationsChange: Mt, get personalisationInitialValues() {
                    return e(Zs);
                  } });
                }
              };
              R(Ws, (ii) => {
                !p().collectionBreaksEnabled || !p().collectionBreaks || $e().dealBarType && $e().dealBarType !== "quantity-break" && $e().dealBarType !== "bxgy" ? ii(M0, !1) : ii(I0);
              }, !0), b(ai, Ml);
            };
            R(Qs, (ai) => {
              $e().dealBarType === "sku" ? ai(C0) : ai(B0, !1);
            }, !0), b(ra, Il);
          };
          R(Xt, (ra) => {
            $e().dealBarType === "bundle" ? ra(mn) : ra(Un, !1);
          }, !0), b(it, _t);
        };
        R(gt, (it) => {
          $e().dealBarType === "mix-and-match" ? it(zt) : it(Jt, !1);
        }), b(qe, ct);
      };
      var We = S(Be), He = (qe) => {
        var $e = a0(), ct = ve($e), gt = (it) => {
          var _t = r0();
          Te(S(_t), () => e(Oe)), w(_t), b(it, _t);
        };
        R(ct, (it) => {
          e(Oe) && it(gt);
        });
        var zt = E(ct, 2), Jt = (it) => {
          td(it, { get timer() {
            return p().timer;
          } });
        };
        R(zt, (it) => {
          p().timerEnabled && p().timer && it(Jt);
        }), b(qe, $e);
      };
      R(We, (qe) => {
        O() || qe(He);
      });
      var At = E(We, 2), jt = (qe) => {
        Ns(qe, { get subscriptions() {
          return p().subscriptions;
        }, get sellingPlans() {
          return e(tt);
        }, get selectedSellingPlan() {
          return e(rt);
        }, get hideSellingPlanSelector() {
          return e(on);
        }, onChange: lt, onRequestAddToCart: dt });
      };
      R(At, (qe) => {
        var $e;
        e(Ue) && (($e = p().subscriptions) == null ? void 0 : $e.position) === "above" && qe(jt);
      });
      var pt = E(At, 2);
      let Le;
      Yt(pt, 21, () => e(yt), (qe) => qe.key, (qe, $e) => {
        var ct = ze(), gt = ve(ct), zt = (it) => {
          Wu(it, { get settings() {
            return e(an);
          }, onReveal: () => {
            return _t = e($e).bars, void (!x() && Qe && _t.includes(Qe) && ge({ dealBarId: Qe.id, dealBarQuantity: X(Qe), preselected: !0 }));
            var _t;
          }, children: (_t, Xt) => {
            var mn = ze();
            Yt(ve(mn), 17, () => e($e).bars, (Un) => Un.id, (Un, ra) => {
              oe(Un, () => e(ra));
            }), b(_t, mn);
          }, $$slots: { default: !0 } });
        }, Jt = (it) => {
          var _t = ze(), Xt = ve(_t), mn = (Un) => {
            oe(Un, () => e($e).bar);
          };
          R(Xt, (Un) => {
            e($e).type === "visible" && Un(mn);
          }, !0), b(it, _t);
        };
        R(gt, (it) => {
          e($e).type === "scratch" && e(an) ? it(zt) : it(Jt, !1);
        }), b(qe, ct);
      }), w(pt);
      var Ct = E(pt, 2), Ht = (qe) => {
        Ca(qe, { get product() {
          return e(Pe);
        }, get productPersonalisation() {
          return e(Gt).productPersonalisation;
        }, get selectedVariantIds() {
          return e(un);
        }, get quantity() {
          return e(cn);
        }, get addPersonalisationModal() {
          return p().addPersonalisationModal;
        }, onPersonalisationsChange: Mt, get initialValues() {
          return e(ke);
        } });
      };
      R(Ct, (qe) => {
        var $e;
        e(xn) && (($e = e(Gt)) != null && $e.productPersonalisation) && qe(Ht);
      });
      var Bt = E(Ct, 2), Kt = (qe) => {
        Ns(qe, { get subscriptions() {
          return p().subscriptions;
        }, get sellingPlans() {
          return e(tt);
        }, get selectedSellingPlan() {
          return e(rt);
        }, get hideSellingPlanSelector() {
          return e(on);
        }, onChange: lt, onRequestAddToCart: dt });
      };
      R(Bt, (qe) => {
        var $e;
        e(Ue) && (($e = p().subscriptions) == null ? void 0 : $e.position) === "below" && qe(Kt);
      });
      var ln = E(Bt, 2), Gn = (qe) => {
        var $e = i0();
        Te(S($e), () => c()("system.out_of_stock")), w($e), b(qe, $e);
      };
      R(ln, (qe) => {
        e(Ge) && (e(J).length > 1 || e(J)[0].quantity > 1) && qe(Gn);
      });
      var Cn = E(ln, 2), Wn = (qe) => {
        ed(qe, { get checkboxUpsells() {
          return p().checkboxUpsells;
        }, get dealBlock() {
          return p();
        }, get otherProducts() {
          return e(N);
        }, get complementaryProducts() {
          return e(H);
        }, get dealSellingPlan() {
          return e(Xe);
        }, get dealBarQuantity() {
          return e(Ut);
        }, onChange: Ft });
      };
      R(Cn, (qe) => {
        !O() && p().checkboxUpsellsEnabled && p().checkboxUpsells && qe(Wn);
      });
      var vn = E(Cn, 2), Dt = (qe) => {
        Ku(qe, { get progressiveGifts() {
          return p().progressiveGifts;
        }, get dealBlock() {
          return p();
        }, get otherProducts() {
          return e(N);
        }, get selectedDealBarIndex() {
          return e(Qt);
        }, onChange: St, onUnlock: Ve });
      };
      R(vn, (qe) => {
        p().progressiveGiftsEnabled && p().progressiveGifts && p().progressiveGifts.layout !== "deal-bar" && qe(Dt);
      });
      var ot = E(vn, 2), qt = (qe) => {
        {
          let $e = g(() => e(pe).missingItemsCount > 0);
          cd(qe, { get collectionBreaks() {
            return p().collectionBreaks;
          }, get hasItemsToSelect() {
            return e($e);
          } });
        }
      };
      R(ot, (qe) => {
        p().collectionBreaksEnabled && qe(qt);
      }), w(Be), be((qe, $e, ct) => Le = Tt(pt, 1, "kaching-bundles__bars", null, Le, ct), [() => ({ "kaching-bundles__block--horizontal": p().blockLayout === "horizontal", "kaching-bundles__block--grid": p().blockLayout === "grid", "kaching-bundles__block--plain": p().blockLayout === "plain" }), () => p().abTestVariantNumber ? ms(p().abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": p().blockLayout === "horizontal", "kaching-bundles__bars--grid": p().blockLayout === "grid", "kaching-bundles__bars--plain": p().blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(vt) })]);
    }
    w(Fe);
    var xt = E(Fe, 2), Zt = (oe) => {
      nd(oe, { get shopCustomStyles() {
        return h().shopCustomStyles;
      }, get customStyles() {
        return p().customStyles;
      }, get dealBlockId() {
        return p().id;
      } });
    };
    R(xt, (oe) => {
      p().customStylesEnabled && oe(Zt);
    }), be((oe, Le, qe) => {
      var $e;
      Ee = Tt(Be, 1, "kaching-bundles__block kaching-bundles__block--loaded", null, Ee, oe), xe(Be, "data-deal-block-id", p().id), xe(Be, "data-ab-test-variant-id", p().abTestVariantId), xe(Be, "data-ab-test-variant", Le), xe(Be, "data-selling-plan-id", ($e = e(Xe)) == null ? void 0 : $e.id), Wt(Be, e(Se));
    }, [() => ({ "kaching-bundles__block--horizontal": p().blockLayout === "horizontal", "kaching-bundles__block--grid": p().blockLayout === "grid", "kaching-bundles__block--plain": p().blockLayout === "plain" }), () => p().abTestVariantNumber ? ms(p().abTestVariantNumber) : void 0, () => ({ "kaching-bundles__bars--horizontal": p().blockLayout === "horizontal", "kaching-bundles__bars--grid": p().blockLayout === "grid", "kaching-bundles__bars--plain": p().blockLayout === "plain", "kaching-bundles__bars--hide-prices": e(vt) })]), b(n, ie);
    var _n = Ke(Je);
    return s(), _n;
  }
  customElements.define("kaching-bundles-block", Ne(ud, { config: { attribute: "config", type: "Object" }, translations: { attribute: "translations", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, product: { attribute: "product", type: "Object" }, otherProducts: { attribute: "other-products", type: "Array" }, collectionBreaksProducts: { attribute: "collection-breaks-products", type: "Array" }, complementaryProducts: { attribute: "complementary-products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" }, currentVariantId: { attribute: "current-variant-id", type: "Number" }, sellingPlanId: { attribute: "selling-plan-id", type: "Number" }, selectedDealBarId: { attribute: "selected-deal-bar-id", type: "String" }, quantity: { attribute: "quantity", type: "Number" }, nativeBundleProductIds: { attribute: "native-bundle-product-ids", type: "Array" }, compact: { attribute: "compact", type: "Boolean" }, variantBadges: { attribute: "variant-badges", type: "Array" }, component: {} }, [], ["rotateBundleNonce", "selectedVariants", "items", "pricing", "deal", "isItemSelectionValid", "validateItemSelection"], !1, (n) => class extends n {
    constructor() {
      super(), fn(this, "component"), this.component = this, this.innerHTML && (pr(this, "kaching-bundles-block-hydrated"), this.innerHTML = "");
    }
  }));
  var s0 = $('<div class="kaching-bundles"><!></div>');
  function dd(n, t) {
    Ye(t, !0);
    const r = k(t, "config", 7), a = k(t, "dealBlock", 7), l = k(t, "products", 23, () => []), o = k(t, "mediaImages", 7), u = k(t, "translations", 7), { setConfig: c } = Pa(r()), { setMoneyFormat: i } = Za(r().moneyFormat), { setTranslations: s } = wa(u()), { setMediaImages: d } = Mi(o()), { setSwatchSettings: h } = Di({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape });
    Ze(() => {
      c(r());
    }), Ze(() => {
      i(r().moneyFormat, !!a().showPricesWithoutDecimals);
    }), Ze(() => {
      s(u());
    }), Ze(() => {
      d(o());
    }), Ze(() => {
      h({ swatchOptions: a().swatchOptions || [], swatchSize: a().swatchSize, swatchShape: a().swatchShape });
    });
    const f = g(() => a().dealBars.find((x) => x.dealBarType === "mix-and-match"));
    var p = { get config() {
      return r();
    }, set config(x) {
      r(x), m();
    }, get dealBlock() {
      return a();
    }, set dealBlock(x) {
      a(x), m();
    }, get products() {
      return l();
    }, set products(x = []) {
      l(x), m();
    }, get mediaImages() {
      return o();
    }, set mediaImages(x) {
      o(x), m();
    }, get translations() {
      return u();
    }, set translations(x) {
      u(x), m();
    } }, v = s0(), I = S(v), y = (x) => {
      Os(x, { get dealBlock() {
        return a();
      }, get dealBar() {
        return e(f);
      }, get products() {
        return l();
      }, onChoose: () => {
      } });
    };
    return R(I, (x) => {
      e(f) && x(y);
    }), w(v), b(n, v), Ke(p);
  }
  customElements.define("kaching-bundles-mix-and-match-choose-product", Ne(dd, { config: { attribute: "config", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, translations: { attribute: "translations", type: "Object" }, products: { attribute: "products", type: "Array" }, mediaImages: { attribute: "media-images", type: "Array" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), fn(this, "component"), this.component = this;
    }
  }));
  var o0 = $('<div class="kaching-bundles"><!></div>');
  function gd(n, t) {
    Ye(t, !0);
    const r = k(t, "config", 7), a = k(t, "product", 7), l = k(t, "translations", 7), o = k(t, "addPersonalisationModal", 7), { setConfig: u } = Pa(r()), { setTranslations: c } = wa(l());
    Ze(() => {
      u(r()), c(l());
    });
    const i = g(() => {
      var h, f;
      return (f = (h = a()) == null ? void 0 : h.variants) != null && f[0] ? [{ variant: a().variants[0], index: 0 }, { variant: a().variants[0], index: 1 }] : [];
    });
    var s = { get config() {
      return r();
    }, set config(h) {
      r(h), m();
    }, get product() {
      return a();
    }, set product(h) {
      a(h), m();
    }, get translations() {
      return l();
    }, set translations(h) {
      l(h), m();
    }, get addPersonalisationModal() {
      return o();
    }, set addPersonalisationModal(h) {
      o(h), m();
    } }, d = o0();
    return zs(S(d), { get product() {
      return a();
    }, get selectedVariants() {
      return e(i);
    }, get addPersonalisationModal() {
      return o();
    }, inline: !0, personalisationValues: [], onConfirm: () => {
    }, onClose: () => {
    } }), w(d), b(n, d), Ke(s);
  }
  customElements.define("kaching-bundles-personalisation-modal", Ne(gd, { config: { attribute: "config", type: "Object" }, product: { attribute: "product", type: "Object" }, translations: { attribute: "translations", type: "Object" }, addPersonalisationModal: { attribute: "add-personalisation-modal", type: "Object" } }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), fn(this, "component"), this.component = this;
    }
  }));
  function c0(n, t) {
    t().dispatchEvent(new CustomEvent("kaching-bundles-sticky-atc-clicked", { bubbles: !0, composed: !0 }));
  }
  var u0 = $('<img class="kaching-bundles-sticky-atc__image"/>'), d0 = $('<button class="kaching-bundles-sticky-atc__button"><!></button>'), g0 = $('<div class="kaching-bundles"><div class="kaching-bundles-sticky-atc"><div class="kaching-bundles-sticky-atc__content"><!> <div class="kaching-bundles-sticky-atc__title"><!></div></div> <!></div></div>');
  function hd(n, t) {
    var r;
    Ye(t, !0);
    const a = () => De(ni, "$selectedDealBarStore", o), l = () => De(v, "$translate", o), [o, u] = ft(), c = k(t, "component", 7), i = k(t, "config", 7), s = k(t, "stickyAtc", 7), d = k(t, "translations", 7), h = k(t, "product", 7), f = k(t, "dealBlock", 7), { setConfig: p } = Pa(i()), { translate: v, setTranslations: I } = wa(d()), { formatPrice: y, setMoneyFormat: x } = Za(i().moneyFormat, (r = f()) == null ? void 0 : r.showPricesWithoutDecimals);
    Ze(() => {
      p(i());
    }), Ze(() => {
      var G;
      x(i().moneyFormat, !!((G = f()) != null && G.showPricesWithoutDecimals));
    }), Ze(() => {
      I(d());
    });
    const B = g(() => ((G) => pn({ "kaching-bundles-sticky-atc-background-color": je(G.backgroundColor), "kaching-bundles-sticky-atc-title-color": je(G.titleColor), "kaching-bundles-sticky-atc-button-color": je(G.buttonColor), "kaching-bundles-sticky-atc-button-text-color": je(G.buttonTextColor), "kaching-bundles-sticky-atc-title-font-size": G.titleFont.size + "px", "kaching-bundles-sticky-atc-button-font-size": G.buttonFont.size + "px", "kaching-bundles-sticky-atc-title-font-style": er(G.titleFont.style), "kaching-bundles-sticky-atc-title-font-weight": Xn(G.titleFont.style), "kaching-bundles-sticky-atc-button-font-style": er(G.buttonFont.style), "kaching-bundles-sticky-atc-button-font-weight": Xn(G.buttonFont.style), "kaching-bundles-sticky-atc-product-photo-size": G.productPhotoSize + "px", "kaching-bundles-sticky-atc-button-padding": G.buttonPadding + "px", "kaching-bundles-sticky-atc-product-photo-corner-radius": G.productPhotoCornerRadius + "px", "kaching-bundles-sticky-atc-button-corner-radius": G.buttonCornerRadius + "px" }))(s())), D = g(() => {
      var G;
      return ((G = a()) == null ? void 0 : G.pricing.fullPrice) || h().variants[0].compareAtPrice || h().variants[0].price;
    }), j = g(() => {
      var G;
      return ((G = a()) == null ? void 0 : G.pricing.discountedPrice) || h().variants[0].price;
    }), C = g(() => {
      var G;
      return ((G = a()) == null ? void 0 : G.quantity) || 1;
    }), F = g(() => hn({ priceFormatter: De(y, "$formatPrice", o), product: h(), totalFullPrice: e(D), totalDiscountedPrice: e(j), quantity: e(C), unitQuantity: null })), K = g(() => e(F)(l()(s().title)));
    var O = { get component() {
      return c();
    }, set component(G) {
      c(G), m();
    }, get config() {
      return i();
    }, set config(G) {
      i(G), m();
    }, get stickyAtc() {
      return s();
    }, set stickyAtc(G) {
      s(G), m();
    }, get translations() {
      return d();
    }, set translations(G) {
      d(G), m();
    }, get product() {
      return h();
    }, set product(G) {
      h(G), m();
    }, get dealBlock() {
      return f();
    }, set dealBlock(G) {
      f(G), m();
    } }, le = g0(), ee = S(le), N = S(ee), H = S(N), Q = (G) => {
      var U = u0();
      be(() => {
        xe(U, "src", h().image), xe(U, "alt", h().title);
      }), b(G, U);
    };
    R(H, (G) => {
      s().productPhotoSize > 0 && G(Q);
    });
    var Z = E(H, 2);
    Te(S(Z), () => e(K)), w(Z), w(N);
    var z = E(N, 2), P = (G) => {
      var U = d0();
      U.__click = [c0, c], Te(S(U), () => l()(s().buttonText)), w(U), b(G, U);
    };
    R(z, (G) => {
      s().buttonText && G(P);
    }), w(ee), w(le), be(() => Wt(ee, e(B))), b(n, le);
    var V = Ke(O);
    return u(), V;
  }
  Sn(["click"]), customElements.define("kaching-bundles-sticky-atc", Ne(hd, { config: { attribute: "config", type: "Object" }, stickyAtc: { attribute: "sticky-atc", type: "Object" }, translations: { attribute: "translations", type: "Object" }, product: { attribute: "product", type: "Object" }, dealBlock: { attribute: "deal-block", type: "Object" }, component: {} }, [], [], !1, (n) => class extends n {
    constructor() {
      super(), fn(this, "component"), this.component = this;
    }
  }));
  const h0 = lu, p0 = tu, f0 = ud, b0 = dd, v0 = gd, _0 = hd, m0 = Du.element, k0 = h0.element, y0 = p0.element, x0 = f0.element, w0 = b0.element, P0 = v0.element, S0 = _0.element;
  return Ot.ChooseMultipleGifts = y0, Ot.ChooseProduct = k0, Ot.DealBar = m0, Ot.DealBlock = x0, Ot.MixAndMatchChooseProduct = w0, Ot.PersonalisationModal = P0, Ot.StickyAtc = S0, Object.defineProperty(Ot, Symbol.toStringTag, { value: "Module" }), Ot;
})({});
