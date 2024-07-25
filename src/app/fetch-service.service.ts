import { Injectable } from '@angular/core';
import { Gadget } from './interfaces/gadget.interface';



@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  fetchedData = [];
  url = "http://127.0.0.1:8000/tech_gadgets/gadget/1";
  postUrl = "http://127.0.0.1:8000/tech_gadgets/gadget/";
  constructor() { }

  async fetchData() {
    let result = await fetch(this.url);
    this.fetchedData = await result.json();
    return this.fetchedData
  }


  async postData(data:Gadget) {

    let response = await fetch(this.postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    let result = await response.json();
    console.log(result);

  }
}
