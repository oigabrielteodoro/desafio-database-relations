# Cadastro de novos cliente

  **RF** -> Requisição funcional

  - O cliente deve conseguir se cadastrar na aplicação;

  **RNF** -> Requisição não funcional

  - A aplicação deve utilizar o banco de dados PostgreSQL;
  - A aplicação deve funcionar utilizando TypeORM;

  **RN** -> Regras de negócio

  - O cliente não pode se cadastrar com um email já existente;
  - A rota deve receber *name* e *email* dentro do corpo da requisição;
  - A rota deve devolver as informações de um novo cliente cadastrado;
  - O cliente deve ser cadastrado dentro do banco de dados com os campos *name*, *email*, *created_at* e *updated_at*;

# Cadastro de novos produtos

  **RF** -> Requisição funcional

  - A rota deve conseguir cadastrar um novo produto;

  **RNF** -> Requisição não funcional

  - A aplicação deve utilizar o banco de dados PostgreSQL;
  - A aplicação deve funcionar utilizando TypeORM;

  **RN** -> Regras de negócio

  - O produto não pode se cadastrar com um nome já existente;
  - A rota deve receber *name*, *price* e *quantity* dentro do corpo da requisição;
  - A rota deve devolver as informações de um novo produto cadastrado;
  - O produto deve ser cadastrado dentro do banco de dados com os campos *name*, *price*, *quantity*, *created_at* e *updated_at*;
  - O campo *quantity* deve possuir o `type` *decimail* na migration, passando também as propriedades `precision` e `scale`;

# Cadastro de novos pedidos

  **RF** -> Requisição funcional

  - A rota deve conseguir cadastrar novos pedidos;

  **RNF** -> Requisição não funcional

  - A aplicação deve utilizar o banco de dados PostgreSQL;
  - A aplicação deve funcionar utilizando TypeORM;

  **RN** -> Regras de negócio

  - A rota deve receber `customer_id` em *array de produtos*, contendo o `id` e a `quantity` dentro do corpo da requisição;
  - A rota deve cadastrar na tabela `order` um novo pedido, que estará relacionado ao `customer_id` informado, `created_at` e `updated_at`;
  - Na tabela `order_products` deve ser armazenado o `product_id`, `order_id`, `price`, `quantity`, `created_at` e `updated_at`;
