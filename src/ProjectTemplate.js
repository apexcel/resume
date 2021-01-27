import { setClassName, getUnorderedList } from './util.js'

class ProjectTemplate {
    constructor(args) {
        const {
            title, // 프로젝트 타이틀
            summary, // 프로젝트 요약
            position, // 프로젝트 포지션
            period, // 프로젝트 기간
            descriptions, // 프로젝트 설명
            repoUrl, // 저장소 주소
        } = args;

        this.prefix = `project`;
        this.render(title, summary, position, period, descriptions, repoUrl);
    }

    render = (title, summary, position, period, descriptions, repoUrl) => {
        const desc = getUnorderedList(descriptions);
        const cn = name => setClassName(this.prefix, name);

        this.template = `
        <div ${cn('wrapper')}>
            <div ${cn('header')}>
                <a target='_blank' href=${repoUrl ? repoUrl : ''}><h1 ${cn('title')}>${title}</h1></a>
                <p ${cn('summary')}>${summary}</p>
            </div>
            <section ${cn('section')}>
                <div ${cn('left')}>
                    <h2 ${cn('position')}>${position}</h2>
                    <p ${cn('period')}>${period}</p>
                </div>
                <div ${cn('right')}>
                    ${desc}
                </div>
            </section>
        </div>
        `;
    }
}

export default ProjectTemplate;