import { FC, memo, ReactNode, MouseEvent, useCallback } from "react";
import styles from "@/styles/Button.module.sass";
interface IProps{
    children: ReactNode;
    clickHandler?: (e:MouseEvent<HTMLButtonElement>) => void;
}
const Button:FC<IProps> = memo(({children, clickHandler}):JSX.Element => {
    const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        if (clickHandler){
            clickHandler(e);
        }
    }, []);
    return (
        <button className={styles.button} onClick={onClick} type={'button'}>{children}</button>
    )
});
export default Button;