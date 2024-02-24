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
                        <div className='pb-5'>
                            <p className='text-center font-medium text-blue-600'>Still have questions ?</p>
                            <h1 className='text-center text-3xl font-bold uppercase'>most commonly asked questions</h1>
                        </div>
                        <Accordion variant="splitted" className='px-0'>
                            <AccordionItem key="1" aria-label="Accordion 1" title="What is QuickShip?">
                                {"QuickShip is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies."}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="What kind of services does QuickShip offer?">
                                <p>QuickShip is a complete platform for end-to-end delivery and logistics services for any business or personal needs. The services include parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics services and customized solutions as required.</p>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="What is the coverage area of QuickShip Delivery?">
                                {"The services include parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics services and customized solutions as required.QuickShip delivers to all the World"}
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="Accordion 4" title="What is the coverage area of QuickShip Delivery?">
                                {"The services include parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics services and customized solutions as required.QuickShip delivers to all the World"}
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;