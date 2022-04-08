import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../Components/user-list/Users';

@Injectable({
providedIn:  'root'
})
export class ApiService {

    private URL = 'http://localhost:8080/users';
    private postURL = "http://localhost:8080/add-user";

constructor(private api: HttpClient) { }

getUsers(): Observable<Users[]> {
    return this.api.get<Users[]>(this.URL)
}

addUser(user: Users): Observable<Users> {
    return this.api.post<Users>(this.postURL, user)
}

}