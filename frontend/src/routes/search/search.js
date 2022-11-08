import React, { useState, useEffect } from "react";
import "./search.css";
import { ThreeCircles } from "react-loader-spinner";
import DataTable, { defaultThemes } from "react-data-table-component";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, searchPost } from "../../redux/action/post.action";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countPerPage, setCountPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deletePost(id));
    setTimeout(() => {
      getPosts();
    }, 100);
  };

  const getPosts = (e) => {
    dispatch(searchPost(page, countPerPage, searchQuery));
  };

  useEffect(() => {
    getPosts();
  }, [page, countPerPage]);

  const columns = [
    {
      name: "SNo",
      cell: (row, index) => (page - 1) * countPerPage + (index + 1),
      width: "65px",
    },
    {
      name: "Post Title",
      selector: (row) => row?.title,
      sortable: true,
    },
    {
      name: "Post Created Date",
      selector: (row) => moment(row?.createdAt).format("DD-MM-YYYY"),
      sortable: true,
    },
    {
      name: "Actions",
      // width: "200px",
      cell: (row) => {
        return (
          <>
            <div>
              <Link to={`/post/view/${row?._id}`}>
                <FaEye />
              </Link>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/post/update/${row?._id}`,
                  state: row,
                }}
              >
                <FaPen />
              </Link>
            </div>
            <div>
              <div
                onClick={(e) => {
                  handleDelete(e, row?._id);
                }}
              >
                <MdDelete />
              </div>
            </div>
          </>
        );
      },
    },
  ];

  // Table Style
  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="search-bar-container">
        <input
          type="search"
          className="search-bar"
          placeholder="Search here..."
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className="search-button" onClick={(e) => getPosts(e)}>
          Search
        </button>
      </div>

      <div className="container-home-page">
        <div className="temporaray-container">
          <div className="container-content-table">
            <DataTable
              columns={columns}
              data={post?.search}
              customStyles={customStyles}
              style={{
                marginTop: "-3rem",
              }}
              progressPending={post?.loading}
              progressComponent={<ThreeCircles color="#334D52" height={30} width={30} />}
              highlightOnHover
              pagination
              paginationServer
              paginationTotalRows={post?.total}
              paginationPerPage={countPerPage}
              paginationRowsPerPageOptions={[10, 20, 25, 50, 100]}
              paginationDefaultPage={page}
              onChangePage={(page) => {
                setPage(page);
              }}
              onChangeRowsPerPage={(rowPerPage) => {
                setCountPerPage(rowPerPage);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
