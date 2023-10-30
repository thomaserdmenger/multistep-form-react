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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your submission");
    setFormData(initialFormData);
    setCurrentStep(1);
  };

  if (currentStep === 1) {
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
            id="name"
            name="name"
            onChange={handleChange}
            placeholder="Enter your name"
            required
            type="text"
            value={formData.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            required
            type="text"
            value={formData.email}
          />
        </div>
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
      </form>
    );
  } else if (currentStep === 2) {
    return (
      <form>
        <h2>Address</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3}></progress>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            onChange={handleChange}
            placeholder="Enter your address"
            required
            type="text"
            value={formData.address}
          />
        </div>
        <div>
          <label htmlFor="ciy">City</label>
          <input
            id="city"
            name="city"
            onChange={handleChange}
            placeholder="Enter your city"
            required
            type="text"
            value={formData.city}
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            id="zipcode"
            name="zipcode"
            onChange={handleChange}
            placeholder="Enter your Zipcode"
            required
            type="text"
            value={formData.zipcode}
          />
        </div>
        <div>
          <button type="button" onClick={handlePreviousStep}>
            Previous
          </button>
          <button type="button" onClick={handleNextStep}>
            Next
          </button>
        </div>
      </form>
    );
  } else if (currentStep === 3) {
    return (
      <form>
        <h2>Confirm your Information</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3}></progress>
        </div>
        <table>
          {Object.keys(formData).map((item) => (
            <tr key={item}>
              <td>{`${item}:`}</td>
              <td>{formData[item]}</td>
            </tr>
          ))}
        </table>
        <div>
          <button type="button" onClick={handlePreviousStep}>
            Previous
          </button>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
