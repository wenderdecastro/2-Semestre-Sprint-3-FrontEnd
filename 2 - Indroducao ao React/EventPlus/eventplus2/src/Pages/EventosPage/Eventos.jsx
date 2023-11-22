import React, { useEffect, useState } from "react";

import "./Eventos.css";

import Title from "../../Components/Title/Title";
import MainContent from "../../Components/MainContent/MainContent"
import Container from "../../Components/Container/Container";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import { Input, Button, Select } from "../../Components/FormComponents/FormComponents";
import TableEv from "./TableEv/TableEv"
import api, { eventsTypeResource, eventsResource } from '../../Services/api'
// import Main from "../../Components/MainContent/MainContent";
import Notification from "../../Components/Notification/Notification";
import Spinner from "../../Components/Spinner/Spinner";


const EventosPage = () => {

  // const [frmEdit, setFrmEdit] = useState(false);
  const [notifyUser, setNotifyUser] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [nomeEvento, setNomeEvento] = useState('');
  const [descricaoEvento, setDescricao] = useState('');
  const [dataEvento, setDataEvento] = useState(Date());
  const [tipoEvento, setTipoEventos] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [eventos, setEventos] = useState([])


  async function loadTiposEvento() {
    setShowSpinner(true)
    try {
      const retorno = await api.get(eventsTypeResource)
      const dados = await (retorno.data.map(tipoEvento => {
        return { value: tipoEvento.idTipoEvento, text: tipoEvento.titulo }
      }))
      setTipoEventos(dados)
      console.log(retorno.data);
    } catch (error) {
      console.error(`deu ruim da api`, error)
    }
    setShowSpinner(false)
  }

  async function loadEventos() {
    setShowSpinner(true)
    try {
      const retorno = await api.get(eventsResource)
      setEventos(retorno.data)
      console.log(retorno.data);
    } catch (error) {
      console.error(`deu ruim da api`, error)
    }
    setShowSpinner(false)
  }

  async function handleDelete(idElement) {

    if (!window.confirm("Você deseja realmente excluir o objeto?")) return;

    try {
      const promise = await api.delete(`${eventsResource}/${idElement}`)
      if (promise.status === 204 || promise.status === 200 || promise.status === 202) {
        setNotifyUser({
          titleNote: "Sucesso",
          textNote: `Evento excluido com sucesso com sucesso.`,
          imgIcon: "Succes",
          imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
          showMessage: true
        });
        // Atualiza a variável e roda o useState novamente (que dá um get na api)

        // DEsafio fazer uma função para retirar o registro apagado do array tipoEventos
        const buscaEventos = await api.get(eventsResource)
        setEventos(buscaEventos.data); //Aqui retorna um array então de boa
      }
    } catch (error) {
      console.error('deu ruim na api', error)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (nomeEvento.trim().length < 3 || descricaoEvento.trim().length < 3)
      setNotifyUser({
        titleNote: "Erro",
        textNote: `Nome de tipo de evento muito pequeno.`,
        imgIcon: "Danger",
        imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
        showMessage: true
      });
    else {
      setShowSpinner(true)
      try {
        await api.post(eventsResource, {
          "nomeEvento": nomeEvento,
          "descricaoEvento": descricaoEvento,
          "dataEvento": dataEvento.json(),
          "idTipoEvento": tipoEvento
        })
        loadEventos()
        console.log('cadastrado com sucesso')
      } catch (error) {
        console.error("deu ruim na api", error)
      }
      setShowSpinner(false)
    }
  }

  useEffect(() => {
    loadTiposEvento()
    loadEventos()
  }, []);

  return (
    <>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {showSpinner ? <Spinner /> : null}
      <MainContent>
        <section className="cadastro-evento-section">
          {/* title */}
          <Title titleText="Eventos" color="" batataClass="margin-above" />
          <Container>
            <div className="cadastro-evento__box">

              <ImageIllustrator imageName={'evento'} altText={'teste'} />
              <form
                action="submit"
                className="ftipo-evento"
                onSubmit={handleSubmit}
              >
                <Input
                  id={'NomeEvento'}
                  name={'NomeEvento'}
                  type={'text'}
                  required={true}
                  placeholder={'Nome'}
                  value={nomeEvento}
                  manipulationFunction={(e) => { setNomeEvento(e.target.value) }}
                />
                <Input
                  id={'descricaoEvento'}
                  name={'descricaoEvento'}
                  type={'text'}
                  required={true}
                  placeholder={'Descricao'}
                  value={descricaoEvento}
                  manipulationFunction={(e) => { setDescricao(e.target.value) }}
                />
                {/* <Select /> */}
                <Input
                  id={'dataEvento'}
                  name={'dataEvento'}
                  type={'date'}
                  required={true}
                  placeholder={'dd/mm/aaaa'}
                  value={dataEvento}
                  manipulationFunction={(e) => { setDataEvento(e.target.value) }}
                />
                <Select
                  name={'Select'}
                  options={tipoEvento}
                  id={'selectTipoEvento'}
                  required={true}
                  value={''}
                  manipulationFunction={(e) => { setSelectedOption(e.target.value) }}

                />
                <p>{selectedOption}</p>
                <Button
                  type={'submit'}
                  name={'cadastrar'}
                  id={'cadastrar'}
                  buttonText={'Cadastrar'}
                />
              </form>
            </div>
          </Container>
        </section>
        <section className="lista-eventos-section">
          <Container>
            <Title titleText={"Lista de Eventos"} color="white" />
            <TableEv
              dados={eventos}
              // fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default EventosPage;
