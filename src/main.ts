import "./style/settings/collors.css";
import "./style/generic/reset.css";
import "./style/elements/base.css";
import BoradGame from "./objects/BoardGame";
import ScoreBoard from "./objects/ScoreBoard";


const $root = document.querySelector("#root");


$root!.insertAdjacentHTML(
    "beforeend",
    `   
        ${ScoreBoard()}
        ${BoradGame(6)}
    `);
