import products from "../data/products.json"

export const DataRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
                resolve(products)
        }, 700)
    })
}

export const RequestDataPerId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const product = products.find((el) => el.id === id) 
            if (product) {
                resolve(product)
            } else {
                reject({
                    aerror: "The product you were looking for wasn't found"
                })
            }
        }, 700)
    })
}