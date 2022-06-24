import { store } from "app/store";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/global.scss";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <AnimatePresence>
          <Component {...pageProps} />;
        </AnimatePresence>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
