window.addEventListener("load", () => {
  const BASE_URL = "https://api.adelphi.edu/v1/departments/?format=json";
  let list1 = document.querySelector(".list");
  let total = document.querySelector(".total");
  let count = 0;
  const CallAPI = async Link => {
    try {
      const response = await axios({
        method: "GET",
        url: Link,
        headers: { "Access-Control-Allow-Origin": "*" },
      });

      const results = response.data.results;
      const Parent = [];
      results.map(ele => {
        if (ele.parent == null) {
          Parent.push(ele);
          count += 1;
          let listItem = document.createElement("li");
          let listItemID = document.createElement("div");
          let listItemActive = document.createElement("div");
          let listItemCode = document.createElement("div");
          let listItemEmail = document.createElement("div");
          let listItemParent = document.createElement("div");
          let listItemPlace = document.createElement("div");
          let listItemTitle = document.createElement("div");
          let listItemPhone = document.createElement("div");
          const id = ele.id;
          const active = ele.active;
          const code = ele.code;
          const email = ele.email;
          const parent = ele.parent;
          const place = ele.place;
          const title = ele.title;
          const phone = ele.phone;

          listItemID.append(`ID: ${id}`);
          listItem.append(listItemID);

          listItemActive.append(`Active: ${active}`);
          listItem.append(listItemActive);

          listItemCode.append(`Code: ${code}`);
          listItem.append(listItemCode);

          listItemEmail.append(`Email: ${email}`);
          listItem.append(listItemEmail);

          listItemParent.append(`Parent: ${parent}`);
          listItem.append(listItemParent);

          listItemPlace.append(`Place: ${place}`);
          listItem.append(listItemPlace);

          listItemTitle.append(`Title: ${title}`);
          listItem.append(listItemTitle);

          listItemPhone.append(`Phone: ${phone}`);
          listItem.append(listItemPhone);

          list1.append(listItem);
        }
      });

      if (response.data.next != null) CallAPI(response.data.next);

      total.innerHTML = `Number of results: ${count}`;
      return Parent;
    } catch (errors) {
      console.error(errors);
    }
  };

  CallAPI(BASE_URL);
});
