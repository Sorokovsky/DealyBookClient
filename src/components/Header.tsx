import { FC, memo } from "react";
import styles from "@/styles/Header.module.sass";
const Header:FC = memo(():JSX.Element => {
    return (
    <header className={styles.header}>
        <div className={["container", styles.container].join(" ")}>
            header
        </div>
    </header>
    )
});
export default Header;