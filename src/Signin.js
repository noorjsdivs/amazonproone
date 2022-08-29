import React, { useEffect, useContext } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { ToastContainer, toast } from "react-toastify";
import { gapi } from "gapi-script";
import { Store } from "./Store";
import { useNavigate } from "react-router-dom";

const clientId =
  "243669952348-um76iqmjlp22e8viud4phge746l1d4tn.apps.googleusercontent.com";

const Signin = () => {
  const navigate = useNavigate();
  const { userdispatch, userstate } = useContext(Store);
  const onSuccess = (res) => {
    userdispatch({ type: "USER_LOGIN", payload: res.profileObj });
    navigate("/", { state: `Login by ${res.profileObj.name}!` });
  };

  const onFailure = (res) => {
    console.log("Login Failed", res);
    toast.error("Login falied!");
  };

  const onSuccessLogout = () => {
    toast.success("Logout Successfully!");
    navigate("/", { state: "Logout Successfully!" });
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="flex px-20 justify-center gap-10 h-32 items-center">
      {!userstate.userInfo ? (
        <div id="signInButton">
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      ) : (
        <div id="singOutButton">
          <GoogleLogout
            clientId={clientId}
            buttonText={"Logout From Google"}
            onLogoutSuccess={onSuccessLogout}
          />
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Signin;
