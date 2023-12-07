import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CollaborateurService } from 'src/app/Services/collaborateur.service';

@Component({
  selector: 'app-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  providers: [MessageService],
  styleUrls: ['./add-collaborateur.component.css'],
})
export class AddCollaborateurComponent implements OnInit {
 
 
  informations!: FormGroup; 
  date: Date | undefined;
  niveauEtude: any[]= [''];
  contratType: any[]= [''];
  avantagesSalaire: any[]= [''];
  departement :any[]= [''];
  responsable :any[]= [''];
  poste :any 


  constructor(
    private formBuilder: FormBuilder,
    private colService: CollaborateurService
  ) 
  {
  }

  ngOnInit() {
    this.createForm();
    this.getNiveauxEtude();
    this.getContrat();
    this.getAvantage();
    this.getDepartement();
    this.getResponsable();
   
  
    this.poste = [
      { label: 'développement', value: 'développement' },
      { label: 'test et qualité', value: 'test et qualité' },
      { label: 'Help Desk', value: 'Help Desk' },
    ];
  }



  createForm(): void {
      this.informations = this.formBuilder.group({
        cin: ['', Validators.required],
        nom: ['', Validators.required],
        numCompte: ['', Validators.required],
        numSecSocial: ['', Validators.required],
        telephone: ['', Validators.required],
        dateNaissance: [null, ],
        email: ['', [Validators.required, Validators.email]],
        adresse: ['', Validators.required],
        natureEtude: [''],
        certification: [''],
        anneeExperience: [''],

          niveauEtude: [''],
          contratType: ['', ],
          salaireBase: [null],
          avantagesSalaire: ['',],
          dateDebutContrat: [null],
          departement: [''],
          poste: [''],
          responsable: [''],
          recommandation: [''],
          collaborateur: [''],
          commentaire: [''],
          date: [''],
        });
    }


 

  getNiveauxEtude() {
    this.colService
      .getNiveauE()
      .subscribe((data) => (this.niveauEtude = data));
  }

  getContrat() {
    this.colService
      .getContrat()
      .subscribe((data) => (this.contratType = data));
  }

  getAvantage() {
    this.colService
      .getAvantage()
      .subscribe((data) => (this.avantagesSalaire = data));
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

  // onDepartementChange(event: any) {
  //   if(event.value==='Informatique'){
  //     this.poste = [
  //       { label: 'développement', value: 'développement' },
  //       { label: 'test et qualité', value: 'test et qualité' }
  //     ];
  //   }
  //   if(event.value==='Ressources humaines'){
       
  //         this.poste = [
     
  //     { label: 'Help Desk', value: 'Help Desk' },
  //   ];
  // }}





  onSubmit(): void {
    console.log('Tentative de soumission du formulaire...');
    if (this.informations.valid) {
      const formData = this.informations.value;
      console.log('Données du formulaire:', formData); 
      this.colService.ajouterCollaborateur(formData)
        .subscribe((response) => {
          console.log('Collaborateur ajouté avec succès:', response);
        }, (error) => {
          console.error('Erreur lors de l\'ajout du collaborateur:', error);
        });
    } else {
      console.log('Formulaire invalide, vérifiez les champs.');
    }
    this.ngOnInit();
  }

 

}
