import { redirect } from "next/dist/server/api-utils";



const MainPage = () => {
    redirect('/en');
};

export default MainPage;