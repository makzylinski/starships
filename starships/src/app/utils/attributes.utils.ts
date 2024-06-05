import { Observable } from "rxjs/internal/Observable";
import { Person } from "../models/person";
import { Starship } from "../models/starship";
import { map } from "rxjs/operators";

export const transformAttributesToListItems = (entity: any) => {
    const modifiedListItems = [];       // TODO type
    for (const [k, v] of Object.entries(entity)) {
        modifiedListItems.push(`${modifyAttributeDisplayName(k)} - ${v}`);
    }

    return modifiedListItems;
};

const modifyAttributeDisplayName = (attribute: string) => {
    let modifiedAttribute = attribute.split('_').join(' ');
    modifiedAttribute = modifiedAttribute[0].toUpperCase() + modifiedAttribute.substring(1).toLocaleLowerCase();
    return modifiedAttribute;

}