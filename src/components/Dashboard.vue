<template>
    <div id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header"><h4>รายชื่อนักศึกษา</h4></li>
            <router-link to="/reg" class="btn blue">ลงทะเบียน</router-link>
            <li v-for="nisit in nisits" v-bind:key="nisit.id" class="collection-item">
                <div class="chip">{{nisit.nisit_dept}}</div>
                รหัสนิสิต :{{nisit.nisit_id}} ชื่อ :{{nisit.nisit_name}} ชั้นปีที่ :{{nisit.nisit_class}}

                <router-link class="secondary-content" v-bind:to="{name: 'view-nisit', params: {nisit_id: nisit.nisit_id}}">
                    <i class="fa fa-eye"></i>
                </router-link>
            </li>
        </ul>

        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large blue">
            <i class="fa fa-plus"></i>

            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data(){
        return{
            nisits: []
        }
    },
    created(){
        db.collection('nisits').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'nisit_id': doc.data().nisit_id,
                    'nisit_name': doc.data().nisit_name,
                    'nisit_class': doc.data().nisit_class,
                    'nisit_dept': doc.data().nisit_dept
                }
                this.nisits.push(data)
            })
        })
    }
}
</script>