import { setClassName, getUnorderedList } from './util.js'

const cn = name => setClassName('activity', name);

class ActivityTemplate {
    constructor(args) {
        const { title, activities } = args;
        this.render(title, activities);
    }

    list = activities => {
        let desc = '';
        activities.forEach(item => {
            const {name, period} = item;
            desc += `<li>
                <div>${name}</div>
                <span ${cn('period')}>${period}</span>
                </li>`
        })
        let list = `<ul>${desc}</ul>`
        return list;
    }

    render = (title, activities) => {
        const activityList = this.list(activities);
            this.template = `
        <div ${cn('wrapper')}>
            <section ${cn('section')}>
            <h2 ${cn('title')}>${title}</h2>
            ${activityList}
            </section>
        </div>
        `;
    }
}

export default ActivityTemplate;