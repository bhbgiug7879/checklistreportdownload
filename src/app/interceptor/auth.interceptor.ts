import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from "../services/local-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private localservice: LocalStorageService, private toastar: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('login')) {
            if (!req.headers.has('Content-Type')) {
                req = req.clone({
                    headers: req.headers.set('Content-Type', 'application/json')
                });
            }
        }
        else {
            const token = this.localservice.getAccessToken();
            if (token) {
                req = req.clone({
                    setHeaders: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'X-Requested-With',
                        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT, OPTIONS',
                        "Authorization": `${token}`,
                        "platform": 'web'
                    }
                });
            }

        }

        return next.handle(req).pipe(
            catchError((error: any) => {
                if (error instanceof HttpErrorResponse) {
                    let errorMessage = 'An error occurred.';
                    if (error.error && error.error.message) {
                        if (typeof error.error.message === 'string') {
                            errorMessage = error.error.message;
                        } else if (Array.isArray(error.error.message)) {
                            errorMessage = error.error.message.join('\n');
                        }
                    }
                    this.toastar.error(errorMessage, 'Error');
                } else {
                    this.toastar.error('An error occurred. Please try again.', 'Error');
                }
                return throwError(error);
            })
        );
    }
}



