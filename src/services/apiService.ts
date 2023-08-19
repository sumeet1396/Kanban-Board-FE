import axios from 'axios';
import { GetType, PostType, PutType, PatchType, RemoveType } from '../types/type';



const get = async ({ url, params = {} }: GetType) => {
  return axios.get(url, { params });
};

const post = async ({ url, body = {}, params = {} }: PostType) => {
    return axios.post(url, body, { params: {} });
};

const put = async ({ url, body = {}, params = {} }: PutType) => {
  return axios.post(url, body, { params });
};

const patch = async ({ url, body = {}, params = {} }: PatchType) => {
  return axios.post(url, body, { params });
};

const remove = async ({ url, params = {} }: RemoveType) => {
  return axios.delete(url, { params });
};

export { get, post, put, patch, remove };