import { Injectable } from '@angular/core';
import { GetPromiseService } from './get-promise.service';
import { FieldsLocalStoreService } from './fields-local-store.service';


@Injectable()
export class GetCardsService {

    constructor(private promiseService: GetPromiseService, private fieldsStore: FieldsLocalStoreService) { }

    public cards: string[] = [];
    clearCards() {
        this.cards.length = 0;
    }

    getAllCards() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpJun)
        .then(response => this.cards.push(this.fieldsStore.getCSharpJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCSharpMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpSenior)
        .then(response => this.cards.push(this.fieldsStore.getCSharpSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusJun)
        .then(response => this.cards.push(this.fieldsStore.getCPlusJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCPlusMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusSenior)
        .then(response => this.cards.push(this.fieldsStore.getCPlusSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLJun)
        .then(response => this.cards.push(this.fieldsStore.getSQLJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCPlusMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLSenior)
        .then(response => this.cards.push(this.fieldsStore.getSQLSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSJun)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSSenior)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonJun)
        .then(response => this.cards.push(this.fieldsStore.getPythonJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonMiddle)
        .then(response => this.cards.push(this.fieldsStore.getPythonMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonSenior)
        .then(response => this.cards.push(this.fieldsStore.getPythonSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidJun)
        .then(response => this.cards.push(this.fieldsStore.getAndroidJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidMiddle)
        .then(response => this.cards.push(this.fieldsStore.getAndroidMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidSenior)
        .then(response => this.cards.push(this.fieldsStore.getAndroidSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSJun)
        .then(response => this.cards.push(this.fieldsStore.getIOSJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getIOSMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSSenior)
        .then(response => this.cards.push(this.fieldsStore.getIOSSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getBaseJun() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLJun)
        .then(response => this.cards.push(this.fieldsStore.getSQLJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getBaseMiddle() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLMiddle)
        .then(response => this.cards.push(this.fieldsStore.getSQLMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getBaseSenior() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLSenior)
        .then(response => this.cards.push(this.fieldsStore.getSQLSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getWebJun() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSJun)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getWebMiddle() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getWebSenior() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSSenior)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getProgrammerLangJun() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpJun)
        .then(response => this.cards.push(this.fieldsStore.getCSharpJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusJun)
        .then(response => this.cards.push(this.fieldsStore.getCPlusJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonJun)
        .then(response => this.cards.push(this.fieldsStore.getPythonJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getProgrammerLangMiddle() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCSharpMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCPlusMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonMiddle)
        .then(response => this.cards.push(this.fieldsStore.getPythonMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getProgrammerLangSenior() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpSenior)
        .then(response => this.cards.push(this.fieldsStore.getCSharpSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusSenior)
        .then(response => this.cards.push(this.fieldsStore.getCPlusSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonSenior)
        .then(response => this.cards.push(this.fieldsStore.getPythonSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMobileDevJun() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidJun)
        .then(response => this.cards.push(this.fieldsStore.getAndroidJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSJun)
        .then(response => this.cards.push(this.fieldsStore.getIOSJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMobileDevMiddle() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidMiddle)
        .then(response => this.cards.push(this.fieldsStore.getAndroidMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getIOSMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMobileDevSenior() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidSenior)
        .then(response => this.cards.push(this.fieldsStore.getAndroidSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSSenior)
        .then(response => this.cards.push(this.fieldsStore.getIOSSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getAllJun() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpJun)
        .then(response => this.cards.push(this.fieldsStore.getCSharpJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusJun)
        .then(response => this.cards.push(this.fieldsStore.getCPlusJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLJun)
        .then(response => this.cards.push(this.fieldsStore.getSQLJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSJun)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonJun)
        .then(response => this.cards.push(this.fieldsStore.getPythonJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidJun)
        .then(response => this.cards.push(this.fieldsStore.getAndroidJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSJun)
        .then(response => this.cards.push(this.fieldsStore.getIOSJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getAllMiddle() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCSharpMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCPlusMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLMiddle)
        .then(response => this.cards.push(this.fieldsStore.getSQLMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonMiddle)
        .then(response => this.cards.push(this.fieldsStore.getPythonMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidMiddle)
        .then(response => this.cards.push(this.fieldsStore.getAndroidMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getIOSMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getAllSenior() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpSenior)
        .then(response => this.cards.push(this.fieldsStore.getCSharpSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusSenior)
        .then(response => this.cards.push(this.fieldsStore.getCPlusSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLSenior)
        .then(response => this.cards.push(this.fieldsStore.getSQLSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSSenior)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonSenior)
        .then(response => this.cards.push(this.fieldsStore.getPythonSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidSenior)
        .then(response => this.cards.push(this.fieldsStore.getAndroidSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSSenior)
        .then(response => this.cards.push(this.fieldsStore.getIOSSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getAllBase() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLJun)
        .then(response => this.cards.push(this.fieldsStore.getSQLJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLMiddle)
        .then(response => this.cards.push(this.fieldsStore.getSQLMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLSenior)
        .then(response => this.cards.push(this.fieldsStore.getSQLSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getAllWeb() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSJun)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSSenior)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getAllProgrammingLang() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpJun)
        .then(response => this.cards.push(this.fieldsStore.getCSharpJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCSharpMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpSenior)
        .then(response => this.cards.push(this.fieldsStore.getCSharpSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusJun)
        .then(response => this.cards.push(this.fieldsStore.getCPlusJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCPlusMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusSenior)
        .then(response => this.cards.push(this.fieldsStore.getCPlusSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonJun)
        .then(response => this.cards.push(this.fieldsStore.getPythonJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonMiddle)
        .then(response => this.cards.push(this.fieldsStore.getPythonMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonSenior)
        .then(response => this.cards.push(this.fieldsStore.getPythonSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getAllMobileDev() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidJun)
        .then(response => this.cards.push(this.fieldsStore.getAndroidJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidMiddle)
        .then(response => this.cards.push(this.fieldsStore.getAndroidMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidSenior)
        .then(response => this.cards.push(this.fieldsStore.getAndroidSenior))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSJun)
        .then(response => this.cards.push(this.fieldsStore.getIOSJun))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getIOSMiddle))
        .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSSenior)
        .then(response => this.cards.push(this.fieldsStore.getIOSSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunJavaCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleJavaCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorJavaCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunCSharpCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpJun)
        .then(response => this.cards.push(this.fieldsStore.getCSharpJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleCSharpCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCSharpMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorCSharpCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpSenior)
        .then(response => this.cards.push(this.fieldsStore.getCSharpSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunJavaScriptCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJun)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleJavaScriptCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddle)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorJavaScriptCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSenior)
        .then(response => this.cards.push(this.fieldsStore.getJavaScriptSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunCPlusCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusJun)
        .then(response => this.cards.push(this.fieldsStore.getCPlusJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleCPlusCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusMiddle)
        .then(response => this.cards.push(this.fieldsStore.getCPlusMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorCPlusCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusSenior)
        .then(response => this.cards.push(this.fieldsStore.getCPlusSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunSQLCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLJun)
        .then(response => this.cards.push(this.fieldsStore.getSQLJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleSQLCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLMiddle)
        .then(response => this.cards.push(this.fieldsStore.getSQLMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorSQLCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLSenior)
        .then(response => this.cards.push(this.fieldsStore.getSQLSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunHTMLCSSCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSJun)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleHTMLCSSCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorHTMLCSSCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSSenior)
        .then(response => this.cards.push(this.fieldsStore.getHTMLCSSSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunPythonCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonJun)
        .then(response => this.cards.push(this.fieldsStore.getPythonJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddlePythonCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonMiddle)
        .then(response => this.cards.push(this.fieldsStore.getPythonMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorPythonCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonSenior)
        .then(response => this.cards.push(this.fieldsStore.getPythonSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunAndroidCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidJun)
        .then(response => this.cards.push(this.fieldsStore.getAndroidJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleAndroidCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidMiddle)
        .then(response => this.cards.push(this.fieldsStore.getAndroidMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorAndroidCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidSenior)
        .then(response => this.cards.push(this.fieldsStore.getAndroidSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
    getJunIOSCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSJun)
        .then(response => this.cards.push(this.fieldsStore.getIOSJun))
        .catch(error => new Error(error));
        return this.cards;
    }
    getMiddleIOSCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSMiddle)
        .then(response => this.cards.push(this.fieldsStore.getIOSMiddle))
        .catch(error => new Error(error));
        return this.cards;
    }
    getSeniorIOSCard() {
        this.clearCards();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSSenior)
        .then(response => this.cards.push(this.fieldsStore.getIOSSenior))
        .catch(error => new Error(error));
        return this.cards;
    }
}
