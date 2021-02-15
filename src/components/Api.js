export default class Api {
  constructor(auth, group) {
    this._token = "1dec268d-fa9a-4530-a017-5816c4c1f34f";
    this._group = "cohort-20";
  }

  sendRequest(path) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._group}/${path}`, {
        headers: {
          authorization: this._token,
        },
      })
      .then(res => res.json())
      .then(data => data)
      .catch(() => null);
  }

  getCards() {
    return this.sendRequest("cards");
  }

  getUserInfo() {
    return this.sendRequest("users/me");
  }
}
