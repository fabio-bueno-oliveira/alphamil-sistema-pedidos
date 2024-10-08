import React from 'react'
import {
    Routes,
    Route,
    BrowserRouter,
    useLocation,
    Navigate,
    Outlet
  } from 'react-router-dom';
// import { useSelector } from 'react-redux'
// import NotFound from './pages/NotFound'
import Login from './pages/Login';
import Home from './pages/Home';
import Clientes from './pages/Clientes';
import Cliente from './pages/Cliente';
import Pedidos from './pages/Pedidos';
import PedidoDetalhe from './pages/Pedidos/pedido';

function AppRoutes () {

    // const loggedIn = useSelector(state => state.authentication.loggedIn)
    const loggedIn = false

    function RequireAuth () {
        let location = useLocation();

        if (!loggedIn) {
          return <Navigate to="/" state={{ from: location }} />;
        }

        return <Outlet />;
    }
  
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/cliente/:id" element={<Cliente />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/pedido/:id" element={<PedidoDetalhe />} />
                {/* <Route element={<RequireAuth />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes