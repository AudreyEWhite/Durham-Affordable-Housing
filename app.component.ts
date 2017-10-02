import { Component } from '@angular/core';

// defines a page
export class page {
  id: number;
  name: string;
}

// An array holding the pages for this website
const PAGES: page[] = [
	{ id: 11, name: 'Population and households' },
	{ id: 12, name: 'Housing stock and occupancy' },
	{ id: 13, name: 'Renters and owners' },
	{ id: 14, name: 'Housing affordability' }
];


@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'State of Affordable Housing in Durham';
}
