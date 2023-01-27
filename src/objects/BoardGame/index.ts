import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";

function BoradGame(amauntCards:number): string {
    const $htmCardFrontBack: string = CardFrontBack();
    const $htmlContent: string = $htmCardFrontBack.repeat(amauntCards);
    
    return `
    <section class="board-game">
        ${$htmlContent}
    </section>`;
}

export default BoradGame;