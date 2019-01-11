import { Injectable } from '@angular/core';
import { FieldsLocalStoreService } from './fields-local-store.service';
import { GetPromiseService } from './get-promise.service';

@Injectable()
export class GetLessonsService {
  constructor(private fieldsStore: FieldsLocalStoreService, private promiseService: GetPromiseService) { }

  public lessons: string[] = [];
  public loadSpinner = true;
  toggle() {
    this.loadSpinner = false;
    console.log(this.loadSpinner);
  }

  public clearLesson() {
    this.lessons.length = 0;
  }

  getLessonJavaJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getJavaJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonJavaMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaMiddleLesson)
      .then(response => {
        this.lessons.push(this.fieldsStore.getJavaMiddleLesson);
        this.toggle();
        console.log('toggle');
      })
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonJavaSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getJavaSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonCSharpJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getCSharpJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonCSharpMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getCSharpMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonCSharpSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getCSharpSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonJavaScriptJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getJavaScriptJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonJavaScriptMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getJavaScriptMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonJavaScriptSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getJavaScriptSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonCPlusJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getCPlusJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonCPlusMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getCPlusMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonCPlusSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getCPlusSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonSQLJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getSQLJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonSQLMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getSQLMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonSQLSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getSQLSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonHTMLCSSJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getHTMLCSSJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonHTMLCSSMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getHTMLCSSMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonHTMLCSSSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getHTMLCSSSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonPythonJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getPythonJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonPythonMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getPythonMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonPythonSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getPythonSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonAndroidJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getAndroidJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonAndroidMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getAndroidMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonAndroidSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getAndroidSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonIOSJun() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSJunLesson)
      .then(response => this.lessons.push(this.fieldsStore.getIOSJunLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonIOSMiddle() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSMiddleLesson)
      .then(response => this.lessons.push(this.fieldsStore.getIOSMiddleLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }

  getLessonIOSSenior() {
    this.clearLesson();
    this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSSeniorLesson)
      .then(response => this.lessons.push(this.fieldsStore.getIOSSeniorLesson))
      .catch(error => new Error(error));
    return this.lessons;
  }
}

