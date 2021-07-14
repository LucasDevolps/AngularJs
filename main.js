angular.module("ListaTelefonica", ["ngMessages"]);
angular.module("ListaTelefonica")
.controller("LitaTelefonicaCtrl",function($scope)
{
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
        {nome: "Lucas", telefone: "11111321", cor: "blue"},
        {nome: "Bruno", telefone: "11232456", cor: "yellow"},
        {nome: "Pedro", telefone: "48745656", cor: "red"}
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
        {nome: "GVT", codigo:25, categoria: "Fixo"},
        {nome: "Embratel", codigo: 21, categoria: "Fixo"}
    ];
    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        //adiciona originalidade do formulario
        $scope.contatoForm.$setPristine();
    };
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.allCx = function(){
        for(i = 0; i < $scope.contatos.length; i++){
            $scope.contatos[i].selecionado = !$scope.contatos[i].selecionado;
        }
    }
    /*minha tentativa*/
    $scope.apagarContato = function(contatos){
        /*retornando para o array os não selecionados*/
        $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado) return contato;
        });
        
    }
    $scope.isContatoSelecionados = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    }
});
/* Mascara  do telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    //v=v.replace(/^(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}
*/