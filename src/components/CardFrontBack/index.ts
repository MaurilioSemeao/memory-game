import CardGame from "../CardGame";

function CardFrontBack():string {

    return /*html*/`
        <article class="card-front-back" >
            ${CardGame()}
            ${CardGame("javascript", "logo do java Script")}
        </article>
    `
}

export default CardFrontBack;