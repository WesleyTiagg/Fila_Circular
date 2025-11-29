export class FilaCircular {
    private capacidade: number; 
    private fila: number[];
    private frente: number|null
    private tras: number|null;
    private tamanho: number;

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.fila = [];
        this.frente = null;
        this.tras = null;
        this.tamanho = 0;
    }

// Exibir quantos elementos ainda podem ser inseridos na fila.


    // Verificar se a fila está cheia.
    verificarSeCheia(): boolean {
        return this.tamanho === this.capacidade;
    }
    // Verificar se a fila está vazia.
    verificarSeVazia(): boolean {
        return this.tamanho === 0;
    }
    modificarTamanho():void{
        this.tamanho=this.fila.length;
    }
    // Exibir a quantidade de elementos da fila.
    mostrarTamanho():number{
        return this.tamanho;
    }
    // Retornar a capacidade máxima da fila.
    mostrarCapacidade():number{
        return this.capacidade
    }
    // Retornar o elemento que está no início da fila .
    RetornarPrimeiroElemento():number|null{
        if(this.verificarSeVazia()){
            return null;
        }
        return this.fila[0];
    }
    // Exibir os elementos da fila.
    exibirFila(){
         {
            for(let element of this.fila){
                return element +", "
            }
        }
    }
    // Retornar o elemento que está no início da fila .
    retornarElementoInicial():number|string{
        if(this.verificarSeVazia()){
            return "Nao e possivel adicionar elementos porque esta lista está vazia."
        }else{
            return this.fila[this.tamanho-1];
        }
    }
    //     Adicionar um novo elemento ao final da fila.
    adicionarElemento(elemento: number): string | (number|null) {
        if (this.verificarSeCheia()) {
            return "Cheia.";
        }else{
            this.fila.push(elemento);
            this.frente=this.fila[this.tamanho-1];
            this.modificarTamanho();
            return "Adicionada."
            
        }
    } 
    // Remover e retornar o primeiro elemento da fila (o elemento mais antigo).
    removerElemento():string | ( number | null) {
        if (this.verificarSeVazia()) {
            return "A fila está vazia. Não há elementos para remover.";
        }else{
            let elementoDeTras=this.tras;
            this.fila.shift();
            this.modificarTamanho();
            this.tras=this.fila[this.tamanho-1];
            return elementoDeTras;
        }
    }
    retornarQuantosEspacosFaltam(){
        return this.capacidade-this.tamanho;
    }
}