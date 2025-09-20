import InternationalPatients from "../components/Facilities/InternationalPatients.jsx";
import OurFacilities from "../components/Facilities/OurFacilities.jsx";
import Recognition from "../components/Facilities/Recognition.jsx";
import Specialists from "../components/Facilities/Specialists.jsx";
import Footer from "../components/Footer.jsx";
import FloatingHearts from "../components/FloatingHearts.jsx";

export default function Facilities() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingHearts />
      </div>
      <OurFacilities />
      <Specialists />
      <InternationalPatients />
      <Recognition />
      <Footer />
    </>
  );
}
