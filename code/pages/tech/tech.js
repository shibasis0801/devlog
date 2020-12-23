import {div, h3, h4, ul, li, br, p, withSeparators} from "../../common/components.js";
import data, {getOptions} from "./data.js";

export default function Tech() {
    return div({
        className: "tech"
    }, [
        h3({}, "My Experiments"),
        ul({}, data.map(item =>
            li({ className: "card" }, [
                h4({}, item.heading),
                ...withSeparators(
                    item.content,
                    (content) => {
                        const options = getOptions(content);
                        return options ?
                            p(getOptions(content), content.text) :
                            p({}, content);
                    },
                    br
                )
            ])
        ))
    ])
}
