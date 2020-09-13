import React from 'react';


function ProductCard(props) {
    return (
        <div>
         <div class="row">
            <div class=" card col-lg-5 col-md-6 product-card">
                <img class="card-top-img product-img" src={props.imgUrl} alt="The regular vase" />
                <h3 class="card-title product-name">{props.name}</h3>
                <div class="card-body">
                    <p class="usability"><strong>Usability:</strong> {props.usability} </p>
                    <p class="volume"><strong>Volume:</strong> {props.volume}</p>
                </div>
                <p class="card-footer price">{props.price}</p>
            </div>
            </div>
        </div>
    );
  }
  
  export default ProductCard;
  

