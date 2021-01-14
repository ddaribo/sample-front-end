import { Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { InfoMessagesService } from '../../info-messages/info-messages.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService,
              private infoMsgService: InfoMessagesService,) {

  }

  ngOnInit() {
  }

  onClickPost(){

    this.authService.isLoggedOut$.subscribe((isLoggedOut: boolean) => {
      if(isLoggedOut){
        this.infoMsgService.showErrors({
          message: "Please, log in or sign up to post an animal in need!",
          areErrors: true
        });
      }
    });
  }
}