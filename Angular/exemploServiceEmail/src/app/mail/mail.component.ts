import { Component, OnInit } from '@angular/core';
import {MailServiceService} from '../mail-service.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit{
  title = 'app';

  constructor(
    public email: MailServiceService ){}

  ngOnInit(){}
}
