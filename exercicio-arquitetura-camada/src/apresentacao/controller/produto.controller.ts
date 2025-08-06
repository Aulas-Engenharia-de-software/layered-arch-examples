import {ProdutoController} from "./produto-controller.interface";
import {ProdutoDto} from "../model/produto.dto";
import {ProdutoService} from "../../bussines/service/produto-service.interface";
import {ProdutoBo} from "../../bussines/model/produto.bo";

export class ProdutoControllerImpl implements ProdutoController {

    private readonly produtoService: ProdutoService;

    constructor(produtoService: ProdutoService) {
        this.produtoService = produtoService;
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

    viewCadastrandoproduto(): void {
        const produtoDto: ProdutoDto = {
            nome: "Produto Exemplo",
            quantidade: 10,
            preco: 100.00
        }

        this.cadastrarProduto(produtoDto);
    }
}