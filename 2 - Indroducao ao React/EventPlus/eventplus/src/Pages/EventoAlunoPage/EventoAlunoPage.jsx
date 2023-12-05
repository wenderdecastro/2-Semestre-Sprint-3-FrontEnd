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
import { UserContext } from "../../context/AuthContext";
import Notification from "../../components/Notification/Notification";

const EventoAlunoPage = () => {
    // state do menu mobile
    const [exibeNavbar, setExibeNavbar] = useState(false);
    const [eventos, setEventos] = useState([]); //Eventos para serem buscados
    // select mocado
    const [quaisEventos, setQuaisEventos] = useState([
        { value: 1, text: "Todos os eventos" },
        { value: 2, text: "Meus eventos" },
    ]);

    const [notifyUser, setNotifyUser] = useState(); //Componente Notification

    const [tipoEvento, setTipoEvento] = useState("1"); //código do tipo do Evento escolhido É UMA STRING
    const [showSpinner, setShowSpinner] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // recupera os dados globais do usuário
    const { userData, setUserData } = useContext(UserContext);

    async function LoadEvents() {
        if (tipoEvento === "1") { // os eventos completos
            try {
                // listar os aventos
                const request = (await (await api.get(eventsResource)).data);

                setEventos(request)

            } catch (error) {
                alert("Erro em carregar todos os eventos ")
                console.log(error);
            }

        }
        else { //os eventos do aluno
            try {
                // Listar os eventos do aluno
                const request = (await (await api.get(`${presenceEventResource}/${userData.UserId}`)).data);

                const arrEventos = [];

                request.forEach(e => {
                    arrEventos.push(e.evento)
                });

                setEventos(arrEventos)

            } catch (error) {
                alert("Erro em carregar os eventos do aluno")
                console.log(error);
            }

        }
    }

    useEffect(() => {
        LoadEvents();
        if (tipoEvento === "1") {

        }
        else if (tipoEvento === "2") {

        } else {
            setEventos([])
        }
    }, [tipoEvento]);

    const verificaPresenca = (arrAllEvents, eventsUser) => {
        for (let x = 0; x < arrAllEvents.length; x++) {
            for (let i = 0; i < eventsUser.length; i++) {
                if (arrAllEvents[x].idEvento === eventsUser[i].idEvento) arrAllEvents[x].situacao = true
                break;
            }

        }

    }

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
            {/* Linha para a inclusão da notificação */}
            <Notification {...notifyUser} setNotifyUser={setNotifyUser} />

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