import React from 'react';
import Carousel from './Carousel';

function Header() {
    return (
     
        <section id="header">
            <nav id="navbar" class="navbar fixed-top navbar-expand-md">
                <a class="navbar-brand" href="#carousel"> Kasturi Ghar </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">&lt;</span>
                    </button>    
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#ourProducts">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About Us</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#contactUs">Contact</a>
                    </li>
                </ul>
            </div>
            </nav>
    
            <Carousel />
                
        </section>
    );
  }
  
  export default Header;
  