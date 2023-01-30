import { FC, memo } from "react";
import styles from "@/styles/Header.module.sass";
import avatar from "@/assets/avatar.svg";
import logo from "@/assets/logo.svg";
import Logo from "@/components/Logo";
const Header:FC = memo(():JSX.Element => {
    return (
    <header className={styles.header}>
        <div className={["container", styles.container].join(" ")}>
            <Logo href="/" src={logo}/>
            <Logo href="#" src={avatar} callback={() => {}}/>
        </div>
    </header>
    )
});
export default Header;