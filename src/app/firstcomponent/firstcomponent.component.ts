import { Component, OnInit } from '@angular/core';

/**
 * to use icon in first component we have to import icons in
 * that perticular component's .ts module.
 */

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css'],
})
export class FirstcomponentComponent implements OnInit {
  // this is .ts file for firstcomponent only.
  public faCoffee = faCoffee;
  constructor() {}

  ngOnInit(): void {}
}
