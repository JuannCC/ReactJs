import React from 'react';
import PropTypes from 'prop-types';
import { Task2 } from '../../models/contact.class';


const ContactComponent = ({ task2 }) => {
    return (
        <div>
            <h2>
                Nombre: { task2.name }
            </h2>
            <h3>
                Apellido: { task2.lastname }
            </h3>
            <h4>
                Email: { task2.email }
            </h4>
            <h5>
                This user is: {task2.conected ? 'Contacto en Linea':'Contacto No conectado'}
            </h5>

        </div>
    );
};


ContactComponent.propTypes = {
    task2: PropTypes.instanceOf(Task2)
};


export default ContactComponent;
