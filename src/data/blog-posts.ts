
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "observabilidade-apm",
    title: "Observabilidade == APM?",
    excerpt: "Entenda as Diferenças e Evite Armadilhas Comuns.",
    date: "29 de Janeiro de 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    content: `
Recentemente, um termo novo começou a circular no mundo da tecnologia: observabilidade. Como acontece com muitos conceitos emergentes, este se baseia em conhecimentos acumulados ao longo das décadas. No entanto, não é raro que novos conceitos sejam confundidos com os antigos, por vezes sendo vistos apenas como uma estratégia de marketing. Neste contexto, algumas empresas começaram a substituir termos em seus materiais de marketing, adaptando-se a essa nova tendência sem realmente alterar seus produtos.

É essencial entender, contudo, que observabilidade difere significativamente do conceito de "monitoramento", conforme já discuti em algumas *lives* e artigos anteriores no blog:

***💡 Monitoramento é querer saber as respostas para perguntas específicas, observabilidade é querer saber as respostas para perguntas que ainda não foram feitas.***

Em suma, enquanto o monitoramento se preocupa em verificar o estado atual de elementos como memória ou filas em uma aplicação específica, a observabilidade permite teorizar sobre o comportamento da aplicação e usar dados de telemetria para validar ou refutar essas teorias. Questões como: "Será que a lentidão está afetando somente usuários em São Paulo ou é um problema geral? Será que impacta apenas clientes VIP ou está relacionado a um método de pagamento específico?" são exemplos do escopo da observabilidade.

## **O Papel do APM Nessa Discussão**

Recentemente, deparei-me com um post em uma rede social que me fez lembrar do equívoco comum de considerar observabilidade e APM (Application Performance Management) como sinônimos:

![“Eu tenho trabalhado com observabilidade (anteriormente conhecida como APM) por alguns anos...”](https://cdn.hashnode.com/res/hashnode/image/upload/v1705479426107/f8759745-f04b-4636-b30b-0901d131535c.png align="center")

A postagem dizia: *“Eu tenho trabalhado com observabilidade (anteriormente conhecida como APM) por alguns anos...”*

Para deixar claro: eu não conheço essa pessoa e não conheço a solução que ela vende, e respeito muito todas as pessoas que trabalham nessa empresa e são atuantes no projeto OpenTelemetry.

No entanto, tenho que discordar:

***💡 Observabilidade não é o que antes era conhecido como APM***

A observabilidade mantém-se como a capacidade de explorar dados de telemetria, formulando e respondendo perguntas. Já o APM, por outro lado, oferece visualizações e insights específicos para questões comuns, como identificar os endpoints mais lentos ou as queries SQL que mais impactam o desempenho.

O APM é extremamente útil, mas equiparar observabilidade a APM é um equívoco que pode ser prejudicial tanto para quem extrai valor do APM quanto para quem busca compreender a observabilidade em sua plenitude.
    `
  },
  {
    slug: "seu-maior-custo-de-telemetria-e-com-logs-mas-nao-precisa-ser-assim",
    title: "Seu maior custo de telemetria é com logs. Mas não precisa ser assim.",
    excerpt: "Logs consomem boa parte do nosso orçamento de observabilidade, trazendo um custo/benefício questionável. Como podemos mudar isso?",
    date: "22 de Janeiro de 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    content: `
Um dos maiores desafios e custos associados à observabilidade de um sistema é a necessidade de transmitir e armazenar registros detalhados de eventos (logs). Apesar dos custos, esses registros são essenciais para o monitoramento e solução de problemas. Geralmente, cada registro é armazenado localmente em um arquivo de texto simples e enviado para um local central para armazenamento e pesquisa.

Neste sistema de armazenamento de logs, eles geralmente passam por compressão para reduzir os custos de armazenament, e indexação para facilitar a busca e recuperação posterior. Mesmo depois de tudo isso, muitos desses registros podem nunca mais serem vistos ou consultados novamente. Com tudo isso em mente, não preciso ser um mágico ou vidente para adivinhar que o maior custo que você tem em sua solução de observabilidade está relacionado aos logs.

***💡 E se eu te dissesse que você pode reduzir boa parte de seus custos de observabilidade utilizando uma estratégia muito simples?***

Ao analisarmos nossos registros de logs, fica claro que o papel mais importante da maioria deles é informar quando um determinado evento ocorreu. Uma vez armazenados, agregamos essas informações em tempo de consulta para saber quantas vezes o evento aconteceu em um determinado período de tempo. E é exatamente para isso que temos outro sinal: métricas. Elas são armazenadas geralmente em um banco de dados temporal, onde o nome do evento é armazenado apenas uma vez, e os diferentes valores em cada intervalo de tempo são armazenados com um alto grau de compressão. O resultado é que cada ocorrência de um evento ocupa, estatisticamente, menos de 1.5 bytes, enquanto o registro do evento de log armazenará tanto a representação em texto puro quanto os índices utilizados para busca, resultando em um custo de armazenamento muito superior.

***💡Cada ocorrência de um evento ocupa, estatisticamente, menos de 1.5 bytes como métrica. Ao calcular o custo de uma solução de logs, usa-se 200 bytes para cada ocorrência como ponto de partida.***

Não estou dizendo que TODOS os eventos devem ser migrados de logs para métricas, mas muitos dos eventos que armazenamos hoje podem sim ser convertidos.

## Como fazer a conversão

A melhor forma de se fazer a conversão é ao alterar a instrumentação no seu próprio código. Por exemplo, onde antes víamos algo assim…

\`\`\`go
log.Info("chamada http recebida para / , status é 200")
\`\`\`

… agora temos algo assim ao usar a API de métricas do OpenTelemetry:

\`\`\`go
// em um código de inicialização:
contadorHTTP, err := meter.Int64Counter(
		"http.calls",
		metric.WithDescription("Quantidade de vezes que recebemos uma chamada HTTP."),
	)

// no nosso handler HTTP, adicionamos 1 ao contador
contadorHTTP.Add(r.Context(), 1, metric.WithAttributes(semconv.HTTPStatusCode(200))))
\`\`\`

A segunda forma de se fazer isso é utilizar o OpenTelemetry Collector para converter de um sinal para o outro. Por exemplo, pode-se utilizar o \`count connector\` juntamente com um filtro, para que apenas eventos pré-selecionados sejam convertidos em métricas. Todos os outros eventos continuam como logs:

\`\`\`yaml
receivers:
  otlp:
    protocols:
      grpc:

processors:
  filter/remove-common-events:
    logs:
      log_record:
        - 'IsMatch(body, ".*http call made to route.*")'

  filter/retain-common-events:
    logs:
      log_record:
        - 'not IsMatch(body, ".*http call made to route.*")'

exporters:
  logging/metrics:
    verbosity: detailed
  logging/logs:

connectors:
  count:
  forward:

service:
  pipelines:
    # a pipeline principal, direcionando os dados para as outras pipelines de logs
    logs:
      receivers:
        - otlp
      exporters:
        - forward
    
    # filtra os eventos comuns, mantendo o restante
    logs/everything-else:
      receivers:
        - forward
      processors:
        - filter/remove-common-events
      exporters:
        - logging/logs
    
    # mantem apenas os eventos comuns
    logs/common-events:
      receivers:
        - forward
      processors:
        - filter/retain-common-events
      exporters:
        - count
    
    # converte logs em metricas
    metrics/count-common-events:
      receivers:
        - count
      exporters:
        - logging/metrics
\`\`\`

Com isso, se detectarmos que o evento com o texto “http call made to route” é muito comum em nosso ambiente, podemos convertê-lo em métricas diretamente no Collector. Para testar, podemos utilizar o \`telemetrygen\` para gerar dois tipos de registros de logs, um que vai ser convertido pra métricas, e outro que não:

\`\`\`bash
telemetrygen logs --otlp-insecure --logs 10 --body "http call made to route '/', status=200"
telemetrygen logs --otlp-insecure --logs 10 --body "some other message"
\`\`\`

Entre um comando e outro, veja as métricas internas do nosso Collector, pra ter certeza de que logs foram convertidos para métricas e de logs que continuaram sendo logs. Dê uma olhada nas métricas \`otelcol_exporter_sent_metric_points\` , \`otelcol_exporter_sent_log_records\` e \`otelcol_receiver_accepted_log_records\`:

* ao rodar o primeiro comando, o Collector deve ter aceito 10 registros de log, exportado 10 pontos de dados de métricas, e nenhum log
    
* ao rodar o segundo comando, o Collector deve ter aceito 20 registros de log, exportado 10 pontos de dados de métricas, e 10 registros de log
    

## Conclusão

Muito provavelmente você tem um sistema que emite logs, mas não emite métricas. Por este motivo, você acaba usando ferramentas de log quando seu interesse está na verdade em métricas. Porém, os custos acabam sendo muito mais altos do que se o sinal adequado fosse utilizado. A conversão de logs em métricas não só otimiza os custos de armazenamento e transmissão, mas também pode melhorar a eficiência na análise de dados e na detecção de problemas.
`
  },
  {
    slug: "telemetria-monitoramento-e-observabilidade",
    title: "Telemetria, Monitoramento e Observabilidade",
    excerpt: "Vamos falar sobre estes três termos que sempre andam juntos?",
    date: "04 de Janeiro de 2024",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    content: `
A telemetria, frequentemente esquecida nas discussões sobre tecnologia, é um elemento crucial no entendimento e aprimoramento do desempenho das aplicações. Ela refere-se aos dados gerados por uma aplicação que não são diretamente ligados ao seu aspecto comercial, mas que são essenciais para entender o comportamento do software.

Uma excelente maneira de compreender o que é telemetria é através da analogia com a condução de um carro. Quando dirigimos, uma série de dados como velocidade, aceleração, e desaceleração são constantemente registrados. Esses dados, semelhantes aos gerados por uma aplicação, fornecem insights sobre o desempenho, como a velocidade de processamento ou o número de requisições recebidas por minuto.

## Os **Tipos Principais de Dados de Telemetria**

**Logs**: Esses são registros de eventos específicos que ocorrem durante a operação da aplicação. Eles são cruciais para o processo de depuração e fornecem um relato detalhado do que aconteceu e quando.

**Métricas**: Representam um resumo agregado de como a aplicação está funcionando. Por exemplo, elas podem quantificar o número atual de visitantes de um site. Métricas podem ser representadas de várias formas, incluindo contadores que só aumentam ou valores que variam.

**Rastros**: Estes são conjuntos de informações que ajudam a entender o percurso de uma requisição específica através de vários processos ou microserviços. Eles são fundamentais para compreender como as diferentes partes de uma aplicação interagem.

### Outros Sinais

Existem também outros tipos de dados de telemetria que são importantes para entender o desempenho e o comportamento de uma aplicação, entre eles:

**Eventos**: São registros de ocorrências significativas que ocorrem durante a execução da aplicação. Eles podem ser utilizados para identificar eventos específicos e analisar seu impacto no sistema.

**Perfis**: Permitem o monitoramento e a análise do desempenho de uma aplicação ao longo do tempo. Eles fornecem informações detalhadas sobre a utilização de memória, tempo de execução de funções e outros aspectos relacionados ao desempenho.

**Erros (Stack Traces)**: São registros que capturam informações sobre exceções e erros que ocorrem durante a execução da aplicação. Esses registros são essenciais para identificar e corrigir problemas no sistema.

Esses tipos adicionais de dados de telemetria complementam os logs, métricas e rastros mencionados anteriormente, fornecendo uma visão mais completa e detalhada do desempenho e do estado da aplicação.

## **Monitoramento vs. Observabilidade**

### Monitoramento

O monitoramento diz respeito a ter respostas para perguntas conhecidas sobre uma aplicação. Por exemplo, receber um alerta quando a CPU de um servidor atinge 90% de sua capacidade. É uma forma proativa de estar ciente do estado atual do sistema.

### Observabilidade

Por outro lado, a observabilidade se refere à capacidade de entender o que está acontecendo em um sistema com base nos dados coletados, incluindo a telemetria. Ela é crucial para diagnosticar problemas não previstos durante o desenvolvimento.

## **Conclusão**

Em resumo, a telemetria é a matéria-prima para o monitoramento e a observabilidade em tecnologia da informação. Ela fornece os dados necessários para compreender profundamente o funcionamento de uma aplicação, permitindo a otimização e a manutenção eficiente do sistema.

## Vídeo original

Falei sobre este tópico em um vídeo disponível no canal do [Dose de Telemetria](https://www.youtube.com/@DoseDeTelemetria) no YouTube. Você pode assistir ao vídeo [aqui](https://youtu.be/x-FKKFCMbjc).

%[https://www.youtube.com/watch?v=x-FKKFCMbjc]
    `
  }
];
