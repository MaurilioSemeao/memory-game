import './style.css';

function VsPlayer(content: string= "vs") {
    return /* html */`
        <span class="vs-player" >${content}</span>
    `
}

export default VsPlayer;