import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObtenerEmpleadosComponent } from './obtener-empleados/obtener-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  {path: 'empleados', component: ObtenerEmpleadosComponent},
  {path: 'crear-empleado', component: CrearEmpleadoComponent},
  {path: 'detalle-empleado/:id', component: DetalleEmpleadoComponent},
  {path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  {path: '', redirectTo: 'empleados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
