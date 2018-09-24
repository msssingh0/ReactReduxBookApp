import React,{Component} from 'react'
import { connect } from 'react-redux';

class BookDetail extends Component{
    
    render(){
        if(!this.props.book){
            return <div>Please select a boook to see the details</div>
        }

        return(
            <div>
            <h1>BookDetail for the selected book is</h1>
            <div>{this.props.book.title}</div>
            </div>
        );
    };
};


//this state is application level state and it will map to props
//And can be accessed as this.props.exampleName
function mapStateToProps(state){
    return{
        book :  state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
