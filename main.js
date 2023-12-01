class BlogPost extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
    })

    this.shadowRoot.innerHTML = `
      <div class="blog-post">
        <h2>My post title</h2>
        <p>Lorem</p>
        <a href="/">Learn more</a>
      </div>
    `
  }
}

customElements.define('blog-post', BlogPost);