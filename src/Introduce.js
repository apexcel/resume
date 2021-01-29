import { setClassName } from './util.js'

class Introduce {
    constructor () {
        this.wrapper = document.createElement('div');
        this.prefix = `introduce`;
        this.render();
    }

    
    render = () => {
        const cn = name => setClassName(this.prefix, name);
        const name = '최형욱',
            position = 'Frontend Developer',
            email = 'dev.apexcel@gmail.com',
            github = 'https://github.com/apexcel',
            img = '',
            blog = '',
            strongSkills = [
                'Javascript'
            ].reduce((acc, skill) => acc += `<span ${cn('strong-skills')}>${skill}</span>`, ''),
            knowledgeableSkills = [
                'Typescript', 'Express', 'Node.js', 'React',
                'Recoil', 'MySQL', 'MongoDB', 'HTML', 'CSS', 'SCSS',
            ].reduce((acc, skill) => acc += `<span ${cn('knowledge-skills')}>${skill}</span>`, ''),
            introduce = `뒤늦게 개발에 눈을 뜬 새내기로 웹 서비스 개발을 하고 있습니다.
            프론트엔드를 주로 개발하지만 백엔드도 같이 다룹니다. 결과물을 깔끔하게 기록하고 정리하는 것을 좋아합니다.
            본인이 알고 있는 지식을 타인에게 전파하는 것과 새로운 지식과 기술을 습득하는 것을 좋아합니다.
            `;

        this.template = `
        <div>
            <div>
                ${img ? `<div><img /></div>` : ''}
                <div ${cn('top')}>
                    <h1 ${cn('name')}>${name}</h1>
                    <h2 ${cn('position')}>${position}</h2>
                    <div>
                        <a href="mailto:${email}">${email}</p>
                        <a href=${github}>${github}</a>
                        <!-- <p>${blog}</p> -->
                    </div>
                </div>
            </div>
                ${introduce}
            <div>
            <div>
                <h2 ${cn('skills-title')}>Skills</h2>
                <div ${cn('skills')}>
                    <h3>Strong</h3>
                    ${strongSkills}
                </div>
                <div ${cn('skills')}>
                    <h3>Knowledgeable</h3>
                    ${knowledgeableSkills}
                </div>
            </div>
            </div>
        </div>
        `;
    }
}

export default Introduce;