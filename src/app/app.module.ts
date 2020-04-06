import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component'
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MyrouteModule } from './myroute/myroute.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ExistuserComponent } from './existuser/existuser.component';
import { NewuserComponent } from './newuser/newuser.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotetakerComponent } from './notetaker/notetaker.component';
import { ListviewComponent } from './listview/listview.component';
import { NoteComponent } from './note/note.component';
import { GridviewComponent } from './gridview/gridview.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotedialogComponent } from './notedialog/notedialog.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ExistuserComponent,
    NewuserComponent,
    DashboardComponent,
    NotetakerComponent,
    ListviewComponent,
    NoteComponent,
    GridviewComponent,
    NotedialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyrouteModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[NotedialogComponent]
})
export class AppModule { 


}
