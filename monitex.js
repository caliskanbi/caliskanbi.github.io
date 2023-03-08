// Define blog posts
const blogPosts = [
  {
    
    tags: ["b2c", "allrounder"],
    image: "facebook.jpeg",
    title: "Instagram",
    text: "Instagram ist eine der populärsten Plattformen weltweit.",
    link: "Learn More",
  },
  {
    
    title: "TikTok",
    tags: ["b2b", "niche"],
  },
  {
    
    title: "Facebook",
    tags: ["b2c", "social"],
  },
  {
    title: "TEST WITH ALL",
    tags: ["b2c", "b2b"]
  }
];

// Get DOM elements
const selectBtn1 = document.querySelector("#select-btn1"),
    selectBtn2 = document.querySelector("#select-btn2"),
    selectBtn3 = document.querySelector("#select-btn3"),
    items = document.querySelectorAll(".item"),
    blogPostsContainer = document.getElementById("blogPosts");

// Add event listener to toggle dropdown
selectBtn1.addEventListener("click", () => {
  selectBtn1.classList.toggle("open");
});
selectBtn2.addEventListener("click", () => {
  selectBtn2.classList.toggle("open");
});
selectBtn3.addEventListener("click", () => {
  selectBtn3.classList.toggle("open");
});
// Add event listener to filter blog posts
items.forEach((item) => {
  item.addEventListener("click", () => {
    // Toggle 'checked' class on selected item
    item.classList.toggle("checked");

    // Get all checked items
    const checkedItems = document.querySelectorAll(".checked");

    // Create an array of checked values
    const checkedValues = [];
    checkedItems.forEach((item) => {
      checkedValues.push(item.getAttribute("data-value"));
    });

    // Filter blog posts based on selected options
    const filteredPosts = blogPosts.filter((post) => {
      // Check if all selected tags are present in the post tags array
      return checkedValues.every((value) => post.tags.includes(value));
    });

    // Render filtered blog posts
    renderBlogPosts(filteredPosts);
  });
});

// Function to render blog posts
function renderBlogPosts(posts) {
  // Clear existing blog posts
  blogPostsContainer.innerHTML = "";



// David lösung
posts.forEach((post) => {
  const postElement = document.createElement("div");
  postElement.classList.add('content-div');

  postElement.innerHTML = `
  <p>${post.tags.join(", ")}</p>  
  <img>${post.image}</img>
  <h2>${post.title}</h2>
  <span>${post.text}</span> 
  <a>${post.link}</a>
  `;
  blogPostsContainer.appendChild(postElement);
  });
}

/* ACTIVE MENU */ 
const menu_introduction = document.getElementById('menu_introduction');
const menu_filters = document.getElementById('menu_filters');
const menu_content = document.getElementById('menu_content');
const menu_trends = document.getElementById('menu_trends');
const menu_tests = document.getElementById('menu_tests');


const introduction = document.getElementById('introduction');
const filters = document.getElementById('filters');
const content = document.getElementById('content');
const trends = document.getElementById('trends');
const channelTesting = document.getElementById('channel-testing');



menu_introduction.addEventListener('click', () => {
  introduction.classList.remove('hidden');
  filters.classList.add('hidden');
  content.classList.add('hidden');
  trends.classList.add('hidden');
  channelTesting.classList.add('hidden');

  menu_introduction.classList.add('active');
  menu_filters.classList.remove('active');
  menu_content.classList.remove('active');
  menu_trends.classList.remove('active');
  menu_tests.classList.remove('active');
});

menu_filters.addEventListener('click', () => {
  introduction.classList.add('hidden');
  filters.classList.remove('hidden');
  content.classList.add('hidden');
  trends.classList.add('hidden');
  channelTesting.classList.add('hidden');

  menu_introduction.classList.remove('active');
  menu_filters.classList.add('active');
  menu_content.classList.remove('active');
  menu_trends.classList.remove('active');
  menu_tests.classList.remove('active');
});

menu_content.addEventListener('click', () => {
  introduction.classList.add('hidden');
  content.classList.remove('hidden');
  filters.classList.add('hidden');
  trends.classList.add('hidden');
  channelTesting.classList.add('hidden');

  menu_introduction.classList.remove('active');
  menu_content.classList.add('active');
  menu_filters.classList.remove('active');
  menu_trends.classList.remove('active');
  menu_tests.classList.remove('active');
});

menu_trends.addEventListener('click', () => {
  introduction.classList.add('hidden');
  content.classList.add('hidden');
  filters.classList.add('hidden');
  trends.classList.remove('hidden');
  channelTesting.classList.add('hidden');

  menu_introduction.classList.remove('active');
  menu_content.classList.remove('active');
  menu_filters.classList.remove('active');
  menu_trends.classList.add('active');
  menu_tests.classList.remove('active');
});

menu_tests.addEventListener('click', () => {
  introduction.classList.add('hidden');
  content.classList.add('hidden');
  filters.classList.add('hidden');
  trends.classList.add('hidden');
  channelTesting.classList.remove('hidden');

  menu_introduction.classList.remove('active');
  menu_content.classList.remove('active');
  menu_filters.classList.remove('active');
  menu_trends.classList.remove('active');
  menu_tests.classList.add('active');
});







