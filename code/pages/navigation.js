import {container, li, text} from "../common/components.js";
import Cooking from "./cooking/cooking.js";
import Tours from "./tours/tours.js";
import About from "./about/about.js";
import Tech from "./tech/tech.js";

const navList = document.getElementById("nav-list");

export const pages = {
    id(name) { return `nav-${name}` },
    default: "tech",
    data: {
        tech: {
            name: "Tech"
        },
        cooking: {
            name: "Cooking"
        },
        tours: {
            name: "Tours"
        },
        about: {
            name: "About"
        }
    }
}

function navLink(pageKey) {
    return li({
        className: "nav-item",
        id: pages.id(pageKey)
    }, [
        text(pages.data[pageKey].name)
    ]);
}


export function attachNavLinks() {
    for (const name in pages.data) {
        Navigation[name] = navLink(name);
        navList.append(Navigation[name])
    }
}

// May get memory leaks if abused
export const Navigation = {
    tech: {},
    cooking: {},
    tours: {},
    about: {}
}


export function establishNavigation() {
    Navigation.tech.addEventListener("click", function() {
        container.replaceChildrenWith(Tech())
    })

    Navigation.cooking.addEventListener("click", function() {
        container.replaceChildrenWith(Cooking())
    })

    Navigation.tours.addEventListener("click", function() {
        container.replaceChildrenWith(Tours())
    })

    Navigation.about.addEventListener("click", function() {
        container.replaceChildrenWith(About())
    })

    if (Object.keys(Navigation).includes(pages.default)) {
        Navigation[pages.default].click();
    }
}
