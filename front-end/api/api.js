// TaskController.js
const server = "http://localhost:4000/todos";
export async function getAllTasks() {
  try {
    const response = await fetch(server);
    const data = await response.json(); // Assuming the response is JSON data
    return data;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array or handle the error accordingly
  }
}

export async function createTask(postData) {
  try {
    const response = await fetch(server, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was a problem with the POST request:", error);
  }
}

export async function patchTask(patchData, id) {
  console.log(id);
  try {
    const response = await fetch(server + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(patchData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was a problem with the PATCH request:", error);
  }
}

export async function deleteTask(id) {
  console.log(id);
  try {
    const response = await fetch(server + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was a problem with the delete  request:", error);
  }
}
