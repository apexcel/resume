import { setClassName } from './util.js'

const cn = name => setClassName('education', name);

class Education {
    constructor(args) {
        this.render(args);
    }

    render = args => {
        const { institution, period, score, maxScore, degree, isGPA } = args;

        this.template = `
            <section ${cn('section')}>
                <h3 ${cn('institution')}>${institution}</h3><span ${cn('span')}>${degree ? degree : ''}</span>
                <p>${score ? `${isGPA ? `Major GPA` : ``} ${score}/${maxScore}` : ''}</p>
                <p ${cn('period')} ${'period'}>${period}</p>
            </section>
        `;
    }
}

export default Education;