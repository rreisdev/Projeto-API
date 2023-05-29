import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarClienteComponent } from './atualizar-cliente/atualizar-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModelsComponent } from './models/models.component';


@NgModule({
  declarations: [
    AppComponent,
    AtualizarClienteComponent,
    CadastrarClienteComponent,
    ListarClienteComponent,
    MenuComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  
   ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
