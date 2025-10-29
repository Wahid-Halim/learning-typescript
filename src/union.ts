let id: number | string;
id = 3939;
id = "aabbbccsl9292";

type Id = number | string;

const swapIdType = (id: Id): Id => {
  //can only use props and methods common to both number and string types
  // parseInt(id) --> not allowed

  return id;
};

swapIdType("10");
