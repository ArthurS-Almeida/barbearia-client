import { use, useState } from "react";
import Add from "../components/add";
import Scheduled from "../components/queryItem";
import "../styles/homePage.css"

function HomePage() {

    

    // Mensagem caso não tenha agendamentos
    const msgEmpty = 'Não há agendamentos no momento...'

    

    return (
        <div id="containerHomePage">
            <div id="homePage">
                
               
            </div>
                <button id="button-add">Adicionar</button>
        </div>
    );
}

export default HomePage