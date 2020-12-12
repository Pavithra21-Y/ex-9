var net_sal;
var basic_sal=30000;
var da=20;
var hra=40;
var other_exp=4500;
var deduction=3000;
net_sal=(((da/100)*basic_sal)+((hra/100)*basic_sal)+other_exp+basic_sal)-deduction;
console.log("--------------------------------------------------------------------")
console.log(" //////////////////////PAYROLL CALCULATION//////////////////////////") 
console.log("--------------------------------------------------------------------")
console.log("Your Basic salary = "+basic_sal)
console.log("Your DA = "+da+"% OF BASIC SALARY")
console.log("Your HRA =  "+hra+"% OF BASIC SALARY")
console.log("Aount given for other expense =  "+other_exp) 
console.log("Deduction Amount =  "+deduction)
console.log("--------------------------------------------------------------------")
console.log("Your Net Salary =  "+net_sal)
console.log("--------------------------------------------------------------------") 
