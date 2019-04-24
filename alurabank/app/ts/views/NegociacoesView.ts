class NegociacoesView {

    private _elemento: Element;
    
    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    update(): void{
        this._elemento.innerHTML = this.template();
    }

    template(): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</TH>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `
    }
}