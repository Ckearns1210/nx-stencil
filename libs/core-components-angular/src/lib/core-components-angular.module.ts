import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from '../generated/directives';
import { defineCustomElements } from '@nx-stencil/core-components/loader';

defineCustomElements();

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class CoreComponentsAngularModule {}
