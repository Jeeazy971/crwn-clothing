import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
       const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign in routes</h1>
            <button onClick={logGoogleUser}>Connexion avec google Popup</button>
        </div>
    );
};

export default SignIn;
