const submitFormData = (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Submitted form data:', formData); // Use the formData parameter
      // Simulate a random failure
      if (Math.random() < 0.2) {
        reject('Network error. Please try again.');
      } else {
        resolve('Form submitted successfully!');
      }
    }, 1000); // Simulate a 1-second delay
  });
};

export default submitFormData;
