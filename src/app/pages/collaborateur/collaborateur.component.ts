import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CollaborateurService } from 'src/app/Services/collaborateur.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css'],
  providers: [MessageService],
})
export class CollaborateurComponent implements OnInit {
  // collaborateurs: any[];
  collaborateursDto: any[];
  salaireMoyenne: any[];
  piramideAge: any[];
  masseSalariale: any[];
  jasper: any[];
  events: any[] = [
    { status: 'En cours', date: '2023-11-24' },
    { status: 'Terminé', date: '2023-11-20' },
    { status: 'À venir', date: '2023-12-01' },
  ];

  constructor(
    private messageService: MessageService,
    private colService: CollaborateurService,
    private router: Router
  ) {
    // this.collaborateurs = [];
    this.collaborateursDto = [];
    this.salaireMoyenne = [];
    this.piramideAge = [];
    this.masseSalariale = [];
    this.jasper = [];
  }

  ngOnInit(): void {
    // this.getAllCollaborateurs();
    this.getAllCollaborateursDto();
    this.getSalaireMoyenne();
    this.getPiramideAge();
    this.getMasseSalariale();
  }

  // getAllCollaborateurs() {
  //   this.colService
  //     .getAllCollaborateurs()
  //     .subscribe((data) => {this.collaborateurs = data;
  //   console.log('Données des collaborateurs :', this.collaborateurs);
  //      },
  //     (error) => {
  //     console.error('Erreur lors de la récupération des collaborateurs :', error);
  //     }
  //      );

  //      }

  getAllCollaborateursDto() {
    this.colService.getAllCollaborateursDto().subscribe(
      (data) => {
        this.collaborateursDto = data;
        console.log('Données des collaborateurs :', this.collaborateursDto);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des collaborateurs :',
          error
        );
      }
    );
  }
  supprimerCollaborateur(id: number): void {
    this.colService.deleteCollaborateur(id).subscribe(
      () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Successful',
          detail: 'Collaborateur is deleted',
          life: 4000,
        });

        console.log('Collaborateur supprimé avec succès');
        this.getAllCollaborateursDto();
      },
      (error) => {
        console.error(
          'Erreur lors de la suppression du collaborateur : ',
          error
        );
      }
    );
  }
  getSalaireMoyenne() {
    this.colService
      .getSalairesMoyenne()
      .subscribe((data) => (this.salaireMoyenne = data));
  }

  getPiramideAge() {
    this.colService
      .getPiramideAge()
      .subscribe((data) => (this.piramideAge = data));
  }
  getMasseSalariale() {
    this.colService
      .getMasseSalariale()
      .subscribe((data) => (this.masseSalariale = data));
  }
  saveId(id: any) {
    window.localStorage.removeItem(id);
    localStorage.setItem('idA', id);
    localStorage.setItem('operation', 'EDIT');
    this.router.navigate(['/addcollab']);
  }
  afficherId(id: any) {
    window.localStorage.removeItem(id);
    localStorage.setItem('idA', id);
    localStorage.setItem('operation', 'SHOW');
    this.router.navigate(['/addcollab']);
  }
  getJasper(id: number): void {
    this.colService.getJasper(id).subscribe(
      (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'report is downloaded',
          life: 4000,
        });
      },
      (error) => {
        console.error('Error downloading report:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'an erreur is occured',
        });
      }
    );
  }

  newCollab(){
    this.router.navigate(['/addcollab']);
    localStorage.setItem('operation', 'CREATE');
    localStorage.removeItem('idA');

  }
}
