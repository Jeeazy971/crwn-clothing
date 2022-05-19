import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };
    return (
        <div>
            <h1>Sign in routes</h1>
            <button onClick={logGoogleUser}>Connexion avec google Popup</button>
        </div>
    );
};

export default SignIn;
