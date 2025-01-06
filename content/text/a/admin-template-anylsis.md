---
title: 管理后台模版调研
tags: develop
---

## 结论
现在不适合做。原因：
1. 找不到用户痛点。

## 为什么要做调研
有可以通过卖模版赚钱的可能性。
1. 有一定的市场规模(利基)。
2. 在知道场景的基础上，做一套皮肤的工作量不算很大。
  2.1 有很多项目，组件可以用。
  2.2 可以通过 v0 来快速生成代码。

## 假设
1. 用模版是为了效率。
2. 有些业务场景，现有的模版未被覆盖。

## 解决的痛点
1. 解决上面的假设2， 提供更丰富的场景。

## 遇到的问题
1. 很难获得用户的场景。看 Github 上的 fork 和 used by 的项目，大部分只提交了一次，无法知道具体的场景。 猜测：内部业务系统一般不开源。


## Payload
Github 上被 8241 个项目使用，绝大部分都是只是创建了脚手架(一次提交，0 star)。 ecommerce

 
使用的项目:
* [DigitalMarketplace](https://github.com/shaman-004/DigitalMarketplace) 商城。买卖数字资产?
* https://github.com/iamLiwansh/DiggitalHippo 商城
* https://github.com/Sid-hac/DigitalPanda 商城
* https://github.com/tendertree/tenderMono 技术探索
* https://github.com/Discode-Stu/hippo-hustle-digital-marketplace

有好几个是数字资产的商城？

加插件的：https://github.com/notchris/payload-label-popover

官方自己的 Examples： https://github.com/payloadcms/payload/tree/main/examples

## resource
* [Payload](https://github.com/payloadcms/payload) CMS，电商，官网
  * [Used by](https://github.com/payloadcms/payload/network/dependents)
