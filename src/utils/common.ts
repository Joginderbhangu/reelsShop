
export const clone = (state: any) => {
    if(typeof structuredClone === "function"){
        return structuredClone(state)
    } else {
        return JSON.parse(JSON.stringify(state))
    }
}