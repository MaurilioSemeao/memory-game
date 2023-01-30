import "./style.css"
import PlayerName from "../../components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Poayer1")}
            ${PlayerScore()}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName("Player2")}
        </header> 
    `;
}

export default ScoreBoard;