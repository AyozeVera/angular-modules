import { Component, OnInit, Input } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: Object[]

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.setItems(this.items)
  }

}
