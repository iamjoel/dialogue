---
title: tailwind-merge
tags: suggestion
---

[tailwind-merge](https://github.com/dcastil/tailwind-merge) Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
```js
import { twMerge } from 'tailwind-merge'

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
```
