import React, { useEffect, useState } from "react";
import "./TiposEvento.css";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import TableTp from './TableTp/TableTp'
import { Button, Input } from "../../Components/FormComponents/FormComponents";
import api, { eventsTypeResource } from '../../Services/api'
import Notification from '../../Components/Notification/Notification';
import Spinner from "../../Components/Spinner/Spinner";

const TiposEventoPage = () => {
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [tipoEventos, setTipoEventos] = useState([]);
  const [uniqueTipoEvento, setUniqueTipoEvento] = useState({}); //objeto para a atualização de um objeto específico
  const [notifyUser, setNotifyUser] = useState(); //Componente Notification
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    async function loadTiposEvento() {
      setShowSpinner(true)
      try {
        const retorno = await api.get(eventsTypeResource)
        setTipoEventos(retorno.data)
        console.log(retorno.data);
      } catch (error) {
        console.error(`deu ruim da api`, error)
      }
      setShowSpinner(false)
    }
    loadTiposEvento()
  }, []);


  function theMagic() {
    setNotifyUser({
      titleNote: "Sucesso",
      textNote: `Operação concluída com sucesso.`,
      imgIcon: "Succes",
      imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
      showMessage: true
    });
  }


  async function handleSubmit(e) {
    e.preventDefault()

    if (titulo.trim().length < 3)
      alert('Título pequeno demais')
    else{
      setShowSpinner(true)
      try {
        const retorno = await
          api.post(eventsTypeResource, { "titulo": titulo })
        setTitulo("")
        console.log('cadastrado com sucesso')
      } catch (error) {
        console.error("deu ruim na api", error)
      }
      setShowSpinner(false)
    }
  }

  async function handleDelete(idElement) {

    if (!window.confirm("Você deseja realmente excluir o objeto?")) return;

    try {
      const promise = await api.delete(`${eventsTypeResource}/${idElement}`)
      if (promise.status === 204 || promise.status === 200 || promise.status === 202) {
        theMagic();
        // Atualiza a variável e roda o useState novamente (que dá um get na api)

        // DEsafio fazer uma função para retirar o registro apagado do array tipoEventos
        const buscaEventos = await api.get(eventsTypeResource)
        setTipoEventos(buscaEventos.data); //Aqui retorna um array então de boa
      }
    } catch (error) {
      console.error('deu ruim na api', error)
    }
  }

  //todo ************EdiçãoMostrar***************
  // Mostra a tela/ação de edição
  async function showUpdateForm(idTipoEvento) {
    setFrmEdit(true);
    const retorno = await api.get(eventsTypeResource + `/${idTipoEvento}`);

    const tipoEvento = retorno.data;

    setTitulo(tipoEvento.titulo);
    setUniqueTipoEvento(tipoEvento);

  }

  //todo **************Edição*********************
  // Modifica o evento com base no titulo digitado
  async function handleUpdate(e) {
    e.preventDefault();

    uniqueTipoEvento.titulo = titulo
    const retorno = await api.put(eventsTypeResource + `/${uniqueTipoEvento.idTipoEvento}`, { "titulo": uniqueTipoEvento.titulo })

    if (retorno.status === 204) {
      setShowSpinner(true)
      try {
        setTitulo("")
        setUniqueTipoEvento("")

        theMagic();

        const retorno = await api.get(eventsTypeResource)
        setTitulo(retorno.data.titulo)
        editActionAbort();

      } catch (e) {
        setNotifyUser({
          titleNote: "Erro",
          textNote: `Erro na operação, por favor, tente novamente`,
          imgIcon: "danger",
          imgAlt: "Imagem de ilustração de erro.",
          showMessage: true
        });
      }
      setShowSpinner(false)
    }
  }


  //todo **************EdiçãoCancelar***************
  // Cancela a tela/ação de edição 
  function editActionAbort(e) {
    setFrmEdit(false);
    setTitulo("");
    setUniqueTipoEvento(null)
  }

  return (
    <>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {showSpinner ? <Spinner/> : null}
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
                  !frmEdit ?
                    (
                      <>
                        <Input
                          id={'Title'}
                          name={'Title'}
                          type={'text'}
                          required={true}
                          placeholder={'Title'}
                          value={titulo}
                          manipulationFunction={(e) => { setTitulo(e.target.value) }}
                        />
                        <Button
                          type={'submit'}
                          name={'cadastrar'}
                          id={'cadastrar'}
                          buttonText={'Cadastrar'}
                        />
                      </>
                    )
                    :
                    (
                      <>
                        <Input
                          key={"Titulo"}
                          id={"Titulo"}
                          placeholder={"Título"}
                          name={"titulo"}
                          type={"text"}
                          required={"required"}
                          value={titulo}
                          manipulationFunction={(e) => { setTitulo(e.target.value) }}
                        />
                        {/* BOTÃO ATUALIZAR */}
                        <Button
                          buttonText={"Atualizar"}
                          id={"atualizar"}
                          name={"atualizar"}
                          type={"submit"}
                          manipulationFunction={(e) => {
                            handleUpdate(e);
                          }}
                        />
                        {/* BOTÃO Cancelar */}
                        <Button
                          buttonText={"Cancelar"}
                          id={"cancela"}
                          name={"cancela"}
                          type={"button"}
                          manipulationFunction={() => {
                            editActionAbort();
                          }}
                        />
                      </>
                    )
                }
              </form>

            </div>
          </Container>
        </section>
        <section className="lista-eventos-section">
          <Container>
            <Title titleText={"Lista Tipo de Eventos"} color="white" />
            <TableTp
              dados={tipoEventos}
              fnUpdate={showUpdateForm}
              fnDelete={handleDelete}
            />
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default TiposEventoPage;
