class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Motorcycle {
    readonly model: string
    readonly numberOfWheels: number = 2

    constructor(theModel: string) {
        this.model = theModel
    }
}

//the same code but shorter. Typescript autocreates model in class because we set it inside constructor
// class Motorcycle {
//     readonly numberOfWheels: number = 2
//     constructor(readonly model: string) {}
// }

class Computer {
    protected brand: string = ''
    public color: string = 'silver'

    constructor(){
        this.start()
    }
    private start() {
        console.log('Starting')
    }
}

class AppleComputer extends Computer {
    public setBrand(brand: string): void {
        this.brand = brand
    }
}

// macbook already doesn't have access to protected property 'brand'
const macbook = new AppleComputer()
macbook.setBrand('Apple')
console.log(macbook.color = 'spacegrey')
//macbook.brand -- can't do that

// -----------

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component is rendering')
    }

    info(): string {
        return 'This is info';
    }
}