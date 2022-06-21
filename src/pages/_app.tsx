import { store } from "app/store";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/global.scss";
import { Html } from "next/document";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <Component {...pageProps} />;
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
