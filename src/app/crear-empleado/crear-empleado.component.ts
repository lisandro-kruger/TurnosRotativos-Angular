import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleado!: Empleado;
  empleadoForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.empleadoForm = this.fb.group({
      nroDocumento: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required, this.validarSoloLetras]),
      apellido: new FormControl('',[Validators.required, this.validarSoloLetras]),
      email: new FormControl('',[Validators.required, this.validarFormatoEmail]),
      fechaNacimiento: new FormControl('',[Validators.required, this.validarFormatoFecha]),
      fechaIngreso: new FormControl('',[Validators.required, this.validarFormatoFecha]),
    });
  }

  guardarEmpleado(){
    const empleado = {
      id: 0,
      nroDocumento: this.empleadoForm.value.nroDocumento,
      nombre: this.empleadoForm.value.nombre,
      apellido: this.empleadoForm.value.apellido,
      email: this.empleadoForm.value.email,
      fechaNacimiento : this.empleadoForm.value.fechaNacimiento,
      fechaIngreso: this.empleadoForm.value.fechaIngreso,
      fechaCreacion: ''
    };

    this.empleadoService.registrarEmpleado(empleado).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['empleados']);
    }, error => console.log(error));
  }

  onSubmit(){
    this.guardarEmpleado();
  }

  validarSoloLetras(control: AbstractControl): { [key: string]: boolean } | null {
    const letrasRegex = /^[a-zA-Z]+$/;
    if (control.value && !letrasRegex.test(control.value)) {
      return { 'soloLetras': true };
    }
    return null;
  }

  validarFormatoEmail(control: AbstractControl): { [key: string]: boolean } | null {
    const emailRegex = /\S+@\S+\.\S+/;
    if (control.value && !emailRegex.test(control.value)) {
      return { 'formatoEmailInvalido': true };
    }
    return null;
  }

  validarFormatoFecha(control: AbstractControl): { [key: string]: boolean } | null {
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (control.value && !fechaRegex.test(control.value)) {
      return { 'formatoFechaInvalido': true };
    }
    return null;
  }

}