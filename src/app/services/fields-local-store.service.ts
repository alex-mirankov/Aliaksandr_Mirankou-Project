import { Injectable } from '@angular/core';

@Injectable()
export class FieldsLocalStoreService {
    constructor() { }

    public getJavaJun = JSON.parse(localStorage.getItem('JavaJun'));
    public getJavaMiddle = JSON.parse(localStorage.getItem('JavaMiddle'));
    public getJavaSenior = JSON.parse(localStorage.getItem('JavaSenior'));
    public getCSharpJun = JSON.parse(localStorage.getItem('CSharpJun'));
    public getCSharpMiddle = JSON.parse(localStorage.getItem(('CSharpMiddle')));
    public getCSharpSenior = JSON.parse(localStorage.getItem('CSharpSenior'));
    public getJavaScriptJun = JSON.parse(localStorage.getItem('JavaScriptJun'));
    public getJavaScriptMiddle = JSON.parse(localStorage.getItem('JavaScriptMiddle'));
    public getJavaScriptSenior = JSON.parse(localStorage.getItem('JavaScriptSenior'));
    public getCPlusJun = JSON.parse(localStorage.getItem('CPlusJun'));
    public getCPlusMiddle = JSON.parse(localStorage.getItem('CPlusMiddle'));
    public getCPlusSenior = JSON.parse(localStorage.getItem('CPlusSenior'));
    public getSQLJun = JSON.parse(localStorage.getItem('SQLJun'));
    public getSQLMiddle = JSON.parse(localStorage.getItem('SQLMiddle'));
    public getSQLSenior = JSON.parse(localStorage.getItem('SQLSenior'));
    public getHTMLCSSJun = JSON.parse(localStorage.getItem('HTMLCSSJun'));
    public getHTMLCSSMiddle = JSON.parse(localStorage.getItem('HTMLCSSMiddle'));
    public getHTMLCSSSenior = JSON.parse(localStorage.getItem('HTMLCSSSenior'));
    public getPythonJun = JSON.parse(localStorage.getItem('PythonJun'));
    public getPythonMiddle = JSON.parse(localStorage.getItem('PythonMiddle'));
    public getPythonSenior = JSON.parse(localStorage.getItem('PythonSenior'));
    public getAndroidJun = JSON.parse(localStorage.getItem('AndroidJun'));
    public getAndroidMiddle = JSON.parse(localStorage.getItem('AndroidMiddle'));
    public getAndroidSenior = JSON.parse(localStorage.getItem('AndroidSenior'));
    public getIOSJun = JSON.parse(localStorage.getItem('iOSJun'));
    public getIOSMiddle = JSON.parse(localStorage.getItem('iOSMiddle'));
    public getIOSSenior = JSON.parse(localStorage.getItem('iOSSenior'));

    public getJavaJunLesson = JSON.parse(localStorage.getItem('JavaJunLesson'));
    public getJavaMiddleLesson = JSON.parse(localStorage.getItem('JavaMiddleLesson'));
    public getJavaSeniorLesson = JSON.parse(localStorage.getItem('JavaSeniorLesson'));
    public getCSharpJunLesson = JSON.parse(localStorage.getItem('CSharpJunLesson'));
    public getCSharpMiddleLesson = JSON.parse(localStorage.getItem(('CSharpMiddleLesson')));
    public getCSharpSeniorLesson = JSON.parse(localStorage.getItem('CSharpSeniorLesson'));
    public getJavaScriptJunLesson = JSON.parse(localStorage.getItem('JavaScriptJunLesson'));
    public getJavaScriptMiddleLesson = JSON.parse(localStorage.getItem('JavaScriptMiddleLesson'));
    public getJavaScriptSeniorLesson = JSON.parse(localStorage.getItem('JavaScriptSeniorLesson'));
    public getCPlusJunLesson = JSON.parse(localStorage.getItem('CPlusJunLesson'));
    public getCPlusMiddleLesson = JSON.parse(localStorage.getItem('CPlusMiddleLesson'));
    public getCPlusSeniorLesson = JSON.parse(localStorage.getItem('CPlusSeniorLesson'));
    public getSQLJunLesson = JSON.parse(localStorage.getItem('SQLJunLesson'));
    public getSQLMiddleLesson = JSON.parse(localStorage.getItem('SQLMiddleLesson'));
    public getSQLSeniorLesson = JSON.parse(localStorage.getItem('SQLSeniorLesson'));
    public getHTMLCSSJunLesson = JSON.parse(localStorage.getItem('HTMLCSSJunLesson'));
    public getHTMLCSSMiddleLesson = JSON.parse(localStorage.getItem('HTMLCSSMiddleLesson'));
    public getHTMLCSSSeniorLesson = JSON.parse(localStorage.getItem('HTMLCSSSeniorLesson'));
    public getPythonJunLesson = JSON.parse(localStorage.getItem('PythonJunLesson'));
    public getPythonMiddleLesson = JSON.parse(localStorage.getItem('PythonMiddleLesson'));
    public getPythonSeniorLesson = JSON.parse(localStorage.getItem('PythonSeniorLesson'));
    public getAndroidJunLesson = JSON.parse(localStorage.getItem('AndroidJunLesson'));
    public getAndroidMiddleLesson = JSON.parse(localStorage.getItem('AndroidMiddleLesson'));
    public getAndroidSeniorLesson = JSON.parse(localStorage.getItem('AndroidSeniorLesson'));
    public getIOSJunLesson = JSON.parse(localStorage.getItem('iOSJunLesson'));
    public getIOSMiddleLesson = JSON.parse(localStorage.getItem('iOSMiddleLesson'));
    public getIOSSeniorLesson = JSON.parse(localStorage.getItem('iOSSeniorLesson'));

    public getJavaLessonName1 = JSON.parse(localStorage.getItem('JavaLessonName1'));
    public getJavaLessonName2 = JSON.parse(localStorage.getItem('JavaLessonName2'));
    public getJavaLessonName3 = JSON.parse(localStorage.getItem('JavaLessonName3'));
    public getCSharpLessonName1 = JSON.parse(localStorage.getItem('CSharpLessonName1'));
    public getCSharpLessonName2 = JSON.parse(localStorage.getItem('CSharpLessonName2'));
    public getCSharpLessonName3 = JSON.parse(localStorage.getItem('CSharpLessonName3'));
    public getJavaScriptLessonName1 = JSON.parse(localStorage.getItem('JavaScriptLessonName1'));
    public getJavaScriptLessonName2 = JSON.parse(localStorage.getItem('JavaScriptLessonName2'));
    public getJavaScriptLessonName3 = JSON.parse(localStorage.getItem('JavaScriptLessonName3'));
    public getCPlusLessonName1 = JSON.parse(localStorage.getItem('CPlusLessonName1'));
    public getCPlusLessonName2 = JSON.parse(localStorage.getItem('CPlusLessonName2'));
    public getCPlusLessonName3 = JSON.parse(localStorage.getItem('CPlusLessonName3'));
    public getSQLLessonName1 = JSON.parse(localStorage.getItem('SQLLessonName1'));
    public getSQLLessonName2 = JSON.parse(localStorage.getItem('SQLLessonName2'));
    public getSQLLessonName3 = JSON.parse(localStorage.getItem('SQLLessonName3'));
    public getHTMLCSSLessonName1 = JSON.parse(localStorage.getItem('HTMLCSSLessonName1'));
    public getHTMLCSSLessonName2 = JSON.parse(localStorage.getItem('HTMLCSSLessonName2'));
    public getHTMLCSSLessonName3 = JSON.parse(localStorage.getItem('HTMLCSSLessonName3'));
    public getPythonLessonName1 = JSON.parse(localStorage.getItem('PythonLessonName1'));
    public getPythonLessonName2 = JSON.parse(localStorage.getItem('PythonLessonName2'));
    public getPythonLessonName3 = JSON.parse(localStorage.getItem('PythonLessonName3'));
    public getAndroidLessonName1 = JSON.parse(localStorage.getItem('AndroidLessonName1'));
    public getAndroidLessonName2 = JSON.parse(localStorage.getItem('AndroidLessonName2'));
    public getAndroidLessonName3 = JSON.parse(localStorage.getItem('AndroidLessonName3'));
    public getIOSLessonName1 = JSON.parse(localStorage.getItem('IOSLessonName1'));
    public getIOSLessonName2 = JSON.parse(localStorage.getItem('IOSLessonName2'));
    public getIOSLessonName3 = JSON.parse(localStorage.getItem('IOSLessonName3'));

    public getJavaNameLesson = JSON.parse(localStorage.getItem('JavaNameLesson'));
    public getCSharpNameLesson = JSON.parse(localStorage.getItem('CSharpNameLesson'));
    public getJavaScriptNameLesson = JSON.parse(localStorage.getItem('JavaScriptNameLesson'));
    public getCPlusNameLesson = JSON.parse(localStorage.getItem('CPlusNameLesson'));
    public getSQLNameLesson = JSON.parse(localStorage.getItem('SQLNameLesson'));
    public getHTMLCSSNameLesson = JSON.parse(localStorage.getItem('HTMLCSSNameLesson'));
    public getPythonNameLesson = JSON.parse(localStorage.getItem('PythonNameLesson'));
    public getAndroidNameLesson = JSON.parse(localStorage.getItem('AndroidNameLesson'));
    public getIOSNameLesson = JSON.parse(localStorage.getItem('IOSNameLesson'));
}
