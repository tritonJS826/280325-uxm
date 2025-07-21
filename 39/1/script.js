// let login = document.getElementById("login")
// localstorage ~4-5 Mb
// sessionStorage ~4-5 Mb
// indexDb ~ 2-5Gb async
// BROWSER API (frontend sync engines (zero)): read\write files sqlight
//
// CDN


// JSON "{fieldSuperNAmeLonlalalalal: value, array: ['1', '2']}"
// XML

{/* 
    <field>
        value
    </field>
 */}

// GRPC rust, golang, microserice
// fieldSuperNAmeLonlalalalal = 1

// 1: value
// debounce



// function myFunc() {
    //     console.log('hello')
    // }
    // setTimeout(myFunc, 3000);

// setTimeout(() => {console.log('hello')}, 3000);

// setTimeout(() => {
//     const mainElement = document.getElementById('main');
//     mainElement.innerHTML = '<h1>Hello!!</h1>'
// }, 3000);



// setInterval(() => {
//     const main2Element = document.getElementById('main2');
//     main2Element.innerHTML = main2Element.innerHTML + '<br><span>Hello!!</span>'
// }, 1000);


// const promise = new Promise((res, rej) => {
//     const dataBool = false;
//     if (dataBool) {
//         res('ok!!');
//     } else {
//         rej('not ok');
//     }

//     // useless return 
//     return 'super ok'
// })

// promise
//     .then((data) => {console.log("everything is ok:" + data)})
//     .catch((data) => {console.log("rejected:"+data)})
//     .finally(() => {console.log("finished!")})
 
// try {
//     // async logic
//     // ...then()...
// } catch (e) {
//     // ...rej logic...
// } finally {
//     // finally logic
// }


// function checkEvenNumber(number) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const isEven = number % 2 === 0;
//         if (isEven) {
//             resolve("Число четное");
//         } else {
//             reject("Число нечетное");
//         }
//         }, 1000);
//     });
//     return promise;
// }

// // Использование Promise с then и catch
// const inputNumber = 7;
// checkEvenNumber(inputNumber)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// 2. Создайте функцию fetchData, которая возвращает Promise. Используйте setTimeout, чтобы имитировать задержку при загрузке данных с сервера. Если данные успешно загружены, выполните resolve с данными, иначе выполните reject с сообщением об ошибке.


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

