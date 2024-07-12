import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form1 = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const notify = (message) => toast.error(message);

  const validate = () => {
    let validErrors = {};
    if (!values.name) validErrors.name = "Name is required";
    if (!values.email) validErrors.email = "Email is required";
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) validErrors.email = "Email is invalid";
    if (!values.phone) validErrors.phone = "Phone is required";

    setErrors(validErrors);

    
    Object.values(validErrors).forEach((error) => notify(error));

    return Object.keys(validErrors).length === 0;
  };

  const next = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Information</h2>
      <form>
        <label className="block mb-2">Name:</label>
        <input type="text" onChange={handleChange('name')} value={values.name} className={`w-full p-2 mb-4 border rounded ${errors.name && 'border-red-500'}`} />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        
        <label className="block mb-2">Email:</label>
        <input type="email" onChange={handleChange('email')} value={values.email} className={`w-full p-2 mb-4 border rounded ${errors.email && 'border-red-500'}`} />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        
        <label className="block mb-2">Phone:</label>
        <input type="tel" onChange={handleChange('phone')} value={values.phone} className={`w-full p-2 mb-4 border rounded ${errors.phone && 'border-red-500'}`} />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        
        <button onClick={next} className="bg-blue-500 text-white py-2 px-4 rounded">Next</button>
      </form>
      <ToastContainer />
    </div>
  );
};

Form1.propTypes = {
  nextStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

export default Form1;
