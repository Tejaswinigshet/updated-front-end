import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpclient: HttpClient) { }

  getTrainingRoom(): any {
    return this.httpclient.get("http://localhost:3000/trainingroom");
  }

  getHotDesk(): any {
    return this.httpclient.get("http://localhost:3000/hotdesk")
  }

  getCategory1(): any {
    return this.httpclient.get("http://localhost:3000/category1")
  }
}
