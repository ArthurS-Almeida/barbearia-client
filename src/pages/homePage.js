import { useState } from "react";
import Add from "../components/add";
import Scheduled from "../components/queryItem";
import "../styles/homePage.css"

function HomePage() {

    

    // Mensagem caso não tenha agendamentos
    const msgEmpty = 'Não há agendamentos no momento...'

    // Ativando opção de Add
    const [AddClient,setAddClient] = useState(null)
    
    const abrirAdd = () =>{
        if (AddClient == null){
            setAddClient(Add)
        }
    }
    return (
        <div id="containerHomePage">
            <div id="homePage">
                
               
            </div>
                <button id="button-add" onClick={abrirAdd}>Adicionar</button>
                {AddClient}
        </div>
    );
}

export default HomePage