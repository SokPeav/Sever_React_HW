import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
export default class FetchArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isDel: false
    };
  }
  isUpdate = false;
  getData() {
    axios
      .get("http://www.api-ams.me/v1/api/articles?page=1&limit=15")
      .then(re => {
        this.setState({
          data: re.data.DATA
        });
        console.log(re.data.DATA);
      });
  }
  componentDidUpdate() {
    this.isUpdate = true;
    if (this.state.isDel) {
      this.getData();
    }
  }
  componentDidMount() {
    this.getData();
    if (this.props.isDel) {
      this.setState({
        isDel: this.props.isDel
      });
    }
  }

  deleteData = id => {
    swal({
      title: "Are you sure?",
      text:
        "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      showCancelButton: false,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal(this.props.onDelete(id), {
          icon: "success"
        });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center py-5 ">
          <button
            className="btn btn-lg btn-outline-primary "
            onClick={() => this.props.onAdd()}
          >
            Add Ariticle
          </button>
        </div>

        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>DATE</th>
              <th>FUNCTON</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(per => (
              <tr key={per.ID}>
                <td>{per.ID}</td>
                <td>{per.TITLE}</td>
                <td>{per.DESCRIPTION}</td>
                <td>{per.CREATED_DATE}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.props.onEdit(per.ID)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.props.onView(per.ID)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteData(per.ID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
