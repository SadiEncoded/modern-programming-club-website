// Mock Supabase client for development/build until real integration
// This prevents build errors while keeping the architecture ready

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const createClient = () => {
  const mockChain = {
    select: (_query?: string, _options?: unknown) => mockChain,
    eq: (_column: string, _value: unknown) => mockChain,
    order: (_column: string, _options?: unknown) => mockChain,
    in: (_column: string, _values: unknown[]) => mockChain,
    then: (resolve: (value: any) => void) => {
      resolve({ data: [], error: null, count: 0 });
    },
  };

  return {
    from: (_table: string) => mockChain
  };
};
