<h1 style="text-align: center;" >Comandos</h1>

*_Os comandos Docker tem o seguinte formato:_* ```docker <comando> <sub-comando> <parâmetros>```  
  
```docker container run <nome-da-imagem>:<tag>``` - Rodar um container.  
*_Exemplo:_* ```docker container run ubuntu```  
  
```docker container run <nome-da-imagem> <comandos Shell>``` - Rodar um container e comandos no Shell.  
*_Exemplo:_* ```docker container run ubuntu echo 'echo dentro da Shell'```  
  
```--help``` - Exibe detalhes sobre o comando passado.  
*_Exemplo:_* ```docker container --help```  
  
```docker container ls``` - Exibe os containers ativos.  
  
```docker container ls -a``` - Exibe os containers ativos e os inativos.  
  
```docker container ls -l``` - Exibe o ultimo container executado.  
  
```docker container run -ti ubuntu``` - Roda um container de forma interativa com o Shell local.  
  
```docker container run --name <nome do container> <imagem>:<tag>``` - O comando ```--name```, define um nome para o container.  
  
```docker container run --rm <imagem>:<tag>``` - O comando ```--rm``` remove o container ao final da execução.  
  
```docker container run -d <imagem>:<tag>``` - O comando ```-d``` irar fazer o container rodar em segundo plano.  
  
```docker container run -dit ubuntu``` - O  comando ```-d``` combinado com o ```-it``` que manterá o container ativo em segundo plano com um terminal disponível para acesso.  
  
