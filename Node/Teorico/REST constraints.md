## As 6 restrições para ser RESTful  
  
A arquitetura REST define seis restrições, chamadas constraints, que devem ser respeitadas para que sua API seja RESTful:  
  
### **1 - Interface uniforme (Uniform Interface)**  
A interface de comunicação entre seu servidor e seu cliente deve ser definida e seguida à risca por meio de um padrão, para que assim ela se mantenha consistente.  
  
Essa interface inclui: endpoint, tipo de retorno e o uso dos verbos HTTP.

### Recursos e coleções  
  
O recurso a ser acessado/alterado deve ser identificado pelo endpoint da requisição, Exemplo: https://swapi.dev/api/planets/:id  
  
Observe que nessa URL o recurso que queremos acessar (planet) é facilmente identificado.  
  
### Tipo do retorno  
  
O Content-type nas respostas de requisições deve  dizer, para o nosso cliente, que tipo de conteúdo estamos retornando.  
Exemplos: Ao retornar um JSON, enviamos o header como Content-type: application/json, se nosso retorno fosse HTML, seria Content-type: text/html.  
  
Alguns formatos comuns de Content-type são: JSON, XML e JavaScript.  
  
Devemos manter nossos retornos consistentes, se o cliente pede ou envia informação no formato JSON, devemos processar e retornar mantendo o mesmo formato (JSON).  
  
Se um erro em um endpoint retorna os campos code, error e message, todos os erros devem retornar, pelo menos, nesses mesmos campos.  
  
Se uma requisição ao endpoint de uma coleção (GET /posts, por exemplo), retorna um Array, todos os endpoints de coleção devem retornar Arrays.  
  
Se quando realizamos uma requisição GET /products, recebemos um array de produtos, ao realizar a requisição GET /sales, não devemos receber um JSON no formato { "sales": [{ ... }] }, já que esse comportamento é inconsistente com o do endpoint GET /products.  
  
### Ações/Verbos  
  
A ação que vamos realizar no recurso deve ser identificada pelo verbo HTTP da requisição. Para o REST, os principais verbos HTTP são: POST, GET, PUT e DELETE. Cada um realiza uma ação específica, que depende do lugar que será enviado, neste caso ou para um endpoint de um recurso ou para um endpoint de uma coleção.  
  
### Respostas  
  
Resposta são sempre obrigatórias, mesmo que não tenham uma estrutura satisfatória.
Existem boas práticas em relação aos status code que nosso servidor envia como resposta. Temos uma variedade de códigos que devem ser utilizados em situações específicas:  

 - 1xx: Informação;
 - 2xx: Sucesso;
 - 3xx: Redirecionamento;
 - 4xx: Erro do cliente;
 - 5xx: Erro no servidor.  
   

### **2 - Arquitetura cliente-servidor**  
  
O cliente se preocupa com a exibição dos dados, experiência da pessoa usuária, etc. O servidor se preocupa com o armazenamento e acesso dos dados, cache, log e etc.  
  
Essa separação permite que as duas partes se desenvolvam de forma independente, ou seja, você pode trocar o cliente ou adicionar um novo sem mudar nada no servidor. Também pode mover o servidor para uma outra plataforma, escalá-lo ou até mesmo mudar completamente sua arquitetura interna, desde que a API que você fornece para seus clientes não mude (endpoint, resposta etc.).  
  
### **3 - Sem estado (Stateless)**  
  
Sem estado significa que toda requisição deve conter todas as informações necessárias (ser autossuficiente) para nossa API realizar uma ação. Dessa forma, não podemos reutilizar nenhum contexto que está armazenado no servidor (uma variável, por exemplo).  
  
Ao criarmos componentes que não tenham estado, temos os seguintes benefícios:  
 - **Transparência:** facilita o trabalho do servidor, pois todas as informações necessárias já estão na requisição;
 - **Escalabilidade:** sem precisar manter estado, nosso servidor pode desalocar recursos que foram alocados para realizar uma ação específica e só voltar a utilizá-los quando necessário.  
   
## **4 - Cacheable**  
  
Cache é definido como um "depósito de informações". Por exemplo, quando seu navegador armazena imagens e arquivos para não precisar pedi-los para o servidor toda vez que você revisitar uma página.  
  
Esse cache é feito no lado do cliente, no browser. O princípio aqui é que: as respostas dadas pela nossa API devem dizer, explicitamente, se podem ou não ser cacheadas e por quanto tempo. Com isso, evita-se que clientes forneçam respostas "velhas" ou inapropriadas.  
  
No HTTP, o cache é definido pelo header Cache-Control: max-age=120. Nesse caso, o cliente "cacheia" a resposta da requisição por 120 segundos. Durante esse tempo, o cliente fornecerá a resposta cacheada, sem precisar consultar o servidor.  
  
## **5 - Sistema em camadas (Layered System)**  
  
No caso do REST, essa divisão em camadas é sobre: abstrair do cliente as camadas necessárias para responder a uma requisição.  
  
Portanto, para o cliente não importa se você tem uma "API A" que se comunica com a "API B" que se comunica com uma fila ou um arquivo em um "local C", ou até mesmo se sua API consulta um banco de dados local ou se está armazenado em outro lugar.
Em síntese, quem consome a API só precisa receber a resposta esperada e não de qual lugar ela vem.  
  
## **6 - Código sob demanda (Code on Demand)**  
  
Esse princípio consiste em dar a possibilidade ao nosso servidor de enviar código ao nosso cliente, onde será executado. Assim, conseguimos customizar o comportamento do cliente.  
Exemplo: Enviar um "widget" para colocar na página um chat no qual o cliente possa conversar com alguém.