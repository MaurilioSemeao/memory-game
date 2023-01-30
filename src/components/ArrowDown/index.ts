import './style.css';

function ArrowDown(currentPlayer:number = 1):string {
    
    return /* html */`
        <img class="arrow-down"
            data-currentPlayer=${currentPlayer}
            src="../../images/IconArrowDown.png" 
            alt=" icone de uma seta para baixo" >    
    `;

}

export default ArrowDown;