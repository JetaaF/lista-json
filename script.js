// var munesh me i rideklaru
// let,, nuk tlen me perdor emer te njejt

var frutat = ['molla', 'shega', 'kivi'];
// var frutat = [
//     'molla',
//     'shega',
//     'kivi'
// ]
// console.log(frutat.length)
// let kon = [];
// kon[0] = 'lon';
// kon[1] = 'eon';
// kon[2] = 'yon';


// shtitmi i  nje vlere ne list
// kon.push('fon');
// console.log(kon)

// for loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log("lifting wights repetitioon" + rep + '🏋️‍♀️');
// }

//  shtimi i  listave ne dom

let text = " ";
for (let i = 0; i < frutat.length; i++) {
    text = text + frutat[i] + '<br>';
    // text += frutat[i] + '<br>';
}

document.getElementById('con').innerHTML = text;



// json



