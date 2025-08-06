import {ProdutoBo} from "../model/produto.bo";

export interface ProdutoService {

    cadastrarProduto(produto: ProdutoBo): ProdutoBo;
}