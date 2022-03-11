class Person {
  name: string;
  constructor(userId: string) {
    // Fetch user's name from an API endpoint
    fetch(`/api/user-info/${userId}`)
      .then((resp) => resp.json())
      .then((info) => {
        this.name = info.name; // set the user's name
      });
  }
}
