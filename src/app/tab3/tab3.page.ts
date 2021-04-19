import { LojaService } from "./../model/loja.service";
import { Component } from "@angular/core";
import { Produto } from "../model/produto";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private lojaService: LojaService) {}

  onObterProdutos(): Produto[] {
    return this.lojaService.obterProdutos();
  }

}
