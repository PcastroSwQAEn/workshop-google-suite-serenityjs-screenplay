import { Task, Wait } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { GoogleTranslatePage } from "../../main/ui/GoogleTranslatePage.ts";

export class SeleccionarIdioma {
    public static Ingles = () =>
        Task.where(`#actor dará click en el botón \"Ingles\" para traducir la palabra introducida`,
            Click.on(GoogleTranslatePage.buttonEnglishTraducction())
            
        )
}