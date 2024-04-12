import React from 'react'; //importar o React  é importante para que o arquivo .JSX funcione corretamente
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import Initial from '../pages/Initial';
//depois devo fazer as importações das páginas

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Initial />} />
                <Route path="/inicio" element={<Initial />} />
                <Route path="*" element={<Error />} /> {/* O (*) é um curinga que indica que qualquer rota que não foi definida acima, direcionará para o componente <Error> */}
            </Routes>
        </BrowserRouter>
    )
}