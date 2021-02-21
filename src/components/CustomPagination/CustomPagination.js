import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./CustomPagination.css";

const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

const CustomPagination = (props) => {

    const handlePageChange = (event) => {
        props.setPage(event.target.textContent);
    };

    return (
        <div className="CustomPagination">
            <ThemeProvider theme={darkTheme}>
            <Pagination count={props.pageCount || 1} color="secondary" onChange={handlePageChange}/>
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;