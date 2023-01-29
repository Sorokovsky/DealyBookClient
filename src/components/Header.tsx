import { FC, memo } from "react";
import styles from "@/styles/Header.module.sass";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
const Header:FC = memo(():JSX.Element => {
    return (
    <header className={styles.header}>
        <div className={["container", styles.container].join(" ")}>
            <Link href={"/"} className={styles.logo}>
                <Image src={logo} alt="DealyBook" priority/>
            </Link>
        </div>
    </header>
    )
});
export default Header;