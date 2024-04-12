import PixIcon from '@mui/icons-material/Pix';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SizeButton from '../components/SizeButton'; // Corrected import statement
import '../components/styles/ProductDetail.css';
import products from '../data/ProductsData';
import AddProduct from './AddProduct';

export default function ProductCardDetail() {
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    const [cart, setCart] = useState([]);

    if (!product) {
        return <div className='product-not-found'>Produto não encontrado</div>;
    }

    const addToCart = () => {
        const newItem = {
            id: product.id,
            title: product.title,
            price: product.price
        };
        setCart([...cart, newItem]);
    };

    return (
        <div className='container'>
            <div className='product-details py-5'>
                <div className='aside-image'>
                    <img className='product-image' src={product.imageSrc} alt={product.title} />
                </div>
                <div className='product-info'>
                    <h1 className='product-title display-5'>{product.title}</h1>
                    <p className='product-description'>{product.description}</p>
                    <div className='payment'>
                        <PixIcon className='product-pix-icon' style={{
                            fontSize: '2.5rem',
                            color: '#00b894',
                            cursor: 'pointer',
                            paddingRight: '10px'
                        }} />
                        <p className='product-price'>R$ {product.price}</p>
                    </div>

                    {(product.category === 'Camisas' || product.category === 'Jaquetas') && <SizeButton />}
                    <p className='product-category'>Categoria: {product.category}</p>
                    <p className='product-id'>ID: {product.id}</p>
                    <AddProduct addToCart={addToCart} productName={product.title} />
                </div>
            </div>
        </div>
    );
}
