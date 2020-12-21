import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InfoMessagesService } from './info-messages.service';

@Component({
  selector: 'app-info-messages',
  templateUrl: './info-messages.component.html',
  styleUrls: ['./info-messages.component.css']
})
export class InfoMessagesComponent implements OnInit {

  showMessages = false;
  errors$: Observable<string[]>;
  isError = false;
  isInfo = false;

  constructor(
    public infoMessagesService: InfoMessagesService) { 
  }

  ngOnInit(): void {
    this.errors$ = this.infoMessagesService.errors$
      .pipe(
        tap(() => {
          this.showMessages = true;
          setTimeout(() => {
            this.onClose();
          }, 2500);
        })
      );
  }
  onClose(){
    this.showMessages = false;
  }
}
