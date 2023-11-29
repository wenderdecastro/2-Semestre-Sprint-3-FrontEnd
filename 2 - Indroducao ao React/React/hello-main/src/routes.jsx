import React, { useContext, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";

// Imports dos componentes - PÁGINAS
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import MeusPedidos from "./pages/MeusPedidos/MeusPedidos";
import Dados from "./pages/Dados/Dados";
import { ThemeContext } from "./Contexts/ThemeContext";


const Rotas = () => {

  // const { ThemeContext } = useContext("light")
  const [theme, setTheme] = useState("light")


  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Nav />
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route element={<ProdutoPage />} path={"/produtos"} />
          <Route element={<LoginPage />} path={"/login"} />
          <Route element={<MeusPedidos />} path={"/meuspedidos"} />
          <Route element={<Dados />} path={"/dados"} />
          <Route element={<HomePage />} path={"*"} />
        </Routes>
          
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default Rotas;
