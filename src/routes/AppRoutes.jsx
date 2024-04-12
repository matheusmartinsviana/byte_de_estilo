import React from 'react'; //importar o React  é importante para que o arquivo .JSX funcione corretamente
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import Initial from '../pages/Initial';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';
import Body from '../layouts/Body';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />} > {/* O <Body> é o componente que contém o cabeçalho e o rodapé (ele sempre vai aparecer em todas rotas) */}
                    <Route path="/inicio" element={<Initial />} />
                    <Route path="*" element={<Error />} /> {/* O (*) é um curinga que indica que qualquer rota que não foi definida acima, direcionará para o componente <Error> */}
                    <Route path="/produtos" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/contato" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}