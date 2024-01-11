import { useState } from 'react';
// import './.App.css'
function Form() {
  const [formvals, setformvals] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  function handleForm(e) {
    const { name, value } = e.target;
    setformvals({ ...formvals, [name]: value });
  }

  function validate(e) {
    e.preventDefault();
    let error = {};

    if (formvals.firstname.length === 0) {
      error.firstname = 'Please enter your firstname';
    }
    if (formvals.lastname.length === 0) {
      error.lastname = 'Please enter your lastname';
    }
    if (formvals.phone.length === 0) {
      error.phone = 'Please enter your phone number';
    }
    if (formvals.email.length === 0) {
      error.email = 'Please enter your email';
    }

    setErrors(error);
    if (Object.keys(error).length === 0) {
      console.log('Form submitted:', formvals);
    }
  }

  return (
    <>
      <form className='main' onSubmit={validate}>
        <input
          type='text'
          placeholder='firstname'
          name='firstname'
          id='name'
          value={formvals.firstname}
          onChange={handleForm}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
        <input
          type='text'
          placeholder='lastname'
          name='lastname'
          value={formvals.lastname}
          onChange={handleForm}
        />
        {errors.lastname && <p>{errors.lastname}</p>}
        <input
          type='text'
          placeholder='phone'
          name='phone'
          value={formvals.phone}
          onChange={handleForm}
        />
        {errors.phone && <p>{errors.phone}</p>}
        <input
          type='text'
          placeholder='email'
          name='email'
          value={formvals.email}
          onChange={handleForm}
        />
        {errors.email && <p>{errors.email}</p>}
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default Form;
