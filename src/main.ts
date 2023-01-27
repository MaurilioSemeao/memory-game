import "./style/settings/collors.css";
import "./style/generic/reset.css";
import "./style/elements/base.css";
import CardGame from "./components/CardGame";

const $root = document.querySelector("#root");

const $htmCardGame:string = CardGame();

$root!.insertAdjacentHTML("beforeend", $htmCardGame);
