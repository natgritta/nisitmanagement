<template>
    <nav>
        <div class="nav-wrapper green">
            <div id="container">
                <router-link to="/" class="brand-logo">จัดการข้อมูลนิสิต</router-link>
                <ul class="right">
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'navbar',
    data(){
        return{
            isLoggedIn: false,
            currentUser: false
        }
    },
    created(){
        if(firebase.auth().currentUser){
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
    methods: {
        logout: function(){
            firebase.auth().signOut().then(() => {
                this.$router.push('/login');
            });
        }
    }
}
</script>