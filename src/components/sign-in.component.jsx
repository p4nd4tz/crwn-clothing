import Button from "./button.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase.utils";
import { useState } from "react";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(
        formFields.email,
        formFields.password
      );
    } catch (err) {
      console.log(err.message);
    }

    resetFormFields();
  };

  const handleChange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="flex flex-col gap-5 w-1/3">
      <h1 className="text-3xl font-semibold">Already have an account ?</h1>
      <p className="text-2xl">Sign in with your email and password</p>
      <form className="flex flex-col gap-24 mt-10" onSubmit={handleSubmit}>
        <input
          type="email"
          className="border-b-2 text-lg p-2 ps-0 outline-none"
          placeholder="Email"
          name="email"
          required
          value={formFields.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          className="border-b-2 text-lg p-2 ps-0 outline-none"
          placeholder="password"
          name="password"
          required
          value={formFields.password}
          onChange={(e) => handleChange(e)}
        />
        <div className="flex justify-between">
          <Button type="submit" className="py-4 px-8 text-lg">
            Sign in
          </Button>
          <Button className="py-4 px-8 text-lg" onClick={logGoogleUser}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
