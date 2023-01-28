import Head from "next/head";
import React from "react";
interface IProps{
    title: string;
    children: React.ReactNode;
    description?: string;
    keywords?: string;
}
const MainLayout:React.FC<IProps> = React.memo(({title, children, description, keywords}):JSX.Element => {
    return (
        <>  
        <Head>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={`DealyBook-це ідеальний сервіс для зберігання важливої інформації. ${description ? description : ''}`} />
            <meta name="keywords" content={`DealyBook, конспект, зберігання, сховище ${keywords ? ',' + keywords : ''}`} />
            <title>DealyBook-{title}</title>
        </Head>
        <header></header>
        <main className="page">
            {children}
        </main>
        <footer></footer>
        </>
)
});
export default MainLayout;