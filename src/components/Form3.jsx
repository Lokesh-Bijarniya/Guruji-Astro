import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import submitFormData from '../testapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form3 = ({ prevStep, values, resetFormData, resetActiveStep }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const notify = (message) => toast.error(message);
  const notify1 = (message) => toast.success(message);

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitFormData(values);
      setSubmitted(true);
      notify1('Form submitted successfully!'); 
      resetFormData(); 
      setTimeout(() => {
        navigate('/');
        resetActiveStep(); 
      }, 2000);
    } catch (err) {
      setError(err);
      notify(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Confirmation</h2>
      {!submitted ? (
        <>
          <ul className="mb-4">
            <li><strong>Name:</strong> {values.name}</li>
            <li><strong>Email:</strong> {values.email}</li>
            <li><strong>Phone:</strong> {values.phone}</li>
            <li><strong>Address Line 1:</strong> {values.address1}</li>
            <li><strong>Address Line 2:</strong> {values.address2}</li>
            <li><strong>City:</strong> {values.city}</li>
            <li><strong>State:</strong> {values.state}</li>
            <li><strong>Zip Code:</strong> {values.zip}</li>
          </ul>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button onClick={back} className="bg-gray-500 text-white py-2 px-4 rounded mr-2" disabled={loading}>Back</button>
          <button onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4 rounded" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </>
      ) : (
        <p className="text-green-500 mb-4">Form submitted successfully! Redirecting...</p>
      )}
      <ToastContainer />
    </div>
  );
};

Form3.propTypes = {
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
  resetFormData: PropTypes.func.isRequired,
  resetActiveStep: PropTypes.func.isRequired,
};

export default Form3;
