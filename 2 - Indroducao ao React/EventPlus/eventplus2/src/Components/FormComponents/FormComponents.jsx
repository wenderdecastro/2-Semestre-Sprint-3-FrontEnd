import React from 'react';
import "./FormComponents.css"


export const Input = ({
    id,
    manipulationFunction,
    type,
    value,
    required,
    name,
    placeholder,
    className = ''
}) => {
    return (
        <input
            type={type}
            id={id}
            onChange={manipulationFunction}
            value={value}
            required={required ? "required" : ""}
            className={`input-component ${className}`}
            placeholder={placeholder}
            name={name}
        />
    )
};
export const Button = ({
    id,
    manipulationFunction,
    name,
    type,
    buttonText,
    className = ''
}) => {
    return (
        <button
            type={type}
            id={id}
            onClick={manipulationFunction}
            name={name}
            className={`button-component ${className}`}>
            {buttonText}
        </button>
    )
};

export const Label = ({
    htmlFor,
    labelText,
    className = ''
}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`${className}`}>
            {labelText}
        </label>
    )
}

export const Select = ({
    id,
    manipulationFunction,
    options = [],
    required,
    name,
    value = 'Selecione: ',
    className = ''
}) => {
    return (
        <select
            name={name}
            id={id}
            required={required}
            className={`input-component ${className}`}
            value={value}
            onChange={manipulationFunction}
        >
            <option value=""></option>

            {options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)})
        </select>
    )

}