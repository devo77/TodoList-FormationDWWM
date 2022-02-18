import React from "react";
import ReactDOM from "react-dom";

//stylesheet
import "./functionBased/App.css";

//Router
import { HashRouter as Router } from "react-router-dom";

//Routes remplace switch pour la V6
import { Route, Routes } from "react-router-dom";

//component file
import TodoContainer from "./functionBased/components/TodoContainer";

//Importation des pages
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar"
import SinglePage from  "./functionBased/pages/SinglePage"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />

      <Routes>
        {/* Demande à charger la page TodoContainer après avoir rencontrer le "/" dans l'URL */}
        <Route path="/" element={<TodoContainer />} />
        {/* Pour aller chercher la page About */}
        <Route path="/about" element={<About />} />
        {/* Le slug correspond a ce qui se situe après about/:  /Technique utilisée pour faire un site "onePage" et utiliser des slugs différents plutôt que des pages */}
        <Route path="/about/:slug" element={<SinglePage/>}/>
      
        {/* On remplace le "/" par "*" pour rediriger quand on rencontre un lien qui n'existe pas */}
        <Route path="*" element={<NotMatch />} />
        {/* <TodoContainer /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
