import {div, h, ul, li, br, p, withSeparators} from "../../common/components.js";
import data, {getOptions} from "./data.js";

export default function Tech() {
    return div({
        className: "tech"
    }, [
        h({}, "My Experiments", 2),
        ul({}, data.map(item =>
            li({ className: "card" }, [
                h({}, item.heading, 3),
                ...withSeparators(
                    item.content,
                    (content) => {
                        const options = getOptions(content);
                        return options ?
                            p(options, content.text) :
                            p({}, content);
                    },
                    br
                )
            ])
        ))
    ])
}
