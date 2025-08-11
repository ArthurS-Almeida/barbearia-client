import { useState } from "react";
import Add from "../components/add";
import Scheduled from "../components/queryItem";
import "../styles/homePage.css"

function HomePage() {
    const msgEmpty = 'Não há agendamentos no momento...'
    const [stateMsg,setStateMsg] = useState(Add)
    return (
        <div id="containerHomePage">
            <div id="homePage">
                {msgEmpty}
                {stateMsg}
                
            </div>
                <button id="button-add">Adicionar</button>
        </div>
    );
}

export default HomePage