import { async } from '@firebase/util';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log()
    }
    return (
        <div>
            <h1>Sign in routes</h1>
        </div>
    );
};

export default SignIn;
