import { Injectable } from "@angular/core";

import { ItemPedido } from "./item-pedido";

@Injectable({
  providedIn: "root",
})
export class CarrinhoService {
  itens: ItemPedido[];
  novoItem: ItemPedido;

  constructor() {
    this.itens = [];
  }

  existe(it: ItemPedido): boolean {
    return false;
  }
  adicionarItem(it: ItemPedido): boolean {
    this.itens.push(it);
    return true;
  }
  obterItens(): ItemPedido[] {
    return this.itens;
  }
  removerItem(it: ItemPedido): boolean {
    return true;
  }
  calcularTotal(): number {
    return 1;
  }
}
