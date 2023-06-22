
export const URL = process.env.URL

export const fetchAllReelBlocks = async (): Promise<Response> => {

    const response = await fetch(`${URL}reel-blocks`, {
        cache: "no-store", 
        next: { revalidate: false },
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    return await response.json()
}