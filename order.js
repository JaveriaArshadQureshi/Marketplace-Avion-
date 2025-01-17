export default{
    name:"order",
    type:"document",
    title:"Order"
    fields:[
        {
            name:"quantity",
            type:"string",
            title:"Quantity"
        },
        {
            name:"totalprice",
            type:"number",
            title:"Totalprice"
        },
        {
            name:"customerID",
            type:"string",
            title:"CustomerID"
        },
        {
            name:"product",
            type:"string",
            title:"Product"
        }

    ]
    
}