import './TableEv.css';

import TrashImage from '../../../assets/images/trash-delete.svg';
import PenImage from '../../../assets/images/edit-pen.svg';

const Table = ({ dados, fnDelete = null, fnUpdate = null }) => {
    return (
        <table className='table-data' id='table'>
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">Nome do Evento</th>
                    <th className="table-data__head-title table-data__head-title--big">Data do Evento</th>
                    <th className="table-data__head-title table-data__head-title--big">Instituição</th>
                    <th className="table-data__head-title table-data__head-title--big">Descrição</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((ev) => {
                    return (
                        <tr key={ev.idEvento} className="table-data__head-row">
                            <td className="table-data__data table-data__data--big">
                                {ev.nomeEvento}
                            </td>
                            <td className="table-data__data table-data__data--big">
                                {ev.descricao}
                            </td>
                            <td className="table-data__data table-data__data--big">
                                {ev.tiposEvento.titulo}
                            </td>
                            <td className="table-data__data table-data__data--big">
                                {new Date(ev.dataEvento).toLocaleDateString()}
                            </td>
                            <td className="table-data__data table-data__data--little">
                                <img
                                    onClick={(e) => { fnUpdate(ev.idEvento) }}
                                    className="table-data__icon"
                                    src={PenImage}
                                    alt="Botão de editar tipo do evento, ilustrado por um lápis." />
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img
                                    onClick={(e) => { fnDelete(ev.idEvento) }}
                                    className="table-data__icon"
                                    src={TrashImage}
                                    alt="Botão de deletar tipo do evento, ilustrado por um lixo." />
                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;