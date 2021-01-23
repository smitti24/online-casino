import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {

  }

  get<T>(url: string): Observable<[]> {
    return this._http.get<[]>(url).pipe(
      catchError(this.handleError<[]>('Get', []))
    );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

private log(message: string) {
  console.log(message);
}
}
