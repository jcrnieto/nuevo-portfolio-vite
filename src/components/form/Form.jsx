import './form.css';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const apikey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

const Form = () => {
  const form = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    emailjs.sendForm(serviceId, templateId, form.current, apikey)
      .then((result) => {
        console.log(result.text);
        alert('Formulario enviado con éxito')
        resetForm();
      }, (error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    form.current.reset();
  };

  return (
    <div className='container-form' id='contact'>
      <form action="" className="form_main" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <p className="heading">Dejame un Mensaje</p>

        <div className="inputContainer">
          <input
            type="text"
            className="inputField"
            placeholder="Nombre"
            required="required"
            name='user_name'
            {...register('user_name', {
              pattern: /[a-zA-Z ]{2,254}/,
              required: true,
            })}
          />
        </div>
        {errors.user_name?.type === 'required' &&
          <div className='required-name'>
            <p style={{ color: 'red', margin: 0 }}> El campo nombre es requerido</p>
          </div>}
        {errors.user_name?.type === 'pattern' &&
          <div className='incorrect-name'>
            <p style={{ color: 'red', margin: 0 }}>El campo nombre es incorrecto</p>
          </div>}

        <div className="inputContainer">
          <input
            type="email"
            className="inputField"
            placeholder="Email"
            required="required"
            name='user_email'
            {...register('user_email', {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            })}
          />
        </div>
        {errors.user_email?.type === 'required' &&
          <div className='required-mail'>
            <p style={{ color: 'red', margin: 0 }}>El campo email es requerido</p>
          </div>}
        {errors.user_email?.type === 'pattern' &&
          <div className='invalid-mail'>
            <p style={{ color: 'red', margin: 0 }}>El campo email es incorrecto</p>
          </div>}

        <div className="inputContainer">
          <textarea
            type="text"
            className="inputField"
            placeholder="Mensaje"
            required="required"
            name='user_massage'
            {...register('message', {
              required: true
            })}
          />
        </div>
         {errors.user_email?.type === 'required' &&
          <div className='required-massage'>
            <p style={{ color: 'red', margin: 0 }}>El campo mensaje es requerido</p>
          </div>} 

        <button id="button">ENVIAR</button>
      </form>
    </div>
  )
}

export default Form