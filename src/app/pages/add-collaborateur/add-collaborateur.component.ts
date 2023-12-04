import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  providers: [MessageService],
  styleUrls: ['./add-collaborateur.component.css']
})
export class AddCollaborateurComponent implements OnInit {


    informations!: FormGroup; // Indication que 'formulaire' sera initialisé dans le constructeur
    qualifications!: FormGroup;
    contrat!: FormGroup;
    grade!: FormGroup;
    autres!: FormGroup;
    date: Date | undefined;

    niveauxEtude = [
        { label: 'Licence', value: 'Licence' },
        { label: 'Master', value: 'Master' },
        { label: 'Ingénieur', value: 'Ingénieur' },
      ];

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

      poste = [
        { label: 'développement', value: 'développement' },
    { label: 'test et qualité', value: 'test et qualité' },
    { label: 'Help Desk', value: 'Help Desk' },
      ];

      responsable = [
        { label: 'Directeur RH', value: 'Directeur RH' },
    { label: 'Directeur technique', value: 'Directeur technique' },
      ];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
          this.informations = this.formBuilder.group({
            nom: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            cin: ['', Validators.required],
            dateNaissance: [null, Validators.required], 
            adresse: ['', Validators.required], 
            numeroCompte: ['', Validators.required], 
            telephone: ['', Validators.required], 
            numeroSecu: ['', Validators.required], 
            niveauEtude: ['', Validators.required],
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
            
          });


        }
  
        onSubmit()
         {
         if (this.informations.valid) {
            // Traitez les données du formulaire ici
             console.log('Valeurs du formulaire:', this.informations.value);
           } else {
            // Gérer le cas où le formulaire n'est pas valide
            // Par exemple, afficher des messages d'erreur
        }

}
}
