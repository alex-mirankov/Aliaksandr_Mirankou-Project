import { Injectable } from '@angular/core';
import { FieldsLocalStoreService } from './fields-local-store.service';
import { GetPromiseService } from './get-promise.service';

@Injectable()
export class GetNavLessonsService {

    public lessonNavigation: string[] = [];

    constructor(private fieldsStore: FieldsLocalStoreService, private promiseService: GetPromiseService) { }

    clearNav() {
        this.lessonNavigation.length = 0;
    }

    getJavaNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getJavaLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getJavaLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getJavaLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getCSharpNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getCSharpLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getCSharpLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getCSharpLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getJavaScriptNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getJavaScriptLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getJavaScriptLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getJavaScriptLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getCPlusNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getCPlusLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getCPlusLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getCPlusLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getSQLNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getSQLLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getSQLLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getSQLLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getHTMLCSSNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getHTMLCSSLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getHTMLCSSLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getHTMLCSSLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getPythonNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getPythonLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getPythonLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getPythonLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getAndroidNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getAndroidLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getAndroidLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getAndroidLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
    getIOSNav() {
        this.clearNav();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSLessonName1)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getIOSLessonName1))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSLessonName2)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getIOSLessonName2))
            .catch(error => new Error(error));
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSLessonName3)
            .then(response => this.lessonNavigation.push(this.fieldsStore.getIOSLessonName3))
            .catch(error => new Error(error));
        return this.lessonNavigation;
    }
}
