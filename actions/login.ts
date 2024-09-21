const Login = async (formData: any) => {

    try {
        const loginResponse = await fetch("http://localhost:8000/api/login", {
            body: formData,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            credentials: 'include',
        })
        if (loginResponse.ok) {
            const data = await loginResponse.json()
            if (data) {
                return { "message": `Your are Logged in!`, "status": 200 }
            }
        } else {
            return { "message": "wrong username or password", "status": 400 }
        }
    } catch (error) {
        console.error(error);
    }
}
export default Login