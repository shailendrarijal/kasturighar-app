import React from 'react';
import iconEmail from '../assets/images/icon-email.png';
import iconFacebook from '../assets/images/icon-facebook.png';
import iconInstagram from '../assets/images/icon-instagram.png';
import iconPhone from '../assets/images/icon-phone.png';


function Contacts() {

    return (
        <div>
            <section id="contactUs" class="container">
          <h2>Get In Touch</h2>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4">
                    <a href="https://www.facebook.com/kasturighar" target="_blank"><div id="facebook-icon-container" class="icon-container">
                    <img class="icon" src={iconFacebook} alt="facebook link" />
                    <span>Facebook</span>
                    </div></a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4">
                    <a href="https://www.instagram.com/kasturi.ghar/" target="_blank"><div id="instagram-icon-container" class="icon-container">
                        <img class="icon" src={iconInstagram} alt="instagram link" />
                        <span>Instagram</span>
                    </div></a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4">
                    <div id="phone-icon-container" class="icon-container">
                        <img class="icon" src={iconPhone} alt="phone link" />
                        <span id="btn-phone" class="contact-item mr-5">Phone</span>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4">
                    <div id="email-icon-container" class="icon-container">
                        <img class="icon" src={iconEmail} alt="email link" />
                        <span id="btn-email" class="contact-item mr-5">Email</span>
                    </div>
                </div>
                
            </div>
      </section>
        </div>
    );
  }
  
  export default Contacts;

  