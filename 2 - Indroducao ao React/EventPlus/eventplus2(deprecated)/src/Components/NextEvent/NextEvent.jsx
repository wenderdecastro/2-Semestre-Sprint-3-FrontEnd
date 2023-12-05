import React from 'react';
import './NextEvent.css'
import { Tooltip } from 'react-tooltip'

const NextEvent = ({ title, description, eventDate, idEvent }) => {
    function conectar(idEvent) {
        alert(`chamar o recurso para conectar: ${idEvent}`)
    }
    return (

        <article className='event-card'>
            <h2 className='event-card__title'>
                {title.substr(0, 15)}
            </h2>
            <p className='event-card__description'
                data-tooltip-id="tooltip-description"
                data-tooltip-content={description}
                data-tooltip-place="top">
                {description.substr(0, 15)} ...
            </p>
            <Tooltip
                id="tooltip-description"
                className="tooltip"
            />

            <p className='event-card__description'>
                {new Date(eventDate).toLocaleDateString()}
            </p>

            <a href="/" onClick={() => { conectar(idEvent) }} className='event-card__connect-link'>
                Conectar
            </a>

        </article>

    );
};

export default NextEvent;