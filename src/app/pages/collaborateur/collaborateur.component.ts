import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CollaborateurService } from 'src/app/Services/collaborateur.service';

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

  constructor(private http: HttpClient,     private colService: CollaborateurService
    ) { 
    this.collaborateurs = [];
  }

  ngOnInit(): void {

    this.getAllCollaborateurs();
  }
  getAllCollaborateurs(){
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



  supprimerCollaborateur(id: number): void {
    this.colService.deleteCollaborateur(id)
      .subscribe(() => {
        console.log('Collaborateur supprimé avec succès');
        this.getAllCollaborateurs();
      }, (error) => {
        console.error('Erreur lors de la suppression du collaborateur : ', error);
      });
  }

 
}