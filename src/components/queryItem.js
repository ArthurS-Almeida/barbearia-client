import '../styles/queryItem.css'

function Scheduled(){ // Agendados
    return(
        <div id='baseScheduled'>
            <div>
                <div>Nome</div>
                <div><span>HORA</span><span>dia</span></div>
            </div>
            <div>
                <button>Confirmar</button>
                <button>Reagendar</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}

export default Scheduled;