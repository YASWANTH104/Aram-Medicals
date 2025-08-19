import InternationalPatients from "../components/Facilities/InternationalPatients.jsx";
import OurFacilities from "../components/Facilities/OurFacilities.jsx";
import Recognition from "../components/Facilities/Recognition.jsx";
import Specialists from "../components/Facilities/Specialists.jsx";
import Footer from "../components/Footer.jsx";

export default function Facilities(){
    return (
        <>
            <OurFacilities/>
            <Specialists/>
            <InternationalPatients/>
            <Recognition/>
            <Footer/>
        </>
    )
    
}
