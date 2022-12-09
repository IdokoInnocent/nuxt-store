export default defineEventHandler(async(event) => {

    // // Handling Query params
    // const { name } = useQuery(event)
    
    // // Handling post data
    // const { age } = await useBody(event)
    
    // Api calls with private keys
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=vAZNnomlQcTcpVc5rWXxPI7WGjfGzUEDV1kORBj8')

    return data
        // message: 'Hello world'
        // message: `Hello, ${name}! You are ${age} year old`
})