function createElement(tag, options= {}, children= []) {
    const element = document.createElement(tag);
    Object.entries(options)
        .forEach(([key, value]) => {
            element[key] = value
        });
    children.forEach(child => child && element.appendChild(child));
    return element;
}


export const text = content => document.createTextNode(content);

export function div(options, children) {
    return createElement('div', options, children);
}

export function span(options, children) {
    return createElement('span', options, children);
}


export function ul(options, listItems) {
    return createElement('ul', options, listItems);
}

export function li(options, children) {
    return createElement('li', options, children);
}

export function h(options, textContent, level = 1) {
    return createElement(`h${level}`, options, [text(textContent)]);
}

export function p(options, textContent) {
    return createElement('p', options, [text(textContent)]);
}

export function img(options) {
    return createElement('img', options);
}

export function checkbox(options) {
    return createElement(
        'input',
        {
            type: 'checkbox',
            ...options
        }
    )
}

export function br() {
    return createElement('br');
}

class Container {
    ref = document.getElementById('container')
    clear() {
        while(this.ref.firstChild) {
            this.ref.removeChild(this.ref.firstChild)
        }
    }

    attachChildren(children) {
        if (children) {
            this.ref.append(children);
        }
    }

    replaceChildrenWith(newChildren) {
        this.clear();
        if (newChildren) {
            this.attachChildren(newChildren);
        }
    }
}
export const container = new Container()
