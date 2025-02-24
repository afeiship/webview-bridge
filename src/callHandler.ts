import onBridgeReady from './onBridgeReady';

/** 调用native中的事件  */
const callHandler = (handlerName: string, data = {}, responseCallback?: (data: any) => void) => {
  return new Promise((resolve, reject) => {
    onBridgeReady()
      .then((bridge: any) => {
        bridge.callHandler(handlerName, data, responseCallback);
        resolve(data);
      })
      .catch(reject);
  });
};

export default callHandler;
