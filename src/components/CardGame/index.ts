import './style.css'

function CardGame(icon:string = "alura-pixel", alt:string = "logo da alura"):string {
    
    return /*html*/`
        <article class="card-game" >
            <img src="../../../images/${icon}.png" alt="${alt}"/>
        </article>

    `
}

export default CardGame;