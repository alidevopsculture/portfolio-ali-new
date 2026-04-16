declare module '*.mdx' {
  import React from 'react';
  export const frontmatter: Record<string, unknown>;
  const MDXComponent: React.ComponentType;
  export default MDXComponent;
}
