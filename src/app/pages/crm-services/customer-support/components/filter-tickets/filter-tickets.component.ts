import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { SupportTicket } from '../../../../../models/SupportTicket';

interface Filter {
  status?: 'OPEN'|'CLOSED';
  
}

@Component({
  selector: 'app-filter-tickets',
  standalone: false,
  templateUrl: './filter-tickets.component.html',
  styleUrls: ['./filter-tickets.component.scss']
})

export class FilterTicketsComponent {
  @Input() tickets: SupportTicket[] = [];
  @Output() filteredTickets = new EventEmitter<SupportTicket[]>();

  // Dropdown state
  isFilterOpen = false;
  activeSection:  'status' | null = null;

  // Filter values
  
  statusOptions :('OPEN' | 'CLOSED' )[] = ['OPEN', 'CLOSED']; // Example options
  

  // Selected filter
  selectedFilter: Filter = {};

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tickets']) {
      this.applyFilters();
    }
  }

  // Toggle main filter dropdown
  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
    this.activeSection = null; // Close any open sub-dropdown
  }

  // Open sub-dropdown
  openSection(section: 'status') {
    this.activeSection = section;
  }

  // Select a filter value
  selectFilterValue(section: keyof Filter, value: string) {
    
  if (section === 'status') {
    this.selectedFilter[section] = value as 'OPEN' | 'CLOSED' ;
  } 
  
  this.isFilterOpen = false; // Close the dropdown
  this.activeSection = null;
  this.applyFilters();
}

  // Clear a filter
  clearFilter(section: keyof Filter) {
    delete this.selectedFilter[section];
    this.applyFilters();
  }

  // Apply filters
  applyFilters() {
    let filtered = [...this.tickets]; // Start with a copy

    if (this.selectedFilter.status) {
      filtered = filtered.filter(t => t.status === this.selectedFilter.status);
    }

    this.filteredTickets.emit(filtered);
  }
}
