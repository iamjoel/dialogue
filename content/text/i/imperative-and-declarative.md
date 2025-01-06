---
title: 命令式和声明式
---
命令式是面向过程。声明式是面向结果。以找出数组中对偶数为例。  
命令式：
```js
const arr = [1, 2, 3, 4, 5, 6];
const even = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  }
}
```

声明式：
```js
const arr = [1, 2, 3, 4, 5, 6];
const even = arr.filter((item) => item % 2 === 0);
```

## 命令式和声明式的应用
命令式：jQuery。  
声明式：[React](../r/react.md)，lodash(underscore)，函数式编程。

## 优缺点比较
声明式的代码更健壮，重复代码少。声明式本质是把可能会变的做了层抽象，来对变化的[解耦](../d/decouple.md)。比如，React 如果在浏览器中用配合 React DOM, 如果在原生应用中用 React Native。不用改逻辑代码。用 jQuery 就做不到。

命令式的代码容易懂。