import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  currentSubject: Subject<Object> = new Subject<Object>();
  itemsSubject: Subject<any> = new Subject<any>();

  items: Object[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
  ]
  current: Object = {}

  constructor() {
    this.currentSubject.subscribe((current) => this.current = current)
    this.itemsSubject.subscribe((items) => this.current = items)
  }

  setCurrent(item: Object): any {
    this.currentSubject.next(item)
  }
}
