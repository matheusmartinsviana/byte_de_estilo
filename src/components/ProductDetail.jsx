import React from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles/ProductDetail.css'; // Importe o arquivo de estilos CSS
import products from '../data/ProductsData';
import PixIcon from '@mui/icons-material/Pix';

export default function ProductCardDetail() {
    const { id } = useParams(); // Pega os parâmetros que vieram na URL
    const product = products.find(product => product.id === id); // Procura o produto com o ID que veio na URL

    if (!product) {
        return <div className='product-not-found'>Produto não encontrado</div>; // Trata o caso do produto não ser encontrado
    }

    return (
        <div className='product-details'>
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
                <p className='product-quantity'>Quantidade: {product.quantity}</p>
                <p className='product-id'>ID: {product.id}</p>
            </div>
        </div>
    );
}
