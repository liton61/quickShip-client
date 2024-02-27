"use client"
import { Accordion, AccordionItem } from '@nextui-org/react';
import Gallery from './Gallery';
const FaqSection = () => {
    return (
        <div className='bg-base-200 py-10'>
            <div className='container mx-auto lg:px-20 px-5'>
                <div className=' justify-center items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <Gallery />
                    <div>
                        <div className='pb-7'>
                            <p className='text-center font-medium text-blue-600 mb-2'>Still have questions ?</p>
                            <h1 className='text-center text-3xl font-extrabold uppercase'>most commonly asked questions</h1>
                        </div>
                        <Accordion variant="splitted" className='px-0'>
                            <AccordionItem className='font-semibold text-justify'  key="1" aria-label="Accordion 1" title="What is QuickShip?">
                               <p className='text-sm text-justify text-gray-600 font-normal'>QuickShip is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies.</p>
                            </AccordionItem>
                            <AccordionItem className='font-semibold text-justify' key="2" aria-label="Accordion 2" title="What kind of services does QuickShip offer?">
                                <p className='text-sm text-justify text-gray-600 font-normal'>QuickShip is a complete platform for end-to-end delivery and logistics services for any business or personal needs. The services include parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics services and customized solutions as required.</p>
                            </AccordionItem>
                            <AccordionItem className='font-semibold text-justify'  key="3" aria-label="Accordion 3" title="What is the coverage area of QuickShip Delivery?">
                                <p className='text-sm text-justify text-gray-600 font-normal'>The services include parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics services and customized solutions as required.QuickShip delivers to all the World</p>
                            </AccordionItem>

                            <AccordionItem AccordionItem className = 'font-semibold text-justify'
                            key = "4"
                            aria-label = "Accordion 4"
                            title = "Want to know about your delivery and logistics charges?" >
                               <p  className = 'text-sm text-justify text-gray-600 font-normal' > Our delivery charge is designed according to the weight of the parcel.Charges start from Tk 69 per kg inside Dhaka, Tk 115 around Dhaka and Tk 150 outside Dhaka.1 % cash on delivery charge is applicable
                               for every delivery near and outside Dhaka.

                               See our Home Delivery and Hub Delivery Price Chart
                               for personal parcel shipping charges.For enterprise logistics, contact our sales team.You can also call at 0910006339
                               for more information.
</p>
                            </AccordionItem>
                            <AccordionItem AccordionItem className = 'font-semibold text-justify'
                            key = "5"
                            aria-label = "Accordion 5"
                            title = "What kind of products does Quick Ship deliver?" >
                                <p className='text-sm text-justify text-gray-600 font-normal'>We deliver all valid portable products. Quick Ship is a courier service and parcel delivery service that offers the flexibility merchants and customers need.</p>
                            </AccordionItem>
                            
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;