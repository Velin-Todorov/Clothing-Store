import {
  signInWithGooglePopup,
  createUserDocumnentFromAuth
} from "../../utils/firebase/utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SingUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnentFromAuth(user);
  };


  return (
    <div>
      <button onClick={logGoogleUser}>Sing in with google</button>
      <div>Sign in page</div>
      <SingUpForm />
    </div>
  );
};

export default SignIn;
