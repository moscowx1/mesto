export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }){
    this._nameElem = document.querySelector(nameSelector);
    this._descElem = document.querySelector(descriptionSelector);

    this.getUserInfo = this.getUserInfo.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  getUserInfo() {
    return {
      name: this._nameElem.textContent,
      desc: this._descElem.textContent
    };
  }

  setUserInfo({ name, desc }) {
    this._nameElem.textContent = name;
    this._descElem.textContent = desc;
  }
}
