import OurTeams from "@/components/ui/OurTeams/OurTeams";
import AboutDetails from "./AboutDetails";
import Testimonial from "./Testimonial";
import ContactForm from "@/components/ui/ContactForm";

const About = () => {
  return (
    <div>
      <AboutDetails></AboutDetails>
      <OurTeams></OurTeams>
      <Testimonial></Testimonial>
      <ContactForm></ContactForm>
    </div>
  );
};

export default About;