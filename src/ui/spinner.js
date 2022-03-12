export default class Spinner {
    #idParentElement 
    constructor(id) {
        this.#idParentElement = document.getElementById(id);
    }
    start() {
        this.#idParentElement.innerHTML = `<div class="d-flex justify-content-center mt-sm-3">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
    }
    stop(){
        this.#idParentElement.innerHTML = ``;
    }
}