---
title: Stripe
---
[官网](https://stripe.com/)
> Financial infrastructure for the internet
> Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.

提供全球支付的服务。使用体验好。费用不便宜（好像是流水的 3%，对应的国内的收钱吧好像是 0.1%）。

## 使用体验好
## 对开发者
提供多种交付方式：
1. [无代码](https://stripe.com/docs/no-code)。配置信息，会生成一个支付页面的链接。
2. 低代码/参考代码（少量代码）。一些具体场景的代码实现。可以下载实现的代码。[参考代码](https://github.com/stripe-samples)。
2. 代码。提供了多种语言的 SDK。可以直接调用 API。适合 UI 或 业务逻辑不能直接用 Stripe 实现的情况。


## 对外提供的 SDK 组织的研究
### [Stripe.js](https://stripe.com/docs/payments/elements)
开源。

包含内容：
* 业务组件
  * Payment Element: 选择支付方式。填卡号支付。
  * Express Checkout: 快捷支付。如 Apple Pay，Google Pay，PayPal 等。
  * Link Authentication Element: 支付验证码。填验证码。
  * Address Element: 填地址。

### [@stripe/react-stripe-js](https://www.npmjs.com/package/@stripe/react-stripe-js)
Stripe.js 的 React 组件的版本。

所有Stripe.js 的组件向 React 组件的转化：[这里](https://github.com/stripe/react-stripe-js/blob/d4db90d245430653a8b4698a1a6940df3fe3e184/src/index.ts)

[GitHub](https://github.com/stripe/react-stripe-js)

### [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)
把 Stripe.js 包装成 ES 模块来。方便在 React 中加载 Stripe.js。
```js
import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
```

只是一些胶水代码。组件的业务逻辑都在 stripe.js(不开源) 中。

