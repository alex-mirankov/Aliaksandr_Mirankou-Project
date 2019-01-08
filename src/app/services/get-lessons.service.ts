import { Injectable } from '@angular/core';

@Injectable()
export class GetLessonsService {
  constructor() { }

  public lessons = [];

  public clearLesson() {
    this.lessons.length = 0;
  }

  getLessonJavaJun() {
    this.clearLesson();
    this.lessons.push(getJavaJunLesson);
    console.log(getJavaJunLesson);
  }

  getLessonJavaMiddle() {
    this.clearLesson();
    this.lessons.push(getJavaMiddleLesson);
    console.log(getJavaMiddleLesson);
  }

  getLessonJavaSenior() {
    this.clearLesson();
    this.lessons.push(getJavaSeniorLesson);
    console.log(getJavaSeniorLesson);
  }

  getLessonCSharpJun() {
    this.clearLesson();
    this.lessons.push(getCSharpJunLesson);
    console.log(getCSharpJunLesson);
  }

  getLessonCSharpMiddle() {
    this.clearLesson();
    this.lessons.push(getCSharpMiddleLesson);
    console.log(getCSharpMiddleLesson);
  }

  getLessonCSharpSenior() {
    this.clearLesson();
    this.lessons.push(getCSharpSeniorLesson);
    console.log(getCSharpSeniorLesson);
  }

  getLessonJavaScriptJun() {
    this.clearLesson();
    this.lessons.push(getJavaScriptJunLesson);
    console.log(getJavaScriptJunLesson);
  }

  getLessonJavaScriptMiddle() {
    this.clearLesson();
    this.lessons.push(getJavaScriptMiddleLesson);
    console.log(getJavaScriptMiddleLesson);
  }

  getLessonJavaScriptSenior() {
    this.clearLesson();
    this.lessons.push(getJavaScriptSeniorLesson);
    console.log(getJavaScriptSeniorLesson);
  }

  getLessonCPlusJun() {
    this.clearLesson();
    this.lessons.push(getCPlusJunLesson);
    console.log(getCPlusJunLesson);
  }

  getLessonCPlusMiddle() {
    this.clearLesson();
    this.lessons.push(getCPlusMiddleLesson);
    console.log(getCPlusMiddleLesson);
  }

  getLessonCPlusSenior() {
    this.clearLesson();
    this.lessons.push(getCPlusSeniorLesson);
    console.log(getCPlusSeniorLesson);
  }

  getLessonSQLJun() {
    this.clearLesson();
    this.lessons.push(getSQLJunLesson);
    console.log(getSQLJunLesson);
  }

  getLessonSQLMiddle() {
    this.clearLesson();
    this.lessons.push(getSQLMiddleLesson);
    console.log(getSQLMiddleLesson);
  }

  getLessonSQLSenior() {
    this.clearLesson();
    this.lessons.push(getSQLSeniorLesson);
    console.log(getSQLSeniorLesson);
  }

  getLessonHTMLCSSJun() {
    this.clearLesson();
    this.lessons.push(getHTMLCSSJunLesson);
    console.log(getHTMLCSSJunLesson);
  }

  getLessonHTMLCSSMiddle() {
    this.clearLesson();
    this.lessons.push(getHTMLCSSMiddleLesson);
    console.log(getHTMLCSSMiddleLesson);
  }

  getLessonHTMLCSSSenior() {
    this.clearLesson();
    this.lessons.push(getHTMLCSSSeniorLesson);
    console.log(getHTMLCSSSeniorLesson);
  }

  getLessonPythonJun() {
    this.clearLesson();
    this.lessons.push(getPythonJunLesson);
    console.log(getPythonJunLesson);
  }

  getLessonPythonMiddle() {
    this.clearLesson();
    this.lessons.push(getPythonMiddleLesson);
    console.log(getPythonMiddleLesson);
  }

  getLessonPythonSenior() {
    this.clearLesson();
    this.lessons.push(getPythonSeniorLesson);
    console.log(getPythonSeniorLesson);
  }

  getLessonAndroidJun() {
    this.clearLesson();
    this.lessons.push(getAndroidJunLesson);
    console.log(getAndroidJunLesson);
  }

  getLessonAndroidMiddle() {
    this.clearLesson();
    this.lessons.push(getAndroidMiddleLesson);
    console.log(getAndroidMiddleLesson);
  }

  getLessonAndroidSenior() {
    this.clearLesson();
    this.lessons.push(getAndroidSeniorLesson);
    console.log(getAndroidSeniorLesson);
  }

  getLessonIOSJun() {
    this.clearLesson();
    this.lessons.push(getIOSJunLesson);
    console.log(getIOSJunLesson);
  }

  getLessonIOSMiddle() {
    this.clearLesson();
    this.lessons.push(getIOSMiddleLesson);
    console.log(getIOSMiddleLesson);
  }

  getLessonIOSSenior() {
    this.clearLesson();
    this.lessons.push(getIOSSeniorLesson);
    console.log(getIOSSeniorLesson);
  }
}

const getJavaJunLesson = JSON.parse(localStorage.getItem('JavaJunLesson'));
const getJavaMiddleLesson = JSON.parse(localStorage.getItem('JavaMiddleLesson'));
const getJavaSeniorLesson = JSON.parse(localStorage.getItem('JavaSeniorLesson'));
const getCSharpJunLesson = JSON.parse(localStorage.getItem('CSharpJunLesson'));
const getCSharpMiddleLesson = JSON.parse(localStorage.getItem(('CSharpMiddleLesson')));
const getCSharpSeniorLesson = JSON.parse(localStorage.getItem('CSharpSeniorLesson'));
const getJavaScriptJunLesson = JSON.parse(localStorage.getItem('JavaScriptJunLesson'));
const getJavaScriptMiddleLesson = JSON.parse(localStorage.getItem('JavaScriptMiddleLesson'));
const getJavaScriptSeniorLesson = JSON.parse(localStorage.getItem('JavaScriptSeniorLesson'));
const getCPlusJunLesson = JSON.parse(localStorage.getItem('CPlusJunLesson'));
const getCPlusMiddleLesson = JSON.parse(localStorage.getItem('CPlusMiddleLesson'));
const getCPlusSeniorLesson = JSON.parse(localStorage.getItem('CPlusSeniorLesson'));
const getSQLJunLesson = JSON.parse(localStorage.getItem('SQLJunLesson'));
const getSQLMiddleLesson = JSON.parse(localStorage.getItem('SQLMiddleLesson'));
const getSQLSeniorLesson = JSON.parse(localStorage.getItem('SQLSeniorLesson'));
const getHTMLCSSJunLesson = JSON.parse(localStorage.getItem('HTMLCSSJunLesson'));
const getHTMLCSSMiddleLesson = JSON.parse(localStorage.getItem('HTMLCSSMiddleLesson'));
const getHTMLCSSSeniorLesson = JSON.parse(localStorage.getItem('HTMLCSSSeniorLesson'));
const getPythonJunLesson = JSON.parse(localStorage.getItem('PythonJunLesson'));
const getPythonMiddleLesson = JSON.parse(localStorage.getItem('PythonMiddleLesson'));
const getPythonSeniorLesson = JSON.parse(localStorage.getItem('PythonSeniorLesson'));
const getAndroidJunLesson = JSON.parse(localStorage.getItem('AndroidJunLesson'));
const getAndroidMiddleLesson = JSON.parse(localStorage.getItem('AndroidMiddleLesson'));
const getAndroidSeniorLesson = JSON.parse(localStorage.getItem('AndroidSeniorLesson'));
const getIOSJunLesson = JSON.parse(localStorage.getItem('iOSJunLesson'));
const getIOSMiddleLesson = JSON.parse(localStorage.getItem('iOSMiddleLesson'));
const getIOSSeniorLesson = JSON.parse(localStorage.getItem('iOSSeniorLesson'));
