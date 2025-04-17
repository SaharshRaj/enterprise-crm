import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() refreshClicked = new EventEmitter<void>();
  @Output() downloadClicked = new EventEmitter<void>();
  @Output() dateRangeChanged = new EventEmitter<string>();

  onRefresh(): void {
    this.refreshClicked.emit();
  }

  onDownload(): void {
    this.downloadClicked.emit();
  }

  onDateRangeChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.dateRangeChanged.emit(selectedValue);
  }
}