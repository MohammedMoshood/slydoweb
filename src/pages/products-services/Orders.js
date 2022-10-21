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
  Button, Row, Col, DataTablePagination
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
import OrdersTable from "./Table";


const Orders = () => {
  const [sm, updateSm] = useState(false);

  const {orders, loading} = useSelector(state => state.slydocommerce)
  const dispatch = useDispatch()
  // const [filter,  setFilter] = useState({'page': 1, 'limit': 10})
  const total_row = Math.round(orders.count/ orders?.orders?.length)

  useEffect(() => {
    // dispatch(getOrders(1))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);


  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [pageOffset, setPageOffset] = useState(0);
  const [filteredTable, setFilteredTable] = useState(orders.orders);
  const [filteredValue, setFilteredValue] = useState(null);

  const handlePageClick = (event) => {
    console.log(event?.selected + 1, 'the event of pagination clicking')
    setPageOffset(event?.selected)
    // dispatch(getOrders(event?.selected + 1))
  };

  const filteredData = useMemo( () => {
    if(filteredValue === null) {
      // window.location.reload(false)
      return orders.orders
    }
    return orders.orders.filter(item => item.status === filteredValue )
    
  }, [filteredValue])
 
  const handleFilter = (filterValue ) => {
    const getOrder = orders.orders.filter(item => item.status )  
    if(filterValue !== getOrder) {
      window.location.reload()
    }else{
      setFilteredValue(filterValue)
      const delayDisplay = setTimeout(() => {
         handlePageClick({selected: 0})
       }, 1000)
       return () => clearTimeout(delayDisplay)
      }
    
   
    
    
    // const duplicateOrders = orders.orders
    // const filteredOrders = duplicateOrders.filter(order =>{
    //   return  order.status === filterValue
    // })
    //   console.log(filteredOrders, 'the filterOrders')
    //   setFilteredTable(filteredOrders)
  }
  console.log(orders.orders, 'the Orders')


  return (
    <React.Fragment>
      <Head title="Orders" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Orders
              </BlockTitle>
            </BlockHeadContent>
           
          </BlockBetween>
        </BlockHead>
        
        <PreviewCard style={{height: "300px"}}>
      
          <OrdersTable/>
      
         
          </PreviewCard>
      </Content>
    </React.Fragment>
  );
};
export default Orders;
