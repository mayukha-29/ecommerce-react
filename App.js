import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
import headphones from './images/headphones.jpg';
import watch from './images/smartwatch.jpg';
import laptop from './images/laptop.jpg';
import phone from './images/phone.jpg';
import speaker from './images/bluetoothspeaker.jpg';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: headphones,
      description: "High-quality sound with noise cancellation"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: watch,
      description: "Track your fitness and notifications"
    },
    {
      id: 3,
      name: "Laptop",
      price: 55999,
      image: laptop,
      description: "Powerful performance for work and gaming"
    },
    {
      id: 4,
      name: "Smartphone",
      price: 24999,
      image: phone,
      description: "Latest smartphone with great camera"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 1499,
      image: speaker,
      description: "Portable speaker with deep bass"
    }
  ]);

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
