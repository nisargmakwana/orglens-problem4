import React, { useState } from "react";
import Dropdown from "./Dropdown";

function Survey() {
	const dropdown1Items = [
		{ label: "Adventure activities" },
		{ label: "Shopping" },
		{ label: "Hiking" },
		{ label: "Gymnasium" },
	];
	const dropdown2Items = [
		{ label: "1 times a week" },
		{ label: "2 times a week" },
		{ label: "3 times a week" },
		{ label: "4 times a week" },
	];
	const dropdown3Items = [
		{ label: "Name" },
		{ label: "Name" },
		{ label: "Name" },
		{ label: "Name" },
	];

	return (
		<div className="bg-[url('/bg-1.jpg')] bg-center bg-no-repeat bg-cover h-screen grid place-content-center ">
			<div className="max-w-[80rem] h-[55rem] bg-slate-200 bg-opacity-90 custom-border-transparent relative">
				<div className="p-[2.5rem]">
					<h1 className="text-[3.4rem] text-center tracking-widest  text-[#0077b6] font-bold">
						QUESTION ONE
					</h1>
					<div className="mt-[3rem] text-[1.8rem] ">
						<p className="text-[#fb8500] text-[2.1rem] font-semibold text-center leading-[2.5rem]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
							sunt harum enim delectus. Praesentium ullam ducimus esse mollitia,
							laboriosam laudantium corporis
						</p>
						<div className="grid grid-cols-2  p-[2.5rem]">
							<div className="flex flex-col">
								<p className="font-semibold mb-[2rem]">Choose An Activity</p>
								<Dropdown label="select an activity" items={dropdown1Items} />
								<Dropdown label="select a name" items={dropdown3Items} />
							</div>
							<div className="flex flex-col">
								<p className="font-semibold mb-[2rem]">Choose Frequency</p>
								<Dropdown label="select frequency" items={dropdown2Items} />
								<Dropdown label="select frequency" items={dropdown2Items} />
							</div>

							<button className="absolute py-[1rem] px-[3rem] bg-[#0077b6] text-white tracking-widest rounded-[0.4rem] right-[5rem] bottom-[3rem] hover:bg-[#023e8a]">
								NEXT
							</button>
						</div>
						<div className="w-full text-center">
							<button className=" py-[1rem] px-[3rem] bg-[#0077b6] text-white tracking-widest rounded-[0.4rem] right-[5rem] bottom-[3rem] hover:bg-[#023e8a] text-[1.6rem]">
								ADD A NEW ACTIVITY
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Survey;
