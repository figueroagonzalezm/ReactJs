import { useState } from 'react';

const MyForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: ''
    });



    const handleChange = (event) => {
        const { name, value } = event.target; // Desestructuramos el nombre y el valor del input que ha cambiado
        setFormData((prevData) => ({
            ...prevData, // Mantenemos el estado anterior
            [name]: value // Actualizamos solo el campo que ha cambiado utilizando el nombre del input como clave
        }));

        setFormErrors((prevErrors) => ({
            ...prevErrors, // Mantenemos los errores existentes
            [name]: '' // Limpiamos el error del campo que ha cambiado
        }));

    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Evitamos que el formulario se envíe y recargue la página
        console.log('Form submitted: ', formData); // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor

        const newFormErrors = {};
        if (formData.username.trim() === '') {
            newFormErrors.username = 'El nombre de usuario es requerido';
        }
        if (formData.email.trim() === '') {
            newFormErrors.email = 'El email es requerido';
        }
        if (formData.password.trim() === '') {
            newFormErrors.password = 'La contraseña es requerida';
        }

        if(Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors);
        } else {
            // Si no hay errores, puedes proceder con el envío del formulario
            console.log('Form data is valid, submitting:', formData);
        }

    }

    const enablePerEvent = (event) => {
        console.log('Event enabled', event.type);
    }
    const formEnabled = (event) => {
        console.log('form enabled', event.type);
    }
    const inputEnabled = (event) => {
        // Detiene la propagación del evento hacia el formulario
        // De esta manera, el evento de clic en el formulario no se activará cuando se haga clic en el input
        event.stopPropagation();
        console.log('input enabled', event.type);
    }


    return (
        <div>
            <form autoComplete="off" onClick={formEnabled} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" onMouseOver={enablePerEvent} >Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onClick={inputEnabled}
                        onChange={handleChange}
                    />
                    {formErrors.username && <span className="error">{formErrors.username}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div>
                    <label htmlFor="password" onClick={enablePerEvent} >Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <span className="error">{formErrors.password}</span>}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default MyForm