import React from 'react';
import collage from '../assets/images/collage.png';

function About() {
    return (
        <div>
            <section id="about">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">  
                    <img class="about-photo" src={collage} alt="working process" /> 
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12">                
                    <h2>Who are We?</h2>
                    <p>Kasturi Ghar is an agricultural business house which is focused on promoting ethnic products. Our motto is "One Community One Product". Our Ghar is mainly inclined towards ethnomedicine and helping the local communities to know the essence of their products.</p>
                </div>
                </div>
            </section>
        </div>
    );
  }
  
  export default About;
  