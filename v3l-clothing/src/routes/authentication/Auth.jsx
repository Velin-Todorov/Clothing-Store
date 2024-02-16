import {
  signInWithGooglePopup,
  createUserDocumnentFromAuth
} from "../../utils/firebase/utils";

import { useEffect } from "react";
import { SignInMethod, getRedirectResult } from "firebase/auth";
import SingUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";

import './authentication.styles.scss'

const Authentication = () => {

  return (
    <div className="authentication-container">
      <SignInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
