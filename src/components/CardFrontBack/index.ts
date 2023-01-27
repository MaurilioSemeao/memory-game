import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack():string {

    return /*html*/`
        <article class="card-front-back" >
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
             ${CardGame("javascript", "logo do java Script")}
            </div>
        </article>
    `
}

export default CardFrontBack;