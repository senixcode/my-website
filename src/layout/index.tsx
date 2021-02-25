import { FC  } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/theme";
import SEO from "./SEO";
import Header from "./header";
const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <SEO />
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.css"></link>
        </Head>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
    </ThemeProvider>
  );
};
// Layout.defaultProps = {
//   title: "About me",
// };
export default Layout;
