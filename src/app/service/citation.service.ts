import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Citation } from '../model/citation';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CitationService {
  private citationsUrl = 'api/citations';
  constructor(private http: HttpClient) {}

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getCitations(): Observable<Citation[]> {
    return this.http
      .get<Citation[]>(this.citationsUrl)
      .pipe(catchError(this.handleError<Citation[]>([])));
  }

  getCitation(id: number): Observable<Citation> {
    const url = `${this.citationsUrl}/${id}`;
    return this.http
      .get<Citation>(url)
      .pipe(catchError(this.handleError<Citation>()));
  }
}
