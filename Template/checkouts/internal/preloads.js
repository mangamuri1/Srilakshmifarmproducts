
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.8-IUM0k7.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.CzflPW7q.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.D1cjvWbM.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.DZoFZn01.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode-legacy.DsmUNEDQ.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload-legacy.YVpFkv9k.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BW3R3WiF.js","/cdn/shopifycloud/checkout-web/assets/c1/context-utilities-legacy.DLanWTKr.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.BJfAH8ee.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency-legacy.Bvj9aD5l.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-shared-legacy.BSbQh8pe.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors-legacy.BKRf0V--.js","/cdn/shopifycloud/checkout-web/assets/c1/purchasing-company-isValidPurchasingCompanyBillingAddress-legacy.DkOoddzp.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.BDJy23C6.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground-legacy.j-cLmCo1.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.C3N5LvzS.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors-legacy.DGkTM96C.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel-legacy.KhbE3TUH.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.FipFtwPM.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.2BNGGRfF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.XWK6C6f2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.EvdcF86X.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.DmMD0fEm.js","/cdn/shopifycloud/checkout-web/assets/c1/CrossBorderConsolidation-legacy.BJVKusdS.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.B3Sj-rJF.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.CentxdEK.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.Cxz3YsGT.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.CsPBVF-1.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.Beae6XvE.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.5GzN1gDg.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.DLxIvHUK.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.DNCwpbGW.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.ZIo3pKpJ.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.CvYeU3MQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.JVTaKNrD.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.CJrpjrzf.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.CZb-TfK8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.C9Rzaqx3.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops-legacy.D2HVfHbE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.CYSfokXj.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.DjbWOw8Y.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.BrhYved5.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.CXhNi4rw.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.B0oRDPdf.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.P_gSNcNR.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.CFPZjhDA.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants-legacy.DuTKp7Ul.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.9WfcsFSt.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.BunocWXA.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.DDEmJ3wP.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.DPwgT1FT.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.CeVoiqse.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.C2qjb8Nc.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.BBdQHCbi.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.CaT04DGQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.CZtkRonh.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0718/4531/4800/files/adani_spices_logo_x320.png?v=1722319458"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  