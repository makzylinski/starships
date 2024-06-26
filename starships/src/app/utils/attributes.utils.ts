export const transformAttributesToListItems = (entity: any): string[] => {
    const modifiedListItems = [];
    for (const [k, v] of Object.entries(entity)) {
        modifiedListItems.push(`${modifyAttributeDisplayName(k)} - ${v}`);
    }

    return modifiedListItems;
};

const modifyAttributeDisplayName = (attribute: string): string => {
    let modifiedAttribute = attribute.split('_').join(' ');
    modifiedAttribute = modifiedAttribute[0].toUpperCase() + modifiedAttribute.substring(1).toLocaleLowerCase();
    return modifiedAttribute;
}