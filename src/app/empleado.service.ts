import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // URL DEL LADO DEL BACKEND
  private baseURL = "http://localhost:8080/empleado";  

  constructor(private httpClient : HttpClient) { }

  //OBTIENE EL LISTADO DE TODOS LOS EMPLEADOS.
  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  // GUARDAR EMPLEADO
  registrarEmpleado(empleado: Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }

  // OBTENER EMPLEADO POR ID
  obtenerEmpleadoPorId(id: number): Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  // ACTUALIZAR EMPLEADO
  actualizarEmpleado(id: number, empleado: Empleado):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  // ELIMINAR EMPLEADO
  eliminarEmpleado(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
