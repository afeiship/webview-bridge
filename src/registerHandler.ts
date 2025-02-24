import onBridgeReady from './onBridgeReady';

/** 注册事件 供native 调用 */
const registerHandler = (
  handlerName: string,
  handler: (data: any, callBack: (data: any) => void) => void
) => {
  return new Promise((resolve, reject) => {
    onBridgeReady()
      .then((bridge: any) => {
        bridge.registerHandler(handlerName, (data: any, responseCallback: (data: any) => void) => {
          handler(data, responseCallback);
        });
        resolve(true);
      })
      .catch(reject);
  });
};

export default registerHandler;
