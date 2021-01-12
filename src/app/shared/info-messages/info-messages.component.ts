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
  messages$: Observable<{message: string, areErrors: boolean}>;
  isError = false;
  isInfo = false;

  constructor(
    public infoMessagesService: InfoMessagesService) { 
  }

  ngOnInit(): void {
    this.messages$ = this.infoMessagesService.messages$
      .pipe(
        tap(() => {
          this.showMessages = true;
          console.log(this.messages$);
          setTimeout(() => {
            this.onClose();
          }, 3500);
        })
      );
  }
  onClose(){
    this.showMessages = false;
  }
}
