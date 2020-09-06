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
                        <p class="text-center h3 text-primary font-weight-bold">Categories</p>
                    </div>
                    <div class="col-2">
                      <router-link class="collapse-item float-right" to="/add-category"><button class="btn btn-sm btn-primary">Add new</button></router-link>
                    </div>
                  </div>
                </div>

                <div class="card-body">                 
                  <table class="table">
                    <thead>
                      <tr>
                        <th width="30%">Name</th>
                        <th width="20%">Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="category in categories" v-bind:key="category.id">
                        <td>{{ category.name }}</td>                        
                        <td>
                          <router-link :to="`/edit-category/${category.id}`" class="btn">
                            Edit
                          </router-link>
                          <button class="btn" @click="delete_data(category.id)">
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

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

<script>
export default {
  name: 'Categories',
  components: {

  },
  data() {
    return {
      categories: {},
    };
  },

  mounted() {
    this.get_data();
  },

  methods: {

    get_data() {

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('TTNetwork.jwt')     
      axios({ method: "GET", url: "/api/categories" }).then(
        result => {
          this.categories = result.data.categories;
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
        })
    },

  }
};
</script>

<style lang="scss" scoped></style>
