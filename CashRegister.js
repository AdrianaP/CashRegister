//Adriana
function CashRegister(){
//Juan
}

//hello 




	
	// JavaScript Document\

// Commercial merchandise
function Product(name,id,price){
	this.name = name;
	this.id = id;
	this.salePrice=0;
	this.price = 0;
	this.taxable=true;
	this.category=[];
	this.onSale=false;
	this.hasDiscount=false;
}


// Inventory control
function Item(product, quantity){
	this.product = product;
	this.quatity = quantity;
	this.reserve = 10;
	this.isBelowReserve = true;
	this.checkReserve = function(){};
	this.dateAdded = new Date();
	this.dateExpired = new Date();
	this.bestBefore = new Date();
	this.perishable = false;
}

var Categories = {
	DRINKS: "Drinks & Beverages",
	SNACKS: "Snacks"
}


// Holds all the items in our store
var Inventory = new Array();
	Inventory[0] = new Item( new Product("Doritos", "DD1244", 2.79), 10);
	Inventory[0].product.category.push(Categories.SNACKS);
	
	Inventory[0] = new Item("Doritos", "DD1244", 2.79);
	Inventory[0].category.push("Chips","Junk Food","Snacks");
	




function CashRegister(){
	
	
	function Receipt(){
		this.items = {};
			
	}


	var reciepts = {}; //holds all reciepts 
	var currentReciept = {}; //  current reciept
	
	// Rendering of printing for the receipt
	var printReciept = function (reciept) {}; // prints selected reciept
	var printRecieptHeader = function (){}; // greetings, adress
	var printRecieptFooter = function (){}; // thank you
	var printReceiptBody = function(){}; // the items, other stuff
	
	// CONSTANTS
	var STORE_NAME = "";
	var STORE_ADDRESS_LINE_1 = "";
	var STORE_ADDRESS_LINE_2 = "";
	var STORE_MAIN_PHONE = "";
	var STORE_RETURN_POLICY = ""; // the paragraph about the return policy
	
	var TPS_TAX = 0.5;
	var TVQ_TAX = 0.975;
	
	this.calculateSubtotal = function(){};
	this.calculateTPSTax = function(){};
	this.calculateTVQTax = function(){};
	this.calculateTotal = function(){};
	
	
	
	
	
	
	
	
	
	
	
	
//employee login

var employeeName = function (){}
// this is the coupon parameters
function Coupon(name,id){
	this.name = name;
	this.id = id;
	this.savings = value;
	this.verifyCoupon = function (){}; //checks if coupon is valid
	this.expiryDate = new Date();
	
	}
// this are the description for the different coupons we offer 	
function CouponDescription(savings, type){
	this.savings = savings;
	this.type = type;
	}
	// these are the different coupons we offer
	var CouponCategories = {
	TWOFORONE: "2 FOR 1",
	HALFPRICE: "50% OFF!"
}
	
	// this is the parameters for out discounts
	function Discount(value) {
		this.value = 0%
}
	
	// different types of discounts
	var DiscountCatergories {
		employeeNew = 10%
		employeeSenior = 20%
		managerDiscount = 50%
	}
	
	
	

// adds item to purchase
var addItem = function(id){
	this.id = id;
	
	
	addItem.scan((id)price, quantity){
		switch(item)
		{case "Doritos": this.add(("DD1244")2.79 * quantity); break;		}
		}
	addItem.manual(){}
	
	}

// removes item from purchase
var removeItem = function(){}


var payment = function ()
{

// Payment Method ( cash, interact, visa, amex )
var paymentMethod = ["Cash", "Interact", "Visa", "AMEX", "Master Card"];

	
}

var refund = function(){}






}