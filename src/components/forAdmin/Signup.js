import React, {useState} from "react";

import "./forAdmin_styles/Signup.css"

export default function Signup() {

    const [isRegister, setIsRegister] = useState(true)
    /*const [isLoggedIn, setIsLoggedIn] = useState(false)*/

    return (
        <div className="register-container">
            <div className="form-container" id="registration">
            <h2 className="title">{isRegister ? "Авторизація" : "Реєстрація"}</h2>
                <form action={isRegister ? "singup.php" : "singin.php"}  method="post" className="form-flex">
                    {!isRegister && <input className="name" type="text" name="name" placeholder="Ім'я" required/>}
                    <input className="email" type="email" name="email" placeholder="Електронна пошта" required/>
                    <input className="password" type="password" name="password" placeholder="Пароль" required/>
                    <button type="submit" name="register">
                        <p>{isRegister?"Авторизуватися":"Зареєстуватися"}</p>
                    </button>
                </form>
                    
                    <div className="question-to-login">
                            <p>
                                {isRegister? "Не маєш аккаунта? Зареєструйся!" : "Вже маєш аккаунт? Авторизуйся."}
                            </p>
                            <button onClick={() => setIsRegister(!isRegister)}>
                                {isRegister?"Реєстрація":"Авторизація"}
                            </button>
                    </div>
            </div>
        </div>
    );
}
