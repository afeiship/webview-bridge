const onBridgeReady = () => {
  return new Promise((resolve) => {
    // android
    function onBridgeReady() {
      document.removeEventListener('WebViewJavascriptBridgeReady', onBridgeReady);

      console.error(
        `<<WebviewBridge>> current existEventListener window.WebViewJavascriptBridge ${window.WebViewJavascriptBridge}`
      );
      resolve(window.WebViewJavascriptBridge);
    }

    if (window.WebViewJavascriptBridge) {
      console.error(
        `<<WebviewBridge>> current exist window.WebViewJavascriptBridge ${window.WebViewJavascriptBridge}`
      );
      return resolve(window.WebViewJavascriptBridge);
    } else {
      console.error(
        `<<WebviewBridge>> current not exist window.WebViewJavascriptBridge ${window.WebViewJavascriptBridge}`
      );
      document.addEventListener('WebViewJavascriptBridgeReady', onBridgeReady, false);
    }

    //ios
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(resolve);
    }
    window.WVJBCallbacks = [resolve];

    //iframe
    const WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(() => document.documentElement.removeChild(WVJBIframe), 0);
  });
};

export default onBridgeReady;
