import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NovotipodeusuarioService } from './novotipodeusuario.service';
@Component({
  selector: 'app-novo-tipo-de-usuario',
  templateUrl: './novo-tipo-de-usuario.component.html',
  styleUrls: ['./novo-tipo-de-usuario.component.css']
})
export class NovoTipoDeUsuarioComponent {
  constructor(private service:NovotipodeusuarioService, private fb:FormBuilder) { 
    this.novo_tipo_de_usuario = this.fb.group({
      bloqueado: this.fb.array([]),
      nome: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  novo_tipo_de_usuario:FormGroup;
  errormsg:any;
  sucessmsg:any;

  //bloqueado
  bloqueado(e:any){
    const bloqueado: FormArray = this.novo_tipo_de_usuario.get('bloqueado') as FormArray
    if (e.target.checked) {
      bloqueado.push(new FormControl(e.target.value))
    }
  }

  //enviar 
  userSubmit(){
    if(this.novo_tipo_de_usuario.valid){
      console.log(this.novo_tipo_de_usuario.value)
      this.service.createNovoTipoDeUsuario(this.novo_tipo_de_usuario.value).subscribe((res)=>{
        console.log(res,'res==>')
        this.novo_tipo_de_usuario.reset()
        
        this.sucessmsg = res.message
      })
    }
    else{
      this.errormsg = 'preencha todas as lacunas'
    }
    console.log(this.novo_tipo_de_usuario.value)
}
}
