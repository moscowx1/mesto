export default class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }, api) {
    this._nameElem = document.querySelector(nameSelector);
    this._descElem = document.querySelector(descriptionSelector);
    this._avatarElem = document.querySelector(avatarSelector);

    this._api = api;

    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  initProfile() {
    this._api.getUserInfo().then((info) => {
      this.info = info;
      this._nameElem.textContent = this.info.name;
      this._descElem.textContent = this.info.about;
      this._avatarElem.src = this.info.avatar;
    });
  }

  getUserInfo() {
    return this.info;
  }

  setUserAvatar(link) {
    const oldLink = this._avatarElem.src;
    this._avatarElem.src = link;
    this._avatarElem.addEventListener("error", () => {
      alert("Возникла ошибка");
      this._avatarElem.src = oldLink;
    });
  }

  setUserInfo({ name, desc }) {
    this._nameElem.textContent = name;
    this._descElem.textContent = desc;
  }
}
