import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HU-7';

  aprendiz = 'Andrés García';
  lider = 'Ana María Garzón';
  fecha : Date = new Date;
  
  accion = new FormControl('');

  actividad = new FormControl('', [Validators.required]);

  responsable = new FormControl('neider');

  estado= new FormControl('', [Validators.required]);

  fechaLimite = new FormControl('', [Validators.required]);

  observaciones = new FormControl('');

  accionMejoraForm = new FormGroup(
    {
      accion: this.accion,
      actividad: this.actividad,
      responsable: this.responsable,
      estado:this.estado,
      fechaLimite: this.fechaLimite,
      observaciones: this.observaciones,

    }
  );
  
  accionMejora(){
    console.log(this.accionMejoraForm.value)
  }


}


