import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";

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
