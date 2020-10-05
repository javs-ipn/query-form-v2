import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(public httpClient: HttpClient) { }

    public createUser(user: any) {
        const url = 'http://localhost:3000/user';
        return this.httpClient.post(url, user);
    }
}
