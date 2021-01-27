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
            프론트엔드를 주로 개발하지만 백엔드도 같이 다룹니다.
            서비스의 로직만큼 UX/UI가 중요하다고 생각하기 때문에 심미적인 요소들을 놓치지 않으려 노력합니다.
            프로젝트의 전체적인 환경을 파악하는 것과 업무에 필요한 파트 모두 이해하여 개발의 흐름을 매끄럽게 하는 것을 좋아합니다.
            <br /><br />
            다양한 사람들과 교류하는 것을 즐깁니다. 본인이 알고 있는 지식을 타인에게 전파하는 것과 새로운 지식과 기술을 습득하는 것을 좋아하여
            여러가지 기술 관련 서적과 매체들을 보고 있습니다.
            결과물을 깔끔하게 기록하고 정리하는 것을 좋아합니다. 취미 활동으로는 사이드 프로젝트를 만들거나 운동을 합니다. 요즘에는 기타를 배우고 있습니다.
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