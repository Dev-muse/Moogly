import React from 'react';

class SearchBar extends React.Component{

state= {
   term: ""
};

onFormSubmit = event =>{
   event.preventDefault();
   this.props.onSubmit(this.state.term);
}


render(){
   return ( 
            <div className="ui segment">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                  <div className="ui field">
                     <label>Image Search</label>
                     <input 
                      type="text" 
                      placeholder="Search Image"
                      value={this.state.term}
                     //  callback takes event value and inserts into state
                      onChange={e=>this.setState({term : e.target.value})} />
                  </div>  
               </form>
            </div>
   );

}

}

export default SearchBar;