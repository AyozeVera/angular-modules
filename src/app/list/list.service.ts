import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ListService {
  items: Object[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
  ]
  current: Object = {}

  constructor() { }

  getItems(): any {
    const itemsObservable = new Observable(observer => {
      observer.next(this.items)
    })

    return itemsObservable
  }

  getCurrent(): any {
    const currentObservable = new Observable(observer => {
      observer.next(this.current)
    })

    return currentObservable
  }

  setCurrent(item: Object): any {
    this.current = item
  }
}
