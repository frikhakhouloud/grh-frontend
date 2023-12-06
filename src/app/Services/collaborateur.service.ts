import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
private baseUrl = 'http://localhost:8081';
  constructor(private http:HttpClient) { }


getNiveauE(): Observable<any> {
  return this.http.get(`${this.baseUrl}/NiveauEtude/GetAll`);
 }
getContrat(): Observable<any> {
  return this.http.get(`${this.baseUrl}/ContratType/GetAll`);
 }
getAvantage(): Observable<any> {
  return this.http.get(`${this.baseUrl}/AvantageSalaire/GetAll`);
 }
 getDepartement(): Observable<any> {
  return this.http.get(`${this.baseUrl}/Departement/GetAll`);
 }
 getResponsable(): Observable<any> {
  return this.http.get(`${this.baseUrl}/Responsable/GetAll`);
 }
}