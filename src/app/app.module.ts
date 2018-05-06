import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  Injector,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxRatingComponent } from './ngx-rating/ngx-rating.component';
import { NgxRatingListComponent } from './ngx-rating-list/ngx-rating-list.component';
import { NgxRatingElementComponent } from './ngx-rating-element/ngx-rating-element.component';

@NgModule({
  declarations: [
    NgxRatingComponent,
    NgxRatingListComponent,
    NgxRatingElementComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [BrowserModule, MatIconModule, HttpClientModule],
  entryComponents: [NgxRatingComponent]
})
export class AppModule {
  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    private injector: Injector
  ) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
  ngDoBootstrap() {
    const el = createCustomElement(NgxRatingComponent, {
      injector: this.injector
    });
    customElements.define('ngx-rating', el);
  }
}
