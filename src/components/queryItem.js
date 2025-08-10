import '../styles/queryItem.css'
// Agendados
function Scheduled({nome,hora,dia}){ // PARAMETROS PARA NOME, HORA, DIA
    return(
        <div id='baseScheduled'>
            <div id="container-baseDados">
                <h1>{nome}</h1>
                <div><span>{hora}</span><span>{dia}</span></div>
            </div>
            <div id="base-buttons">
                <button>Confirmar</button>
                <button>Reagendar</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Scheduled;