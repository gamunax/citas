import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {
  const [appointments, saveAppointments] = useState([]);

  const createAppointment = (appointment) => {
    saveAppointments([
      ...appointments,
      appointment
    ]);
  };

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment?.id !== id);
    saveAppointments(newAppointments);
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {appointments.map(cita => (
              <Cita
                key={cita?.id}
                cita={cita}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
