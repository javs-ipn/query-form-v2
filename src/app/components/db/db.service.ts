import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DBService {

    constructor(public httpClient: HttpClient) { }

    public getDatabases() {
        const url = 'http://localhost:3000/db';
        return this.httpClient.get(url);
    }
}
