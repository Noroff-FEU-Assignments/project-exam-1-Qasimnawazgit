const responseUrl = "https://re.seedtotree.info/wp-json/wp/v2/posts";
let posts_data = [];
let posts_section = document.getElementsByTagName("section");
let total_posts_sets = 0.0;
let current_counter_number = 0;
let posts_counter_start = 0;
let posts_counter_end = 0;

async function fetchRes(url) {
  try {
    let fetchResponse = await fetch(url);
    let response = await fetchResponse.json();
    let data = response;
    let dataArray = [];
    posts_section.innerHTML = "<h1>Fetching Blog Posts..</h2>";
    data.map((v, i) => {
      dataArray.push({
        title: v.title.rendered,
        image: `./img/${i+1}.jpg`,
        description: v.content.rendered,
      });
    });
    posts_data = dataArray;
    posts_section = document.getElementsByTagName("section")[0];
    total_posts_sets = Math.floor(posts_data.length / 3);
    current_counter_number = 0;
    posts_counter_start = current_counter_number;
    posts_counter_end = current_counter_number + 3;

    posts_section.innerHTML = populatePostsSection(
      posts_counter_start,
      posts_data,
      posts_counter_end
    );
  } catch (e) {
    console.log(e);
  }
}

fetchRes(responseUrl);

function populatePostsSection(start, data, end) {
 
  let section = ``;

  if (start > 0) {
    section = `<Button onclick='cara_back()' class='carasoul_btn'><</Button>`;
  }
  data.map((v, i) => {
    if (start <= i && i < end) {
      return (section += `<div class="card">
        <div class="card-image card-image-home ">
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
          <a href="blogpost.html?id=${i}" class="btn-readmore">Read more</a>
        </div>
      </div>`);
    }
  });
  if (end < data.length) {
    section += `<Button onclick="cara_for()" class='carasoul_btn'>></Button>`;
  }


  return section;
}

function cara_for(e) {
  if (
    current_counter_number >= 0 &&
    current_counter_number < total_posts_sets
  ) {
    current_counter_number++;
    posts_counter_start = posts_counter_start + 3;
    posts_counter_end = posts_counter_start + 3;
    posts_section.innerHTML = populatePostsSection(
      posts_counter_start,
      posts_data,
      posts_counter_end
    );
  } else {
    document.getElementsByClassName("carasoul_btn")[1].style.display = "none";
    return;
  }
}

function cara_back() {
  if (
    current_counter_number > 0 &&
    current_counter_number <= total_posts_sets
  ) {
    current_counter_number--;
    posts_counter_end = posts_counter_start;
    posts_counter_start = posts_counter_start - 3;
    posts_section.innerHTML = populatePostsSection(
      posts_counter_start,
      posts_data,
      posts_counter_end
    );
  } else {
    document.getElementsByClassName("carasoul_btn")[0].style.display = "none";
    return;
  }
}
