"use client"
import Head from "next/head";
import { FC, memo, ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import Sidebar from "./Sidebar";
import { SidePosition } from "@/types/sidebar";
import MyLink from "@/components/ui/MyLink";
interface IProps{
    title: string;
    children: ReactNode;
    description?: string;
    keywords?: string;
}
const MainLayout:FC<IProps> = memo(({title, children, description, keywords}):JSX.Element => {
    return (
        <>  
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={`DealyBook-це ідеальний сервіс для зберігання важливої інформації. ${description ? description : ''}`} />
            <meta name="keywords" content={`DealyBook, конспект, зберігання, сховище ${keywords ? ',' + keywords : ''}`} />
            <title>{"DealyBook-" + title}</title>
        </Head>
        <Header />
        <main className="page">
            <Sidebar position={SidePosition.LEFT}>
                <MyLink href="/folder/new">Нова папка</MyLink>
            </Sidebar>
            <div className="container">{children}</div>
            <Sidebar position={SidePosition.RIGHT}>
            </Sidebar>
        </main>
        <Footer />
        </>
)
});
export default MainLayout;