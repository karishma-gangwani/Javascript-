const poll = {
  question: "what is your favorite programming language?",
  options: ["0: JS", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    typeof answer === "number" && answer < this.answers.length
      ? this.answers[answer]++
      : this.answers[answer];

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// 5, 2, 3 data
// using the call method to access the properties of the previous function and create a new this object.
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// string goes as the argument to the function. type = string since array is the default.

// How does the callback function that is within the addeventlistener get access to the header in the body element?
// the closure is necessary in how this code worked. the IIFE as soon as it gets invoked is gone and so is the header
// even though the environment in which the variable was created is gone the callback fn was able to access the variable header.
//the fn remembers the birthplace and all the variables within that environment where it was born.
// we can say that the header is in the backpack called closure.

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
