	
		//to keep the current page active
		for (var nk = window.location,
			o = $("#menu a").filter(function() {
				return this.href == nk;
			})
			.addClass("active")
			.parent()
			.addClass("active");;) {
		// console.log(o)
		if (!o.is("li")) break;
		o = o.parent()
			.addClass("mm-show")
			.parent()
			.addClass("active");
		}


		/* ---------------------------------------------
        Circle anmations
         --------------------------------------------- */
        const colors = ["#698cf09c", "#698cf0"];
        
        const numBalls =150;
        const balls = [];
        
        for (let i = 0; i < numBalls; i++) {
          let ball = document.createElement("div");
          ball.classList.add("ball");
          ball.style.background = colors[Math.floor(Math.random() * colors.length)];
          ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
          ball.style.top = `${Math.floor(Math.random() * 800)}vh`;
          ball.style.transform = `scale(${Math.random()})`;
          ball.style.width = `${Math.random()}em`;
          ball.style.height = ball.style.width;
          
          balls.push(ball);
          $('.circle-block').append(ball);
          
        }
        // Keyframes
        balls.forEach((el, i, ra) => {
          let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
          };
        
          let anim = el.animate(
            [
              { transform: "translate(0, 0)" },
              { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
              duration: (Math.random() + 1) * 2000, // random duration
              direction: "alternate",
              fill: "both",
              iterations: Infinity,
              easing: "ease-in-out"
            }
          );
        });
		