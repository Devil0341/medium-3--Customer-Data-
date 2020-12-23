// Write your greetCustomer function here
const customerData = {
 'Joe': {
   visits: 1
 },
 'Carol': {
   visits: 2
 },
 'Howard': {
   visits: 3
 },
 'Carrie': {
   visits: 4
 }
}

function greetCustomer(customerData, name){
  const obj = customerData;
 let greeting = '';

  
    if (!obj[name]){
      greeting = 'Welcome! Is this your first time?';
      return greeting;
    }
    
     if (obj[name].visits === 1){
      greeting = 'Welcome back,' + ' ' + name +'! We\'re glad you liked us the first time!';
      return greeting;
    }
    
    if ( obj[name].visits > 1 ) {
      greeting = 'Welcome back,' + ' ' + name + '! It\'s good to see a regular customer';
      return greeting;
      }
}






// If the customer is not present in customerData:
//greetCustomer(customerData, 'Terrance');
//console.log(greetCustomer(customerData, 'Terrance'))// 'Welcome! Is this your first time?'

// If the customer has visited only once ('visits' value is 1):
//greetCustomer(customerData, 'Joe'); // 'Welcome back, Joe! We're glad you liked us the first time!'
//console.log(greetCustomer(customerData, 'Joe'));


// If the customer is a repeat customer: ('visits' value is greater than 1)
greetCustomer(customerData, 'Carol'); // 'Welcome back, Carol! It's good to see a regular customer'
//console.log(greetCustomer(customerData, 'Carol'));