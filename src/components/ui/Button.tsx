import { FC, memo, ReactNode, MouseEvent } from "react";
import styles from "@/styles/Button.module.sass";
interface IProps{
    children: ReactNode;
    clickHandler: (e:MouseEvent<HTMLButtonElement>) => void;
}
const Button:FC<IProps> = memo(({children}):JSX.Element => {
    return (
        <button className={styles.button} type={'button'}>{children}</button>
    )
});
export default Button;