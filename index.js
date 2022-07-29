fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const cards = data.map((card) => {
      return `
      <section class="section__posts>
        <article class="card__blog>
          <p class="card__title"> World</p>
          <h1 class="card__post__title"> ${card.title} </h1>
          <p class="card__date"> Nov 12</p>
          <p class="card__text">${card.body} </p>
          <a href="#" class="card__continue>Continue Reading</a> 
        </article>
      </section>`
    });

    document.querySelector(".grid__container").innerHTML 
    = cards.join("");
  })
