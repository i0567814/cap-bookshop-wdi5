module.exports = {
  /**
    * define actions for the page object
  */

  /**
   * define assertions for the page object
   */
  iClickOnCreateNetwork:async () => {
    iPressTheControl: async () => {
      await browser.asControl({
        selector: {
              id: "books::BooksList--fe::table::Books::LineItem::StandardAction::Create",
              interaction: {
                      idSuffix: "BDI-content"
              }
      }}).press();
  }
  }
}