import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (e) => {
        e.preventDefault();
    //    await setFormFields(createAuthUserWithEmailAndPassword(formFields));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Inscrivez-vous avec votre e-mail et votre mot de passe</h1>
            <form onSubmit={() => {}}>
                <label htmlFor="">Nom et prénom</label>
                <input
                    type="text"
                    name="displayName"
                    id=""
                    required
                    onChange={handleChange}
                    value={displayName}
                />

                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    id=""
                    required
                    onChange={handleChange}
                    value={email}
                />

                <label htmlFor="">Mot de passe</label>
                <input
                    type="password"
                    name="password"
                    id=""
                    required
                    onChange={handleChange}
                    value={password}
                />

                <label htmlFor="">Confirmation du mot de passe</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id=""
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <button type="submit">Inscription</button>
            </form>
        </div>
    );
};

export default SignUpForm;
