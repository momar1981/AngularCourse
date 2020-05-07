import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  @Output() menuClicked = new EventEmitter<string>();
  onSelect(selectedValue: string)
  {
    this.menuClicked.emit(selectedValue);
  }

}