import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(private itemsService: ListService) { }

  ngOnInit() {
  }

  get items(): Object[] {
    return this.itemsService.items
  }

  onItemSelect(item: Object) {
    this.itemsService.setCurrent(item);
  }

}
