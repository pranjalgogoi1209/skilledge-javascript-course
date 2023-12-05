// # USE PROPERTY OF AN OBJECT INSIDE OBJECT
console.log('....'.repeat(2),'USE PROPERTY OF AN OBJECT INSIDE OBJECT','....'.repeat(2));

let obj = {
    firstName : 'pranjal',
    lastName : 'gogoi',
    fullName : function(){
        return obj.firstName + " " + obj.lastName;
    }
};
console.log(obj.fullName());

// # THIS KEYWORD : It doesn't work with arrow function
console.log('....'.repeat(2),'THIS KEYWORD','....'.repeat(2));

let user = {
    firstName : 'pranjal',
    lastName : 'gogoi',
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    object : function(){
        return this;
    },
    this : this
};
console.log(user.fullName());
console.log(user.object().object().object().object().fullName());
console.log(user.this);
// it return Window object

// # INNER HTML
console.log('....'.repeat(2),'INNER HTML','....'.repeat(2));


/* const body = document.getElementById('body');
body.innerHTML = `
    <h1>LEARNING DOM MANIPULATION</h1>
    <br/>
    <h3>GET ELEMENT BY ID</h3>
`; */


// # INNER HTML
let product = {
    productName : 'Asus Zenbook flip 13',
    productId : 'UX362FA',
    productDes : 'This is the best Laptop ever',
    image : ['zenbook1.jpg', 'zenbook2.jpeg', 'zenbook3.jpeg', 'zenbook4.jpeg'],
    price : 95000,
    discountPrice : 89000,
    isInStock : false,

    discount : function () {
        return 100 - Math.round((this.discountPrice*100)/this.price);
    },

    imageGroup : function(){ 
        while(true){
            let value = Math.floor(Math.random()*10);
            if(value<4){
                let num = [0,1,2,3,4];
                for (let i of num){
                    if(i===value ){
                        for(let j of this.image){
                            if(this.image.indexOf(j)===i){
                                return j;
                            }
                        }
                    }
                }
            }
        }
    },
};
let html = (`
    <h2>Product Name : ${product.productName}</h2>
    <img src="${product.imageGroup()}", height=300/>
    <h3>Price : ${product.discount()}% discount available : <del>${product.price}</del> ${product.discountPrice}</h3>
    <p>Details : ${product.productDes}</p>
    <h1>Availability : ${product.isInStock}</h1>
`);

document.getElementById('divId').innerHTML=html;