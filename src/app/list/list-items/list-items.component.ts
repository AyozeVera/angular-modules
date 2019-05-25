import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items: Object[] = []

  constructor(private itemsService: ListService) { }

  ngOnInit() {
    // const itemsObservable = this.itemsService.getItems();
    // itemsObservable.subscribe((items: Object[]) => {
    //   this.items = items;
    // });
  }

  onItemSelect(item: Object) {
    this.itemsService.setCurrent(item);
  }

}
