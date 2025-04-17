// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-search-ticket',
//   standalone: false,
//   templateUrl: './search-ticket.component.html',
//   styleUrl: './search-ticket.component.scss'
// })
// export class SearchTicketComponent {

// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SupportTicket } from '../../../../../models/SupportTicket';

@Component({
  selector: 'app-search-ticket',
  standalone: false,
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.scss']
})
export class SearchTicketComponent {
  @Input() tickets: SupportTicket[] = [];
  @Output() searchChanged = new EventEmitter<SupportTicket[]>();
  @Output() searchTermChange = new EventEmitter<string>();

  searchTerm: string = '';
  searchTermChanged$ = new Subject<string>();
  private subscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.searchTermChanged$
      .subscribe(searchTerm => {
        this.performSearch(searchTerm);
        this.searchTermChange.emit(searchTerm);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearchInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTermChanged$.next(value);
  }

  performSearch(searchText: string): void {
    this.searchTerm = searchText;
    this.searchChanged.emit(this.filterTickets(searchText));
  }

  filterTickets(searchText: string): SupportTicket[] {
    if (!searchText) {
      return this.tickets;
    }
    const searchTextLower = searchText.toLowerCase();
    return this.tickets.filter(ticket =>
      Object.values(ticket).some(value => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(searchTextLower);
        }
        if (typeof value === 'number') {
          return value.toString().includes(searchTextLower);
        }
        if (typeof value === 'object' && value !== null) {
          return Object.values(value).some(nestedValue => {
            if (typeof nestedValue === 'string') {
              return nestedValue.toLowerCase().includes(searchTextLower);
            }
            if (typeof nestedValue === 'number') {
              return nestedValue.toString().includes(searchTextLower);
            }
            return false;
          });
        }
        return false;
      })
    );
  }
}

