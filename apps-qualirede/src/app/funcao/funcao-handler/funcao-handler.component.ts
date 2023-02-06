import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcao-handler',
  templateUrl: './funcao-handler.component.html',
  styleUrls: ['./funcao-handler.component.css']
})
export class FuncaoHandlerComponent {
  
  constructor(private fb:FormBuilder) {
    this.funcao = this.fb.group({
      bloqueado:this.fb.array([]),
      funcao: this.fb.array([]),
      TipoDeUsuario: this.fb.array([]),
      Setor: this.fb.array([])
    })
   }

  funcao: FormGroup
  ngOnInit(): void {
  }

  Funcao: Array<any> = [
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

  TipoDeUsuario: Array<any> = [
    {name: "", value:""},
    {name: 'Cliente', value: 'Cliente'},
    {name: 'Colaborador', value: 'Colaborador'},
    {name: 'Prestador', value: 'Prestador'}
  ]

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
