import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id: any;
  nroDocumento: any
  nombre: any;
  apellido: any;
  email: any;
  fechaNacimiento: any;
  fechaIngreso: any;
  fechaCreacion: any;
  empleado:Empleado = new Empleado();
  empleadoForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private empleadoServicio:EmpleadoService,private router:Router,private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params['id'];
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.id = dato.id;
      this.nroDocumento = dato.nroDocumento;
      this.nombre = dato.nombre;
      this.apellido = dato.apellido;
      this.email = dato.email;
      this.fechaNacimiento = dato.fechaNacimiento;
      this.fechaIngreso = dato.fechaIngreso;
      this.fechaCreacion = dato.fechaCreacion;
    },error => console.log(error));
  }

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

  onSubmit(){
    this.empleado.id = this.empleadoForm.value.id;
    this.empleado.nroDocumento = this.empleadoForm.value.nroDocumento;
    this.empleado.nombre = this.empleadoForm.value.nombre;
    this.empleado.apellido = this.empleadoForm.value.apellido;
    this.empleado.email = this.empleadoForm.value.email;
    this.empleado.fechaNacimiento =this.empleadoForm.value.fechaNacimiento;
    this.empleado.fechaIngreso = this.empleadoForm.value.fechaIngreso;
    this.empleado.fechaCreacion = '';
    this.empleadoServicio.actualizarEmpleado(this.id,this.empleado).subscribe(dato => {
      console.log(this.empleado);
      this.router.navigate(['/empleados']);
    },error => console.log(error));
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

