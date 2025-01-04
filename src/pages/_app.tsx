import { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { CacheProvider } from "@emotion/react";
import PortfolioContextProvider from "@/context/PortfolioContext";

const rubik = Rubik({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    typography: {
      fontFamily: rubik.style.fontFamily,
    },
    // palette: {
    //   primary: {},
    // },
  });

  const cache = createCache({ key: "custom-css" });
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <PortfolioContextProvider>
          <CacheProvider value={cache}>
            <AppCacheProvider {...pageProps}>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </AppCacheProvider>
          </CacheProvider>
        </PortfolioContextProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
