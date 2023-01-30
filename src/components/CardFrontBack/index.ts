import './style.css';
import CardGame from '../CardGame';

declare global {
    interface Window {
        handleClick: any;
        cardFrontBack: any;
    }
}

interface DOMEvent<T extends EventTarget> extends Event {
    readonly target: T;
}

function CardFrontBack(icon:string, altIcon:string): string {
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event: Event) => {
        const { target } = event as DOMEvent<HTMLInputElement>;
        const $cardFrontBack = target.closest('.card-front-back');
        $cardFrontBack!.classList.toggle('-active');
    };

    return /*html*/ `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)" >
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
             ${CardGame(icon, altIcon)}
            </div>
        </article>
    `;
}

export default CardFrontBack;
