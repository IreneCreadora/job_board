import axios from 'axios';
axios.defaults.baseURL = 'https://api.json-generator.com';

// "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"

export class JobsAPI {
  TOKEN = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

  async getJobsList() {
    const urlAXIOS = `/templates/ZM1r0eic3XEy/data?access_token=${this.TOKEN}`;

    const { data } = await axios.get(urlAXIOS);
    console.log(data);
    return data;
  }
  //   incrementPage() {
  //     this.#page += 1;
  //   }

  //   resetPage() {
  //     this.#page = 1;
  //   }
  //   calculateTotalPages(total) {
  //     this.#totalPages = Math.ceil(total / this.#perPage);
  //   }

  //   get isShowLoadMore() {
  //     return this.#page < this.#totalPages;
  //   }
}
