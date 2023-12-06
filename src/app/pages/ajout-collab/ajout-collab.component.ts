import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-ajout-collab',
  templateUrl: './ajout-collab.component.html',
  styleUrls: ['./ajout-collab.component.css']
})
export class AjoutCollabComponent implements OnInit {
  value: string = '';
  
  niveauxEtude: any[];

 
  contratType = [
    { label: 'SIVP', value: 'SIVP' },
    { label: 'CDI', value: 'CDI' },
    { label: 'CDD', value: 'CDD' },
    { label: 'Stage', value: 'Stage' },
  ];

  avantagesSalaire = [
    { label: 'Prime', value: 'Prime' },
    { label: 'Tickets resto', value: 'Tickets resto' },
  ];

  departement = [
    { label: 'Informatique', value: 'Informatique' },
{ label: 'Ressources humaines', value: 'Ressources humaines' },
  ];

  responsable = [
    { label: 'Directeur RH', value: 'Directeur RH' },
{ label: 'Directeur technique', value: 'Directeur technique' },
  ];

  firstFormGroup = this.formBuilder.group({
    cin: [0, [Validators.required,]],    
    nom: ['', Validators.required],
    numCompte: [0, ],
    numSecurite: [0, ],
    dateNaissance: [new Date(), Validators.required],
    telephone: [0, Validators.required],
    adresse: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    natureEtude: [''],
    certification: ['', Validators.required],
    niveauEtude: ['', Validators.required],
    anneeExperience: [0, Validators.required],
    contratType: ['', Validators.required],
    avantagesSalaire: ['', Validators.required],
    salaireBase: [0, Validators.required],
    dateDebutContrat: [new Date(), Validators.required],
    departement: [''],
    responsable: [''],
    // docCin: ['test', Validators.required],
    // docDiplome: ['test', Validators.required],
    // idPoste: [0],
    // idContrat: [0],
    // recommendation: ['test'],
    // commentaire: ['test'],
    // idNiveauEtude: [0],
    // idNatureEtude: [0],

    // collaborateur: false,

  });


  constructor(private formBuilder: FormBuilder, private http:HttpClient) { 
    this.niveauxEtude =[''];
  }

  ngOnInit(): void {
  this.getNiveauxEtude();
  this.createForm();
  // this.http.get("http://localhost:8081/NiveauEtude/GetAll")
// .subscribe(data=>{
// this.niveauxEtude=data;
// },err=>{
// console.log(err);
// })

  }


  createForm(): void {
    this.firstFormGroup = this.formBuilder.group({
      niveauEtude: [''] // Peut être initialisé avec une valeur par défaut si nécessaire
    });
  }
  getNiveauxEtude(): void {
    this.http.get<any[]>('http://localhost:8081/NiveauEtude/GetAll')
      .subscribe(data => {
        this.niveauxEtude = data.filter(niveau => niveau.niveauEtude !== null);
      });
  }
  }


