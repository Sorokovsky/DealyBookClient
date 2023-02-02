import MainLayout from "@/components/MainLayout";
import { NextPage } from "next";
const NotFound:NextPage = ():JSX.Element => {
    return (
        <MainLayout title="Не знайдено">
            404
        </MainLayout>
    )
}
export default NotFound;