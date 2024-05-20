import { action, makeAutoObservable, observable } from "mobx";
import RootStore from "../RootStore";
import { getAllBook } from "../../Service/allBookService";
import { IItems } from "../../types/apiresponse.interface";

export class AllBook {
  rootStore: typeof RootStore;

  @observable listAllBooks: IItems[] = [];
  @observable start: number = 0;
  @observable end: number = 10;
  @observable isLoading: boolean = true;
  @observable isAllBookLoaded: boolean = false;
  @observable isMoreBookLoading: boolean = false;
  @observable totalCount: number = 0;
  @observable setBookList: any;

  constructor(rootStore: typeof RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @action
  /**
   * Checks if more books can be loaded and triggers the loading process if conditions are met.
   */
  canLoadMoreBooks() {
    if (!this.isAllBookLoaded && !this.isLoading && this.end < 40) {
      this.end = this.end + 10;
      this.isMoreBookLoading = true;
      this.getAllBooks();
    }
  }

  @action
  /**
   * Fetches all books within a specified range and updates the list of all books.
   */
  getAllBooks() {
    getAllBook(this.start, this.end)
      .then(
        action((response: IItems) => {
          this.listAllBooks = [...this.listAllBooks, ...response.data.items];
          this.totalCount = this.listAllBooks.length;
          if (
            this.listAllBooks <= response.data.totalItems ||
            this.end === 40
          ) {
            this.isAllBookLoaded = true;
          }
          this.isMoreBookLoading = false;
          this.isLoading = false;
        })
      )
      .catch(
        action((error) => {
          console.log("error", error);
        })
      );
  }
}
