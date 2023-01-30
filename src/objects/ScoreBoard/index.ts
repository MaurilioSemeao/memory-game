import "./style.css"
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Poayer1")}
            ${VsPlayer()}
            ${PlayerName("Player2")}
        </header> 
    `
}

export default ScoreBoard;