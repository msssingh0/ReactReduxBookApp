export function selectBook(book){
    //selectBook is ActionCreater, it need to return  an action,
    // an object with a type property.
   return{
    type:'BOOK_SELECTED',
    payload: book
   };
}