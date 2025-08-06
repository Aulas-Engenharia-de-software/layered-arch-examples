import {ProdutoDao} from "../dao/produto.dao";

export interface ProdutoRepository {

    cadastrarProduto(produto: ProdutoDao): ProdutoDao;

    buscarPorNome(nome: string): ProdutoDao;
}