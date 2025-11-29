# Fila_Circular
Wesley Tiago Medeiros Lustosa, estudante de Análise e Desenvolvimento de Sistemas, desenvolveu este projeto como parte das atividades práticas da disciplina. A implementação da Fila Circular busca aplicar conceitos essenciais de estruturas de dados, organização lógica e manipulação eficiente de elementos em memória.

🌀 Fila Circular — Estrutura de Dados

Este repositório contém a implementação de uma Fila Circular, um tipo abstrato de dados que organiza elementos seguindo a política FIFO (First In, First Out), mas utilizando uma estrutura circular para melhor aproveitamento do espaço.

📌 Funcionalidades implementadas

➕ Adicionar elemento ao final da fila

➖ Remover e retornar o primeiro elemento

👀 Visualizar o elemento do início

🟢 Verificar se está vazia

🔴 Verificar se está cheia

🔢 Exibir o número de elementos

📋 Mostrar todos os elementos

📐 Retornar capacidade máxima

🧩 Mostrar espaço disponível na fila

import { FilaCircular } from "./src/FilaCircular";

const fila = new FilaCircular(5);

fila.enfileirar(10);
fila.enfileirar(20);
fila.enfileirar(30);

console.log(fila.primeiro()); // 10
console.log(fila.tamanho());  // 3

console.log(fila.desenfileirar()); // 10
console.log(fila.primeiro()); // 20

fila.exibir();

