import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentElement } from 'src/app/catalog/state/selectors';

@Component({
  selector: 'app-catalog-info',
  templateUrl: './catalog-info.component.html',
  styleUrls: ['./catalog-info.component.scss']
})
export class CatalogInfoComponent implements OnInit {
  public data$ = this.store.select(selectCurrentElement);
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.data$.subscribe((res)=>{
      console.log('asd',res)
    })
  }

}
