function parseXML(node: Element): any {
    // initialize result object
    const result: any = {};

    // check if node is an element node
    if (node.nodeType === Node.ELEMENT_NODE) {
        // add empty object with node name to result object
        result[node.nodeName] = {};

        // add attribute name and value to result object with @ prefix
        for (let i = 0; i < node.attributes.length; i++) {
            const attr = node.attributes[i];
            result[node.nodeName][`${attr.nodeName}`] = attr.nodeValue;
        }
    }

    // check if node has child nodes
    for (let i = 0; i < node.childNodes.length; i++) {
        // select child node
        const child = node.childNodes[i];

        // check if child node is an element node or a text node with content, skip empty text nodes
        if (
            child.nodeType === Node.ELEMENT_NODE ||
            (child.nodeType === Node.TEXT_NODE &&
                child.nodeValue &&
                child.nodeValue.trim() !== "")
        ) {
            // parse child node recursively
            const childResult = parseXML(child as Element);

            // if child node is an element node and has a name
            if (child.nodeType === Node.ELEMENT_NODE) {
                if (result[node.nodeName][child.nodeName]) {
                    // array formatting for multiple child nodes with same name
                    if (!Array.isArray(result[node.nodeName][child.nodeName])) {
                        result[node.nodeName][child.nodeName] = [
                            result[node.nodeName][child.nodeName],
                        ];
                    }

                    // push child node to array
                    result[node.nodeName][child.nodeName].push(
                        childResult[child.nodeName],
                    );
                } else {
                    // if child node is an element node and has no name, add child node to result object
                    result[node.nodeName][child.nodeName] =
                        childResult[child.nodeName];
                }
            } else if (child.nodeType === Node.TEXT_NODE) {
                // if child node is a text node, add text content to result object

                if (result[node.nodeName]["#text"]) {
                    // array formatting for multiple text nodes
                    if (!Array.isArray(result[node.nodeName]["#text"])) {
                        result[node.nodeName]["#text"] = [
                            result[node.nodeName]["#text"],
                        ];
                    }
                    result[node.nodeName]["#text"].push(node.textContent); // push text content to array
                } else {
                    result[node.nodeName]["#text"] = node.textContent; // add text content to result object
                }
            }
        }
    }

    return result; // return result object
}

export default parseXML;
