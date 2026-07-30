
<?php
   
    require_once "ConexaoBanco.php";  // Referenciar Conexao com o banco.
    $objBanco = new Conexao(); // referenciar objeto conexao.
    $Conexao = $objBanco->Conectar(); // referenciar o método conexão.

    // Pegar os dados do arquivo javascript enviados atravez do fetch.
    $CodProduto = $_GET["CodProduto"];
    $Produto = $_GET["Produto"];

    //testando á programação.
    echo $CodProduto;
    echo "<br>";
    echo $Produto;

    // Chamar a procedure e prepara - la para receber os parametros.
    $Instrucao = $Conexao->prepare("Call spCadastrarProduto(?,?)");
    
    // Injetar os parametros á ser cadastrado.
    $Instrucao->bind_param(
        "is",
        $CodProduto,
        $Produto
    );
    $Instrucao->execute(); // Executar á instrução e a procedure.
    $Resultado = $Instrucao->get_result(); // Coletar feadback banco.
    $Verificar = $Resultado->fetch_assoc(); // Organizar para verificação.

    // Verificar resposta.
    if($Verificar["RETORNO"] == "CADASTROU")
        {echo "Cadastrado";}
    else
        {echo "Falha";
    }

$Conexao->close();
$Instrucao->close();
?>