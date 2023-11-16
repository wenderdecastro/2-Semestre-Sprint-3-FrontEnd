import React, { useEffect, useState } from "react";
import "./TiposEvento.css";
import Title from "../../Components/Title/Title";
import Container from "../../Components/Container/Container";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import TableTp from './TableTp/TableTp'
import { Button, Input } from "../../Components/FormComponents/FormComponents";
import api, { eventsTypeResource } from '../../Services/api'

const TiposEventoPage = () => {
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [tipoEventos, setTipoEventos] = useState([]);

  useEffect(() => {
    async function loadTiposEvento() {
      try {
        const retorno = await api.get(eventsTypeResource)
        setTipoEventos(retorno.data)
        console.log(retorno.data);
      } catch (error) {
        console.error(`deu ruim da api`, error)
      }
    }
    loadTiposEvento()
  }, [tipoEventos]);


  async function handleSubmit(e) {
    e.preventDefault()

    if (titulo.trim().length < 3)
      alert('Título pequeno demais')
    else
      try {
        const retorno = await
          api.post(eventsTypeResource, { "titulo": titulo })
          setTitulo("")
        console.log('cadastrado com sucesso')
      } catch (error) {
        console.error("deu ruim na api", error)
      }
  }
  function handleUpdate() {

  }

  async function handleDelete(idElement) {

    if(!window.confirm("Você deseja realmente excluir o objeto?")) return;

    try {
      const promise = await api.delete(`${eventsTypeResource}/${idElement}`)
      if(promise.status === 204){
        console.log('deletado com sucesso')
      }

    } catch (error) {
      console.error('deu ruim na api', error)
    }
  }
  function editActionAbort(idElement) {
    alert(`abortar ação de edição`)
  }
  function showUpdateForm(idElement) {
    alert(`mostrar form de edição`)
    setFrmEdit(!frmEdit)
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
