"use client"
import { Accordion, AccordionItem } from '@nextui-org/react';
import SectionTitle from '../shared/SectionTitle';
import Gallery from './Gallery';
const FaqSection = () => {
    return (
        <div className='container m-auto'>
            <SectionTitle header={"most commonly asked questions."} miniHeader={"Still have questions?"} />
            <div className=' justify-center items-center grid grid-cols-1 lg:grid-cols-2'>
                <Gallery />
                <Accordion variant="splitted">
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
    );
};

export default FaqSection;