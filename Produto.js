
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

.then(resp => resp.text())
.then(resp => {

    if (resp.trim() === "Cadastrado") {
        alert("Cadastro realizado com Sucesso!!");
        ObjProduto.IniciaLimpaComponente();
    } else {
        alert("Resposta do PHP: " + resp);
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