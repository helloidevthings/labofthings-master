const theme = {
	color: {
		black: '#000000',
		white: '#ffffff',
		primary: '#c10230',
		ltRed: '#FF4545',
		red: '#ab022a',
		darkRed: '#2e0000',
		dark: '#1f1f1f',
		grayDark: '#383838',
		grayMed: '#4d4d4d',
		grayLt: '#a9a8a8',
		light: '#efefef',
		lightest: '#ededed',
	},
	boxShadow: {
		main: '0px 4px 8px 2px rgba(0, 0, 0, 0.16)',
	},
	gradients: {
		blackToRed: 'linear-gradient(#000000, #2e0000)',
		redToBlack: 'linear-gradient(#2e0000, #000000)',
		darkToGrayMd: 'linear-gradient(#1f1f1f,#4d4d4d)',
		blackToDark: 'linear-gradient(#020202, #1f1f1f)',
		lightToWhite: 'linear-gradient(to right, #efefef, white)',
		lightToTransparent:
			'linear-gradient(to right, rgb(239 239 239 / 59%), rgb(239 239 239 / 10%))',
		lightToTransparent180:
			'linear-gradient(to bottom, transparent, rgb(231 231 231 / 59%))',
	},

	breakpoints: {
		mobile: '375px',
		tablet: '768px',
		desktop: '1440px',
	},
	maxWidth: {
		container: '1000px',
		menu: '500px',
	},
	borderRadius: {
		subNavLink: '1em',
	},
	circle: {
		size: '2em',
	},

	animations: {
		fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0}
      to {opacity: 1}
    }

    `,
		itemTo: `
    .item-to {
    animation-duration: 10s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }`,

		bounce3: `  
			.bounce-3 {
			animation-name: bounce-3;
			animation-timing-function: ease; }
		
			@keyframes bounce-3 {
			0% {
			transform: translateY(0);
			}
			50% {
			transform: translateY(30px);
			}
			100% {
			transform: translateY(0);
			}
		}
  `,
		drawIn: `.draw-in {
	  stroke-dasharray: 1000;
	  stroke-dashoffset: 10;
	  animation: draw 15s ease-in-out alternate infinite;
   }

	@keyframes draw {
		from {
		stroke-dashoffset: 1000;
		}

		to {
		stroke-dashoffset: 0;
		}
	  }`,
	},
};
export default theme;
