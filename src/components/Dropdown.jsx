import React, { useState } from "react";

const Dropdown = ({ label, items }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative inline-block text-left mb-[1rem]">
			<div>
				<button
					onClick={toggleDropdown}
					className="inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-[1.4rem] font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					id="menu-button"
					aria-expanded={isOpen}
					aria-haspopup="true">
					{label}
					<svg
						className="-mr-1 ml-2 size-[2.5rem]"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true">
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<div
				className={`origin-top-right absolute right-[7rem] w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${
					isOpen ? "" : "hidden"
				}`}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex="-1">
				<div className="py-1" role="none">
					{items.map((item, index) => (
						<p
							className="text-gray-700 block px-4 py-2 text-[1.4rem]"
							role="menuitem"
							tabIndex="-1"
							key={index}>
							{item.label}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
