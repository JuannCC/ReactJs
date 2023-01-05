import React from 'react';
import { CONECT } from '../../models/levels.enum';
import { Task2 } from '../../models/contact.class'
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {

    const defaultContact = new Task2('Juan Cruz', 'Crotta', 'juancruz@gmail.com', true)

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>The contact is: </h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista de tareas */}
            <ContactComponent task2={defaultContact}></ContactComponent>
        </div>
    );
};


ContactListComponent.propTypes = {

};


export default ContactListComponent;
