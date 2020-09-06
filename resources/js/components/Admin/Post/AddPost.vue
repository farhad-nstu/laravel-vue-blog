<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid" >
          <div class="row">
            <div class="col-md-12">
              <div class="card shadow mb-4">

                <div class="card-header py-3">
                  <p class="text-center h3 text-primary font-weight-bold">New post</p>
                </div>
                <div class="card-body">
                  <form @submit.prevent="addPost" enctype="multipart/form-data">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label class="req">Name</label>
                          <input name="title" type="text" v-model="title" class="form-control" placeholder="Name" required />
                        </div>
                        <div class="form-group">
                          <label class="req">Short Details</label>
                          <input type="text" v-model="details" class="form-control" required />
                        </div>
                        <div class="form-group">
                          <label class="req">Category</label>
                          <select class="form-control" v-model="category_id" required>
                           <option><router-link to="/add-category">---Add new Category---</router-link></option>
                            <option v-for="(category, index) in categories" :key="category.name" :value="index">
                              {{ category.name }}
                            </option>
                          </select>
                        </div>
                        <div>
                          <button type="submit" class="btn btn-sm btn-success">Save</button>
                        </div>                      
                      </div>
                    </div>	
                  </form>
                </div>

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
  name: 'AddPost',
  components: {
  },
  data() {
    return {
      title: '',
      details: '',
      category_id: '',
      user_id: '',
      categories: {},
      
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {   
    var user_id = JSON.parse(localStorage.getItem("TTNetwork.user")).id; 
      axios({ method: "GET", url: "/api/posts" }).then(
        result => {
          this.categories = result.data.categories;
          console.log(this.categories);
        },
        error => {
          console.error(error);
        }
      );    
    },

    addPost() {
      axios.post("/api/posts" ,{
        user_id: JSON.parse(localStorage.getItem("TTNetwork.user")).id,
        title: this.title,
        details: this.details,
        category_id: this.category_id
      })
      .then(res => {
        this.$router.go(-1)
      })
      .catch(er => {
        console.log(err);
      });
		},

    newCategory(){

    },


  },
};
</script>
<style lang="scss" scoped></style>
