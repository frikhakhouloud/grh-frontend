import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollaborateurService } from 'src/app/Services/collaborateur.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  providers: [MessageService],
  styleUrls: ['./add-collaborateur.component.css'],

})
export class AddCollaborateurComponent implements OnInit {
  informations!: FormGroup;
  date: Date | undefined;
  niveauEtude: any[] = [''];
  contratType: any[] = [''];
  avantage: any[] = [''];
  departement: any[] = [''];
  responsable: any[] = [''];
  poste: any;
  collab:any
  idStorage:any
  isUpdated=false

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private colService: CollaborateurService,
    private router:Router
  ) {}

  ngOnInit() {
    
    this.createForm();
    this.getNiveauxEtude();
    this.getContrat();
    this.getAvantage();
    this.getDepartement();
    this.getResponsable();
    this.getPoste();
    this.getCollab();
    if (window.localStorage.getItem("operation")=="SHOW") {
      this.informations.disable()
      
    }

  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Collaborateur is added' });
  }
  getCollab() {
    let idStorage = window.localStorage.getItem("idA");
    this.colService.getCollaborateur(idStorage).subscribe(data => {
      this.collab = data;
      this.informations.patchValue({
        cin: data.cin,
        nom: data.nom,
        numCompte: data.numCompte,
        numSecSocial: data.numSecSocial,
        telephone: data.telephone,
        dateNaissance: new Date(data.dateNaissance) ,
        email: data.email,
        adresse: data.adresse,
        natureEtude:data.natureEtude,
        certification: data.certification,
        anneeExperience: data.anneeExperience,
        idNiveauEtude:data.idNiveauEtude,
        idTypeContrat:data.idTypeContrat,
        salaireBase:data.salaireBase,
        idAvantageSalaire:data.idAvantageSalaire,
        dateDebutContrat:new Date(data.dateNaissance),
        idDepartement:data.idDepartement,
        idPoste:data.idPoste,
        idResponsable:data.idResponsable,
      });
      console.log(data);
    });
  }
  createForm(): void {
    this.informations = this.formBuilder.group({
      cin: [''],
      nom: [''],
      numCompte: [''],
      numSecSocial: [''],
      telephone: [''],
      dateNaissance: [null],
      email: [''],
      adresse: [''],
      natureEtude: [''],
      certification: [''],
      anneeExperience: [''],
      idNiveauEtude: [''],
      idTypeContrat: [''],
      salaireBase: [null],
      idAvantageSalaire: [''],
      dateDebutContrat: [null],
      idDepartement: [''],
      idPoste: [''],
      idResponsable: [''],
      recommandation: [''],
      collaborateur: [''],
      commentaire: [''],
      date: [''],
    });
  }

  getNiveauxEtude() {
    this.colService.getNiveauE().subscribe((data) => (this.niveauEtude = data));
  }

  getContrat() {
    this.colService.getContrat().subscribe((data) => (this.contratType = data));
  }

  getAvantage() {
    this.colService
      .getAvantage()
      .subscribe((data) => (this.avantage = data));
  }

  getDepartement() {
    this.colService
      .getDepartement()
      .subscribe((data) => (this.departement = data));
  }
  getResponsable() {
    this.colService
      .getResponsable()
      .subscribe((data) => (this.responsable = data));
  }
  getPoste() {
    this.colService.getPoste().subscribe((data) => (this.poste = data));
  }

 

  onSubmit(): void {
    console.log('Tentative de soumission du formulaire...');
    if (this.informations.valid) {
      const formData = this.informations.value;
      console.log('Données du formulaire:', formData);
      this.colService.addCollaborateur(formData).subscribe(
        (response) => {
          this.show();
          console.log('Collaborateur ajouté avec succès:', response);
          setTimeout(() => {
            this.router.navigate(['/collaborateur']);
          }, 1500);
        },
        (error) => {
          console.error("Erreur lors de l'ajout du collaborateur:", error);
        }
      );
    } else {
      console.log('Formulaire invalide, vérifiez les champs.');
    }
    this.ngOnInit();
  }

  onEdit(): void {
    console.log('Tentative de soumission du formulaire...');
    if (this.informations.valid) {
      const formData = this.informations.value;
      console.log('Données du formulaire:', formData);
      const collaborateurId = this.collab.id;
      this.colService.updateCollaborateur(formData, collaborateurId).subscribe(
        (response) => {
          this.show();
          console.log('Collaborateur modifié avec succès:', response);
          setTimeout(() => {
            this.router.navigate(['/collaborateur']);
          }, 1500);
        },
        (error) => {
          console.error("Erreur lors de la modification du collaborateur:", error);
        }
      );
    } else {
      console.log('Formulaire invalide, vérifiez les champs.');
    }
    this.ngOnInit();
  }

  onSubmitAction(){
    if (window.localStorage.getItem("operation")=="EDIT") {
      this.onEdit()
    } else if (window.localStorage.getItem("operation")=="CREATE") {
      this.onSubmit();
    }
    this.ngOnInit();

  }
  reset(){
    this.informations.reset()
    window.scroll(0, 0);
  }
   
}
