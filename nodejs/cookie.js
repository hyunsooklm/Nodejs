const http=require('http');
const cookie=require('cookie');
var server=http.createServer((req,res)=>{
    res.setHeader('Set-Cookie', [
    'id=ninja', 
    'password=javascript', 
    `name=hyunsooklm';Max-Age=${60*60*30}`,
    `SECURE=secure;Secure`,
    `HttpOnly=HttpOnly;HttpOnly`

]);
    let cookies={};
    if(req.headers.cookie!==undefined){
    cookies=cookie.parse(req.headers.cookie);
    }
    console.log(cookies.type);
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.end('ok');
})
server.listen(3000);