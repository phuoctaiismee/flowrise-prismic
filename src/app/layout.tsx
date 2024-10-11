import type {Metadata} from "next";
import {Nunito, Nunito_Sans} from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import {createClient, repositoryName} from "@/prismicio";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {PrismicPreview} from "@prismicio/next";

const nunito = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
    display: "swap",
});
const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    variable: "--font-nunito-sans",
    display: "swap",
});
export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const settings = await client.getSingle("setting");

    return {
        title: settings.data.meta_title || "Flowrise fallback",
        description:
            settings.data.meta_description || "Flowrise is the relaxing app for you.",
        openGraph: {
            images: [settings.data.meta_image.url || ""],
        },
    };
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(nunito.variable, nunitoSans.variable)}>
                <Header />
                {children}
                <Footer />
                <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50" />
                <PrismicPreview repositoryName={repositoryName} />
            </body>
        </html>
    );
}
