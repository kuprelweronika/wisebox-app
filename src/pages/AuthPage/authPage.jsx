import React from "react";
import LeftSidePanel from "./components/LeftSidePanel";
import "../../styles/AuthPage.scss";
import LogingForm from "./components/LogingForm";
import logo from "../../assets/logo.png";
import RegisteryForm from "./components/RegisteryForm";

const AuthPage = () => {
  return (
    <div className='min-vh-100'>
      <div className='container-fluid'>
        <div className='row min-vh-100'>
          <div className='col-4 p-0'>
            <LeftSidePanel />
          </div>
          <div className='col-8 d-flex flex-column justify-content-center align-items-center'>
            <img src={logo} alt='wisebox' />
            <span className='header-2'>Manage your stock the way you want</span>
            <LogingForm></LogingForm>
            <button className='w-50 py-3 px-4 rounded-5 type-3 m-4 auth--btn'>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
