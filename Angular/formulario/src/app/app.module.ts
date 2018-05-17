import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';


import {AppComponent} from './app.component';
import {EmpresaComponent} from './empresa/empresa.component';
import {EnderecoComponent} from './endereco/endereco.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    EnderecoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldControl
  ],
  providers: [
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldControl
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

