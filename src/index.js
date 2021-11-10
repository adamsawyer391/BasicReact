import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const books = [
  {
    url: "https://cdn.mos.cms.futurecdn.net/ka5acHNs3trfycsfvB5aeY.jpg",
    title: "To the Stars",
    author: "Ted Mosby"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Entering_a_Lunar_Outpost.jpg",
    title: "Living On the Moon!",
    author: "Marshall Erickson"
  }
]

function BookList(){
  return (
    <div>
      {
        books.map((item, index) => {
          return (
            <section className="booklist">
              <Book url={item.url} title={item.title} author ={item.author} />
            </section>
          )
        })
      }
    </div>
  )
}

const Book = ({url, title, author}) => {
  // const { url, title, author } = props;
  return (
    <article className="book">
      <img 
        width="300px"
        height="300px"
        src={url}
        alt="" 
        style={{borderRadius: '10px'}}
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}


ReactDOM.render(
  <BookList />, document.getElementById('root')
)

