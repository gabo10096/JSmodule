<template>
    <div>
        <h4>Login</h4>
        <form>
            <label for="email"></label>
            <div>
                <input type="email" id="email" v-model="email" required>
            </div>
            <label for="password"></label>
            <div>
                <input type="password" id="password" v-model="password">
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        handleSubmit(e){
            e.preventDefault()
            if (this.password.length > 0) {
                fetch('http://localhost:3000/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        email:this.email,
                        password: this.password
                    }),
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(response => {
                    const jwtPayload = JSON.parse(atob(response.token.split('.')[1]))
                    let isAdmin = jwtPayload.user.roles.includes('admin')
                    localStorage.setItem('user', JSON.stringify(jwtPayload.user))
                    localStorage.setItem('jwt', response.token)
                    if (localStorage.getItem('jwt')) {
                        if (isAdmin) {
                            this.$router.push('admin')
                        }else{
                            this.$router.push('dashboard')
                        }
                    }
                })
                .catch(err => {throw new Error(err)})
            }
        }
    }
}
</script>
