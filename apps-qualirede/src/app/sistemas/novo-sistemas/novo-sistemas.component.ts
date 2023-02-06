import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NovosistemasserviceService } from './novosistemasservice.service';

@Component({
  selector: 'app-novo-sistemas',
  templateUrl: './novo-sistemas.component.html',
  styleUrls: ['./novo-sistemas.component.css']
})
export class NovoSistemasComponent {
  constructor(private service: NovosistemasserviceService, private fb:FormBuilder) { 
    this.novo_sistemas = this.fb.group({
      bloqueado: this.fb.array([]),
      nome:  ['', Validators.required]
    })

  }

  novo_sistemas: FormGroup;
  errormsg:any;
  sucessmsg:any;
  ngOnInit(): void {
  }

  //bloqueado
  bloqueado(e:any){
    const bloqueado: FormArray = this.novo_sistemas.get('bloqueado') as FormArray
    if (e.target.checked) {
      bloqueado.push(new FormControl(e.target.value))
    }
  }

  //enviar 
  userSubmit(){
    if(this.novo_sistemas.valid){
      console.log(this.novo_sistemas.value)
      this.service.create_novo_sistemas(this.novo_sistemas.value).subscribe((res)=>{
        console.log(res,'res==>')
        this.novo_sistemas.reset()
        
        this.sucessmsg = res.message
      })
    }
    else{
      this.errormsg = 'preencha todas as lacunas'
    }
    console.log(this.novo_sistemas.value)
}
}
