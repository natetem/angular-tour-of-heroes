import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitationsComponent } from './citations/citations.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [CitationsComponent],
  imports: [CommonModule, MatCardModule],
})
export class CitationModule {}
