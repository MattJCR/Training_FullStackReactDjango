import axion from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import axios from "axios";

//Get Leads
export const getLeads = () => (dispatch) => {
  axios
  .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log("actions/leads.js -> GET_LEADS: " + err));
};

//Delete Lead
export const deleteLead = (id) => (dispatch) => {
  axios
  .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log("actions/leads.js -> DELETE_LEAD: " + err));
};

// Add Lead
export const addLead = (lead) => (dispatch) => {
  axios
  .post("/api/leads/", lead)
    .then((res) => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => console.log("actions/leads.js -> ADD_LEAD: " + err));
};