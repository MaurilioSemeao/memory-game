import "./style/settings/collors.css";
import "./style/generic/reset.css";
import "./style/elements/base.css";
import BoradGame from "./objects/BoradGame";

const $root = document.querySelector("#root");
const $htmBoarGame = BoradGame(6)

$root!.insertAdjacentHTML("beforeend", $htmBoarGame);
