import React from 'react';
import products from '../products';
import ProductCard from './ProductCard';


function Products() {
    return (
        <div>
            <section id="ourProducts" class="container">
                <h2 id="product-heading">Our Products</h2>
                   
                        {products.map(productItem => (
                            <ProductCard 
                                key={productItem.key}
                                name={productItem.name}
                                imgUrl={productItem.imgUrl}
                                volume={productItem.volume}
                                usability={productItem.usability}
                                price={productItem.price}
                            />
                        ))}
            </section>
        </div>
    );
  }
  
  export default Products;
  

