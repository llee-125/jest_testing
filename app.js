function sayThing(name) {
  return new Promise((resolve, reject) => {
    if (typeof name != "string") reject({ err: "Argument must be a string" });
    resolve(`Hello ${name}`);
  });
}

// let thing = "Dug??";

// console.log(thing);

// IMPORTANT TO KNOW!~
sayThing("class")
  .then((response) => {
    console.log(response);
    thing = "hello??";
    return sayThing("Donald");
  })
  .then((res) => console.log(res))
  .then(() => console.log("Promises are freaking great"))
  .catch((err) => console.log(err));

//   (async function () {
//   const message = await sayThing("Full stack Devs");
//   console.log("from global async: ", message);
// })();

const asyncMessage = async (me) => {
  try {
    const message = await sayThing(me);
    console.log("from inside async function:  ", message);
  } catch (err) {
    console.log(err);
  }
};

asyncMessage("Full stack Developers");

// console.log(thing);

// setTimeout(() => {
//   console.log(thing);
// }, 1000);
