/*미완성 회원가입버튼 추가해야함*/
import React from "react";

const Login=()=>{
    return(

        <>
        <h2 className="Name">웹이름</h2>
        <div className='LoginBox'>
            
        
                <form>
                    <label htmlFor="username" style={{ marginLeft: 10, padding: 10}}>Username</label>
                    <input type="text" id="username" />

                    <label htmlFor="password" style={{ marginLeft: 10, padding: 10}}>Password</label>
                    <input type="password"  id="password" />
                    
                    <div>
                    <button type="submit" className="LoginButton">Login</button>
                    </div>
                    
                </form>
            </div></>
    );
}
export default Login;
    
