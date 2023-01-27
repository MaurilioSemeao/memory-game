import "./style.css";
import CardGame from "../components/CardGame";

function BoradGame(amauntCards:number): string {
    const $htmCardGame:string = CardGame()
    const $htmlContent: string = $htmCardGame.repeat(amauntCards);
    
    return `
    <section class="board-game">
        ${$htmlContent}
    </section>`;
}

export default BoradGame;