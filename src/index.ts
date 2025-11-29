import { FilaCircular } from "./filaCircular";
export class Ui {
    // Adicionar um novo elemento ao final da fila.
    // Remover e retornar o primeiro elemento da fila (o elemento mais antigo).
    // Retornar o elemento que está no início da fila .
    // Verificar se a fila está vazia.
    // Verificar se a fila está cheia.
    // Exibir a quantidade de elementos da fila.
    // Exibir os elementos da fila.
    // Retornar a capacidade máxima da fila.
    // Exibir quantos elementos ainda podem ser inseridos na fila.
    loop(lista: FilaCircular) {
        while (true) {
            let resposta: number = Number(prompt(`Lista: [${lista.exibirFila()}]\nSaber quantos espaços faltam.(1)\nAdicionar Elemento a lista?(2)\nRemover ultimo Elemento da lista?\nMostrar primeiro alemento da lista(4)\nVerificar se Está vazio?(5)\nVerificar se esta cheio?(6)\nMostrar quantidade de elementos.(7)\nVerificar elementos.(8)\nMostrar capacidade maxima?(9)\n`))
            switch (resposta) {
                case 1:
                    alert(lista.retornarQuantosEspacosFaltam())
                    break
                case 2:
                    alert(lista.adicionarElemento(Number(prompt("qual Elemento deseja adicionar."))))
                    break
                case 3:
                    alert(lista.removerElemento())
                    break
                case 4:
                    alert(lista.retornarElementoInicial())
                    break
                case 5:
                    alert(lista.verificarSeVazia())
                    break
                case 6:
                    alert(lista.verificarSeCheia())
                    break
                case 7:
                    alert(lista.mostrarTamanho())
                    break
                case 8:
                    alert(lista.exibirFila())
                    break
                case 9:
                    alert(lista.mostrarCapacidade())
                    break
                case resposta:
                    alert("Responda algo valido.")
                    break


            }
        }
    }
}