import { Injectable } from '@angular/core';
import {MessageService} from "primeng/api";
import {AlertType} from "../enums";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private messageService: MessageService) {}

  show(type: AlertType, title: string, text: string) {
    this.messageService.add({ severity: type, summary: title, detail: text, key: 'customToastKey' });
  }
}
