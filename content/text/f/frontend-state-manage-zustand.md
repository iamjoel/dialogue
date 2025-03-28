---
title: Zustand
description: 状态管理
---

> A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.

[Zustand](https://zustand.docs.pmnd.rs)

[Demo]()

这里讲的是 V5 版本。

## 核心特性与场景
### 1 状态获取与更新
**默认采用合并更新**：Zustand 的 `set` 函数默认会合并新状态到原状态。

**替换更新**：若需完全替换状态，需设置第二个参数 `replace: true`：
```ts
set((state) => newState, true) // 完全替换
```

**深度嵌套对象的更新**。
```
set((state) => ({
    ...state,
    nested: {
      ...state.nested,
      deepProp: newValue
    }
  }))
```

可以用 `immer` 来优化:
```ts
set(produce(state => state.nested.deepProp = newValue))
```

**多值获取**：通过 `useStore` 和 `useShallow` 组合获取多个值：
```ts
const [searchValue, setSearchValue] = useStore(
  useShallow((state) => [state.searchValue, state.setSearchValue])
)
```

### 2 多实例管理
Zustand 的 Store 是全局的，只有一个实例。要实现多实例，可以用工厂来创建实例: 

```ts
export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }))
}
```

然后在存到 React 的 Context 中。  
```ts
export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createCounterStore()
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  )
}
```


### 3 [状态持久化](https://zustand.docs.pmnd.rs/guides/connect-to-state-with-url-hash)

用 `persist` 可以默认持久化到 `localStorage`。也可以持久化到 url 的 hash 的其他地方，只要实现了方法: `getItem`，`setItem`，`removeItem`。如:  
```ts
import { create } from 'zustand'
import { persist, StateStorage, createJSONStorage } from 'zustand/middleware'

const hashStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    const storedValue = searchParams.get(key) ?? ''
    return JSON.parse(storedValue)
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.set(key, JSON.stringify(newValue))
    location.hash = searchParams.toString()
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(location.hash.slice(1))
    searchParams.delete(key)
    location.hash = searchParams.toString()
  },
}

export const useBoundStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: 'food-storage', // unique name
      storage: createJSONStorage(() => hashStorage),
    },
  ),
)
```

### 4 切片模式([Slices Pattern](https://zustand.docs.pmnd.rs/guides/connect-to-state-with-url-hash))

**拆分大型 Store**：每个功能模块独立管理状态：
```ts
// fishSlice.js
export const createFishSlice = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

// bearSlice.js
export const createBearSlice = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
});

// 合并 Store
const useCombinedStore = create(() => ({
  ...createFishSlice(set),
  ...createBearSlice(set),
}));
```

## 性能优化
避免不必要的渲染。通过 `selector` 的方式来取值。
```
const firstName = usePersonStore((state) => state.firstName)
```

不用选择器选若干个属性，要避免不必要的渲染，可以用 [`useShallow`](https://zustand.docs.pmnd.rs/guides/prevent-rerenders-with-use-shallow)。比如:

```ts
// store
const useMeals = create(() => ({
  papaBear: 'large porridge-pot',
  mamaBear: 'middle-size porridge pot',
  littleBear: 'A little, small, wee pot',
}))

export const BearNames = () => {
  const names = useMeals((state) => Object.keys(state))

  return <div>{names.join(', ')}</div>
}
```

如果 `store` 的 key 没有发生变化，但 value 发生变化，还是会重新渲染。
```ts
useMeals.setState({
  papaBear: 'a large pizza',
})
```

用 `useShallow` 可以避免这种情况:
```ts
const names = useMeals(useShallow((state) => Object.keys(state)))
```

## 其他
[自动生成选择器](https://zustand.docs.pmnd.rs/guides/auto-generating-selectors)。封装后，api 变成: 
```ts
// get the property
const bears = useBearStore.use.bears()
// 不这么处理的写法: const bears = useBearStore(state => state.bears)

// get the action
const increment = useBearStore.use.increment()
```

[测试](https://zustand.docs.pmnd.rs/guides/testing)。Mock Zustand。


[v4 到 v5 的变动](https://zustand.docs.pmnd.rs/migrations/migrating-to-v5)
