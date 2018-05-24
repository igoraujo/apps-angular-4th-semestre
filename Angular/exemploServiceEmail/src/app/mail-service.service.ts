import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {
  message = ['Novo Email', 'Email Lido', 'Email Não lido'];
  constructor() { }
}
