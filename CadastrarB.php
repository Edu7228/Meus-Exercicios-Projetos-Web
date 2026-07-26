
<?php
    require_once "Banco.php";
    $ClasseConexao = new Conexao();
    $Conexao = $ClasseConexao->Conectar();

    $CodFornecedor = $_GET["CodFornecedor"];
    $Nome = $_GET["RazaoSocial"];
    $Pais = $_GET["PaisOrigem"];
   
    $Instrucao = $Conexao->prepare("Call SpCadastrarFornecedor(?,?,?)");
    $Instrucao->bind_param("iss",
        $CodFornecedor,
        $Nome,
        $Pais
    );
    
    $Instrucao->execute();

?>