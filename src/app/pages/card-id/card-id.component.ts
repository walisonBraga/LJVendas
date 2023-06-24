import { FormGroup } from '@angular/forms';
import { Component, EventEmitter } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Register } from 'src/app/interface/register.interface';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-card-id',
  templateUrl: './card-id.component.html',
  styleUrls: ['./card-id.component.scss']
})
export class CardIDComponent {
  cardForm!: FormGroup;

  cardObjs: Register[] = []

  constructor(private cardService: CardService, private afAuth: AuthService) {
    this.cardService.getData('').subscribe(data => {
      this.cardObjs = data;
      if (data.length > 0) {
      }
      // console.log(this.cardObjs);
    })
  }

  editar() { }

  deleteCard(uid: string, name: string): void {
    Swal.fire({
      title: `Você tem certeza quer deletar usuário ( ${name} ) do banco de dados!.`,
      text: "Você não será capaz de reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cardService.deleteData(uid);
        this.afAuth.deleteDoc(uid);
        Swal.fire(
          'Deleted!',
          `usuário deletado com sucesso ${name}`,
          'success'
        )
      }
    })
  }
}
