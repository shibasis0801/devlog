import {div, h, ul, li, br, p, img} from "../../common/components.js";
import data, {ContentType, getAnnotatedContent} from "./data.js";


function renderContent(content) {
    const annotatedContent = getAnnotatedContent(content);
    if (!annotatedContent) {
        return null
    }

    switch (annotatedContent.type) {
        case ContentType.BLANK:
            return br();
        case ContentType.TEXT:
            return p({}, annotatedContent.text);
        case ContentType.STYLED_TEXT:
            return p({ style: annotatedContent.style }, annotatedContent.text)
        case ContentType.IMAGE:
            return img({ src: annotatedContent.src, style: annotatedContent.style })
    }
}

export default function Tech() {
    return div({
        className: "tech"
    }, [
        h({}, "My Experiments", 2),
        ul({}, data.map(item =>
            li({ className: "card" }, [
                h({}, item.heading, 3),
                ...item.content.map(renderContent)
            ])
        ))
    ])
}
