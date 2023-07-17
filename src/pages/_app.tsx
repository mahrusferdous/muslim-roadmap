import "../styles/light/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../components/Context/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
