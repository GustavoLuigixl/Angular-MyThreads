import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  treads: string [] = []

  constructor(private service:MensagemService){
   
  }
  ngOnInit(): void {
    this.treads = this.service.pegamensagens()
  }
  
}
