"use client"
import useArea from "../../components/hooks/useArea";
import Container from "../../components/shared/Container";
import CoverageNav from "./Area/CoverageNav";
import DhakaSuburb from "./Area/DhakaSuburb";
import InsideDhaka from "./Area/InsideDhaka";
import OutsideDhaka from "./Area/OutsideDhaka";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CoverageArea = () => {
    const [areas] = useArea()

    const insideDhaka = areas?.filter((item) => item?.Category === "Inside Dhaka")
    const suburbDhaka = areas?.filter((item) => item?.Category === "Suburb")
    const outsideDhaka = areas?.filter((item) => item?.Category === "Outside Dhaka")

    // console.log(insideDhaka, suburbDhaka, outsideDhaka);

    return (
        <Container>
            <CoverageNav></CoverageNav>
            <hr className="border-gray-600"></hr>
            <div className="py-10">
                <Tabs>
                    <TabList className={"flex gap-2 md:gap-5 mb-8"}>
                        <Tab
                            className={
                                "text-white font-bold py-2 px-4 rounded border border-purple-700 text-sm hover:bg-purple-700"
                            }
                        >
                            Inside Dhaka
                        </Tab>
                        <Tab
                            className={
                                "text-white font-bold py-2 px-4 rounded border border-purple-700 text-sm hover:bg-purple-700"
                            }
                        >
                            Dhaka Suburb
                        </Tab>
                        <Tab
                            className={
                                "text-white font-bold py-2 px-4 rounded border border-purple-700 text-sm hover:bg-purple-700"
                            }
                        >
                            Outside Dhaka
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <InsideDhaka insideDhaka={insideDhaka}></InsideDhaka>
                    </TabPanel>
                    <TabPanel>
                        <DhakaSuburb suburbDhaka={suburbDhaka}></DhakaSuburb>
                    </TabPanel>
                    <TabPanel>
                        <OutsideDhaka outsideDhaka={outsideDhaka}></OutsideDhaka>
                    </TabPanel>
                </Tabs>
            </div>

            {/* <footer className="footer footer-center p-4 text-purple-200">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Quick Ship Ltd</p>
                </aside>
            </footer> */}
        </Container>
    );
};

export default CoverageArea;