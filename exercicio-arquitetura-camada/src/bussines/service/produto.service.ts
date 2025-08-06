import {ProdutoService} from "./produto-service.interface";
import {ProdutoBo} from "../model/produto.bo";
import {ProdutoDao} from "../../persistencia/dao/produto.dao";
import {ProdutoRepository} from "../../persistencia/repositorio/produto-repository.interface";

export class ProdutoServiceImpl implements ProdutoService {
    
    constructor(private readonly produtoRepositorio: ProdutoRepository) {
    }

    cadastrarProduto(produtoBo: ProdutoBo): ProdutoBo {
        const produtoDaoNomeRepetido: ProdutoDao = this.produtoRepositorio.buscarPorNome(produtoBo.nome);
        if (produtoDaoNomeRepetido != null) {
            throw new Error("Produto já cadastrado.")
        }
        const produtoDao: ProdutoDao = {
            id: undefined,
            nome: produtoBo.nome,
            preco: produtoBo.preco,
            quantidade: produtoBo.quantidade
        }
        const produtoDaoCadastrado: ProdutoDao = this.produtoRepositorio.cadastrarProduto(produtoDao);

        return {
            nome: produtoDaoCadastrado.nome,
            quantidade: produtoDaoCadastrado.quantidade,
            preco: produtoDaoCadastrado.preco,
        }
    }

}