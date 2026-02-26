const http = require('http');

// 测试登录API
function testLogin() {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/auth/login',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = http.request(options, (res) => {
        console.log('登录API状态码:', res.statusCode);
        console.log('登录API响应头:', res.headers);
        
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            console.log('登录API响应数据:', data);
            try {
                const jsonData = JSON.parse(data);
                console.log('登录API响应JSON:', jsonData);
            } catch (error) {
                console.error('登录API响应JSON解析错误:', error);
            }
        });
    });

    req.on('error', (e) => {
        console.error('登录API请求错误:', e);
    });

    req.write(JSON.stringify({ email: 'test@example.com', password: '123456' }));
    req.end();
}

// 测试注册API
function testRegister() {
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/auth/register',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = http.request(options, (res) => {
        console.log('注册API状态码:', res.statusCode);
        console.log('注册API响应头:', res.headers);
        
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            console.log('注册API响应数据:', data);
            try {
                const jsonData = JSON.parse(data);
                console.log('注册API响应JSON:', jsonData);
            } catch (error) {
                console.error('注册API响应JSON解析错误:', error);
            }
        });
    });

    req.on('error', (e) => {
        console.error('注册API请求错误:', e);
    });

    req.write(JSON.stringify({ name: '测试用户2', email: 'test2@example.com', password: '123456' }));
    req.end();
}

// 运行测试
testLogin();
setTimeout(testRegister, 1000);