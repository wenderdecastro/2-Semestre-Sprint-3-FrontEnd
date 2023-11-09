import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Banner from "../../Components/Banner/Banner";
import MainContent from "../../Components/MainContent/MainContent";
import VisionSection from "../../Components/VisionSection/VisionSection";
import ContactSection from "../../Components/ContactSection/ContactSection";
import NextEvent from "../../Components/NextEvent/NextEvent";
import Title from "../../Components/Title/Title";
import axios from "axios"
import Container from "../../Components/Container/Container";

const HomePage = () => {
  const [nextEvent, setNextEvent] = useState([]);
  const urlLocal = 'https://localhost:7118/api'
  
  useEffect(() => {
    async function getNextEvents(){
      try {
        const promise = await axios.get(`${urlLocal}/Evento/ListarProximos`)
        const dados = await promise.data
        setNextEvent(dados)
      } catch (error) {
        console.error(error)
      }
    }
    getNextEvents();
  }, [])


  return (
    <div>
      <Banner />
      <section className="proximos-eventos">
        <Container>
          <Title titleText={"Próximos Eventos"} />

          <div className="events-box">
            {
              nextEvent.map((e) => {
                return (
                  <NextEvent
                    key={e.idEvento}
                    idEvent={e.idEvento}
                    title={e.nomeEvento}
                    description={e.descricao}
                    eventDate={e.dataEvento.toString().slice(0,10)} />
                )
              })
            }


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
