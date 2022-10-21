import axios from "axios";
import { GET_TRANSACTIONS, GET_PAYMENT_REQUEST, GET_PAYOUTS, GET_INVOICE, GET_PAYMENT_CONTRACT, GET_BANK_ACCOUNTS, DELETE_CONTACT, BLOCK_CONTACT, DELETE_CONTACT_REQUEST, BLOCK_CONTACT_REQUEST, TRANSACTION_LOADING, CONTACT_LOADING, PAYOUTS_LOADING, ACCEPT_CONTACT_REQUEST} from "../constants/index.js";
import { redirect } from "../../utils/Utils"
import { toast } from 'react-toastify';

export const getTransactions = (page) => async (dispatch) => {
  dispatch({type: TRANSACTION_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/list/?page=${page}&page_size=10`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const payments = response.data.results.map((ob) => ({
        from_name: ob?.from_customer,
        to_name: ob?.to_customer,
        amount: ob?.amount,
        status: ob?.status,
        from_image: ob?.from_customer_avatar,
        to_image: ob?.to_customer_avatar,
        dateAndTime: ob?.created_at,
        description: ob?.description
      }));
      const paymentsData = {
        payments: payments,
        count: response.data.count,
      }
      dispatch({
        type: GET_TRANSACTIONS,
        payload: paymentsData,
      });
      
      // toast.success("Transactions retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success "
      // })
    } else {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: [],
    });
  }
};

export const getPaymentRequest = () => async (dispatch) => {
  dispatch({type: TRANSACTION_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/request-payment/list/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const paymentrequest = response.data.results.map((ob) => ({
        id: ob?.id,
        from_name: ob?.from_customer,
        to_name: ob?.to_customer,
        amount: ob?.amount,
        status: ob?.status,
        from_image: ob?.from_customer_avatar,
        to_image: ob?.to_customer_avatar,
        dateAndTime: ob?.created_at
      }));

      const paymentrequestData = {
        paymentrequest: paymentrequest,
        count: response.data.count,
      }

      dispatch({
        type: GET_PAYMENT_REQUEST,
        payload: paymentrequestData,
      });
      
      // toast.success("Payment request retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success ",
      //   // progressStyle: {
      //   //   backgroundColor: "aquamarine",
      //   // }
      // })
    } else {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: [],
    });
  }
};

export const getPayouts = (page) => async (dispatch) => {
  dispatch({type: TRANSACTION_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/payout/?page=${page}&page_size=10`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from payouts api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const payouts = response.data.results.map((ob) => ({
        id: ob?.id,
        customer_bank_account: {
          bank_account:ob?.customer_bank_account?.account_name,
          account_number: ob?.customer_bank_account?.account_number,
        },
        amount: ob?.amount,
        status: ob?.status
      }));
      const payoutsData = {
        payouts: payouts,
        count: response.data.count,
      }
      dispatch({
        type: GET_PAYOUTS,
        payload: payoutsData,
      });
    } else {
      dispatch({
        type: GET_PAYOUTS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PAYOUTS,
      payload: [],
    });
  }
};

export const getBankAccounts = (page) => async (dispatch) => {
  dispatch({type: TRANSACTION_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/bank-accounts-list/?page=${page}&page_size=10`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from payouts api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const bankAccounts = response.data.results.map((ob) => ({
        bank: {
          name:ob?.bank?.name,
          image: ob?.bank?.logo_url,
        },
        account_name: ob?.account_name,
        account_number: ob?.account_number
      }));
      const bankAccountsData = {
        bankAccounts: bankAccounts,
        count: response.data.count,
      }
      dispatch({
        type: GET_BANK_ACCOUNTS,
        payload: bankAccountsData,
      });
      // toast.success("Bank accounts retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success "
      // })
    } else {
      dispatch({
        type: GET_BANK_ACCOUNTS,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_BANK_ACCOUNTS,
      payload: [],
    });
  }
};

export const getInvoice = (page) => async (dispatch) => {
  dispatch({type: TRANSACTION_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/invoice/?page=${page}&page_size=10`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from invoice api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const invoice = response.data.results.map((ob) => ({
        id: ob?.id,
        from_name: ob?.from_customer,
        to_name: ob?.to_customer,
        amount: ob?.amount,
        // items: ob?.items,
        items: {
          name: ob.items?.name,
          amount: ob.items?.amount,
          quantity: ob.items?.quantity
        },
        status: ob?.status,
        from_image: ob?.from_customer_avatar,
        to_image: ob?.to_customer_avatar,
        dueDate: ob?.due_date,
        invoiceDate: ob?.invoice_date,
        dateAndTime: ob?.created_at
        // bank: {
        //   name:ob?.bank?.name,
        //   image: ob?.bank?.logo_url,
        // },
        // account_name: ob?.account_name,
        // account_number: ob?.account_number
      }));
      const invoiceData = {
        invoice: invoice,
        count: response.data.count,
      }

      dispatch({
        type: GET_INVOICE,
        payload: invoiceData,
      });
      // toast.success("Invoice retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success "
      // })
    } else {
      dispatch({
        type: GET_INVOICE,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_INVOICE,
      payload: [],
    });
  }
};

export const getPaymentContract = () => async (dispatch) => {
  dispatch({type: TRANSACTION_LOADING})
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/transactions/payment-contract/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("accessToken")).refresh,
      },
    });

    // dispatch({type: CONTACT_LOADING})
    console.log(response.data.results, "data from payment contract api >>>>>>");

    if(response.status === 401){
      redirect("/");    
    }

    if (response.data?.results.length) {
      const paymentcontract = response.data.results.map((ob) => ({
        name: ob?.contractor,
        image: ob?.contractor_avatar,
        paymentDuration: ob?.payment_duration,
        startDate: ob?.start_date,
        endDate: ob?.end_date,
        amount: ob?.amount,
        status: ob?.status,
      }));
      dispatch({
        type: GET_PAYMENT_CONTRACT,
        payload: paymentcontract,
      });
      // toast.success("Payment contracts retrieved successfully", {
      //   type: toast.TYPE.PRIMARY,
      //   style: {
      //     backgroundColor: "#e4fbf5",
      //     borderColor: "#aef4e1",
      //     border: "1px solid #aef4e1",
      //     borderRadius: "4px",
      //     fontColor: '#19bc90',
      //     marginLeft: "-130px"
      //   },
      //   bodyClassName: "text-sm text-success "
      // })
    } else {
      dispatch({
        type: GET_PAYMENT_CONTRACT,
        payload: [],
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PAYMENT_CONTRACT,
      payload: [],
    });
  }
};