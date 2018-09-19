# Projeto-Co-Design
Projeto
<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<title>EngProj</title>
		<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Cabin+Sketch" rel="stylesheet">
		<link href = 'assest/css/reset.css' rel='stylesheet'>
		<link href = 'assest/css/style.css' rel='stylesheet'>
	    <script src="assest/js/lib/app.js"></script>
	    <script src="assest/js/lib/database.js"></script>
	    <script src="assest/js/lib/codes.js"></script>
	    <script src="assest/js/lib/handlebars.js"></script>
	    <script src="assest/js/script.js"></script>
		<meta charset="utf-8">
		<meta name='viewport' content="width=device-width,initial-scale=1">
	</head>
	<body>
		<header class="menu">
			<div class="header-logo">
                EngProj
            </div>
            <div class="menu-itens">
               	<div class="submenu-item">Menu
               		<ul class="submenu-itens">
               			<li class="submenu-item-projetos">
               				<a href= "Projeto%201.html" >Projeto 1</a>
               			</li>	
                		<li class="submenu-item-projetos">Projeto 2</li>
                		<li class="submenu-item-projetos">Projeto 3</li>
                	</ul>
                </div>	
            </div>
            <ul class="busca-item">
				<li class="subbusca-item">Busca</li>
			</ul>
        </header>
		<main>
			<div class="container">
  				<div class="wall wall-1" id="wall-1">
    				<a href="#wall-2">Voltar</a>
    				<h1>Imagem 1</h1>
    				<img class="imagem" src='carroça2.jpg' alt='foto do projeto'>
    				<a href="#wall-2">Avançar</a>
  				</div>
  				<div class="wall wall-2" id="wall-2">
    				<a href="#wall-1">Voltar</a>
    				<h1>Imagem 2</h1>
    				<img class="imagem" src='carroça1.jpg' alt='foto do projeto'>
    				<a href="#wall-1">Avançar</a>
  				</div>
			</div>
			<div class="section">
				<ul class="title"> <!--Melhoria para carroças de catadores --></ul>
					{{T}}
				<ul class="content"> <!--1 semestre de engenharia --></ul>
					{{S}}
				<ul class="content"> <!--Matéria: Natureza do design--></ul>
					{{M}}	
			</div>
			<div>
				<u>
					<img class="imagem" src="{{I}}" alt='foto do projeto'>
				</u>
			</div>				

			<div class="section">
				<h2 class="title">Descrição</h2>
				{{D}}
				<p class="content">
					<!--
					Com o propósito de melhorar o bem estar e as condições de trabalho dos catadores, os alunos foram divididos em grupos, com objetivo de desenvolver uma ideia acessível de melhoria à carroça. Para definir as necessidades dos carroceiros, os grupos foram às ruas entrevistá-los e coletar informações sobre as carroças. A avaliação final foi sobre um protótipo de carroça construido pelos alunos no FabLab, cujo representava as ideias de cada grupo. Durante o período de férias, as ideias foram efetivadas e aplicadas em carroças de catadores escolhidos entre todos aqueles que foram entrevistados pelos alunos. O projeto foi promovido com parceria do Insper com o movimento Pimp My Carroça.
				-->
				</p>
			</div>

			<div class="section">
				<h2 class="title">Objetivos de aprendizagem</h2>
				{{G}}
				<ul class="content">
					<!--
					<li>Identificar e abordar problemas de design</li>
					<li>Aplicar métodos formais para facilitar o processo de design</li>
					<li>Documentar o processo de design</li>
					<li>Representar um objeto graficamente por meio de sketch</li>
					<li>Apresentar oralmente os resultados do processo de design</li>
					<li>Utilizar técnicas de fabricação digital para prototipar soluções</li>
					<li>Compreender o projeto de design como forma de aprendizado pelofazer (hands-on)</li>
					<li> Entender o trabalho em equipe como importante fator no processo de design, com crescente consciência dos papéis a serem executados durante o projeto</li>
					-->
				</ul>	
			</div>
		</main>

	</body>
</html>
