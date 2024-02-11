const perguntas = [
    {
      pergunta: "O que é CPU?",
      respostas: [
        "Computer Processing Unit",
        "Central Processor Unit",
        "Central Processing Unit"
      ],
      correta: 2
    },
    {
      pergunta: "Qual componente armazena dados temporários de curto prazo para o processador?",
      respostas: [
        "ROM (Read-Only Memory)",
        "HDD (Hard Disk Drive)",
        "RAM (Random Access Memory)"
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes não é um tipo de memória de armazenamento?",
      respostas: [
        "RAM",
        "GPU",
        "Cache"
      ],
      correta: 1
    },
    {
      pergunta: "O que é GPU?",
      respostas: [
        "General Processing Unit",
        "Graphics Processor Unit",
        "Graphical Processing Unit"
      ],
      correta: 1
    },
    {
      pergunta: "Qual componente é responsável pela comunicação entre todos os dispositivos conectados à placa-mãe?",
      respostas: [
        "CPU",
        "Chipset",
        "BIOS"
      ],
      correta: 1
    },
    {
      pergunta: "O que significa a sigla SSD?",
      respostas: [
        "System Storage Device",
        "Super Speed Drive",
        "Solid State Drive"
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses conectores é utilizado para conectar periféricos como teclado e mouse?",
      respostas: [
        "HDMI",
        "VGA",
        "USB"
      ],
      correta: 2
    },
    {
      pergunta: "O que é overclocking?",
      respostas: [
        "Reduzir o consumo de energia",
        "Desligar componentes desnecessários",
        "Aumentar a velocidade do relógio do processador"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função da placa de vídeo?",
      respostas: [
        "Gerenciar a conexão com a internet",
        "Armazenar arquivos temporários",
        "Processar dados gráficos"
      ],
      correta: 2
    },
    {
      pergunta: "O que é um barramento (bus) em hardware?",
      respostas: [
        "Dispositivo de entrada",
        "Tipo de memória RAM",
        "Caminho de comunicação entre os componentes"
      ],
      correta: 2
    }
  ];
  
  //puxando o id do html
  const quiz = document.querySelector ('#quiz')
  const template = document.querySelector('template')
      
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const MostrarTotal = document.querySelector('#Acertos span')
  MostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    // loop ou laço de repetição
    for(const item of perguntas) {
      
      //puxando as perguntas
      const quizitem = template.content.cloneNode(true)
      //printar as perguntas
      quizitem.querySelector('h3').textContent = item.pergunta
  
     for (let resposta of item.respostas) {
        const dt = quizitem.querySelector ('dl dt').cloneNode(true)
        //printar as respostas
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
      
          }    
        MostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        //rodar as respostas
       quizitem.querySelector('dl').appendChild(dt)
     }
  
      //remoder o Resposta A
      quizitem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
    quiz.appendChild(quizitem)
  }