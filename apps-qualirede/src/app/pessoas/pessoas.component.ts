import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {
  constructor(private service: PessoasService, private fb: FormBuilder){
    this.pessoas = this.fb.group({
      nome:  ['', Validators.required],
      login: ['', Validators.required],
      cpf:   ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      bloqueado: this.fb.array([])
    })
  }

  //bloqueado
  bloqueado(e:any){
    const bloqueado: FormArray = this.pessoas.get('bloqueado') as FormArray
    if (e.target.checked) {
      bloqueado.push(new FormControl(e.target.value))
    }

  }

  //enviar 
  userSubmit(){
    if(this.pessoas.valid){
      console.log(this.pessoas.value)
      this.service.pessoas(this.pessoas.value).subscribe((res)=>{
        console.log(res,'res==>')
        this.pessoas.reset()
        
        this.sucessmsg = res.message
      })
    }
    else{
      this.errormsg = 'preencha todas as lacunas'
    }
    console.log(this.pessoas.value)
}

  pessoas:FormGroup;
  errormsg:any;
  sucessmsg:any;
  ngOnInit(): void {}

}
