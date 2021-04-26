class JudulTitle extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `<h1> DataCov </h1>`;
    }
 }
  
 customElements.define("judul-title", JudulTitle);