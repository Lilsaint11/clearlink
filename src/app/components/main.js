import Advantage from "./advantage";
import Faq from "./faq";
import Footer from "./footer";
import Hero from "./hero";
import Nav from "./nav";
import Partners from "./partners";
import Reviews from "./reviews";
import Rights from "./rights";
import Trial from "./trial";

const Main = () => {
    return ( 
        <div>
            <div className="py-5 px-20 relative z-40">
                <Nav />
                <Hero />
                <Partners />
                <Advantage />
            </div>
            <Reviews />
            <div className="py-5 px-20 relative z-40">
                <Faq />
                <Trial />
                <Footer />
            </div>
            <Rights />
        </div>
     );
}
 
export default Main;