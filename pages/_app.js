import "../styles/globals.css";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  console.log(router);
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
