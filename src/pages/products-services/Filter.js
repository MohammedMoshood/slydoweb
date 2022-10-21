import React, {useState, useEffect, useMemo} from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockBetween,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  ReactDataTable,
  Icon,
  Button, Row, Col, DataTablePagination, RSelect
} from "../../slydo-components/Component";
// import DataTablePagination from "../../slydo-components/pagination/DataTablePagination";
import { Card, 
  // CardHeader, CardFooter, CardImg,
  // CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // CardLink,
  UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle
} from "reactstrap";
import ReactPaginate from 'react-paginate';
import { ordersTable, ordersData } from "./TableData";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../redux/actions/slydocommerce";
import ReactSelect from "react-select";


const Filter = ({handleStatusProps, handleSearchProps, handlePageCountProps}) => {
  const [sm, updateSm] = useState(false);
  const [search, setSearch] = useState(" ");
  const {orders, setOrders, loading} = useSelector(state => state.slydocommerce)
  const dispatch = useDispatch()
  // const [filter,  setFilter] = useState({'page': 1, 'limit': 10})
  const total_row = Math.round(orders.count/ orders?.orders?.length)

  const [searchText, setSearchText] = useState("");

  useEffect(() => { 
  const handleSearch = (event) => {
    handleSearchProps(search || " ")
    dispatch(getOrders(1, "", search, "", ""))
 }
  let timer = setTimeout(() => {
    if(search){
      handleSearch()
    }
  }, 1500);

  return () => clearTimeout(timer);
  }, [search, dispatch]);

 
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [pageOffset, setPageOffset] = useState(0);
  const [filteredTable, setFilteredTable] = useState(orders.orders);
  const [filteredValue, setFilteredValue] = useState(null);
  const [count, setCount] = useState();


   
  const handleFilter = (filterValue ) => {
    setFilteredValue(filterValue)
    handleStatusProps(filterValue)
    setPageOffset(0)
    dispatch(getOrders(1, filterValue === null ? "" : filterValue, "", ""))
  }

  const handlePageCount = (countValue) => {
    setCount(countValue)
    handlePageCountProps(countValue)
    setPageOffset(0)
    dispatch(getOrders(1, filteredValue === null ? "" : filteredValue, "", countValue))
  }
  
   

  console.log(orders.orders, 'the Orders')

  return (
        <BlockHead size="sm" >
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                <input
                  type="search"
                  value={search}
                  className="form-control form-control-md"
                  placeholder="Search by name"
                  onChange={((e)=>setSearch(e.target.value))}
                />
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="more-v" />
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown >
                        <DropdownToggle
                          color="transparent"
                          className="dropdown-toggle dropdown-indicator btn btn-outline-dark btn-white"
                        >
                          <Icon name="exchange-v" />&nbsp;&nbsp;Filter By Status
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                          <li>
                              <DropdownItem tag="a"  href="#dropdownitem"  onClick={()=>handleFilter("")}>
                                <span>All</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handleFilter("New Order")}>
                                <span>New Order</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handleFilter("Awaiting Payment")}>
                                <span>Awaiting Payment</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handleFilter("Canceled")}>
                                <span>Canceled</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handleFilter("Complete")}>
                                <span>Complete</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem  tag="a" href="#dropdownitem"  onClick={()=>handleFilter("On Hold")}>
                                <span>On Hold</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem  tag="a" href="#dropdownitem" onClick={()=>handleFilter("Pending")}>
                                <span>Pending</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handleFilter("Processing")}>
                                <span>Processing</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-item">
                      <UncontrolledDropdown >
                        <DropdownToggle
                          color="transparent"
                          className="dropdown-toggle dropdown-indicator btn btn-outline-primary btn-white"
                        >
                          <Icon name="file" />&nbsp;&nbsp;Show Page Count
                        </DropdownToggle>
                        <BlockHeadContent>
                          <DropdownMenu right>
                            <ul className="link-list-opt no-bdr">
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(5)}>
                                <span>5</span>
                              </DropdownItem>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(10)}>
                                <span>10</span>
                              </DropdownItem>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(20)}>
                                <span>20</span>
                              </DropdownItem>
                              <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(30)}>
                                <span>30</span>
                              </DropdownItem>
                            </ul>
                          </DropdownMenu>
                        </BlockHeadContent>
                      </UncontrolledDropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
            
          {/* page count dropdowm */}
        {/* <div className="toggle-wrap nk-block-tools-toggle">
          <ul className="nk-block-tools g-3">
            <li className="nk-block-tools-item">
              <UncontrolledDropdown >
                <DropdownToggle
                  color="transparent"
                  className="dropdown-toggle dropdown-indicator btn btn-outline-primary btn-white"
                >
                  <Icon name="exchange-v" />&nbsp;&nbsp;Page Count
                </DropdownToggle>
                <BlockHeadContent>
                  <DropdownMenu right>
                    <ul className="link-list-opt no-bdr">
                      <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(5)}>
                        <span>5</span>
                      </DropdownItem>
                      <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(10)}>
                        <span>10</span>
                      </DropdownItem>
                      <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(15)}>
                        <span>20</span>
                      </DropdownItem>
                      <DropdownItem tag="a" href="#dropdownitem" onClick={()=>handlePageCount(20)}>
                        <span>30</span>
                      </DropdownItem>
                    </ul>
                  </DropdownMenu>
                </BlockHeadContent>
              </UncontrolledDropdown>
            </li>
          </ul>
        </div> */}
      </BlockBetween>
    </BlockHead>
  );
};
export default Filter;
