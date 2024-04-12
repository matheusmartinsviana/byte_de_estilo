import React from 'react';

export default function ProductDetails({ location }) {
    const { isZoomed } = location.state;

    return (
        <div>
            {isZoomed && (
                <div className="zoomed-card">
                    {/* Conteúdo da página de detalhes do produto */}
                </div>
            )}
            {/* Outro conteúdo da página de detalhes do produto */}
        </div>
    );
}
