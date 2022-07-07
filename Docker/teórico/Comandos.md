<h1 style="text-align: center;" >Comandos</h1>

*_Os comandos Docker tem o seguinte formato:_* ```docker <comando> <sub-comando> <parâmetros>```  
  
```docker images``` - Exibe as imagens docker presentes localmente.  
  
```docker container run <nome-da-imagem>:<tag>``` - Rodar um container. ```<tag>``` se refere a versão do software que será executado.  
*_Exemplo:_* ```docker container run ubuntu:2.04```  
  
```docker container run <nome-da-imagem> <comandos Shell>``` - Rodar um container e comandos no Shell.  
*_Exemplo:_* ```docker container run ubuntu echo 'echo dentro da Shell'```  
  
```--help``` - Exibe detalhes sobre o comando passado.  
*_Exemplo:_* ```docker container --help```  
  
```docker container ls``` - Exibe os containers ativos.  
  
```docker container ls -a``` - Exibe os containers ativos e os inativos.  
  
```docker container ls -l``` - Exibe o ultimo container executado.  
  
```docker container run -p <PORTA-SO-HOSPEDEIRO>:<PORTA-SO-CONVIDADO>``` - - Executa uma imagem e faz o mapeamento de portas conforme os valores passados.  
*_Exemplo:_* ```docker run -d -p 54321:80 httpd:2.4```  
  
```docker container run -P``` - Executa uma imagem e faz o mapeamento de portas de forma aleatória.  
  
```docker container run -ti ubuntu``` - Roda um container de forma interativa com o Shell local.  
  
```docker container run --name <nome do container> <imagem>:<tag>``` - O comando ```--name```, define um nome para o container.  
  
```docker container run --rm <imagem>:<tag>``` - O comando ```--rm``` remove o container ao final da execução.  
  
```docker container run -d <imagem>:<tag>``` - O comando ```-d``` irar fazer o container rodar em segundo plano.  
  
```docker container run -dit ubuntu``` - O  comando ```-d``` combinado com o ```-it``` que manterá o container ativo em segundo plano com um terminal disponível para acesso.  
  
```docker container create <parâmetros> <imagem>:<tag>``` - Cria um container mas não o executa.  
  
```docker container create -it <imagem>:<tag>``` - Cria um container mas não o executa, mas garante o terminal do comando ```-it``` quando o container for executado.  
  
```docker ps <parâmetro>``` - Versão antiga equivalente ao ```docker container ls```, provável que seja depreciado.  
  
```docker container start <CONTAINER ID || NAMES>``` - Inicia um container usando o ID ou pelo nome.  
  
```docker container restart <CONTAINER ID || NAMES>``` - Reinicia um container usando o ID ou pelo nome.  
  
```docker container pause <CONTAINER ID || NAMES>``` - Pausa um container usando o ID ou pelo nome.  
  
```docker container unpause <CONTAINER ID || NAMES>``` - Remove a pausa de um container usando o ID ou pelo nome.  
  
```docker container stop <CONTAINER ID || NAMES>``` - Fecha um container usando o ID ou pelo nome.  
  
```docker <start || restart || pause || unpause || stop> <CONTAINER ID || NAMES>``` - Abreviações dos comandos anteriores (versão que poderá ser depreciada).  

  ```docker exec -it <CONTAINER ID> bash``` - Executa o bash de um container já ativo.  
  
```docker container attach <CONTAINER ID || NAMES>``` - Acessa um container executando em segundo plano que tenha sido inicializado com o ```-dit``` ou ```it```.  
  
```docker container rm <CONTAINER ID || NAMES>``` - Remove um container não ativo.  
  
```docker container rm -f <CONTAINER ID || NAMES>``` - Força a parada e remove um container.  
  
```docker rmi <IMAGE ID>``` - Remove uma imagem docker não ativa.  
  
```docker rmi -f <IMAGE ID>``` - Remove uma imagem docker de força forçada.  
  
```docker container prune``` - Remove todos os containers inativos.  
  
```docker container top <CONTAINER ID || NAMES>``` - Traz as informações de processos do container passado.  
  
```docker logs <CONTAINER ID || NAMES>``` - Traz informações sobre o andamento do container passado.  
  
```docker logs -f <CONTAINER ID || NAMES>``` - Traz informações sobre o andamento do container passado, a tag -f faz o comando ser recorrente.
  