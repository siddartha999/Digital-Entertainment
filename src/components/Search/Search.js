import { TextField, ThemeProvider, createMuiTheme } from '@material-ui/core';
import React, {useState} from 'react';
import Shows from "../Shows/Shows";
import "./Search.css";

const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

const Search = () => {

    const [searchText, setSearchText] = useState("");

    /**
     * Function to handle the search-text change.
    */
    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div className="Search">
            <div className="Search-Textfield-container">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="outlined-search" label="Search" type="search" variant="outlined" className="Search-TextField"
                        onChange={handleTextChange}
                    />
                </ThemeProvider>
            </div>
            <div className="Search-content-container">
               {searchText && <Shows searchView searchText={searchText}/>}
            </div>
        </div>
    );
};

export default Search;
