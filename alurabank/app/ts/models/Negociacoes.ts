class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    Adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }

   ParaArray(): Negociacao[]{
       return [].concat(this._negociacoes);
   } 
}