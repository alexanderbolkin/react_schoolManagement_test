import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";

class WidgetsPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">
        <h3 className="fw-200 pb-3">Add SChool</h3>
        <div className="row">
          <div className="col-lg-4">
            <WidgetComponent header='Today' className='shadow-01 small' badge={{type:'danger',val:20,ico:'fa fa-level-up'}}>
              <div>
                <p className="h1">10 <span>schools</span></p>
                <p className="text-muted mt-2"> Today</p>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-4">
            <WidgetComponent header='This Week' className='shadow-01 widget-dark bg-danger small' badge={{type:'warning',val:20,ico:'fa fa-level-up'}}>
              <div>
                <p className="h1">54 <span>schools</span></p>
                <p className="text-muted mt-2">This Week</p>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-4">
            <WidgetComponent header='This Month' className='shadow-01 widget-dark bg-dark small' badge={{type:'secondary',val:20,ico:'fa fa-level-up'}}>
              <div>
                <p className="h1">654 <span>schools</span></p>
                <p className="text-muted mt-2">This Month</p>
              </div>
            </WidgetComponent>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Please Add New School' className='shadow-01 mb-4' excerpt='More schools can also be created with this page.'>
            <form>
              <div className="form-group">
                <label htmlFor="inputAddress" className="col-form-label">SchoolName</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Add School"/>
              </div>
              <button type="submit" className="btn btn-primary">Add </button>
              </form>
            </WidgetComponent>
          </div>
        </div>


      <h3 className="fw-200 pb-3 pt-3">Caution !</h3>
        <div className="row">
          <div className="col-lg-6">
            <WidgetComponent header='General Item' className='shadow-01' moreLink='#!' excerpt='When you create the new school, you should write more correctly.First of all,before click Add button,You have to check spells of text'>
              <p>
                You can create new schools in this page. More and more schoools are crated in this page and you will see a lot of common datas through it.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Special Item' className='shadow-01 widget-dark bg-dark' moreLink='#!' excerpt='After click Add button, before you want to see the other pages, you have to check the created school in above . 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
              <p>
                I hope that you can get more school and see more schools.
              </p>
            </WidgetComponent>
          </div>
        </div>
      </div> 
    );
  }
}

export default WidgetsPage;
