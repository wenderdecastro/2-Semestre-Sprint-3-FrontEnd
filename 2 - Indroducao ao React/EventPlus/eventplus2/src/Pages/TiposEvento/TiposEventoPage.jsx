import React from "react";
import "./TiposEvento.css";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";

const TiposEventoPage = () => {
  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          <Container>
            <div className="cadastro-evento-box">
              {/* title */}
              <Title titleText="TiposEventoPage" color="" batataClass="margin-above" />
              {/* image */}
              <ImageIllustrator/>
              {/* form */}
              <form action="submit" className="ftipo-evento">
                <p>form</p>
              </form>

            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TiposEventoPage;
