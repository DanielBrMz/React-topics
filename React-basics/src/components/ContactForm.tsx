import React from 'react';
import { useForm } from '../hooks/useForm';
import { Errors, formObject } from '../ts/interfaces/global_interfaces';
import { LogInValidation } from '../ts/types/global_types';
import Loader from './Loader';
import Message from './Message';

const initialForm: LogInValidation = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const validationsForm = (form: LogInValidation): Errors => {
    let errors: Errors = {};
    const regexName:RegExp = new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, 'g'),
        regexEmail:RegExp = new RegExp(/^[A-Za-z0-9_.+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/, 'g'),
        regexSubject:RegExp = new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, 'g'),
        regexMessage:RegExp = new RegExp(/^.{1,255}$/, 'g');   

    
    
    if(!form.name.trim()){
        errors.name = `El nombre es obligatorio`; 
    } else if(!regexName.test(form.name.trim())){
        errors.name = 'El nombre solo acepta letras y espacios en blanco';
    }

    if(!form.email.trim()){
        errors.email = `El email es obligatorio`; 
    } else if(!regexEmail.test(form.email.trim())){
        errors.email = 'El email no es válido';
    }

    if(!form.subject.trim()){
        errors.subject = `El asunto es obligatorio`; 
    } else if(!regexSubject.test(form.subject.trim())){
        errors.subject = 'El asunto solo acepta letras y espacios en blanco';
    }

    if(!form.message.trim()){
        errors.message = `El mensaje es obligatorio`; 
    } else if (!regexMessage.test(form.message.trim())){
        errors.message = 'El mensaje solo acepta letras y espacios en blanco';
    }


    return errors;
}

const ContactForm = (): JSX.Element => {
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit}: formObject = useForm(initialForm, validationsForm);

    const styles: object = {
        border: '1px solid #e1e1e1',
        padding: '1rem',
        borderRadius: '.5rem',
        fontWeight: 'bold',
        color: '#dc3545',
    }
  return (
    <div>
        <h2>Formulario de contacto</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Escribe tu nombre' onBlur={handleBlur} onChange={handleChange}  value={form.name} required/>
            {errors.name && <p style={styles}>{errors.name}</p>}
            <input type="email" name='email' placeholder='Escribe tu email' onBlur={handleBlur} onChange={handleChange}  value={form.email} required/>
            {errors.email && <p style={styles}>{errors.email}</p>}
            <input type="text" name='subject' placeholder='Asunto a tratar' onBlur={handleBlur} onChange={handleChange}  value={form.subject} required/>
            {errors.subject && <p style={styles}>{errors.subject}</p>}
            <textarea name="message" cols={50} rows={5} placeholder="Escribe tus comentarios" onBlur={handleBlur} onChange={handleChange} value={form.message} required></textarea>                 
            {errors.message && <p style={styles}>{errors.message}</p>}
            <input type="submit" value="Enviar"/>
        </form>
        {loading && <Loader/>}
        {response && <Message msg="Los datos han sido enviados" bgColor="#198754"/>}
    </div>
  )
}

export default ContactForm