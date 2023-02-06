import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NovousuarioService } from './novousuario.service';
@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent {
  
  constructor(private service:NovousuarioService, private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      perfis: this.fb.array([]),
      nome:  ['', Validators.required],
      login: ['', Validators.required],
      cpf:   ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      bloqueado: this.fb.array([])
    })
  }

//checkboxes dos perfis
  Cadastro: Array<any> = [
    {name: 'Analista de Cadastro', value: 'Cadastro - Analista de Cadastro'},
    {name: 'Administrador',  value: 'Cadastro - Administrador'},
    {name: 'Consulta cadastro online', value: 'Cadastro - Consulta cadastro online'},
    {name: 'Consulta', value: 'Cadastro - Consulta'},
    {name: 'Gestor', value: 'Cadastro - Gestor'},
  ]

  AuditoriaConcorrente: Array<any> = [
    {name: 'Criador', value: 'Auditoria Concorrente- Criador'},
    {name: 'Administrador', value: 'Auditoria Concorrente - Administrador'},
    {name: 'Prestador', value: 'Auditoria Concorrente - Prestador'}
  ]

  Pagamento: Array<any> = [
    {name: 'Validação de Glosas', value: 'Pagamento - Validação de Glosas'},
    {name: 'Pagamento', value: 'Pagamento - Pagamento'},
    {name: 'Aprovação', value: 'Pagamento - Aprovação'},
    {name: 'Contas Médicas', value: 'Pagamento - Contas Médicas'},
    {name: 'Protocolo', value: 'Pagamento - Protocolo'},
    {name: 'Mestre', value: 'Pagamento - Mestre'},
    {name: 'Administrador', value: 'Pagamento - Administrador'},
    {name: 'Consultar Pagamento', value: 'Pagamento - Consultar Pagamento'}
  ]

  RelatorioBI: Array<any> = [
    {name: 'Usuário', value: 'Relatórios BI - Criador'},
    {name: 'Administrador', value: 'Relatórios BI - Administrador'}
  ]

  Credenciamento: Array<any> = [
    {name: 'Administrador', value: 'Credenciamento - Criador'},
    {name: 'Operadora', value: 'Credenciamento  - Administrador'},
    {name: 'Prestador', value: 'Credenciamento  - Prestador'}
  ]

  AIS: Array<any> = [
    {name: 'Agendador', value: 'AIS - Agendador'},
    {name: 'Beneficiário', value: 'AIS - Beneficiário'},
    {name: 'Supervisor', value: 'AIS - Supervisor'},
    {name: 'Administrador', value: 'AIS - Administrador'},
    {name: 'Atendente', value: 'AIS - Atendente'},
    {name: 'Atendente - Liberar Atendimentos', value: 'AIS - Atendente - Liberar Atendimentos'}
  ]

  Core: Array<any> = [
    {name: 'Administrador', value: 'Core - Administrador'}
  ]

  Relacionamento: Array<any> = [
    {name: 'Administrador', value: 'Relacionamento - Administrador'},
    {name: 'Atendente', value: 'Relacionamento - Atendente'},
    {name: 'Backoffice', value: 'Relacionamento - Backoffice'},
    {name: 'Gestor da Área de Negócios', value: 'Relacionamento - Gestor da Área de Negócios'}
  ]

  Relatorios: Array<any> = [
    {name: 'Criador', value: 'Relatórios - Criador'},
    {name: 'Visualizador', value: 'Relatórios - Visualizador'}
  ]

  Cobranca: Array<any> = [
    {name: 'Administrador', value: 'Cobrança - Administrador'},
    {name: 'Gestor', value: 'Cobrança - Gestor'}
  ]

  Setup: Array<any> = [
    {name: 'Administrador', value: 'Setup - Administrador'},
    {name: 'Usuário', value: 'Setup - Usuário'},
    {name: 'SSO Usuário', value: 'Setup - SSO Usuário'}
  ]

  AnaliseDeContas: Array<any> = [
    {name: 'Auditor', value: 'Análise de Contas - Auditor'},
    {name: 'Operadora', value: 'Análise de Contas - Operadora'},
    {name: 'Administrador', value: 'Análise de Contas - Administrador'},
    {name: 'Prestador', value: 'Análise de Contas - Prestador'},
    {name: 'Visualização', value: 'Análise de Contas - Visualização'},
    {name: 'Analista', value: 'Análise de Contas - Analista'},
    {name: 'Gestor', value: 'Análise de Contas - Gestor'}
  ]

  Autorizacao: Array<any> = [
    {name: 'Biometria', value: 'Autorização - Biometria'},
    {name: 'Consulta', value: 'Autorização - Consulta'},
    {name: 'Cadastro de Prestador', value: 'Autorização - Cadastro de Prestador'},
    {name: 'Médico', value: 'Autorização - Médico'},
    {name: 'Gestor', value: 'Autorização - Gestor'},
    {name: 'Gestão da Autorização', value: 'Autorização - Gestão da Autorização'},
    {name: 'Auditor', value: 'Autorização - Auditor'},
    {name: 'Solicitante', value: 'Autorização - Solicitante'},
    {name: 'Administrador', value: 'Autorização - Administrador'},
    {name: 'Intercorrência', value: 'Autorização - Intercorrência'},
    {name: 'Analista', value: 'Autorização - Analista'}
  ]

  Atendimento: Array<any> = [
    {name: 'Agendamento', value: 'Atendimento - Agendamento'},
    {name: 'Médico Solicitante', value: 'Atendimento - Médico Solicitante'},
    {name: 'Prestador', value: 'Atendimento - Prestador'},
    {name: 'Criador', value: 'Atendimento - Administrador'},
    {name: 'Leitura de Biometria', value: 'Atendimento - Leitura de Biometria'},
    {name: 'Execução de Guias', value: 'Atendimento - Execução de Guias'}
  ]

  EditorDeRegras: Array<any> = [
    {name: 'Desenvolvedor', value: 'Editor de Regras - Desenvolvedor'},
    {name: 'Analista', value: 'Editor de Regras - Analista'},
    {name: 'Gerente', value: 'Editor de Regras - Gerente'},
    {name: 'Administrador', value: 'Editor de Regras - Administrador'}
  ]

  Faturamento: Array<any> = [
    {name: 'Administrador', value: 'Faturamento - Administrador'},
    {name: 'Consig', value: 'Faturamento - Consig'}
  ]

  //bloqueado
  bloqueado(e:any){
    const bloqueado: FormArray = this.userForm.get('bloqueado') as FormArray
    if (e.target.checked) {
      bloqueado.push(new FormControl(e.target.value))
    }

  }

  //select 
  option: Array<any> = [
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

  //selecionado
  selecionado: string = ''
  selecionar(event:any){
    this.selecionado = event.target.value
    console.log(this.selecionado)
  }

  //pra marcar todos os checkboxes e por no array
  aplicar(event:any){
    switch (this.selecionado) {
      case 'Cadastro':
        console.log('cadastro-funcionou')        
          this.Cadastro.forEach(c => {
            c.selected = event.target.checked          
            const perfis: FormArray = this.userForm.get('perfis') as FormArray
            if (c.selected) {
              perfis.push(new FormControl(c.value))
            }else{
              let i:number = 0
              perfis.controls.forEach((item:any) => {
                if(item.value == c.value){
                  perfis.removeAt(i)
                  return
                }
                i++
              })
            }
          });
      break;

      case 'Auditoria Concorrente':
        this.AuditoriaConcorrente.forEach(c => {
          c.selected = event.target.checked        
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Pagamento':
        this.Pagamento.forEach(c => {
          c.selected = event.target.checked        
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Relatorios BI':
        this.RelatorioBI.forEach(c => {
          c.selected = event.target.checked       
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Credenciamento':
        this.Credenciamento.forEach(c => {
          c.selected = event.target.checked
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'AIS':
        this.AIS.forEach(c => {
          c.selected = event.target.checked        
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Core':
        this.Core.forEach(c => {
          c.selected = event.target.checked         
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Relacionamento':
        this.Relacionamento.forEach(c => {
          c.selected = event.target.checked         
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Relatorios':
        this.Relatorios.forEach(c => {
          c.selected = event.target.checked          
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Cobranca':
        this.Cobranca.forEach(c => {
          c.selected = event.target.checked        
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Setup':
        this.Setup.forEach(c => {
          c.selected = event.target.checked         
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Analise De Contas':
        this.AnaliseDeContas.forEach(c => {
          c.selected = event.target.checked         
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Autorização':
        this.Autorizacao.forEach(c => {
          c.selected = event.target.checked         
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Atendimento':
        this.Atendimento.forEach(c => {
          c.selected = event.target.checked        
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Editor De Regras':
        this.EditorDeRegras.forEach(c => {
          c.selected = event.target.checked
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      case 'Faturamento':
        this.Faturamento.forEach(c => {
          c.selected = event.target.checked      
          const perfis: FormArray = this.userForm.get('perfis') as FormArray
          if (c.selected) {
            perfis.push(new FormControl(c.value))
          }else{
            let i:number = 0
            perfis.controls.forEach((item:any) => {
              if(item.value == c.value){
                perfis.removeAt(i)
                return
              }
              i++
            })
          }
        });
      break;

      default:
        
        break;
    }   
  }
  
  //listagem do checkbox marcado sem marcar todos
  onCheckboxChange(e:any){
    const perfis: FormArray = this.userForm.get('perfis') as FormArray
    //console.log(perfis)
    if (e.target.checked) {
      perfis.push(new FormControl(e.target.value))
    }else{
      let i:number = 0
      perfis.controls.forEach((item:any) => {
        if(item.value == e.target.value){
          perfis.removeAt(i)
          return
        }
        i++
      })
    }
  
  }
  
  userForm: FormGroup

  ngOnInit(): void {
  }

  errormsg:any;
  sucessmsg:any;

  //enviar 
  userSubmit(){
      if(this.userForm.valid){
        console.log(this.userForm.value)
        this.service.createData(this.userForm.value).subscribe((res)=>{
          console.log(res,'res==>')
          this.userForm.reset()
          
          this.sucessmsg = res.message
        })
      }
      else{
        this.errormsg = 'preencha todas as lacunas'
      }
      console.log(this.userForm.value)
  }
}
