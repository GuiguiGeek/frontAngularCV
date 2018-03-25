import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Contact } from './contact';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

    private contactWSUrl = 'http://localhost:8080/repApp';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getContact(id: number): Observable<Contact> {
    const url = this.contactWSUrl +'/get-by-id?id=' + id;
    this.log(url);
    return this.http.get<Contact>(url)
               .pipe(
                  tap(_ => this.log(`contact recupere id=${id}`)),
                  catchError(this.handleError<Contact>(`getContact id=${id}`))
                );
  }

 /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: message ->${error.message} type->${error.type} name->${error.name} headers->${error.headers.keys()} status->${error.status} statusText->${error.statusText} url->${error.url}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
  
}
