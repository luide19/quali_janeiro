import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-de-usuario-handler',
  templateUrl: './tipo-de-usuario-handler.component.html',
  styleUrls: ['./tipo-de-usuario-handler.component.css']
})
export class TipoDeUsuarioHandlerComponent {
  ngOnInit(): void {
  }
  constructor(private fb:FormBuilder) { 
    this.tipo_de_usuario_form = this.fb.group({
      tipoDeUsuario: this.fb.array([]),
    })
  }

  tipo_de_usuario_form:FormGroup

  TipoDeUsuario: Array<any> = [
    {name: "", value:""},
    {name: 'Cliente', value: 'Cliente'},
    {name: 'Colaborador', value: 'Colaborador'},
    {name: 'Prestador', value: 'Prestador'}
  ]
}
