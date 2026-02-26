// 测试登录功能
async function testLogin() {
    console.log('开始测试登录功能');
    
    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'test@example.com', password: '123456' })
        });
        
        console.log('登录响应状态:', response.status);
        
        const text = await response.text();
        console.log('登录响应文本:', text);
        
        if (!text) {
            throw new Error('响应文本为空');
        }
        
        const data = JSON.parse(text);
        console.log('登录响应JSON:', data);
        
        if (!response.ok) {
            throw new Error(data.error || '登录失败');
        }
        
        console.log('登录成功:', data);
    } catch (error) {
        console.error('登录错误:', error);
    }
}

// 测试注册功能
async function testRegister() {
    console.log('开始测试注册功能');
    
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: '测试用户3', email: 'test3@example.com', password: '123456' })
        });
        
        console.log('注册响应状态:', response.status);
        
        const text = await response.text();
        console.log('注册响应文本:', text);
        
        if (!text) {
            throw new Error('响应文本为空');
        }
        
        const data = JSON.parse(text);
        console.log('注册响应JSON:', data);
        
        if (!response.ok) {
            throw new Error(data.error || '注册失败');
        }
        
        console.log('注册成功:', data);
    } catch (error) {
        console.error('注册错误:', error);
    }
}

// 运行测试
testLogin();
testRegister();