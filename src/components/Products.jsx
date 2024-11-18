import React from "react";

const Products = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Welcome to Our Shop!</h1>
        <p>Your one-stop destination for the latest products.</p>
        <a href="#products" className="hero-btn">
          Shop Now
        </a>
      </header>
      <main className="main-content">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 1"
            />
            <h3>Product 1</h3>
            <p>$29.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 2"
            />
            <h3>Product 2</h3>
            <p>$49.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 3"
            />
            <h3>Product 3</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 4"
            />
            <h3>Product 4</h3>
            <p>$39.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 5"
            />
            <h3>Product 5</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 6"
            />
            <h3>Product 6</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 7"
            />
            <h3>Product 7</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 8"
            />
            <h3>Product 8</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 9"
            />
            <h3>Product 9</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 10"
            />
            <h3>Product 10</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 11"
            />
            <h3>Product 11</h3>
            <p>$19.99</p>
          </div>
          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
              alt="Product 12"
            />
            <h3>Product 12</h3>
            <p>$19.99</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
