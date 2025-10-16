import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  // Pegando data e hora atual do sistema
  data_atual: Date =  new Date();

  constructor() { }

  ngOnInit(): void {

    // Atualiza a hora da data a cada segundo
    setInterval(() => {
      this.data_atual = new Date();
    }, 1000);
  }

}
