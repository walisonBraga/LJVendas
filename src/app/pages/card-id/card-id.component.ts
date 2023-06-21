import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Register } from 'src/app/interface/register.interface';

@Component({
  selector: 'app-card-id',
  templateUrl: './card-id.component.html',
  styleUrls: ['./card-id.component.scss']
})
export class CardIDComponent {
  cardForm!: FormGroup;

  cardObjs: Register[] = []

  constructor(private cardService: CardService) {
    this.cardService.getData('').subscribe(data => {
      this.cardObjs = data;
      if (data.length > 0) {
      }
      console.log(this.cardObjs);
    })
  }

  editar() { }

  removeCard() { }


}
