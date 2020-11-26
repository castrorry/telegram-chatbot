import Axios from "axios";

export interface IURLShort {
  link: string;
  short: string;
}

const API = Axios.create({
  baseURL: 'https://is.gd'
});

export async function shortenAPI(link: string, customPath: string): Promise<IURLShort> {
  const { data } = await API.get('/create.php', {
    params: {
      format: 'json',
      url: link,
      shorturl: customPath
    }
  });
  return {
    link,
    short: data.shorturl
  };
}