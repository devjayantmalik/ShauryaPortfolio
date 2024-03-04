"use client";
import { Fragment, useEffect } from "react";

export const Audio: React.FC = () => {
  useEffect(() => {
    var audio1 = document.querySelectorAll<HTMLAudioElement>("#audio1");
    var audio2 = document.querySelectorAll<HTMLAudioElement>("#audio2");
    var hamburgers = document.querySelectorAll<HTMLDivElement>(
      ".trigger .hamburger"
    );
    if (hamburgers.length > 0) {
      hamburgers.forEach((hamburger) => {
        hamburger.addEventListener("click", function () {
          var element = this;

          if (element.classList.contains("is-active")) {
            audio1[0].play();
          } else {
            audio2[0].play();
          }
          return false;
        });
      });
    }
  }, []);

  return (
    <Fragment>
      <audio id="audio1">
        <source src="/audio/1.mp3" />
      </audio>
      <audio id="audio2">
        <source src="/audio/2.mp3" />
      </audio>
    </Fragment>
  );
};
