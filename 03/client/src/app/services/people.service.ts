import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPerson } from '../interfaces/person.interface';

@Injectable()
export class PeopleService {
    constructor(private http: HttpClient) {}
    
    getAll() {
        return this.http.get<IPerson[]>(`${environment.apiUrl}/people`);
    }
    get(id: string) {
        return this.http.get<IPerson>(`${environment.apiUrl}/people/${id}`);
    }
    create(person: IPerson, positionId: string) {
        return this.http.post<IPerson>(`${environment.apiUrl}/people`, {
            person, positionId
        });
    }
}