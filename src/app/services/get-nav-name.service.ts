import { Injectable } from '@angular/core';
import { FieldsLocalStoreService } from './fields-local-store.service';
import { GetPromiseService } from './get-promise.service';

@Injectable()
export class GetNavNameLessonsService {
    constructor(private fieldsStore: FieldsLocalStoreService, private promiseService: GetPromiseService) { }
    public namesNav = [];

    clearNames() {
        this.namesNav.length = 0;
    }
    getJavaName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getJavaNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getCSharpName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCSharpNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getCSharpNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getJavaScriptName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getJavaScriptNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getJavaScriptNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getCPlusName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getCPlusNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getCPlusNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getSQLName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getSQLNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getSQLNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getHTMLCSSName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getHTMLCSSNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getHTMLCSSNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getPythonName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getPythonNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getPythonNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getAndroidName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getAndroidNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getAndroidNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
    getIOSName() {
        this.clearNames();
        this.promiseService.getPromiseLocalStorage(this.fieldsStore.getIOSNameLesson.nameNav)
        .then(response => this.namesNav.push(this.fieldsStore.getIOSNameLesson.nameNav))
        .catch(error => new Error(error));
        return this.namesNav;
    }
}


