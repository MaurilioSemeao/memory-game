import './style.css';

function PlayerScore(points:number = 0) {
    
    return /* html */`
        <ol class="player-score" data-points="${points}" >
            <li class="pointer" >Um</l1>
            <li class="pointer" >Dois</l1>
            <li class="pointer" >Tres</l1>
        </ol>
    `;
}

export default PlayerScore;