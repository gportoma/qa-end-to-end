# Cenários de Teste - CRM

## Funcionalidade: Exibir informações gerais do cliente

- **Cenário: Exibir informações gerais corretamente**
    - Dado que estou na tela principal do CRM
    - Quando visualizo o cartão de informações gerais do cliente
    - Então devo ver o nome do cliente "Justine Robinson"
    - E devo ver o status "Ativo"
    - E devo ver o número de telefone "45 9 9555 5555"
    - E devo ver o e-mail "justine@email.com"
    - E devo ver os ícones das redes sociais corretamente

- **Cenário: Consulta de informações com 1000 acessos simultâneos**
    - Dado que 1000 usuários estão consultando as informações do cliente simultaneamente
    - Quando visualizo o cartão de informações gerais do cliente
    - Então o sistema deve exibir as informações corretamente para todos os usuários
    - E o tempo de resposta não deve ultrapassar 2 segundos para nenhum usuário
    - E o sistema não deve apresentar falhas ou indisponibilidade

---

## Funcionalidade: Visualizar oportunidades do cliente

- **Cenário: Exibir resumo de oportunidades**
    - Dado que estou na tela principal do CRM
    - Quando visualizo a seção "Oportunidades"
    - Então devo ver 4 oportunidades ganhas com o valor total de "R$ 20.000,00"
    - E devo ver 1 oportunidade perdida com o valor de "R$ 4.300,00"
    - E devo ver 2 oportunidades abertas
    - E devo ver 0 oportunidades descartadas

- **Cenário: Clicar para ver todas as oportunidades**
    - Dado que estou na tela principal do CRM
    - Quando clico no link "Ver todas oportunidades"
    - Então devo ser redirecionado para a página de detalhes de todas as oportunidades

- **Cenário: Exibir mais de 1000 oportunidades**
    - Dado que existem 1000 oportunidades associadas ao cliente
    - Quando visualizo a seção "Oportunidades"
    - Então o sistema deve carregar e exibir todas as 1000 oportunidades corretamente
    - E o sistema não deve apresentar lentidão ou falhas de carregamento

- **Cenário: Aplicar filtro inválido nas oportunidades**
    - Dado que estou na tela de oportunidades
    - Quando aplico um filtro inválido ou inexistente nas oportunidades
    - Então o sistema deve exibir uma mensagem de "Nenhuma oportunidade encontrada"
    - E o sistema não deve falhar ou exibir erros inesperados

---

## Funcionalidade: Exibir atividades do cliente

- **Cenário: Exibir atividades em atraso**
    - Dado que estou na tela principal do CRM
    - Quando visualizo a seção de atividades
    - Então devo ver que existe 1 atividade em atraso
    - E a atividade deve ser "Ligação de agendamento" com status de "Em atraso por 04 dias"

- **Cenário: Exibir atividades previstas**
    - Dado que estou na tela principal do CRM
    - Quando visualizo a seção de atividades previstas
    - Então devo ver as atividades com datas e horários corretos
    - E devo ver uma reunião de orçamento para hoje às 15h
    - E devo ver um e-mail de documentação para amanhã às 09:45
    - E devo ver um almoço corporativo para amanhã às 15h

- **Cenário: Exibir atividades concluídas**
    - Dado que estou na tela principal do CRM
    - Quando visualizo a seção de atividades concluídas
    - Então devo ver a atividade "Apresentação feira agrícola" concluída em "Segunda-feira (17/09/2018)"
    - E devo ver "Ligação contrato" concluída em "Quarta-feira (19/09/2018)"

- **Cenário: Exibir mais de 500 atividades previstas**
    - Dado que existem 500 atividades previstas para o cliente
    - Quando visualizo a seção "Atividades previstas"
    - Então todas as 500 atividades devem ser exibidas
    - E o sistema deve permitir rolagem contínua sem travamentos
    - E o sistema não deve demorar mais de 2 segundos para carregar a lista completa

- **Cenário: Exibir atividades com data inválida**
    - Dado que existe uma atividade com data inválida (31/02/2024)
    - Quando visualizo a seção de atividades
    - Então o sistema deve ignorar a atividade com data inválida
    - E o sistema deve exibir um aviso de "Atividade com data inválida"
    - E o sistema deve continuar a funcionar corretamente

- **Cenário: Buscar atividades com termo inexistente**
    - Dado que estou na seção de atividades
    - Quando realizo uma busca com um termo inexistente
    - Então o sistema deve exibir "Nenhuma atividade encontrada"
    - E o sistema não deve apresentar falhas ou lentidão

---

## Funcionalidade: Exibir limite de crédito do cliente

- **Cenário: Exibir informações sobre limite de crédito**
    - Dado que estou na tela principal do CRM
    - Quando visualizo a seção "Limite de crédito"
    - Então devo ver o valor concedido "R$ 12.000,00"
    - E devo ver o valor disponível "R$ 3.105,00"

- **Cenário: Consulta de limite de crédito com alterações simultâneas**
    - Dado que múltiplos usuários estão alterando o limite de crédito do cliente simultaneamente
    - Quando eu visualizo o limite de crédito na tela principal
    - Então o valor exibido deve refletir as alterações mais recentes
    - E não deve haver inconsistência entre o valor exibido e o valor atualizado no banco de dados

- **Cenário: Exibir limite de crédito com dados corrompidos**
    - Dado que os dados de limite de crédito estão corrompidos no banco de dados
    - Quando visualizo a seção de limite de crédito
    - Então o sistema deve exibir uma mensagem de erro amigável "Erro ao carregar limite de crédito"
    - E não deve travar ou exibir dados incorretos

---

## Funcionalidade: Exibir títulos financeiros

- **Cenário: Exibir títulos vencidos e a vencer**
    - Dado que estou na tela principal do CRM
    - Quando visualizo a seção "Títulos financeiros"
    - Então devo ver que existe 1 título vencido no valor de "R$ 3.105,00"
    - E devo ver 2 títulos a vencer com o valor de "R$ 3.105,00" cada

- **Cenário: Exibir títulos financeiros com grande volume de dados**
    - Dado que existem 1000 títulos vencidos associados ao cliente
    - Quando visualizo a seção "Títulos financeiros"
    - Então o sistema deve carregar todos os 1000 títulos vencidos sem erro
    - E o sistema deve exibir os valores corretos sem atrasos
    - E o tempo de resposta do sistema não deve ultrapassar 3 segundos

- **Cenário: Exibir títulos financeiros com moeda incompatível**
    - Dado que um título financeiro possui uma moeda que não é suportada pelo sistema
    - Quando visualizo a seção de títulos financeiros
    - Então o sistema deve exibir um aviso de "Moeda incompatível"
    - E deve continuar exibindo os outros títulos corretamente

---

## Funcionalidade: Exibir gráfico de vendas

- **Cenário: Exibir gráfico de vendas com mais de 10.000 pontos de dados**
    - Dado que existem mais de 10.000 vendas associadas ao cliente
    - Quando visualizo o gráfico de vendas
    - Então o gráfico deve carregar corretamente todos os pontos de dados
    - E o sistema não deve apresentar lentidão ou falhas de exibição
    - E o tempo de carregamento do gráfico não deve ultrapassar 5 segundos
