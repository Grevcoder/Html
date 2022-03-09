

  class Employeetimesheet {
    #employeeName;
    #employeeId;
    #joiningDate;
    #hoursWorked;
    #designation;
    #salary;

    constructor(){

    };
    

    get employeeName() {
      return this.#employeeName;
    }
    set employeeName(employeeName) {
      if (employeeName == "") {
        throw new Error("name filed of User cannot be empty");
      }
      this.#employeeName = employeeName;
    }

    get employeeId() {
      return this.#employeeId;
    }
    set employeeId(employeeId) {
      if (employeeId == "") {
        throw new Error("Id filed of User cannot be empty");
      }
      this.#employeeId = employeeId;
    }

    get joiningDate() {
      return this.#joiningDate;
    }
    set joiningDate(joiningDate) {
      if (joiningDate == "") {
        throw new Error("name filed of User cannot be empty");
      }
      this.#joiningDate = joiningDate;
    }
    get hoursWorked() {
      return this.#hoursWorked;
    }
    set hoursWorked(hoursWorked) {
      if (hoursWorked == "") {
        throw new Error("name filed of User cannot be empty");
      }
      this.#hoursWorked = hoursWorked;
    }
    get designation() {
      return this.#designation;
    }
    set designation(designation) {
      if (designation == "") {
        throw new Error("name filed of User cannot be empty");
      }
      this.#designation = designation;
    }

    get salary(){
      return this.#salary;
    }

    set salary(salary){
      this.#salary = salary;
    }

    toJSON(){
      return {
        employeeName : this.employeeName,
        employeeId : this.employeeId,
        joiningDate : this.joiningDate,
        hoursWorked : this.hoursWorked,
        designation : this.designation,
        salary : this.salary
      }
    }

    getEmployeeSalary(){
      if (this.#designation === "Manager") {
        this.#salary = this.#hoursWorked * 90;
      } else if (this.#designation === "Consultant") {
        this.#salary = this.#hoursWorked * 70;
      } else if (this.#designation == "Trainee") {
        this.#salary = this.#hoursWorked * 45;
      }
    }
  }

  function getEmployeeTimeSheet() {
    var empObject = new Employeetimesheet();

    empObject.employeeName = document.getElementById("employeeName").value;
    empObject.employeeId = document.getElementById("employeeId").value;
    empObject.joiningDate = document.getElementById("joiningDate").value;
    empObject.hoursWorked = document.getElementById("hoursWorked").value;
    empObject.designation = document.getElementById("designation").value;
    
      empObject.getEmployeeSalary();
      sessionStorage.setItem("employeeData", JSON.stringify (empObject.toJSON()));   

  }

