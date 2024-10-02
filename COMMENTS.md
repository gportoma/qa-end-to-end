# Comentários sobre a Arquitetura e Decisões

## Arquitetura do Projeto

- **Cypress** foi escolhido como o framework de automação de testes devido à sua simplicidade e robustez. Ele permite executar testes de ponta a ponta de forma eficiente e com integração ao Node.js.
- **Gherkin** foi utilizado para descrever os cenários de teste de forma clara e compreensível para todos os envolvidos no projeto, como desenvolvedores e stakeholders. Isso garante que os cenários estejam alinhados com os requisitos do sistema.
- **Padrão "Page Object"**: Utilizado para organizar os elementos e interações com a página, permitindo maior reutilização e facilitando a manutenção dos testes.

## Bibliotecas de Terceiros Utilizadas

- **Cypress**: Framework de automação de testes end-to-end.
- **Gherkin**: Para a escrita de cenários de testes no formato BDD.

## Futuras Melhorias

- **Testes de Performance**: Integrar testes de performance mais detalhados para garantir que o sistema lida bem com grandes volumes de dados.
- **Testes Cross-Browser**: Adicionar execução de testes em múltiplos navegadores (ex. Firefox, Safari) para garantir compatibilidade cross-browser.
- **Pipeline CI/CD**: Implementar integração contínua para executar os testes automaticamente em um servidor de CI (ex: GitHub Actions ou Jenkins).
 
## Conclusão

Este projeto foi desenvolvido com foco em clareza, manutenção e reusabilidade dos testes. A arquitetura simples, juntamente com a utilização do Cypress e Gherkin, garante que os testes possam ser rapidamente compreendidos e expandidos.
