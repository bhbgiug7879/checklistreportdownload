import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    pageName: string = '';
    tabType?: string = '';
}