import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (e) {
            if (e.code === 'auth/email-already-in-use') {
                alert('Cette adresse à déjà été utilisé');
            } else if (e.code === 'auth/weak-password') {
                alert('Le mot de passe doit avoir plus de 6 caractères');
            } else {
                console.log("Une erreur est survenue à la création de l'utilisateur", e);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    return (
        <div className="sign-up-container">
            <h2>Vous n'avez pas de compte ?</h2>
            <span>Inscrivez-vous avec votre e-mail et votre mot de passe</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Pseudo"
                    type="text"
                    name="displayName"
                    required
                    onChange={handleChange}
                    value={displayName}
                />

                <FormInput
                    label="Adresse email"
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <FormInput
                    label="Mot de passe"
                    type="password"
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}
                />

                <FormInput
                    label="Confirmation du mot de passe"
                    type="password"
                    name="confirmPassword"
                    required
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <Button type="submit">Inscription</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
