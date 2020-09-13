import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPosition } from '../interfaces/position.interface';

@Injectable()
export class PositionsService {
    constructor(private http: HttpClient) {}
    
    getAll() {
        return this.http.get<IPosition[]>(`${environment.apiUrl}/positions`);
    }
    get(id: string) {
        return this.http.get<IPosition>(`${environment.apiUrl}/positions/${id}`);
    }
}