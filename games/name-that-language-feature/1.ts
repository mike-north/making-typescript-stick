export class AddressBook {
  lookup(fullName: string, cityName: string): any[]; // <-
  lookup(fullName: string, postalCode: number): any[]; // <-
  lookup(firstArg: string, secondArg: string | number): any[] {
    return [];
  }
}
