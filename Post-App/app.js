
document.querySelector('.footer button').addEventListener('click', () => {
    const email = document.querySelector('.footer input').value;
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      document.querySelector('.footer input').value = '';
    } else {
      alert('Please enter a valid email.');
    }
  });

  
const posts = [
    {
      title: "Powerful Trading Tools and Features for Experienced Investors",
      content: "Discover top tools that will enhance your trading experience...",
      author: "Jane Tucker",
      readTime: "7 min read",
      category: "Finance",
    },
    {
      title: "Master JavaScript: 10 Essential Tips Every Developer Must Know",
      content: "Learn the secrets to mastering JavaScript with these 10 tips...",
      author: "Henry Owen",
      readTime: "4 min read",
      category: "Technology",
    },
    {
      title: "The Future of AI in Everyday Life",
      content: "Explore how AI is transforming industries and daily life...",
      author: "Samantha Clark",
      readTime: "5 min read",
      category: "AI",
    },
    {
      title: "Creative Design Trends for 2024",
      content: "Dive into the latest trends shaping the world of design...",
      author: "Emily Rose",
      readTime: "6 min read",
      category: "Design",
    },
  ];
  

  const postContainer = document.querySelector('.posts');
  const sidebarLinks = document.querySelectorAll('.sidebar li');
  const searchBar = document.querySelector('.search-bar');
  
 
  function renderPosts(filteredPosts) {
    postContainer.innerHTML = '<h1>Thoughts, Ideas, and Stories</h1>'; // Reset content with header
    if (filteredPosts.length === 0) {
      postContainer.innerHTML += "<p>No posts found!</p>";
      return;
    }
  
    filteredPosts.forEach((post) => {
      const postCard = document.createElement('div');
      postCard.classList.add('post-card');
      postCard.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>By ${post.author}</strong> - ${post.readTime}</p>
      `;
      postContainer.appendChild(postCard);
    });
  }
  

  function filterPostsByCategory(category) {
    const filteredPosts = category === "All" ? posts : posts.filter((post) => post.category === category);
    renderPosts(filteredPosts);
  }
 
  sidebarLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const category = e.target.textContent;
      filterPostsByCategory(category);
    });
  });
  
  
  searchBar.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchText) ||
        post.content.toLowerCase().includes(searchText)
    );
    renderPosts(filteredPosts);
  });
  

  renderPosts(posts);

  export{
    landingToLogin
  }
  let landingToLogin = () => {
    window.location.href("Post-app/login.html")
    console.log(landingToLogin);
    
      }
      let loginBtn = document.getElementById("loginBtn");
      loginBtn.addEventListener("click", landingToLogin);

  
  