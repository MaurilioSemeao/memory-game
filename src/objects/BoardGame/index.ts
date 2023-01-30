import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./Data";


function BoradGame(amauntCards: number = 0): string {
    const  flipAdnHidenCards = (cardActive: NodeListOf<Element>) => {
        cardActive!.forEach((card)=> card.classList.remove('-active'));
    }

    const swapPlayer = () => {
        const $arrowDown = document.querySelector('.arrow-down');
        const currentPlayer = $arrowDown?.getAttribute('data-currentPlayer')
        $arrowDown?.setAttribute('data-currentPlayer',
        currentPlayer === "1" ? "2" : "1");
    }

    window.boardGame  = {}
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game'); 
        const $cardActive = $boardGame?.querySelectorAll('.card-front-back.-active');
        
        if ($cardActive?.length === 2) {
            setTimeout(() => {
                flipAdnHidenCards($cardActive);
                swapPlayer() 
            }, 1000);

        }
    }
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = $htmlCardsList.join('');

    // const $htmCardFrontBack: string = CardFrontBack(cards[0].icon,cards[0].altIcon);
    // const $htmlContent: string = $htmCardFrontBack.repeat(amauntCards);

    return /* html */ `
    <section class="board-game" 
    onClick="boardGame.handleClick()">
        ${$htmlCards}
    </section>`;
}

export default BoradGame;