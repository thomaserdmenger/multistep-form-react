import * as React from "react";

export default function MultistepForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  });

  const [currentStep, setCurrentStep] = React.useState(1);

  const handleChange = (e) =>
    setFormData((currentFormData) => ({
      ...currentFormData,
      [e.target.name]: e.target.value,
    }));

  const handleNextStep = () =>
    setCurrentStep((previousStep) => previousStep + 1);

  const handlePreviousStep = () =>
    setCurrentStep((previousStep) => previousStep - 1);

  return (
    <form>
      <h2>Personal Information</h2>
      <div>
        <label>Step {currentStep} of 3</label>
        <progress value={currentStep} max={3}></progress>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleNextStep}>
        Next
      </button>
    </form>
  );
}
