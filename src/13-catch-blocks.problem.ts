import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    /* return (e as Error).message;  not checking if E is an error but rather casting it as one / not ideal or best*/
    if (e instanceof SyntaxError){ // pretty similar to last one but actually checked the type of the event
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
