import React from "react";
import "./Eventos.css";


import Title from "../../Components/Title/Title";
import MainContent from "../../Components/MainContent/MainContent"
import Container from "../../Components/Container/Container";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import { Input, Button, Select } from "../../Components/FormComponents/FormComponents";
import TableEv from "./TableEv/TableEv"
import Main from "../../Components/MainContent/MainContent";
import Notification from "../../Components/Notification/Notification";
import { useState } from "react";
import Spinner from "../../Components/Spinner/Spinner";


const EventosPage = () => {

  const [notifyUser, setNotifyUser] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  return (
    <>
      {/* <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {showSpinner ? <Spinner /> : null} */}
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
              >
                <Input />
                <Input />
                {/* <Select /> */}
                <Input />
                <Button />
              </form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default EventosPage;
