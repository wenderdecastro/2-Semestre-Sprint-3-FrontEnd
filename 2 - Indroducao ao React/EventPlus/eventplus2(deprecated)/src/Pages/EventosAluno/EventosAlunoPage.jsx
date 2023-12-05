import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select, SelectMyEvents } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, { eventsResource, nextEventResource, presenceEventResource } from "../../Services/Service";

import "./EventoAlunoPage.css";
import { UserContext } from "../../Context/AuthContext";

const EventoAlunoPage = () => {
    // state do menu mobile
    const [exibeNavbar, setExibeNavbar] = useState(false);
    const [eventos, setEventos] = useState([]); //Eventos para serem buscados
    const [eventoAluno, setEventoALuno] = useState([]); //Eventos do aluno a serem  
    // select mocado
    const [quaisEventos, setQuaisEventos] = useState([
        { value: 1, text: "Todos os eventos" },
        { value: 2, text: "Meus eventos" },
    ]);

    const [tipoEvento, setTipoEvento] = useState(1); //código do tipo do Evento escolhido
    const [showSpinner, setShowSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // recupera os dados globais do usuário
    const { userData, setUserData } = useContext(UserContext);

    async function LoadEvents() {
        console.log(tipoEvento);
        if (tipoEvento === 1) {
            try {
                const request = (await (await api.get(eventsResource)).data);

                setEventos(request)

            } catch (error) {
                alert("Erro em carregar todos os eventos ")
            }

        }
        else {
            try {
                const request = (await (await api.get(`${presenceEventResource}/${userData.UserId}`)).data);
                setEventos(request)
                console.log(request);

            } catch (error) {
                alert("Erro em carregar os eventos do aluno")
            }

        }
    }

    useEffect(() => {
        console.log(tipoEvento);
        LoadEvents();
    }, [tipoEvento]);

    // toggle meus eventos ou todos os eventos
    function myEvents(tpEvent) {
        setTipoEvento(tpEvent);
    }

    async function loadMyComentary(idComentary) {
        return "????";
    }

    const showHideModal = () => {
        setShowModal(showModal ? false : true);
    };

    const commentaryRemove = () => {
        alert("Remover o comentário");
    };

    function handleConnect() {
        alert("Desenvolver a função conectar evento");
    }
    return (
        <>

            <MainContent>
                <Container>
                    <Title titleText={"Eventos"} className="custom-title" />

                    <SelectMyEvents
                        id="id-tipo-evento"
                        name="tipo-evento"
                        required={"required"}
                        className="select-tp-evento"
                        options={quaisEventos} // aqui o array dos tipos
                        manipulatorFunction={(e) => {
                            myEvents(e.target.value)
                        }}
                        defaultValue={tipoEvento}
                    />

                    {/* Todos ou Meus Eventos? */}
                    {tipoEvento === 1 ? (
                        <>
                        </>
                    ) : (
                        <>
                        </>
                    )}
                    <Table
                        dados={eventos}
                        fnConnect={handleConnect}
                        fnShowModal={() => {
                            showHideModal();
                        }}
                    />
                </Container>
            </MainContent>

            {/* SPINNER -Feito com position */}
            {showSpinner ? <Spinner /> : null}

            {showModal ? (
                <Modal
                    userId={userData.userId}
                    showHideModal={showHideModal}
                    fnDelete={commentaryRemove}

                />
            ) : null}
        </>
    );
};

export default EventoAlunoPage;