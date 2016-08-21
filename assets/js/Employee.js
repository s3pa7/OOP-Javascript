/**
 * 
 */
function Employee (name) {
	var _name =  name;
	var _currentTask;
	var _hoursLeft = 0;
	
	this.getName = function () {
        return _name;
    };

    this.setName = function (newName) {
    	if(newName == ""){
    		alert("Must be mandatory");
    	}else {
    		_name = newName;
    	}
    };
    
	this.getCurrentTask = function () {
        return _currentTask;
    };

    this.setCurrentTask = function (currentTask) {
    		_currentTask = currentTask;
    	
    };
    
    
	this.getHoursLeft = function () {
        return _hoursLeft;
    };

    this.setHoursLeft = function (hoursLeft) {
       	if(hoursLeft < 0){
    		alert("Please set only  positive numbers");
    	}else {
    		_hoursLeft = hoursLeft;
    	}
    };
	
}
Employee.prototype.work = function (){
	if(this.getCurrentTask() !=  ""){

		var differens = Math.abs(this.getCurrentTask().getWorkingHours() - this.getHoursLeft());

		if(this.getCurrentTask().getWorkingHours() > this.getHoursLeft()){
			this.getCurrentTask().setWorkingHours(differens);
			 this.setHoursLeft(0);
		}else {
			this.getCurrentTask().setWorkingHours(0);
			 this.setHoursLeft(differens);
		}
	}
}
Employee.prototype.showReport = function (){
	console.log("Name of  Employee: "  + this.getName());
	console.log("Name of  Task: "  + this.getCurrentTask().getName());
	console.log("Remaining hours of employee: " + this.getHoursLeft());
	console.log("Remaining hours of employee's tasks: "  + this.getCurrentTask().getWorkingHours());
}