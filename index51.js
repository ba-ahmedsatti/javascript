// Exercise 51
// Create a new index51.js file
// Define username variable and assign the following value: pepe2017
// Define password variable and assign the following string value: 12345
// If the user name equals pepe2017 AND password equals 12345 then show the following message as output: Logged in user, show user home page

const username = 'pepe2017';
const password = '12345';

if (username === 'pepe2017' && password === '12345')
{
    console.log('Logged in user, show user home page');
    }

  
  
    // $(document).ready(function() {
    //     let userData = [
    //       {
    //         email: 'knorr@live.com',
    //         password: 'ksGuQbzYPpW'
    //       },
          
    //       {
    //         email: 'amichalo@mac.com',
    //         password: 'c7muQ6bxcA9QJKS'
    //       },
    //       {
    //         email: 'mallanmba@yahoo.ca',
    //         password: 'NqCGLmGtcFU'
    //       },
    //       {
    //         email: 'isaacson@att.net',
    //         password: 'PMjRGUug7Ff73Kt'
    //       },
    //       {
    //         email: 'aracne@aol.com',
    //         password: 'sBJU7JJR7Qx6f55'
    //       },
    //       {
    //         email: 'boser@comcast.net',
    //         password: 'DMXQRNj7BHZ'
    //       },
          
    //       {
    //         email: 'campbell@yahoo.com',
    //         password: 'ZmYZgaDq6'
    //       },
    //       {
    //         email: 'wetter@me.com',
    //         password: 'ppTG3pGAe'
    //       },
    //       {
    //         email: 'british@verizon.net',
    //         password: '67SbpGYvPJ2'
    //       }
    //     ];
      
    //     $("#loginBtn").on("click", function() {
    //       let email = $("#email").val();
    //       let password = $("#pass").val();
      
    //       for (let i = 0; i < userData.length; i++) {
    //         if (email === userData[i].email) {
    //           if (password === userData[i].password) {
    //             alert("Match");
    //           } else if (password !== userData[i].password) {
    //             alert("Incorrect Password");
    //           }
      
    //           break;
    //         } else {
    //           alert("Invalid Login");
    //         }
    //       }
    //     });
    //   });