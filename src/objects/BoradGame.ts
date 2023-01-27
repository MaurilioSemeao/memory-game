import CardGame from "../components/CardGame";

function BoradGame(amauntCards:number): string {
    const $htmCardGame:string = CardGame()
    const $htmBoarGame: string = $htmCardGame.repeat(amauntCards);
    
    return $htmBoarGame;
}

export default BoradGame;