// const pertanyaan = document.getElementById("pertanyaan");
// const jawaban = document.getElementById("jawaban");
// const loaders = document.getElementById("loaders");
// const container = document.getElementsByClassName("container");

// let init = 0

// const botSay = (data) => {
//     return [
//         "Hallo, perkenalkan nama saya fakeBot, siapa nama kamu?",
//         `Hallo ${data?.nama}, berapa usia kamu?`,
//         `Ohhh ${data?.usia}, hobi kamu apa ya?`,
//         `waaww sama dong, aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
//         `ohhh ${data?.pacar}, ya udah kalo gitu. udah dulu yah`,
    
//     ]
// }

// pertanyaan.innerHTML = botSay()[0]

// let userData = []

// function botStart() {
//     if (jawaban.value.length < 1) return alert("silahkan isi jawaban dulu")
//     init++
//     if (init === 1) {
//         botDelay({ nama: jawaban.value})
//     } else if (init === 2) {
//         botDelay({ usia: jawaban.value})
//     } else if (init === 3) {
//         botDelay({hobi: jawaban.value})
//     } else if (init === 4) {
//         botDelay({pacar: jawaban.value})
//     } else if (init === 5) {
//         finishing()
//     } else {
//         botEnd()
//     }
// }

// function botDelay(jawabanUser) {
//     loaders.style.display = "block"
//     container[0].style.filter = "blur(5px)"
//     setTimeout(() => {
//         pertanyaan.innerHTML = botSay(jawabanUser)[init]
//         loaders.style.display = "none"
//         container[0].style.filter = "none"  
//     }, 1500);
//     userData.push(jawaban.value)
//     jawaban.value = ""
// }

// function finishing() {
//     pertanyaan.innerHTML = `Thank you ya ${userData[0]} udah main ke fakeBot 😉, kali kali kita main ${userData[2]} bareng ya. ditunggu🤣`
//     jawaban.value = "siapp, thanks juga yaa!"
// }

// function botEnd() {
//     alert(`Terimakasih ${userData[0]} telah berkunjung ke fakeBot, anda akan diarahkan ke halaman utama`)
//     window.location.reload()
// }

// efisiensi
const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

let init = 0;

const botSay = (data) => {
    return [
        "Hallo, perkenalkan nama saya fakeBot, siapa nama kamu?",
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa ya?`,
        `waaww sama dong, aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `ohhh ${data?.pacar}, ya udah kalo gitu. udah dulu yah`,
    ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = {};

function botStart() {
    if (jawaban.value.length < 1) return alert("Silahkan isi jawaban dulu");
    init++;
    if (init <= 4) {
        botDelay({ [getPropertyName(init)]: jawaban.value });
    } else if (init === 5) {
        finishing();
    } else {
        botEnd();
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block";
    container[0].style.filter = "blur(5px)";
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init];
        loaders.style.display = "none";
        container[0].style.filter = "none";
    }, 1500);
    userData = { ...userData, ...jawabanUser };
    jawaban.value = "";
}

function finishing() {
    pertanyaan.innerHTML = `Thank you ya ${userData.nama} udah main ke fakeBot 😉, kali kali kita main ${userData.hobi} bareng ya. Ditunggu🤣`;
    jawaban.value = "Siapp, thanks juga yaa!";
}

function botEnd() {
    alert(`Terimakasih ${userData.nama} telah berkunjung ke fakeBot, anda akan diarahkan ke halaman utama`);
    window.location.reload();
}

function getPropertyName(init) {
    switch (init) {
        case 1:
            return "nama";
        case 2:
            return "usia";
        case 3:
            return "hobi";
        case 4:
            return "pacar";
        default:
            return "";
    }
}
