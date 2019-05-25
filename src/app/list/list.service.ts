import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable()
export class ListService {
  currentSubject: Subject<Object> = new Subject<Object>();
  itemsSubject: Subject<any> = new Subject<any>();

  items: Object[] = []
  current: Object = {}

  constructor() {
    this.currentSubject.subscribe((current) => this.current = current)
    this.itemsSubject.subscribe((items) => this.items = items)
  }

  setCurrent(item: Object): any {
    this.currentSubject.next(item)
  }
  setItems(items: Object[]): any {
    this.itemsSubject.next(items)
  }
}
