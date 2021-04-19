import { ItemPedido } from "./../model/item-pedido";
import { Component } from "@angular/core";
import { CarrinhoService } from "../model/carrinho.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {}

  onObterItens(): ItemPedido[] {
    return this.carrinhoService.obterItens();
  }
}
