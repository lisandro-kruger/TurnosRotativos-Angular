import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-obtener-empleados',
  templateUrl: './obtener-empleados.component.html',
  styleUrls: ['./obtener-empleados.component.css'],
})
export class ObtenerEmpleadosComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadoServicio: EmpleadoService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;
    }, error => console.log(error));
  }

  verDetalle(id: number){
    this.router.navigate(['detalle-empleado', id]);
  }

  actualizarEmpleado(id: number){
    this.router.navigate(['actualizar-empleado', id]);
  }

  eliminarEmpleado(id: number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    })
  }
}
