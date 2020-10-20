<template>
    <div id="new-nisit">
        <h3>เพิ่มข้อมูลนิสิต</h3>
        <div class="row">
            <form @submit.prevent="saveNisit" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="nisit_id" required>
                        <label>รหัสนิสิต</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="nisit_name" required>
                        <label>ชื่อ-นามสกุล</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="nisit_class" required>
                        <label>ชั้นปี</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="nisit_dept" required>
                        <label>สาขาวิชา</label>
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
    name: 'new-nisit',
    data(){
        return{
            nisit_id: null,
            nisit_name: null,
            nisit_class: null,
            nisit_dept: null
        }
    },
    methods: {
        saveNisit(){
            db.collection('nisits').add({
                nisit_id: this.nisit_id,
                nisit_name: this.nisit_name,
                nisit_class: this.nisit_class,
                nisit_dept: this.nisit_dept
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err))
        }
    }
}
</script>