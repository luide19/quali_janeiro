import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FuncaoHandlerComponent } from "./app/funcao/funcao-handler/funcao-handler.component";
import { FuncaoListComponent } from "./app/funcao/funcao-list/funcao-list.component";
import { NovoFuncaoComponent } from "./app/funcao/novo-funcao/novo-funcao.component";
import { HomeComponent } from "./app/home/home.component";
import { NovoPapeisComponent } from "./app/papeis/novo-papeis/novo-papeis.component";
import { PapeisHandlerComponent } from "./app/papeis/papeis-handler/papeis-handler.component";
import { PapeisListComponent } from "./app/papeis/papeis-list/papeis-list.component";
import { NovoPerfilUsuarioComponent } from "./app/perfil-usuario/novo-perfil-usuario/novo-perfil-usuario.component";
import { PerfilUsuarioHandlerComponent } from "./app/perfil-usuario/perfil-usuario-handler/perfil-usuario-handler.component";
import { PerfilUsuarioListComponent } from "./app/perfil-usuario/perfil-usuario-list/perfil-usuario-list.component";
import { SetorHandlerComponent } from "./app/setor/setor-handler/setor-handler.component";
import { SetorListComponent } from "./app/setor/setor-list/setor-list.component";
import { NovoSistemasComponent } from "./app/sistemas/novo-sistemas/novo-sistemas.component";
import { SistemasHandlerComponent } from "./app/sistemas/sistemas-handler/sistemas-handler.component";
import { SistemasListComponent } from "./app/sistemas/sistemas-list/sistemas-list.component";
import { NovoTipoDeUsuarioComponent } from "./app/tipo-de-usuario/novo-tipo-de-usuario/novo-tipo-de-usuario.component";
import { TipoDeUsuarioHandlerComponent } from "./app/tipo-de-usuario/tipo-de-usuario-handler/tipo-de-usuario-handler.component";
import { TipoDeUsuarioListComponent } from "./app/tipo-de-usuario/tipo-de-usuario-list/tipo-de-usuario-list.component";
import { NovoUsuarioComponent } from "./app/usuario/novo-usuario/novo-usuario.component";
import { UsuariosHandlerComponent } from "./app/usuario/usuarios-handler/usuarios-handler.component";
import { UsuariosListComponent } from "./app/usuario/usuarios-list/usuarios-list.component";
import { PessoasComponent } from "./app/pessoas/pessoas.component";

const routes: Routes = [
    {path: 'Home', component:HomeComponent},
    {path: 'FuncaoHandler', component:FuncaoHandlerComponent},
    {path: 'FuncaoList', component:FuncaoListComponent},
    {path: 'NovoFuncao', component:NovoFuncaoComponent},
    {path: 'PerfilUsuarioHandler', component:PerfilUsuarioHandlerComponent},
    {path: 'PerfilUsuarioList', component:PerfilUsuarioListComponent},
    {path: 'NovoPerfilUsuario', component:NovoPerfilUsuarioComponent},
    {path: 'TipoDeUsuarioHandler', component:TipoDeUsuarioHandlerComponent},
    {path: 'TipoDeUsuarioList', component:TipoDeUsuarioListComponent},
    {path: 'NovoTipoDeUsuario', component:NovoTipoDeUsuarioComponent},
    {path: 'SetorHandler', component:SetorHandlerComponent},
    {path: 'SetorList', component:SetorListComponent},
    {path: 'SistemasHandler', component:SistemasHandlerComponent},
    {path: 'SistemasList', component:SistemasListComponent},
    {path: 'NovoSistemas', component:NovoSistemasComponent},
    {path: 'UsuariosHandler', component:UsuariosHandlerComponent},
    {path: 'UsuariosList', component:UsuariosListComponent},
    {path: 'NovoUsuario', component:NovoUsuarioComponent},
    {path: 'PapeisHandler', component:PapeisHandlerComponent},
    {path: 'PapeisList', component:PapeisListComponent},
    {path: 'NovoPapeis', component:NovoPapeisComponent},
    {path: 'Pessoas', component:PessoasComponent}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    
}
