import { Injectable } from "@angular/core";
import { Produto } from "./produto";

@Injectable({
  providedIn: "root",
})
export class LojaService {
  produtos: Produto[];

  constructor() {
    this.produtos = [
      {
        id: 1,
        nome: "Caneca Marvel",
        descricao: 'CANECA MARVEL COMICS PB VERMELHO',
        preco: 35.90,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcocR9NlCCq0Uw978aiQD2r8cWG9Dv_hJ2aUw27R6PgP_sOkZ_mnu65Wepm9uR7e6-ViEPkvWX&usqp=CAc",
        estoque: 10,
        promocao: true,
        tipo: "caneca",
      },
      {
        id: 2,
        nome: "SALEIRO STAR WARS",
        descricao:
          "SALEIRO E PALITEIRO DRÓIDS STAR WARS",
        preco: 58.90,
        imagem:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7cVeDfVHXfhYKNzAETfU4zZYDdxNem7KmqzWmxPb2QabKRT-x5nwpL7dlkqdQMlLo_0pOFBA&usqp=CAc",
        estoque: 100,
        promocao: true,
        tipo: "Salereiro",
      },
      {
        id: 3,
        nome: "Copo com Canudo 2 Em 1",
        descricao:
          "Copo com Canudo 2 Em 1 (Homer Simpson: Os Simpsons - Zona Criativa)",
        preco: 39.90,
        imagem:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSADlhzYnc8fzlIzcMhN6LzazFK2VGwNnqzor8PazrTbOK_R2Kcea_wz0Jtg&usqp=CAc",
        estoque: 20,
        promocao: false,
        tipo: "Copo",
      },
      {
        id: 4,
        nome: "Almofada Geek",
        descricao:
          "Almofada Geek: Jack Skellington: O Estranho Mundo de Jack (The Nightmare Before Christmas) Disney",
        preco:59.90,
        imagem:
          "data:image/jpeg;base64,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",
        estoque: 10,
        promocao: false,
        tipo: "Almofada",
      },
    ];
  }
  obterProdutos(): Produto[] {
    return this.produtos;
  }
}
