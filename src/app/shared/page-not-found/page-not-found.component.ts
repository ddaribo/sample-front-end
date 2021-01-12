import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>Hmm... nothing here.</h1>
    <img id="image" alt="404 not found" src="./assets/images/undraw_page_not_found_su7k.svg" /> `,
  styles: ['h1 {text-align: center; margin: 3em auto; width: auto;} img {margin: 0 auto; width: 50%; display: block;}']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
