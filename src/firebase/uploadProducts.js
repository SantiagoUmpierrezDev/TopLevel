import data from '../data/products.json' assert { type: "json" }
import { db } from './firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'


data.forEach(item => delete item.id)

const productsRef = collection(db, 'Products')

data.forEach(item => {
    addDoc(productsRef, item)
})