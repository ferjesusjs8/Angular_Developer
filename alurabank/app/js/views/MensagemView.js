class MensagemView extends View {
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
    template(model) {
        return `<p class="alert alert-info">${model}<p>`;
    }
}
