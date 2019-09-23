window.addEventListener("load", () =>
{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "royalblue",
        "lightcoral",
        "orangered",



    ];
    console.log(sounds);

    // Sound placement

      pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
          sounds[index].currentTime = 0;
          sounds[index].play();
          createBubble(index);
        });
      });

      //Create function that will make bubbles
      const createBubble = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });   
        };
    });