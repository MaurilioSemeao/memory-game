import "./style.css" 

function PlayerName(name: string): string {
 
    return /*html*/ `
    <p class="player-name">
        ${name}
    </p>
    `
}

export default PlayerName;