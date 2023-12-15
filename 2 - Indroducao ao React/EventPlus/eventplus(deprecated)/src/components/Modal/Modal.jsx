import React, { useContext, useEffect, useState } from "react";
import trashDelete from "../../assets/images/trash-delete-red.png";

import { Button, Input } from "../FormComponents/FormComponents";
import "./Modal.css";
import { UserContext } from "../../context/AuthContext";

const Modal = ({
  modalTitle = "Feedback",
  comentaryText = "Não informado. Não informado. Não informado.",
  // userId = null,
  showHideModal = false,
  fnGet = null,
  fnPost = null,
  fnDelete = null
  // idEvento = null

}) => {


  useEffect(() => {
    async function carregarDados() {
      fnGet(userData.userId, userData.idEvento);
    }
    carregarDados();
  }, [])

  const [novoComentario, setNovoComentario] = useState()

  const { userData } = useContext(UserContext)
  console.clear()
  console.log(userData);


  return (
    <div className="modal">
      <article className="modal__box">

        <h3 className="modal__title">
          {modalTitle}
          <span className="modal__close" onClick={() => showHideModal(true)}>x</span>
        </h3>

        <div className="comentary">
          <h4 className="comentary__title">Comentário</h4>
          <img
            src={trashDelete}
            className="comentary__icon-delete"
            alt="Ícone de uma lixeira"
            onClick={fnDelete}
          />

          <p className="comentary__text">{comentaryText}</p>

          <hr className="comentary__separator" />
        </div>

        <Input
          placeholder="Escreva seu comentário..."
          additionalClass="comentary__entry"
          manipulatorFunction={(e) => {
            setNovoComentario(e.target.value);
          }}
          value={novoComentario}
        />

        <Button
          textButton={"Comentar"}
          additionalClass="comentary__button"
          manipulatorFunction={() => fnPost(userData.userId, userData.idEvento, true ,novoComentario)}
        />
      </article>
    </div>
  );
};

export default Modal;
