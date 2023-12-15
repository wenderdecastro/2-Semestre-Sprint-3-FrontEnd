import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import Title from "../../components/Title/Title";
import Table from "./TableEvA/TableEvA";
import Container from "../../components/Container/Container";
import { Select, SelectMyEvents } from "../../components/FormComponents/FormComponents";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/Modal/Modal";
import api, { commentEventResource, eventsResource, presenceEventResource } from "../../Services/Service";

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
    // ID do Evento
    const [idEvento, setIdEvento] = useState();
    // Texto do comentário
    const [comentario, setComentario] = useState();
    // Texto do novo comentário a ser postado
    const [novoComentario, setNovoComentario] = useState("");

    // Id do comentário cadastrado
    const [idComentario, setIdComentario] = useState();

    useEffect(() => {
        LoadEvents();
    }, [tipoEvento, userData.UserId]);


    async function LoadEvents() {
        if (tipoEvento === "1") { // os eventos completos
            try {
                // listar os aventos
                const todoEvento = (await (await api.get(eventsResource)).data);
                const meuEvento = await (await api.get(`${presenceEventResource}/${userData.UserId}`)).data
                const eventosMarcados = verificaPresença(todoEvento, meuEvento)

                setEventos(eventosMarcados);

            } catch (error) {
                console.log(error);
            }

        }
        else if (tipoEvento === "2") { //os eventos do aluno
            try {
                // Listar os eventos do aluno
                const request = (await (await api.get(`${presenceEventResource}/${userData.UserId}`)).data);

                const arrEventos = [];

                request.map((pr) => {
                    arrEventos.push({
                        ...pr.evento,
                        situacao: true,
                        idPresencaEvento: pr.idPresencaEvento
                    })
                })

                setEventos(arrEventos)

            } catch (error) {
                alert("Erro em carregar os eventos do aluno")
                console.log(error);
            }

        }
        else {
            setEventos([]);
        }
    }


    function Aviso(key) { // 1 = Comentário pelo menos 3 char, 2 = exclusão, 3 = cadastro, 4= Atualização

        switch (key) {

            case 1:
                setNotifyUser({
                    titleNote: "Aviso",
                    textNote: `O Comentário deve conter pelo menos 3 caracteres`,
                    imgIcon: "warning",
                    imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
                    showMessage: true
                });
                break;
            case 2:
                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote: `Comentário excluído com sucesso`,
                    imgIcon: "success",
                    imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
                    showMessage: true
                });
                break;
            case 3:
                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote: `Comentário cadastrado com sucesso`,
                    imgIcon: "success",
                    imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
                    showMessage: true
                });
                break;
            case 4:
                setNotifyUser({
                    titleNote: "Sucesso",
                    textNote: `Comentário atualizado com sucesso`,
                    imgIcon: "success",
                    imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
                    showMessage: true
                });
                break;
            default:
                setNotifyUser({
                    titleNote: "Aviso",
                    textNote: `${key}`,
                    imgIcon: "warning",
                    imgAlt: "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok",
                    showMessage: true
                });
                break;
        }
    }



    const verificaPresença = (arrAllEvents, eventsUser) => {

        for (let x = 0; x < arrAllEvents.length; x++) { //para cada evento

            for (let i = 0; i < eventsUser.length; i++) { // procurar a corre

                if (arrAllEvents[x].idEvento === eventsUser[i].idEvento) {

                    arrAllEvents[x].situacao = true;
                    arrAllEvents[x].idPresencaEvento = eventsUser[i].idPresencaEvento
                    break; //paro de procurar para o evento principal atual
                }
            }
        }

        return arrAllEvents;
    }

    // toggle meus eventos ou todos os eventos
    function myEvents(tpEvent) {
        setTipoEvento(tpEvent);
    }

    const showHideModal = (idEvento) => {

        setShowModal(showModal ? false : true);

        if (showModal) { //Um if para quando fecharmos o modal não fazer a requisição novamente
            return;
        }
        setUserData({
            ...userData,
            idEvento: idEvento
        })

        setIdEvento(idEvento)

        loadMyCommentary(idEvento);
    };

    // ler um comentário
    async function loadMyCommentary(id) {

        const request = await api.get(`${commentEventResource}/BuscarPorIdUsuario?idAluno=${userData.UserId}&idEvento=${id}`)

        setComentario(request.data.descricao)
        setIdComentario(request.data.idComentarioEvento)
    }

    // Cadastra um comentário
    async function postMyCommentary() {

        const request = api.post(commentEventResource, {
            descricao: novoComentario,
            exibe: true,
            idUsuario: userData.UserId,
            idEvento: idEvento
        });

        const chamado = await api.get(`${commentEventResource}/BuscarPorIdUsuario?idAluno=${userData.UserId}&idEvento=${idEvento}`)

        setComentario(novoComentario);
        setNovoComentario("");
        Aviso(3);
    }

    // remove o comentário
    async function removeMyCommentary() {

        try {
            const request = await api.delete(`${commentEventResource}/${idComentario}`)

            setComentario("Comentário Deletado!")

            Aviso(2);

        } catch (error) {
            Aviso("Não há nada para se deletar!")
        }

    };

    async function handleConnect(idEvento, whatTheFunction, presencaId = null) {

        if (whatTheFunction === "connect") {
            try {
                const obj = {
                    situacao: true,
                    idUsuario: userData.UserId,
                    idEvento: idEvento
                }

                const retorno = await api.post(presenceEventResource, obj)

                if (retorno.status === 201 || retorno.status === 200 || retorno.status === 204) {
                    LoadEvents();
                }


            } catch (error) {
                alert(error)
            }
            return;
        }

        try {
            const unconnected = await api.delete(`${presenceEventResource}/${presencaId}`);

            if (unconnected.status === 201 || unconnected.status === 200 || unconnected.status === 204) {
                LoadEvents();
            }

        } catch (error) {
            alert("Erro na deleção da presença")
            console.log(error)
        }
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
                        fnShowModal={showHideModal}
                    />
                </Container>
            </MainContent>

            {/* SPINNER -Feito com position */}
            {showSpinner ? <Spinner /> : null}

            {showModal ? (
                <Modal
                    userId={userData.userId}
                    showHideModal={showHideModal}
                    fnPost={postMyCommentary}
                    fnDelete={removeMyCommentary}
                    comentaryText={comentario}

                    fnGet={loadMyCommentary}

                    newComentary={novoComentario}
                    setNewComentary={setNovoComentario}

                />
            ) : null}
        </>
    );
};

export default EventoAlunoPage;