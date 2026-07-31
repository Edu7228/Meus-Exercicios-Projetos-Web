
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
        // Atribuir os valores para o atributo encapsulado.
        this.#CodProduto = TxtCodProduto.value;
        this.#Produto = TxtProduto.value;

        // Fazendo a requisição para o arquivo php.
        fetch(
            `CadastrarProduto.php?` +
            `CodProduto=${encodeURIComponent(this.#CodProduto)}` +
            `&Produto=${encodeURIComponent(this.#Produto)}`
        )

        
fetch(url)
    .then(RespObj => RespObj.text())
    .then(RespObj => {
        console.log("Resposta do PHP:", RespObj);

        if (RespObj.trim() == "Cadastrado") {
            alert("Cadastrou");
            ObjProduto.IniciaLimpaComponente();
        }
    });
    }
//==============================================================================================================
// Fim da Classe Produto.    
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
    ObjProduto.CadastrarProduto();
});