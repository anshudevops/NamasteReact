import react, { useState, useEffect } from "react";
import "../index.scss";
export function FormValidation() {
  const initialValues = {
    username: "",
    password: "",
    email: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email("this email is not valid");
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password length should be > 4 char";
    } else if (values.password.length > 10) {
      errors.password = "password length should not exceed 10 char";
    }

    return errors;
  };
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1> Login form </h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues?.username}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.username}</p>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues?.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>

        <div>
          <label>PAssword</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues?.password}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.password}</p>

        <button className="primary"> Submit</button>
      </form>
    </div>
  );
}
