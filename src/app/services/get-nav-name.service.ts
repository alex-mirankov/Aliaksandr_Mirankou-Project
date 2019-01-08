import { Injectable } from '@angular/core';

@Injectable()
export class GetNavNameLessonsService {
    constructor() { }
    public namesNav = [];

    clearNames() {
        this.namesNav.length = 0;
    }
    getJavaName() {
        this.clearNames();
        this.namesNav.push(getJavaNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getCSharpName() {
        this.clearNames();
        this.namesNav.push(getCSharpNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getJavaScriptName() {
        this.clearNames();
        this.namesNav.push(getJavaScriptNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getCPlusName() {
        this.clearNames();
        this.namesNav.push(getCPlusNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getSQLName() {
        this.clearNames();
        this.namesNav.push(getSQLNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getHTMLCSSName() {
        this.clearNames();
        this.namesNav.push(getHTMLCSSNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getPythonName() {
        this.clearNames();
        this.namesNav.push(getPythonNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getAndroidName() {
        this.clearNames();
        this.namesNav.push(getAndroidNameLesson.nameNav);
        console.log(this.namesNav);
    }
    getIOSName() {
        this.clearNames();
        this.namesNav.push(getIOSNameLesson.nameNav);
        console.log(this.namesNav);
    }
}

const getJavaNameLesson = JSON.parse(localStorage.getItem('JavaNameLesson'));
const getCSharpNameLesson = JSON.parse(localStorage.getItem('CSharpNameLesson'));
const getJavaScriptNameLesson = JSON.parse(localStorage.getItem('JavaScriptNameLesson'));
const getCPlusNameLesson = JSON.parse(localStorage.getItem('CPlusNameLesson'));
const getSQLNameLesson = JSON.parse(localStorage.getItem('SQLNameLesson'));
const getHTMLCSSNameLesson = JSON.parse(localStorage.getItem('HTMLCSSNameLesson'));
const getPythonNameLesson = JSON.parse(localStorage.getItem('PythonNameLesson'));
const getAndroidNameLesson = JSON.parse(localStorage.getItem('AndroidNameLesson'));
const getIOSNameLesson = JSON.parse(localStorage.getItem('IOSNameLesson'));
