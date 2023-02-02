import { FC, memo, ReactNode } from "react";
import styles from "@/styles/Sidebar.module.sass";
import { SidePosition } from "@/types/sidebar";
interface IProps{
    children: ReactNode;
    position: SidePosition;
    show?: boolean;
}
const Sidebar:FC<IProps> = memo(({children, position, show = true}):JSX.Element => {
    if (!show) {
        return <></>
    }
    return (
        <aside className={[styles.sidebar, styles[position]].join(" ")}>
            {children}
        </aside>
    )
});
export default Sidebar;