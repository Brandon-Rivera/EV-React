import React from 'react'

const Options = () => {
    return (
        <div>
            <h6>Opción</h6>
            <input
                id="optionName"
                class="form-field"
                type="text"
                placeholder="Nombre de opción"
                name="optionName"
            />
            <input
                id="optionValue"
                class="form-field"
                type="text"
                placeholder="Valor de opción"
                name="optionValue"
            />
        </div>
    )
}

export default Options