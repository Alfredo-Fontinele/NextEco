import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head />
            <body>
                <Header />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
