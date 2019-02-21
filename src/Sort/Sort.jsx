import React, { Component } from 'react';
import { Button, Select, Input } from 'semantic-ui-react';
import './Sort.css';
import {connect} from 'react-redux';
import {sortData,skipSort} from '../redux/actions/sortAction'

class Sort extends Component {

    
    goToServerSort=()=>{
        if (this.props.sortBy) {
            // this.props.changeActivePage(2)
            this.props.sortData(this.props.activePage,this.props.sortBy)
        }
    }
  
    render() {
       
        return (
        <div className="sortStyle">
            <Input type='text' placeholder='Sort...' action >
                <Select compact options={this.props.options} defaultValue='userName' onChange = {this.props.showValue} />
                <Button type='submit' onClick={this.goToServerSort}>Sort</Button>
                <Button type='submit' onClick={this.props.skipSort}>Skip</Button>
            </Input>
        </div>
        );
    }
}

function MDTP (dispatch) {
    return {
        sortData: function(value, page) {
            dispatch(sortData(value,page))
        },
        skipSort: function(){
            dispatch(skipSort())
        } 
  }
  }
  
   export default connect(null, MDTP) (Sort);
