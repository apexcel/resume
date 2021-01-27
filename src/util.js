export function setClassName(prefix, className) {
    return `class=${prefix}-${className}`;
}

export function getUnorderedList(array) {
    let desc = '';
    array.forEach(item => {
        if (item instanceof Array) {
            desc += this.makeList(item);
        }
        else {
            desc += `<li>${item}</li>`
        }
    })
    let list = `<ul>${desc}</ul>`
    return list;
}