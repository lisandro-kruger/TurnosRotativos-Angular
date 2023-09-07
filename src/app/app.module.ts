import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObtenerEmpleadosComponent } from './obtener-empleados/obtener-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ObtenerEmpleadosComponent,
    CrearEmpleadoComponent,
    DetalleEmpleadoComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
