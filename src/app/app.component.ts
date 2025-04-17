import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadSales } from './store/sales/sales.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
constructor(private readonly store: Store){}

  ngOnInit(): void {
    this.store.dispatch(loadSales())
  }
  title = 'enterprise-crm';
}
