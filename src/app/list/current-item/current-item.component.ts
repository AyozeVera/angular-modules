import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss']
})
export class CurrentItemComponent implements OnInit {

  constructor(private itemsService: ListService) { }

  ngOnInit() {
  }

  get current(): Object {
    return this.itemsService.current;
}

  hasCurrent() {
    return JSON.stringify(this.current) !== "{}"
  }

}
