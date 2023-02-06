import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosHandlerComponent } from './usuario/usuarios-handler/usuarios-handler.component';
import { UsuariosListComponent } from './usuario/usuarios-list/usuarios-list.component';
import { NovoUsuarioComponent } from './usuario/novo-usuario/novo-usuario.component';
import { FuncaoHandlerComponent } from './funcao/funcao-handler/funcao-handler.component';
import { FuncaoListComponent } from './funcao/funcao-list/funcao-list.component';
import { NovoFuncaoComponent } from './funcao/novo-funcao/novo-funcao.component';
import { HomeComponent } from './home/home.component';
import { PapeisHandlerComponent } from './papeis/papeis-handler/papeis-handler.component';
import { PapeisListComponent } from './papeis/papeis-list/papeis-list.component';
import { NovoPapeisComponent } from './papeis/novo-papeis/novo-papeis.component';
import { PerfilUsuarioHandlerComponent } from './perfil-usuario/perfil-usuario-handler/perfil-usuario-handler.component';
import { PerfilUsuarioListComponent } from './perfil-usuario/perfil-usuario-list/perfil-usuario-list.component';
import { NovoPerfilUsuarioComponent } from './perfil-usuario/novo-perfil-usuario/novo-perfil-usuario.component';
import { SetorHandlerComponent } from './setor/setor-handler/setor-handler.component';
import { SetorListComponent } from './setor/setor-list/setor-list.component';
import { TipoDeUsuarioHandlerComponent } from './tipo-de-usuario/tipo-de-usuario-handler/tipo-de-usuario-handler.component';
import { TipoDeUsuarioListComponent } from './tipo-de-usuario/tipo-de-usuario-list/tipo-de-usuario-list.component';
import { NovoTipoDeUsuarioComponent } from './tipo-de-usuario/novo-tipo-de-usuario/novo-tipo-de-usuario.component';
import { SistemasHandlerComponent } from './sistemas/sistemas-handler/sistemas-handler.component';
import { SistemasListComponent } from './sistemas/sistemas-list/sistemas-list.component';
import { NovoSistemasComponent } from './sistemas/novo-sistemas/novo-sistemas.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { LeftSidebarComponent } from './pages/left-sidebar/left-sidebar.component';
import { MobileMenuComponent } from './pages/mobile-menu/mobile-menu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from '@angular/common/http';
import { PessoasComponent } from './pessoas/pessoas.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosListComponent,
    UsuariosHandlerComponent,
    NovoUsuarioComponent,
    NovoFuncaoComponent,
    HomeComponent,
    FuncaoListComponent,
    FuncaoHandlerComponent,
    PapeisHandlerComponent,
    PapeisListComponent,
    NovoPapeisComponent,
    PerfilUsuarioHandlerComponent,
    PerfilUsuarioListComponent,
    SetorHandlerComponent,
    SetorListComponent,
    NovoPerfilUsuarioComponent,
    TipoDeUsuarioHandlerComponent,
    TipoDeUsuarioListComponent,
    NovoTipoDeUsuarioComponent,
    SistemasHandlerComponent,
    SistemasListComponent,
    NovoSistemasComponent,
    FooterComponent,
    HeaderComponent,
    LeftSidebarComponent,
    MobileMenuComponent,
    PessoasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
