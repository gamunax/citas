import React, { Fragment } from 'react'

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre de Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
        />
      </form>
    </Fragment>
  );
}

export default Formulario;