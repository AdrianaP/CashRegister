// JavaScript Document\\

function CashRegister(){
 
 			// GLOBAL RULES
 
 	var Declined = function () {};
	var Approved = function () {};
 
 
 
 
 
 
 
 
 	//openregister
	function openRegister(login){}
		//closeregister
	function closeRegister(password){}
 
 
 
 
 			//employee login
var employeeName =  ["Adriana", "Victor", "Chris", "Juan"];
	this.name = name;
	this.employeeID = employeeID;

		login = function (){
			prompt ("Please enter employee ID");
			if (employeeID === true){
				// after logging in
				}
			else{
			prompt ("Access Denied");
				}
			var changeEmployeeName = function(){
};
	

 
	// Commercial merchandise
function Product(name,barCode,price){
	this.name = name;
	this.barCode = Barcode;
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
};
	//I COULD BE COMPLETELY WRONG BUT THIS IS WHAT I UNDERSTAND
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
	
	// Payment Method ( cash, interact, visa, amex )
var paymentMethod = ["Cash", "Interact", "Visa", "AMEX", "Master Card"];
	this.cash = function () {}// cash - totalprice = new var change... 
	this.interact = function (){}
	this.visa = function (){}
	this.amex = function (){}
	this.mastercard = function (){}	
}
					
 	//reciept
function Receipt(){
	var change = funtion ()
		if(this.cash > totalprice) {
			totalPrice.value = this.cash = change
	};//return the cash 
}
				this.items = {};	
					var reciepts = {}; //holds all reciepts 
					var currentReciept = {}; //  current reciept
					
					// Rendering of printing for the receipt
						var printReciept = function (reciept) {}; // prints selected reciept
						var printRecieptHeader = function (){}; // greetings, adress
						var printRecieptFooter = function (){}; // thank you
						var printReceiptBody = function(){}; // the items, other stuff

							function (printAllReceipts){
						// in order to complete reading of the day							
							}
								var displayPrice = function (){};
								var signature = function (){};
								
						
	// CONSTANTS
var STORE_NAME = "CHIMMY CHONGAZ";
var STORE_ADDRESS_LINE_1 = "Juan Street";
var STORE_ADDRESS_LINE_2 = "";
var STORE_MAIN_PHONE = "JUAN-1111";
var STORE_RETURN_POLICY = "NO REFUNDS"; // the paragraph about the return policy
var STORE_MAIN_PHONE = "514 999 999";
var STORE_RETURN_POLICY = "no return policy"; // the paragraph about the return policy
var STORE_CURRENT_TIME_AND_DATE = "";
var TRANSACTION_NUMBER = "";

	var TPS_TAX = 0.5;
	var TVQ_TAX = 0.975;
					
		this.calculateSubtotal = function(){};
		this.calculateTPSTax = function(){};
		this.calculateTVQTax = function(){};
		this.calculateTotal = function(){};
					
		//paymentMethod has to return approved for this to work
var pointsCard =  []
	if(paymentMethod === Approved){
		var pointsCard = value + 100;
};
 		



	
		// this are the description for the different coupons we offer 	
function Coupon(code, name , discount, percentage_off){
	this.code = code;
	this.name = name; 
	this.discount = discount;
	this.percentage_off = percentage_off;
	this.expirery_date = new Date();
	this.isValid = true;
	this.condition = function(){}
	this.apply = function() {
		Coupon - totalprice.value
		}
};
						
	// this is the parameters for our discounts
function Discount(name, discount_percentage) {
	this.name = name;
	this.discount_percentage = discount_percentage;
	this.apply = function () {};
};
			// different types of discount						
		Discount.apply = function  (){};
												
		// adds item to purchase
var addItem = function(barCode){};
	this.barCode = barCode;
		addItem.scan((barCode), price, quantity); {
			switch(item)
				{
					case "Doritos": this.add(("DD1244")2.79 * quantity); break;
					}
					addItem.manual(){
						this.productCode = 0;
}
		}

		// removes item from purchase
var removeItem = function(){};


var payment = function (){
															

		// Payment Method ( cash, interact, visa, amex )
var paymentMethod = ["Cash", "Interact", "Visa", "AMEX", "Master Card"];
	function paymentMethod (){};
	function validatePayment(){};
	function processPayment (method){};

	//not enough money						
function insufficientFunds (Declined){
}
															
	//CurrentReciept gets void if the transaction is denied ...return message to print on the receipt
var voidReceipt = 	function() {
	if(paymentMethod === Declined){
		var currentReciept = "Denied, Please come Again!" ; 
		};
}

}

		//refund
 var refundMethod = ["Cash", "Interact", "Visa", "AMEX", "Master Card"];																								
function validateRefund (){};
function processRefund (){};
	var signature = function () {} // if payment by card ask for signature
								
						
		//machine screen display 		
function displayMessage(){
	this.greetings = "Welcome";
	this.price = [];
	this.changeDisplay = value;
	this.itemInfo = ("");
	this.greetings2 = "Thank you";
	this.age = "Ask for ID card"
	this.erroritem = "Item not found in system"
	}				
		var ageVerification = funtion (){} // if item alcool,tobacco,lotto is bought prompt message this.age	
		var moneyConvert = function (){} //if payment with USD get info from www.xe.com database to convert
		var genReceipt = (){} // generate receipt by starting from 0 and adding 1 after each client
		var customPrice = (){} //if scan returns error, then prompt to manually enter price
				
		
}

