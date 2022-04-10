import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  selectedPage: EventEmitter<string> = new EventEmitter<string>();
  @Input()
  cartItemsCounter!: number;
  @Output()
  onCloseSidenav: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit(): void {



  }

  changePage(page: string) {
    this.selectedPage.emit(page);
    console.log(page);
  }

  close() {
    this.onCloseSidenav.emit(true);
  }
}

