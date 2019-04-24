class MensagemView extends View {

    update(modelo: string): void{
        this._elemento.innerHTML = this.template(modelo);
    }

    template(model: string): string{
        return `<p class="alert alert-info">${model}<p>`
    }

}