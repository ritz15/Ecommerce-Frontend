import React from 'react';
// import "../components/Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
// import "mdbreact/dist/css/mdb.css";
import { FaFacebook,FaGithub,FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { positions } from '@mui/system';


export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white fixed ' style={{"height": "20%" }}>
      <MDBContainer className='p-4 pb-0 '>
        <section className='mb-4 ' >
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com'
            role='button'
          >
        < FaFacebook/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com
            '
            role='button'
          >
            <FaTwitter />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://www.google.co.in'
            role='button'
          >
            <FaGoogle />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com'
            role='button'
          >
            <FaInstagram />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://in.linkedin.com'
            role='button'
          >
            <FaLinkedin/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <FaGithub />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' >
        © 2020 Copyright:
        <a className='text-white' href='http://localhost:3000/home'>
          OnlineShop.com
        </a>
      </div>
    </MDBFooter>
  );
}