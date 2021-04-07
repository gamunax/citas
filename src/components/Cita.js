import React from 'react'

export const Cita = ({ cita, deleteAppointment }) => (
  <div className="cita">
    <p>Mascota: <span>{cita?.pet}</span></p>
    <p>Dueño: <span>{cita?.owner}</span></p>
    <p>Fecha: <span>{cita?.date}</span></p>
    <p>Hora: <span>{cita?.time}</span></p>
    <p>Sintomas: <span>{cita?.symptoms}</span></p>

    <button
      className="button eliminar u-full-width"
      onClick={() => deleteAppointment(cita?.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

export default Cita;