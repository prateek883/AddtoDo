<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="user.key">
            <td>{{ user.name }}</td>
            <td>{{ user.deadline }}</td>
            <td>
              <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      Users: []
    };
  },
  created() {
    db.collection("users").onSnapshot(snapshotChange => {
      this.Users = [];
      snapshotChange.forEach(doc => {
        this.Users.push({
          key: doc.id,
          name: doc.data().name,
          deadline: doc.data().deadline
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>