interface WebViewJavascriptBridge {
  // 根据实际 Bridge 接口添加需要的方法和属性
  callHandler?: (name: string, data?: any, callback?: (response: any) => void) => void;
  registerHandler?: (name: string, handler: (data: any, callback: (response: any) => void) => void) => void;
}

declare global {
  interface Window {
    WebViewJavascriptBridge?: WebViewJavascriptBridge;
    WVJBCallbacks?: ((bridge: WebViewJavascriptBridge) => void)[];
  }
}

export {};
