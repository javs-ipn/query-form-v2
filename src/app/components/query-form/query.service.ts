import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QueryService {

    constructor(public httpClient: HttpClient) { }

    public saveQuery(query: any) {
        const url = 'http://localhost:3000/query';
        return this.httpClient.post(url, query);
    }

    public getDatabases() {
        const url = 'http://localhost:3000/db';
        return this.httpClient.get(url);
    }

    public getPendingQueries() {
        const url = 'http://localhost:3000/query/pending-queries';
        return this.httpClient.get(url);
    }
}
