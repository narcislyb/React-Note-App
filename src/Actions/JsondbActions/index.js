import { API_GET_DATA } from "../../global/constant"

const JsondbActions = {

    async fetchData(setData) {
        const res = await fetch(API_GET_DATA)
        const { data } = await res.json()
        setData(data)
    },

    async fetchSetData(data) {
        await fetch(API_GET_DATA, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( {data} )
        })
    }

}


// const fetchData = async (setData) => {
//     const res = await fetch(API_GET_DATA)
//     const { data } = await res.json()
//     setData(data)
// }

// const fetchSetData = async (data) => {
//     await fetch(API_GET_DATA, {
//         method: "PUT",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify( {data} )
//     })
// }

export default JsondbActions;