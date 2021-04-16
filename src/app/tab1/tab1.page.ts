import { ItemPedido } from "./../model/item-pedido";
import { CarrinhoService } from "./../model/carrinho.service";
import { Component } from "@angular/core";
import { LojaService } from "../model/loja.service";
import { Produto } from "../model/produto";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  itemPedido: ItemPedido;

  constructor(
    private lojaService: LojaService,
    private carrinhoService: CarrinhoService
  ) {
    this.itemPedido = new ItemPedido(undefined, undefined);
  }

  onObterProdutos(): Produto[] {
    return this.lojaService.obterProdutos();
  }

  comprar(p: Produto) {
    const novoItemPedido: ItemPedido = new ItemPedido(
      (this.itemPedido.produto = p),
      (this.itemPedido.quantidade = 0)
    );
    this.carrinhoService.adicionarItem(novoItemPedido);
  }
}
