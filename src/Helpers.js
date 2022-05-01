// Funções auxiliares

export function currentUrl() {
    let url = window.location.href
    let urlList = url.substring(url.lastIndexOf("/") + 1);
    
    return (
        urlList
    );
}