class Rectangle {
    public width:number
    public height:number

    constructor(width:number = 0, height:number = 0){
        this.width = width
        this.height = height
    }


    CalcCircumference(){
        let calc = (this.width + this.height) * 2
        console.log(`Circumference of Rectangle is ${calc} `)
    }

    static whoAmI() {
        console.log(`I'm a Rectangle ..`)
    }
}

class Square extends Rectangle {
    public squ:number

    constructor(squ:number = 0){
        super() //calling constructor of parent class
        this.squ = squ

        this.height = this.width
        //width and height are equal 'cause of square circumference

    }
    
    CalcCircumference(){
        let calc = this.squ * this.squ
        console.log(`Circumference of Square is ${calc} `)
    }

    static whoAmI() {
        console.log(`I'm a Square ..`)
    }
}

/**setting values to class members */
var reqtangle = new Rectangle()
reqtangle.width = 5
reqtangle.height = 5
reqtangle.CalcCircumference()
Rectangle.whoAmI()


/**sending data to constructor */
var test2 = new Rectangle(6) 
test2.CalcCircumference()
Rectangle.whoAmI()




var square = new Square()
square.squ = 4
square.CalcCircumference()
Square.whoAmI()

var square2  = new Square(8)
square2.CalcCircumference()


// var squ3 = new Square()
// squ3.height = 8
// squ3.width = 3
// squ3.CalcCircumference()