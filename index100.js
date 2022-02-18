// Exercise 100
// Create a new index100.js file
// Define a function that will show even numbers from 0 to 100 as output


const evenNumber = function() {
    for(let number = 0; number <= 100; number++)
    {
        if (number %2 === 0)
        {
            console.log(number);
        }
    }
  }
evenNumber();


// or you can asign function as follows:

// function evenNumber() {
//     for(let number = 0; number <= 100; number++)
//     {
//         if (number %2 === 0)
//         {
//             console.log(number);
//         }
//     }
//   }

//   evenNumber();