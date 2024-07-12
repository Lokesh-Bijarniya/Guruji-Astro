import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form2 = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const notify = (message) => toast.error(message);

  const validate = () => {
    let tempErrors = {};
    if (!values.address1) tempErrors.address1 = "Address Line 1 is required";
    if (!values.city) tempErrors.city = "City is required";
    if (!values.state) tempErrors.state = "State is required";
    if (!values.zip) tempErrors.zip = "Zip Code is required";
    setErrors(tempErrors);
    Object.values(tempErrors).forEach((error) => notify(error));
    return Object.keys(tempErrors).length === 0;
  };

  const next = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Address Information</h2>
      <form>
        <label className="block mb-2">Address Line 1:</label>
        <input type="text" onChange={handleChange('address1')} value={values.address1} className={`w-full p-2 mb-4 border rounded ${errors.address1 && 'border-red-500'}`} />
        {errors.address1 && <p className="text-red-500">{errors.address1}</p>}
        
        <label className="block mb-2">Address Line 2:</label>
        <input type="text" onChange={handleChange('address2')} value={values.address2} className="w-full p-2 mb-4 border rounded" />
        
        <label className="block mb-2">City:</label>
        <input type="text" onChange={handleChange('city')} value={values.city} className={`w-full p-2 mb-4 border rounded ${errors.city && 'border-red-500'}`} />
        {errors.city && <p className="text-red-500">{errors.city}</p>}
        
        <label className="block mb-2">State:</label>
        <input type="text" onChange={handleChange('state')} value={values.state} className={`w-full p-2 mb-4 border rounded ${errors.state && 'border-red-500'}`} />
        {errors.state && <p className="text-red-500">{errors.state}</p>}
        
        <label className="block mb-2">Zip Code:</label>
        <input type="text" onChange={handleChange('zip')} value={values.zip} className={`w-full p-2 mb-4 border rounded ${errors.zip && 'border-red-500'}`} />
        {errors.zip && <p className="text-red-500">{errors.zip}</p>}
        
        <button onClick={back} className="bg-gray-500 text-white py-2 px-4 rounded mr-2">Back</button>
        <button onClick={next} className="bg-blue-500 text-white py-2 px-4 rounded">Next</button>
      </form>
      <ToastContainer />
    </div>
  );
};

Form2.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
};

export default Form2;
