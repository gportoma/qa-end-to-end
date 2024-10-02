# Projeto de Qualidade de Software

Este projeto foi desenvolvido para analisar e aplicar conceitos de qualidade de software, abrangendo tanto o front-end quanto o back-end. O projeto inclui a criação de cenários de testes utilizando a linguagem Gherkin para o front-end, e o Postman para validar as APIs no back-end.

## Objetivos do Projeto

- **Melhorar a qualidade do software**: Através da definição e execução de cenários de testes que validam a conformidade com os requisitos do sistema.
- **Apoiar o processo de desenvolvimento**: Garantir que tanto o front-end quanto o back-end atendam às expectativas dos usuários finais e estejam livres de falhas críticas.
- **Foco em Cenários Reais**: Testes baseados em cenários de uso real para garantir a maior cobertura possível.

## Ferramentas Utilizadas

- [Cypress](https://www.cypress.io/): Usado para verificar cenários de qualidade no front-end.
- [Gherkin](https://cucumber.io/docs/gherkin/): Linguagem para descrever cenários de testes de maneira clara e compreensível para todos os stakeholders.
- [Postman](https://www.postman.com/): Usado para testar e validar as APIs no back-end, garantindo que os serviços respondam de maneira adequada e eficiente.

## Estrutura do Projeto

O projeto foi organizado da seguinte maneira:

- **Cenários de Testes Front-End**: Descritos em Gherkin e automatizados com Cypress.
- **Testes de Back-End**: Feitos utilizando coleções no Postman, validadas com testes de API.
- **Documentação**: Inclui o mapeamento de testes e a definição dos requisitos de qualidade para garantir que as melhores práticas estão sendo seguidas.

## Como Executar o Projeto

### Front-End

1. Clone o repositório:
   ```bash
   git clone https://github.com/sua-conta/seu-repositorio.git

2. Instale as dependências do projeto:
    ```bash
   npm install

3. Execute os cenários de qualidade do front-end com Cypress:
    ```bash
   npx cypress open

### Back-End
1. Importe a coleção [Automation BackEnd.postman_collection.json](Automation BackEnd.postman_collection.json) no Postman.
2. Execute as requisições da API dentro da coleção.
3. Valide as respostas e analise os testes de API automatizados.
