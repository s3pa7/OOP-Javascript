/**
 * 
 */
function Task(name, workingHours){
	var _name = name;
	var _workingHours = workingHours;
	
	this.getName = function () {
        return _name;
    };

    this.setName = function (newName) {
    	_name = newName;
    };
	
	this.getWorkingHours = function () {
        return _workingHours;
    };

    this.setWorkingHours = function (newWorkingHours) {
    	_workingHours = newWorkingHours;
    };
}