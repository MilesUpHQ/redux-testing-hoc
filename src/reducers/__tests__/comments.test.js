import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

it("handles actions of type save_comment", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles action with unknow type", () => {
  const action = {
    type: "UNKNOWN_ACTION",
    payload: "Something"
  };
  let newState = commentsReducer([], action);
  expect(newState).toEqual([]);
  newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
