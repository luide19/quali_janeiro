import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sistemas-handler',
  templateUrl: './sistemas-handler.component.html',
  styleUrls: ['./sistemas-handler.component.css']
})
export class SistemasHandlerComponent {
  constructor(private fb:FormBuilder) {
    this.userSistemas = this.fb.group({
      setor: this.fb.array([])
    })
  }

  
  userSistemas: FormGroup
  ngOnInit(): void {

  }

  selecionado: string = ''
  selecionar(event:any){
    this.selecionado = event.target.value
    console.log(this.selecionado)
  }

  sistemasSubmit(){
    if(this.userSistemas.valid){
      console.log(this.userSistemas.value)
      
    }
    console.log(this.userSistemas.value)
  }

  Setor: Array<any> = [
    {name: "", value:""},
    {name:"Cadastro", value: 'Cadastro'},
    {name:"Auditoria Concorrente", value:"Auditoria Concorrente"},
    {name:"Pagamento", value:"Pagamento"},
    {name:"Relatorios BI", value:"Relatorios BI"},
    {name:"Credenciamento", value:"Credenciamento"},
    {name:"AIS", value:"AIS"},
    {name:"Core", value:"Core"},
    {name:"Relacionamento", value:"Relacionamento"},
    {name:"Relatorios", value:"Relatorios"},
    {name:"Cobranca", value:"Cobranca"},
    {name:"Setup", value:"Setup"},
    {name:"Analise De Contas", value:"Analise De Contas"},
    {name:"Autorização", value:"Autorização"},
    {name:"Atendimento", value:"Atendimento"},
    {name:"Editor De Regras", value:"Editor De Regras"},
    {name:"Faturamento", value:"Faturamento"}
  ]
}
