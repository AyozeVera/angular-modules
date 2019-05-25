import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { ListItemsComponent } from '../list/list-items/list-items.component';
import { CurrentItemComponent } from '../list/current-item/current-item.component';
import { ListService } from '../list/list.service';

@NgModule({
  declarations: [ ListComponent, ListItemsComponent, CurrentItemComponent],
  imports: [ CommonModule ],
  exports: [ ListComponent ],
  providers: [ ListService ],
})
export class ListModule { }
