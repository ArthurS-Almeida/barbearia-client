import '../styles/queryItem.css'
// Agendados
function Scheduled({nome,hora,dia}){ // PARAMETROS PARA NOME, HORA, DIA
    return(
        <div id='baseScheduled'>
            <div id="container-baseDados">
                <h1>{nome}</h1>
                <div id='container-dataHora'><span>{hora}</span><span>{dia}</span></div>
            </div>
            <div id="base-buttons">
                <button className='buttonComponent' id='buttonConfirmar'>Confirmar</button>
                <button className='buttonComponent' id='buttonReagendar'>Reagendar</button>
                <button className='buttonComponent' id='buttonCancel'>Cancelar</button>
            </div>
        </div>
    );
}

export default Scheduled;