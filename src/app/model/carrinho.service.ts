import { Injectable } from "@angular/core";

import { ItemPedido } from "./item-pedido";

@Injectable({
  providedIn: "root",
})
export class CarrinhoService {
  itens: ItemPedido[];
  total: number;

  constructor() {
    this.itens = [];
    this.total = this.calcularTotal(this.itens);

  }
  existe(it: ItemPedido): boolean {
    return false;
  }

  // 2DO
  adicionarItem(it: ItemPedido) {
    this.itens.push(it);
  }
  obterItens(): ItemPedido[] {
    return this.itens;
  }
  //2DO
  removerItem(it: ItemPedido): boolean {
    for (let index = 0; index < this.itens.length; index++) {
      const element = this.itens[index];
      if (it === element) {
        this.itens.splice(index, 1);
      }
    }
    return true;
  }
  //2DO
  calcularTotal(itens: ItemPedido[]): number {
    for (let index = 0; index < this.itens.length; index++) {
      const element = this.itens[index];
      this.total += element.produto.preco;
      return this.total;
    }
  }
}
