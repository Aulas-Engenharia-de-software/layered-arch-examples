import {ProdutoController} from "../controller/produto-controller.interface";
import {ProdutoDto} from "../model/produto.dto";

export class ProdutoView {

    private readonly produtoController: ProdutoController;

    constructor(produtoController: ProdutoController) {
        this.produtoController = produtoController;
    }

    viewCadastrandoproduto(): void {
        const produtoDto: ProdutoDto = {
            nome: "Produto Exemplo",
            quantidade: 10,
            preco: 100.00
        }
        this.produtoController.cadastrarProduto(produtoDto);
    }
}