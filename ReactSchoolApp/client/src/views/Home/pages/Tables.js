import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";
import { authHeader } from "../../../helpers/auth-header";
import { Link } from 'react-router-dom';

class TablesPage extends Component 
{
  constructor(props) 
  {
    super(props);
    this.state = {
      users: []
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }
  componentWillMount() 
  {
    this.loadUserData();
  }

  loadUserData() 
  {
    fetch('http://127.0.0.1:3003/user/', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let data = response.data.docs;
        this.setState({ users: data })
      });
  }

  delete(id) {
    fetch('http://127.0.0.1:3003/user/' + id, { method: 'delete' }, this.requestOptions)
      .then(response => {
        this.props.history.push("/")
      });
  }


  render() 
  {
    const apis = this.state.users.map((item, i) => 
    {
      return <tr key={item._id}>
        <td className="ellipsis">{i + 1}</td>
        <td>{item.username}</td>
        <td className="ellipsis">{item.email}</td>
        <td>
          <div className="btn-toolbar button-center">

            <Link to={`/edit/${item._id}`} className="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, item._id)} className="btn btn-danger button-margin">Delete</button>
          </div>

        </td>
      </tr>
    });

    return 
    (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out mt-5">
        <div className="row">
          <div className="col-lg-12 mb-3 mt-2">
            <WidgetComponent header='General Item' className='shadow-01 mt-2' moreLink='#!' excerpt='When you create the new school, you should write more correctly.First of all,before click Add button,You have to check spells of text.'>
              <p className="col-lg-12 mb-3 mt-2">You can create new schools in this page. More and more schoools are crated in this page and you will see a lot of common datas through it.
              </p>
            </WidgetComponent>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mb-5 mt-5">
            <WidgetComponent header='User List table' className='shadow-01' excerpt='User List.'>
              <table className="table table-bordered mt-3">
                <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {apis}
                </tbody>
              </table>
            </WidgetComponent>
          </div>
        </div>

        <div className="row">
            <div className="col-lg-12  mt-5"></div>
        </div>
      </div>
    );
  }
}

export default TablesPage;
