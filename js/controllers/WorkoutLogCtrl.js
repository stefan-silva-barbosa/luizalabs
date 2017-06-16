angular.module("WorkoutLog").controller("WorkoutLogCtrl", function ($scope) 
{
$scope.app = "Workout Log";
$scope.total = 0;
$scope.atividades = [
	{tempo: "1", data: "24/11/2011", tipoesporte: {nomeEsporte: "Run", codigo: 1}},
	{tempo: "4", data: "24/11/2011", tipoesporte: {nomeEsporte: "Swimming", codigo: 3}},
	{tempo: "1", data: "25/11/2011", tipoesporte: {nomeEsporte: "Run", codigo: 1}},
	{tempo: "2", data: "26/11/2011", tipoesporte: {nomeEsporte: "Bike", codigo: 2}},
	{tempo: "1", data: "27/11/2011", tipoesporte: {nomeEsporte: "Run", codigo: 1}},
	{tempo: "1", data: "29/11/2011", tipoesporte: {nomeEsporte: "Run", codigo: 1}},
];

for(var i = 0; i < $scope.atividades.length; i++) $scope.total += parseFloat($scope.atividades[i].tempo);

$scope.tipoesportes = [
	{nomeEsporte: "Run", codigo: 1},
	{nomeEsporte: "Bike", codigo: 2},
	{nomeEsporte: "Swimming", codigo: 3},
];
$scope.adicionaratividade = function (atividade) 
{
	$scope.atividades.push(angular.copy(atividade));
	$scope.total += parseFloat(atividade.tempo);
	delete $scope.atividade;
	$scope.atividadeForm.$setPristine();
};

$scope.apagaratividades = function (_scope) 
{				
	$scope.atividades = _scope.filter(function (linhaatividade) 
	{					
		if(linhaatividade.selecionado) $scope.total -= parseFloat(linhaatividade.tempo);

		if (!linhaatividade.selecionado) return linhaatividade; 
	});
};
$scope.isatividadeSelecionado = function (atividades) 
{
	return atividades.some(function (atividade) 
	{
		return atividade.selecionado;
	});
};
$scope.ordenarPor = function (campo) 
{
	console.log(campo);
	$scope.criterioDeOrdenacao = campo;				
	$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
};
$scope.pesquisa = function () 
{
	$scope.total = 0;
	for(var i = 0; i < $scope.itensFiltrados.length; i++) 
		$scope.total += parseFloat($scope.itensFiltrados[i].tempo);				
}
});