---
title: Resend
tags: BaaS
---

[Resend](https://resend.com/)
> The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.

获得 2023 年 Product hunt Golden kitty Award 的开发者类的金奖。

代码示例：
```javascript
import { Resend } from 'resend';

const resend = new Resend('re_123456789');

(async function() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();
```
