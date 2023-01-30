import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./Data";

function BoradGame(amauntCards:number = 0): string {

    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = $htmlCardsList.join('');

    // const $htmCardFrontBack: string = CardFrontBack(cards[0].icon,cards[0].altIcon);
    // const $htmlContent: string = $htmCardFrontBack.repeat(amauntCards);

    return `
    <section class="board-game">
        ${$htmlCards}
    </section>`;
}

export default BoradGame;