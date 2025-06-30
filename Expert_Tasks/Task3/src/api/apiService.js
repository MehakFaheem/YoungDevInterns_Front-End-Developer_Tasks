// src/api/apiService.js

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class ApiService {
  // Generic fetch method with error handling
  async fetchData(endpoint, options = {}) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Get all posts
  async getPosts() {
    return this.fetchData('/posts');
  }

  // Get single post
  async getPost(id) {
    return this.fetchData(`/posts/${id}`);
  }

  // Get users
  async getUsers() {
    return this.fetchData('/users');
  }

  // Get user by ID
  async getUser(id) {
    return this.fetchData(`/users/${id}`);
  }

  // Search posts
  async searchPosts(query) {
    const posts = await this.getPosts();
    return posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Create new post
  async createPost(postData) {
    return this.fetchData('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }
}

export default new ApiService();