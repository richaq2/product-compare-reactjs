export const success = (messageApi) => {
  messageApi.open({
    type: "success",
    content: "Product added successfully!",
    duration: 1,
  });
};

export const error = (messageApi) => {
  messageApi.open({
    type: "error",
    content: "You cannot add more than 4 products",
  });
};
export const removed = (messageApi) => {
  messageApi.open({
    type: "warning",
    content: "Product removed successfully",
  });
};
