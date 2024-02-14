"use client"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { IoCallSharp } from "react-icons/io5";
import "react-tabs/style/react-tabs.css";

const DeliveryCharge = () => {
    return (
        <div>
          <p className="text-center text-gray-400">Want to know how much it will cost to send a parcel to any location?</p>
          <div className="flex justify-center items-center">
              <p className="text-gray-400 mr-2">Check our </p>

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="text-orange-600  font-bold hover:underline">detailed list</button>

              
              <dialog id="my_modal_3" className="modal">
                <div div className = "modal-box bg-black text-white" >
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <div className="text-center">
                    <h2 className="text-3xl font-bold py-3">See your delivery charge</h2>
                    <p className="text-xs">Take a look at how much it will cost to send a parcel.</p>
                    <div className="pt-10">
                      <Tabs>
                      <TabList className={"flex justify-center gap-2 md:gap-5 mb-8"}>
                          <Tab
                          className={
                              "text-white font-bold py-2 px-3 rounded border border-purple-700 text-xs hover:bg-purple-700"
                          }
                          >
                          Inside Dhaka
                          </Tab>
                          <Tab
                          className={
                              "text-white font-bold py-2 px-3 rounded border border-purple-700 text-xs hover:bg-purple-700"
                          }
                          >
                          Dhaka Suburb
                          </Tab>
                          <Tab
                          className={
                              "text-white font-bold py-2 px-3 rounded border border-purple-700 text-xs hover:bg-purple-700"
                          }
                          >
                          Outside Dhaka
                          </Tab>
                      </TabList>

                      <TabPanel>
                          <div className="flex justify-center items-center">
                            <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>Upto 1 kg</p>
                              <h2 className="font-extrabold text-xs">৳69</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>1 kg to 2 kg</p>
                              <h2 className="font-extrabold text-xs">৳84</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>2 kg to 3 kg</p>
                              <h2 className="font-extrabold text-xs">৳99</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>3 kg to 4 kg</p>
                              <h2 className="font-extrabold text-xs">৳114</h2>
                          </div>
                          </div>
                      </TabPanel>
                      <TabPanel>
                          <div className="flex justify-center items-center">
                            <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>Upto 1 kg</p>
                              <h2 className="font-extrabold text-xs">৳115 + 1%</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>1 kg to 2 kg</p>
                              <h2 className="font-extrabold text-xs">৳130 + 1%</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>2 kg to 3 kg</p>
                              <h2 className="font-extrabold text-xs">৳145 + 1%</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>3 kg to 4 kg</p>
                              <h2 className="font-extrabold text-xs">৳160 + 1%</h2>
                          </div>
                          </div>
                      </TabPanel>
                      <TabPanel>
                          <div className="flex justify-center items-center">
                            <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>Upto 1 kg</p>
                              <h2 className="font-extrabold text-xs">৳150 + 2%</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>1 kg to 2 kg</p>
                              <h2 className="font-extrabold text-xs">৳180 + 2%</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>2 kg to 3 kg</p>
                              <h2 className="font-extrabold text-xs">৳210 + 2%</h2>
                          </div>
                          <div className="border border-gray-700 text-sm text-purple-200 px-5 py-4 space-y-2">
                              <p>3 kg to 4 kg</p>
                              <h2 className="font-extrabold text-xs">৳240 + 2%</h2>
                          </div>
                          </div>
                      </TabPanel>
                      </Tabs>
                    </div>
                    <p className="text-right py-2 text-xs">*All charges are VAT inclusive</p>
                    <div className="py-6 space-y-3">
                      <p className="text-xs">For Enterprise pricing, contact our agents for instant price estimate</p>
                      <div className="flex justify-center items-center">
                        <span className='text-xl font-bold text-purple-600 mr-1'>
                            <IoCallSharp></IoCallSharp>
                        </span>
                        <p className='text-sm'>CALL US <span className='text-md text-purple-600 ml-2'>09610007339</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </dialog>
          </div>
        </div>
    );
};

export default DeliveryCharge;