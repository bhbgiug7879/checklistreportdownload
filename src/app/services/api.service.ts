import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    get(url: string, params?: any): Observable<any> {
        return this.http.get(`${url}`, { params: params });
    }

    post(url: string, data: any, options?: any): Observable<any> {
        return this.http.post(`${url}`, data, options);
    }

    patch(url: string, data: any, options?: any): Observable<any> {
        return this.http.patch(`${url}`, data, options);
    }

    delete(url: string, body: any): Observable<any> {
        return this.http.delete(`${url}`, { body: body });
    }


}
