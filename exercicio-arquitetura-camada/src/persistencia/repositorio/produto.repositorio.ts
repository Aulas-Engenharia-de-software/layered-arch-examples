import {ProdutoRepository} from "./produto-repository.interface";
import {ProdutoDao} from "../dao/produto.dao";

export class ProdutoRepositorioImpl implements ProdutoRepository {

    listaProdutos: ProdutoDao[] = [];

    cadastrarProduto(produto: ProdutoDao): ProdutoDao {
        const quantidadeProdutos: number = this.listaProdutos.length;
        produto.id = quantidadeProdutos + 1;

        this.listaProdutos.push(produto); // persistindo no banco de dados simulado
        return produto;
    }

    buscarPorNome(nome: string): ProdutoDao {
        for (const produto of this.listaProdutos) {
            if (produto.nome === nome) {
                return produto
            }
        }
        return undefined;
    }


}