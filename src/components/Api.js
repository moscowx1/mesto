export default class Api {
  constructor(configs) {
    this._configs = configs;
  }

  _handleError(err) {
    console.log(err);
  }

  getCards() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._configs.group}/cards`, {
        headers: {
          authorization: this._configs.token,
        },
      })
      .then(res => res.json())
      .catch(this._handleError);
  }

  setUserAvatar(avatar) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._configs.group}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._configs.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(avatar)
    })
    .then(res => res.json())
    .catch(this._handleError);
  }

  setUserInfo(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._configs.group}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._configs.token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .catch(this._handleError);
  }

  getUserInfo() {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._configs.group}/users/me`, {
        headers: {
          authorization: this._configs.token,
        }
      })
      .then(res => res.json())
      .catch(this._handleError);
  }

  addCard(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._configs.group}/cards`, {
        headers: {
          authorization: this._configs.token,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .catch(this._handleError);
  }

  removeCard(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/${this._configs.group}/cards/${id}`, {
        headers: {
          authorization: this._configs.token,
        },
        method: "DELETE",
      })
      .then(res => res.json())
      .catch(this._handleError);
  }

  toggleCardLine(id, isLiked) {
    const method = isLiked ? "DELETE" : "PUT";

    return fetch(`https://mesto.nomoreparties.co/v1/${this._configs.group}/cards/likes/${id}`, {
        headers: {
          authorization: this._configs.token,
        },
        method: method,
      })
      .then(res => res.json())
      .catch(this._handleError);
  }
}
