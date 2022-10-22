export async function FetchAPI(apiname, reqdata,passloader) {
    if(reqdata) {
        const req = await fetch(`https://json.astrologyapi.com/v1/${apiname}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "jp",
                Authorization:
                    "Basic " + "NjIwNDU3OjJiYTdhNTRlNDJmMzlmYTZhMDU2MDJkOTYyZmM5ZWRi",
            },
            body: JSON.stringify(reqdata),
        });
        passloader ? passloader(false) : '';
        return await req.json();
    }
    else{
        return "loading..."
    }
}



export async function FetchApi(input) {
    if (input) {
        const arg = "https://workers.vedicrishi.in/vedicrishi";
        const response = await fetch(arg, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
        return await response.json();
    } else {
        return "loading...";
    }
}