const BASE_URL = "https://api.adelphi.edu/v1/departments/?format=json";

const getBtn = document.getElementById("get-btn");

const getParent = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${BASE_URL}`,
      headers: { "Access-Control-Allow-Origin": "*" },
    });

    const Parent = response.data;

    console.log(`GET: Here's the list of Objects`, Parent);

    return Parent;
  } catch (errors) {
    console.error(errors);
  }
};

getBtn.addEventListener("click", getParent);
