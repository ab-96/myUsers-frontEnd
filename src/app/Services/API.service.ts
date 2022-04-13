import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { observable, Observable } from 'rxjs';
import { Users } from '../Interface/Users';

@Injectable({
providedIn:  'root'
})
export class ApiService {

    private URL = 'http://localhost:8080/users';
    private postURL = "http://localhost:8080/add-user";
    private delURL = "http://localhost:8080/delete";
  unsubscribe: any;

constructor(private api: HttpClient) { }

//GET
getUsers(): Observable<Users[]> {
    return this.api.get<Users[]>(this.URL)
}

//POST
addUser(user: Users): Observable<Users> {
    return this.api.post<Users>(this.postURL, user);
}
// DELETE
removeUser(id: number): Observable<Users>  {
    return this.api.delete<Users>(`${this.delURL}/${id}`)
}


}