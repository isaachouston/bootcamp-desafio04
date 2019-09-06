import React, { Component } from "react";
import "./style.css";

import PostItem from "../PostItem/index";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Capitão America",
          avatar:
            "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Captain-America-icon.png"
        },
        date: "05 Set 2019",
        content:
          "Grande homem em um traje de armadura. Tire isso, e o que o Homem de ferro é?",
        comments: [
          {
            id: 2,
            author: {
              name: "Homem de Ferro Capitão America",
              avatar:
                "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Iron-Man-icon.png"
            },
            content: "Gênio, bilionário, playboy, filantropo."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Viúva Negra",
          avatar:
            " http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Black-Widow-icon.png "
        },
        date: "05 Set 2019",
        content: "Quem é mais forte, Hulk ou Thor?",
        comments: [
          {
            id: 4,
            author: {
              name: "Hulk",
              avatar:
                "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Hulk-icon.png"
            },
            content: "HULK ESMAGA!"
          },
          {
            id: 5,
            author: {
              name: "Thor",
              avatar:
                "http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Thor-icon.png"
            },
            content: "Sou Deus do Trovão, claro que sou mais forte."
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
