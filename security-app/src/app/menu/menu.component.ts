import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() changedMenu: EventEmitter<string> = new EventEmitter();

  selected:string = 'getAll';

  constructor() { }

  ngOnInit() {

  }

  changeMenu(select: string) {
    this.selected = select;
    this.changedMenu.emit(select);
  }
}
