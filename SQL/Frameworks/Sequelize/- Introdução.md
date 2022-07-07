# ORM
  
ORM (Object-Relational Mapping) é uma técnica que permite fazer um mapeamento estrutural entre as entidades do banco de dados e os objetos que as representam no código JavaScript. O mapeamento objeto-relacional abstrai as diferenças entre os dois paradigmas, da aplicação e do banco de dados.  
  
### Mapeamentos  
  
Existem padrões que são mais utilizados para fazer o mapeamento entre as entidades do banco de dados e os objetos que as representam no código. Esses padrões são o **Data Mapper** e o **Active Record**. Ambos os padrões foram definidos por Martin Fowler em seu livro Padrões de Arquitetura de Aplicações Corporativas.  
  
### Data Mapper  
  
Nesse padrão, a classe que representa a tabela do banco de dados não deve conhecer os recursos necessários para realizar as transações com o banco de dados.  
  
### ORM Data Mapper  
  
No Data Mapper a entidade está desacoplada do banco de dados. As informações e os comportamentos relacionados à essa entidade no contexto específico do nosso negócio ficam em um lugar. Já em outro lugar, o Mapeador, temos a camada responsável por criar as transações das informações com o banco de dados.
Isso significa que enquanto o Mapeador está fortemente acoplado ao banco de dados e deve ser refatorado ou refeito sempre que houver mudança na estrutura do banco de dados, a entidade está completamente independente - a ela não interessa como o banco de dados está. Essa complexidade é absorvida pelo mapeador.  
  
### Active Record  
  
Diferente do padrão Data Mapper, no Active Record a classe que representa a tabela conhece os recursos necessários para realizar as transações no banco de dados.  
  
no Active Record o model está diretamente acoplado ao banco de dados. Dessa forma, o nosso próprio model descreve as operações do banco de dados e tem conhecimento de como salvar os dados, atualizá-los, deletá-los etc.  
<hr>  
<br>    
  
# Sequelize
Uma das bibliotecas de ORM mais conhecidas é o Sequelize, que segue o padrão **Active Record**, vale ressaltar que a maioria dos métodos fornecidos pelo Sequelize são assíncronos, portanto retornam promises.  
  
o Sequelize possui muitas vantagens sobre a utilização de uma interface direta com o MySQL. Quando tentamos fazer a interação direta com o banco de dados, enfrentamos problemas como:  
  
   - O JavaScript sozinho não possui um suporte eficiente para o SQL, você precisaria de um script SQL separado para criar seu database e tabelas.
   - As queries SQL precisam ser incorporadas ("embedadas") no código do JavaScript para serem utilizadas.
   - Por causa dessas limitações, acabamos apenas incluindo boilerplates de SQL em vez de utilizar a Lógica de Negócio na nossa aplicação.
  
Esses são alguns problemas que o Sequelize ajuda a resolver!  
  
### Sequelize Model  
  
Os models são a essência do Sequelize. Um model é uma abstração que representa uma linha na tabela em seu banco de dados e diz ao Sequelize várias coisas sobre essa entidade, como o nome e quais atributos (colunas) ela possui (e seus tipos de dados).  
  
### Sequelize Migrations  
  
Uma migration é uma forma de versionar o schema do banco de dados. Ou seja, cada migration conterá um pedaço de código que representa o histórico de alterações feitas no nosso banco de dados.  
  
Usando migrations, o mapeador objeto-relacional sabe exatamente quais alterações executar no banco de dados, tanto para criar algo novo quanto para restaurar o banco para uma versão mais antiga. Além disso, uma migration tem dois códigos conhecidos como Up e Down. Ou seja: toda migration, além de saber o que fazer para executar as mudanças no banco de dados (Up), também deve saber como reverter essas mudanças (Down). Isso significa que as migrations têm o poder de avançar ou reverter o seu banco de dados para qualquer um dos estados que ele já teve.  
  
### Seeders  
  
Seeder é usado para, basicamente, alimentar o banco de dados com informações necessárias para o funcionamento mínimo da aplicação. As bibliotecas de mapeamento objeto-relacional permitem que controlemos informações que devem ser criadas assim que nosso banco de dados/tabelas forem criados. Ou seja, podemos configurar nosso banco para ser automaticamente criado e povoado!  
  
