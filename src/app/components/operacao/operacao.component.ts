import { Component, Input } from '@angular/core';

export interface EstruturaOperacao {
  Codigo: string;
  Processador: string;
}

const OperacaoNula: EstruturaOperacao = {
  Codigo: '1234',
  Processador: '5678'
}

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent {
  @Input() DadosOperacao: EstruturaOperacao = OperacaoNula;
}
