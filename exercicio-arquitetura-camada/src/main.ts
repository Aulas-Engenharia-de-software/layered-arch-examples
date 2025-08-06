import {ProdutoServiceImpl} from './bussines/service/produto.service';
import {ProdutoRepositorioImpl} from './persistencia/repositorio/produto.repositorio';
import {ProdutoControllerImpl} from "./apresentacao/controller/produto.controller";
import {ProdutoView} from "./apresentacao/view/produto.view";



console.log("Iniciando a aplicação...");
console.log("Montando dependências...");
const repositorio = new ProdutoRepositorioImpl();
const servico = new ProdutoServiceImpl(repositorio);
const controller = new ProdutoControllerImpl(servico);
const view = new ProdutoView(controller);
console.log("Dependências montadas com sucesso!");


console.log("Executando a funcionalidade da view...");
view.viewCadastrandoproduto();

console.log("Aplicação finalizada.");