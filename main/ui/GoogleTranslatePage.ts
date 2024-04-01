import { By, PageElement } from '@serenity-js/web';

export const GoogleTranslatePage = {
    textArea: () =>
        PageElement.located(By.xpath("//textarea")).describedAs('text area texto original'),
    textTraductionArea: () =>
        PageElement.located(By.xpath("//span[@class='ryNqvb']").describedAs('Ara de Texto  Traducido')),
    buttonEnglishTraducction: () => 
        PageElement.located(By.xpath("//button[@id='i16']")).describedAs('Botón que traduce texto a Ingles.')
}
