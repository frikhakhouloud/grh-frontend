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
          // niveauEtude: ['',],
          nom: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          cin: ['', Validators.required],
          dateNaissance: [null, Validators.required],
          adresse: ['', Validators.required],
          numeroCompte: ['', Validators.required],
          telephone: ['', Validators.required],
          numeroSecu: ['', Validators.required],
          niveauEtude: [''],
          //niveauEtude: ['', Validators.required],
          certification: [''],
          natureEtude: [''],
          anneeExperience: [''],
          contratType: ['', Validators.required],
          salaireBase: [null],
          avantagesSalaire: ['', Validators.required],
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



  onSubmit() {
    if (this.informations.valid) {
      // Traitez les données du formulaire ici
      console.log('Valeurs du formulaire:', this.informations.value);
    } else {
      // Gérer le cas où le formulaire n'est pas valide
      // Par exemple, afficher des messages d'erreur
    }
  }
  ajout(){
    
  }

}
