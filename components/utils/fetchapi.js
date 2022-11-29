export async function FetchAPI(apiname, reqdata,passloader) {
    if(reqdata) {
        const req = await fetch(`https://json.astrologyapi.com/v1/${apiname}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": "jp",
                Authorization:
                    "Basic " + "NjAxMjgwOjAwMTJiMzVkOWVhMzlmNjgyYWMyNGI0ZmE3MjdmMTMx",
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

