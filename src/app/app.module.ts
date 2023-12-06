import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollaborateurComponent } from './pages/collaborateur/collaborateur.component';
import { TimelineModule } from 'primeng/timeline';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { AddCollaborateurComponent } from './pages/add-collaborateur/add-collaborateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { AjoutCollabComponent } from './pages/ajout-collab/ajout-collab.component';


@NgModule({
  
  declarations: [
    AppComponent,
    CollaborateurComponent,
    AddCollaborateurComponent,
    AjoutCollabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ButtonModule,
    FieldsetModule,
    CardModule,
    TimelineModule,
    PanelModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    FileUploadModule,
    RippleModule,
    ToastModule,
    DialogModule,
    ToolbarModule,
    RatingModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ReactiveFormsModule,
    CalendarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
