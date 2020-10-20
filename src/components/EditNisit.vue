<template>
    <div id="edit-nisit">
        <h3>แก้ไขรายวิชาที่ลงทะเบียน</h3>
        <div class="row">
            <form @submit.prevent="updateNisitReg" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input disabled type="text" v-model="nisit_id" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input disabled type="text" v-model="nisit_name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name2">
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name3">
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name4">
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name5">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name6">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name7">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name8">

                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name9">
                        
                    </div>
                </div>


                <button type="submit" class="btn">บันทึก</button>
                <router-link to="/" class="btn red">ย้อนกลับ</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'edit-nisit',
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
        updateNisitReg(){
            db.collection('nisitregister').where('nisit_id', '==', this.$route.params.nisit_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        subject_name: this.subject_name,
                        subject_name2: this.subject_name2,
                        subject_name3: this.subject_name3,
                        subject_name4: this.subject_name4,
                        subject_name5: this.subject_name5,
                        subject_name6: this.subject_name6,
                        subject_name7: this.subject_name7,
                        subject_name8: this.subject_name8,
                        subject_name9: this.subject_name9
                    })
                    .then(() => {
                        this.$router.push({name: 'view-nisit', params: {nisit_id: this.nisit_id}})
                    })
                })
            })
        }
    }
}
</script>