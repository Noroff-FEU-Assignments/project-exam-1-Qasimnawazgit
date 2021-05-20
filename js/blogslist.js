const responseUrl = "https://re.seedtotree.info/wp-json/wp/v2/posts";

let posts_data = [];
let total_posts_sets = 0;
let current_counter_number = 0;
let posts_counter_start = 0;
let posts_counter_end = 0;
let posts_section = document.getElementsByTagName("section")[0];
let paginationRef = document.querySelector(".pagination");

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
    total_posts_sets = Math.ceil(posts_data.length / 6);
    current_counter_number = 0;
    posts_counter_start = current_counter_number;
    posts_counter_end = current_counter_number + 6;

    posts_section.innerHTML = populatePostsSection(
      posts_counter_start,
      posts_data,
      posts_counter_end
    );

    paginationRef.innerHTML = paginationShow(total_posts_sets);
  } catch (e) {
    console.log(e);
  }
}

fetchRes(responseUrl);

function populatePostsSection(start, data, end) {
  let section = ``;

  data.map((v, i) => {
    if (start <= i && i < end) {
      return (section += `<div class="card">
        <div class="card-image card-image-home">
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
  return section;
}

function page_back(pageNum) {
  if (
    pageNum > 0 &&
    pageNum <= total_posts_sets &&
    current_counter_number > 0 &&
    current_counter_number <= total_posts_sets
  ) {
    document.getElementsByClassName("carasoul_btn")[
      document.getElementsByClassName("carasoul_btn").length - 1
    ].style.display = "inline";

    if (current_counter_number < total_posts_sets) {
      document.getElementsByClassName("carasoul_btn")[
        current_counter_number
      ].style.borderTop = "none";
    }
    current_counter_number--;

    if (current_counter_number <= total_posts_sets) {
      document.getElementsByClassName("carasoul_btn")[
        current_counter_number
      ].style.borderTop = "0.2rem solid black";
    }
    posts_counter_end = posts_counter_start;
    posts_counter_start = posts_counter_start - 6;
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

function page_for(pageNum) {
  if (
    pageNum >= 0 &&
    pageNum < total_posts_sets &&
    current_counter_number >= 0 &&
    current_counter_number < total_posts_sets-1
  ) {
    document.getElementsByClassName("carasoul_btn")[0].style.display = "inline";
    document.getElementsByClassName("carasoul_btn")[
      current_counter_number
    ].style.borderTop = "none";

    current_counter_number++;
    if (current_counter_number < total_posts_sets) {
      document.getElementsByClassName("carasoul_btn")[
        current_counter_number
      ].style.borderTop = "0.2rem solid black";
    }

    posts_counter_start = posts_counter_start + 6;
    posts_counter_end = posts_counter_start + 6;
    posts_section.innerHTML = populatePostsSection(
      posts_counter_start,
      posts_data,
      posts_counter_end
    );
  } else {
    document.getElementsByClassName("carasoul_btn")[
      document.getElementsByClassName("carasoul_btn").length - 1
    ].style.display = "none";
    return;
  }
}

function paginationShow(totalPages) {
  let pag = ``;
  console.log(totalPages)
  for (let i = 1; i <= totalPages; i++) {
    if (i == 1) {
      pag += `<Button class='carasoul_btn'  onclick="page_back(${i})">Prev</Button>`;
    }
    if (i == totalPages) {
      pag += `<Button  class='carasoul_btn'  onclick="page_for(${current_counter_number})">Next</Button>`;
    } else {
      pag += `<Button  class='carasoul_btn'>${i}</Button>`;
    }
  }
  return pag;
}
