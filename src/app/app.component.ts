import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse';
  menuSelectedValue : string = 'Recipes';

  doNavigate(selectedValue: string)
  {
    this.menuSelectedValue = selectedValue;
  }
}
