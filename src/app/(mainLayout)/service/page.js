
import SectionTitle from '@/components/shared/SectionTitle';
import OurServices from '@/components/ui/OurServices';


const Service = () => {
    return (
        <div className='container m-auto py-10'>
            <SectionTitle header={"The Service We Provide"} miniHeader={"Our Relabel Contribution"}/>
            <OurServices />
        </div>
    );
};

export default Service;