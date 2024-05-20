// Type definition for a component with a RootStore property

import { AuthStore } from "./BookStore/authStore.store";
import { AllBook } from "./BookStore/bookStore.store";
import { SearchStore } from "./BookStore/search.store";

export type PropsWithStore<T> = T & {
  rootStore?: RootStore;
};

// RootStore class to manage and provide access to various stores

class RootStore {
  bookStore: AllBook;
  searchStore: SearchStore;
  authStore: AuthStore;
  stores: any[];
  // Constructor to initialize all stores

  constructor() {
    this.bookStore = new AllBook(this);
    this.searchStore = new SearchStore(this);
    this.authStore = new AuthStore(this);
    this.stores = [this.bookStore];
  }
}

// Exporting a new instance of RootStore
export default new RootStore();
