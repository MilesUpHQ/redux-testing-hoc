import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENT } from "./types";

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENT,
    payload: response
  };
};
