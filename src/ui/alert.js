export default class Alert {
    #parentAlertElement
    constructor(parentId) {
        this.#parentAlertElement = document.getElementById(parentId);
    }
    showAlert(errorMessage) {
        this.#parentAlertElement.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error: </strong> ${errorMessage}.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    }
}