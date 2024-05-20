import { action, makeAutoObservable, observable } from "mobx";
import RootStore from "../RootStore";
import { search } from "../../Service/allBookService";
import { IItems } from "../../types/apiresponse.interface";

export class SearchStore {
  rootStore: typeof RootStore;

  @observable searchText: string;
  @observable searchDataList: IItems[];
  @observable isLoading: boolean;
  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @action
  /**
   * Sets the search text input.
   * @param text - The text to set as the search input.
   */
  searchTextInput(text: string) {
    this.searchDataList = undefined;
    this.searchText = text;
    this.searchText = undefined;
  }

  @action
  /**
   * Resets the searchDataList by setting it to undefined.
   */
  resetSearchData() {
    this.searchDataList = undefined;
  }

  @action
  /**
   * Searches for a book using the provided search text.
   */
  searchBook(text: string) {
    this.isLoading = true;
    search(text)
      .then(
        action((response) => {
          this.searchDataList = response.data.items;
          this.isLoading = false;
        })
      )
      .catch(
        action((error) => {
          this.isLoading = false;
          console.log("error", error);
        })
      );
  }
}
