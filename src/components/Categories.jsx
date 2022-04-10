import React, { useState } from 'react';

function Categories({ items, onClickItem }) {
	const [ active, setActive ] = useState(null);

	const onSelectItem = (index) => {
		setActive(index);
	};

	return (
		<div className="categories">
			<ul>
				<li className={active === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
					Все
				</li>
				{items &&
					items.map((name, index) => (
						<li
							className={active === index ? 'active' : ''}
							onClick={() => onSelectItem(index)}
							key={`${name}_${index}`}
						>
							{name}
						</li>
					))}
			</ul>
		</div>
	);
}

export default Categories;
