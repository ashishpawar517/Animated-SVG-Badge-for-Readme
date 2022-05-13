const express = require("express");
const app = express();

app.get("/api/get-animated-text/:text?", (req, res) => {
  res.set({
    "Content-Type": "image/svg+xml",
  });

  var text = "code";
  if (req.params.text) text = req.params.text;

  res.send(
    `
    <svg width="100%" xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Open+Sans:800);
      .text {
      font: 14.5em/1 Open Sans, serif;
      text-transform: uppercase;
      fill: none;
      stroke-width: 6;
      stroke-linejoin: round;
      stroke-dasharray: 70 330;
      stroke-dashoffset: 0;
      -webkit-animation: stroke 6s infinite linear;
      animation: stroke 6s infinite linear;
      }
      .text:nth-child(5n + 1) {
      stroke: #f2385a;
      -webkit-animation-delay: -1.2s;
      animation-delay: -1.2s;
      }
      .text:nth-child(5n + 2) {
      stroke: #f5a503;
      -webkit-animation-delay: -2.4s;
      animation-delay: -2.4s;
      }
      .text:nth-child(5n + 3) {
      stroke: #e9f1df;
      -webkit-animation-delay: -3.6s;
      animation-delay: -3.6s;
      }
      .text:nth-child(5n + 4) {
      stroke: #56d9cd;
      -webkit-animation-delay: -4.8s;
      animation-delay: -4.8s;
      }
      .text:nth-child(5n + 5) {
      stroke: #3aa1bf;
      -webkit-animation-delay: -6s;
      animation-delay: -6s;
      }
      @-webkit-keyframes stroke {
      100% {
      stroke-dashoffset: -400;
      }
      }
      @keyframes stroke {
      100% {
      stroke-dashoffset: -400;
      }
      }
      svg {
      position: absolute;
      width: 100%;
      height: 100%;
      }
   </style>
   <text class="text"
      text-anchor="middle"
      x="50%"
      y="50%"
      dy=".35em"
      >
      ${text}
   </text>
   <text class="text"
      text-anchor="middle"
      x="50%"
      y="50%"
      dy=".35em"
      >
      ${text}
   </text>
   <text class="text"
      text-anchor="middle"
      x="50%"
      y="50%"
      dy=".35em"
      >
      ${text}
   </text>
   <text class="text"
      text-anchor="middle"
      x="50%"
      y="50%"
      dy=".35em"
      >
      ${text}
   </text>
   <text class="text"
      text-anchor="middle"
      x="50%"
      y="50%"
      dy=".35em"
      >
      ${text}
   </text>
</svg>
`
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started!");
});
