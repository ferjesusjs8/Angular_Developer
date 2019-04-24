class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {

        this._inputData = <HTMLInputElement>document.querySelector("#data");
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._inputValor = <HTMLInputElement>document.querySelector("#valor");
        this._negociacoesView.update(this._negociacoes);
        
    }

    Adiciona(event: Event) {

        event.preventDefault();
        
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        )

        console.log(negociacao);

        this._negociacoes.Adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        
        this._mensagemView.update("Negociacao adicionada com sucesso!");
        
        this._negociacoes.ParaArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
            console.log(negociacao.volume);
        });



    }
}