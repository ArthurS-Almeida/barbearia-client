import '../styles/add.css'

function Add() {
    return (
        <div id="baseAdd">
            <picture title="Sair"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" /></svg></picture>
            <div id='container-baseAdd'>
                <h1>Agende o corte:</h1>
                <div id='container-form'>
                    <form action="" method="POST" id="form-add">
                        <input type="text" name="nome" id="form-add-nome" placeholder='Nome do cliente' />

                        <div id='form-add-containerDataHora'>
                            <div id='containerDate'>
                                <input type="date" name="data" id="date" />
                            </div>
                            <div id="containerHour">
                                <input type="time" name="data" />
                            </div>
                        </div>
                        <input type='submit' id='form-add-submit' title='Enviar' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;