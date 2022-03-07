function getUrlValuesAndDisplayMessage() {
    const params = new URLSearchParams(window.location.search);
    var message;
    var name;
    var salary;
    var designation;
    
    for (const param of params) {
        if (param[0] === 'employeeName') {
            name = param[1];
        }

        if (param[0] === 'Designation') {
            designation = param[1];
        }

        if (param[0] === 'Salary') {
            salary = param[1];
        }
    }
    message = name + ' who is a ' + designation + ' will get ' + salary
    document.getElementById("message").innerHTML = message;
}