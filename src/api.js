import uuidv1 from "uuid/v1";

const storage = {
  getList: () => {
    const list = window.localStorage.getItem("list");
    return list ? JSON.parse(list) : [];
  },
  updateList: list => window.localStorage.setItem("list", JSON.stringify(list)),
};

const getList = () =>
  new Promise(resolve => {
    setTimeout(() => {
      const list = storage.getList();

      resolve(list);
    }, 1000);
  });

const addItem = name =>
  new Promise(resolve => {
    const newItem = { id: uuidv1(), name };

    const newList = [...storage.getList(), newItem];

    storage.updateList(newList);

    setTimeout(() => {
      resolve(newList);
    }, 1000);
  });

const removeItem = id =>
  new Promise(resolve => {
    const newList = storage.getList().filter(item => id !== item.id);

    storage.updateList(newList);

    setTimeout(() => {
      resolve(newList);
    }, 1000);
  });

export { getList, addItem, removeItem };
