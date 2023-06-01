async function getWebPage() {
    console.log("function iniciada");
    try {
        const response = await fetch("https://www.caixa.gov.br/site/Paginas/downloads.aspx")
        const html = await response.text()
        console.log(html);
    } catch (error) {
        console.log(error);
    }
}


//run function
getWebPage()