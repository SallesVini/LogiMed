import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private dados = {
    entradas: {
      hoje: 120,
      semana: 820,
      mes: 3450
    },
    agendados: {
      hoje: 45,
      semana: 210,
      mes: 890
    },
    cancelados: {
      hoje: 10,
      semana: 35,
      mes: 120
    }
  };

  constructor() { }

  getDadosRelatorio() {
    return this.dados;
  }
}
