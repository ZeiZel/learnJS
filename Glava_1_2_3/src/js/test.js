"use strict";

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcP() {
        return (this.width + this.height) * 2;
    }

    createRectByClass(className, color) {
        const rect = document.createElement("div");
        rect.classList.add(className);
        rect.style.height = this.height + "px";
        rect.style.width = this.width + "px";
        rect.style.backgroundColor = color;
        document.body.append(rect);
    }
}

class Square extends Rectangle { // Наследует всё из родительского класса
    constructor(height, width, text, color) {
        // Всегда на первом месте должно идти super()
        super(height, width); // Вызывает конструктор родителя
        this.text = text;
        this.color = color;
    }

    createRectByClass(className) {
        super.createRectByClass(className, this.color);
        this.rect.innerHTML = this.text;
    }
}

const square = new Rectangle(100, 100);
console.log(square.calcP());
square.createRectByClass("rectangle", "red");

const newSquare = new Square(500, 500, "so much text", "blue");
newSquare.createRectByClass("blueSquare");
