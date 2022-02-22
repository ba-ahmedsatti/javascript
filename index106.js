// Exercise 106
// Create a new index106.js file
// Define the getUserID function and return the number 50
// Define the isUserValid function and return a boolean value
// Inside the isUserValid function call the getUserID function to get the 50 value
// If the user id is higher than 30 return true, if not return false
// Then outside the functions write the following code
// If isUserValid then show the following message: User valid
// Else show the following message: User not valid


function getUserID()
{
    return 30;
}

function isUserValid()
{
    if(getUserID()>30)
    {
    return true;
    }
else 
    {
        return false;
    }
}
if(isUserValid())
{
        console.log('User valid');
}else
    {
        console.log('User not valid');
    }

    // another way defining function:
    
    // let getUserID=function(){
    //     return 50;
    // }
    
    // let isUserValid=function(){
    //     if(getUserID()>30){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    
    // if(isUserValid()){
    //     console.log('User valid');
    // }else{
    //     console.log('User not valid');
    // }