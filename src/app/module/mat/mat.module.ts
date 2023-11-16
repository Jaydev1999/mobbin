import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

const material = [MatButtonModule, MatTooltipModule];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [material],
})
export class MatModule {}
