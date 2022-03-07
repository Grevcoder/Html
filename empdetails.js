
    function empDetails() {
        var employeeDetails = {}
        employeeDetails.employeeName = document.getElementById('employeeName').value;
        employeeDetails.employeeId = document.getElementById('employeeId').value;
        employeeDetails.joiningDate = document.getElementById('joiningDate').value;
        employeeDetails.hoursWorked = document.getElementById('hoursWorked').value;
        employeeDetails.Designamtion = document.getElementById('Designamtion').value;
        if (employeeDetails.employeeName == "" || employeeDetails.employeeId == "" || employeeDetails.hoursWorked == "" || employeeDetails.Designamtion == "") {
            alert("All fields are mandatory");
            return false;
        }
        var salary;


        if (employeeDetails.Designamtion == "Manager") {
            salary = employeeDetails.hoursWorked * 90;
            window.location.href = "DisplayEmployee.html?employeeName=" + employeeDetails.employeeName + "&Designation=" + employeeDetails.Designamtion + "&Salary=" + salary;
        }
        else if (employeeDetails.Designamtion == "Consultant") {
            salary = employeeDetails.hoursWorked * 70;
            var designation = window.location.replace("DisplayEmployee.html?employeeName=" + employeeDetails.employeeName + "&Designation=" + employeeDetails.Designamtion + "&Salary=" + salary);
        }
        else if (employeeDetails.Designamtion == "Trainee") {
            salary = employeeDetails.hoursWorked * 45;
            var designation = window.location.replace("DisplayEmployee.html?employeeName=" + employeeDetails.employeeName + "&Designation=" + employeeDetails.Designamtion + "&Salary=" + salary);
        }
    }











