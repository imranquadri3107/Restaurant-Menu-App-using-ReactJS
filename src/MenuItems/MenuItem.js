import React from 'react';
import Axios from 'axios';
import MenuDetails from '../MenuDetails/MenuDetails';
import './menuItem.css';
class MenuItem extends React.Component{

    state = {
        menuCategory : [],
        menuDetails : {},
        showTable : false,
        menuCode : null
    }

    componentDidMount(){
        var url = 'https://stream-restaurant-menu-svc.herokuapp.com/category';
        Axios.get(url)
        .then((response)=>{
            console.log(response)
            this.setState({
                menuCategory : response.data
            })
        })   
    }

    getMenuDetails(code){
        console.log(code);
        var url = 'https://stream-restaurant-menu-svc.herokuapp.com/item?category='+code;
        console.log(url);
        Axios.get(url)
        .then((res)=>{
            console.log(res.data);
            this.setState({
                menuDetails : res.data,
                menuCode : code,
                showTable: true
                
            })
        })
        return this.state.menuDetails;
    }

    render(){
        // console.log(this.state.menuDetails);
        // console.log(this.state.menuCode);
        let details;
        if(this.state.showTable){
            details = (<div className = 'RightBlock'>
            <MenuDetails
                detailData = {this.state.menuDetails}
                menuCode = {this.state.menuCode}
            />
            </div>)
        }
        return(
          <div className = "container">
              <div className = "Left-Block">
              <h1>Menu Categories</h1>
              <p>Select the Category</p>
              {this.state.menuCategory.map((data, index)=>
                  <ul key = {index}>
                  <li className ='li-style'
                    onClick = {()=> this.getMenuDetails(data.short_name)}>
                    {data.name} - ({data.short_name})
                  </li>
                  </ul>
                  )}
              </div>
              <div  className = "Right-block">
              {details}
              </div>
          </div>
        );
    }
}

export default MenuItem;