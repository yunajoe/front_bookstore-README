# Production dependency

    "@tanstack/react-query"
    "@tanstack/react-query-devtools"
    "axios"
    "jotai"
    "next":
    "react-hook-form"

# development dependency

    "eslint"
    "eslint-config-next"
    "eslint-config-prettier"
    "eslint-plugin-prettier"
    "prettier"
    "tailwindcss"
    "typescript"

# pages/index.tsx => jotai 사용예시

```
  const [count, setCount] = useAtom(countAtom);

  const handleAddCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleMinusCount = () => {
    setCount((prev) => prev - 1);
  };
```

# pages/ \_app.tsx => tanstackquery 기본설정

```
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

```
