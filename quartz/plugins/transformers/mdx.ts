import remarkMdx from 'remark-mdx'
import { QuartzTransformerPlugin } from "../types"

// has would cause  reloaded problem
export const MDX: QuartzTransformerPlugin<undefined> = () => {
  return {
    name: "MDX",
    markdownPlugins() {
      return [remarkMdx]
    },
  }
}