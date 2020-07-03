/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react';
import { Link } from 'gatsby';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';

import { SocialButton } from './styled';

const SocialLogin = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

  const mockLoginButton = () => {
    console.log('login!');
  }

  return (
    <div
      style={{
        margin: 'auto',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <FacebookLogin
        appId="1088597931155576"
        autoLoad
        callback={responseFacebook}
        render={renderProps => (
          <Link to="/">
            <SocialButton
              onClick={mockLoginButton}
              shape="round"
              style={{ backgroundColor: '#3F5993' }}
              icon={<FacebookOutlined style={{ color: 'white' }} />}
            >
              Sign In with Facebook
            </SocialButton>
          </Link>
        )}
      />
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={renderProps => (
          <Link to="/">
            <SocialButton
              onClick={mockLoginButton}
              shape="round"
              style={{ backgroundColor: '#4496EC' }}
              disabled={renderProps.disabled}
              icon={<GoogleOutlined style={{ color: 'white' }} />}
            >
              Sign In with Google
            </SocialButton>
          </Link>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default SocialLogin;
