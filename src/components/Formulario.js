import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4';

const Formulario = ({ createAppointment }) => {

  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const [error, updateError] = useState(false);

  const handleChange = (event) => {
    updateAppointment({
      ...appointment,
      [event.target.name]: event?.target.value
    });
  };

  const { pet, owner, date, time, symptoms } = appointment;

  const submitAppointment = (event) => {
    event.preventDefault();

    if (pet?.trim() === '' ||
      owner?.trim() === '' ||
      date?.trim() === '' ||
      time?.trim() === '' ||
      symptoms?.trim === '') {
        updateError(true);
        return;
    }

    updateError(false);

    appointment.id = uuid();
    
    createAppointment(appointment);

    updateAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    });

  }

  return (
    <Fragment>
      <h2>Crear cita</h2>

      {
        error ?
        <p className="alerta-error">
          Todos los campos son obligatorios
        </p>
        : null
      }

      <form
        onSubmit={submitAppointment}
      >
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