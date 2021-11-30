class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    console.log(query);
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    console.log('oi2');
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('oi');
      handler();
    });
  }
}

export default new SearchView();
