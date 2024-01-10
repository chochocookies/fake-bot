const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0

const botSay = (data) => {
    return [
        "Hallo, perkenalkan nama saya fakeBot, siapa nama kamu?",
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa ya?`,
        `waaww sama dong, aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `ohhh ${data?.pacar}, ya udah kalo gitu. udah dulu yah`,
    
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    } else if (init === 2) {
        botDelay({ usia: jawaban.value})
    } else if (init === 3) {
        botDelay({hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, 1500);
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thank you ya ${userData[0]} udah main ke fakeBot 😉, kali kali kita main ${userData[2]} bareng ya. ditunggu🤣`
    jawaban.value = "siapp, thanks juga yaa!"
}

function botEnd() {
    window.location.reload()
}