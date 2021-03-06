import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'list-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['../list.component.scss', './current-item.component.scss']
})
export class CurrentItemComponent implements OnInit {

  constructor(private itemsService: ListService) { }

  ngOnInit() {}

  get current(): Object {
    return this.itemsService.current;
  }

}
