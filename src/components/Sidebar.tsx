import { FC, memo, ReactNode } from "react";
import styles from "@/styles/Sidebar.module.sass";
import { SidePosition } from "@/types/sidebar";
interface IProps{
    children: ReactNode;
    position: SidePosition;
}
const Sidebar:FC<IProps> = memo(({children, position}):JSX.Element => {
    return (
        <aside className={[styles.sidebar].join(" ")}>
            {children}
        </aside>
    )
});
export default Sidebar;