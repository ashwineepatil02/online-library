
export class BookModel{

    constructor(_id: number, _name: string, _author: string, _price: number, _img: string){
        this.id = _id;
        this.name = _name;
        this.author = _author;
        this.price = _price;
        this.img = _img;
    }

    id: number;
    name: string;
    author: string;
    price: number;
    img: string;
}