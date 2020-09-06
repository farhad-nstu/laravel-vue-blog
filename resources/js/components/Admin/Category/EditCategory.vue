<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid" >
          <div class="row">
            <div class="col-md-12">
              <div class="card shadow mb-4">

                <div class="card-header py-3">
                  <p class="text-center h3 text-primary font-weight-bold">Edit Category</p>
                </div>
                <div class="card-body">
                  <form @submit.prevent="editCategory" enctype="multipart/form-data">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label class="req">Name</label>
                          <input name="name" type="text" v-model="name" class="form-control"/>
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
  name: 'EditCategory',
  components: {
  },
  data() {
    return {
      id:'',
      name: '',
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {   
    let category_id = window.location.href.split('/').pop(); 
      axios({ method: "GET", url: "/api/categories/"+category_id+"/edit" }).then(
        result => {
          let category = result.data.category;
          this.id = category.id;
          this.name = category.name;
        },
        error => {
          console.error(error);
        }
      );    
    },

    editCategory(){
      let category_id = window.location.href.split('/').pop(); 
      axios.put(`/api/categories/${category_id}`, {
        // user_id: JSON.parse(localStorage.getItem("TTNetwork.user")).id,
        name: this.name,
      })
      .then(res => {
        this.title = "";
        this.$router.go(-1);
      })
    },

  //   addPost() {
  //     axios.post("/api/posts" ,{
  //       user_id: JSON.parse(localStorage.getItem("TTNetwork.user")).id,
  //       title: this.title,
  //       details: this.details,
  //       category_id: this.category_id
  //     })
  //     .then(res => {
  //       this.$router.go(-1)
  //     })
  //     .catch(er => {
  //       console.log(err);
  //     });
		// },			
  },
};
</script>
<style lang="scss" scoped></style>
