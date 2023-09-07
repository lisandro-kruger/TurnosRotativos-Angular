import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  id: any;
  nroDocumento: any
  nombre: any;
  apellido: any;
  email: any;
  fechaNacimiento: any;
  fechaIngreso: any;
  fechaCreacion: any;
  
  constructor(private router: ActivatedRoute, private empleadoServicio: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.nroDocumento = dato.nroDocumento;
      this.nombre = dato.nombre;
      this.apellido = dato.apellido;
      this.email = dato.email;
      this.fechaNacimiento = dato.fechaNacimiento;
      this.fechaIngreso = dato.fechaIngreso;
      this.fechaCreacion = dato.fechaCreacion;
    }, error => console.log(error));
  }

}
