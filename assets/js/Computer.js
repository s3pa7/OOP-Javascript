/**
 * 
 */
function Computer (year,price,isNotebook,hardDiskMemory,freeMemory,operationSystem){
	this.year = year;
	this.price = price;
	this.isNotebook = isNotebook;
	this.hardDiskMemory = hardDiskMemory;
	this.freeMemory = freeMemory;
	this.operationSystem = operationSystem;
	
}
Computer.prototype.changeOperationSystem = function (newOperationSystem){
	this.operationSystem = newOperationSystem;
}
Computer.prototype.useMemory = function(memory){
	if(memory > this.freeMemory){
		console.log("Not enough free memory!");
	}else {
		this.freeMemory = this.freeMemory - memory;
		return this.freeMemory;
	}
}