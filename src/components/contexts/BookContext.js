import React, { useState } from 'react';

export const BookContext = React.createContext();

function BookContextProvider(props) {
    const [books, setBooks] = useState([
        { title: 'Identity', id: 1},
        { title: 'Supremacy', id: 2},
        { title: 'Ultimatium', id: 3}
    ]);
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;