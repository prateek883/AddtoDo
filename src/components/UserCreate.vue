<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Title</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" id="name" class="form-control" placeholder="Type Text" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Deadline</label>
                     <div class="row">
                        <div class="col-md-12">
                             <date-picker v-model="user.deadline" :config="options" id="date1" placeholder="Choose Date" required></date-picker>
                        </div>
                    </div>
                </div>

                <br>
                <div class="form-group">
                    <button class="btn btn-outline-success btn-block">Submit</button>
                <br>
                    <button class="btn btn-outline-primary btn-block" @click="resetFields()">Clear</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                user: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('users').add(this.user).then(() => {
                    alert("User successfully created!");
                    this.user.name = ''
                    this.user.deadline = ''
                }).catch((error) => {
                    console.log(error);
                });
            },

            resetFields(){
                var name = document.getElementById('name');
                var date1 = document.getElementById('date1');
                name.value = "";
                date1.value = "";
            }
        }
    }
</script>

