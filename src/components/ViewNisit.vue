<template>
    <div id="view-nisit">
        <ul class="collection with-header">
            <li class="collection-header"><h4>{{nisit_name}}</h4></li>
            <li class="collection-header"><h4>วิชาที่ลงทะเบียน : </h4></li>
            <li class="collection-header">{{subject_name}}</li>
            <li class="collection-header">{{subject_name2}}</li>
            <li class="collection-header">{{subject_name3}}</li>
            <li class="collection-header">{{subject_name4}}</li>
            <li class="collection-header">{{subject_name5}}</li>
            <li class="collection-header">{{subject_name6}}</li>
            <li class="collection-header">{{subject_name7}}</li>
            <li class="collection-header">{{subject_name8}}</li>
            <li class="collection-header">{{subject_name9}}</li>
        </ul>
        <router-link to="/" class="btn grey">ย้อนกลับ</router-link>
        <button @click="deleteNisit" class="btn red">ลบข้อมูลการลงทะเบียน</button>

        <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'edit-nisit', params: {nisit_id: nisit_id}}" class="btn-floating btn-large blue">
            <i class="fa fa-pencil"></i>

            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-nisit',
    data(){
        return{
            nisit_id: null,
            nisit_name: null,
            subject_name: null,
            subject_name2: null,
            subject_name3: null,
            subject_name4: null,
            subject_name5: null,
            subject_name6: null,
            subject_name7: null,
            subject_name8: null,
            subject_name9: null
        }
    },
    beforeRouteEnter(to, from, next){ 
        db.collection('nisitregister').where('nisit_id', '==', to.params.nisit_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    vm.nisit_id = doc.data().nisit_id
                    vm.nisit_name = doc.data().nisit_name
                    vm.subject_name = doc.data().subject_name
                    vm.subject_name2 = doc.data().subject_name2
                    vm.subject_name3 = doc.data().subject_name3
                    vm.subject_name4 = doc.data().subject_name4
                    vm.subject_name5 = doc.data().subject_name5
                    vm.subject_name6 = doc.data().subject_name6
                    vm.subject_name7 = doc.data().subject_name7
                    vm.subject_name8 = doc.data().subject_name8
                    vm.subject_name9 = doc.data().subject_name9
                })
            })
        })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData(){
            db.collection('nisitregister').where('nisit_id', '==', this.$route.params.nisit_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.nisit_id = doc.data().nisit_id
                    this.nisit_name = doc.data().nisit_name
                    this.subject_name2 = doc.data().subject_name2
                    this.subject_name3 = doc.data().subject_name3
                    this.subject_name4 = doc.data().subject_name4
                    this.subject_name5 = doc.data().subject_name5
                    this.subject_name6 = doc.data().subject_name6
                    this.subject_name7 = doc.data().subject_name7
                    this.subject_name8 = doc.data().subject_name8
                    this.subject_name9 = doc.data().subject_name9
                })
            })
        },
        deleteNisit(){
            if(confirm('Are you confirm?')){
               db.collection('nisitregister').where('nisit_id', '==', this.$route.params.nisit_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                    this.$router.push('/')
                })
            })
            }
        }
    }
}
</script>