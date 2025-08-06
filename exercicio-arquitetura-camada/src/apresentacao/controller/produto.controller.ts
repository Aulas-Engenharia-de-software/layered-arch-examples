import {ProdutoController} from "./produto-controller.interface";
import {ProdutoDto} from "../model/produto.dto";
import {ProdutoService} from "../../bussines/service/produto-service.interface";
import {ProdutoBo} from "../../bussines/model/produto.bo";

export class ProdutoControllerImpl implements ProdutoController {

    constructor(private readonly produtoService: ProdutoService) {
    }

    cadastrarProduto(produtoDto: ProdutoDto) {
        const produtoBo: ProdutoBo = {
            nome: produtoDto.nome,
            quantidade: produtoDto.quantidade,
            preco: produtoDto.preco
        }
        const produtoDtoCadastrado: ProdutoDto = this.produtoService.cadastrarProduto(produtoBo);

        console.log(produtoDtoCadastrado);
    }

}