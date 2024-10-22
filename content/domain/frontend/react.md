---
title: React
---

## 数据
前端本质做的处理 UI(包括交互) 。 UI 的本质是为了呈现和操作信息。信息也就数据。

关于数据操作
useState

## UI
React 的通过模板语言(JSX, TSX) 声明了 数据 和 UI 的对应关系。

为了运行时的性能考虑，要避免不必要的 ReRender。方式
1. 缓存。 React.memo, useMemo, useCallback。 React 19 版本不需要写了，在编译的时候做处理来防止 ReRender。
2. 避免一些会导致 ReRender 的写法。比如 
  1. contextAPI 的 Provider 的变化。导致子元素都刷新。
  2. 一个 state 变化，在 useEffect 中派生改其他 state 导致额外的一次 ReRender。
  3. ...

DOM 数量很多时。虚拟列表(react window)。

## 组件
组件间的通信。常见的场景:
* 父组件配置子组件: Props
* 父组件通知子组件做一些事: 子组件监听父组件的属性变化来做。
* 子组件有事件通知父组件: Props。 如: `onClick`, `onChange` 等。
* 父组件主动调用子组件暴露出来的方法: `useImperativeHandle`。 在 useImperativeHandle 中定义父组件能调用的方法。