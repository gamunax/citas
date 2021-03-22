import React, { Fragment, useState }  from 'react';
import Formulario from './components/Formulario';

function App() {
  const [appointments, saveAppointments] = useState([]);

  const createAppointment = (appointment) => {
    saveAppointments([
      ...appointments,
      appointment
    ]);
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
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
