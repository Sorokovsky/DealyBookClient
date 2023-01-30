import Image from "next/image";
import Link from "next/link";
import { FC, memo, MouseEvent, useCallback } from "react";
import styles from "@/styles/logo.module.sass";
interface IProps {
    src:string;
    href:string;
    alt?:string;
    callback?: (e:MouseEvent<HTMLAnchorElement>) => void;
}
const Logo:FC<IProps> = memo(({src, alt="DealyBook", callback, href}):JSX.Element => {
    const onClick = useCallback((e:MouseEvent<HTMLAnchorElement>) => {
        if (callback) {
            e.preventDefault();
            callback(e);
        }
    }, []);
    return (
        <Link onClick={onClick} href={href} className={styles.logo}>
            <Image src={src} alt={alt} priority/>
        </Link>
    )
});
export default Logo;