import React from 'react';
import '../css/Card1Viagens.css'

const ProductCard = ({ imageUrl, altText, title, description, price }) => (
  <section className="card">
    <div className="product-image">
      <img src={imageUrl} alt={altText} draggable="false" />
    </div>
    <div className="product-info">
      <h2>VOOS</h2>
      <p>{description}</p>
      <div className="price">{price}</div>
    </div>
    <div className="btn">
      <button className="buy-btn">Buy Now</button>
      <button className="fav">
        <svg
          className="svg"
          id="i-star"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </svg>
      </button>
    </div>
  </section>
);

const App = () => (
  <main className="container">
    <ProductCard
      imageUrl="https://i.ibb.co/cNWqxGx/red.png"
      altText="OFF-white Red Edition"
      title="Nike X OFF-white"
      description="The 10: Air Jordan 1 off-white - Chicago"
      price="$999"
    />
    <ProductCard
      imageUrl="https://i.ibb.co/0JKpmgd/blue.png"
      altText="OFF-white Blue Edition"
      title="Nike X OFF-white"
      description='Air Jordan 1 Retro High "Off-White - UNC" sneakers'
      price="$1599"
    />
  </main>
);

export default App;
