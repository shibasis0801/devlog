// All data must be in the same structure.
import {isObject} from "../../common/isObject.js";

/** Three options are available for content,
 * Text -> Paragraph
 * Blank -> LineBreak
 * {text: string, style: string} -> Styled Paragraph
 */
const data = [
    {
        heading: "Learn Web Dev",
        content: [
            "This is a simple blog made using a modular structure. You should be able to use these skills for building good programs, not just websites.",
            "Som and Sonu bhai, you will become great scientists soon, and a bit of engineering skills will go a long way in aiding your journey.",
            "",
            {
                text: "So what do you say, are you excited to learn this ?",
                style: "text-align: center"
            }
        ]
    }
];

export function getOptions(content) {
    if (isObject(content)) {
        return {
            style: content.style
        }
    }
    else return null;
}

export default data;
