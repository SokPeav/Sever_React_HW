import React, { Component } from "react";
import AddArticle from "../CRUD/AddArticle";
import FetchArticle from "../CRUD/FetchArticle";
import { Redirect } from "react-router-dom";
export default class AllAriticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      isUpdate: false,
      isView: false,
      isDelete: false,
      id: 0,
      article: {}
    };
  }
  onAdd = () => {
    this.setState({
      isAdd: true,
      isUpdate: false,
      article: {}
    });
  };
  onEdit = id => {
    fetch("http://www.api-ams.me/v1/api/articles/" + id)
      .then(re => re.json())
      .then(re => {
        this.setState({
          isAdd: true,
          isUpdate: true,
          article: {
            id: re.DATA.ID,
            title: re.DATA.TITLE,
            description: re.DATA.DESCRIPTION
          }
        });
      });
  };

  onView = id => {
    this.setState({
      isAdd: false,
      isUpdate: false,
      isDelete: false,
      isView: true,
      id: id
    });
  };
  onDelete = id => {
    fetch("http://www.api-ams.me/v1/api/articles/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json;charset=UTF-8" }
    })
      .then(re => re.json())
      .then(re => {
        this.setState({
          isAdd: false,
          isUpdate: false,
          isDelete: true
        });
      });
  };
  onSubmitArticle = article => {
    if (this.state.isAdd && this.state.isUpdate) {
      const Json = JSON.stringify({
        TITLE: article.title,
        DESCRIPTION: article.description
      });
      fetch("http://www.api-ams.me/v1/api/articles/" + article.id, {
        method: "PUT",
        headers: { "content-type": "application/json;charset=UTF-8" },
        body: Json
      })
        .then(re => re.json())
        .then(re => {
          this.setState({
            isAdd: false,
            isUpdate: false
          });
        });
    } else {
      const Json = JSON.stringify({
        TITLE: article.title,
        DESCRIPTION: article.description
      });
      fetch("http://www.api-ams.me/v1/api/articles", {
        method: "POST",
        headers: { "content-type": "application/json;charset=UTF-8" },
        body: Json
      })
        .then(re => re.json())
        .then(re => {
          this.setState({
            isAdd: false,
            isUpdate: false
          });
        });
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.isAdd ? (
          <AddArticle
            onSubmitArticle={this.onSubmitArticle}
            article={this.state.article}
          />
        ) : this.state.isView ? (
          <Redirect
            to={{
              pathname: "/detail/" + this.state.id,
              state: { id: this.state.id }
            }}
          />
        ) : this.state.isDelete ? (
          <FetchArticle
            isDel={"true"}
            onAdd={this.onAdd}
            onEdit={this.onEdit}
            onView={this.onView}
            onDelete={this.onDelete}
          ></FetchArticle>
        ) : (
          <FetchArticle
            isDel={"false"}
            onAdd={this.onAdd}
            onEdit={this.onEdit}
            onView={this.onView}
            onDelete={this.onDelete}
          ></FetchArticle>
        )}
      </div>
    );
  }
}
