import { Produto } from './produto';

export class ItemPedido {
  produto: Produto;
  quantidade: number;

  constructor(prod: Produto, qtd: number) {
    this.produto = prod;
    this.quantidade = qtd;
  }
}
