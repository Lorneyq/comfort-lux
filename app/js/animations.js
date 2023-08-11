gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {

    gsap.from(".preview .title", {
        duration: 0.6,
        delay: 0.3,
        css: {
          height: 1,
        },
      });

    gsap.from(".preview img", {
        duration: 0.8,
        delay: 0.3,
        // ease: Power1.easeOut,
        ease: Back.easeOut.config(1.2),
        css: {
          height: 20,
          width: 1200,
        },
      }
      );

      gsap.from(".why-me__image:nth-child(1) img", {
        scrollTrigger: {
          trigger: ".why-me__images",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        duration: 0.6,
        delay: 0.1,
        css: {
          height: 300,
        },
      });

      gsap.from(".why-me__image:nth-child(2) img", {
        scrollTrigger: {
          trigger: ".why-me__images",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        duration: 0.6,
        delay: 0.1,
        css: {
          height: 250,
        },
      });

      gsap.from(".about-us .title", {
        scrollTrigger: {
          trigger: ".about-us .title",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        y: 100,
        autoAlpha: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.1,
      });

      gsap.from(".about-us__desc", {
        scrollTrigger: {
          trigger: ".about-us__desc",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        y: 70,
        autoAlpha: 0,
        ease: Back.easeOut.config(1.4),
        duration: 1.1,
      });

      gsap.from(".stages__image:nth-child(1) img", {
        scrollTrigger: {
          trigger: ".stages__images",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 180,
        },
      });

      gsap.from(".stages__image:nth-child(2) img", {
        scrollTrigger: {
          trigger: ".stages__images",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 350,
        },
      });

      gsap.from(".catalog__item:nth-child(1) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(1)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 350,
        },
      });

      gsap.from(".catalog__item:nth-child(2) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(2)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 350,
        },
      });

      gsap.from(".catalog__item:nth-child(3) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(3)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 350,
        },
      });

      gsap.from(".catalog__item:nth-child(4) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(4)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 250,
        },
      });

      gsap.from(".catalog__item:nth-child(5) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(5)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 300,
        },
      });

      gsap.from(".catalog__item:nth-child(6) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(6)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 300,
        },
      });

      gsap.from(".catalog__item:nth-child(7) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(7)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 300,
        },
      });

      gsap.from(".catalog__item:nth-child(8) img", {
        scrollTrigger: {
          trigger: ".catalog__item:nth-child(8)",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.9),
        duration: 1,
        delay: 0.1,
        css: {
          height: 300,
        },
      });

      gsap.from(".blockquote .title", {
        scrollTrigger: {
          trigger: ".blockquote",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        y: 120,
        ease: Back.easeOut.config(1.7),
        duration: 1.1,
      });

      gsap.from(".gallery__images:nth-child(2) img", {
        scrollTrigger: {
          trigger: ".gallery__images:nth-child(2) img",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.7),
        duration: 0.7,
        delay: 0.1,
        css: {
          width: 180,
        },
      });

      gsap.from(".gallery__images:nth-child(3) img", {
        scrollTrigger: {
          trigger: ".gallery__images:nth-child(3) img",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.7),
        duration: 0.7,
        delay: 0.1,
        css: {
          height: 180,
        },
      });

      gsap.from(".gallery__images:nth-child(4) img", {
        scrollTrigger: {
          trigger: ".gallery__images:nth-child(4) img",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.7),
        duration: 0.7,
        delay: 0.1,
        css: {
          height: 100,
        },
      });

      gsap.from(".gallery__images:nth-child(6) img", {
        scrollTrigger: {
          trigger: ".gallery__images:nth-child(6) img",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        scrub: true,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
        delay: 0.1,
        css: {
          width: 100,
        },
      });

      gsap.from(".request #anim", {
        scrollTrigger: {
          trigger: ".request__inner",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        y: 100,
        ease: Back.easeOut.config(1.5),
        delay: 0.1,
        duration: 0.7,
      });

      gsap.from(".request__subtitle", {
        scrollTrigger: {
          trigger: ".request__inner",
          end: "bottom bottom",
          toggleActions: "restart none none none",
        },
        y: 60,
        ease: Back.easeOut.config(1.2),
        delay: 0.1,
        duration: 0.6,
      });
})