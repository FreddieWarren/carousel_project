const CARDS = [
  {
    photo: "https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Harley Davidson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£13k",
    rating: 5
  },
  {
    photo: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Harley Davidson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£12k",
    rating: 5
  },
  {
    photo: "https://images.unsplash.com/photo-1558980664-2506fca6bfc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Harley Davidson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£11.5k",
    rating: 4
  },
  {
    photo: "https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    title: "Yamaha",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£8.7k",
    rating: 4.5
  },
  {
    photo: "https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    title: "Harley Davidson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£6.3k",
    rating: 4
  },
  {
    photo: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Ducati",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£11.5k",
    rating: 5
  }
]


let cards_container = document.querySelector(".cards-carousel");
let next = document.querySelector(".right-arrow");
let previous = document.querySelector(".left-arrow");
let seeAll = document.querySelector(".see");


if (cards_container){

  CARDS.forEach((card) => {
    cards_container.insertAdjacentHTML("beforeend",
      `<div class="card">
        <div class="image"> <img src=${card.photo} alt=""></div>
        <div><p class="title">${card.title}</p></div>
        <div><p class="description">${card.description}</p></div>
        <div><p class="price">${card.price}</p></div>
        <div><p class="rating">${card.rating}</p></div>
        </div>`)
  });

  // for (let i = 0; i < CARDS[0].rating; i++){
  //       console.log("PP")
  //   }

  if (next) {
    next.addEventListener('click', () => {
      cards_container.scrollLeft += 264.484;
    })
  }

  if (previous) {
    previous.addEventListener('click', () => {
      cards_container.scrollLeft +=  -264.484;
    })
  }

  let card = document.querySelectorAll(".card");

  if (seeAll) {
    seeAll.addEventListener('click', () => {
      cards_container.classList.toggle("wrap");
      card.forEach(x => x.classList.toggle("width-change"));
      next.classList.toggle("hidden");
      previous.classList.toggle("hidden");
    })
  }
}



