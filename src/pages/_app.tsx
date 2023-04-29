import type { AppProps } from "next/app";
import { Inter, Poppins } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={poppins.className}>
            <Component {...pageProps} />
        </div>
    );
}
