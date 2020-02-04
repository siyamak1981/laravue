<template>
    <div class="container" style="margin-left:250px;">
        <div class="row mt-5">
          <div class="col-md-11">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Users Table</h3>

                <div class="card-tools">
                    <button class="btn btn-success"  data-toggle="modal" data-target="#addNew"> Add New <i class="fas fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Registered At</th>
                        <th>Modify</th>
                  </tr>


                  <tr>

                    <td>.id</td>
                    <td>.name</td>
                    <td>.email</td>
                    <td>.type | upText</td>
                    <td>created_at | myDate</td>

                    <td>
                        <a href="#">
                            <i class="fa fa-edit blue"></i>
                        </a>
                        /
                        <a href="#">
                            <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                  </tr>
                </tbody></table>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                  
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>

        <div>
          
        </div>

    <!-- Modal -->
            <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addNewLabel">Add New</h5>
                    <h5 class="modal-title"  id="addNewLabel">Update User's Info</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                <div class="modal-body">
                     <div class="form-group">
                        <input type="text" name="name"
                            placeholder="Name"
                            class="form-control">
                      
                    </div>

                     <div class="form-group">
                        <input type="email" name="email"
                            placeholder="Email Address"
                            class="form-control">
                      
                    </div>

                     <div class="form-group">
                        <textarea  name="bio" id="bio"
                        placeholder="Short bio for user (Optional)"
                        class="form-control"></textarea>
                      
                    </div>


                    <div class="form-group">
                        <select name="type" id="type" class="form-control">
                            <option value="">Select User Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">Standard User</option>
                            <option value="author">Author</option>
                        </select>
                     
                    </div>

                    <div class="form-group">
                        <input type="password" name="password" id="password"
                        class="form-control">
                      
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button  type="submit" class="btn btn-success">Update</button>
                    <button  type="submit" class="btn btn-primary">Create</button>
                </div>

                </form>

                </div>
            </div>
            </div>
    </div>



</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>