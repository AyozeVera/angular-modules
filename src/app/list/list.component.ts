import { Component, Directive, OnInit, Input, Output, EventEmitter, ContentChildren } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'ng-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  @Input() items: Object[]
  @Output() public onSelect = new EventEmitter();

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.setItems(this.items)
    this.listService.currentSubject.subscribe((current) => this.onSelect.emit(current))
  }

}
