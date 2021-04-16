export class Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  estoque: number;
  promocao: boolean;
  tipo: string;

  constructor(
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    img: string,
    estoque: number,
    promo: boolean,
    tipo: string
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.imagem = img;
    this.estoque = estoque;
    this.promocao = promo;
    this.tipo = tipo;
  }
}
