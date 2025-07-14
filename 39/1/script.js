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
        }, 1000)
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

