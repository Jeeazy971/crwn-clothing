import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();
        } catch (e) {
            switch (e) {
                case 'auth/wrong-password':
                    alert('Email ou mot de passe incorrect');
                    break;

                case 'auth/user-not-found':
                    alert('Aucun utilisateur est associé avec cet email');
                    break;

                default:
                    console.log(e);
                    break;
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
            <h2>Vous avez déjà un compte ?</h2>
            <span>connectez-vous avec votre e-mail ainsi que votre mot de passe</span>
            <form onSubmit={handleSubmit}>
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

                <div className="buttons-container">
                    <Button type="submit">Connexion</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>
                         Google connect
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
