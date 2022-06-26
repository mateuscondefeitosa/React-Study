import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
    }

    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
        </div>
    )
}

export default SignIn;