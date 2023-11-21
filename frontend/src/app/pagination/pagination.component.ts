import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <div *ngIf="totalPages > 1">
      <button *ngIf="showPreviousButton" (click)="previousPage()">Previous</button>
      <button *ngFor="let page of visiblePages" (click)="changePage(page)" [class.active]="currentPage === page">
        {{ page }}
      </button>
      <button *ngIf="showNextButton" (click)="nextPage()">Next</button>
    </div>
  `,
  styles: [`
    button {
      margin: 5px;
    }
    .active {
      font-weight: bold;
    }
    button:hover {
      background-color: rgb(0, 13, 255);
      color: rgb(198, 201, 204);
    }
  `]
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() maxVisiblePages: number = 3; // Number of pages to display
  @Output() pageChanged = new EventEmitter<number>();

  get visiblePages(): number[] {
    const startPage = Math.max(1, this.currentPage - Math.floor(this.maxVisiblePages / 2));
    const endPage = Math.min(this.totalPages, startPage + this.maxVisiblePages - 1);
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  }

  get showPreviousButton(): boolean {
    return this.currentPage > 1;
  }

  get showNextButton(): boolean {
    return this.currentPage < this.totalPages;
  }

  changePage(page: number): void {
    this.pageChanged.emit(page);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }
}
