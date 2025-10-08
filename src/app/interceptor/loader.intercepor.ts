import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpRequest,
    HttpHandler,
    HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize, delay } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    requestCount = 0;
    constructor(private loaderService: LoaderService) {
    }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        this.loaderService.show()
        this.requestCount++;

        return next.handle(req).pipe(
            delay(500),
            finalize(() => {
                this.requestCount--;
                if (this.requestCount === 0) {
                    this.loaderService.hide();
                }
            }))
    }
}
