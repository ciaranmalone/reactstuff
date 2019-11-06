import React, { Component } from 'react';
import ConsItem from './ConsItem';
import PropTypes from 'prop-types';

class Items extends Component{
    render(){
        return this.props.items.map((item) => (
            <ConsItem key={item.id} item={item} 
            markComplete={this.props.markComplete}
            delItem={this.props.delItem}/>
        ));
    }  
}
Items.propTypes = {
    items: PropTypes.array.isRequired
}

export default Items;
