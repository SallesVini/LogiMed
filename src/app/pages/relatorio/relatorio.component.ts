import { Component } from '@angular/core';
import { RelatorioService } from 'src/app/servicos/relatorio/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {

  entradasHoje!: number;
  entradasSemana!: number;
  entradasMes!: number;

  agendadosHoje!: number;
  agendadosSemana!: number;
  agendadosMes!: number;

  canceladosHoje!: number;
  canceladosSemana!: number;
  canceladosMes!: number;

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    const dados = this.relatorioService.getDadosRelatorio();

    this.entradasHoje = dados.entradas.hoje;
    this.entradasSemana = dados.entradas.semana;
    this.entradasMes = dados.entradas.mes;

    this.agendadosHoje = dados.agendados.hoje;
    this.agendadosSemana = dados.agendados.semana;
    this.agendadosMes = dados.agendados.mes;

    this.canceladosHoje = dados.cancelados.hoje;
    this.canceladosSemana = dados.cancelados.semana;
    this.canceladosMes = dados.cancelados.mes;
  }
}
