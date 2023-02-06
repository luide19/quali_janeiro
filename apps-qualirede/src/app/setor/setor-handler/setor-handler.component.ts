import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { SetorService } from './setor.service';

@Component({
  selector: 'app-setor-handler',
  templateUrl: './setor-handler.component.html',
  styleUrls: ['./setor-handler.component.css']
})
export class SetorHandlerComponent {

  constructor(private service: SetorService,private fb:FormBuilder) { 
    this.setor = this.fb.group({
      bloqueado: this.fb.array([]),
      nome:  ['', Validators.required]
    })

  }

  setor: FormGroup;
  errormsg:any;
  sucessmsg:any;
  ngOnInit(): void {
  }

  //bloqueado
  bloqueado(e:any){
    const bloqueado: FormArray = this.setor.get('bloqueado') as FormArray
    if (e.target.checked) {
      bloqueado.push(new FormControl(e.target.value))
    }
  }

  //enviar 
  userSubmit(){
    if(this.setor.valid){
      console.log(this.setor.value)
      this.service.setor(this.setor.value).subscribe((res)=>{
        console.log(res,'res==>')
        this.setor.reset()
        
        this.sucessmsg = res.message
      })
    }
    else{
      this.errormsg = 'preencha todas as lacunas'
    }
    console.log(this.setor.value)
}
}
