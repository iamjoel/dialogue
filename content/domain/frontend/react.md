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
1. 缓存。 React.memo, useMemo, useCallback。
2. 避免一些会导致 ReRender 的写法。比如 
  1. contextAPI 的 Provider 的变化。导致子元素都刷新。
  2. 一个 state 变化，在 useEffect 中坚挺导致额外的一次 ReRender。方式。
  3. ...
