
<?php
    require_once "ConexaoBanco.php";
    $ObjBanco = new Conexao();
    $Conexao = $ObjBanco->Conectar();

    $Codigo = $_GET["CodProduto"];
    $Produto = $_GET["Produto"];

    $Instrucao = $Conexao->prepare("Call spCadastrarProduto(?,?)");
    $Instrucao->bind_param(
        "is",
        $Codigo,
        $Produto
    );
    $Instrucao->execute();

    $DadosColetado = $Instrucao->get_result();
    $RegistroBanco = $DadosColetado->fetch_assoc();

    if($RegistroBanco["RETORNO" == "CADASTROU"])
    {
        echo "CADASTROU";
    }
    else{
        echo "FALHA";
    }

    $Conexao->close();
    $Instrucao->close();

?>