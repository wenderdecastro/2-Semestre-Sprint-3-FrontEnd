import React from 'react';
import "./TableTp.css"
import EditPen from '../../../assets/images/edit-pen.svg'
import TrashDelete from '../../../assets/images/trash-delete.svg'

const TableTP = (dados, fnDelete = null, fnUpdate = null) => {
    return (
        <table className='table-data'>
            <thead className="table-data__head">
                <tr className="table-data__head-row">
                    <th className="table-data__head-title table-data__head-title--big">Título</th>
                    <th className="table-data__head-title table-data__head-title--little">Editar</th>
                    <th className="table-data__head-title table-data__head-title--little">Deletar</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((tp) => {
                    return (
                        <tr className="table-data__head-row">
                            <td className="table-data__data table-data__data--big">
                                Texto do tipo
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img onClick={() => { fnUpdate() }} className="table-data__icon" src={EditPen} alt="" />
                            </td>

                            <td className="table-data__data table-data__data--little">
                                <img onClick={() => { fnDelete() }} className="table-data__icon" src={TrashDelete} alt="" />
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    );
};

export default TableTP;