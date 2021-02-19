export default class Api {
  constructor(auth, group) {
    this._token = "1dec268d-fa9a-4530-a017-5816c4c1f34f";
    this._group = "cohort-20";
  }

  _handleError(err) {
    console.log(err);
  }

  getCards() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._group}/cards`, {
        headers: {
          authorization: this._token,
        },
      })
      .then(res => res.json())
      .catch(this._handleError);
  }

  setUserAvatar(avatar) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._group}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(avatar)
    })
    .then(res => res.json())
    .catch(this._handleError);
  }

  setUserInfo(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._group}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(this._handleError);
  }

  getUserInfo() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._group}/users/me`, {
        headers: {
          authorization: this._token,
        }
      })
      .then(res => res.json())
      .catch(this._handleError);
  }

  addCard(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._group}/cards`, {
        headers: {
          authorization: this._token,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .catch(this._handleError);
  }
}
