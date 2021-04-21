import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Client } from './client';
import { Opportunity } from './opportunity';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:3000/';

  httpOptions = {
    headers: new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
  };

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    const url = this.baseUrl + 'getAll';
    return this.http.get<Client[]>(url);
  }

  // getOpportunities(client: Client): Observable<Opportunity[]> {
  //   const url = this.baseUrl + 'getAll';
  //   let params = new HttpParams();
  //   params = params.append('client', client.email);
  //   return this.http.get<any>(url, {params});
  // }

  getOpportunities(client: Client): Observable<Opportunity[]> {
    const url = this.baseUrl + `getOne?email=${client.email}`;
    let params = new HttpParams();
    params = params.append('client', client.email);
    return this.http.get<any>(url, {params});
  }

  getOne(key: string): Observable<Client> {
    const url = this.baseUrl + `getOne?email=${key}`;
    return this.http.get<Client>(url);
  }

  updateClient(client: Client){
    return this.http.put(this.baseUrl + 'update', client);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl + 'set', client, this.httpOptions);
  }
  // TODO: Implementar: getOne, update, set, delete;
}
