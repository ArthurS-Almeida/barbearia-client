import { useState } from "react";
import Add from "../components/add";
import Scheduled from "../components/queryItem";
import "../styles/homePage.css"

function HomePage() {



    // Mensagem caso não tenha agendamentos
    const msgEmpty = 'Não há agendamentos no momento...'

    // Ativando opção de Add
    const [AddClient, setAddClient] = useState(null);

    const abrirAdd = () => {
        if (AddClient == null) {
            setAddClient(Add);
        } 
    }

    // Array para mostrar agendamentos marcados
    const listAppointments = [];
    return (
        <div id="containerHomePage">

            <header>
                <span>Barbearia Premium</span>
                <div>
                    <span>Admin</span>{/* RECEBER DADOS SOBRE NOME*/}
                </div>
            </header>

            <main id="homePage">
                
                <div id="container-agendados">

                    

                </div>
                <div>
                    <button id="button-add">Adicionar</button>
                    <button> Inativar data</button>
                </div>
                {AddClient}
            </main>
            <footer>
                <p>DESENVOLVIDO POR ARTHUR2SANTOS</p>
            </footer>
        </div>
    );
}

export default HomePage