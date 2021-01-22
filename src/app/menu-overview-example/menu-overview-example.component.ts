import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

/**
 * @title Basic menu
 */
@Component({
  selector: 'app-menu-overview-example',
  templateUrl: 'menu-overview-example.component.html',
})
export class MenuOverviewExampleComponent {

public option: string;

exportlog() {
  console.log(this.option);
}

}