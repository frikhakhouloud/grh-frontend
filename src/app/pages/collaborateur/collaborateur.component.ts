import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})

export class CollaborateurComponent implements OnInit {
    // public readonly title:string ='Nouveau collaborateur'
  collaborateurs: any[];
  // items: MenuItem[];
  
  events: any[] = [
    { status: 'En cours', date: '2023-11-24' },
    { status: 'Terminé', date: '2023-11-20' },
    { status: 'À venir', date: '2023-12-01' },
  ];
  products: any[] = [
    { code: '001', name: 'Product 1', category: 'Category A', quantity: 10 },
    { code: '002', name: 'Product 2', category: 'Category B', quantity: 20 },
  ];
  constructor(private http: HttpClient) { 
    this.collaborateurs = [];
  }

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:8081/Collaborateurs/GetAll').subscribe(
      (data) => {
        this.collaborateurs = data;
        console.log('Données des collaborateurs :', this.collaborateurs);
      },
      (error) => {
        console.error('Erreur lors de la récupération des collaborateurs :', error);
      }
    );
  }
}