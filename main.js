class BlogPost extends HTMLElement {
  title = '';
  description = '';
  link = '';

  constructor() {
    super();

    this.attachShadow({
      mode: 'open',
      delegatesFocus: true,
    });

    this.render();
  }

  set data(value) {
    this.titleElement.textContent = value.title || this.titleElement.textContent;
    this.descElement.textContent = value.description || this.titleElement.textContent;
    this.linkElement.setAttribute('href', value.link || this.linkElement.href);
  }

  connectedCallback() {
    console.log('mounted');
  }

  disconnectedCallback() {
    console.log('unmounted');
  }

  adoptedCallback() {
    console.log('adopted');
  }

  static get observedAttributes() {
    return ['title', 'description', 'link']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChanged');

    switch (name) {
      case 'title':
        this.titleElement.textContent = newValue;
        break;
      case 'description':
        this.descElement.textContent = newValue;
        break;
      case 'link':
        this.linkElement.setAttribute('href', newValue || '/')
        break;
      default:
        break;
    }
  }

  render() {
    const template = blogPostTemplate();

    this.shadowRoot.append(template.content);

    this.titleElement = this.shadowRoot.querySelector('h2');
    this.descElement = this.shadowRoot.querySelector('p');
    this.linkElement = this.shadowRoot.querySelector('a');
  }
}

function blogPostTemplate() {
  const templateEl = document.createElement('template');

  templateEl.innerHTML = `
    <div class="blog-post">
      <h2></h2>
      <p></p>
      <a>Learn more</a>
    </div>
  `;

  return templateEl;
}

customElements.define('blog-post', BlogPost);



