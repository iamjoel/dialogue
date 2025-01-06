---
title: React
---

## 数据
前端本质做的处理 UI(包括交互) 。 UI 的本质是为了呈现和操作信息。信息也就数据。

关于数据操作
useState

## UI
React 的通过模板语言(JSX, TSX) 声明了 数据 和 UI 的对应关系。

1 为了运行时的性能考虑，要避免不必要的 ReRender。方式:  
1. 缓存。 React.memo, useMemo, useCallback。 React 19 版本不需要写了，在编译的时候做处理来防止 ReRender。
2. 避免一些会导致 ReRender 的写法。比如 
  1. contextAPI 的 Provider 的变化。导致子元素都刷新。
  2. 一个 state 变化，在 useEffect 中派生改其他 state 导致额外的一次 ReRender。UseEffect runs after rendering your component, So if it makes any change to state, it'll cause additional renders
  3. ...

2DOM 数量很多时。内容很多的列表，很大的表格。 解决方案：只渲染部分(虚拟列表(react window))。

## 组件
组件间的通信。常见的场景:
* 父组件配置子组件: Props
* 父组件通知子组件做一些事: 子组件监听父组件的属性变化来做。
* 子组件有事件通知父组件: Props。 如: `onClick`, `onChange` 等。
* 父组件主动调用子组件暴露出来的方法: `useImperativeHandle`。 在 useImperativeHandle 中定义父组件能调用的方法。

## useEffect
### 什么时候该用
处理一些外部的内容。比如：调用接口(这块为了缓存和数据的复用，会用 SWR 或 React Query 这样的库)，设置 LocalStorge, 给 window 绑定事件。

### 什么时候不该用
1 衍生状态。 Anything that could be calculated from props or state, shouldn't be calculated inside a useEffect.
```
// ❌ Bad
useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);

// ✅ Good
const fullName = `${firstName} ${lastName}`;


// ❌ Bad
useEffect(() => {
  setFilteredItems(items.filter(item => item.id === selectedId));
}, [items, selectedId]);

// ✅ Good
const filteredItems = items.filter(item => item.id === selectedId);
// if logic is complex, can use a immediately run function
const filteredItems = useMemo(() => {

}, [...])
```

2 会增加代码复杂度的。如在 useEffect 中改 A， 另一个监听 A 值的变化，改 B(A -> B -> C ...)。