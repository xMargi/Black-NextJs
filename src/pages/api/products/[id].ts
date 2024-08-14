import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../../database.json'

export default function handler(request: NextApiRequest, response: NextApiResponse){
    const {id} = request.query
    const product = products.find(prod => prod.id === Number(id))
    response.status(200).json(product)
}