import React from 'react';
import testimonials from '../assets/images/testimonials.jpg';

function Testimonials() {
    return (
        <div>
            <section id="testimonials">
                <h2>Testimonials</h2>
                <div class="container testimonial-container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3">
                        <img class="testimonial-photo" src={testimonials} alt="testimonial Soma Panta" />
                        </div>
                        <div class="col-lg-9 col-md-9">
                        <p class="testimonial-text"> "Not neglected anymore, our ancient ayurvedic medicine is back with a bang. Kasturi ghar is ready to serve you. Don't wait too long, order now and feel the benefits!" </p>
                        <span id="testimonial-person1" class="testimonial-person"><strong>- Soma Pant</strong></span><br />
                        <address id="testimonial-person-designation1" class="testimonial-person-designation">Woman Entrepreneur and French tutor<br /> 
                        Director of School <br />(Shridiwa International School, Bishalnagar, Kathmandu)</address>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default Testimonials;
  