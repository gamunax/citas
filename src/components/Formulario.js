import React, { Fragment, useState } from 'react'

const Formulario = () => {

  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const handleChange = (event) => {
    updateAppointment({
      ...appointment,
      [event.target.name]: event?.target.value
    });
  };

  const { pet, owner, date, time, symptoms } = appointment;

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre de Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre de mascota"
          onChange={handleChange}
          value={pet}
        />

        <label>Nombre de Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre de Duego de la mascota"
          onChange={handleChange}
          value={owner}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        >
        </textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
}

export default Formulario;