// All data must be in the same structure.
import {isObject} from "../../common/isObject.js";

function style(payload) {
    return Object.entries(payload)
        .map(([key, value]) => `${key}: ${value}`)
        .join(";")
}

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
            },
            {
                src: "https://images.freeimages.com/images/large-previews/4dc/street-1366583.jpg",
                style: style({
                    width: "400px",
                    height: "300px",
                    "margin-top": "12px",
                    "border-radius": "10%"
                })
            }
        ]
    }
];

export const ContentType = {
    TEXT: "TEXT",
    STYLED_TEXT: "STYLED_TEXT",
    IMAGE: "IMAGE",
    BLANK: "BLANK"
}

export function getAnnotatedContent(content) {
    if (isObject(content)) {
        if (content.src) {
            return {
                type: ContentType.IMAGE,
                ...content
            }
        }
        else if (content.text) {
            return {
                type: ContentType.STYLED_TEXT,
                ...content
            }
        }
        else {
            return null;
        }
    }
    else if (typeof content === "string") {
        if (content) {
            return {
                type: ContentType.TEXT,
                text: content
            }
        }
        else {
            return {
                type: ContentType.BLANK
            }
        }
    }
    else {
        return null;
    }
}

export default data;
