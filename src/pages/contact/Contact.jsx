import React from 'react';
import './contact.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident mollitia expedita quis repudiandae pariatur doloribus animi aut?
      </Header>

      <section className='contact'>
        <div className="container contact_container">
          <div className="contact-wrapper">
            <a href="mailto:info@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+12345678" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact