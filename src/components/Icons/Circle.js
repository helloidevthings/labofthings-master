import * as React from 'react';
import styled from '@emotion/styled';

const Styles = styled.span`
	${({ theme }) => theme.animations.bounce3}
	${({ theme }) => theme.animations.itemTo}
`;

const Circle = () => {
	return (
		<Styles>
			<svg
				className='item-to bounce-3'
				width={74}
				height={74}
				fill='none'
				stroke='var(--primary)'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx={37} cy={37} r={36} strokeWidth={2} />
			</svg>
		</Styles>
	);
};

export default Circle;
