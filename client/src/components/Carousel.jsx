import React from 'react';
import scroll1 from '../assets/images/scroll1.png';
import scroll2 from '../assets/images/scroll2.png';
import scroll3 from '../assets/images/scroll3.png';
import scroll4 from '../assets/images/scroll4.png';

function Carousel() {
    return (
        <div>
        <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="carousel-photo" src={scroll1} alt="Vijaysar tumblers" />
                    <p>'Nature comes to you when you care for yourself'</p><strong>-Kasturi Ghar </strong>
                </div>

                <div class="carousel-item ">
                    <img class="carousel-photo" src={scroll2} alt="Vijaysar tree" />
                    <p>'Do you wish to be in symmetry with the nature? Join Us!'</p><strong>-Vijaysar tree</strong>
                </div>

                <div class="carousel-item ">
                    <img class="carousel-photo" src={scroll3} alt="Vijaysar tumblers" />
                    <p>'Kasturi Ghar Presents you the kingly wooden products:'</p><strong>The elixir of Farwest </strong>
                </div>

                <div class="carousel-item ">
                    <img class="carousel-photo" src={scroll4} alt="Color change to blue" />
                    <p>'Vijaysar wood contains important metabolites which change the color of the water into bluish brown'</p><strong>Drink with your favourite flavor </strong>
                </div>
                
            </div>
            <a class="carousel-control-prev carousel-button" href="#header-carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next carousel-button" href="#header-carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>    
        </div>
    );
  }
  
  export default Carousel;
  