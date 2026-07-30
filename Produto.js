
class Produto {
    // Atributos.
    #CodProduto;
    #Produto;

    //================================================================
    // Construtor.
    constructor (
        Codigo = "",
        Produto = ""
    )
    {
        this.#CodProduto = Codigo;
        this.#Produto = Produto;
    }

    //===============================================================
    // Métodos.
    IniciaLimpaComponente(){
        document.getElementById("TxtCodProduto").value = "";
        document.getElementById("TxtProduto").value = "";
        TxtCodProduto.focus();
    }
    // Cadastrar.
    CadastrarProduto(){

    }
}

// =================================================================
// Criando meu objeto Produto.
    const ObjProduto = new Produto();

//=================================================================
// Referenciando os componentes da pagina.
    const TxtCodProduto = document.getElementById("TxtCodProduto");
    const TxtProduto = document.getElementById("TxtProduto");
    const BtnCadastrar = document.getElementById("BtnCadastrar");
    const BtnConsultar = document.getElementById("BtnConsultar");

// =================================================================
// Acionar evento correspondente quando o componente for acionado na pagina.
BtnCadastrar.addEventListener("click", function() {
    alert("Funcionou !!");
    ObjProduto.IniciaLimpaComponente();
});