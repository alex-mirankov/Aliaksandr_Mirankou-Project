
import { Injectable } from '@angular/core';

function getPromiseLocalStorage(itemLocalStorage) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(itemLocalStorage);
        }, 5000);
    }).then(() => console.log('successful')).catch(() => console.log(Error));
}

const getJavaJun = JSON.parse(localStorage.getItem('JavaJun'));
const getJavaMiddle = JSON.parse(localStorage.getItem('JavaMiddle'));
const getJavaSenior = JSON.parse(localStorage.getItem('JavaSenior'));
const getCSharpJun = JSON.parse(localStorage.getItem('CSharpJun'));
const getCSharpMiddle = JSON.parse(localStorage.getItem(('CSharpMiddle')));
const getCSharpSenior = JSON.parse(localStorage.getItem('CSharpSenior'));
const getJavaScriptJun = JSON.parse(localStorage.getItem('JavaScriptJun'));
const getJavaScriptMiddle = JSON.parse(localStorage.getItem('JavaScriptMiddle'));
const getJavaScriptSenior = JSON.parse(localStorage.getItem('JavaScriptSenior'));
const getCPlusJun = JSON.parse(localStorage.getItem('CPlusJun'));
const getCPlusMiddle = JSON.parse(localStorage.getItem('CPlusMiddle'));
const getCPlusSenior = JSON.parse(localStorage.getItem('CPlusSenior'));
const getSQLJun = JSON.parse(localStorage.getItem('SQLJun'));
const getSQLMiddle = JSON.parse(localStorage.getItem('SQLMiddle'));
const getSQLSenior = JSON.parse(localStorage.getItem('SQLSenior'));
const getHTMLCSSJun = JSON.parse(localStorage.getItem('HTMLCSSJun'));
const getHTMLCSSMiddle = JSON.parse(localStorage.getItem('HTMLCSSMiddle'));
const getHTMLCSSSenior = JSON.parse(localStorage.getItem('HTMLCSSSenior'));
const getPythonJun = JSON.parse(localStorage.getItem('PythonJun'));
const getPythonMiddle = JSON.parse(localStorage.getItem('PythonMiddle'));
const getPythonSenior = JSON.parse(localStorage.getItem('PythonSenior'));
const getAndroidJun = JSON.parse(localStorage.getItem('AndroidJun'));
const getAndroidMiddle = JSON.parse(localStorage.getItem('AndroidMiddle'));
const getAndroidSenior = JSON.parse(localStorage.getItem('AndroidSenior'));
const getIOSJun = JSON.parse(localStorage.getItem('iOSJun'));
const getIOSMiddle = JSON.parse(localStorage.getItem('iOSMiddle'));
const getIOSSenior = JSON.parse(localStorage.getItem('iOSSenior'));

getPromiseLocalStorage(getJavaJun);
getPromiseLocalStorage(getJavaMiddle);
getPromiseLocalStorage(getJavaMiddle);
getPromiseLocalStorage(getJavaSenior);
getPromiseLocalStorage(getCSharpJun);
getPromiseLocalStorage(getCSharpMiddle);
getPromiseLocalStorage(getCSharpSenior);
getPromiseLocalStorage(getJavaScriptJun);
getPromiseLocalStorage(getJavaScriptMiddle);
getPromiseLocalStorage(getJavaScriptSenior);
getPromiseLocalStorage(getCPlusJun);
getPromiseLocalStorage(getCPlusMiddle);
getPromiseLocalStorage(getCPlusSenior);
getPromiseLocalStorage(getSQLJun);
getPromiseLocalStorage(getSQLMiddle);
getPromiseLocalStorage(getSQLSenior);
getPromiseLocalStorage(getHTMLCSSJun);
getPromiseLocalStorage(getHTMLCSSMiddle);
getPromiseLocalStorage(getHTMLCSSSenior);
getPromiseLocalStorage(getPythonJun);
getPromiseLocalStorage(getPythonMiddle);
getPromiseLocalStorage(getPythonSenior);
getPromiseLocalStorage(getAndroidJun);
getPromiseLocalStorage(getAndroidMiddle);
getPromiseLocalStorage(getAndroidSenior);
getPromiseLocalStorage(getIOSJun);
getPromiseLocalStorage(getIOSMiddle);
getPromiseLocalStorage(getIOSSenior);

@Injectable()
export class GetCardsService {

    constructor() { }

    public cards = [];
    clearCards() {
        this.cards.length = 0;
    }

    getAllCards() {
        this.clearCards();
        getPromiseLocalStorage(getJavaJun);
        this.cards.push(getJavaJun);
        this.cards.push(getJavaMiddle);
        this.cards.push(getJavaSenior);
        this.cards.push(getCSharpJun);
        this.cards.push(getCSharpMiddle);
        this.cards.push(getCSharpSenior);
        this.cards.push(getJavaScriptJun);
        this.cards.push(getJavaScriptMiddle);
        this.cards.push(getJavaScriptSenior);
        this.cards.push(getCPlusJun);
        this.cards.push(getCPlusMiddle);
        this.cards.push(getCPlusSenior);
        this.cards.push(getSQLJun);
        this.cards.push(getSQLMiddle);
        this.cards.push(getSQLSenior);
        this.cards.push(getHTMLCSSJun);
        this.cards.push(getHTMLCSSMiddle);
        this.cards.push(getHTMLCSSSenior);
        this.cards.push(getPythonJun);
        this.cards.push(getPythonMiddle);
        this.cards.push(getPythonSenior);
        this.cards.push(getAndroidJun);
        this.cards.push(getAndroidMiddle);
        this.cards.push(getAndroidSenior);
        this.cards.push(getIOSJun);
        this.cards.push(getIOSMiddle);
        this.cards.push(getIOSSenior);
        console.log(this.cards);
    }
    getBaseJun() {
        this.clearCards();
        this.cards.push(getSQLJun);
        console.log(this.cards);
    }
    getBaseMiddle() {
        this.clearCards();
        this.cards.push(getSQLMiddle);
        console.log(this.cards);
    }
    getBaseSenior() {
        this.clearCards();
        this.cards.push(getSQLSenior);
        console.log(this.cards);
    }
    getWebJun() {
        this.clearCards();
        this.cards.push(getJavaScriptJun);
        this.cards.push(getHTMLCSSJun);
        console.log(this.cards);
    }
    getWebMiddle() {
        this.clearCards();
        this.cards.push(getJavaScriptMiddle);
        this.cards.push(getHTMLCSSMiddle);
        console.log(this.cards);
    }
    getWebSenior() {
        this.clearCards();
        this.cards.push(getJavaScriptSenior);
        this.cards.push(getHTMLCSSSenior);
        console.log(this.cards);
    }
    getProgrammerLangJun() {
        this.clearCards();
        this.cards.push(getJavaJun);
        this.cards.push(getCSharpJun);
        this.cards.push(getJavaScriptJun);
        this.cards.push(getCPlusJun);
        this.cards.push(getPythonJun);
        console.log(this.cards);
    }
    getProgrammerLangMiddle() {
        this.clearCards();
        this.cards.push(getJavaMiddle);
        this.cards.push(getCSharpMiddle);
        this.cards.push(getJavaScriptMiddle);
        this.cards.push(getCPlusMiddle);
        this.cards.push(getPythonMiddle);
        console.log(this.cards);
    }
    getProgrammerLangSenior() {
        this.clearCards();
        this.cards.push(getJavaSenior);
        this.cards.push(getCSharpSenior);
        this.cards.push(getJavaScriptSenior);
        this.cards.push(getCPlusSenior);
        this.cards.push(getPythonSenior);
        console.log(this.cards);
    }
    getMobileDevJun() {
        this.clearCards();
        this.cards.push(getAndroidJun);
        this.cards.push(getIOSJun);
        console.log(this.cards);
    }
    getMobileDevMiddle() {
        this.clearCards();
        this.cards.push(getAndroidMiddle);
        this.cards.push(getIOSMiddle);
        console.log(this.cards);
    }
    getMobileDevSenior() {
        this.clearCards();
        this.cards.push(getAndroidSenior);
        this.cards.push(getIOSSenior);
        console.log(this.cards);
    }
    getAllJun() {
        this.clearCards();
        this.cards.push(getJavaJun);
        this.cards.push(getCSharpJun);
        this.cards.push(getJavaScriptJun);
        this.cards.push(getCPlusJun);
        this.cards.push(getSQLJun);
        this.cards.push(getHTMLCSSJun);
        this.cards.push(getPythonJun);
        this.cards.push(getAndroidJun);
        this.cards.push(getIOSJun);
        console.log(this.cards);
    }
    getAllMiddle() {
        this.clearCards();
        this.cards.push(getJavaMiddle);
        this.cards.push(getCSharpMiddle);
        this.cards.push(getJavaScriptMiddle);
        this.cards.push(getCPlusMiddle);
        this.cards.push(getSQLMiddle);
        this.cards.push(getHTMLCSSMiddle);
        this.cards.push(getPythonMiddle);
        this.cards.push(getAndroidMiddle);
        this.cards.push(getIOSMiddle);
        console.log(this.cards);
    }
    getAllSenior() {
        this.clearCards();
        this.cards.push(getJavaSenior);
        this.cards.push(getCSharpSenior);
        this.cards.push(getJavaScriptSenior);
        this.cards.push(getCPlusSenior);
        this.cards.push(getSQLSenior);
        this.cards.push(getHTMLCSSSenior);
        this.cards.push(getPythonSenior);
        this.cards.push(getAndroidSenior);
        this.cards.push(getIOSSenior);
        console.log(this.cards);
    }
    getAllBase() {
        this.clearCards();
        this.cards.push(getSQLJun);
        this.cards.push(getSQLMiddle);
        this.cards.push(getSQLSenior);
        console.log(this.cards);
    }
    getAllWeb() {
        this.clearCards();
        this.cards.push(getHTMLCSSJun);
        this.cards.push(getHTMLCSSMiddle);
        this.cards.push(getHTMLCSSSenior);
        this.cards.push(getJavaScriptJun);
        this.cards.push(getJavaScriptMiddle);
        this.cards.push(getJavaScriptSenior);
        console.log(this.cards);
    }
    getAllProgrammingLang() {
        this.clearCards();
        this.cards.push(getJavaJun);
        this.cards.push(getJavaMiddle);
        this.cards.push(getJavaSenior);
        this.cards.push(getCSharpJun);
        this.cards.push(getCSharpMiddle);
        this.cards.push(getCSharpSenior);
        this.cards.push(getJavaScriptJun);
        this.cards.push(getJavaScriptMiddle);
        this.cards.push(getJavaScriptSenior);
        this.cards.push(getCPlusJun);
        this.cards.push(getCPlusMiddle);
        this.cards.push(getCPlusSenior);
        this.cards.push(getPythonJun);
        this.cards.push(getPythonMiddle);
        this.cards.push(getPythonSenior);
        console.log(this.cards);
    }
    getAllMobileDev() {
        this.clearCards();
        this.cards.push(getAndroidJun);
        this.cards.push(getAndroidMiddle);
        this.cards.push(getAndroidSenior);
        this.cards.push(getIOSJun);
        this.cards.push(getIOSMiddle);
        this.cards.push(getIOSSenior);
        console.log(this.cards);
    }
}
