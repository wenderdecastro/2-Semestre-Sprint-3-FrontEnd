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
    options,
    required,
    name,
    defaultValue,
    className = ''
}) => {
    return (
        <select
            name={name}
            id={id}
            required={required}
            className={`.input-component ${className}`}
            value={defaultValue}
            onChange={manipulationFunction}
        >
            <option value="">selecione</option>
            {/* options.map() */}
            {options.map((option) => {
                return (<option key={option.id} value={option.value}>{option.text}</option>)
            })}
        </select>
    )

}