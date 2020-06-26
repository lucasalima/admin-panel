import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit {
  @Input('disabled') isDisabled: boolean;

  constructor() {}

  ngOnInit() {}
}
