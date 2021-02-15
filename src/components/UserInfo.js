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
    this._api.getUserInfo().then(info => {
      this._nameElem.textContent = info.name;
      this._descElem.textContent = info.about;
      this._avatarElem.src = info.avatar;
    });
  }

  getUserInfo() {
    return {
      name: this._nameElem.textContent,
      desc: this._descElem.textContent
    };
  }

  setUserAvatar(link) {
    const oldLink = this._avatarElem.src;
    this._avatarElem.src = link
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
