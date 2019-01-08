import { Injectable } from '@angular/core';

@Injectable()
export class LocalStoreNavLessonsService {
    constructor() { }
}

const JavaLessonName1 = {
    name: 'Занятие 1. Основы Java',
    id: 'JavaJun'
};

const JavaLessonName2 = {
    name: 'Занятие 2. Средний Java',
    id: 'JavaMiddle'
};

const JavaLessonName3 = {
    name: 'Занятие 3. Продвинутый Java',
    id: 'JavaSenior'
};

const CSharpLessonName1 = {
    name: 'Занятие 1. Основы C#',
    id: 'CSharpJun'
};

const CSharpLessonName2 = {
    name: 'Занятие 2. Средний C#',
    id: 'CSharpMiddle'
};

const CSharpLessonName3 = {
    name: 'Занятие 3. Продвинутый C#',
    id: 'CSharpSenior'
};

const JavaScriptLessonName1 = {
    name: 'Занятие 1. Основы JavaScript',
    id: 'JavaScriptJun'
};

const JavaScriptLessonName2 = {
    name: 'Занятие 2. Средний JavaScript',
    id: 'JavaScriptMiddle'
};

const JavaScriptLessonName3 = {
    name: 'Занятие 3. Продвинутый JavaScript',
    id: 'JavaScriptSenior'
};

const CPlusLessonName1 = {
    name: 'Занятие 1. Основы C++',
    id: 'JavaScriptJun'
};

const CPlusLessonName2 = {
    name: 'Занятие 2. Средний C++',
    id: 'CPlusMiddle'
};

const CPlusLessonName3 = {
    name: 'Занятие 3. Продвинутый C++',
    id: 'CPlusSenior'
};

const SQLLessonName1 = {
    name: 'Занятие 1. Основы SQL',
    id: 'SQLJun'
};

const SQLLessonName2 = {
    name: 'Занятие 2. Средний SQL',
    id: 'SQLMiddle'
};

const SQLLessonName3 = {
    name: 'Занятие 3. Продвинутый SQL',
    id: 'SQLSenior'
};

const HTMLCSSLessonName1 = {
    name: 'Занятие 1. Основы HTML и CSS',
    id: 'HTMLCSSJun'
};

const HTMLCSSLessonName2 = {
    name: 'Занятие 2. Средний HTML и CSS',
    id: 'HTMLCSSMiddle'
};

const HTMLCSSLessonName3 = {
    name: 'Занятие 3. Продвинутый HTML и CSS',
    id: 'HTMLCSSSenior'
};

const PythonLessonName1 = {
    name: 'Занятие 1. Основы Python',
    id: 'PythonJun'
};

const PythonLessonName2 = {
    name: 'Занятие 2. Средний Python',
    id: 'PythonMiddle'
};

const PythonLessonName3 = {
    name: 'Занятие 3. Продвинутый Python',
    id: 'PythonSenior'
};

const AndroidLessonName1 = {
    name: 'Занятие 1. Основы Android',
    id: 'AndroidJun'
};

const AndroidLessonName2 = {
    name: 'Занятие 2. Средний Android',
    id: 'AndroidMiddle'
};

const AndroidLessonName3 = {
    name: 'Занятие 3. Продвинутый Android',
    id: 'AndroidSenior'
};

const IOSLessonName1 = {
    name: 'Занятие 1. Основы iOS',
    id: 'iOSJun'
};

const IOSLessonName2 = {
    name: 'Занятие 2. Средний iOS',
    id: 'iOSMiddle'
};

const IOSLessonName3 = {
    name: 'Занятие 3. Продвинутый iOS',
    id: 'iOSSenior'
};

const setJavaLessonName1 = localStorage.setItem('JavaLessonName1', JSON.stringify(JavaLessonName1));
const setJavaLessonName2 = localStorage.setItem('JavaLessonName2', JSON.stringify(JavaLessonName2));
const setJavaLessonName3 = localStorage.setItem('JavaLessonName3', JSON.stringify(JavaLessonName3));
const setCSharpLessonName1 = localStorage.setItem('CSharpLessonName1', JSON.stringify(CSharpLessonName1));
const setCSharpLessonName2 = localStorage.setItem('CSharpLessonName2', JSON.stringify(CSharpLessonName2));
const setCSharpLessonName3 = localStorage.setItem('CSharpLessonName3', JSON.stringify(CSharpLessonName3));
const setJavaScriptLessonName1 = localStorage.setItem('JavaScriptLessonName1', JSON.stringify(JavaScriptLessonName1));
const setJavaScriptLessonName2 = localStorage.setItem('JavaScriptLessonName2', JSON.stringify(JavaScriptLessonName2));
const setJavaScriptLessonName3 = localStorage.setItem('JavaScriptLessonName3', JSON.stringify(JavaScriptLessonName3));
const setCPlusLessonName1 = localStorage.setItem('CPlusLessonName1', JSON.stringify(CPlusLessonName1));
const setCPlusLessonName2 = localStorage.setItem('CPlusLessonName2', JSON.stringify(CPlusLessonName2));
const setCPlusLessonName3 = localStorage.setItem('CPlusLessonName3', JSON.stringify(CPlusLessonName3));
const setSQLLessonName1 = localStorage.setItem('SQLLessonName1', JSON.stringify(SQLLessonName1));
const setSQLLessonName2 = localStorage.setItem('SQLLessonName2', JSON.stringify(SQLLessonName2));
const setSQLLessonName3 = localStorage.setItem('SQLLessonName3', JSON.stringify(SQLLessonName3));
const setHTMLCSSLessonName1 = localStorage.setItem('HTMLCSSLessonName1', JSON.stringify(HTMLCSSLessonName1));
const setHTMLCSSLessonName2 = localStorage.setItem('HTMLCSSLessonName2', JSON.stringify(HTMLCSSLessonName2));
const setHTMLCSSLessonName3 = localStorage.setItem('HTMLCSSLessonName3', JSON.stringify(HTMLCSSLessonName3));
const setPythonLessonName1 = localStorage.setItem('PythonLessonName1', JSON.stringify(PythonLessonName1));
const setPythonLessonName2 = localStorage.setItem('PythonLessonName2', JSON.stringify(PythonLessonName2));
const setPythonLessonName3 = localStorage.setItem('PythonLessonName3', JSON.stringify(PythonLessonName3));
const setAndroidLessonName1 = localStorage.setItem('AndroidLessonName1', JSON.stringify(AndroidLessonName1));
const setAndroidLessonName2 = localStorage.setItem('AndroidLessonName2', JSON.stringify(AndroidLessonName2));
const setAndroidLessonName3 = localStorage.setItem('AndroidLessonName3', JSON.stringify(AndroidLessonName3));
const setIOSLessonName1 = localStorage.setItem('IOSLessonName1', JSON.stringify(IOSLessonName1));
const setIOSLessonName2 = localStorage.setItem('IOSLessonName2', JSON.stringify(IOSLessonName2));
const setIOSLessonName3 = localStorage.setItem('IOSLessonName3', JSON.stringify(IOSLessonName3));
