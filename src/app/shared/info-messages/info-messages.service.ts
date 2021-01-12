import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoMessagesService implements OnDestroy {

  constructor() { }
  
  private subject = new BehaviorSubject<{message: string, areErrors: boolean}>(null);
  
  messages$: Observable<{message: string, areErrors: boolean}> = this.subject.asObservable()
  .pipe(
    filter(messages => messages && messages.message.length > 0)
    );
    
    showErrors(messages: {message: string, areErrors: boolean}){
      this.subject.next(messages);
    }

    ngOnDestroy(): void {
      this.subject.unsubscribe();
    }
}
