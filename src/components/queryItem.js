import '../styles/queryItem.css'
// Agendados
function Scheduled({ nome, hora, dia }) { // PARAMETROS PARA NOME, HORA, DIA
    return (
        <div id='baseScheduled'>
            <div id="container-baseDados">
                <span>{dia}25/12/20</span>
                <h1>{nome}Nome</h1>
                <span>{hora}h</span>
            </div>
            <div id="base-buttons">
                <button className='buttonComponent' id='buttonReagendar'>Reagendar</button>
                <button className='buttonComponent' id='buttonConfirmar'>Confirmar</button>
                <button className='buttonComponent' id='buttonCancel'>Cancelar</button>
            </div>
        </div>
    );
}

export default Scheduled;