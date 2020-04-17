const http= require('http')

const server =http.createServer ((request,response)=>{
  response.writeHead(404,{
    'Content-Type':'text/html'
  })

  console.log('MERTHOD: ', request.method)
  console.log('URL: ', request.url)

  if (request.url==='/hola'){
    response.write('<h1> hola mundo desde node http </h1>')
  }

  if (request.url==='/adios'){
    response.write('<h1> adios mundo desde node http </h1>')
  }
  
  response.end()
})
server.listen(8080)