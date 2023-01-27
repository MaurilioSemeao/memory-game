import "./style/settings/collors.css";
import "./style/generic/reset.css";
import "./style/elements/base.css";
import BoradGame from "./objects/BoradGame";
import PlayerName from "./components/PlayerName";

const $root = document.querySelector("#root");


$root!.insertAdjacentHTML(
    "beforeend",
    `   
    
        ${PlayerName("Player1")}
        ${PlayerName("Player2")}
        ${BoradGame(6)}
    `);
