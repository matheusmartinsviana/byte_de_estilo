import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ErrorPage.css';

export default function Error() {
    return (
        <div className="error-container">
            <div className="error-content">
                
                <h1 className="error-title">Erro 404</h1>
                <p className="error-message">Oops! Parece que você se perdeu...</p>
                <p className="error-message">A página que você está procurando não existe.</p>
                <Link to="/" className="error-link">Voltar para a página inicial</Link>
            </div>
        </div>
    );
}
