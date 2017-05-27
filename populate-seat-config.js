seatsConfig = [
    [3, 2],
    [4, 1],
    [3, 4]
];

var blocks = seatsConfig.length;

// Create a container element
containerElement = createElement("div", "container");

for (i = 0; i < blocks; i++) {
    block = seatsConfig[i];

    rows = block[0];
    columns = block[1];

    // Create block elements
    blockElement = createElement("div", "block");

    for (j = 0; j < rows; j++) {
        // Create row elements
        rowElement = createElement("div", "block-row");
        for (k = 0; k < columns; k++) {

            // Create column element with id
            // id format => seat-${block-number}-${row-number}-${column-number}
            id = "seat-" + i + "-" + j + "-" + k;

            columnElement = createElementWithId("div", "block-column", id);
            rowElement.append(columnElement);
        }

        blockElement.append(rowElement);
    }

    containerElement.append(blockElement);
}

document.body.append(containerElement);


// Create Element with specific tagname and classname (Only one class per element allowed)
function createElement(tag, className) {
    element = document.createElement(tag);
    element.classList.add(className);

    return element;
}

// Create Element with specific tagname and classname (Only one class per element allowed) and id
function createElementWithId(tag, className, id) {
    element = document.createElement(tag);
    element.classList.add(className);
    element.id = id;

    return element;
}