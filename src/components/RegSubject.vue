<template>
    <div id="reg-subject">
        <h3>ลงทะเบียนเรียนรายวิชา</h3>
        <div class="row">
            <form @submit.prevent="saveSubject" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="nisit_id" required>
                        <label>รหัสนิสิต</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="nisit_name" required>
                        <label>ชื่อ - นามสกุล</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name">
                        <label>รายวิชาที่ 1</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name2">
                        <label>รายวิชาที่ 2</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name3">
                        <label>รายวิชาที่ 3</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name4">
                        <label>รายวิชาที่ 4</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name5">
                        <label>รายวิชาที่ 5</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name6">
                        <label>รายวิชาที่ 6</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name7">
                        <label>รายวิชาที่ 7</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name8">
                        <label>รายวิชาที่ 8</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="subject_name9">
                        <label>รายวิชาที่ 9</label>
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
    name: 'reg-subject',
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
    methods: {
        saveSubject(){
            db.collection('nisitregister').add({
                nisit_id: this.nisit_id,
                nisit_name: this.nisit_name,
                subject_name: this.subject_name,
                subject_name2: this.subject_name2,
                subject_name3: this.subject_name3,
                subject_name4: this.subject_name4,
                subject_name5: this.subject_name5,
                subject_name6: this.subject_name6,
                subject_name7: this.subject_name7,
                subject_name8: this.subject_name8,
                subject_name9: this.subject_name9,
            })
            .then(docRef => this.$router.push('/'))
            .catch(error => console.log(err))
        }
    }
}
</script>