import "./style.css"
import PlayerName from "../../components/PlayerName";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Poayer1")}
            ${PlayerName("Player2")}
        </header> 
    `
}

export default ScoreBoard;