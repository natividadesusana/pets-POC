export function notFoundError() {
  return {
    type: "NotFoundError",
    message: "Element was not found!",
  };
}
