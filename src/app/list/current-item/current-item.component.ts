import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss']
})
export class CurrentItemComponent implements OnInit {

  // current: Object = {}

  constructor(private itemsService: ListService) { }

  ngOnInit() {
  }

  hasCurrent() {
    return JSON.stringify(this.itemsService.current) !== "{}"
  }

}
