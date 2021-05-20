let posts_data = [];

let posts_section = document.getElementsByTagName("section")[0];
let post_id = new URLSearchParams(window.location.search).get("id");

if (!post_id || post_id < 0 || post_id === "") {
  location.replace("blogslist.html");
  // return;
}
const responseUrl = `https://re.seedtotree.info/wp-json/wp/v2/posts?id=${post_id}`;

async function fetchRes(url) {
  try {
    let fetchResponse = await fetch(url);
    let response = await fetchResponse.json();
    let data = response;
    let dataArray = [];
    data.map((v, i) => {
      dataArray.push({
        title: v.title.rendered,
        image: `./img/${i + 1}.jpg`,
        description: v.content.rendered,
      });
    });
    posts_data = dataArray;
    
    posts_section.innerHTML += populatePostsSection(post_id, posts_data);
    
    document.getElementById("sidebar").innerHTML = recentposts(posts_data);

  } catch (e) {
    console.log(e);
  }
}

fetchRes(responseUrl);

function populatePostsSection(post_id, data) {
  let section = ``;

  data.map((v, i) => {
    if (post_id == i) {
      document.getElementsByTagName('title')[0].innerHTML =  `${v.title} | Flower Power`;
      return (section += `<div class="card">
        <div class="card-image">
          <a href="blogpost.html">
            <img src="${v.image}" alt="Card Image">
          </a>
        </div>

        <div class="card-description">
          <a href="blogpost.html">
            <h3>${v.title}</h3>
          </a>
          <p>${v.description}         
          </p>
        </div>
      </div>  

        <div id="comments-section">
          Comments Section
        </div>`);
    }
  });
  return section;
}

function recentposts(data) {
  let rposts = ``;
  rposts = ` <h3>Recent Posts</h3><hr />`;
  data.map((v, i) => {
    if (i > data.length - 5 && i < data.length) {
      return (rposts += `<div class="card">
          <div class="card-image">
            <img src="${v.image}" alt="Card Image">
          </div>
          <div class="card-description">
          <a href='./blogpost.html?id=${i}'>View</a>
           </div>
           </div>`);
    }
  });
  return rposts;
}

