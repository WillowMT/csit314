

export async function submit(prev:string, formData: FormData) {
    
}

export async function uploadImage(filename:string, file:Buffer) {
    const resp = await fetch(`https://csit314.waiyanmt.workers.dev/${file}`, {
        method:"PUT"
    })

    return resp.json()
}