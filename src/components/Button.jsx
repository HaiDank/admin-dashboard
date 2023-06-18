import React from 'react';

const Button = ({ customFunc, icon, disabled, children }) => {
	return (
		<>
			<button
				type='button'
				disabled={disabled}
				onClick={customFunc}
				className='relative rounded-2xl p-3 text-xl hover:bg-slate-400'
			>
				{icon} {children}
			</button>
		</>
	);
};

export default Button;
