import CardGame from "../CardGame";

function CardFrontBack():string {

    return /*html*/`
        <article class="card-front-back" >
            ${CardGame()}
            ${CardGame()}
        </article>
    `
}

export default CardFrontBack;