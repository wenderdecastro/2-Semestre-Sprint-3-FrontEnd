import React from "react";
import "./HomePage.css";
import Banner from "../../Components/Banner/Banner";
import MainContent from "../../Components/MainContent/MainContent";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">
            <NextEvent title="teste" description="teste evento" eventDate={"08/11/2023"} />
            <NextEvent title="teste" description="teste evento" eventDate={"08/11/2023"} />
            <NextEvent title="teste" description="teste evento" eventDate={"08/11/2023"} />
            <NextEvent title="teste" description="teste evento" eventDate={"08/11/2023"} />
          </div>
        </Container>
      </section>
      <MainContent>
        <VisionSection />
      </MainContent>

      <ContactSection />
    </div>
  );
};

export default HomePage;
