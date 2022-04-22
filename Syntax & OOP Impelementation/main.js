class Rectangle {
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }
    CalcCircumference() {
        let calc = (this.width + this.height) * 2;
        console.log(`Circumference of Rectangle is ${calc} `);
    }
    static whoAmI() {
        console.log(`I'm a Rectangle ..`);
    }
}
class Square extends Rectangle {
    constructor(squ = 0) {
        super();
        this.squ = squ;
        this.height = this.width;
    }
    CalcCircumference() {
        let calc = this.squ * this.squ;
        console.log(`Circumference of Square is ${calc} `);
    }
    static whoAmI() {
        console.log(`I'm a Square ..`);
    }
}
var reqtangle = new Rectangle();
reqtangle.width = 5;
reqtangle.height = 5;
reqtangle.CalcCircumference();
Rectangle.whoAmI();
var test2 = new Rectangle(6);
test2.CalcCircumference();
Rectangle.whoAmI();
var square = new Square();
square.squ = 4;
square.CalcCircumference();
Square.whoAmI();
var square2 = new Square(8);
square2.CalcCircumference();
