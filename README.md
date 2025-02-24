# webview-bridge
> Webview bridge.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/webview-bridge
```

## usage
```js
import {callHandler, registerHandler} from '@jswork/webview-bridge'

// callHandler
callHandler('closeWindow', {name: 'test'})

// registerHandler
registerHandler('closeWindow', (data) => {
  console.log(data)
})
```

## license
Code released under [the MIT license](https://github.com/afeiship/webview-bridge/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/webview-bridge
[version-url]: https://npmjs.org/package/@jswork/webview-bridge

[license-image]: https://img.shields.io/npm/l/@jswork/webview-bridge
[license-url]: https://github.com/afeiship/webview-bridge/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/webview-bridge
[size-url]: https://github.com/afeiship/webview-bridge/blob/master/dist/webview-bridge.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/webview-bridge
[download-url]: https://www.npmjs.com/package/@jswork/webview-bridge
