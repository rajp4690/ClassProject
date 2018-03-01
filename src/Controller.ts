import { Alerts } from "./Model";
import * as $ from "jquery";

const m = new Alerts();

m.Messages = ['Syntax Sugar'];

export function DisplayAlerts() {
    $("#alerts").append(m.Messages.join());
}