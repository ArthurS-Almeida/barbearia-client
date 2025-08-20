import { useEffect, useState } from "react";
import Add from "../components/add";
import Scheduled from "../components/queryItem";
import "../styles/homePage.css"

function HomePage() {

    // Definindo variavel que irá receber nome do barbeiro
    let nameBarbeiro = "Nome"

    // ABRIR E FECHAR COMPONENTE
    const [AddClient, setAddClient] = useState(false);

    const abrirAdd = () => {
        setAddClient(!AddClient)
    }

    // Array para mostrar agendamentos marcados
    const [Appointments, setAppointments] = useState([]);

    // Solicitar informações para o banco
    useEffect(() => {
        fetch("") // ROTA
            .then((res) => res.json()) //Retorno do back
            .then((data) => setAppointments(data))
            .catch(() => console.error([])); // Se der erro, apresente no console o erro
    }, []);

    return (
        <div id="containerHomePage">
            {AddClient}
            <header id="header">
                <div>
                    <span className="textHeader">Barbeiro {nameBarbeiro}</span>{/* RECEBER DADOS SOBRE NOME*/} <img src="" />
                </div>
            </header>

            <main id="homePage">

                <div id="container-agendados">
                    <div id="agendados">
                        {
                            Appointments.length === 0 ? (
                                <div id="containerMsgEmpty">
                                    <p id="msgEmpty">Não há agendamentos no momento...</p>
                                </div>
                            ) : (
                                Appointments.map(a => <Scheduled nome={a.nome} dia={a.dia} hora={a.hora} />)
                            )
                        }
                        <Scheduled />

                    </div>
                </div>
                <div id="container-buttonHomerPage">
                    <button className="button-HomePage" id="button-add" onClick={abrirAdd}>Adicionar</button>
                    <button className="button-HomePage" id="button-inativo"> Inativar data</button>
                </div>
                {AddClient && <Add onClose={abrirAdd} />}
            </main>
            <footer>
                <p>DESENVOLVIDO POR ARTHURVCODE</p>
            </footer>
        </div>
    );
}

export default HomePage