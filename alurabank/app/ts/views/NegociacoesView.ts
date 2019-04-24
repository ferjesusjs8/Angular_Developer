class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</TH>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.ParaArray().map(negociacao =>
                        `
                            <tr>
                                <td>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/
                                ${negociacao.data.getFullYear()}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `
                    ).join('')}
                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `
    }
}