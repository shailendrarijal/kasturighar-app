import React from 'react';

const yearNow = new Date().getFullYear();

function Footer() {
    return (
        <div>
           <footer id="footer">
                <div class="column">
                <p>Kasturi Ghar &copy; {yearNow}</p>
                        <p id="design">Designed By: Aasha Design Studio</p>
                </div>
             </footer>
        </div>
    );
  }
  
  export default Footer;
  