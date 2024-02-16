import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumnentFromAuth,
} from "../../utils/firebase/utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  confirmPassword: "",
  password: "",
};

import './sign-up-form.styles.scss';

const SingUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumnentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use.')
      }
      console.log("Error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions = {{
            type:"text",
            required: true,
            name:"displayName",
            value:displayName,
            onChange:{handleChange}
          }}
        />

        <FormInput
          label="Email"
          inputOptions = {{
            type:"email",
            required: true,
            name:"email",
            value:email,
            onChange:{handleChange}
          }}
        />

        <FormInput
          label="Password"
          inputOptions = {{
            type:"password",
            required: true,
            name:"password",
            value: password,
            onChange:{handleChange}
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions = {{
            type:"password",
            required: true,
            name:"password",
            value: confirmPassword,
            onChange:{handleChange}
          }}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SingUpForm;
