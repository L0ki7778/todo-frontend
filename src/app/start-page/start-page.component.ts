import { Component, inject } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { CommonModule } from '@angular/common';
import { Gadget } from '../interfaces/gadget.interface';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {
  fetchService = inject(FetchServiceService);
  fetchedData = []
  data:Gadget={
    name: "",
    category: "",
    manufacturer: "",
    price: 0,
    currency: "",
    description: ""
  }

  async fetchData() {
    const data = await this.fetchService.fetchData();
    this.fetchedData = data;
    console.log(this.fetchData)

  }

  async postData() {
    await this.fetchService.postData(this.data);
  }


}
