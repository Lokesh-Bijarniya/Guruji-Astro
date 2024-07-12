import { useState, useEffect } from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Steppers from './components/Stepper';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    });
  };

  const resetActiveStep = () => {
    setActiveStep(0);
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className='lg:w-1/2 mb-12'>
    <Steppers activeStep={activeStep} /></div>
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
          <Routes>
            <Route
              path="/"
              element={<Form1 nextStep={() => { handleNext(); navigate('/address'); }} handleChange={handleChange} values={formData} />}
            />
            <Route
              path="/address"
              element={<Form2 nextStep={() => { handleNext(); navigate('/confirmation'); }} prevStep={() => { handleBack(); navigate('/'); }} handleChange={handleChange} values={formData} />}
            />
            <Route
              path="/confirmation"
              element={<Form3 prevStep={() => { handleBack(); navigate('/address'); }} values={formData} resetFormData={resetFormData} resetActiveStep={resetActiveStep}/>}
            />
          </Routes>
        </div>
      </div>
  );
};

export default App;
