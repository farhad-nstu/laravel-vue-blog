<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid">                
          <div class="row">
            <div class="col-md-12">
              <div class="card shadow mb-4">

                <div class="card-header py-3">
                  <div class="row">
                    <div class="col-10">
                        <p class="text-center h3 text-primary font-weight-bold">Posts</p>
                    </div>
                    <div class="col-2">
                      <router-link class="collapse-item float-right" to="/add-post"><button class="btn btn-sm btn-primary">Add new</button></router-link>
                    </div>
                  </div>
                </div>

                <div class="card-body">                 
                  <table class="table">
                    <thead>
                      <tr>
                        <th width="30%">Name</th>
                        <th width="20%">Details</th>
                        <th width="25%">Category</th>
                        <th width="20%">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="post in posts" v-bind:key="post.id">
                        <td>{{ post.title }}</td>
                        <td>{{ post.details }}</td>
                        <td>{{ post.category.name }}</td>
                        <td>
                          <router-link :to="`/edit-post/${post.id}`" class="btn">
                            Edit
                          </router-link>
                          <button class="btn" @click="delete_data(post.id)">
							Delete                       
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- <pagination :data="organizations" @pagination-change-page="get_data"></pagination> -->
                </div>

                <!-- Modal -->
<!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Posts',
  components: {

  },
  data() {
    return {
      posts: {},
    };
  },

  mounted() {
    this.get_data();
  },

  methods: {

    get_data() {

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('TTNetwork.jwt')     
      axios({ method: "GET", url: "/api/posts" }).then(
        result => {
          this.posts = result.data.posts;
          // console.log(this.posts);
        },
        error => {
          console.error(error);
        }
      );
    },

    delete_data(id) {
      axios.delete(`/api/posts/${id}`)
        .then(res => {
          this.get_data();
          // toast.fire({
          //   icon: "info",
          //   title: "Deleted!"
          // });
        })
        // .catch(err => {
        //   console.log(err);
        // });
    },

  }
};
</script>

<style lang="scss" scoped></style>
