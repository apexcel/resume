import ActivityTemplate from './ActivityTemplate.js';
import Education from './Eudaction.js';
import Introduce from './Introduce.js';
import ProjectTemplate from './ProjectTemplate.js';
import Wrapper from './Wrapper.js'

class App {
    constructor(main) {
        const url = "./styles.css";
        document.head.innerHTML += `<link type="text/css" rel="stylesheet" href=${url}>`;

        // 서두, 자기소개
        const introduce = new Introduce();
        new Wrapper(main, {
            templateTitle: 'Introduce',
            children: introduce.template
        })

        // 사이드 프로젝트
        const dilettante = new ProjectTemplate({
            title: `Dilettante`,
            summary: `피아노 학원에 직접 방문하여 수기로 작성해야하는 예약제 시스템을 SPA로 구현`,
            position: `Web`,
            period: `2020.06 ~ 2020.11`,
            descriptions: [
                `React, Recoil, Webpack, Express, Nginx, Socket.io, MongoDB를 이용하여 개발
                `,
                `
                AWS EC2, AWS Route53을 이용하여 운영 및 배포
                `,
                `카카오 API 연동
                `,
            ],
            repoUrl: `https://github.com/apexcel/dilettante`
        });

        const tetris = new ProjectTemplate({
            title: `ES6 Tetris`,
            summary: `ES6 Javascript, HTML 그리고 CSS만으로 만든 테트리스`,
            position: `Web`,
            period: `2021.01 ~ 2021.01`,
            descriptions: [
                `프레임워크나 라이브러리의 없이 ES6 모듈 형태로 개발`,
            ],
            repoUrl: `https://github.com/apexcel/tetris`
        })

        const word = new ProjectTemplate({
            title: `안드로이드 단어장`,
            summary: `안드로이드 영어 암기 단어장`,
            position: `Android`,
            period: `2019.11 ~ 2019.12`,
            descriptions: [
                `단어 추가 및 시험 보기 기능`
            ],
            repoUrl: ''
        })

        new Wrapper(main, {
            templateTitle: 'Side Project',
            children: [
                tetris.template,
                dilettante.template,
                word.template,
            ]
        })

        // 학력, 어학, 자격증 등등
        new Wrapper(main, {
            templateTitle: 'Education',
            children: [
                new Education({
                    institution: '한신대학교 컴퓨터 공학부',
                    period: '13.03 ~ 21.02',
                    score: '3.94',
                    maxScore: '4.5',
                    degree: '학사',
                    isGPA: true
                }).template,
                new Education({
                    institution: 'TOEIC',
                    period: '17.06 ~ 19.06',
                    score: '720',
                    maxScore: '990',
                }).template
            ]
        })

        // 스터티, 대외 활동 등등 활동 관련
        const awards = new ActivityTemplate({
            title: 'Awards',
            activities: [
                {name: '학부 소프트웨어 공모전 장려상', period: '2020.12'}
            ]
        })

        const activitiesTemplate = new ActivityTemplate({
            title: 'Study',
            activities: [
                {name: '학부 모던 웹 프로그래밍 튜터', period: '2020.09 ~ 2020.12'},
                {name: '학부 소속 연구실 웹 페이지 제작 및 튜터', period: '2018.12 ~ 2019.01'},
            ]
        })

        new Wrapper(main, {
            templateTitle: 'Activities',
            children: [
                awards.template,
                activitiesTemplate.template
            ]
        })
    }
}

export default App;