import { Component } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  //O maximo de caracteres//
  treadmax: number = 240
  //Caracteres restante//
  treadrestante: number = this.treadmax
  //Mensagem inserida no input//
  treadmessage:string = ""

  constructor(private service:MensagemService){

  }

  alttread(){
    //Aqui estou dizendo que os caracteres restantes vai ser igual a caracteres maximo 
    //menos os caracteres que esta sendo inserido no input 
    this.treadrestante = this.treadmax - this.treadmessage.length
    
  }

  entread(){
    //Esta funcao vai pegar tudo que for digitado no textarea
    this.service.addmensagens(this.treadmessage)
    this.treadmessage = ""
    this.treadrestante = this.treadmax
    
  }
}
