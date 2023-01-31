import { FC, memo, ReactNode } from "react";
interface IProps{
    children: ReactNode;
}
const Sidebar:FC<IProps> = memo(({children}):JSX.Element => {
    return (
        <aside>
            {children}
        </aside>
    )
});
export default Sidebar;