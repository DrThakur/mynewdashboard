import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

// import Custom from "./custom";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  return (
    // <Sidebar>
    //   </Sidebar>
    // <Component {...pageProps} />

    <Header>
      <Component {...pageProps} />
    </Header>
  );
}
