import { Injectable } from '@angular/core';

@Injectable()
export class GetPromiseService {
    constructor() { }
    getPromiseLocalStorage(itemLocalStorage) {
        const promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(itemLocalStorage);
            }, 2000);
        });
        return promise;
    }
}
