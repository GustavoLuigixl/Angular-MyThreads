import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  private mensagens: string[] = []

  constructor() { }

  addmensagens(mensagem:string){
    this.mensagens.push(mensagem)
  }

  pegamensagens(){
    return this.mensagens
  }

  limparmensagens(){
    this.mensagens = []
  }
}
