import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  // Simulação de dados vindos de uma API
  private entregas = [5, 10, 15, 22];

  constructor() { }

  // Retorna todos os dias com entrega
  getEntregas(): number[] {
    return this.entregas;
  }
}
