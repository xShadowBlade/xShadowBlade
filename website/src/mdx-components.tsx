/**
 * @file Defines the MDX components
 */
import type { MDXComponents } from "mdx/types";

/**
 * @returns the MDX components
 * @param components - The MDX components
 */
function useMDXComponents (components: MDXComponents): MDXComponents {
    return {
        ...components,
    };
}

export { useMDXComponents };