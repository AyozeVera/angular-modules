import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-modules';
  selected = {};

  defaultItems = [
    { name: 'Item A' },
    { name: 'Item B' },
    { name: 'Item C' },
    { name: 'Item D' },
  ]
  onSelect(data) {
    this.selected = data
  }
}
