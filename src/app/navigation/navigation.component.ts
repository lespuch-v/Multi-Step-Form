import {Component} from '@angular/core';

interface Step {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  steps: Step[] = [
    {
      id: 1,
      title: 'Step 1',
      description: 'Your info'
    },
    {
      id: 2,
      title: 'Step 2',
      description: 'Select your plan'
    },
    {
      id: 3,
      title: 'Step 3',
      description: 'Add-ons'
    },
    {
      id: 4,
      title: 'Sumarry',
      description: 'Summary'
    }
  ]
}
