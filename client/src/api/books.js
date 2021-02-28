import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/books");
  },
  // Gets the post with the given id
  getGoogleBooks: function(searchTerm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
  },
//   // Deletes the post with the given id
//   deletePost: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/books", postData);
  }
};
