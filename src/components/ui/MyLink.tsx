import { FC, memo, ReactNode, MouseEvent, useCallback } from "react";
import styles from "@/styles/MyLink.module.sass";
import Link from "next/link";
interface IProps{
    children: ReactNode;
    href: string;
}
const MyLink:FC<IProps> = memo(({children, href}):JSX.Element => {
    return (
        <Link href={href} className={styles.button} >{children}</Link>
    )
});
export default MyLink;