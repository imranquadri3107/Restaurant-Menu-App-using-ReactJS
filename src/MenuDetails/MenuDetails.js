import React, {Component} from 'react';

class MenuDetails extends Component {
    render(){
        // console.log(this.props.detailData);
        // console.log(this.props.menuCode);
        return(
            <div>
                <h3>Items in Category:({this.props.menuCode})</h3>
                <table border="1px black" cellPadding= "8px">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {this.props.detailData && this.props.detailData.map((data, indx) => 
                       <tbody key = {indx}>
                           <tr>
                            <td>{data.name}</td>
                            <td>{data.description}</td>
                        </tr>
                       </tbody> 
                    )}
                </table>
            </div>
            
        )
    }
}

export default MenuDetails;