const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checaStatus(arrayUrls) {
    //promisses async await
    const arrayStatus = await Promise.all(arrayUrls.map(async url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;
}

function geraArrayUrls(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join())
}

async function validaUrls(arrayLinks) {
    const links = geraArrayUrls(arrayLinks)
    const statusLinks = await checaStatus(links);
    return statusLinks;
}

module.exports = validaUrls;