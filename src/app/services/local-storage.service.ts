import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    public getAccessToken(): String {
        return 'Hello'
    }

}