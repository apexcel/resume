import { setClassName } from './util.js'
class Wrapper {
    constructor(parent, args) {
        const { templateTitle, children } = args;

        this.createTemplate(templateTitle, children);
        parent.appendChild(this.wrapper);
    }

    createTemplate = (title, children) => {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('template-wrapper');
        const prefix = `template`;
        const cn = name => setClassName(prefix, name);
        let isArray = false;
        let concatenation = ''
        if (children instanceof Array) {
            isArray = true;
            children.forEach(child => concatenation += child);
        }

        const template = `
            <section ${cn('section')}>
                <header>
                    <h1 ${cn('heading')}>${title}</h1>
                </header>
                <article ${cn('article')}>
                    ${isArray ? concatenation : children}
                </article>
            </section>
        `;
        this.wrapper.innerHTML = template;
    }
}

export default Wrapper;