var warpdrive = new Warpdrive('mainContent', 1000, 600, '#000000');

var textNode = {
    type: 'Text',
    height: 18,
    offsetX: 15,
    offsetY: 75,
    color: '#FFFFFF',
    textValue: 'Lorem Ipsum',
    fontFamily: 'Helvetica'
};

var navObject = {
    type: 'Rectangle',
    width: 150,
    height: 150,
    color: '#00FF00',
    selectable: {
        z: 0,
        x: 0,
        y: 0
    },
    sticky: true
};

var image = {
    template: navObject,
    type: 'Image',
    image: 'http://www.worldsciencefestival.com/wp-content/uploads/2011/05/is_warp_drive_possible.jpg',
    color: '#333333'
};



function Triangle(warpdriveInstance) {
    var self = warpdriveInstance.instantiateObject('VectorObject');

    self.points = [
        {
            x: 0,
            y: 100
        },
        {
            x: 100,
            y: 100
        },
        {
            x: 50,
            y: 0
        }
    ];
    return self;
}
warpdrive.registerObject('Triangle', Triangle);

function Hexagon(warpdriveInstance) {
    var self = warpdriveInstance.instantiateObject('VectorObject');

    self.points = [
        {
            x: 25,
            y: 0
        },
        {
            x: 75,
            y: 0
        },
        {
            x: 100,
            y: 50
        },
        {
            x: 75,
            y: 100
        },
        {
            x: 25,
            y: 100
        },
        {
            x: 0,
            y: 50
        }
    ];
    return self;
}
warpdrive.registerObject('Hexagon', Hexagon);

warpdrive.create({
    type: 'Rectangle',
    width: 900,
    height: 500,
    offsetX: 50,
    offsetY: 50,
    color: '#FFFFFF',
    selectable: {
        z: 0,
        x: 0,
        y: 0
    },
    childs: [
        {
            template: navObject,
            offsetX: 50,
            offsetY: 50,
            selectable: {
                z: 1,
                x: 0,
                y: 0
            },
            childs: [
                {
                    template: textNode,
                    textValue: textNode.textValue + ' 1'
                }
            ]
        },
        {
            template: image,
            offsetX: 50,
            offsetY: 250,
            selectable: {
                z: 1,
                x: 0,
                y: 1
            }
        },
        {
            template: image,
            offsetX: 250,
            offsetY: 50,
            selectable: {
                z: 1,
                x: 1,
                y: 0
            }
        },
        {
            template: navObject,
            type: 'Triangle',
            offsetX: 250,
            offsetY: 250,
            selectable: {
                z: 1,
                x: 1,
                y: 1
            },
            childs: [
                {
                    template: textNode,
                    offsetY: 100,
                    offsetX: 42,
                    textValue: 'Illuminati'
                }
            ]
        },
        {
            template: navObject,
            type: 'Hexagon',
            offsetX: 450,
            offsetY: 50,
            selectable: {
                z: 1,
                x: 2,
                y: 0
            },
            childs: [
                {
                    template: textNode,
                    textValue: textNode.textValue + ' 3'
                }
            ]
        },
        {
            template: image,
            offsetX: 450,
            offsetY: 250,
            selectable: {
                z: 1,
                x: 2,
                y: 1
            }
        },
        {
            template: image,
            offsetX: 650,
            offsetY: 50,
            selectable: {
                z: 1,
                x: 3,
                y: 0
            }
        },
        {
            template: navObject,
            offsetX: 650,
            offsetY: 250,
            selectable: {
                z: 1,
                x: 3,
                y: 1
            },
            childs: [
                {
                    template: textNode,
                    textValue: textNode.textValue + ' 4'
                }
            ]
        }
    ]
});

warpdrive.selector.startSelection({
    z: 1,
    x: 0,
    y: 0
});

//thanks stackoverflow. Direct copy from http://stackoverflow.com/questions/6226859/how-can-i-track-arrow-keys-in-chrome-and-ie
document.onkeydown = function (event) {
    if (!event)
        event = window.event;
    var code = event.keyCode;
    if (event.charCode && code == 0)
        code = event.charCode;
    switch (code) {
        case 37:
            // Key left.
            warpdrive.selector.moveLeft();
            event.preventDefault();
            break;
        case 38:
            // Key up.
            warpdrive.selector.moveUp();
            event.preventDefault();
            break;
        case 39:
            // Key right.
            warpdrive.selector.moveRight();
            event.preventDefault();
            break;
        case 40:
            // Key down.
            warpdrive.selector.moveDown();
            event.preventDefault();
            break;

        case 13:
            // Key 'Enter'
            warpdrive.selector.moveIn();
            event.preventDefault();
            break;

        case 46:
            // Key 'Delete'
            warpdrive.selector.moveOut();
            event.preventDefault();
            break;

        case 65:
            // Key 'a'
            warpdrive.selector.getSelected().moveDistance(-5, 0);
            event.preventDefault();
            break;

        case 68:
            // Key 'd'
            warpdrive.selector.getSelected().moveDistance(5, 0);
            event.preventDefault();
            break;

        case 83:
            // Key 's'
            warpdrive.selector.getSelected().moveDistance(0, 5);
            event.preventDefault();
            break;

        case 87:
            // Key 'w'
            warpdrive.selector.getSelected().moveDistance(0, -5);
            event.preventDefault();
            break;

        case 69:
            // Key 'e'
            warpdrive.selector.getSelected().changeRotation(5);
            event.preventDefault();
            break;

        case 81:
            // Key 'q'
            warpdrive.selector.getSelected().changeRotation(-5);
            event.preventDefault();
            break;
    }
};
