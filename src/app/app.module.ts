import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableViewComponent } from './table-view/table-view.component';
import { LanguagePipe } from './pipes/language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailComponent,
    PopUpComponent,
    TableViewComponent,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
