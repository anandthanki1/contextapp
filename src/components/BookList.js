import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

class BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const { isLightTheme, dark, light } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" 
                style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>Identity</li>
                    <li style={{ background: theme.ui }}>Supermacy</li>
                    <li style={{ background: theme.ui }}>Ultimatum</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;