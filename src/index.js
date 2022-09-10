/* eslint-disable no-use-before-define */

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  displayMovie();
});

//   Home page
const movieApi = async () => {
  const fetchResult = await fetch('https://api.tvmaze.com/shows');
  const ShowResult = await fetchResult.json();
  return ShowResult.slice(2, 15);
};

window.onload = movieApi();

const contCount = (array) => array.length;

const displayMovie = async () => {
  const Movies = await movieApi();
  const fetchLikes = await fetchLikeApi();

  const movieLength = document.querySelector('.movie-number');
  movieLength.innerText = `Movies(${contCount(Movies)})`;

  Movies.forEach((card) => {
    const cardLikes = fetchLikes.find((like) => like.item_id === card.id);
    const { id } = card;

    let liveCount = +cardLikes?.likes;

    const Container = document.querySelector('.modal-container');
    const listItem = document.createElement('div');

    listItem.innerHTML = '';
    listItem.innerHTML = `<div>
                          <img src=${card.image.original} alt=${card.name}>
                        </div>
                        <a href="${card.officialSite}" class="movie-title">${card.name}</a>
                        <div class="movie-info">
                          <p>${card.weight}mb</p>
                          <i class="fa fa-heart"  aria-hidden="true"></i>
                          <p class = "totalLikes">${liveCount} likes</p>
                        </div>
                        <button id = ${id} class = "commentBtn">Comments</button>`;

    const likeBtn = listItem.querySelectorAll('.fa-heart');
    likeBtn.forEach((button) => {
      button.addEventListener('click', (btn) => {
        const liveCountElement = listItem.getElementsByClassName('totalLikes')[0];
        liveCount += 1;
        liveCountElement.innerHTML = `${liveCount} likes`;
        submitNewLike(id);
        btn.disabled = true;
        button.style.color = 'red';
      });
    });

    // cardUL.appendChild(cardLI);
    Container.appendChild(listItem);

    const totalLikes = document.querySelectorAll('.totalLikes');
    totalLikes.forEach((like) => {
      if (like.innerText === 'undefined likes') {
        like.innerText = '0 like';
      } else if (like.innerText === '1 likes') {
        like.innerText = '1 like';
      }
    });
  });
};
// likes
const tvId = 'MjgCDPvMKfBMbwFq4McF';

const fetchLikeApi = async () => {
  const getLikeResult = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvId}/likes`).then((res) => res.json());
  return getLikeResult;
};

const submitNewLike = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${tvId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
// popup

const postComments = async (id, name, com) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4va6c4ouZmpzSETsANV3/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: com,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComments = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4va6c4ouZmpzSETsANV3/comments?item_id=${id}`).then((res) => res.json());
  return response;
};

document.addEventListener('click', async (e) => {
  if (!e.target.matches('.commentBtn')) {
    return;
  }
  const { id } = e.target;
  const comList = await getComments(id);
  const MoveInfo = await getData(id);
  await display(MoveInfo, id, comList);
  const container = document.querySelector('.modal-container');
  container.style.display = 'none';

  displayCom(comList);
});

// class Popup {
const getData = async (id) => {
  const movieInfo = await fetch(`https://api.tvmaze.com/shows/${id}`).then((result) => result.json());
  return movieInfo;
};

const countComments = (number) => number.length;

const display = async (movieInfo, id, comList) => {
  const movie = await movieInfo;
  const array = await comList;
  const popup = document.querySelector('.popup');
  popup.innerHTML = `
      <div class="description">
      <button type="button" class="closeBtn">X</button>
        <div>
          <a href="${movie.network.officialSite}"><img src="${movie.image.medium}" class = "image" id = "movie-img" alt=""></a>
          <div class = "summary-tag">
          <h1>${movie.name}</h1>
          ${movie.summary}
        </div>
        <div>
        <h3 class = "class-heading"> All Comments (${countComments(array)})</h3>
        <ul class ="display-comments">
        </ul>
      </div>
            <div class ="form" >
            <h2> Add a comment </h2>
              <label for="fname">Name:</label><br>
              <input type="text" id="fname" name="fname" placeholder = "Enter your name"><br><br>
              <label for="comment">Comment:</label><br>
              <textarea name="comment" id="comment" cols="20" rows="3" placeholder = "Enter comment"></textarea>
              <button id = ${id} class= "submit" type="submit"> Submit</button>
            </div>
          
        </div>
        
      </div>
      
        
      </ul>`;

  const close = document.querySelector('.closeBtn');
  close.addEventListener('click', () => {
    document.querySelector('.modal-container').style.display = 'grid';
    document.querySelector('.popup').style.display = 'none';
  });
};

const displayCom = async (MoveInfo) => {
  const commentList = document.querySelector('.display-comments');
  commentList.innerHTML = '';
  const array = await MoveInfo;
  array.forEach((item) => {
    commentList.innerHTML += `<li class = "listCom">${item.username}: ${item.comment} <br> :${item.creation_date.slice(-5, -1)}</li>`;
  });
};

document.addEventListener('click', async (e) => {
  if (!e.target.matches('.submit')) {
    return;
  }
  e.preventDefault();
  const name = document.getElementById('fname').value;
  const com = document.getElementById('comment').value;
  const { id } = e.target;
  await postComments(id, name, com);
  const comList = await getComments(id);
  displayCom(comList);
});