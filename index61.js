const weekdayNumber = 1;

// if (weekdayNumber === 1)
// {
//     console.log("Today is Monday");
// }
// else if (weekdayNumber === 2)
// {
//     console.log("today is Tuesday");
// }
// else if (weekdayNumber === 3)
// {
//     console.log("today is Wednesday");
// }
// else if (weekdayNumber === 4)
// {
//     console.log("today is Thursday");
// }
// else if (weekdayNumber === 5)
// {
//     console.log("today is Friday");
// }
// else if (weekdayNumber === 6)
// {
//     console.log("today is Saturday");
// }
// else if (weekdayNumber === 7)
// {
//     console.log("today is Sunday");
// }
// else
// {
//     console.log("please input a number between 1 and 7");
// }

let message = null;

switch (weekdayNumber)
{
    case 1:
        message = 'Today is Monday';
        break;
    case 2:
        message = 'Today is Tuesday';
        break;
    case 3:
        message = 'Today is Wednesday';
        break;
    case 4:
        message = 'Today is Thursday';
        break;
    case 5:
        message = 'Today is Friday';
        break;
    console.log(message);
    case 6:
        message = 'Today is Saturday';
        break;
    case 7:
        message = 'Today is Sunday';
        break;
    default:
        message = 'please input a number between 1 and 7';
}
    console.log(message);