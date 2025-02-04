'use client';

import { type ReactNode } from 'react';

// これは意図的にServer Componentを子コンポーネントとして受け取ろうとする例です
export const ClientComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded border p-4">
      <h2>Client Component</h2>
      {children}
    </div>
  );
};
