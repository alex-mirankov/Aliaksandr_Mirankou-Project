import { Injectable } from '@angular/core';

@Injectable()
export class NavNameLessonsService {
    constructor() { }
}

const JavaNameLesson = {
    nameNav: 'Java Skill'
};

const CSharpNameLesson = {
    nameNav: 'C# Skill'
};

const JavaScriptNameLesson = {
    nameNav: 'JavaScript Skill'
};

const CPlusNameLesson = {
    nameNav: 'C++ Skill'
};

const SQLNameLesson = {
    nameNav: 'SQL Skill'
};

const HTMLCSSNameLesson = {
    nameNav: 'HTML & CSS Skill'
};

const PythonNameLesson = {
    nameNav: 'Python Skill'
};

const AndroidNameLesson = {
    nameNav: 'Android Skill'
};

const IOSNameLesson = {
    nameNav: 'iOS Skill'
};

const setJavaNameLesson = localStorage.setItem('JavaNameLesson', JSON.stringify(JavaNameLesson));
const setCSharpNameLesson = localStorage.setItem('CSharpNameLesson', JSON.stringify(CSharpNameLesson));
const setJavaScriptNameLesson = localStorage.setItem('JavaScriptNameLesson', JSON.stringify(JavaScriptNameLesson));
const setCPlusNameLesson = localStorage.setItem('CPlusNameLesson', JSON.stringify(CPlusNameLesson));
const setSQLNameLesson = localStorage.setItem('SQLNameLesson', JSON.stringify(SQLNameLesson));
const setHTMLCSSNameLesson = localStorage.setItem('HTMLCSSNameLesson', JSON.stringify(HTMLCSSNameLesson));
const setPythonNameLesson = localStorage.setItem('PythonNameLesson', JSON.stringify(PythonNameLesson));
const setAndroidNameLesson = localStorage.setItem('AndroidNameLesson', JSON.stringify(AndroidNameLesson));
const setIOSNameLesson = localStorage.setItem('IOSNameLesson', JSON.stringify(IOSNameLesson));
