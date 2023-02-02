import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
const Folder:NextPage = ():JSX.Element => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <MainLayout title={"Folder"}>
        </MainLayout>
    )
}
export default Folder;