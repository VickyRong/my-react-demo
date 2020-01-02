class People {
    constructor(name) {
        this.name = name
    }
    getname() {
        return this.name
    }
    setname(newname) {
        this.name = newname
    }
}

class Child extends People {
    constructor(name) {
        super(name)
        this.school = 'hongxing'
    }

    getschool() {
        return this.school
    }

    getname() { // 覆盖父成员函数
        return 'hello ' + this.name
    }
}

let p = new People('yanrong')
console.log(p.getname())
p.setname('ahha')
console.log(p.getname())

let c = new Child('xiaoming')
console.log(c.getname()) // xiaoming
c.setname("xiaogao")
console.log(c.getname())