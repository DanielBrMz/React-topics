import React, { useState } from 'react';
import { formObject } from '../ts/interfaces/global_interfaces';
import { LogInValidation } from '../ts/types/global_types';
import { Errors } from '../ts/interfaces/global_interfaces';
import { helpHttp } from '../helpers/helpHttp';


export const useForm = (initialForm: LogInValidation, validationsForm: (form: LogInValidation)=> Errors): formObject => {
    const [form, setForm] = useState<LogInValidation>(initialForm);
    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<boolean | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        handleChange(e);
        setErrors(validationsForm(form));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setErrors(validationsForm(form));

        if(Object.keys(errors).length === 0){
            setLoading(true);
            helpHttp().post('https://formsubmit.co/ajax/spermimko@gmail.com', {
                body: JSON.stringify(form),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setLoading(false);
                setResponse(true);
                setForm(initialForm);
                setTimeout(() => {setResponse(false)}, 5000);
            });
        }else return;
    }

    return {form, errors, loading, response, handleChange, handleBlur, handleSubmit};
}
