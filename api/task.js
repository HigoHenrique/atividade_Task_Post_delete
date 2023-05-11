import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  headers: {
    "X-Parse-Application-Id": "XlrTSfb8RAZHtEydqOa9B0HlZjmrKbI6RTHz2VvL",
    "X-Parse-REST-API-Key": "GFSH9rHPuurDCQ5BYMTotl0xdm8EFoT4mAvHNvBA",
  },
});

export const getTasks = () => instance.get("task").then((res) => res.data);

export const updateTask = (task) => {
  return instance.put(`/task/${task.objectId}`, task, {
    headers: { "Content-Type": "application/json" },
  });
};

export const createTask = (task) => {
  return instance.post("task", task, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deleteTask = (task) => {
 return instance.delete(`/task/${task.objectId}`);
};