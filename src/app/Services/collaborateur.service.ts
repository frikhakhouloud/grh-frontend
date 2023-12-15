import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
private baseUrl = 'http://localhost:8081';
private apiUrl = 'http://localhost:8081/Collaborateurs/add'; // Votre URL

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
 getPoste(): Observable<any> {
  return this.http.get(`${this.baseUrl}/Poste/GetAll`);
 }

deleteCollaborateur(id: number): Observable<void> {
  const url = `${this.baseUrl}/Collaborateurs/Delete/${id}`;
  return this.http.delete<void>(url);
}

  getAllCollaborateurs(): Observable<any> {

    return this.http.get(`${this.baseUrl}/Collaborateurs/GetAll`);
  }
  getAllCollaborateursDto(): Observable<any> {

    return this.http.get(`${this.baseUrl}/Collaborateurs/GetAllDto`);
  }

  addCollaborateur(collaborateurData: any) {
    return this.http.post(this.apiUrl, collaborateurData);
  }

  getSalairesMoyenne(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Collaborateurs/salairesMoyenne`);
  }

  getPiramideAge(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Collaborateurs/piramideAge`);
  }

  getMasseSalariale(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Collaborateurs/masseSalariale`);
  }
  getJasper(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/Collaborateurs/generateReport/${id}`, { responseType: 'blob' });
   }

   updateCollaborateur(collaborateurData: any,id:any): Observable<any> {
    return this.http.put(`${this.baseUrl}/Collaborateurs/Update/${id}`,collaborateurData);
  }

  getCollaborateur(id:any): Observable<any> {

    return this.http.get(`${this.baseUrl}/Collaborateurs/GetId/${id}`);
  }

}
