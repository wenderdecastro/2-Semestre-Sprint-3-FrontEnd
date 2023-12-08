import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select, SelectMyEvents } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, { comentariosEventoResource, eventsResource, nextEventResource, presencesEventsResource } from "../../Services/Service";

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
    const [comentarios, setComentarios] = useState({})
    const [idEvento, setIdEvento] = useState()

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
                const retornoevento = (await (await api.get(`${presencesEventsResource}/${userData.UserId}`)).data);

                const arrEventos = [];

                retornoevento.data.forEach((e) => {
                    arrEventos.push({
                        ...e.evento,
                        situacao: e.situacao,
                        idPresencaEvento: e.idPresencaEvento,
                    })
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
        setEventos([])
        setComentarios({})
        
    }, [tipoEvento]);
    
    const verificaPresenca = (arrAllEvents, eventsUser) => {
        for (let x = 0; x < arrAllEvents.length; x++) {
            for (let i = 0; i < eventsUser.length; i++) {
                if (arrAllEvents[x].idEvento === eventsUser[i].idEvento) {
                    arrAllEvents[x].situacao = true

                }
                break;
            }

        }

    }

    // toggle meus eventos ou todos os eventos
    function myEvents(tpEvent) {
        setTipoEvento(tpEvent);
    }

    const showHideModal = () => {
        setShowModal(showModal ? false : true);
    };

    const commentaryRemove = () => {

    };
    const postMyCommentary = () => {
        alert("post o comentário");
    };
    async function loadMyCommentary(idComentary) {
        const promise = await (await api.get(comentariosEventoResource).data)

        setComentarios(promise)
        console.log(comentarios);
    };

    async function handleConnect(eventId, whatTheFunction, presencaId = null) {
        if (whatTheFunction === "connect") {
            try {
                const promise = await api.post(presencesEventsResource, {
                    situacao: true,
                    idUsuario: userData.userId,
                    idEvento: eventId,
                });
                if (promise.status === 201) alert("conectado ao evento");

                const todosEventos = await api.get(eventsResource);
                setEventos(todosEventos.data);
            } catch (error) { console.error(error); }
            return;
        }
        try {
            const unconnected = await api.delete(
                `${presencesEventsResource}/${presencaId}`
            );
            if (unconnected.status === 204) {
                const todosEventos = await api.get(eventsResource);
                setEventos(todosEventos.data);
            }
        } catch (error) { console.error(error); }
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
                    fnGet={loadMyCommentary}
                    fnPost={postMyCommentary}
                />
            ) : null}
        </>
    );
};

export default EventoAlunoPage;