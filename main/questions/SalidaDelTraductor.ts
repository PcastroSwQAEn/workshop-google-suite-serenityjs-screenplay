import { Duration, Task, Wait } from "@serenity-js/core";
import { Ensure, equals } from "@serenity-js/assertions";
import { GoogleTranslatePage } from "../../main/ui/GoogleTranslatePage.ts";
import { isVisible} from "@serenity-js/web";

export class SalidaDelTraductor {
    public static esLaPalabra = (palabraTraducida: string) =>
        Task.where(`#actor debe visualizar la palabra ${palabraTraducida} previa traducida a idioma Ingles en el cuadro del texto`,
        Wait.upTo(Duration.ofMilliseconds(250)).until(GoogleTranslatePage.textTraductionArea(),isVisible()),
            Ensure.that(GoogleTranslatePage.textTraductionArea().text(), equals(palabraTraducida))
        )
}