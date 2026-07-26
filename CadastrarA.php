
<?php
    
    require_once "ConexaoBanco.php";
    $Banco = new Conexao();
    $Conexao = $Banco->Conectar();

    $CodFornecedor = $_GET["CodFornecedor"];
    $RazaoSocial = $_GET["RazaoSocial"];
    $PaisOrigem = $_GET["PaisOrigem"];

    // Preparando a procedure.
    $Instrucao = $Conexao->prepare("Call SpCadastrarFornecedor(?,?,?)");
    $Instrucao->bind_param("iss",$CodFornecedor,$RazaoSocial,$PaisOrigem);
    $Instrucao->execute();

    $ColetResultBanco = $Instrucao->get_result();
    $ConverterResult = $ColetResultBanco->fetch_assoc();
  
    if($ConverterResult["Retorno" == "SUCESSO"])
    {
        echo "Cadastrou";
    }
    else
        {echo "FALHOU";
    }
    $Instrucao->close();
    $Conexao->close();

?>