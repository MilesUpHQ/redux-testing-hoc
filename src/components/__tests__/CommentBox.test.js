import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import setupTest from "../../setupTest";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a textarea that user can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("emptied text area when form is submitted", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" }
  });
  wrapped.update();
  // expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
