import React, {Component} from 'react'
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';


class BookList extends Component {

    renderList() {
        return this.props.books.map((book)=>{
            return(
                <li 
                key={book.title} 
                onClick = {()=> {this.props.selectBook(book)}}
                className="list-group-item">
                {book.title}
                </li>
            ) 
        });
    };

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    };
};

function mapStateToProps(state) {
    //whatever is returned will show up as props
    //inside of bookList

    return {
        books: state.books
    };
};

//anything returned fromt this function will end up as props
// on the BookList function
function mapDispatchToProps(dispatch) {
    //when ever select book is called the result should be passed to all of our reducer
    return bindActionCreators({ selectBook : selectBook}, dispatch);
}

//Promte booklits from a component to a container - it need to know 
//about this new dispatch  method, selectBook. Make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);