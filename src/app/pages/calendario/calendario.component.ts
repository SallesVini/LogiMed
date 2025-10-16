import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { AgendaService } from 'src/app/servicos/agenda/agenda.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  // Atributos
  diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  nomeMes = '';
  ano = 0;
  semanas: (number | null)[][] = [];

  // Array de inteiros, que vai guardar o dia das entregas que vem do serviço AgendaService
  entregas: number[] = [];
  

  constructor(private serviceAgenda: AgendaService) { }

  ngOnInit(): void {
    // Pegando o dia atual - e gerando o calendario com gerarCalendario()
    const hoje = new Date();
    this.ano = hoje.getFullYear();
    this.gerarCalendario(hoje.getMonth());

    // Pegando os dados do serviço AgendaService e colocando no array entregas
    this.entregas = this.serviceAgenda.getEntregas();
  }


  mesAtual = new Date().getMonth();



  // Métodos para gerar calendario e preencher ele
  gerarCalendario(mes: number): void {
    const data = new Date(this.ano, mes, 1);
    const primeiroDiaSemana = data.getDay();
    const ultimoDia = new Date(this.ano, mes + 1, 0).getDate();

    this.nomeMes = data.toLocaleString('pt-BR', { month: 'long' }).replace(/^\w/, c => c.toUpperCase());
    this.semanas = [];

    let semana: (number | null)[] = Array(primeiroDiaSemana).fill(null);

    for (let dia = 1; dia <= ultimoDia; dia++) {
      semana.push(dia);
      if (semana.length === 7) {
        this.semanas.push(semana);
        semana = [];
      }
    }

    if (semana.length) {
      while (semana.length < 7) semana.push(null);
      this.semanas.push(semana);
    }
  }

  ehHoje(dia: number | null): boolean {
    if (!dia) return false;
    const hoje = new Date();
    return dia === hoje.getDate() && this.mesAtual === hoje.getMonth() && this.ano === hoje.getFullYear();
  }

  temEntrega(dia: number | null): boolean {
    return dia !== null && this.entregas.includes(dia);
  }

  mesAnterior(): void {
    this.mesAtual--;
    if (this.mesAtual < 0) {
      this.mesAtual = 11;
      this.ano--;
    }
    this.gerarCalendario(this.mesAtual);
  }

  proximoMes(): void {
    this.mesAtual++;
    if (this.mesAtual > 11) {
      this.mesAtual = 0;
      this.ano++;
    }
    this.gerarCalendario(this.mesAtual);
  }

}
