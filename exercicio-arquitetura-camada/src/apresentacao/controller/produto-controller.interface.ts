import {ProdutoDto} from "../model/produto.dto";

export interface ProdutoController {

    cadastrarProduto(produtoDto: ProdutoDto): void;
}