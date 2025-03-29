module.exports = class API {
    static async fetchAllPost(req, res){
       res.send('Hello from API') 
    }
    static async fetchPostByID(req, res){
        res.send('Fetch post by ID') 
     }
     static async createPost(req, res){
        res.send('Creat Post') 
     }
     static async updatePost(req, res){
        res.send('Update Post') 
     }
     static async deletePost(req, res){
        res.send('Delete Post') 
     }
}