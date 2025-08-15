import { useEffect, useState } from "react";
import Add from "../components/add";
import Scheduled from "../components/queryItem";
import "../styles/homePage.css"

function HomePage() {
    
    // Ativando opção de Add
    const [AddClient, setAddClient] = useState(null);

    const abrirAdd = () => {
        if (AddClient == null) {
            setAddClient(Add);
        }
    }

    // Array para mostrar agendamentos marcados
    const [Appointments, setAppointments] = useState([]);

    // Solicitar informações para o banco
    useEffect(() => {
        fetch("") // ROTA
        .then((res) => res.json()) //Retorno do back
            .then((data) => {

                if(data.length === 0 ){
                    setAppointments(<p key="vazio">Não há agendamentos no momento.</p>)
                } else{

                    const newCompApoint = data.map((a) => ( // Retorna informações solicitadas

                        <Scheduled key={a.id}
                        client={a.client}
                        hours={a.hours}
                        day={a.day} />
                    ));
                    setAppointments(newCompApoint); // Salva informação na variavel Appointments
                }
            })
            .catch((err)=>console.error(err)); // Se der erro, apresente no console o erro
    },[]);

    return (
        <div id="containerHomePage">
            {AddClient}
            <header>
                <span>Barbearia Premium</span>
                <div>
                    <span>Admin</span>{/* RECEBER DADOS SOBRE NOME*/}
                </div>
            </header>

            <main id="homePage">

                <div id="container-agendados">
                    {Appointments}
                </div>
                <div>
                    <button id="button-add" onClick={abrirAdd}>Adicionar</button>
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