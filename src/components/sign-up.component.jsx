import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase.utils';
import Button from "./button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) return;

        try {
            const { user } = await createAuthUserWithEmailAndPassword(formFields);
            await createUserDocumentFromAuth(user, { displayName });
        } catch (err) {
            console.log(err.message);
        }

        resetFormFields();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <>
            <div className="flex flex-col gap-5 w-1/3">
                <h1 className="text-3xl font-semibold">I do not have a account</h1>
                <p className="text-2xl">Sign up with your email and password</p>
                <form className="flex flex-col gap-24 text-left mt-10"
                    onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Display Name"
                        className="border-b-2 text-lg p-2 ps-0 outline-none"
                        name="displayName"
                        value={displayName}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-b-2 text-lg p-2 ps-0 outline-none"
                        name="email"
                        value={email}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-b-2 text-lg p-2 ps-0 outline-none"
                        name="password"
                        value={password}
                        onChange={(e) => handleChange(e)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="border-b-2 text-lg p-2 ps-0 outline-none"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => handleChange(e)}
                    />
                    <Button className="w-1/2 p-6" type="submit">Sign Up</Button>
                </form>
            </div>
        </>
    )
}

export default SignUp