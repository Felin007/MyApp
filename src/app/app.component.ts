import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'felin first angular app 11';
  data = '';
  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.appService.getDate().then(function (res) {
      console.log('res:', res);
      console.log('body:', res['body']);
    });
    $.backstretch('./assets/img/backgrounds/1.jpg');
  }
}
