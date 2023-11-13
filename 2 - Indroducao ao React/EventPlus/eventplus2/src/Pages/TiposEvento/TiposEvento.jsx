import React, { useState } from "react";
import "./TiposEvento.css";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import { Button, Input } from "../../Components/FormComponents/FormComponents";

const TiposEventoPage = () => {
  const [frmEdit, setFrmEdit] = useState(false);

  function handleSubmit(){

  }
  function handleUpdate(){

  }
  return (
    <>
      <MainContent>
        <section className="cadastro-evento-section">
          {/* title */}
          <Title titleText="TiposEventoPage" color="" batataClass="margin-above" />
          <Container>
            <div className="cadastro-evento__box">
              <ImageIllustrator imageName={'evento'} altText={'teste'} />
              <form
                action="submit"
                className="ftipo-evento"
                onSubmit={frmEdit ? handleUpdate : handleSubmit}
              >
                {
                  !frmEdit ? (<p>tela de cadastro</p>) : (<p>tela de edicao</p>)
                }
              </form>

            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TiposEventoPage;
