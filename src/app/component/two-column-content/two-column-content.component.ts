import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-column-content',
  templateUrl: './two-column-content.component.html',
  styleUrls: ['./two-column-content.component.css']
})
export class TwoColumnContentComponent implements OnInit {

  @Input() label: string;
  @Input() info: string;

  constructor() { }

  ngOnInit() {
  }

}
