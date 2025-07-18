const delay = Math.random() * 1000;
function fetchData() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            const testData = Math.random(); // (0, 1)
            console.log(testData)
            const isSuccessful = testData > 0.5;
            // fetch logic
            if (isSuccessful) {
                res({
                    isSuccessful: isSuccessful,
                    testData: testData,
                })
            } else {
                rej({isSuccessful, testData})
            }
        }, delay)
    });

    return promise;
}

fetchData()
    .then((data) => {console.log(data.isSuccessful, data.testData)})
    .catch(({isSuccessful, testData}) => {console.error(isSuccessful, testData)})



// async function asyncWrapper() {
//     try {
//         const serverData = await fetchData();
//         console.log(serverData.isSuccessful, serverData.testData)
//     } catch (e) {
//         console.log(e.isSuccessful, e.testData)
//     }
// }

// asyncWrapper();

const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");
//     console.log("Oranges are $0.59 a pound.");

//                             v
//     break;
//   case ""Mangoes"" {
//     console.log("Oranges are $0.59 a pound.");
//         console.log("Oranges are $0.59 a pound.");
//             console.log("Oranges are $0.59 a pound.");
//                 console.log("Oranges are $0.59 a pound.");
//                     console.log("Oranges are $0.59 a pound.");


//                         console.log("Oranges are $0.59 a pound.");
//   }:
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


if (expr === "Oranges") {
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");

} else if (expr === "Mangoes") {
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Oranges are $0.59 a pound.");
    console.log("Mangoes and papayas are $2.79 a pound.");
} else if (expr === "Papayas") {

}


const variable = 1 > 0  
    ? "one" 
    : "two";

let variable1
if (1 > 0) {
    variable1 = "one"
} else {
    variable = "two"
}

const array = [1,2,3,4,5];

const array2 = array.forEach((elem) => elem + 1)


const nestedObj = {
    value3: "lala3"
}

const pot = {
    currentWaterVolume: "lala",
    maxWaterVolume: "lala2",
    boil: () => "boiled!",
}


pot.boil() // "boiled"



console.log(pot.nested.value3) // lala3

console.log(pot.currentWaterVolume)


pot_currentWaterVolume
pot_maxWaterVolume



document.getElementById("main").innerHTML = "<p>Hello!</p>"


document.getElementById("main")
    .addEventListener('focus', () => {alert('Element was focused')})