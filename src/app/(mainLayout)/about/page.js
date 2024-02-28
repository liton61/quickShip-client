import OurTeams from "@/components/ui/OurTeams/OurTeams";
import AboutDetails from "./AboutDetails";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <div className="px-6">
      <AboutDetails></AboutDetails>
      <OurTeams></OurTeams>
      <Testimonial></Testimonial>
    </div>
  );
};

export default About;