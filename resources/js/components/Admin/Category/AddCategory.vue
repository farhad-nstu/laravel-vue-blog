<template>
  <div>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid" >
          <div class="row">
            <div class="col-md-12">
              <div class="card shadow mb-4">

                <div class="card-header py-3">
                  <p class="text-center h3 text-primary font-weight-bold">New Category</p>
                </div>
                <div class="card-body">
                  <form @submit.prevent="addCategory" enctype="multipart/form-data">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label class="req">Name</label>
                          <input name="name" type="text" v-model="name" class="form-control" placeholder="Name" required />
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
  name: 'AddCategory',
  components: {
  },
  data() {
    return {
      name: '',
      
    };
  },

  mounted() {
    // this.getData();
  },

  methods: {
    // getData() {   

    //   axios({ method: "GET", url: "/api/categories" }).then(
    //     result => {
    //       this.categories = result.data.categories;
    //       console.log(this.categories);
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   );    
    // },

    addCategory() {
      axios.post("/api/categories" ,{
        name: this.name,
      })
      .then(res => {
        this.$router.go(-1)
      })
      .catch(er => {
        console.log(err);
      });
		},			
  },
};
</script>
<style lang="scss" scoped></style>
