import axios from "axios";
export const fetchData = (fn) => {
  axios.get("http://www.dell-lee.com/react/api/demo.json").then((response) => {
    fn(response.data);
  });
};
export const fetchData2 = (fn) => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};
export const fetchData3 = (fn) => {
  return axios.get("http://www.dell-lee.com/react/api/demo2.json");
};

export const fetchData4 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};
export const fetchData5 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo4.json");
};
export const fetchData6 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};
export const fetchData7 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo4.json");
};
export const fetchData8 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo.json");
};
export const fetchData9 = () => {
  return axios.get("http://www.dell-lee.com/react/api/demo22.json");
};
