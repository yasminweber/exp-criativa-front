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