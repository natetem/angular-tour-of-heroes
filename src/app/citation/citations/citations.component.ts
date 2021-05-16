import { Component, OnInit } from '@angular/core';
import { Citation } from 'src/app/model/citation';
import { CitationService } from 'src/app/service/citation.service';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.css'],
})
export class CitationsComponent implements OnInit {
  citations: Citation[] = [];

  constructor(private citationService: CitationService) {}

  ngOnInit(): void {
    this.getCitations();
  }

  getCitations(): void {
    this.citationService
      .getCitations()
      .subscribe((citations) => (this.citations = citations));
  }
}
