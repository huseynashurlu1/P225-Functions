
// Callback

// function PersonDetails(name,callback){
//     console.log(name);
//     setTimeout(() => {
//         callback();
//     }, 2000);

// }

// function GetDataFromApi() {
//     console.log("Data is loaded");
// }


// PersonDetails("Abdulla",GetDataFromApi);


// setTimeout
// setInterval


// function Mode() {
//     document.body.style.backgroundColor = "red"
// }

// // setTimeout(Mode,5000)

// setTimeout(() => {
//     Mode();
// }, 5000);


// function Timer() {
//     let text = document.getElementById('date');
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();

//     if(s<10) {
//         s = "0" + date.getSeconds();
//     }

//     text.innerHTML = `${h} : ${m} : ${s}`
// }

// setInterval(Timer,1000);


// function Loading() {
//     document.getElementById('loader').style.display = 'none';
//     document.getElementById('site-content').style.display = 'block'
// }

// setTimeout(() => {
//     Loading();
// }, 5000);


// function Download(){

//     let loader = document.getElementById('loader');
//     let btn = document.getElementById('btn');
//     let text = document.getElementById('text');

//     loader.classList.remove('d-none');
//     text.innerHTML = "";

//     setTimeout(() => {
//         alert("File uploaded!");
//         btn.innerHTML = "Download";
//         loader.classList.add('d-none');
//     }, 3000);

// }

// function Hesabla(){
//     let deyer = document.getElementById('input').value;
//     let x = Number(deyer)
//     document.getElementById('mebleg').innerHTML = deyer + " AZN"
//     document.getElementById('mebleg').style.display = 'inline'
// }


function Credit(){
    let sum = document.querySelector('.sum').value;
    let percentage = document.querySelector('.percent').value;
    let month = document.querySelector('.month').value;

    let summary = ((sum*percentage)/100)*(month/12);
    summary= Number.parseFloat(summary) + Number.parseFloat(sum);

    document.querySelector('.summaryPercentage').innerHTML=summary;
    document.querySelector('.monthPercentage').innerHTML=(Number.parseFloat(summary)/Number.parseFloat(month)).toFixed(2);
}

