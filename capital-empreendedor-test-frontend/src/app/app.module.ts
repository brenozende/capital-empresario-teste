import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientListComponent } from './client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { ClientOpportunitiesComponent } from './client-opportunities/client-opportunities.component';
import { TableModule } from 'primeng/table';
import { ClientEditComponent } from './client-edit/client-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientOpportunitiesComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
