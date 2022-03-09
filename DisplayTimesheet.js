

function loadSessionValuesAndDisplay(){
   var employeeDetails =  sessionStorage.getItem("employeeData");
   

   if(typeof(employeeDetails) !==  'undefined'){
       var result = JSON.parse(employeeDetails); 
       message = result.employeeName + ' who is a ' + result.designamtion + ' will get ' + result.salary;
       document.getElementById("message").innerHTML = message;
   }
   
}