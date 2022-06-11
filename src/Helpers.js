import api from "./config/api";
import { storage } from "./firebase";

// Funções auxiliares

export function currentUrl() {
    let url = window.location.href
    let urlList = url.substring(url.lastIndexOf("/") + 1);

    return (
        urlList
    );
}

export function formatDate(input) {
    var input2 = input.toString()
    var pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!input2 || !input2.match(pattern)) {
        return null;
    }
    var data = input2.replace(pattern, '$3/$2/$1');
    var data2 = data.split('T', 1);
    return data2;
}

export function dateInput(input) {
    var input2 = input.toString()
    var data = input2.split('T', 1);
    return data;
}

// validar se é mesmo ano e mês
export function checkMonthYear(start, end) {
    const dateStart = String(start);
    const dateEnd = String(end);
    const splitStart = dateStart.split('/');
    const splitEnd = dateEnd.split('/');

    if (splitEnd[2] === splitStart[2]) {
        if (splitEnd[1] === splitStart[1]) {

            console.log("same month")
            return splitStart[0] + "/" + splitStart[1] + " - " + splitEnd[0] + "/" + splitEnd[1]
        }
        return "same year"
    }
    return "not the same year"
}

// subtract dates
export function subtract_dates(date1) {
    var dt1 = new Date(date1)
    var dt2 = new Date()
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff));
}

// click mudança de idioma
export function changeLanguage() {
    const language = localStorage.getItem("language");
    const selectedLanguage = window.event.target.id;
    // console.log(selectedLanguage)
    if (language !== selectedLanguage) {
        localStorage.setItem("language", selectedLanguage);
        console.log(selectedLanguage)
        window.location.reload();
    }
}

// para nunca deixar language em branco
if (localStorage.getItem("language") === null) {
    localStorage.setItem("language", "pt-br");
    if (localStorage.getItem("language") === "") {
        localStorage.setItem("language", "pt-br");
    }
}

// importa json de tradução
export function translation(language) {
    const json = require('./config/languages/' + language + '.json')
    // console.log(json)
    return json
}

// function to change status on project if createdDate is same as today
export async function setProjectProgress() {
    await api.get('/projects')
        .then(res => {
            res.data.forEach(project => {
                if (project.status === "aprovado") {
                    if (project.startDate.split('T')[0] === new Date().toISOString().split('T')[0]) {
                        api.put(`/projects/${project._id}`, { status: 'progresso' })
                        console.log("projeto mudado", project._id);
                    }
                }
            })
        })
        .catch(err => {
            console.log(err);
        });
}

// Get images URL from Firebase
export async function getImagesUrl(postId) {
    let ref = "/posts/" + "62a41923adc9711f508b7986"
    let images = await storage.ref(ref).listAll();
    // console.log(await images.items[0].getDownloadURL())

    let imagesUrl = await Promise.all(images.items.map(item => item.getDownloadURL()))
    console.log(imagesUrl)
    // let imagesUrl = await Promise.all(images.items.map(item =>
    //     item.getDownloadURL()
    // ))
    // console.log(imagesUrl)
    // return imagesUrl
}
