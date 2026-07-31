
class Produto {
    #CodProduto;
    #Produto;

    constructor(
        Codigo,
        Produto
    ){
        this.#CodProduto = Codigo;
        this.#Produto = Produto;
    };

    //======= Métodos.==================
    ValidarComponente(){
        document.getElementById("TxtCodProduto").value = "";
        document.getElementById("TxtProduto").value = "";
        TxtCodProduto.focus();
    }

    CadastrarProduto(){
        ObjProduto.ValidarComponente();
    }
}

// Criar objeto
const ObjProduto = new Produto();

//===============================================================
// Leitura dos Componentes do html.
const TxtCodProduto = document.getElementById("TxtCodProduto");
const TxtProduto = document.getElementById("TxtProduto");
const BtnCadastrar = document.getElementById("BtnCadastrar");
const BtnConsultar = document.getElementById("BtnConsultar");

// Sinalizar para o javascript quando o evento click do componente no html for acionado.
BtnCadastrar.addEventListener("click", function () {
   ObjProduto.CadastrarProduto(); 
});