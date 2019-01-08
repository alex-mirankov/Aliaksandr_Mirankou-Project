import { Injectable } from '@angular/core';

@Injectable()
export class GetNavLessonsService {
    constructor() { }
    public lessonNavigation = [];

    clearNav() {
        this.lessonNavigation.length = 0;
    }

    getJavaNav() {
        this.clearNav();
        this.lessonNavigation.push(getJavaLessonName1);
        this.lessonNavigation.push(getJavaLessonName2);
        this.lessonNavigation.push(getJavaLessonName3);
    }
    getCSharpNav() {
        this.clearNav();
        this.lessonNavigation.push(getCSharpLessonName1);
        this.lessonNavigation.push(getCSharpLessonName2);
        this.lessonNavigation.push(getCSharpLessonName3);
    }
    getJavaScriptNav() {
        this.clearNav();
        this.lessonNavigation.push(getJavaScriptLessonName1);
        this.lessonNavigation.push(getJavaScriptLessonName2);
        this.lessonNavigation.push(getJavaScriptLessonName3);
    }
    getCPlusNav() {
        this.clearNav();
        this.lessonNavigation.push(getCPlusLessonName1);
        this.lessonNavigation.push(getCPlusLessonName2);
        this.lessonNavigation.push(getCPlusLessonName3);
    }
    getSQLNav() {
        this.clearNav();
        this.lessonNavigation.push(getSQLLessonName1);
        this.lessonNavigation.push(getSQLLessonName2);
        this.lessonNavigation.push(getSQLLessonName3);
    }
    getHTMLCSSNav() {
        this.clearNav();
        this.lessonNavigation.push(getHTMLCSSLessonName1);
        this.lessonNavigation.push(getHTMLCSSLessonName2);
        this.lessonNavigation.push(getHTMLCSSLessonName3);
    }
    getPythonNav() {
        this.clearNav();
        this.lessonNavigation.push(getPythonLessonName1);
        this.lessonNavigation.push(getPythonLessonName2);
        this.lessonNavigation.push(getPythonLessonName3);
    }
    getAndroidNav() {
        this.clearNav();
        this.lessonNavigation.push(getAndroidLessonName1);
        this.lessonNavigation.push(getAndroidLessonName2);
        this.lessonNavigation.push(getAndroidLessonName3);
    }
    getIOSNav() {
        this.clearNav();
        this.lessonNavigation.push(getIOSLessonName1);
        this.lessonNavigation.push(getIOSLessonName2);
        this.lessonNavigation.push(getIOSLessonName3);
    }
}

const getJavaLessonName1 = JSON.parse(localStorage.getItem('JavaLessonName1'));
const getJavaLessonName2 = JSON.parse(localStorage.getItem('JavaLessonName2'));
const getJavaLessonName3 = JSON.parse(localStorage.getItem('JavaLessonName3'));
const getCSharpLessonName1 = JSON.parse(localStorage.getItem('CSharpLessonName1'));
const getCSharpLessonName2 = JSON.parse(localStorage.getItem('CSharpLessonName2'));
const getCSharpLessonName3 = JSON.parse(localStorage.getItem('CSharpLessonName3'));
const getJavaScriptLessonName1 = JSON.parse(localStorage.getItem('JavaScriptLessonName1'));
const getJavaScriptLessonName2 = JSON.parse(localStorage.getItem('JavaScriptLessonName2'));
const getJavaScriptLessonName3 = JSON.parse(localStorage.getItem('JavaScriptLessonName3'));
const getCPlusLessonName1 = JSON.parse(localStorage.getItem('CPlusLessonName1'));
const getCPlusLessonName2 = JSON.parse(localStorage.getItem('CPlusLessonName2'));
const getCPlusLessonName3 = JSON.parse(localStorage.getItem('CPlusLessonName3'));
const getSQLLessonName1 = JSON.parse(localStorage.getItem('SQLLessonName1'));
const getSQLLessonName2 = JSON.parse(localStorage.getItem('SQLLessonName2'));
const getSQLLessonName3 = JSON.parse(localStorage.getItem('SQLLessonName3'));
const getHTMLCSSLessonName1 = JSON.parse(localStorage.getItem('HTMLCSSLessonName1'));
const getHTMLCSSLessonName2 = JSON.parse(localStorage.getItem('HTMLCSSLessonName2'));
const getHTMLCSSLessonName3 = JSON.parse(localStorage.getItem('HTMLCSSLessonName3'));
const getPythonLessonName1 = JSON.parse(localStorage.getItem('PythonLessonName1'));
const getPythonLessonName2 = JSON.parse(localStorage.getItem('PythonLessonName2'));
const getPythonLessonName3 = JSON.parse(localStorage.getItem('PythonLessonName3'));
const getAndroidLessonName1 = JSON.parse(localStorage.getItem('AndroidLessonName1'));
const getAndroidLessonName2 = JSON.parse(localStorage.getItem('AndroidLessonName2'));
const getAndroidLessonName3 = JSON.parse(localStorage.getItem('AndroidLessonName3'));
const getIOSLessonName1 = JSON.parse(localStorage.getItem('IOSLessonName1'));
const getIOSLessonName2 = JSON.parse(localStorage.getItem('IOSLessonName2'));
const getIOSLessonName3 = JSON.parse(localStorage.getItem('IOSLessonName3'));
